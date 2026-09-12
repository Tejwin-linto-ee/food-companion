import { useState } from 'react';
import { Star } from 'lucide-react';
import type { FoodRating } from '../../types/food';

const CATEGORIES: { key: keyof FoodRating; label: string; emoji: string }[] = [
  { key: 'taste', label: 'Taste', emoji: '👅' },
  { key: 'aroma', label: 'Aroma', emoji: '👃' },
  { key: 'texture', label: 'Texture', emoji: '✋' },
  { key: 'presentation', label: 'Presentation', emoji: '👁️' },
  { key: 'overall', label: 'Overall', emoji: '⭐' },
];

interface StarRatingProps {
  rating: FoodRating;
  onChange?: (updated: FoodRating) => void;
  readonly?: boolean;
  compact?: boolean;
}

function StarRow({
  label,
  emoji,
  value,
  onChange,
  readonly,
}: {
  label: string;
  emoji: string;
  value: number;
  onChange?: (val: number) => void;
  readonly?: boolean;
}) {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex items-center gap-3">
      <span className="text-base">{emoji}</span>
      <span className="text-sm font-medium w-24 text-foreground">{label}</span>
      <div
        className="flex items-center gap-1"
        onMouseLeave={() => !readonly && setHovered(0)}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={readonly}
            onClick={() => !readonly && onChange?.(star)}
            onMouseEnter={() => !readonly && setHovered(star)}
            className={`transition-all duration-150 ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}`}
            aria-label={`Rate ${label} ${star} star${star !== 1 ? 's' : ''}`}
          >
            <Star
              className={`w-5 h-5 transition-colors duration-150 ${
                star <= (hovered || value)
                  ? 'fill-[hsl(var(--saffron))] text-[hsl(var(--saffron))]'
                  : 'text-muted-foreground/30'
              }`}
            />
          </button>
        ))}
      </div>
      <span className="text-xs text-muted-foreground w-6 text-right">{value}/5</span>
    </div>
  );
}

export default function StarRating({ rating, onChange, readonly, compact }: StarRatingProps) {
  const handleChange = (key: keyof FoodRating, val: number) => {
    if (!onChange) return;
    onChange({ ...rating, [key]: val });
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            className={`w-4 h-4 ${
              s <= Math.round(rating.overall)
                ? 'fill-[hsl(var(--saffron))] text-[hsl(var(--saffron))]'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-1">{rating.overall.toFixed(1)}</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {CATEGORIES.map(({ key, label, emoji }) => (
        <StarRow
          key={key}
          label={label}
          emoji={emoji}
          value={rating[key]}
          onChange={(val) => handleChange(key, val)}
          readonly={readonly}
        />
      ))}
    </div>
  );
}
