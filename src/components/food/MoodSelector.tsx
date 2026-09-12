import { motion } from 'framer-motion';
import type { Mood } from '../../types/food';

interface MoodOption {
  mood: Mood;
  emoji: string;
  label: string;
  description: string;
  color: string;
  bgGradient: string;
  borderColor: string;
}

const MOODS: MoodOption[] = [
  {
    mood: 'cozy',
    emoji: '🍂',
    label: 'Cozy',
    description: 'Warm, slow-simmered & comforting',
    color: 'text-amber-500 dark:text-amber-400',
    bgGradient: 'from-amber-500/10 to-orange-500/5',
    borderColor: 'border-amber-500/40',
  },
  {
    mood: 'comforting',
    emoji: '🍲',
    label: 'Comforting',
    description: 'Familiar, soulful home cooking',
    color: 'text-orange-500 dark:text-orange-400',
    bgGradient: 'from-orange-500/10 to-amber-500/5',
    borderColor: 'border-orange-500/40',
  },
  {
    mood: 'indulgent',
    emoji: '✨',
    label: 'Indulgent',
    description: 'Rich, buttery & decadent dining',
    color: 'text-yellow-600 dark:text-yellow-400',
    bgGradient: 'from-yellow-500/10 to-amber-500/5',
    borderColor: 'border-yellow-500/40',
  },
  {
    mood: 'adventurous',
    emoji: '🌍',
    label: 'Adventurous',
    description: 'Bold spices & novel regional flavors',
    color: 'text-rose-500 dark:text-rose-400',
    bgGradient: 'from-rose-500/10 to-purple-500/5',
    borderColor: 'border-rose-500/40',
  },
  {
    mood: 'refreshing',
    emoji: '🌿',
    label: 'Refreshing',
    description: 'Crisp, bright, herbal & uplifting',
    color: 'text-emerald-500 dark:text-emerald-400',
    bgGradient: 'from-emerald-500/10 to-teal-500/5',
    borderColor: 'border-emerald-500/40',
  },
  {
    mood: 'light',
    emoji: '🍃',
    label: 'Light',
    description: 'Clean, effortless & easy on the palate',
    color: 'text-teal-500 dark:text-teal-400',
    bgGradient: 'from-teal-500/10 to-emerald-500/5',
    borderColor: 'border-teal-500/40',
  },
  {
    mood: 'spicy',
    emoji: '🌶️',
    label: 'Spicy',
    description: 'Fiery chilies & aromatic tingling heat',
    color: 'text-red-500 dark:text-red-400',
    bgGradient: 'from-red-500/10 to-orange-500/5',
    borderColor: 'border-red-500/40',
  },
  {
    mood: 'healthy',
    emoji: '🥑',
    label: 'Healthy',
    description: 'Nutrient-dense & wholesome vitality',
    color: 'text-green-500 dark:text-green-400',
    bgGradient: 'from-green-500/10 to-lime-500/5',
    borderColor: 'border-green-500/40',
  },
  {
    mood: 'quick',
    emoji: '⏱️',
    label: 'Quick',
    description: 'Fast, vibrant meals under 20 minutes',
    color: 'text-sky-500 dark:text-sky-400',
    bgGradient: 'from-sky-500/10 to-blue-500/5',
    borderColor: 'border-sky-500/40',
  },
  {
    mood: 'energetic',
    emoji: '⚡',
    label: 'Energetic',
    description: 'High-protein punch & lively bite',
    color: 'text-cyan-500 dark:text-cyan-400',
    bgGradient: 'from-cyan-500/10 to-blue-500/5',
    borderColor: 'border-cyan-500/40',
  },
  {
    mood: 'romantic',
    emoji: '🍷',
    label: 'Romantic',
    description: 'Sensual plating & candlelit elegance',
    color: 'text-pink-500 dark:text-pink-400',
    bgGradient: 'from-pink-500/10 to-rose-500/5',
    borderColor: 'border-pink-500/40',
  },
  {
    mood: 'nostalgic',
    emoji: '🕰️',
    label: 'Nostalgic',
    description: 'Beloved traditional recipes of memory',
    color: 'text-purple-500 dark:text-purple-400',
    bgGradient: 'from-purple-500/10 to-indigo-500/5',
    borderColor: 'border-purple-500/40',
  },
];

interface MoodSelectorProps {
  selected?: Mood;
  onChange: (mood: Mood | undefined) => void;
}

export default function MoodSelector({ selected, onChange }: MoodSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {MOODS.map((option, i) => {
          const isSelected = selected === option.mood;
          return (
            <motion.button
              key={option.mood}
              id={`mood-${option.mood}`}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
              onClick={() => onChange(isSelected ? undefined : option.mood)}
              className={`relative p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isSelected
                  ? `bg-gradient-to-br ${option.bgGradient} ${option.borderColor} shadow-md shadow-accent/5 ring-1 ${option.borderColor}`
                  : 'border-border/80 bg-card/60 hover:bg-muted/60 hover:border-muted-foreground/30'
              }`}
              aria-pressed={isSelected}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-2xl select-none" role="img" aria-label={option.label}>
                  {option.emoji}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
              </div>
              <p
                className={`text-sm font-semibold tracking-tight ${
                  isSelected ? option.color : 'text-foreground'
                }`}
              >
                {option.label}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-snug">
                {option.description}
              </p>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
