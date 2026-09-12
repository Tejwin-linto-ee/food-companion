import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, ChefHat, Flame, ArrowRight, BookOpen, Scale, Wrench, Heart, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';
import FlavorProfile from '../components/food/FlavorProfile';
import FoodGallery from '../components/food/FoodGallery';
import { FOOD_MAP, MOCK_FOODS } from '../data/mockFoods';
import { recordFoodView, isFoodSaved, toggleSaveFood } from '../services/userPreferenceService';

const SPICE_COLORS: Record<string, string> = {
  None: 'text-green-500',
  Mild: 'text-green-500',
  Medium: 'text-orange-400',
  Hot: 'text-red-500',
  'Very Hot': 'text-red-700',
};

export default function FoodDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const food = id ? FOOD_MAP.get(id) : undefined;
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (food) {
      recordFoodView(food.id, food.cuisine);
      setSaved(isFoodSaved(food.id));
    }
  }, [food]);

  if (!food) {
    return (
      <Layout>
        <div className="pt-32 page-container text-center">
          <p className="text-5xl mb-4">🍽️</p>
          <h1 className="heading-section mb-3">Dish not found</h1>
          <Link to="/explore" className="text-accent hover:underline">← Back to Explore</Link>
        </div>
      </Layout>
    );
  }

  const related = MOCK_FOODS.filter(
    (f) => f.id !== food.id && (f.cuisine === food.cuisine || f.moods.some((m) => food.moods.includes(m))),
  ).slice(0, 3);

  return (
    <Layout>
      <div className="page-container pt-24 pb-24">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          id="food-detail-back"
          className="flex items-center gap-2 mb-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Gallery Hero */}
        <FoodGallery gallery={food.gallery} name={food.name} />

        {/* Content Layout */}
        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Title block */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between gap-4 mb-2">
                <p className="micro-caption text-accent">
                  {food.cuisine} {food.region ? `• ${food.region}` : ''}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    const next = toggleSaveFood(food.id);
                    setSaved(next);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    saved
                      ? 'bg-rose-500 text-white border-rose-500'
                      : 'border-border text-muted-foreground hover:text-rose-500 hover:border-rose-300'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${saved ? 'fill-current' : ''}`} />
                  {saved ? 'Saved' : 'Save dish'}
                </button>
              </div>

              <h1
                className="heading-editorial mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {food.name}
              </h1>
              <p className="body-editorial text-muted-foreground max-w-2xl leading-relaxed">{food.description}</p>

              {/* Mood & Sensory Match Pills */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {food.moods.map((m) => (
                  <span
                    key={m}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 capitalize"
                  >
                    {m}
                  </span>
                ))}
                {food.texture.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-foreground/80 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Meta pills */}
              <div className="flex flex-wrap gap-3 mt-5">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Prep {food.prepTime}m + Cook {food.cookTime}m
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {food.servings} serving{food.servings !== 1 ? 's' : ''}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <ChefHat className="w-4 h-4" />
                  {food.difficulty}
                </span>
                {food.spiceLevel !== 'None' && (
                  <span className={`flex items-center gap-1.5 text-sm ${SPICE_COLORS[food.spiceLevel] || 'text-orange-500'}`}>
                    <Flame className="w-4 h-4" />
                    {food.spiceLevel}
                  </span>
                )}
              </div>

              {/* Diet tags */}
              {food.dietTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {food.dietTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Story / origin */}
            {(food.story || food.origin) && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="p-6 rounded-2xl bg-secondary/40 border border-border"
              >
                {food.origin && (
                  <p className="micro-caption text-accent mb-3">Origin: {food.origin}</p>
                )}
                {food.story && (
                  <p className="text-sm leading-relaxed text-muted-foreground italic">
                    {food.story}
                  </p>
                )}
              </motion.div>
            )}

            {/* Flavor profile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="heading-section mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                Flavour Profile
              </h2>
              <FlavorProfile
                primary={food.flavorProfile.primary}
                secondary={food.flavorProfile.secondary}
                texture={food.texture}
              />
            </motion.div>

            {/* Anatomy */}
            {food.anatomy && food.anatomy.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <h2 className="heading-section mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Dish Anatomy
                </h2>
                <div className="space-y-3">
                  {food.anatomy.map((layer, i) => (
                    <motion.div
                      key={layer.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.07 }}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card"
                    >
                      <div
                        className="w-4 h-4 rounded-full shrink-0 mt-0.5 ring-2 ring-offset-2 ring-border"
                        style={{ backgroundColor: layer.color ?? '#ccc' }}
                      />
                      <div>
                        <p className="text-sm font-semibold">{layer.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{layer.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* In-line Make This Hero Banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-accent/15 via-accent/5 to-card border border-accent/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
            >
              <div>
                <span className="micro-caption text-accent font-bold">Interactive Kitchen Preparation</span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ready to prepare {food.name}?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-md">
                  Step-by-step guidance, ingredient scaling, heat cues, timers, and chef troubleshooting.
                </p>
              </div>
              <Link
                to={`/cook/${food.id}`}
                id="food-detail-inline-cook-cta"
                className="flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 shadow-md active:scale-95 transition-all whitespace-nowrap"
              >
                <ChefHat className="w-5 h-5" />
                MAKE THIS
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Ingredients & Equipment */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="heading-section mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                What you'll need
              </h2>
              
              <div className="space-y-8">
                <div>
                  <p className="micro-caption text-muted-foreground mb-3">Ingredients</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {food.ingredients.map((ing) => (
                      <div
                        key={ing.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-muted border border-border text-sm"
                      >
                        <span className="font-medium">
                          {ing.name}
                          {ing.optional && (
                            <span className="ml-1.5 text-xs text-muted-foreground">(optional)</span>
                          )}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {ing.amount} {ing.unit ?? ''}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {food.equipment && food.equipment.length > 0 && (
                  <div>
                    <p className="micro-caption text-muted-foreground mb-3 flex items-center gap-1.5">
                      <Wrench className="w-4 h-4" /> Equipment
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {food.equipment.map((eq) => (
                        <span key={eq} className="px-3 py-1.5 rounded-lg border border-border text-xs text-muted-foreground">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Substitutions & Variations */}
            {(food.substitutions?.length || food.variations?.length) ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                className="grid sm:grid-cols-2 gap-5"
              >
                {food.substitutions && food.substitutions.length > 0 && (
                  <div className="p-5 rounded-2xl bg-secondary/30 border border-border">
                    <p className="micro-caption text-foreground mb-3">Substitutions</p>
                    <ul className="space-y-2">
                      {food.substitutions.map((sub) => (
                        <li key={sub} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-0.5 text-accent">→</span> {sub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {food.variations && food.variations.length > 0 && (
                  <div className="p-5 rounded-2xl bg-secondary/30 border border-border">
                    <p className="micro-caption text-foreground mb-3">Variations</p>
                    <ul className="space-y-2">
                      {food.variations.map((v) => (
                        <li key={v} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-0.5 text-accent">✨</span> {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ) : null}

            {/* Tips & Mistakes */}
            {(food.tips?.length || food.commonMistakes?.length) ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="grid sm:grid-cols-2 gap-5"
              >
                {food.tips && food.tips.length > 0 && (
                  <div className="p-5 rounded-2xl bg-green-50 border border-green-200 dark:bg-green-900/10 dark:border-green-800">
                    <p className="micro-caption text-green-700 dark:text-green-400 mb-3">Pro Tips</p>
                    <ul className="space-y-2">
                      {food.tips.map((t) => (
                        <li key={t} className="text-sm text-green-800 dark:text-green-300 flex items-start gap-2">
                          <span className="mt-0.5">✓</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {food.commonMistakes && food.commonMistakes.length > 0 && (
                  <div className="p-5 rounded-2xl bg-red-50 border border-red-200 dark:bg-red-900/10 dark:border-red-800">
                    <p className="micro-caption text-red-600 dark:text-red-400 mb-3">Common Mistakes</p>
                    <ul className="space-y-2">
                      {food.commonMistakes.map((m) => (
                        <li key={m} className="text-sm text-red-700 dark:text-red-300 flex items-start gap-2">
                          <span className="mt-0.5">✗</span> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Sticky CTA */}
            <div className="sticky top-24 space-y-4">
              <Link
                to={`/cook/${food.id}`}
                id="food-detail-cook-cta"
                className="flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-sm hover:bg-accent/90 shadow-md active:scale-[0.98] transition-all tracking-wide"
              >
                <ChefHat className="w-5 h-5" />
                MAKE THIS
              </Link>
              <Link
                to="/journal"
                id="food-detail-journal-cta"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Add to Journal
              </Link>
              <Link
                to={`/compare?a=${food.id}`}
                id="food-detail-compare-cta"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
              >
                <Scale className="w-4 h-4" />
                Compare Dishes
              </Link>

              {/* Nutrition card */}
              <div className="p-5 rounded-2xl border border-border bg-card">
                <p className="micro-caption text-muted-foreground mb-4">Nutrition per serving</p>
                <div className="space-y-3">
                  {[
                    { label: 'Calories', value: `${food.nutrition.calories} kcal` },
                    { label: 'Protein', value: `${food.nutrition.protein}g` },
                    { label: 'Carbs', value: `${food.nutrition.carbs}g` },
                    { label: 'Fat', value: `${food.nutrition.fat}g` },
                    ...(food.nutrition.fiber ? [{ label: 'Fiber', value: `${food.nutrition.fiber}g` }] : []),
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pairings */}
              {food.pairings && food.pairings.length > 0 && (
                <div className="p-5 rounded-2xl border border-border bg-card">
                  <p className="micro-caption text-muted-foreground mb-3">Best pairings</p>
                  <div className="flex flex-wrap gap-2">
                    {food.pairings.map((p) => (
                      <span key={p} className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Related dishes */}
        {related.length > 0 && (
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="heading-section mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((f) => (
                <Link
                  key={f.id}
                  to={`/food/${f.id}`}
                  id={`related-food-${f.id}`}
                  className="food-card group hover-lift"
                >
                  <div className="h-44 overflow-hidden">
                    <img src={f.gallery.hero} alt={f.name} className="food-card-image w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">{f.cuisine}</p>
                    <h3 className="font-semibold text-sm group-hover:text-accent transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {f.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
