import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import Layout from '../components/Layout';
import FoodCard from '../components/food/FoodCard';
import { MOCK_FOODS } from '../data/mockFoods';
import type { Cuisine, MealType, Mood } from '../types/food';

const CUISINE_OPTIONS: Cuisine[] = [
  'Italian', 'Indian', 'Japanese', 'Mexican', 'American',
  'French', 'Thai', 'Chinese', 'Mediterranean', 'Korean',
];

const MEAL_OPTIONS: MealType[] = ['Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Dessert', 'Snack', 'Drink'];

const MOOD_OPTIONS: { value: Mood; emoji: string }[] = [
  { value: 'cozy', emoji: '🍂' },
  { value: 'energetic', emoji: '⚡' },
  { value: 'refreshing', emoji: '🌿' },
  { value: 'indulgent', emoji: '✨' },
  { value: 'adventurous', emoji: '🌍' },
  { value: 'comforting', emoji: '🏠' },
];

export default function Explore() {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState<Cuisine | ''>('');
  const [meal, setMeal] = useState<MealType | ''>('');
  const [mood, setMood] = useState<Mood | ''>('');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return MOCK_FOODS.filter((f) => {
      const matchesQuery =
        !query ||
        f.name.toLowerCase().includes(query.toLowerCase()) ||
        f.cuisine.toLowerCase().includes(query.toLowerCase()) ||
        f.description.toLowerCase().includes(query.toLowerCase()) ||
        f.mainIngredients.some((i) => i.toLowerCase().includes(query.toLowerCase()));

      const matchesCuisine = !cuisine || f.cuisine === cuisine;
      const matchesMeal = !meal || f.mealType.includes(meal);
      const matchesMood = !mood || f.moods.includes(mood);

      return matchesQuery && matchesCuisine && matchesMeal && matchesMood;
    });
  }, [query, cuisine, meal, mood]);

  const clearFilters = () => {
    setCuisine('');
    setMeal('');
    setMood('');
    setQuery('');
  };

  const hasFilters = !!(query || cuisine || meal || mood);

  return (
    <Layout>
      <div className="pt-24 pb-20">
        {/* Header */}
        <div className="page-container mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="micro-caption text-accent mb-2">Food Library</p>
            <h1 className="heading-editorial mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Explore every dish
            </h1>
            <p className="text-muted-foreground max-w-xl">
              Browse our curated collection of dishes from around the world. Filter by cuisine,
              mood, or meal type to find exactly what you're after.
            </p>
          </motion.div>
        </div>

        {/* Search + filter bar */}
        <div className="page-container mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                id="explore-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes, cuisines, ingredients…"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground/60"
              />
            </div>
            <button
              id="toggle-explore-filters"
              onClick={() => setShowFilters((p) => !p)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all ${
                showFilters || hasFilters
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasFilters && (
                <span className="w-5 h-5 rounded-full bg-accent-foreground/20 text-xs flex items-center justify-center">
                  {[query, cuisine, meal, mood].filter(Boolean).length}
                </span>
              )}
            </button>
            {hasFilters && (
              <button
                id="clear-explore-filters"
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>

          {/* Filter panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-5 rounded-xl border border-border bg-card space-y-5"
            >
              {/* Cuisine */}
              <div>
                <p className="micro-caption text-muted-foreground mb-3">Cuisine</p>
                <div className="flex flex-wrap gap-2">
                  {CUISINE_OPTIONS.map((c) => (
                    <button
                      key={c}
                      id={`explore-cuisine-${c.toLowerCase()}`}
                      onClick={() => setCuisine(cuisine === c ? '' : c)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        cuisine === c
                          ? 'bg-accent text-accent-foreground border-accent'
                          : 'border-border text-muted-foreground hover:border-accent/50'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {/* Meal type */}
                <div>
                  <p className="micro-caption text-muted-foreground mb-3">Meal type</p>
                  <div className="flex flex-wrap gap-2">
                    {MEAL_OPTIONS.map((m) => (
                      <button
                        key={m}
                        id={`explore-meal-${m.toLowerCase()}`}
                        onClick={() => setMeal(meal === m ? '' : m)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                          meal === m
                            ? 'bg-foreground text-background border-foreground'
                            : 'border-border text-muted-foreground hover:border-foreground/40'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mood */}
                <div>
                  <p className="micro-caption text-muted-foreground mb-3">Mood</p>
                  <div className="flex flex-wrap gap-2">
                    {MOOD_OPTIONS.map(({ value, emoji }) => (
                      <button
                        key={value}
                        id={`explore-mood-${value}`}
                        onClick={() => setMood(mood === value ? '' : value)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all capitalize ${
                          mood === value
                            ? 'bg-accent text-accent-foreground border-accent'
                            : 'border-border text-muted-foreground hover:border-accent/50'
                        }`}
                      >
                        {emoji} {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Results */}
        <div className="page-container">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filtered.length} dish{filtered.length !== 1 ? 'es' : ''}
              {hasFilters ? ' found' : ' in library'}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((food, i) => (
                <motion.div
                  key={food.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <FoodCard food={food} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                No dishes found
              </h3>
              <p className="text-muted-foreground mb-5">
                Try clearing some filters or searching with a broader term.
              </p>
              <button
                onClick={clearFilters}
                className="px-5 py-2.5 rounded-xl border border-border text-sm hover:bg-muted transition-all"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
