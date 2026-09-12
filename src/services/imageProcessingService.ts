/**
 * Image Processing & Quality Service
 * Validates, checks quality (brightness, blur, dimensions), and resizes photos on HTML5 Canvas.
 */

export interface ImageQualityReport {
  isValid: boolean;
  isUsable: boolean;
  width: number;
  height: number;
  aspectRatio: number;
  averageBrightness: number; // 0 to 255
  sharpnessScore: number;    // estimated edge gradient variance
  isDark: boolean;
  isOverexposed: boolean;
  isBlurry: boolean;
  guidanceTips: string[];
  errorMessage?: string;
}

export interface VisualFeatures {
  dominantColors: string[];
  dominantHueNames: string[];
  warmth: 'warm' | 'neutral' | 'cool';
  averageSaturation: number;
  textureDensity: 'smooth' | 'layered' | 'granular' | 'chunky';
  colorVariance: number;
}

const MAX_FILE_SIZE_BYTES = 15 * 1024 * 1024; // 15MB
const ALLOWED_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/heic',
  'image/heif',
  'image/avif',
  'image/gif'
];

/**
 * Validates file headers, MIME type, and size.
 */
export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: 'No image file provided.' };
  }

  if (file.size === 0) {
    return { valid: false, error: 'The selected file is empty (0 bytes).' };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      valid: false,
      error: `File is too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Maximum allowed size is 15MB.`
    };
  }

  const isMimeAllowed = ALLOWED_MIME_TYPES.some((type) => file.type.toLowerCase().includes(type.split('/')[1]));
  const isExtensionAllowed = /\.(jpe?g|png|webp|heic|heif|avif|gif)$/i.test(file.name);

  if (!isMimeAllowed && !isExtensionAllowed && !file.type.startsWith('image/')) {
    return {
      valid: false,
      error: 'Unsupported image format. Please upload a standard JPG, PNG, or WEBP photograph.'
    };
  }

  return { valid: true };
}

/**
 * Loads image into an HTMLImageElement safely
 */
export function loadImageElement(source: File | string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image into browser memory. The file may be corrupt.'));

    if (typeof source === 'string') {
      img.src = source;
    } else {
      const url = URL.createObjectURL(source);
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.src = url;
    }
  });
}

/**
 * Analyzes lighting, sharpness, dimensions and provides photographic guidance.
 */
export async function analyzeImageQuality(source: File | string): Promise<ImageQualityReport> {
  try {
    const img = await loadImageElement(source);
    const width = img.naturalWidth || img.width;
    const height = img.naturalHeight || img.height;
    const aspectRatio = width / (height || 1);

    const guidanceTips: string[] = [];

    // Check dimensions
    if (width < 240 || height < 240) {
      guidanceTips.push('Low image resolution. Move closer to the food for clearer identification.');
    }

    // Canvas sampling for luminance and sharpness (sample down to 160x160 for high performance)
    const sampleSize = 160;
    const canvas = document.createElement('canvas');
    canvas.width = sampleSize;
    canvas.height = sampleSize;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    if (!ctx) {
      return {
        isValid: true,
        isUsable: true,
        width,
        height,
        aspectRatio,
        averageBrightness: 128,
        sharpnessScore: 50,
        isDark: false,
        isOverexposed: false,
        isBlurry: false,
        guidanceTips
      };
    }

    ctx.drawImage(img, 0, 0, sampleSize, sampleSize);
    const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
    const data = imageData.data;

    let totalLuminance = 0;
    const grayscale = new Float32Array(sampleSize * sampleSize);

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // Standard perceived luminance formula (ITU-R BT.709)
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      totalLuminance += lum;
      grayscale[i / 4] = lum;
    }

    const averageBrightness = totalLuminance / (sampleSize * sampleSize);
    const isDark = averageBrightness < 48;
    const isOverexposed = averageBrightness > 222;

    if (isDark) {
      guidanceTips.push('The photo is quite dark. Turn on kitchen lights or use soft illumination for best results.');
    } else if (isOverexposed) {
      guidanceTips.push('Harsh overhead glare detected. Try angling your camera slightly away from direct reflections.');
    }

    // Fast discrete gradient variance calculation (sharpness proxy)
    let gradientSum = 0;
    let gradientCount = 0;

    for (let y = 1; y < sampleSize - 1; y += 2) {
      for (let x = 1; x < sampleSize - 1; x += 2) {
        const idx = y * sampleSize + x;
        const dx = grayscale[idx + 1] - grayscale[idx - 1];
        const dy = grayscale[idx + sampleSize] - grayscale[idx - sampleSize];
        gradientSum += Math.abs(dx) + Math.abs(dy);
        gradientCount++;
      }
    }

    const averageGradient = gradientSum / (gradientCount || 1);
    // Values under 7 generally correspond to heavy motion blur or completely out-of-focus shots
    const isBlurry = averageGradient < 7.5;

    if (isBlurry) {
      guidanceTips.push('The dish appears out of focus. Tap the screen to lock focus on the center of the plate.');
    }

    return {
      isValid: true,
      isUsable: !isDark && !isBlurry,
      width,
      height,
      aspectRatio,
      averageBrightness: Math.round(averageBrightness),
      sharpnessScore: Math.round(Math.min(100, averageGradient * 3.5)),
      isDark,
      isOverexposed,
      isBlurry,
      guidanceTips
    };
  } catch (err: any) {
    return {
      isValid: false,
      isUsable: false,
      width: 0,
      height: 0,
      aspectRatio: 1,
      averageBrightness: 0,
      sharpnessScore: 0,
      isDark: false,
      isOverexposed: false,
      isBlurry: false,
      guidanceTips: [],
      errorMessage: err?.message || 'Unable to process image.'
    };
  }
}

/**
 * Resizes and compresses image to a standardized resolution for API payload & localStorage.
 */
export async function resizeAndCompressImage(
  file: File,
  maxDimension: number = 1024,
  quality: number = 0.85
): Promise<{ base64: string; dataUrl: string; mimeType: string; width: number; height: number }> {
  const img = await loadImageElement(file);

  let targetWidth = img.naturalWidth || img.width;
  let targetHeight = img.naturalHeight || img.height;

  if (targetWidth > maxDimension || targetHeight > maxDimension) {
    if (targetWidth > targetHeight) {
      targetHeight = Math.round((targetHeight * maxDimension) / targetWidth);
      targetWidth = maxDimension;
    } else {
      targetWidth = Math.round((targetWidth * maxDimension) / targetHeight);
      targetHeight = maxDimension;
    }
  }

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context unavailable for image compression.');
  }

  // Draw scaled image with high quality smoothing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

  const dataUrl = canvas.toDataURL('image/jpeg', quality);
  const base64 = dataUrl.replace(/^data:image\/jpeg;base64,/, '');

  return {
    base64,
    dataUrl,
    mimeType: 'image/jpeg',
    width: targetWidth,
    height: targetHeight
  };
}

/**
 * Extracts dominant visual hues and color temperature from the image.
 */
export async function extractVisualFeatures(source: HTMLImageElement | File | string): Promise<VisualFeatures> {
  const img = source instanceof HTMLImageElement ? source : await loadImageElement(source);

  const sampleSize = 64;
  const canvas = document.createElement('canvas');
  canvas.width = sampleSize;
  canvas.height = sampleSize;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return {
      dominantColors: ['#C89B6D', '#8C3D2B', '#2D5A27'],
      dominantHueNames: ['golden', 'red', 'green'],
      warmth: 'warm',
      averageSaturation: 0.5,
      textureDensity: 'layered',
      colorVariance: 45
    };
  }

  ctx.drawImage(img, 0, 0, sampleSize, sampleSize);
  const data = ctx.getImageData(0, 0, sampleSize, sampleSize).data;

  let totalR = 0;
  let totalG = 0;
  let totalB = 0;
  let totalSat = 0;

  const colorBuckets: Record<string, number> = {
    golden: 0,
    amber: 0,
    red: 0,
    green: 0,
    brown: 0,
    white: 0,
    dark: 0
  };

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    totalR += r;
    totalG += g;
    totalB += b;

    const max = Math.max(r, g, b) / 255;
    const min = Math.min(r, g, b) / 255;
    const sat = max === 0 ? 0 : (max - min) / max;
    totalSat += sat;

    // Classify hue bucket
    if (max < 0.2) {
      colorBuckets.dark++;
    } else if (min > 0.85 && sat < 0.15) {
      colorBuckets.white++;
    } else if (r > g && g > b && sat > 0.25) {
      if (r > 180 && g > 130) colorBuckets.golden++;
      else colorBuckets.amber++;
    } else if (r > g && r > b) {
      colorBuckets.red++;
    } else if (g > r && g > b) {
      colorBuckets.green++;
    } else {
      colorBuckets.brown++;
    }
  }

  const pixelCount = data.length / 4;
  const avgR = totalR / pixelCount;
  const avgB = totalB / pixelCount;
  const avgSat = totalSat / pixelCount;

  const warmth = avgR > avgB * 1.15 ? 'warm' : avgB > avgR * 1.1 ? 'cool' : 'neutral';

  const sortedHues = Object.entries(colorBuckets)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([hue]) => hue);

  return {
    dominantColors: [
      `rgb(${Math.round(avgR)}, ${Math.round(totalG / pixelCount)}, ${Math.round(avgB)})`
    ],
    dominantHueNames: sortedHues,
    warmth,
    averageSaturation: Number(avgSat.toFixed(2)),
    textureDensity: avgSat > 0.4 ? 'layered' : 'chunky',
    colorVariance: Math.round(Math.abs(avgR - avgB))
  };
}
