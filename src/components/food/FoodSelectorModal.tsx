import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChefHat, Check } from 'lucide-react';
import { FOOD_REFERENCES, type FoodReference } from '../../services/foodReferenceService';
import type { Cuisine } from '../../types/food';

interface FoodSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (food: FoodReference) => void;
  currentSelectedName?: string;
}

const CUISINE_FILTERS: (Cuisine | 'All')[] = [
  'All',
  'Indian',
  'Italian',
  'Japanese',
  'Mexican',
  'French',
  'American',
  'Chinese',
  'Korean',
  'Thai',
  'Mediterranean',
  'Middle Eastern',
  'Spanish',
  'Vietnamese',
  'Greek'
];

export default function FoodSelectorModal({
  isOpen,
  onClose,
  onSelect,
  currentSelectedName
}: FoodSelectorModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCuisine, setActiveCuisine] = useState<Cuisine | 'All'>('All');

  const filteredFoods = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return FOOD_REFERENCES.filter((ref) => {
      const matchesCuisine = activeCuisine === 'All' || ref.cuisine === activeCuisine;
      if (!matchesCuisine) return false;

      if (!q) return true;

      return (
        ref.name.toLowerCase().includes(q) ||
        ref.cuisine.toLowerCase().includes(q) ||
        ref.category.toLowerCase().includes(q) ||
        ref.visualKeywords.some((k) => k.includes(q))
      );
    });
  }, [searchQuery, activeCuisine]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl bg-background border border-border shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-border flex items-center justify-between gap-3">
            <div>
              <h2
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Select Your Dish
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Choose from all 189 verified dishes in Food Companion
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar & Filters */}
          <div className="p-4 sm:p-5 border-b border-border/60 space-y-3 bg-card/40">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by dish name, ingredient, or cuisine…"
                autoFocus
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-background border border-border text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Cuisine Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              {CUISINE_FILTERS.map((cuisine) => {
                const isSelected = activeCuisine === cuisine;
                return (
                  <button
                    key={cuisine}
                    type="button"
                    onClick={() => setActiveCuisine(cuisine)}
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-foreground text-background font-semibold shadow-xs'
                        : 'bg-muted border border-border/60 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {cuisine}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Foods Grid List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 divide-y divide-border/40">
            {filteredFoods.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground space-y-2">
                <ChefHat className="w-10 h-10 mx-auto opacity-30" />
                <p className="text-sm font-medium">No dishes found matching "{searchQuery}"</p>
                <p className="text-xs">Try searching a general food name or reset filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredFoods.map((foodRef) => {
                  const isCurrent =
                    currentSelectedName?.toLowerCase() === foodRef.name.toLowerCase();

                  return (
                    <button
                      key={foodRef.id}
                      type="button"
                      onClick={() => {
                        onSelect(foodRef);
                        onClose();
                      }}
                      className={`flex items-center gap-3 p-2.5 rounded-2xl border text-left transition-all group ${
                        isCurrent
                          ? 'bg-accent/10 border-accent text-accent font-semibold shadow-xs'
                          : 'bg-card border-border hover:border-accent/40 hover:bg-muted/40 text-foreground'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-muted shrink-0 border border-border">
                        <img
                          src={foodRef.referenceImage}
                          alt={foodRef.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate group-hover:text-accent transition-colors">
                          {foodRef.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground truncate">
                          {foodRef.cuisine} {foodRef.region ? `• ${foodRef.region}` : ''}
                        </p>
                        <span className="inline-block mt-0.5 px-2 py-0.2 rounded text-[10px] bg-muted text-muted-foreground capitalize">
                          {foodRef.category.replace('-', ' ')}
                        </span>
                      </div>
                      {isCurrent && (
                        <Check className="w-4 h-4 text-accent shrink-0 mr-1" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Footer count */}
          <div className="p-3.5 px-6 border-t border-border bg-card/20 text-xs text-muted-foreground flex justify-between items-center">
            <span>Showing {filteredFoods.length} of 189 catalog dishes</span>
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-medium text-foreground hover:underline"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
