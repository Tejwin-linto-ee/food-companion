import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, ChefHat, Clock, Check, AlertTriangle, Timer, ChevronRight, ChevronLeft,
  BookOpen, Camera, Minus, Plus, Utensils, Wrench, Flame, Eye,
  Smile, Wind, Volume2, ShieldAlert, RefreshCw, HelpCircle, CheckCircle2,
  Maximize2, Minimize2, ListChecks, Search, X, Sparkles, Compass
} from 'lucide-react';
import { FOOD_MAP } from '../data/mockFoods';
import Layout from '../components/Layout';
import { recordFoodCooked } from '../services/userPreferenceService';
import { getCookingDetails, type CookingGuideData, UNIVERSAL_COOKING_GLOSSARY } from '../data/foods/cookingData';

type UnitMode = 'metric' | 'imperial' | 'common';

interface TimerState {
  stepIndex: number;
  remaining: number;
  totalDuration: number;
  running: boolean;
}

// Gentle audio chime when kitchen timer finishes
function playKitchenChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.9);
  } catch {
    // AudioContext blocked or not allowed in browser
  }
}

export default function CookMode() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const food = id ? FOOD_MAP.get(id) : undefined;

  // Servings, Units & Modes
  const [servings, setServings] = useState<number>(() => {
    if (!id) return 2;
    const saved = localStorage.getItem(`cook_servings_${id}`);
    return saved ? parseInt(saved, 10) : (food?.servings || 2);
  });
  const [unitMode, setUnitMode] = useState<UnitMode>('metric');
  const [isKitchenMode, setIsKitchenMode] = useState(false);
  const [isBeginnerMode, setIsBeginnerMode] = useState(true);
  const [showGlossary, setShowGlossary] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState('');
  const [expandedLookFor, setExpandedLookFor] = useState(false);

  // Active step & progress
  const [currentStep, setCurrentStep] = useState<number>(() => {
    if (!id) return 0;
    const saved = localStorage.getItem(`cook_step_${id}`);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [completedSteps, setCompletedSteps] = useState<Set<number>>(() => {
    if (!id) return new Set();
    try {
      const saved = localStorage.getItem(`cook_completed_${id}`);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Checklist states
  const [checkedIngredients, setCheckedIngredients] = useState<Set<string>>(() => {
    if (!id) return new Set();
    try {
      const saved = localStorage.getItem(`cook_checked_ing_${id}`);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [checkedEquipment, setCheckedEquipment] = useState<Set<string>>(new Set());
  const [checkedPrep, setCheckedPrep] = useState<Set<number>>(new Set());

  // Timer state
  const [timerState, setTimerState] = useState<TimerState | null>(null);

  // Active tab on mobile / sidebar: 'steps' | 'prep' | 'help'
  const [sidebarTab, setSidebarTab] = useState<'steps' | 'prep' | 'help'>('steps');

  // Load enriched cooking guide
  const guide: CookingGuideData = useMemo(() => {
    if (!food) {
      return {
        servings: 2,
        prepTime: 20,
        cookTime: 30,
        difficulty: 'Medium',
        overview: { summary: '', appearance: '', texture: '', flavor: '' },
        equipment: [],
        beforeYouStart: [],
        ingredientPrepGuide: [],
        essentialIngredients: [],
        optionalIngredients: [],
        steps: [],
        commonMistakes: [],
        troubleshooting: [],
        substitutions: [],
        safetyNotes: [],
        servingGuide: {},
        cookingGlossary: UNIVERSAL_COOKING_GLOSSARY
      };
    }
    return getCookingDetails(food, servings);
  }, [food, servings]);

  // Record cook signal on first mount
  useEffect(() => {
    if (food) {
      recordFoodCooked(food.id, food.cuisine);
    }
  }, [food]);

  // Persist state to localStorage
  useEffect(() => {
    if (id) {
      localStorage.setItem(`cook_step_${id}`, currentStep.toString());
      localStorage.setItem(`cook_servings_${id}`, servings.toString());
      localStorage.setItem(`cook_completed_${id}`, JSON.stringify(Array.from(completedSteps)));
      localStorage.setItem(`cook_checked_ing_${id}`, JSON.stringify(Array.from(checkedIngredients)));
    }
  }, [id, currentStep, servings, completedSteps, checkedIngredients]);

  // Timer interval
  useEffect(() => {
    if (!timerState || !timerState.running) return;
    if (timerState.remaining <= 0) {
      playKitchenChime();
      setTimerState((prev) => (prev ? { ...prev, running: false } : null));
      return;
    }
    const timerId = setTimeout(() => {
      setTimerState((prev) => (prev ? { ...prev, remaining: prev.remaining - 1 } : null));
    }, 1000);
    return () => clearTimeout(timerId);
  }, [timerState]);

  if (!food) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center">
            <p className="text-5xl mb-4">🍽️</p>
            <h1 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dish not found
            </h1>
            <Link to="/explore" className="text-accent hover:underline text-sm font-medium">
              ← Back to Explore
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const stepsCount = guide.steps.length || 1;
  const currentStepData = guide.steps[currentStep] || guide.steps[0];
  const isFirst = currentStep === 0;
  const isLast = currentStep === stepsCount - 1;
  const isAllStepsDone = completedSteps.size >= stepsCount;
  const progressPercent = Math.round((completedSteps.size / stepsCount) * 100);

  const toggleStepCompleted = (idx: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const toggleIngredient = (name: string) => {
    setCheckedIngredients((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const toggleEquipment = (name: string) => {
    setCheckedEquipment((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const togglePrepTask = (idx: number) => {
    setCheckedPrep((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const startTimer = (durationMinutes: number) => {
    setTimerState({
      stepIndex: currentStep,
      remaining: durationMinutes * 60,
      totalDuration: durationMinutes * 60,
      running: true
    });
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const getIngredientAmountDisplay = (ing: { amount?: string; metric?: string; imperial?: string; common?: string }) => {
    if (unitMode === 'imperial' && ing.imperial) return ing.imperial;
    if (unitMode === 'common' && ing.common) return ing.common;
    return ing.metric || ing.amount || '';
  };

  const filteredGlossary = (guide.cookingGlossary || UNIVERSAL_COOKING_GLOSSARY).filter((g) =>
    g.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
    g.meaning.toLowerCase().includes(glossarySearch.toLowerCase())
  );

  return (
    <Layout>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isKitchenMode ? 'bg-zinc-950 text-zinc-100 font-sans' : 'bg-background text-foreground'
      }`}>
        {/* Top Sticky Header */}
        <header className="sticky top-0 z-40 bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl border-b border-border shadow-xs">
          <div className="page-container h-16 sm:h-20 flex items-center justify-between gap-3">
            {/* Back to food detail */}
            <button
              onClick={() => navigate(`/food/${food.id}`)}
              id="cook-mode-back"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Exit Cook Mode</span>
            </button>

            {/* Dish Title & Meta Banner */}
            <div className="text-center overflow-hidden">
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-accent uppercase font-bold tracking-wider">
                <span>{food.cuisine}</span>
                <span>•</span>
                <span>{food.difficulty}</span>
                <span>•</span>
                <span>Total {guide.prepTime + guide.cookTime}m</span>
              </div>
              <h1
                className="font-bold text-sm sm:text-lg md:text-xl truncate"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {food.name}
              </h1>
            </div>

            {/* Actions: Beginner Mode, Glossary, Kitchen Mode toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* Beginner vs Quick Mode */}
              <button
                type="button"
                id="toggle-beginner-mode"
                onClick={() => setIsBeginnerMode((b) => !b)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border text-xs font-semibold transition-all ${
                  isBeginnerMode
                    ? 'bg-accent/15 text-accent border-accent/40 shadow-xs'
                    : 'bg-muted border-border text-muted-foreground hover:text-foreground'
                }`}
                title="Toggle Beginner Mode (detailed mini-lessons) vs Quick Mode"
              >
                <span>{isBeginnerMode ? '🎓 Beginner Mode' : '⚡ Quick Mode'}</span>
              </button>

              {/* Glossary Button */}
              <button
                type="button"
                id="open-glossary-btn"
                onClick={() => setShowGlossary(true)}
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                title="Culinary Terms Glossary"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Glossary</span>
              </button>

              {/* Kitchen Mode Toggle */}
              <button
                type="button"
                id="toggle-kitchen-mode"
                onClick={() => setIsKitchenMode((p) => !p)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border text-xs font-medium transition-all ${
                  isKitchenMode
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-xs'
                    : 'border-border text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                title="Kitchen Mode: High-contrast, large text for countertop cooking"
              >
                {isKitchenMode ? <Minimize2 className="w-3.5 h-3.5 text-amber-400" /> : <Maximize2 className="w-3.5 h-3.5" />}
                <span className="hidden md:inline">{isKitchenMode ? 'Normal View' : 'Kitchen Mode'}</span>
              </button>
            </div>
          </div>

          {/* Progress bar line */}
          <div className="w-full bg-muted/60 h-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-emerald-500 transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </header>

        {/* Cooking Workspace */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left Sidebar: Steps, Prep & Ingredients, Chef Support */}
          <aside className="w-full lg:w-96 border-b lg:border-b-0 lg:border-r border-border bg-card/50 p-4 sm:p-6 space-y-6 overflow-y-auto max-h-[85vh] lg:max-h-[calc(100vh-5rem)]">
            {/* Servings Adjuster & Unit Mode */}
            <div className="p-4 rounded-2xl bg-background border border-border space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground">Servings Adjuster</p>
                  <p className="text-[11px] text-muted-foreground">Auto-scales ingredient measurements</p>
                </div>
                <div className="flex items-center gap-2 bg-muted rounded-xl p-1 border border-border">
                  <button
                    type="button"
                    onClick={() => setServings((s) => Math.max(1, s - 1))}
                    disabled={servings <= 1}
                    className="w-7 h-7 rounded-lg bg-background flex items-center justify-center text-xs font-bold hover:bg-card active:scale-95 disabled:opacity-40"
                    aria-label="Decrease servings"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center font-mono font-bold text-sm">{servings}</span>
                  <button
                    type="button"
                    onClick={() => setServings((s) => s + 1)}
                    className="w-7 h-7 rounded-lg bg-background flex items-center justify-center text-xs font-bold hover:bg-card active:scale-95"
                    aria-label="Increase servings"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Unit System Selector */}
              <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs">
                <span className="text-muted-foreground">Measurement Unit:</span>
                <div className="flex gap-1 bg-muted p-0.5 rounded-lg border border-border">
                  {(['metric', 'imperial', 'common'] as UnitMode[]).map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUnitMode(u)}
                      className={`px-2 py-1 rounded-md text-[10px] font-semibold capitalize transition-all ${
                        unitMode === u
                          ? 'bg-foreground text-background shadow-xs'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Navigation Tabs */}
            <div className="flex rounded-xl bg-muted p-1 border border-border text-xs font-medium">
              <button
                type="button"
                onClick={() => setSidebarTab('steps')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  sidebarTab === 'steps' ? 'bg-background text-foreground shadow-xs font-semibold' : 'text-muted-foreground'
                }`}
              >
                Steps ({stepsCount})
              </button>
              <button
                type="button"
                onClick={() => setSidebarTab('prep')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  sidebarTab === 'prep' ? 'bg-background text-foreground shadow-xs font-semibold' : 'text-muted-foreground'
                }`}
              >
                Ingredients & Prep
              </button>
              <button
                type="button"
                onClick={() => setSidebarTab('help')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  sidebarTab === 'help' ? 'bg-background text-foreground shadow-xs font-semibold' : 'text-muted-foreground'
                }`}
              >
                Chef Support
              </button>
            </div>

            {/* TAB CONTENT: STEPS OUTLINE */}
            {sidebarTab === 'steps' && (
              <div className="space-y-2">
                <p className="micro-caption text-muted-foreground mb-2">Step Navigation</p>
                {guide.steps.map((s, idx) => {
                  const isCurrent = idx === currentStep;
                  const isDone = completedSteps.has(idx);
                  return (
                    <button
                      key={s.step || idx}
                      type="button"
                      onClick={() => setCurrentStep(idx)}
                      className={`w-full text-left p-3 rounded-xl border text-xs flex items-center gap-3 transition-all ${
                        isCurrent
                          ? 'bg-accent/10 border-accent text-accent font-semibold shadow-xs'
                          : isDone
                          ? 'bg-muted/40 border-border/60 text-muted-foreground'
                          : 'bg-background border-border text-foreground hover:bg-muted'
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                          isDone
                            ? 'bg-emerald-500 text-white'
                            : isCurrent
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isDone ? '✓' : idx + 1}
                      </span>
                      <div className="truncate flex-1">
                        <p className="truncate font-medium">{s.title}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{s.heat || 'Standard'}</p>
                      </div>
                      {s.duration && (
                        <span className="text-[10px] text-muted-foreground shrink-0">{s.duration}m</span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* TAB CONTENT: INGREDIENTS & PREP */}
            {sidebarTab === 'prep' && (
              <div className="space-y-6">
                {/* Dish Overview Box */}
                {guide.overview && (
                  <div className="p-4 rounded-2xl bg-muted/40 border border-border space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-accent flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" /> What You Are Creating
                    </p>
                    <p className="text-xs text-foreground/90 leading-relaxed">{guide.overview.summary}</p>
                    <div className="pt-2 border-t border-border/60 space-y-1 text-[11px] text-muted-foreground">
                      <p><strong className="text-foreground">Target Look:</strong> {guide.overview.appearance}</p>
                      <p><strong className="text-foreground">Target Texture:</strong> {guide.overview.texture}</p>
                    </div>
                  </div>
                )}

                {/* Before You Start Prep Checklist */}
                {guide.beforeYouStart.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
                      <ListChecks className="w-3.5 h-3.5 text-accent" />
                      Before You Cook Checklist ({checkedPrep.size}/{guide.beforeYouStart.length})
                    </p>
                    <div className="space-y-1.5">
                      {guide.beforeYouStart.map((p, idx) => {
                        const isDone = checkedPrep.has(idx);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => togglePrepTask(idx)}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-all ${
                              isDone
                                ? 'bg-muted/30 border-border/40 text-muted-foreground line-through'
                                : 'bg-background border-border text-foreground hover:border-accent/40'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center text-[10px] shrink-0 ${
                                isDone ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground/40'
                              }`}
                            >
                              {isDone && '✓'}
                            </span>
                            <span className="flex-1 leading-snug">{typeof p === 'string' ? p : p.task}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Ingredient Knife Preparation Guide */}
                {guide.ingredientPrepGuide && guide.ingredientPrepGuide.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Utensils className="w-3.5 h-3.5 text-accent" />
                      Knife Skills & Preparation
                    </p>
                    <div className="space-y-2">
                      {guide.ingredientPrepGuide.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-card border border-border text-xs space-y-1">
                          <p className="font-bold text-foreground">{item.item}</p>
                          <p className="text-muted-foreground text-[11px] leading-relaxed">{item.technique}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Essential Ingredients */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-accent" />
                    Essential Ingredients ({checkedIngredients.size}/{guide.essentialIngredients.length})
                  </p>
                  <div className="space-y-1.5">
                    {guide.essentialIngredients.map((ing) => {
                      const isChecked = checkedIngredients.has(ing.name);
                      return (
                        <button
                          key={ing.name}
                          type="button"
                          onClick={() => toggleIngredient(ing.name)}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
                            isChecked
                              ? 'bg-muted/30 border-border/40 text-muted-foreground line-through'
                              : 'bg-background border-border text-foreground hover:border-accent/40'
                          }`}
                        >
                          <span
                            className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] shrink-0 ${
                              isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground/40'
                            }`}
                          >
                            {isChecked && '✓'}
                          </span>
                          <div className="flex-1 truncate">
                            <span className="font-medium">{ing.name}</span>
                            {ing.prep && <p className="text-[10px] text-muted-foreground truncate">{ing.prep}</p>}
                          </div>
                          <span className="text-muted-foreground shrink-0 text-[11px] font-mono">
                            {getIngredientAmountDisplay(ing)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Optional Ingredients */}
                {guide.optionalIngredients.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Optional Enhancements
                    </p>
                    <div className="space-y-1.5">
                      {guide.optionalIngredients.map((ing) => {
                        const isChecked = checkedIngredients.has(ing.name);
                        return (
                          <button
                            key={ing.name}
                            type="button"
                            onClick={() => toggleIngredient(ing.name)}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-center gap-2.5 transition-all ${
                              isChecked
                                ? 'bg-muted/30 border-border/40 text-muted-foreground line-through'
                                : 'bg-background border-border text-foreground hover:border-accent/40'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border flex items-center justify-center text-[10px] shrink-0 ${
                                isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground/40'
                              }`}
                            >
                              {isChecked && '✓'}
                            </span>
                            <span className="font-medium truncate flex-1">{ing.name}</span>
                            <span className="text-muted-foreground shrink-0 text-[11px] font-mono">
                              {getIngredientAmountDisplay(ing)}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Equipment Checklist with Purpose */}
                {guide.equipment.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-accent" />
                      Required Equipment
                    </p>
                    <div className="space-y-2">
                      {guide.equipment.map((eq) => {
                        const isChecked = checkedEquipment.has(eq);
                        const purposeObj = guide.equipmentPurpose?.find((ep) => eq.toLowerCase().includes(ep.name.toLowerCase()));
                        return (
                          <button
                            key={eq}
                            type="button"
                            onClick={() => toggleEquipment(eq)}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 transition-all ${
                              isChecked
                                ? 'bg-muted/30 border-border/40 text-muted-foreground line-through'
                                : 'bg-background border-border text-foreground hover:border-accent/40'
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center text-[10px] shrink-0 ${
                                isChecked ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-muted-foreground/40'
                              }`}
                            >
                              {isChecked && '✓'}
                            </span>
                            <div className="flex-1">
                              <p className="font-medium">{eq}</p>
                              {purposeObj && (
                                <p className="text-[10px] text-muted-foreground mt-0.5">{purposeObj.purpose}</p>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: CHEF SUPPORT */}
            {sidebarTab === 'help' && (
              <div className="space-y-5 text-xs">
                {/* Common Mistakes */}
                {guide.commonMistakes.length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 space-y-2.5">
                    <p className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" /> Common Beginner Mistakes
                    </p>
                    {guide.commonMistakes.map((m, idx) => (
                      <div key={idx} className="space-y-0.5 text-rose-950 dark:text-rose-200">
                        <p className="font-semibold">✗ {m.mistake}</p>
                        <p className="text-muted-foreground text-[11px]">→ {m.remedy}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Troubleshooting */}
                {guide.troubleshooting.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-3">
                    <p className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4" /> If Something Goes Wrong
                    </p>
                    {guide.troubleshooting.map((t, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-background/60 border border-amber-500/20 space-y-1 text-amber-950 dark:text-amber-200">
                        <p className="font-semibold text-xs text-amber-800 dark:text-amber-300">⚠️ {t.problem}</p>
                        {(t.whyItHappened || t.whatHappened) && (
                          <p className="text-[11px] text-muted-foreground">
                            <strong className="text-foreground/80">Cause:</strong> {t.whyItHappened || t.whatHappened}
                          </p>
                        )}
                        <p className="text-[11px] text-foreground/90">
                          <strong className="text-emerald-600 dark:text-emerald-400">Fix now:</strong> {t.whatToDoNow || t.solution}
                        </p>
                        {t.howToPrevent && (
                          <p className="text-[10px] text-muted-foreground italic">
                            <strong>Prevention:</strong> {t.howToPrevent}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Substitutions */}
                {guide.substitutions.length > 0 && (
                  <div className="p-4 rounded-2xl bg-card border border-border space-y-2.5">
                    <p className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <RefreshCw className="w-4 h-4 text-accent" /> Substitutions
                    </p>
                    {guide.substitutions.map((sub, idx) => {
                      const isObj = typeof sub === 'object' && sub !== null && 'original' in sub;
                      return (
                        <div key={idx} className="space-y-0.5">
                          <p className="font-semibold text-foreground">
                            {isObj ? `${(sub as any).original} → ${(sub as any).substitute}` : String(sub)}
                          </p>
                          {isObj && (sub as any).impact && (
                            <p className="text-muted-foreground text-[11px]">{(sub as any).impact}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Safety Notes */}
                {guide.safetyNotes.length > 0 && (
                  <div className="p-4 rounded-2xl bg-muted/50 border border-border space-y-2">
                    <p className="font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-accent" /> Safety Information
                    </p>
                    <ul className="space-y-1.5 text-muted-foreground text-[11px] list-disc list-inside">
                      {guide.safetyNotes.map((note, idx) => (
                        <li key={idx}>{typeof note === 'string' ? note : (note as any).substitute || JSON.stringify(note)}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </aside>

          {/* Main Active Step Execution View */}
          <main className="flex-1 flex flex-col justify-between overflow-y-auto">
            <div className="page-container py-8 md:py-12 max-w-3xl mx-auto w-full flex-1">
              {/* Step Navigation Pill Banner */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold text-sm flex items-center justify-center shadow-xs">
                    {currentStep + 1}
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Step {currentStep + 1} of {stepsCount}</p>
                    <p className="text-sm font-bold text-foreground">{currentStepData.title}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {currentStepData.heat && (
                    <span className="flex items-center gap-1 text-xs font-bold text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
                      <Flame className="w-3.5 h-3.5" />
                      {currentStepData.heat}
                    </span>
                  )}
                  {currentStepData.duration && (
                    <span className="flex items-center gap-1 text-xs font-bold text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                      <Clock className="w-3.5 h-3.5" />
                      {currentStepData.duration} min
                    </span>
                  )}
                </div>
              </div>

              {/* Step Detail Card with Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  <h2
                    className={`${isKitchenMode ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} font-bold tracking-tight`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {currentStepData.title}
                  </h2>

                  {/* What you need for this step */}
                  {currentStepData.whatYouNeed && currentStepData.whatYouNeed.length > 0 && isBeginnerMode && (
                    <div className="flex flex-wrap items-center gap-1.5 p-3 rounded-2xl bg-muted/30 border border-border text-xs">
                      <span className="text-muted-foreground font-semibold uppercase text-[10px] mr-1">You will need:</span>
                      {currentStepData.whatYouNeed.map((item, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 rounded-full bg-background border border-border text-[11px] font-medium text-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Instructions (Full Detailed in Beginner Mode vs Condensed in Quick Mode) */}
                  <div className="p-6 rounded-3xl bg-card border border-border shadow-xs space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                        {isBeginnerMode ? 'What To Do & Step Overview' : 'Quick Instructions'}
                      </p>
                      <p className={`${isKitchenMode ? 'text-lg sm:text-xl leading-relaxed' : 'text-base sm:text-lg leading-relaxed'} text-foreground/90 font-sans`}>
                        {isBeginnerMode
                          ? currentStepData.description
                          : (currentStepData.quickInstructions || currentStepData.description)}
                      </p>
                    </div>

                    {/* How to do it: Physical Technique */}
                    {isBeginnerMode && currentStepData.howToDoIt && (
                      <div className="pt-3 border-t border-border/60">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                          How to do it (Chef Technique)
                        </p>
                        <p className="text-sm leading-relaxed text-foreground/85">
                          {currentStepData.howToDoIt}
                        </p>
                      </div>
                    )}

                    {/* Heat Description */}
                    {isBeginnerMode && currentStepData.heatDescription && (
                      <div className="flex items-center gap-2 text-xs text-orange-700 dark:text-orange-400 bg-orange-500/10 p-2.5 rounded-xl border border-orange-500/20">
                        <Flame className="w-4 h-4 shrink-0" />
                        <span><strong>Burner guidance:</strong> {currentStepData.heatDescription}</span>
                      </div>
                    )}
                  </div>

                  {/* Physical Doneness Cue (Never Timer Alone!) */}
                  {isBeginnerMode && (currentStepData.donenessCue || currentStepData.visualCues) && (
                    <div className="p-4 rounded-2xl bg-accent/10 border border-accent/25 flex items-start gap-3">
                      <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-accent">
                          Visual & Physical Doneness Cue (Don’t rely on a timer alone!)
                        </p>
                        <p className="text-xs sm:text-sm text-foreground/90 mt-1 leading-relaxed">
                          {currentStepData.donenessCue || currentStepData.visualCues}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Checkpoint Banner (if applicable) */}
                  {currentStepData.checkpoint && (
                    <div className="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                      <p className="text-xs sm:text-sm font-semibold text-amber-900 dark:text-amber-200 leading-relaxed">
                        {currentStepData.checkpoint}
                      </p>
                    </div>
                  )}

                  {/* Sensory Cues: See, Hear, Smell, Feel / Texture */}
                  {isBeginnerMode && (currentStepData.see || currentStepData.hear || currentStepData.smell || currentStepData.feel || currentStepData.textureCheck) && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {currentStepData.see && (
                        <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/60 space-y-1">
                          <p className="text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                            <Eye className="w-3.5 h-3.5" /> See
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{currentStepData.see}</p>
                        </div>
                      )}
                      {currentStepData.hear && (
                        <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/60 space-y-1">
                          <p className="text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                            <Volume2 className="w-3.5 h-3.5" /> Hear
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{currentStepData.hear}</p>
                        </div>
                      )}
                      {currentStepData.smell && (
                        <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/60 space-y-1">
                          <p className="text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                            <Wind className="w-3.5 h-3.5" /> Smell
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{currentStepData.smell}</p>
                        </div>
                      )}
                      {(currentStepData.feel || currentStepData.textureCheck) && (
                        <div className="p-3.5 rounded-2xl bg-muted/40 border border-border/60 space-y-1">
                          <p className="text-[11px] font-bold text-accent uppercase tracking-wider flex items-center gap-1">
                            <Smile className="w-3.5 h-3.5" /> Feel / Texture
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {currentStepData.feel || currentStepData.textureCheck}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Expandable "What Should This Look Like?" visual helper */}
                  {isBeginnerMode && currentStepData.whatShouldThisLookLike && (
                    <div className="border border-border rounded-2xl p-4 bg-muted/20">
                      <button
                        type="button"
                        onClick={() => setExpandedLookFor(!expandedLookFor)}
                        className="flex items-center justify-between w-full text-xs font-bold text-foreground"
                      >
                        <span className="flex items-center gap-1.5 text-accent">
                          <Eye className="w-4 h-4" />
                          What should this look like? (Visual Guide)
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">{expandedLookFor ? '− Collapse' : '+ Expand'}</span>
                      </button>
                      {expandedLookFor && (
                        <p className="text-xs text-muted-foreground mt-2.5 leading-relaxed pl-5 border-l-2 border-accent">
                          {currentStepData.whatShouldThisLookLike}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Chef's Pro Tip */}
                  {isBeginnerMode && currentStepData.tip && (
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-emerald-500 text-lg">💡</span>
                      <div>
                        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">
                          Chef's Pro Tip
                        </p>
                        <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                          {currentStepData.tip}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Common Mistake / Watch Out */}
                  {isBeginnerMode && currentStepData.warning && (
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                      <AlertTriangle className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-0.5">
                          Watch Out / Don't Do This ❌
                        </p>
                        <p className="text-sm text-rose-800 dark:text-rose-200 leading-relaxed">
                          {currentStepData.warning}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Interactive Timer for this step */}
                  {currentStepData.duration && (
                    <div className="p-5 rounded-2xl border border-border bg-card shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
                          <Timer className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                            Interactive Kitchen Timer
                          </p>
                          <p className="text-3xl font-mono font-bold text-foreground">
                            {timerState && timerState.stepIndex === currentStep
                              ? formatTimer(timerState.remaining)
                              : `${currentStepData.duration}:00`}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {timerState && timerState.stepIndex === currentStep ? (
                          <>
                            <button
                              type="button"
                              onClick={() => setTimerState((t) => (t ? { ...t, running: !t.running } : null))}
                              className="px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-bold shadow-xs"
                            >
                              {timerState.running ? 'Pause' : 'Resume'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setTimerState(null)}
                              className="px-4 py-2.5 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground"
                            >
                              Reset
                            </button>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={() => startTimer(currentStepData.duration!)}
                            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-foreground text-background text-xs font-bold hover:bg-foreground/90 transition-colors shadow-md"
                          >
                            <Timer className="w-4 h-4" />
                            Start Timer ({currentStepData.duration}m)
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Move on when... Criteria Box */}
                  {currentStepData.moveOnWhen && isBeginnerMode && (
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          Move on to next step when:
                        </p>
                        <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 mt-0.5 leading-relaxed">
                          {currentStepData.moveOnWhen}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Step Completed Button */}
                  <button
                    type="button"
                    onClick={() => toggleStepCompleted(currentStep)}
                    className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      completedSteps.has(currentStep)
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'border-2 border-dashed border-border hover:border-emerald-500 text-muted-foreground hover:text-emerald-500'
                    }`}
                  >
                    <Check className="w-4 h-4" />
                    {completedSteps.has(currentStep) ? 'Step Completed ✓' : 'Mark Step as Complete'}
                  </button>

                  {/* Completion Celebration Card when allDone / isLast */}
                  {(isAllStepsDone || isLast) && completedSteps.has(currentStep) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/15 via-background to-card border-2 border-emerald-500/40 text-center space-y-5 shadow-2xl mt-8"
                    >
                      {/* Hero Image in Celebration Card */}
                      <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-xl">
                        <img
                          src={food.gallery.hero}
                          alt={food.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <span className="micro-caption text-emerald-600 dark:text-emerald-400 font-bold">Culinary Mastery</span>
                        <h3
                          className="text-3xl font-bold mt-1"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          YOU MADE IT.
                        </h3>
                        <p className="text-sm text-muted-foreground max-w-md mx-auto mt-2 leading-relaxed">
                          Your homemade <strong>{food.name}</strong> is ready. Complete the food loop: photograph your plating for AI visual analysis, or record your tasting notes in your food journal.
                        </p>
                      </div>

                      {/* Serving Guide tips */}
                      {guide.servingGuide && (
                        <div className="max-w-md mx-auto p-4 rounded-2xl bg-card border border-border text-left text-xs space-y-1.5">
                          <p className="font-bold text-foreground">Chef Plating & Serving Tips:</p>
                          {guide.servingGuide.restingTime && (
                            <p className="text-muted-foreground">⏳ <strong>Resting:</strong> {guide.servingGuide.restingTime}</p>
                          )}
                          {guide.servingGuide.garnishing && (
                            <p className="text-muted-foreground">🌿 <strong>Garnish:</strong> {guide.servingGuide.garnishing}</p>
                          )}
                          {guide.servingGuide.accompaniments && (
                            <p className="text-muted-foreground">🍽️ <strong>Pair with:</strong> {guide.servingGuide.accompaniments}</p>
                          )}
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                        <Link
                          to="/analyze"
                          state={{ preselectedFood: food.name, cuisine: food.cuisine }}
                          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-xs shadow-md hover:bg-accent/90 active:scale-[0.98] transition-all"
                        >
                          <Camera className="w-4 h-4" />
                          Photograph & AI Analyze
                        </Link>
                        <Link
                          to="/journal"
                          state={{ openAdd: true, dishName: food.name, cuisine: food.cuisine, mood: food.moods[0] }}
                          className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-card font-semibold text-xs hover:bg-muted active:scale-[0.98] transition-all"
                        >
                          <BookOpen className="w-4 h-4" />
                          Rate & Save to Journal
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky Bottom Navigation Bar */}
            <div className="sticky bottom-0 border-t border-border bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl py-4 z-30">
              <div className="page-container max-w-3xl mx-auto flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep((p) => Math.max(0, p - 1))}
                  disabled={isFirst}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-xs font-semibold disabled:opacity-30 hover:bg-muted transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>

                <div className="text-center text-xs font-mono text-muted-foreground">
                  Step {currentStep + 1} / {stepsCount}
                </div>

                {!isLast ? (
                  <button
                    type="button"
                    onClick={() => {
                      toggleStepCompleted(currentStep);
                      setCurrentStep((p) => Math.min(stepsCount - 1, p + 1));
                    }}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-accent text-accent-foreground text-xs font-bold hover:bg-accent/90 transition-all shadow-md active:scale-95"
                  >
                    Next Step
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to="/analyze"
                    state={{ preselectedFood: food.name, cuisine: food.cuisine }}
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-all shadow-md active:scale-95"
                  >
                    <Camera className="w-4 h-4" />
                    Finish & Photograph
                  </Link>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Culinary Glossary Modal */}
      <AnimatePresence>
        {showGlossary && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowGlossary(false)}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-xl mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-border flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Culinary Cooking Glossary
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Plain-English explanations for home cooks
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGlossary(false)}
                  className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                  aria-label="Close glossary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search input */}
              <div className="p-4 border-b border-border bg-muted/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    value={glossarySearch}
                    onChange={(e) => setGlossarySearch(e.target.value)}
                    placeholder="Search cooking term (e.g. Sauté, Simmer, Deglaze, Al dente)…"
                    className="w-full pl-9 pr-4 py-2 rounded-xl bg-background border border-border text-xs focus:outline-none focus:ring-2 focus:ring-accent/40"
                  />
                </div>
              </div>

              {/* Terms List */}
              <div className="p-5 overflow-y-auto space-y-4 flex-1">
                {filteredGlossary.map((term) => (
                  <div key={term.term} className="p-3.5 rounded-xl bg-muted/30 border border-border space-y-1">
                    <p className="font-bold text-accent text-sm">{term.term}</p>
                    <p className="text-xs text-foreground/90 leading-relaxed">{term.meaning}</p>
                    {term.exampleInRecipe && (
                      <p className="text-[11px] text-muted-foreground italic pt-1 border-t border-border/40">
                        Example: "{term.exampleInRecipe}"
                      </p>
                    )}
                  </div>
                ))}
                {filteredGlossary.length === 0 && (
                  <p className="text-center py-8 text-xs text-muted-foreground">No matching culinary terms found.</p>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}
