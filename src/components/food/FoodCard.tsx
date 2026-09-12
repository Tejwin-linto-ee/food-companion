import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, ChefHat, Flame, Heart, Sparkles, Check, RotateCcw } from 'lucide-react';
import type { Food, ContextualRole } from '../../types/food';
import { isFoodSaved, toggleSaveFood, recordFoodDisliked, recordFoodCooked } from '../../services/userPreferenceService';

interface FoodCardProps {
  food: Food;
  matchScore?: number;
  matchReasons?: string[];
  matchSummary?: string;
  contextualRole?: ContextualRole;
  contextualLabel?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showMeta?: boolean;
  onSkip?: (foodId: string) => void;
}

const SPICE_COLORS: Record<string, string> = {
  None: 'text-emerald-500',
  Mild: 'text-green-500',
  Medium: 'text-amber-500',
  Hot: 'text-rose-500',
  'Very Hot': 'text-red-700',
};

export default function FoodCard({
  food,
  matchScore,
  matchReasons,
  matchSummary,
  contextualRole,
  contextualLabel,
  size = 'md',
  showMeta = true,
  onSkip,
}: FoodCardProps) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(() => isFoodSaved(food.id));
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const next = toggleSaveFood(food.id);
    setSaved(next);
  };

  const handleSkip = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    recordFoodDisliked(food.id);
    if (onSkip) onSkip(food.id);
  };

  const heightClass =
    size === 'hero'
      ? 'h-80 md:h-[420px]'
      : size === 'lg'
      ? 'h-72 md:h-80'
      : size === 'sm'
      ? 'h-44'
      : 'h-60 md:h-64';

  return (
    <div
      id={`food-card-${food.id}`}
      className="group relative rounded-2xl overflow-hidden bg-card border border-border/70 hover:border-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Contextual Role Banner (e.g. Top Match, Lighter, Indulge) */}
      {contextualLabel && (
        <div className="px-4 py-2 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border-b border-accent/20 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            {contextualLabel}
          </span>
          {matchScore && (
            <span className="text-xs font-bold text-accent">
              {matchScore}% match
            </span>
          )}
        </div>
      )}

      {/* Clickable Image & Main Link */}
      <Link
        to={`/food/${food.id}`}
        className="relative overflow-hidden block"
        aria-label={`Explore ${food.name}`}
      >
        <div className={`relative w-full overflow-hidden ${heightClass}`}>
          <img
            src={food.gallery.hero}
            alt={food.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

          {/* Top Overlays */}
          <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
            {/* Cuisine Pill */}
            <span className="px-2.5 py-1 rounded-full glass text-white text-xs font-medium backdrop-blur-md">
              {food.cuisine}
            </span>

            {/* Interactive Actions */}
            <div className="flex items-center gap-1.5 pointer-events-auto">
              {/* Skip / Alternative */}
              {onSkip && (
                <button
                  type="button"
                  onClick={handleSkip}
                  className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 flex items-center justify-center transition-colors"
                  aria-label="Show alternative"
                  title="Show something else"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Bookmark / Heart */}
              <button
                type="button"
                onClick={handleSave}
                className={`w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-colors ${
                  saved
                    ? 'bg-rose-500 text-white shadow-md'
                    : 'bg-black/40 text-white/80 hover:text-rose-400 hover:bg-black/60'
                }`}
                aria-label={saved ? 'Remove from saved' : 'Save to shortlist'}
                title={saved ? 'Saved in shortlist' : 'Save dish'}
              >
                <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
              </button>
            </div>
          </div>

          {/* Bottom Overlay on Image: Flavors & Moods */}
          <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between pointer-events-none">
            <div className="flex flex-wrap gap-1">
              {food.flavorProfile.primary.slice(0, 2).map((fl) => (
                <span
                  key={fl}
                  className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-black/50 backdrop-blur-sm text-white/90"
                >
                  {fl}
                </span>
              ))}
              {food.texture[0] && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-black/50 backdrop-blur-sm text-white/90">
                  {food.texture[0]}
                </span>
              )}
            </div>

            {food.spiceLevel !== 'None' && (
              <span className={`flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm ${SPICE_COLORS[food.spiceLevel] || 'text-white'}`}>
                <Flame className="w-3 h-3" />
                {food.spiceLevel}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Text Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <Link
              to={`/food/${food.id}`}
              className="font-semibold text-base sm:text-lg leading-tight hover:text-accent transition-colors"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {food.name}
            </Link>
          </div>

          {/* Match Reason ("Why This?") */}
          {matchSummary && (
            <div className="mb-2.5">
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {matchSummary}
              </p>
            </div>
          )}

          {!matchSummary && (
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
              {food.description}
            </p>
          )}

          {/* "Why This?" Expandable Evidence */}
          {matchReasons && matchReasons.length > 0 && (
            <div className="mb-3">
              <button
                type="button"
                onClick={() => setShowExplanation(!showExplanation)}
                className="text-[11px] text-accent hover:underline font-medium inline-flex items-center gap-1"
              >
                <span>Why this dish?</span>
                <span className="text-[9px]">{showExplanation ? '▲' : '▼'}</span>
              </button>
              {showExplanation && (
                <div className="mt-2 p-2.5 rounded-xl bg-accent/5 border border-accent/15 text-[11px] text-muted-foreground space-y-1 animate-in fade-in duration-200">
                  {matchReasons.map((r, i) => (
                    <p key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{r}</span>
                    </p>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Meta */}
        {showMeta && (
          <div className="pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent" />
              {food.prepTime + food.cookTime}m total
            </span>
            <span className="flex items-center gap-1">
              <ChefHat className="w-3.5 h-3.5" />
              {food.difficulty}
            </span>
            <Link
              to={`/cook/${food.id}`}
              className="text-xs font-semibold text-accent hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                recordFoodCooked(food.id, food.cuisine);
              }}
            >
              Cook Mode →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
