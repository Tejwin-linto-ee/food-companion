import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import type { ImageGallery } from '../../types/food';

interface FoodGalleryProps {
  gallery: ImageGallery;
  name: string;
}

const ANGLE_LABELS: Record<keyof ImageGallery, string> = {
  hero: '45° View',
  top: 'Top Down',
  side: 'Side View',
  closeup: 'Close-up',
  detail: 'Macro Detail',
  environment: 'Environment',
};

export default function FoodGallery({ gallery, name }: FoodGalleryProps) {
  // Extract available images
  const angles = Object.entries(gallery)
    .filter(([_, url]) => !!url)
    .map(([key, url]) => ({
      key: key as keyof ImageGallery,
      label: ANGLE_LABELS[key as keyof ImageGallery],
      url: url as string,
    }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(0);

  if (angles.length === 0) return null;

  const current = angles[currentIndex];

  const paginate = (newDirection: number) => {
    let nextIndex = currentIndex + newDirection;
    if (nextIndex < 0) nextIndex = angles.length - 1;
    if (nextIndex >= angles.length) nextIndex = 0;
    
    setDirection(newDirection);
    setCurrentIndex(nextIndex);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  // Keyboard navigation for fullscreen
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') paginate(1);
    if (e.key === 'ArrowLeft') paginate(-1);
    if (e.key === 'Escape') setIsFullscreen(false);
  };

  return (
    <>
      <div className="relative group rounded-2xl overflow-hidden bg-muted">
        {/* Main Display */}
        <div 
          className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden cursor-zoom-in"
          onClick={() => setIsFullscreen(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={current.url}
              alt={`${name} - ${current.label}`}
              className="absolute inset-0 w-full h-full object-cover"
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
            />
          </AnimatePresence>
          
          {/* Gradient overlay for labels */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
            <div className="text-white drop-shadow-md">
              <p className="text-xs font-medium opacity-80 uppercase tracking-widest">{current.label}</p>
            </div>
            
            <div className="flex gap-2 pointer-events-auto">
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFullscreen(true); }}
                className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {angles.length > 1 && (
          <div className="absolute top-4 right-4 flex flex-col gap-2 pointer-events-auto">
            {angles.map((angle, idx) => (
              <button
                key={angle.key}
                onClick={(e) => {
                  e.stopPropagation();
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={angle.url} alt={angle.label} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col"
            onKeyDown={handleKeyDown}
            tabIndex={0}
            autoFocus
          >
            {/* Header */}
            <div className="p-4 flex items-center justify-between text-white border-b border-white/10 shrink-0">
              <div>
                <p className="text-xs opacity-60 mb-0.5">{currentIndex + 1} / {angles.length}</p>
                <p className="font-medium tracking-wide">{name} — <span className="opacity-70">{current.label}</span></p>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Viewer */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.img
                  key={currentIndex}
                  src={current.url}
                  alt={`${name} - ${current.label}`}
                  className="absolute max-w-full max-h-full object-contain"
                  custom={direction}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) paginate(1);
                    else if (swipe > swipeConfidenceThreshold) paginate(-1);
                  }}
                />
              </AnimatePresence>

              {/* Prev / Next Controls */}
              {angles.length > 1 && (
                <>
                  <button
                    className="absolute left-4 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                    onClick={() => paginate(-1)}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    className="absolute right-4 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                    onClick={() => paginate(1)}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
            
            {/* Horizontal Thumbnail Strip */}
            {angles.length > 1 && (
              <div className="h-24 shrink-0 flex items-center justify-center gap-2 p-4 bg-black">
                {angles.map((angle, idx) => (
                  <button
                    key={angle.key}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    className={`relative w-20 h-16 rounded-md overflow-hidden transition-all ${
                      idx === currentIndex ? 'ring-2 ring-white opacity-100' : 'opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img src={angle.url} alt={angle.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
