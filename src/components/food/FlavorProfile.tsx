import { motion } from 'framer-motion';

interface FlavorProfileProps {
  primary: string[];
  secondary?: string[];
  texture?: string[];
}

// Map flavor keywords to visual weight / accent
const FLAVOR_STYLES: Record<string, string> = {
  Rich: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  Creamy: 'bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Savory: 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
  Smoky: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
  Peppery: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  Aromatic: 'bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300',
  Spiced: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  Fresh: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  Bright: 'bg-lime-50 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300',
  Tangy: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Sweet: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-300',
  Umami: 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Nutty: 'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  Garlicky: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Bold: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
  Intense: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  Bittersweet: 'bg-chocolate-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-200',
  Light: 'bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-300',
  Warm: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300',
};

const DEFAULT_STYLE = 'bg-secondary text-secondary-foreground';

function FlavorTag({ label, index }: { label: string; index: number }) {
  const style = FLAVOR_STYLES[label] ?? DEFAULT_STYLE;
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.06 }}
      className={`flavor-tag ${style}`}
    >
      {label}
    </motion.span>
  );
}

export default function FlavorProfile({ primary, secondary, texture }: FlavorProfileProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="micro-caption text-muted-foreground mb-2">Primary flavours</p>
        <div className="flex flex-wrap gap-2">
          {primary.map((f, i) => (
            <FlavorTag key={f} label={f} index={i} />
          ))}
        </div>
      </div>

      {secondary && secondary.length > 0 && (
        <div>
          <p className="micro-caption text-muted-foreground mb-2">Secondary notes</p>
          <div className="flex flex-wrap gap-2">
            {secondary.map((f, i) => (
              <FlavorTag key={f} label={f} index={i + primary.length} />
            ))}
          </div>
        </div>
      )}

      {texture && texture.length > 0 && (
        <div>
          <p className="micro-caption text-muted-foreground mb-2">Texture</p>
          <div className="flex flex-wrap gap-2">
            {texture.map((t, i) => (
              <span
                key={t}
                className="flavor-tag bg-muted text-muted-foreground border-dashed"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
