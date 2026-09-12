import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, X, Check, ShoppingBag } from 'lucide-react';
import type { Food } from '../../types/food';

interface PantryDiscoveryProps {
  availableIngredients: string[];
  onAddIngredient: (ing: string) => void;
  onRemoveIngredient: (ing: string) => void;
  onClear: () => void;
}

const COMMON_PANTRY = [
  'Chicken', 'Rice', 'Eggs', 'Tomatoes', 'Onions', 'Garlic', 'Ginger', 'Potatoes',
  'Pasta', 'Cheese', 'Flour', 'Butter', 'Paneer', 'Soy sauce', 'Coconut milk'
];

export default function PantryDiscovery({
  availableIngredients,
  onAddIngredient,
  onRemoveIngredient,
  onClear,
}: PantryDiscoveryProps) {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      e.preventDefault();
      onAddIngredient(input.trim());
      setInput('');
    }
  };

  const addSpecific = (item: string) => {
    if (!availableIngredients.some(i => i.toLowerCase() === item.toLowerCase())) {
      onAddIngredient(item);
    }
  };

  return (
    <div className="rounded-2xl bg-card border border-border p-5 sm:p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3
            className="text-base sm:text-lg font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            I Have in My Kitchen…
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Tell us what ingredients you have on hand. We'll show you what you can make right now.
          </p>
        </div>
        {availableIngredients.length > 0 && (
          <button
            type="button"
            onClick={onClear}
            className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Input */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          id="pantry-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type an ingredient (e.g. Chicken, Rice, Eggs) & press Enter…"
          className="w-full pl-10 pr-24 py-2.5 rounded-xl bg-muted/60 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground/60"
        />
        {input.trim() && (
          <button
            type="button"
            onClick={() => {
              onAddIngredient(input.trim());
              setInput('');
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-accent text-accent-foreground text-xs font-medium hover:bg-accent/90 transition-colors"
          >
            Add
          </button>
        )}
      </div>

      {/* Current Ingredients Chips */}
      {availableIngredients.length > 0 && (
        <div>
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            You Have ({availableIngredients.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {availableIngredients.map((ing) => (
              <span
                key={ing}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-medium border border-accent/20"
              >
                <Check className="w-3 h-3" />
                {ing}
                <button
                  type="button"
                  onClick={() => onRemoveIngredient(ing)}
                  className="hover:text-destructive transition-colors ml-0.5"
                  aria-label={`Remove ${ing}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Quick Add Suggestions */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Quick Add Common Staples:</p>
        <div className="flex flex-wrap gap-1.5">
          {COMMON_PANTRY.filter(
            p => !availableIngredients.some(a => a.toLowerCase() === p.toLowerCase())
          ).slice(0, 10).map((staple) => (
            <button
              key={staple}
              type="button"
              onClick={() => addSpecific(staple)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs bg-muted/70 hover:bg-accent/10 hover:text-accent border border-border/80 transition-colors text-muted-foreground"
            >
              <Plus className="w-3 h-3" />
              {staple}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PantryIngredientBreakdown({
  food,
  availableIngredients,
}: {
  food: Food;
  availableIngredients: string[];
}) {
  if (availableIngredients.length === 0) return null;

  const matched = food.mainIngredients.filter(i =>
    availableIngredients.some(a => a.toLowerCase().includes(i.toLowerCase()) || i.toLowerCase().includes(a.toLowerCase()))
  );

  const missing = food.mainIngredients.filter(i =>
    !availableIngredients.some(a => a.toLowerCase().includes(i.toLowerCase()) || i.toLowerCase().includes(a.toLowerCase()))
  );

  return (
    <div className="mt-3 p-3 rounded-xl bg-muted/40 border border-border/60 text-xs space-y-2">
      {matched.length > 0 && (
        <div className="flex items-start gap-1.5 text-emerald-600 dark:text-emerald-400">
          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>
            <strong>You have:</strong> {matched.join(', ')}
          </span>
        </div>
      )}
      {missing.length > 0 && (
        <div className="flex items-start gap-1.5 text-muted-foreground">
          <ShoppingBag className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <span>
            <strong>You'll need:</strong> {missing.join(', ')}
          </span>
        </div>
      )}
    </div>
  );
}
