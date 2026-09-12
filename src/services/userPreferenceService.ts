import type { Mood, Cuisine } from '../types/food';

const PREFERENCES_KEY = 'food_companion_user_preferences';

export interface UserSignals {
  savedFoodIds: string[];
  cookedFoodIds: string[];
  dislikedFoodIds: string[];
  viewedFoodIds: Record<string, number>;
  moodHistory: { mood: Mood; timestamp: string }[];
  cuisineInteractions: Record<string, number>;
  lastCraving?: string;
  notesCount: number;
}

const DEFAULT_SIGNALS: UserSignals = {
  savedFoodIds: [],
  cookedFoodIds: [],
  dislikedFoodIds: [],
  viewedFoodIds: {},
  moodHistory: [],
  cuisineInteractions: {},
  notesCount: 0,
};

function loadSignals(): UserSignals {
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    if (!raw) return { ...DEFAULT_SIGNALS };
    return { ...DEFAULT_SIGNALS, ...JSON.parse(raw) };
  } catch {
    return { ...DEFAULT_SIGNALS };
  }
}

function saveSignals(signals: UserSignals): void {
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(signals));
  } catch (e) {
    console.warn('Failed to save user preferences to localStorage', e);
  }
}

export function isFoodSaved(foodId: string): boolean {
  const signals = loadSignals();
  return signals.savedFoodIds.includes(foodId);
}

export function toggleSaveFood(foodId: string): boolean {
  const signals = loadSignals();
  const exists = signals.savedFoodIds.includes(foodId);
  if (exists) {
    signals.savedFoodIds = signals.savedFoodIds.filter(id => id !== foodId);
  } else {
    signals.savedFoodIds.push(foodId);
  }
  saveSignals(signals);
  return !exists;
}

export function getSavedFoodIds(): string[] {
  return loadSignals().savedFoodIds;
}

export function recordFoodView(foodId: string, cuisine?: string): void {
  const signals = loadSignals();
  signals.viewedFoodIds[foodId] = (signals.viewedFoodIds[foodId] || 0) + 1;
  if (cuisine) {
    signals.cuisineInteractions[cuisine] = (signals.cuisineInteractions[cuisine] || 0) + 1;
  }
  saveSignals(signals);
}

export function recordFoodCooked(foodId: string, cuisine?: string): void {
  const signals = loadSignals();
  if (!signals.cookedFoodIds.includes(foodId)) {
    signals.cookedFoodIds.push(foodId);
  }
  if (cuisine) {
    signals.cuisineInteractions[cuisine] = (signals.cuisineInteractions[cuisine] || 0) + 3; // stronger signal
  }
  saveSignals(signals);
}

export function recordFoodDisliked(foodId: string): void {
  const signals = loadSignals();
  if (!signals.dislikedFoodIds.includes(foodId)) {
    signals.dislikedFoodIds.push(foodId);
  }
  saveSignals(signals);
}

export function recordMoodSelected(mood: Mood): void {
  const signals = loadSignals();
  signals.moodHistory.push({ mood, timestamp: new Date().toISOString() });
  // keep last 50
  if (signals.moodHistory.length > 50) {
    signals.moodHistory = signals.moodHistory.slice(-50);
  }
  saveSignals(signals);
}

export function getUserTasteProfile() {
  const signals = loadSignals();

  // Sort cuisines by interaction count
  const sortedCuisines = Object.entries(signals.cuisineInteractions)
    .sort((a, b) => b[1] - a[1])
    .map(([cuisine]) => cuisine as Cuisine);

  // Count mood frequencies
  const moodCounts = signals.moodHistory.reduce<Record<string, number>>((acc, curr) => {
    acc[curr.mood] = (acc[curr.mood] || 0) + 1;
    return acc;
  }, {});

  const topMoods = Object.entries(moodCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([m]) => m as Mood);

  const totalInteractions =
    signals.savedFoodIds.length +
    signals.cookedFoodIds.length +
    Object.keys(signals.viewedFoodIds).length;

  return {
    favoriteCuisines: sortedCuisines.slice(0, 3),
    topMoods: topMoods.slice(0, 3),
    savedCount: signals.savedFoodIds.length,
    cookedCount: signals.cookedFoodIds.length,
    hasHistory: totalInteractions >= 3,
    signals,
  };
}
