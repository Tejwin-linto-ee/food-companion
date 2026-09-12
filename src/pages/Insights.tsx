import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Star, Globe, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getAllEntries, calculateInsights } from '../services/journalService';
import type { FoodJournalEntry, FoodInsight } from '../types/food';

function InsightCard({ insight, index }: { insight: FoodInsight; index: number }) {
  const isPattern = insight.type === 'pattern';
  const isRec = insight.type === 'recommendation';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className={`p-6 rounded-2xl border ${
        isRec
          ? 'border-accent/30 bg-accent/5'
          : isPattern
          ? 'border-border bg-secondary/30'
          : 'border-border bg-card'
      } hover-lift`}
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl shrink-0">{insight.icon}</span>
        <div className="min-w-0">
          <p className="micro-caption text-muted-foreground mb-1 capitalize">{insight.type}</p>
          <h3
            className="font-semibold text-base mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {insight.title}
          </h3>
          {insight.value !== undefined && (
            <p className="text-2xl font-bold text-accent mb-2">{insight.value}</p>
          )}
          <p className="text-sm text-muted-foreground leading-relaxed">{insight.description}</p>
          {insight.dataPoints && insight.dataPoints > 1 && (
            <p className="text-xs text-muted-foreground/60 mt-2">
              Based on {insight.dataPoints} entries
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function RatingBreakdown({ entries }: { entries: FoodJournalEntry[] }) {
  if (entries.length === 0) return null;

  const categories: { label: string; key: keyof (typeof entries[0])['rating']; emoji: string }[] = [
    { label: 'Taste', key: 'taste', emoji: '👅' },
    { label: 'Aroma', key: 'aroma', emoji: '👃' },
    { label: 'Texture', key: 'texture', emoji: '✋' },
    { label: 'Presentation', key: 'presentation', emoji: '👁️' },
    { label: 'Overall', key: 'overall', emoji: '⭐' },
  ];

  return (
    <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
      <h3
        className="font-semibold text-lg"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Average Ratings
      </h3>
      {categories.map(({ label, key, emoji }) => {
        const avg = entries.reduce((sum, e) => sum + e.rating[key], 0) / entries.length;
        return (
          <div key={key} className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1.5">
                {emoji} {label}
              </span>
              <span className="font-medium">{avg.toFixed(1)}/5</span>
            </div>
            <div className="score-bar">
              <motion.div
                className="score-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${(avg / 5) * 100}%` }}
                transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function CuisineBreakdown({ entries }: { entries: FoodJournalEntry[] }) {
  if (entries.length === 0) return null;

  const counts = entries.reduce<Record<string, number>>((acc, e) => {
    acc[e.cuisine] = (acc[e.cuisine] ?? 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const max = sorted[0]?.[1] ?? 1;

  return (
    <div className="p-6 rounded-2xl border border-border bg-card space-y-4">
      <h3
        className="font-semibold text-lg"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Cuisine Distribution
      </h3>
      {sorted.map(([cuisine, count], i) => (
        <div key={cuisine} className="space-y-1">
          <div className="flex items-center justify-between text-sm">
            <span>{cuisine}</span>
            <span className="text-muted-foreground">{count} meal{count !== 1 ? 's' : ''}</span>
          </div>
          <div className="score-bar">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `hsl(${(i * 47) % 360}, 60%, 55%)`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(count / max) * 100}%` }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.8, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Insights() {
  const [entries, setEntries] = useState<FoodJournalEntry[]>([]);

  useEffect(() => {
    setEntries(getAllEntries());
  }, []);

  const insights = calculateInsights(entries);

  if (entries.length === 0) {
    return (
      <Layout>
        <div className="pt-32 pb-24">
          <div className="page-container max-w-2xl text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" />
            <h1
              className="heading-editorial mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              No data yet
            </h1>
            <p className="text-muted-foreground mb-8">
              Start logging meals in your journal to discover patterns about your food habits.
            </p>
            <Link
              to="/journal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90"
            >
              <BookOpen className="w-4 h-4" />
              Open Journal
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-24">
        {/* Header */}
        <div className="page-container mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="micro-caption text-accent mb-2">Personal Analytics</p>
            <h1
              className="heading-editorial mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Your food story
            </h1>
            <p className="text-muted-foreground">
              {entries.length} meals logged. Here's what your food habits reveal.
            </p>
          </motion.div>
        </div>

        {/* Stat strip */}
        <div className="page-container mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: <BookOpen className="w-5 h-5" />,
                label: 'Meals logged',
                value: entries.length,
              },
              {
                icon: <Star className="w-5 h-5" />,
                label: 'Avg. rating',
                value: (entries.reduce((s, e) => s + e.rating.overall, 0) / entries.length).toFixed(1),
              },
              {
                icon: <Globe className="w-5 h-5" />,
                label: 'Cuisines tried',
                value: new Set(entries.map((e) => e.cuisine)).size,
              },
              {
                icon: <Camera className="w-5 h-5" />,
                label: 'AI analyzed',
                value: entries.filter((e) => e.aiAnalysis).length,
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="p-5 rounded-2xl border border-border bg-card text-center"
              >
                <div className="text-accent mb-2 flex justify-center">{stat.icon}</div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="page-container grid lg:grid-cols-3 gap-8">
          {/* Insights list */}
          <div className="lg:col-span-2 space-y-4">
            <h2
              className="heading-section mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Insights
            </h2>
            {insights.map((ins, i) => (
              <InsightCard key={ins.title} insight={ins} index={i} />
            ))}
          </div>

          {/* Charts sidebar */}
          <div className="space-y-6">
            <RatingBreakdown entries={entries} />
            <CuisineBreakdown entries={entries} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
