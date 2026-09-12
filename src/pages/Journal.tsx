import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Plus, X, Camera, ArrowUpDown, Sparkles, Image as ImageIcon, Star, Flame, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import JournalCard from '../components/food/JournalCard';
import StarRating from '../components/food/StarRating';
import { getAllEntries, deleteEntry, addEntry, filterEntries, calculateInsights } from '../services/journalService';
import type { FoodJournalEntry, FoodRating, Mood, Cuisine } from '../types/food';

const EMPTY_RATING: FoodRating = { taste: 0, aroma: 0, texture: 0, presentation: 0, overall: 0 };

type SortOption = 'recent' | 'highest' | 'favorites';

const ALL_MOODS: { value: Mood; emoji: string; label: string }[] = [
  { value: 'cozy', emoji: '🍂', label: 'Cozy' },
  { value: 'comforting', emoji: '🏠', label: 'Comforting' },
  { value: 'indulgent', emoji: '✨', label: 'Indulgent' },
  { value: 'spicy', emoji: '🌶️', label: 'Spicy' },
  { value: 'energetic', emoji: '⚡', label: 'Energetic' },
  { value: 'refreshing', emoji: '🌿', label: 'Refreshing' },
  { value: 'light', emoji: '🌱', label: 'Light' },
  { value: 'adventurous', emoji: '🌍', label: 'Adventurous' },
  { value: 'healthy', emoji: '🥗', label: 'Healthy' },
  { value: 'quick', emoji: '⏱️', label: 'Quick' },
  { value: 'romantic', emoji: '🕯️', label: 'Romantic' },
  { value: 'nostalgic', emoji: '📼', label: 'Nostalgic' },
];

const QUICK_TAGS = [
  'PERFECT', 'CRISPY', 'CREAMY', 'TOO SPICY', 'TOO SALTY',
  'FRESH', 'DRY', 'RICH', 'LIGHT', 'WOULD ORDER AGAIN'
];

export default function Journal() {
  const location = useLocation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [entries, setEntries] = useState<FoodJournalEntry[]>([]);
  const [query, setQuery] = useState('');
  const [moodFilter, setMoodFilter] = useState<Mood | ''>('');
  const [sortOption, setSortOption] = useState<SortOption>('recent');
  const [photosOnly, setPhotosOnly] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  // Add entry form state
  const [newDish, setNewDish] = useState('');
  const [newCuisine, setNewCuisine] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [newRating, setNewRating] = useState<FoodRating>(EMPTY_RATING);
  const [newMood, setNewMood] = useState<Mood | ''>('');
  const [newTags, setNewTags] = useState<string[]>([]);
  const [newImage, setNewImage] = useState<string | null>(null);

  useEffect(() => {
    setEntries(getAllEntries());

    // Check if coming from CookMode or Analyze with pre-filled state
    if (location.state?.openAdd) {
      setShowAdd(true);
      if (location.state.dishName) setNewDish(location.state.dishName);
      if (location.state.cuisine) setNewCuisine(location.state.cuisine);
      if (location.state.mood) setNewMood(location.state.mood as Mood);
    }
  }, [location.state]);

  const handleDelete = (id: string) => {
    deleteEntry(id);
    setEntries(getAllEntries());
  };

  const handleImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setNewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    if (!newDish.trim() || newRating.overall === 0) return;
    addEntry({
      dishName: newDish.trim(),
      cuisine: (newCuisine.trim() || 'Mediterranean') as Cuisine,
      notes: newNotes.trim() || undefined,
      rating: newRating,
      mood: newMood || undefined,
      tags: newTags.length > 0 ? newTags : undefined,
      image: newImage || undefined,
    });
    setEntries(getAllEntries());
    setNewDish('');
    setNewCuisine('');
    setNewNotes('');
    setNewRating(EMPTY_RATING);
    setNewMood('');
    setNewTags([]);
    setNewImage(null);
    setShowAdd(false);
  };

  // Filter and sort entries
  let filtered = filterEntries(entries, query, moodFilter || undefined, undefined);

  if (photosOnly) {
    filtered = filtered.filter(e => Boolean(e.image));
  }

  if (sortOption === 'highest') {
    filtered = [...filtered].sort((a, b) => b.rating.overall - a.rating.overall);
  } else if (sortOption === 'favorites') {
    filtered = [...filtered]
      .filter(e => e.rating.overall >= 4.5)
      .sort((a, b) => b.rating.overall - a.rating.overall);
  } else {
    // recent
    filtered = [...filtered].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  const insights = calculateInsights(entries);

  return (
    <Layout>
      <div className="pt-24 pb-24">
        {/* Header */}
        <div className="page-container mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6"
          >
            <div>
              <p className="micro-caption text-accent mb-2">Personal Visual Archive</p>
              <h1
                className="heading-editorial"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Your Food Journal
              </h1>
              <p className="text-muted-foreground mt-2 max-w-md">
                Every great meal, captured and remembered. {entries.length} experience{entries.length !== 1 ? 's' : ''} logged into your personal taste memory.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/analyze"
                id="journal-analyze-cta"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
              >
                <Camera className="w-4 h-4 text-accent" />
                Analyze & Photograph
              </Link>
              <button
                id="journal-add-entry"
                onClick={() => setShowAdd(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 active:scale-[0.98] transition-all"
              >
                <Plus className="w-4 h-4" />
                Log a Meal
              </button>
            </div>
          </motion.div>
        </div>

        {/* Personal Insights Strip (Only when enough data exists) */}
        {entries.length >= 2 && insights.length > 0 && (
          <div className="page-container mb-8">
            <div className="p-5 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="micro-caption text-foreground font-semibold">Taste Insights & Patterns</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {insights.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-muted/40 border border-border/50">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span>{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                    <div className="font-semibold text-foreground text-sm truncate" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {item.value}
                    </div>
                    <p className="text-[11px] text-muted-foreground/80 mt-1 line-clamp-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search, Sort, Filters */}
        <div className="page-container mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                id="journal-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by dish, notes, or cuisine…"
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 placeholder:text-muted-foreground/60"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <div className="relative flex items-center">
                <ArrowUpDown className="absolute left-3 w-3.5 h-3.5 text-muted-foreground pointer-events-none" />
                <select
                  id="journal-sort-select"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value as SortOption)}
                  aria-label="Sort journal entries"
                  className="pl-9 pr-8 py-2.5 rounded-xl bg-muted border border-border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-accent/40 appearance-none cursor-pointer"
                >
                  <option value="recent">Recent First</option>
                  <option value="highest">Highest Rated</option>
                  <option value="favorites">Favorites (★ 4.5+)</option>
                </select>
              </div>

              {/* Photos only toggle */}
              <button
                id="journal-toggle-photos"
                onClick={() => setPhotosOnly((p) => !p)}
                className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                  photosOnly
                    ? 'bg-accent text-accent-foreground border-accent'
                    : 'bg-muted border-border text-muted-foreground hover:text-foreground'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                Photos Only
              </button>
            </div>
          </div>

          {/* Mood Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              id="journal-mood-all"
              onClick={() => setMoodFilter('')}
              className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all border ${
                moodFilter === ''
                  ? 'bg-foreground text-background border-foreground font-semibold'
                  : 'border-border text-muted-foreground hover:text-foreground'
              }`}
            >
              All Moods
            </button>
            {ALL_MOODS.map(({ value, emoji, label }) => (
              <button
                key={value}
                id={`journal-mood-${value}`}
                onClick={() => setMoodFilter((p) => (p === value ? '' : value))}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition-all border ${
                  moodFilter === value
                    ? 'bg-accent text-accent-foreground border-accent font-semibold shadow-sm'
                    : 'border-border text-muted-foreground hover:border-accent/40 hover:text-foreground'
                }`}
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Entries grid */}
        <div className="page-container">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  layout
                >
                  <JournalCard entry={entry} onDelete={handleDelete} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 px-4 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3
                className="text-2xl font-serif font-medium mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {query || moodFilter || photosOnly
                  ? 'No entries match your filters'
                  : 'Your food story starts here'}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {query || moodFilter || photosOnly
                  ? 'Try clearing your filters to see more of your food journey.'
                  : 'Photograph your next meal, analyze its visual presentation, and log how it actually tasted to build your taste profile.'}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {query || moodFilter || photosOnly ? (
                  <button
                    onClick={() => {
                      setQuery('');
                      setMoodFilter('');
                      setPhotosOnly(false);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all"
                  >
                    Reset Filters
                  </button>
                ) : (
                  <>
                    <Link
                      to="/analyze"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 active:scale-[0.98] transition-all"
                    >
                      <Camera className="w-4 h-4" />
                      Photograph & Analyze
                    </Link>
                    <button
                      onClick={() => setShowAdd(true)}
                      className="px-5 py-2.5 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
                    >
                      Log Manually
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Entry Modal */}
      <AnimatePresence>
        {showAdd && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setShowAdd(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 max-w-lg mx-auto bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto max-h-[88vh]"
            >
              <div className="p-6">
                {/* Modal header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h2
                      className="text-xl font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      Log Food Experience
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Record the meal and save what you tasted
                    </p>
                  </div>
                  <button
                    onClick={() => setShowAdd(false)}
                    id="journal-modal-close"
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Photo Upload */}
                  <div>
                    <label className="micro-caption text-muted-foreground block mb-2">
                      Meal Photograph (Optional)
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-border rounded-xl p-3 text-center cursor-pointer hover:border-accent/50 hover:bg-muted/30 transition-all"
                    >
                      {newImage ? (
                        <div className="relative h-32 rounded-lg overflow-hidden">
                          <img src={newImage} alt="Meal preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setNewImage(null);
                            }}
                            className="absolute top-2 right-2 p-1 rounded-full bg-black/60 text-white"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2 py-3 text-muted-foreground">
                          <Camera className="w-4 h-4 text-accent" />
                          <span className="text-xs">Click to upload your dish photo</span>
                        </div>
                      )}
                    </div>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageFile}
                      className="sr-only"
                    />
                  </div>

                  {/* Dish name */}
                  <div>
                    <label htmlFor="new-dish-name" className="micro-caption text-muted-foreground block mb-1.5">
                      Dish name *
                    </label>
                    <input
                      id="new-dish-name"
                      type="text"
                      value={newDish}
                      onChange={(e) => setNewDish(e.target.value)}
                      placeholder="e.g. Handmade Carbonara, Biryani…"
                      className="w-full px-4 py-2 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>

                  {/* Cuisine */}
                  <div>
                    <label htmlFor="new-cuisine" className="micro-caption text-muted-foreground block mb-1.5">
                      Cuisine
                    </label>
                    <input
                      id="new-cuisine"
                      type="text"
                      value={newCuisine}
                      onChange={(e) => setNewCuisine(e.target.value)}
                      placeholder="e.g. Italian, Indian, Japanese…"
                      className="w-full px-4 py-2 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40"
                    />
                  </div>

                  {/* Mood */}
                  <div>
                    <p className="micro-caption text-muted-foreground mb-1.5">What mood accompanied this meal?</p>
                    <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                      {ALL_MOODS.map(({ value, emoji, label }) => (
                        <button
                          key={value}
                          id={`new-entry-mood-${value}`}
                          type="button"
                          onClick={() => setNewMood((p) => (p === value ? '' : value))}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize transition-all ${
                            newMood === value
                              ? 'bg-accent text-accent-foreground border-accent'
                              : 'border-border text-muted-foreground hover:border-accent/50'
                          }`}
                        >
                          {emoji} {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Rating */}
                  <div>
                    <p className="micro-caption text-muted-foreground mb-2">Rate your experiential sensations *</p>
                    <StarRating rating={newRating} onChange={setNewRating} />
                  </div>

                  {/* Experiential Quick Tags */}
                  <div>
                    <p className="micro-caption text-muted-foreground mb-1.5">Quick impressions</p>
                    <div className="flex flex-wrap gap-1.5">
                      {QUICK_TAGS.map((tag) => {
                        const isSelected = newTags.includes(tag);
                        return (
                          <button
                            key={tag}
                            type="button"
                            onClick={() =>
                              setNewTags((prev) =>
                                isSelected ? prev.filter((t) => t !== tag) : [...prev, tag]
                              )
                            }
                            className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border transition-all ${
                              isSelected
                                ? 'bg-accent text-accent-foreground border-accent'
                                : 'bg-muted border-border text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            {tag}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="new-notes" className="micro-caption text-muted-foreground block mb-1.5">
                      Personal notes
                    </label>
                    <textarea
                      id="new-notes"
                      value={newNotes}
                      onChange={(e) => setNewNotes(e.target.value)}
                      placeholder="What made this memorable? Aromas, spices, textures…"
                      rows={2}
                      className="w-full px-4 py-2.5 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                    />
                  </div>

                  {/* Save */}
                  <button
                    id="journal-save-entry"
                    onClick={handleSave}
                    disabled={!newDish.trim() || newRating.overall === 0}
                    className="w-full py-3 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-all"
                  >
                    Save to Journal
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
}
