import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Flame, BatteryCharging, Utensils, ShieldCheck } from 'lucide-react';
import type { DiscoveryFilters, Craving, TimeOption, EnergyLevel, SpiceLevel, MealType, DietTag } from '../../types/food';

interface ContextControlsProps {
  filters: DiscoveryFilters;
  onChange: (updated: DiscoveryFilters) => void;
  onSurpriseMe: () => void;
  onReset: () => void;
}

const CRAVINGS: { value: Craving; label: string; emoji: string }[] = [
  { value: 'creamy', label: 'Creamy', emoji: '🥣' },
  { value: 'crispy', label: 'Crispy', emoji: '🥨' },
  { value: 'spicy', label: 'Spicy', emoji: '🌶️' },
  { value: 'sweet', label: 'Sweet', emoji: '🍯' },
  { value: 'filling', label: 'Filling', emoji: '🍲' },
  { value: 'fresh', label: 'Fresh', emoji: '🥗' },
  { value: 'cheesy', label: 'Cheesy', emoji: '🧀' },
  { value: 'comforting', label: 'Comforting', emoji: '🍞' },
];

const TIME_OPTIONS: { value: TimeOption; label: string }[] = [
  { value: '15min', label: '5–15 min' },
  { value: '30min', label: '15–30 min' },
  { value: '60min', label: '30–60 min' },
  { value: 'no-rush', label: 'No rush' },
];

const ENERGY_OPTIONS: { value: EnergyLevel; label: string }[] = [
  { value: 'low', label: 'Low effort' },
  { value: 'normal', label: 'Normal' },
  { value: 'cooking', label: 'I want to cook' },
];

const SPICE_OPTIONS: { value: SpiceLevel | 'any'; label: string }[] = [
  { value: 'any', label: 'No preference' },
  { value: 'Mild', label: 'Mild' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hot', label: 'Hot' },
];

const MEAL_OPTIONS: MealType[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];

const DIET_OPTIONS: { value: DietTag | 'none'; label: string }[] = [
  { value: 'none', label: 'No restriction' },
  { value: 'Vegetarian', label: 'Vegetarian' },
  { value: 'Vegan', label: 'Vegan' },
  { value: 'High-Protein', label: 'High Protein' },
  { value: 'Gluten-Free', label: 'Gluten Free' },
  { value: 'Dairy-Free', label: 'Dairy Free' },
];

export default function ContextControls({
  filters,
  onChange,
  onSurpriseMe,
  onReset,
}: ContextControlsProps) {
  const toggleCraving = (craving: Craving) => {
    onChange({
      ...filters,
      craving: filters.craving === craving ? undefined : craving,
    });
  };

  const toggleTime = (time: TimeOption) => {
    onChange({
      ...filters,
      timeOption: filters.timeOption === time ? undefined : time,
    });
  };

  const toggleEnergy = (energy: EnergyLevel) => {
    onChange({
      ...filters,
      energy: filters.energy === energy ? undefined : energy,
    });
  };

  const toggleSpice = (spice: SpiceLevel | 'any') => {
    onChange({
      ...filters,
      spiceLevel: spice === 'any' || filters.spiceLevel === spice ? undefined : spice,
    });
  };

  const toggleMeal = (meal: MealType) => {
    onChange({
      ...filters,
      mealType: filters.mealType === meal ? undefined : meal,
    });
  };

  const toggleDiet = (diet: DietTag | 'none') => {
    if (diet === 'none') {
      onChange({ ...filters, dietTags: [] });
      return;
    }
    const current = filters.dietTags || [];
    const updated = current.includes(diet)
      ? current.filter(t => t !== diet)
      : [...current, diet];
    onChange({ ...filters, dietTags: updated });
  };

  const activeCount =
    (filters.craving ? 1 : 0) +
    (filters.timeOption ? 1 : 0) +
    (filters.energy ? 1 : 0) +
    (filters.spiceLevel ? 1 : 0) +
    (filters.mealType ? 1 : 0) +
    (filters.dietTags?.length || 0);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl bg-card/80 border border-border p-5 sm:p-6 space-y-6"
    >
      {/* Header with Fast Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
        <div>
          <h3
            className="text-lg font-semibold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What else matters?
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Everything is optional. Fine-tune your craving or just let us surprise you.
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onSurpriseMe}
            id="btn-surprise-me"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-accent/15 text-accent hover:bg-accent hover:text-accent-foreground text-xs font-semibold tracking-wide transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Just Surprise Me
          </button>
          {activeCount > 0 && (
            <button
              type="button"
              onClick={onReset}
              className="text-xs text-muted-foreground hover:text-foreground px-2 py-1 transition-colors"
            >
              Reset ({activeCount})
            </button>
          )}
        </div>
      </div>

      {/* 1. Cravings */}
      <div>
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2.5">
          Specific Craving
        </label>
        <div className="flex flex-wrap gap-2">
          {CRAVINGS.map((c) => {
            const isSelected = filters.craving === c.value;
            return (
              <button
                key={c.value}
                type="button"
                onClick={() => toggleCraving(c.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                  isSelected
                    ? 'bg-accent text-accent-foreground border-accent shadow-sm'
                    : 'bg-background border-border/80 text-foreground/80 hover:border-accent/40'
                }`}
              >
                <span>{c.emoji}</span>
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid for Time, Energy, Spice */}
      <div className="grid sm:grid-cols-3 gap-5">
        {/* Time */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            Time
          </label>
          <div className="flex flex-wrap gap-1.5">
            {TIME_OPTIONS.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => toggleTime(t.value)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  filters.timeOption === t.value
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Energy / Effort */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
            <BatteryCharging className="w-3.5 h-3.5 text-accent" />
            Effort
          </label>
          <div className="flex flex-wrap gap-1.5">
            {ENERGY_OPTIONS.map((e) => (
              <button
                key={e.value}
                type="button"
                onClick={() => toggleEnergy(e.value)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  filters.energy === e.value
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {e.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spice */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
            <Flame className="w-3.5 h-3.5 text-accent" />
            Spice
          </label>
          <div className="flex flex-wrap gap-1.5">
            {SPICE_OPTIONS.map((s) => {
              const isSelected =
                (s.value === 'any' && !filters.spiceLevel) ||
                filters.spiceLevel === s.value;
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => toggleSpice(s.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-background border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Row for Meal & Diet */}
      <div className="grid sm:grid-cols-2 gap-5 pt-2 border-t border-border/60">
        {/* Meal Type */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
            <Utensils className="w-3.5 h-3.5 text-accent" />
            Meal
          </label>
          <div className="flex flex-wrap gap-1.5">
            {MEAL_OPTIONS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => toggleMeal(m)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                  filters.mealType === m
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-background border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary tags */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-accent" />
            Dietary
          </label>
          <div className="flex flex-wrap gap-1.5">
            {DIET_OPTIONS.map((d) => {
              const isSelected =
                d.value === 'none'
                  ? !filters.dietTags || filters.dietTags.length === 0
                  : filters.dietTags?.includes(d.value);
              return (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => toggleDiet(d.value)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-all ${
                    isSelected
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-background border-border/80 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
