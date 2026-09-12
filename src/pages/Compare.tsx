import { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Plus, X, ArrowRight, ChefHat, Clock, Flame } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import FlavorProfile from '../components/food/FlavorProfile';
import { MOCK_FOODS, FOOD_MAP } from '../data/mockFoods';
import type { Food } from '../types/food';

function FoodSelector({
  selected,
  onSelect,
  exclude,
  label,
  slotId,
}: {
  selected?: Food;
  onSelect: (f: Food) => void;
  exclude?: string;
  label: string;
  slotId: string;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const options = MOCK_FOODS.filter(
    (f) => f.id !== exclude && f.name.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="relative">
      <button
        id={slotId}
        onClick={() => setOpen((p) => !p)}
        className="w-full p-4 rounded-2xl border-2 border-dashed border-border hover:border-accent/50 transition-all text-left"
      >
        {selected ? (
          <div className="flex items-center gap-3">
            <img src={selected.gallery.hero} alt={selected.name} className="w-12 h-12 rounded-lg object-cover" />
            <div>
              <p className="text-xs text-muted-foreground">{selected.cuisine}</p>
              <p className="font-semibold text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                {selected.name}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Plus className="w-5 h-5" />
            <span className="text-sm">{label}</span>
          </div>
        )}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-2 z-20 bg-card border border-border rounded-xl shadow-xl overflow-hidden">
          <div className="p-3 border-b border-border">
            <input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes…"
              className="w-full px-3 py-2 rounded-lg bg-muted text-sm focus:outline-none"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {options.map((f) => (
              <button
                key={f.id}
                onClick={() => { onSelect(f); setOpen(false); setQ(''); }}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors text-left"
              >
                <img src={f.gallery.hero} alt={f.name} className="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <p className="text-xs text-muted-foreground">{f.cuisine}</p>
                  <p className="text-sm font-medium">{f.name}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CompareColumn({ food }: { food: Food }) {
  return (
    <div className="space-y-6">
      <div className="h-52 rounded-2xl overflow-hidden">
        <img src={food.gallery.hero} alt={food.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <p className="micro-caption text-accent">{food.cuisine}</p>
        <h2
          className="text-2xl font-semibold mt-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {food.name}
        </h2>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{food.description}</p>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Total time', value: `${food.prepTime + food.cookTime}m` },
          { label: 'Servings', value: food.servings },
          { label: 'Difficulty', value: food.difficulty },
          { label: 'Spice', value: food.spiceLevel },
          { label: 'Calories', value: `${food.nutrition.calories} kcal` },
          { label: 'Budget', value: food.budget ?? '—' },
        ].map(({ label, value }) => (
          <div key={label} className="p-3 rounded-xl bg-muted border border-border">
            <p className="text-xs text-muted-foreground">{label}</p>
            <p className="font-semibold text-sm mt-0.5">{value}</p>
          </div>
        ))}
      </div>

      <FlavorProfile
        primary={food.flavorProfile.primary}
        secondary={food.flavorProfile.secondary}
        texture={food.texture}
      />

      <div>
        <p className="micro-caption text-muted-foreground mb-2">Diet tags</p>
        <div className="flex flex-wrap gap-2">
          {food.dietTags.length > 0 ? food.dietTags.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/10 dark:text-green-300 dark:border-green-800">
              {t}
            </span>
          )) : <span className="text-xs text-muted-foreground">None specified</span>}
        </div>
      </div>

      <Link
        to={`/food/${food.id}`}
        id={`compare-detail-${food.id}`}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
      >
        Full details <ArrowRight className="w-4 h-4" />
      </Link>
      <Link
        to={`/cook/${food.id}`}
        id={`compare-cook-${food.id}`}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all"
      >
        <ChefHat className="w-4 h-4" />
        Cook this
      </Link>
    </div>
  );
}

export default function Compare() {
  const [params] = useSearchParams();
  const initialA = params.get('a') ? FOOD_MAP.get(params.get('a')!) : undefined;

  const [foodA, setFoodA] = useState<Food | undefined>(initialA);
  const [foodB, setFoodB] = useState<Food | undefined>();

  return (
    <Layout>
      <div className="pt-24 pb-24">
        <div className="page-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="micro-caption text-accent mb-2">Side by Side</p>
            <h1
              className="heading-editorial mb-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Compare dishes
            </h1>
            <p className="text-muted-foreground">
              Pick any two dishes to compare their flavour, nutrition, difficulty, and more.
            </p>
          </motion.div>

          {/* Selectors */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div>
              <p className="micro-caption text-muted-foreground mb-3">First dish</p>
              <FoodSelector
                selected={foodA}
                onSelect={setFoodA}
                exclude={foodB?.id}
                label="Choose a dish"
                slotId="compare-select-a"
              />
            </div>
            <div>
              <p className="micro-caption text-muted-foreground mb-3">Second dish</p>
              <FoodSelector
                selected={foodB}
                onSelect={setFoodB}
                exclude={foodA?.id}
                label="Choose a dish"
                slotId="compare-select-b"
              />
            </div>
          </div>

          {/* Comparison */}
          {foodA && foodB ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-2 gap-10"
            >
              <CompareColumn food={foodA} />

              {/* VS divider */}
              <div className="hidden md:flex flex-col items-center justify-start pt-16 absolute left-1/2 -translate-x-1/2">
                <div className="w-10 h-10 rounded-full bg-foreground text-background text-sm font-bold flex items-center justify-center">
                  VS
                </div>
              </div>

              <CompareColumn food={foodB} />
            </motion.div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              <Scale className="w-16 h-16 mx-auto mb-5 opacity-30" />
              <p className="text-sm">Select two dishes above to start comparing</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
