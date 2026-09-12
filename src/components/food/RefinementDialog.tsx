import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, X, Sparkles } from 'lucide-react';
import type { RefinementFeedback } from '../../types/food';

interface RefinementDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFeedback: (feedback: RefinementFeedback) => void;
}

const OPTIONS: { value: RefinementFeedback; label: string; desc: string; emoji: string }[] = [
  { value: 'too-heavy', label: 'Too heavy', desc: 'Show me something lighter & fresher', emoji: '🥗' },
  { value: 'too-spicy', label: 'Too spicy', desc: 'Dial back the heat & chili', emoji: '🥛' },
  { value: 'too-boring', label: 'Too boring', desc: 'Give me something bold, adventurous & novel', emoji: '⚡' },
  { value: 'too-much-work', label: 'Too much work', desc: 'Keep it super quick & effortless', emoji: '⏱️' },
  { value: 'not-hungry', label: 'Not hungry enough', desc: 'A snack, soup, or small bite instead', emoji: '🍵' },
  { value: 'want-new', label: 'Want something new', desc: 'Surprise me with a cuisine I haven\'t tried', emoji: '🌍' },
];

export default function RefinementDialog({
  isOpen,
  onClose,
  onSelectFeedback,
}: RefinementDialogProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl p-6 space-y-5"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div>
            <div className="flex items-center gap-2 text-accent text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              Recommendation Refinement
            </div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What's off?
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              Tell us what doesn't fit your current mood, and we'll instantly recalculate your recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onSelectFeedback(opt.value);
                  onClose();
                }}
                className="flex items-start gap-3 p-3.5 rounded-xl border border-border/80 bg-background/80 hover:bg-accent/10 hover:border-accent/40 text-left transition-all group"
              >
                <span className="text-2xl shrink-0 select-none">{opt.emoji}</span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors">
                    {opt.label}
                  </p>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                    {opt.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
