import { motion } from 'framer-motion';
import type { AIAnalysisResult } from '../../types/food';

interface VisualScoreProps {
  result: AIAnalysisResult;
}

const SCORE_LABELS = [
  { key: 'presentation' as const, label: 'Presentation' },
  { key: 'color' as const, label: 'Colour' },
  { key: 'composition' as const, label: 'Composition' },
  { key: 'visibleTexture' as const, label: 'Texture' },
  { key: 'plating' as const, label: 'Plating' },
  { key: 'garnish' as const, label: 'Garnish' },
  { key: 'visualBalance' as const, label: 'Visual Balance' },
];

function getScoreColour(score: number) {
  if (score >= 85) return '#22c55e';   // green
  if (score >= 70) return '#f59e0b';   // amber
  if (score >= 55) return '#f97316';   // orange
  return '#ef4444';                    // red
}

function getScoreLabel(score: number) {
  if (score >= 90) return 'Exceptional';
  if (score >= 80) return 'Excellent';
  if (score >= 70) return 'Very Good';
  if (score >= 60) return 'Good';
  if (score >= 50) return 'Fair';
  return 'Needs Work';
}

// Circular progress SVG
function CircularScore({ score }: { score: number }) {
  const radius = 56;
  const circumference = 2 * Math.PI * radius;
  const strokeDash = (score / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-36 h-36">
      <svg className="absolute -rotate-90" width="144" height="144">
        <circle cx="72" cy="72" r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
        <motion.circle
          cx="72"
          cy="72"
          r={radius}
          fill="none"
          stroke={getScoreColour(score)}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - strokeDash }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <div className="text-center z-10">
        <motion.p
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.p>
        <p className="text-xs text-muted-foreground">/ 100</p>
      </div>
    </div>
  );
}

export default function VisualScore({ result }: VisualScoreProps) {
  return (
    <div className="space-y-6">
      {/* Main score */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <CircularScore score={result.visualScore} />
        <div>
          <p className="micro-caption text-muted-foreground mb-1">AI Visual Score</p>
          <p
            className="text-2xl font-semibold mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {getScoreLabel(result.visualScore)}
          </p>
          <p className="text-sm text-muted-foreground">
            Based on visual presentation analysis only. Not a taste score.
          </p>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-3">
        <p className="micro-caption text-muted-foreground">Score Breakdown</p>
        {SCORE_LABELS.map(({ key, label }, i) => {
          const val = result.scoreBreakdown[key];
          if (val === undefined || val === null) return null;
          return (
            <div key={key} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">{label}</span>
                <span className="font-medium">{val}</span>
              </div>
              <div className="score-bar">
                <motion.div
                  className="score-bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${val}%` }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.8, ease: 'easeOut' }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Observations */}
      {result.observations.length > 0 && (
        <div>
          <p className="micro-caption text-muted-foreground mb-2">What the AI noticed</p>
          <ul className="space-y-1.5">
            {result.observations.map((obs) => (
              <li key={obs} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                {obs}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Improvements */}
      {result.improvements.length > 0 && (
        <div>
          <p className="micro-caption text-muted-foreground mb-2">AI suggestions</p>
          <ul className="space-y-1.5">
            {result.improvements.map((imp) => (
              <li key={imp} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">→</span>
                {imp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
