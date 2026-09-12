import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ChevronDown,
  ArrowRight,
  RotateCcw,
  SlidersHorizontal,
  Flame,
  Clock,
  Compass,
  Heart,
  HelpCircle,
  ChefHat
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import MoodSelector from '../components/food/MoodSelector';
import ContextControls from '../components/food/ContextControls';
import PantryDiscovery, { PantryIngredientBreakdown } from '../components/food/PantryDiscovery';
import RefinementDialog from '../components/food/RefinementDialog';
import FoodCard from '../components/food/FoodCard';
import type { Mood, DiscoveryFilters, RefinementFeedback, FoodRecommendation } from '../types/food';
import {
  getStructuredRecommendations,
  getSurpriseRecommendation,
  getTrendingFoods,
  refineRecommendations,
} from '../services/recommendationService';
import { getUserTasteProfile, getSavedFoodIds } from '../services/userPreferenceService';
import { MOCK_FOODS } from '../data/mockFoods';

// Editorial hero food image
const HERO_FOOD = MOCK_FOODS.find(f => f.id === 'hyderabadi-biryani') || MOCK_FOODS[0];

export default function Index() {
  const [activeTab, setActiveTab] = useState<'mood' | 'pantry'>('mood');
  const [filters, setFilters] = useState<DiscoveryFilters>({});
  const [isRefineOpen, setIsRefineOpen] = useState(false);
  const [refinementNotice, setRefinementNotice] = useState<string | null>(null);
  const [surpriseDish, setSurpriseDish] = useState<FoodRecommendation | null>(null);

  // User taste profile
  const userProfile = useMemo(() => getUserTasteProfile(), []);

  // Structured recommendations
  const recommendationGroup = useMemo(() => {
    return getStructuredRecommendations(filters);
  }, [filters]);

  const trending = useMemo(() => getTrendingFoods(6), []);

  const handleMoodChange = (mood: Mood | undefined) => {
    setFilters((prev) => ({ ...prev, mood }));
    setRefinementNotice(null);
  };

  const handleSurpriseMe = () => {
    const surprise = getSurpriseRecommendation(filters.dietTags);
    setSurpriseDish(surprise);
  };

  const handleRefine = (feedback: RefinementFeedback) => {
    const updated = refineRecommendations(filters, feedback);
    setFilters(updated);

    const labels: Record<RefinementFeedback, string> = {
      'too-heavy': 'Adjusted: Showing lighter and fresher dishes.',
      'too-spicy': 'Adjusted: Dialed back the spice and heat.',
      'too-boring': 'Adjusted: Highlighting bold and adventurous flavors.',
      'too-much-work': 'Adjusted: Filtered for quick, low-effort dishes.',
      'not-hungry': 'Adjusted: Showing smaller bites and lighter fare.',
      'want-new': 'Adjusted: Exploring fresh cuisines outside your usual picks.',
    };
    setRefinementNotice(labels[feedback]);
  };

  const clearAllFilters = () => {
    setFilters({});
    setRefinementNotice(null);
    setSurpriseDish(null);
  };

  const hasAnyFilter = Boolean(
    filters.mood ||
    filters.craving ||
    filters.timeOption ||
    filters.energy ||
    filters.spiceLevel ||
    filters.mealType ||
    (filters.dietTags && filters.dietTags.length > 0) ||
    (filters.ingredients && filters.ingredients.length > 0)
  );

  return (
    <Layout>
      {/* ── Editorial Cinematic Hero ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src={HERO_FOOD.gallery.hero}
            alt={HERO_FOOD.name}
            className="w-full h-full object-cover opacity-35 dark:opacity-30 scale-105 transform animate-pulse duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        </div>

        <div className="relative z-10 page-container pt-28 pb-16">
          <div className="max-w-2xl">
            {/* User status badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wider uppercase mb-5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              {userProfile.hasHistory
                ? `Welcome back • ${userProfile.favoriteCuisines.join(' & ')} explorer`
                : 'Intelligent Food Discovery'}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="heading-display mb-6 text-foreground tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {userProfile.hasHistory ? (
                <>
                  What are you{' '}
                  <span className="text-gradient italic">craving</span> today?
                </>
              ) : (
                <>
                  What are you in the{' '}
                  <span className="text-gradient italic">mood</span> for?
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="body-editorial text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Start with your mood, express a craving, or check your kitchen staples.
              We'll match you with the dish that feels right for right now.
            </motion.p>

            {/* Quick action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#discovery-section"
                className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-all shadow-lg flex items-center gap-2"
              >
                Start Exploring
                <ChevronDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleSurpriseMe}
                className="px-5 py-3 rounded-full border border-border bg-card/80 backdrop-blur-sm text-sm font-medium hover:border-accent hover:text-accent transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-accent" />
                Surprise Me
              </button>

              {userProfile.savedCount > 0 && (
                <Link
                  to="/journal"
                  className="px-4 py-3 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                  {userProfile.savedCount} saved dishes
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Discovery Control Center ── */}
      <section id="discovery-section" className="relative z-10 bg-background -mt-10 pb-24">
        <div className="page-container max-w-4xl mx-auto space-y-8">
          {/* Mode Switcher Tabs */}
          <div className="flex items-center justify-center">
            <div className="inline-flex p-1 rounded-2xl bg-muted border border-border">
              <button
                type="button"
                onClick={() => setActiveTab('mood')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'mood'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Discover by Mood & Craving
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pantry')}
                className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === 'pantry'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Cook with Available Ingredients
              </button>
            </div>
          </div>

          {/* Active Tab 1: Mood & Craving Discovery */}
          {activeTab === 'mood' && (
            <div className="space-y-6">
              {/* Primary: Mood Selector */}
              <div className="bg-card/70 backdrop-blur-md rounded-3xl border border-border/80 p-6 sm:p-8 space-y-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2
                      className="text-xl sm:text-2xl font-bold tracking-tight"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      How are you feeling right now?
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                      Choose an emotional profile to unlock curated dish ideas.
                    </p>
                  </div>
                  {filters.mood && (
                    <button
                      type="button"
                      onClick={() => handleMoodChange(undefined)}
                      className="text-xs text-muted-foreground hover:text-foreground underline transition-colors"
                    >
                      Clear mood
                    </button>
                  )}
                </div>

                <MoodSelector selected={filters.mood} onChange={handleMoodChange} />
              </div>

              {/* Secondary Layer: "What Else Matters?" */}
              <ContextControls
                filters={filters}
                onChange={setFilters}
                onSurpriseMe={handleSurpriseMe}
                onReset={clearAllFilters}
              />
            </div>
          )}

          {/* Active Tab 2: Available Ingredients Discovery */}
          {activeTab === 'pantry' && (
            <PantryDiscovery
              availableIngredients={filters.ingredients || []}
              onAddIngredient={(ing) =>
                setFilters((prev) => ({
                  ...prev,
                  ingredients: [...(prev.ingredients || []), ing],
                }))
              }
              onRemoveIngredient={(ing) =>
                setFilters((prev) => ({
                  ...prev,
                  ingredients: prev.ingredients?.filter((i) => i !== ing) || [],
                }))
              }
              onClear={() => setFilters((prev) => ({ ...prev, ingredients: [] }))}
            />
          )}

          {/* Refinement Notice Pill */}
          {refinementNotice && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-3.5 rounded-xl bg-accent/10 border border-accent/20 text-xs text-accent font-medium"
            >
              <span>{refinementNotice}</span>
              <button
                type="button"
                onClick={() => setRefinementNotice(null)}
                className="hover:underline text-[11px]"
              >
                Dismiss
              </button>
            </motion.div>
          )}

          {/* ── Surprise Me Modal / Feature Card ── */}
          <AnimatePresence>
            {surpriseDish && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="p-6 rounded-3xl bg-gradient-to-br from-accent/15 via-background to-card border-2 border-accent/40 shadow-xl space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Surprise Dish of the Moment
                  </div>
                  <button
                    type="button"
                    onClick={() => setSurpriseDish(null)}
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    Close ×
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative rounded-2xl overflow-hidden h-60">
                    <img
                      src={surpriseDish.food.gallery.hero}
                      alt={surpriseDish.food.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass text-white text-xs font-medium">
                      {surpriseDish.food.cuisine}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3
                      className="text-2xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {surpriseDish.food.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {surpriseDish.matchSummary}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground pt-1">
                      <span>⏱️ {surpriseDish.food.prepTime + surpriseDish.food.cookTime}m</span>
                      <span>•</span>
                      <span>👨‍🍳 {surpriseDish.food.difficulty}</span>
                      <span>•</span>
                      <span>🌶️ {surpriseDish.food.spiceLevel}</span>
                    </div>
                    <div className="flex gap-3 pt-3">
                      <Link
                        to={`/food/${surpriseDish.food.id}`}
                        className="px-5 py-2 rounded-xl bg-accent text-accent-foreground text-xs font-semibold hover:bg-accent/90 transition-all"
                      >
                        Explore Dish Details →
                      </Link>
                      <button
                        type="button"
                        onClick={handleSurpriseMe}
                        className="px-4 py-2 rounded-xl border border-border text-xs font-medium hover:bg-muted transition-all"
                      >
                        Another Surprise ↻
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ════════════════════════════════════════════════════════════════════
              EDITORIAL RECOMMENDATION HIERARCHY
             ════════════════════════════════════════════════════════════════════ */}
          <div className="pt-6 space-y-12">
            {/* 1. TOP MATCH HERO */}
            {recommendationGroup.topMatch && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Your Best Match
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mt-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      The Dish for Tonight
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsRefineOpen(true)}
                    className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent border border-border/80 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    Not feeling these?
                  </button>
                </div>

                <FoodCard
                  food={recommendationGroup.topMatch.food}
                  matchScore={recommendationGroup.topMatch.matchScore}
                  matchReasons={recommendationGroup.topMatch.matchReasons}
                  matchSummary={recommendationGroup.topMatch.matchSummary}
                  contextualRole="top-match"
                  contextualLabel="Top Recommendation"
                  size="hero"
                />
              </div>
            )}

            {/* 2. CONTEXTUAL SHELVES: LIGHTER, INDULGE, SOMETHING DIFFERENT, FROM JOURNAL */}
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <h3
                  className="text-xl sm:text-2xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Curated Variations
                </h3>
                <p className="text-xs text-muted-foreground">
                  Tailored alternatives based on balance, texture and mood
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Lighter alternative */}
                {recommendationGroup.lighter && (
                  <FoodCard
                    food={recommendationGroup.lighter.food}
                    matchScore={recommendationGroup.lighter.matchScore}
                    matchReasons={recommendationGroup.lighter.matchReasons}
                    matchSummary={recommendationGroup.lighter.matchSummary}
                    contextualRole="lighter"
                    contextualLabel="If You Want Something Lighter"
                    size="md"
                  />
                )}

                {/* Indulgent alternative */}
                {recommendationGroup.indulge && (
                  <FoodCard
                    food={recommendationGroup.indulge.food}
                    matchScore={recommendationGroup.indulge.matchScore}
                    matchReasons={recommendationGroup.indulge.matchReasons}
                    matchSummary={recommendationGroup.indulge.matchSummary}
                    contextualRole="indulge"
                    contextualLabel="If You Want To Indulge"
                    size="md"
                  />
                )}

                {/* Adventurous / Different */}
                {recommendationGroup.adventurous && (
                  <FoodCard
                    food={recommendationGroup.adventurous.food}
                    matchScore={recommendationGroup.adventurous.matchScore}
                    matchReasons={recommendationGroup.adventurous.matchReasons}
                    matchSummary={recommendationGroup.adventurous.matchSummary}
                    contextualRole="adventurous"
                    contextualLabel="If You Want Something Different"
                    size="md"
                  />
                )}

                {/* From Journal */}
                {recommendationGroup.fromJournal && (
                  <FoodCard
                    food={recommendationGroup.fromJournal.food}
                    matchScore={recommendationGroup.fromJournal.matchScore}
                    matchReasons={recommendationGroup.fromJournal.matchReasons}
                    matchSummary={recommendationGroup.fromJournal.matchSummary}
                    contextualRole="journal-favorite"
                    contextualLabel="From Your Food Journal"
                    size="md"
                  />
                )}

                {/* More matches */}
                {recommendationGroup.moreRecommendations.slice(0, 2).map((rec) => (
                  <FoodCard
                    key={rec.food.id}
                    food={rec.food}
                    matchScore={rec.matchScore}
                    matchReasons={rec.matchReasons}
                    matchSummary={rec.matchSummary}
                    size="md"
                  />
                ))}
              </div>
            </div>

            {/* 3. CONVERSATIONAL "NOT FEELING THESE?" BAR */}
            <div className="p-6 rounded-2xl bg-muted/40 border border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-sm">Not feeling any of these recommendations?</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Give us one second of feedback and we'll immediately adapt the menu.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsRefineOpen(true)}
                className="px-5 py-2 rounded-xl bg-background hover:bg-card border border-border text-xs font-semibold tracking-wide transition-all shadow-sm"
              >
                Tell us what's off →
              </button>
            </div>

            {/* 4. SIGNATURE SHOWCASE (Multi-Cuisine Verified Dishes) */}
            <div className="pt-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3
                    className="text-xl sm:text-2xl font-bold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Culinary Signatures
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Celebrated iconic dishes across world culinary traditions
                  </p>
                </div>
                <Link
                  to="/explore"
                  className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                >
                  Explore all 189 dishes
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {trending.map((food) => (
                  <FoodCard key={food.id} food={food} size="sm" showMeta={false} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conversational Refinement Dialog ── */}
      <RefinementDialog
        isOpen={isRefineOpen}
        onClose={() => setIsRefineOpen(false)}
        onSelectFeedback={handleRefine}
      />
    </Layout>
  );
}
