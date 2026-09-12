import type { FoodJournalEntry, FoodInsight, Mood, Cuisine } from '../types/food';
import { MOCK_JOURNAL_ENTRIES } from '../data/mockJournal';

const STORAGE_KEY = 'food_companion_journal';

// ---------- Storage helpers ----------

function loadEntries(): FoodJournalEntry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [...MOCK_JOURNAL_ENTRIES]; // seed with demo data
    return JSON.parse(raw) as FoodJournalEntry[];
  } catch {
    return [...MOCK_JOURNAL_ENTRIES];
  }
}

function saveEntries(entries: FoodJournalEntry[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

// ---------- CRUD ----------

export function getAllEntries(): FoodJournalEntry[] {
  return loadEntries().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function getEntry(id: string): FoodJournalEntry | undefined {
  return loadEntries().find(e => e.id === id);
}

export function addEntry(entry: Omit<FoodJournalEntry, 'id' | 'createdAt'>): FoodJournalEntry {
  const newEntry: FoodJournalEntry = {
    ...entry,
    id: `j${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const entries = loadEntries();
  entries.unshift(newEntry);
  saveEntries(entries);
  return newEntry;
}

export function updateEntry(id: string, updates: Partial<FoodJournalEntry>): FoodJournalEntry | null {
  const entries = loadEntries();
  const idx = entries.findIndex(e => e.id === id);
  if (idx === -1) return null;
  entries[idx] = { ...entries[idx], ...updates };
  saveEntries(entries);
  return entries[idx];
}

export function deleteEntry(id: string): boolean {
  const entries = loadEntries();
  const filtered = entries.filter(e => e.id !== id);
  if (filtered.length === entries.length) return false;
  saveEntries(filtered);
  return true;
}

// ---------- Insights ----------

export function calculateInsights(entries: FoodJournalEntry[]): FoodInsight[] {
  if (entries.length === 0) return [];

  const insights: FoodInsight[] = [];

  // Total entries
  insights.push({
    type: 'stat',
    title: 'Total food experiences',
    value: entries.length,
    description: `You have logged ${entries.length} food experience${entries.length === 1 ? '' : 's'}.`,
    icon: '📖',
    dataPoints: entries.length,
  });

  // Average overall rating
  const avgRating =
    entries.reduce((sum, e) => sum + e.rating.overall, 0) / entries.length;
  insights.push({
    type: 'stat',
    title: 'Average rating',
    value: avgRating.toFixed(1),
    description: `Your average food satisfaction score is ${avgRating.toFixed(1)} out of 5.`,
    icon: '⭐',
    dataPoints: entries.length,
  });

  // Favourite cuisine
  const cuisineCounts = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.cuisine] = (acc[e.cuisine] ?? 0) + 1;
    return acc;
  }, {});
  const favCuisine = Object.entries(cuisineCounts).sort((a, b) => b[1] - a[1])[0];
  if (favCuisine) {
    insights.push({
      type: 'pattern',
      title: 'Favourite cuisine',
      value: favCuisine[0],
      description: `You have logged ${favCuisine[1]} ${favCuisine[0]} meals — your clear favourite.`,
      icon: '🌍',
      dataPoints: favCuisine[1],
    });
  }

  // Most common mood
  const moodEntries = entries.filter(e => e.mood);
  if (moodEntries.length > 0) {
    const moodCounts = moodEntries.reduce<Record<string, number>>((acc, e) => {
      if (e.mood) acc[e.mood] = (acc[e.mood] ?? 0) + 1;
      return acc;
    }, {});
    const topMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0];
    insights.push({
      type: 'pattern',
      title: 'Most common mood',
      value: topMood[0].charAt(0).toUpperCase() + topMood[0].slice(1),
      description: `You eat ${topMood[0]} the most — ${topMood[1]} times recorded.`,
      icon: '🎭',
      dataPoints: topMood[1],
    });
  }

  // Highest rated dish
  const highest = entries.reduce((best, e) =>
    e.rating.overall > best.rating.overall ? e : best,
  );
  insights.push({
    type: 'stat',
    title: 'Highest rated dish',
    value: highest.dishName,
    description: `${highest.dishName} earned your highest rating of ${highest.rating.overall}/5.`,
    icon: '🏆',
    dataPoints: 1,
  });

  // Avg AI visual score (if available)
  const aiEntries = entries.filter(e => e.aiAnalysis);
  if (aiEntries.length >= 2) {
    const avgVisual =
      aiEntries.reduce((sum, e) => sum + (e.aiAnalysis?.visualScore ?? 0), 0) / aiEntries.length;
    insights.push({
      type: 'stat',
      title: 'Average visual score',
      value: `${Math.round(avgVisual)}/100`,
      description: `The AI rated your food presentations an average of ${Math.round(avgVisual)}/100 visually.`,
      icon: '📸',
      dataPoints: aiEntries.length,
    });
  }

  // Recommendation
  const lowestRated = entries
    .filter(e => e.rating.overall < 3.5)
    .map(e => e.cuisine);
  if (lowestRated.length > 0) {
    insights.push({
      type: 'recommendation',
      title: 'Worth exploring',
      description: `Your lower-rated meals were often ${lowestRated[0]} — try a different restaurant or recipe.`,
      icon: '💡',
      dataPoints: lowestRated.length,
    });
  } else {
    insights.push({
      type: 'recommendation',
      title: 'Keep exploring',
      description: 'You rate food highly — try pushing into more adventurous cuisines to discover new favourites.',
      icon: '🗺️',
      dataPoints: entries.length,
    });
  }

  return insights;
}

// ---------- Filter helpers ----------

export function filterEntries(
  entries: FoodJournalEntry[],
  query: string,
  mood?: Mood | '',
  cuisine?: Cuisine | '',
): FoodJournalEntry[] {
  return entries.filter(e => {
    const matchesQuery =
      !query ||
      e.dishName.toLowerCase().includes(query.toLowerCase()) ||
      e.notes?.toLowerCase().includes(query.toLowerCase()) ||
      e.cuisine.toLowerCase().includes(query.toLowerCase());

    const matchesMood = !mood || e.mood === mood;
    const matchesCuisine = !cuisine || e.cuisine === cuisine;

    return matchesQuery && matchesMood && matchesCuisine;
  });
}
