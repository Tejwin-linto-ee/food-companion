import { Link } from 'react-router-dom';
import { Calendar, MapPin, Trash2 } from 'lucide-react';
import type { FoodJournalEntry } from '../../types/food';
import StarRating from './StarRating';

interface JournalCardProps {
  entry: FoodJournalEntry;
  onDelete?: (id: string) => void;
}

const MOOD_EMOJI: Record<string, string> = {
  cozy: '🍂',
  energetic: '⚡',
  refreshing: '🌿',
  indulgent: '✨',
  adventurous: '🌍',
  light: '🌱',
  comforting: '🏠',
  spicy: '🌶️',
  healthy: '🥗',
  quick: '⏱️',
  romantic: '🕯️',
  nostalgic: '📼',
};

export default function JournalCard({ entry, onDelete }: JournalCardProps) {
  const date = new Date(entry.createdAt);
  const formatted = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article
      id={`journal-entry-${entry.id}`}
      className="food-card group relative"
    >
      {/* Image or placeholder */}
      {entry.image ? (
        <div className="relative h-44 overflow-hidden">
          <img
            src={entry.image}
            alt={entry.dishName}
            className="food-card-image w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {entry.aiAnalysis && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full glass text-white text-xs font-medium">
              AI Score: {entry.aiAnalysis.visualScore}
            </div>
          )}
          {entry.mood && (
            <div className="absolute top-3 left-3 text-xl" title={entry.mood}>
              {MOOD_EMOJI[entry.mood]}
            </div>
          )}
        </div>
      ) : (
        <div className="h-24 bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
          <span className="text-4xl">
            {entry.mood ? MOOD_EMOJI[entry.mood] : '🍽️'}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3
            className="font-semibold text-base leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {entry.dishName}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{entry.cuisine}</p>
        </div>

        <StarRating rating={entry.rating} readonly compact />

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatted}
          </span>
          {entry.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {entry.location}
            </span>
          )}
        </div>

        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {entry.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-accent/10 text-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {entry.notes && (
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 italic">
            "{entry.notes}"
          </p>
        )}
      </div>

      {/* Delete button */}
      {onDelete && (
        <button
          onClick={(e) => { e.preventDefault(); onDelete(entry.id); }}
          className="absolute top-3 right-3 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 bg-destructive/10 text-destructive hover:bg-destructive/20 transition-all"
          aria-label={`Delete ${entry.dishName} entry`}
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      )}
    </article>
  );
}
