import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Camera,
  X,
  Sparkles,
  AlertCircle,
  RefreshCw,
  CheckCircle,
  Search,
  Check,
  HelpCircle,
  Image as ImageIcon,
  Flame,
  ArrowRight,
  ShieldAlert,
  SlidersHorizontal
} from 'lucide-react';
import Layout from '../components/Layout';
import VisualScore from '../components/food/VisualScore';
import StarRating from '../components/food/StarRating';
import FoodSelectorModal from '../components/food/FoodSelectorModal';
import {
  analyzeFood,
  recalculateForUserConfirmedFood,
  ANALYSIS_STEPS,
  type AnalysisStep
} from '../services/aiAnalysisService';
import {
  validateImageFile,
  analyzeImageQuality,
  type ImageQualityReport
} from '../services/imageProcessingService';
import {
  getFoodReferenceByName,
  getFoodReferenceById,
  type FoodReference
} from '../services/foodReferenceService';
import type {
  AIAnalysisResult,
  AIAnalysisStatus,
  FoodRating,
  Cuisine,
  CandidateMatch
} from '../types/food';
import { addEntry } from '../services/journalService';
import { useNavigate, useLocation } from 'react-router-dom';

const CUISINES: Cuisine[] = [
  'Italian', 'Indian', 'Japanese', 'Mexican', 'American',
  'French', 'Thai', 'Chinese', 'Mediterranean', 'Middle Eastern',
  'Korean', 'Spanish', 'Greek', 'Vietnamese', 'Moroccan'
];

const QUICK_TAGS = [
  'PERFECT', 'CRISPY', 'CREAMY', 'TOO SPICY', 'TOO SALTY',
  'FRESH', 'DRY', 'RICH', 'LIGHT', 'WOULD ORDER AGAIN'
];

const INITIAL_RATING: FoodRating = {
  taste: 0, aroma: 0, texture: 0, presentation: 0, overall: 0,
};

export default function Analyze() {
  const navigate = useNavigate();
  const location = useLocation();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  // Upload & Image State
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [qualityReport, setQualityReport] = useState<ImageQualityReport | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  // Analysis Lifecycle
  const [status, setStatus] = useState<AIAnalysisStatus>('idle');
  const [progress, setProgress] = useState(0);
  const [statusLabel, setStatusLabel] = useState('');
  const [analysisError, setAnalysisError] = useState<string | null>(null);

  // AI Result & Confirmation State
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const [userConfirmedFood, setUserConfirmedFood] = useState<string>('');
  const [userConfirmedId, setUserConfirmedId] = useState<string | undefined>(undefined);
  const [userConfirmedCuisine, setUserConfirmedCuisine] = useState<Cuisine | string>('Italian');
  const [isAiCorrect, setIsAiCorrect] = useState<boolean | null>(null);
  const [wasUserCorrected, setWasUserCorrected] = useState<boolean>(false);
  const [isSelectorModalOpen, setIsSelectorModalOpen] = useState(false);

  // Human Experience Rating State
  const [rating, setRating] = useState<FoodRating>(INITIAL_RATING);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notes, setNotes] = useState('');
  const [saved, setSaved] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Preselected hint from router state (CookMode or FoodDetail)
  useEffect(() => {
    if (location.state?.preselectedFood) {
      setUserConfirmedFood(location.state.preselectedFood);
      if (location.state.cuisine) {
        setUserConfirmedCuisine(location.state.cuisine);
      }
    }
  }, [location.state]);

  // Handle image selection & quality analysis
  const handleFile = useCallback(async (f: File) => {
    setFileError(null);
    setAnalysisError(null);
    setResult(null);
    setIsAiCorrect(null);
    setWasUserCorrected(false);
    setStatus('idle');
    setProgress(0);
    setSaved(false);

    const validation = validateImageFile(f);
    if (!validation.valid) {
      setFileError(validation.error || 'Invalid image file.');
      return;
    }

    setFile(f);
    const objectUrl = URL.createObjectURL(f);
    setPreview(objectUrl);

    // Assess quality
    const quality = await analyzeImageQuality(f);
    setQualityReport(quality);
  }, []);

  const onFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) handleFile(f);
  };

  // Run AI food identification & visual presentation analysis
  const runAnalysis = async () => {
    if (!file) return;
    setResult(null);
    setAnalysisError(null);
    setStatus('reading');
    setProgress(15);
    setStatusLabel(ANALYSIS_STEPS[0].label);

    try {
      const res = await analyzeFood(file, (step) => {
        setStatus(step.status);
        setStatusLabel(step.label);
        setProgress(step.progress);
      }, location.state?.preselectedFood);

      setResult(res);
      setUserConfirmedFood(res.detectedFood);
      setUserConfirmedId(res.detectedFoodId);

      const ref = getFoodReferenceByName(res.detectedFood) || (res.detectedFoodId ? getFoodReferenceById(res.detectedFoodId) : undefined);
      if (ref) {
        setUserConfirmedCuisine(ref.cuisine);
      }
      setIsAiCorrect(null);
    } catch (err: any) {
      console.error('Analysis failed:', err);
      setStatus('error');
      setAnalysisError(
        err?.message || 'Unable to process image. You can still choose your dish manually from the catalog.'
      );
    }
  };

  // User confirmed the AI prediction
  const handleConfirmAi = () => {
    setIsAiCorrect(true);
    setWasUserCorrected(false);
  };

  // User rejected the AI prediction or selected another dish
  const handleRejectAi = () => {
    setIsAiCorrect(false);
    setIsSelectorModalOpen(true);
  };

  // Select a dish from candidate alternatives or manual selector
  const handleSelectCandidate = (candidate: CandidateMatch | FoodReference) => {
    const foodName = 'foodName' in candidate ? candidate.foodName : candidate.name;
    const foodId = 'foodId' in candidate ? candidate.foodId : candidate.id;
    const cuisine = candidate.cuisine;

    setUserConfirmedFood(foodName);
    setUserConfirmedId(foodId);
    setUserConfirmedCuisine(cuisine);
    setIsAiCorrect(foodName.toLowerCase() === result?.detectedFood.toLowerCase());
    setWasUserCorrected(foodName.toLowerCase() !== result?.detectedFood.toLowerCase());

    if (result) {
      const recalibrated = recalculateForUserConfirmedFood(result, foodName);
      setResult(recalibrated);
    }
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setQualityReport(null);
    setFileError(null);
    setAnalysisError(null);
    setResult(null);
    setUserConfirmedFood('');
    setUserConfirmedId(undefined);
    setIsAiCorrect(null);
    setWasUserCorrected(false);
    setStatus('idle');
    setProgress(0);
    setRating(INITIAL_RATING);
    setNotes('');
    setSaved(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (cameraInputRef.current) cameraInputRef.current.value = '';
  };

  const saveToJournal = () => {
    if (!userConfirmedFood && !result) return;

    addEntry({
      dishName: userConfirmedFood || result?.detectedFood || 'Delicious Dish',
      foodId: userConfirmedId || result?.detectedFoodId,
      cuisine: userConfirmedCuisine,
      image: preview ?? undefined,
      aiAnalysis: result ?? undefined,
      aiPrediction: result?.detectedFood,
      aiConfidence: result?.confidence,
      userCorrectedFood: wasUserCorrected ? userConfirmedFood : undefined,
      wasUserCorrected,
      rating,
      tags: selectedTags,
      notes: notes || undefined,
    });

    setSaved(true);
    setTimeout(() => navigate('/journal'), 1200);
  };

  const isAnalyzing = status !== 'idle' && status !== 'complete' && status !== 'error';

  // Sample dishes using verified local assets
  const sampleDishes = [
    { label: 'Biryani', image: '/food/hyderabadi-biryani.jpg', name: 'Hyderabadi Biryani' },
    { label: 'Carbonara', image: '/food/carbonara.jpg', name: 'Carbonara' },
    { label: 'Tacos', image: '/food/tacos.jpg', name: 'Tacos' },
    { label: 'Ramen', image: '/food/tonkatsu-ramen.jpg', name: 'Tonkatsu Ramen' }
  ];

  const loadSampleDish = async (sample: typeof sampleDishes[0]) => {
    try {
      const response = await fetch(sample.image);
      const blob = await response.blob();
      const sampleFile = new File([blob], `${sample.label.toLowerCase()}.jpg`, { type: 'image/jpeg' });
      handleFile(sampleFile);
    } catch (e) {
      console.error('Failed to load sample image:', e);
    }
  };

  return (
    <Layout>
      <div className="pt-24 pb-24 min-h-screen">
        <div className="page-container max-w-5xl">
          {/* Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="micro-caption text-accent font-bold uppercase tracking-wider">
                Visual Food Analyzer
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">189 Reference Cuisines</span>
            </div>
            <h1
              className="heading-editorial mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Analyze Your Dish
            </h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed text-sm sm:text-base">
              Photograph or upload any dish. Our AI cross-references your photo against our 189 authentic culinary reference database to detect the dish, evaluate visual plating & composition, and offer chef presentation guidance.
            </p>

            {/* Disclaimer pill */}
            <div className="mt-4 p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-2.5 max-w-2xl">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-950 dark:text-amber-200 leading-snug">
                <strong>Visual analysis only:</strong> The AI scores plating, visible texture, and composition from the photograph. Only you know how it tastes and smells — rate your sensory experience below.
              </p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* ── LEFT COLUMN: PHOTO CAPTURE & UPLOAD (5 cols) ── */}
            <div className="lg:col-span-5 space-y-4">
              {/* Drop / Preview Container */}
              <div
                ref={dropRef}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={onDrop}
                id="analyze-drop-zone"
                className={`relative rounded-3xl border-2 border-dashed transition-all duration-300 overflow-hidden bg-card/60 ${
                  isDragging
                    ? 'border-accent bg-accent/5 scale-[1.01]'
                    : preview
                    ? 'border-border'
                    : 'border-border hover:border-accent/40 hover:bg-muted/30'
                }`}
                style={{ minHeight: preview ? 'auto' : '300px' }}
              >
                {preview ? (
                  <div className="relative group">
                    <img
                      src={preview}
                      alt="Uploaded food"
                      className="w-full object-cover rounded-3xl"
                      style={{ maxHeight: '360px' }}
                    />

                    {/* Scanning radar overlay while analyzing */}
                    {isAnalyzing && (
                      <div className="absolute inset-0 rounded-3xl overflow-hidden bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
                        <div className="scan-line absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
                        {/* Corner Reticles */}
                        {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos) => (
                          <div
                            key={pos}
                            className={`absolute ${pos} w-6 h-6 border-2 border-accent`}
                            style={{
                              borderTopWidth: pos.includes('top') ? '3px' : '0',
                              borderBottomWidth: pos.includes('bottom') ? '3px' : '0',
                              borderLeftWidth: pos.includes('left') ? '3px' : '0',
                              borderRightWidth: pos.includes('right') ? '3px' : '0',
                            }}
                          />
                        ))}
                        <div className="p-3 px-5 rounded-full bg-black/75 border border-accent/40 text-accent text-xs font-bold shadow-lg flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                          <span>Analyzing Visual Features…</span>
                        </div>
                      </div>
                    )}

                    {/* Retake / Remove button */}
                    {!isAnalyzing && (
                      <button
                        onClick={reset}
                        id="analyze-remove-image"
                        className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white text-xs font-medium flex items-center gap-1.5 transition-all shadow-md backdrop-blur-sm"
                        aria-label="Retake photo"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Retake</span>
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="p-8 flex flex-col items-center justify-center text-center gap-5 min-h-[300px]">
                    <div className="w-16 h-16 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      <Camera className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <p className="font-bold text-sm text-foreground">Upload or Take a Food Photo</p>
                      <p className="text-xs text-muted-foreground">JPG, PNG, or WEBP up to 15MB</p>
                    </div>

                    {/* Primary Dual Actions: Mobile Camera & File Picker */}
                    <div className="flex flex-col sm:flex-row gap-2.5 w-full max-w-xs">
                      {/* Take Photo (Direct Mobile Camera) */}
                      <button
                        type="button"
                        id="btn-take-photo"
                        onClick={() => cameraInputRef.current?.click()}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-accent text-accent-foreground text-xs font-bold hover:bg-accent/90 shadow-sm active:scale-95 transition-all cursor-pointer"
                      >
                        <Camera className="w-4 h-4" />
                        Take Photo
                      </button>

                      {/* Browse Files */}
                      <button
                        type="button"
                        id="btn-browse-file"
                        onClick={() => fileInputRef.current?.click()}
                        className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-border bg-card text-foreground text-xs font-semibold hover:bg-muted active:scale-95 transition-all cursor-pointer"
                      >
                        <Upload className="w-4 h-4" />
                        Upload File
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Hidden file & camera inputs */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={onFileInput}
                className="hidden"
                id="analyze-file-input"
              />
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={onFileInput}
                className="hidden"
                id="analyze-camera-input"
              />

              {/* File validation error banner */}
              {fileError && (
                <div className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-start gap-2.5 text-xs text-rose-800 dark:text-rose-200">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <p>{fileError}</p>
                </div>
              )}

              {/* Image Quality Feedback Tips */}
              {qualityReport && qualityReport.guidanceTips.length > 0 && !result && (
                <div className="p-3.5 rounded-2xl bg-muted/50 border border-border space-y-1.5 text-xs">
                  <p className="font-bold text-foreground flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent" />
                    Photo Quality Tips
                  </p>
                  <ul className="space-y-1 text-muted-foreground text-[11px] list-disc list-inside">
                    {qualityReport.guidanceTips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sample Images Palette */}
              {!preview && (
                <div className="p-4 rounded-2xl bg-card border border-border space-y-2.5">
                  <p className="micro-caption text-muted-foreground">Or try a reference sample from our database:</p>
                  <div className="grid grid-cols-4 gap-2">
                    {sampleDishes.map((s) => (
                      <button
                        key={s.label}
                        type="button"
                        id={`sample-${s.label.toLowerCase()}`}
                        onClick={() => loadSampleDish(s)}
                        className="group relative rounded-xl overflow-hidden border border-border hover:border-accent aspect-square text-left transition-all"
                      >
                        <img
                          src={s.image}
                          alt={s.label}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-1.5">
                          <span className="text-white text-[10px] font-bold truncate">{s.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Analyze Button */}
              {preview && !result && (
                <button
                  type="button"
                  id="btn-run-analysis"
                  onClick={runAnalysis}
                  disabled={isAnalyzing}
                  className="w-full py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isAnalyzing ? (
                    <>
                      <span className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      {statusLabel || 'Analyzing Food…'}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      ANALYZE MY FOOD
                    </>
                  )}
                </button>
              )}

              {/* Truthful Progress Steps Sequence */}
              {isAnalyzing && (
                <div className="p-4 rounded-2xl bg-card border border-border space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{statusLabel}</span>
                    <span className="font-mono text-muted-foreground">{progress}%</span>
                  </div>

                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-accent to-emerald-500 rounded-full"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {ANALYSIS_STEPS.map((s) => {
                      const isDone = progress >= s.progress;
                      const isCurrent = status === s.status;
                      return (
                        <div
                          key={s.status}
                          className={`flex items-center gap-2 text-[11px] transition-colors ${
                            isCurrent
                              ? 'text-accent font-bold'
                              : isDone
                              ? 'text-foreground/70'
                              : 'text-muted-foreground/40'
                          }`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-accent animate-ping' : isDone ? 'bg-emerald-500' : 'bg-muted'}`} />
                          <span>{s.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT COLUMN: RESULTS & IDENTIFICATION (7 cols) ── */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {/* Empty State */}
                {!result && !isAnalyzing && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl border border-dashed border-border bg-card/30 text-muted-foreground min-h-[340px]"
                  >
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground/50">
                      <ImageIcon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-1">Awaiting Food Photo</h3>
                    <p className="text-xs max-w-sm leading-relaxed">
                      Upload or snap a photo on the left. The AI will identify the dish against our 189 reference foods and evaluate its visual presentation.
                    </p>
                  </motion.div>
                )}

                {/* Analysis Failure State */}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 rounded-3xl bg-rose-500/10 border border-rose-500/20 text-left space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <ShieldAlert className="w-6 h-6 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-sm text-rose-900 dark:text-rose-200">
                          We Couldn't Confidently Identify This Food
                        </h3>
                        <p className="text-xs text-rose-800/80 dark:text-rose-300 mt-1 leading-relaxed">
                          {analysisError || 'The photo may be too blurry, underexposed, or the dish is outside our 189 catalog entries.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
                      <button
                        type="button"
                        onClick={reset}
                        className="px-4 py-2.5 rounded-xl border border-border bg-card text-xs font-semibold hover:bg-muted transition-colors"
                      >
                        Try Another Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsSelectorModalOpen(true)}
                        className="px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Search className="w-3.5 h-3.5" />
                        Choose Food Manually
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Success Results State */}
                {result && (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    {/* ── CARD 1: FOOD DETECTION & REFERENCE COMPARISON ── */}
                    <div className="p-6 rounded-3xl border border-border bg-card shadow-xs space-y-5">
                      <div className="flex items-center justify-between gap-3 border-b border-border/60 pb-4">
                        <div>
                          <p className="micro-caption text-accent font-bold uppercase tracking-wider">
                            Food Detection Result
                          </p>
                          <h2
                            className="text-2xl sm:text-3xl font-bold text-foreground mt-0.5"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                          >
                            {userConfirmedFood || result.detectedFood}
                          </h2>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Cuisine: <strong className="text-foreground">{userConfirmedCuisine}</strong>
                          </p>
                        </div>

                        {/* Confidence Badge */}
                        <div className="text-right shrink-0">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border ${
                              result.confidence >= 80
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                                : result.confidence >= 55
                                ? 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
                                : 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20'
                            }`}
                          >
                            {result.confidence}% {result.confidenceTier === 'HIGH CONFIDENCE' ? 'High' : result.confidenceTier === 'MEDIUM CONFIDENCE' ? 'Medium' : 'Low'}
                          </span>
                          <p className="text-[10px] text-muted-foreground mt-1">
                            Reference match: <strong className="text-foreground">{result.referenceMatchLevel}</strong>
                          </p>
                        </div>
                      </div>

                      {/* Side-by-Side: User Photo vs Reference Catalog Image */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                          Visual Reference Verification
                        </p>
                        <div className="grid grid-cols-2 gap-3">
                          {/* User Photo */}
                          <div className="rounded-2xl border border-border overflow-hidden bg-muted/40 text-center">
                            <div className="relative aspect-video">
                              {preview && (
                                <img
                                  src={preview}
                                  alt="Your dish"
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <p className="text-[11px] font-semibold text-muted-foreground py-1.5 bg-background">
                              Your Photograph
                            </p>
                          </div>

                          {/* Database Reference Photo */}
                          <div className="rounded-2xl border border-accent/30 overflow-hidden bg-accent/5 text-center">
                            <div className="relative aspect-video">
                              {result.referenceImage && (
                                <img
                                  src={result.referenceImage}
                                  alt="Catalog reference"
                                  className="w-full h-full object-cover"
                                />
                              )}
                            </div>
                            <p className="text-[11px] font-bold text-accent py-1.5 bg-background">
                              Database Reference
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* ── DID AI GET IT RIGHT? INTERACTIVE CONFIRMATION ── */}
                      <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <p className="text-xs font-bold text-foreground">Did the AI identify your dish correctly?</p>
                            <p className="text-[11px] text-muted-foreground">
                              {isAiCorrect === true
                                ? '✓ Confirmed by you.'
                                : wasUserCorrected
                                ? `Manual selection: ${userConfirmedFood}`
                                : 'Select YES to verify or NO to choose from the 189 food catalog.'}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              id="btn-ai-correct-yes"
                              onClick={handleConfirmAi}
                              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                isAiCorrect === true && !wasUserCorrected
                                  ? 'bg-emerald-500 text-white shadow-xs'
                                  : 'bg-background border border-border hover:border-emerald-500 text-foreground'
                              }`}
                            >
                              <Check className="w-3.5 h-3.5 text-emerald-500" />
                              YES
                            </button>

                            <button
                              type="button"
                              id="btn-ai-correct-no"
                              onClick={handleRejectAi}
                              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                wasUserCorrected || isAiCorrect === false
                                  ? 'bg-amber-500 text-white shadow-xs'
                                  : 'bg-background border border-border hover:border-amber-500 text-foreground'
                              }`}
                            >
                              <Search className="w-3.5 h-3.5 text-amber-500" />
                              NO (CHOOSE)
                            </button>
                          </div>
                        </div>

                        {/* Stored Status Distinction */}
                        {wasUserCorrected && (
                          <div className="pt-2 border-t border-border/60 text-[11px] text-muted-foreground flex items-center justify-between">
                            <span>AI Prediction: <strong>{result.detectedFood}</strong> ({result.confidence}%)</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Confirmed: {userConfirmedFood}</span>
                          </div>
                        )}
                      </div>

                      {/* ── CANDIDATE ALTERNATIVES FROM DATABASE ── */}
                      {result.candidates && result.candidates.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-border/60">
                          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Other Possible Matches in Catalog
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {result.candidates.map((cand) => {
                              const isCurrent =
                                userConfirmedFood.toLowerCase() === cand.foodName.toLowerCase();

                              return (
                                <button
                                  key={cand.foodId}
                                  type="button"
                                  onClick={() => handleSelectCandidate(cand)}
                                  className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all group cursor-pointer ${
                                    isCurrent
                                      ? 'bg-accent/10 border-accent text-accent font-semibold shadow-xs'
                                      : 'bg-background border-border hover:border-accent/40 text-foreground'
                                  }`}
                                >
                                  <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-muted">
                                    <img
                                      src={cand.referenceImage}
                                      alt={cand.foodName}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-xs font-bold truncate group-hover:text-accent">
                                      {cand.foodName}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground truncate">
                                      {cand.cuisine} • {cand.confidence}% match
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* ── CARD 2: AI VISUAL PRESENTATION ANALYSIS ── */}
                    <div className="p-6 rounded-3xl border border-border bg-card shadow-xs">
                      <VisualScore result={result} />
                    </div>

                    {/* Reset Button */}
                    <div className="flex justify-end">
                      <button
                        type="button"
                        id="analyze-try-another"
                        onClick={reset}
                        className="flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors p-2"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Analyze Another Dish
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════════════════════ */}
          {/* SECTION 2: MY EXPERIENCE — HUMAN RATING (STRICTLY SEPARATED)       */}
          {/* ═══════════════════════════════════════════════════════════════════ */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 p-6 sm:p-8 rounded-3xl border-2 border-accent/20 bg-card shadow-lg space-y-6"
            >
              <div className="border-b border-border/60 pb-4">
                <span className="micro-caption text-accent font-bold uppercase tracking-wider">
                  Human Sensory Journaling
                </span>
                <h2
                  className="heading-section mt-1 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Rate Your Actual Dining Experience
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
                  AI only measures what meets the eye. Complete the experience with what only you know — taste, aroma, texture, and personal memory.
                </p>
              </div>

              {/* 5-Star Rating Grid */}
              <StarRating rating={rating} onChange={setRating} />

              {/* Cuisine & Tags */}
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label htmlFor="analyze-cuisine" className="micro-caption text-muted-foreground block mb-2">
                    Confirmed Cuisine
                  </label>
                  <select
                    id="analyze-cuisine"
                    value={userConfirmedCuisine}
                    onChange={(e) => setUserConfirmedCuisine(e.target.value as Cuisine)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                  >
                    {CUISINES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="micro-caption text-muted-foreground block mb-2">
                    Quick Culinary Tags
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {QUICK_TAGS.map((tag) => {
                      const isSelected = selectedTags.includes(tag);
                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => {
                            setSelectedTags((prev) =>
                              prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
                            );
                          }}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-accent text-accent-foreground border-accent shadow-xs'
                              : 'bg-background border-border text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Personal Notes */}
              <div>
                <label htmlFor="analyze-notes" className="micro-caption text-muted-foreground block mb-2">
                  Personal Tasting & Dining Notes
                </label>
                <textarea
                  id="analyze-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Where did you eat this? What was the flavor balance? Would you recommend it?…"
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl bg-background border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none placeholder:text-muted-foreground/60"
                />
              </div>

              {/* Save to Journal Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-muted-foreground">
                  {rating.overall === 0 ? (
                    <span className="text-amber-600 dark:text-amber-400 font-medium">
                      ★ Please select an Overall rating to save to your Food Journal
                    </span>
                  ) : (
                    <span>Ready to record in your personal food timeline</span>
                  )}
                </div>

                <button
                  type="button"
                  id="btn-save-to-journal"
                  onClick={saveToJournal}
                  disabled={rating.overall === 0 || saved}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {saved ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Saved! Redirecting to Journal…
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Save to Food Journal
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Manual Food Selector Modal (189 Dishes) */}
      <FoodSelectorModal
        isOpen={isSelectorModalOpen}
        onClose={() => setIsSelectorModalOpen(false)}
        onSelect={(foodRef) => handleSelectCandidate(foodRef)}
        currentSelectedName={userConfirmedFood}
      />
    </Layout>
  );
}
