import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Camera, BarChart3, Compass, ArrowUpRight } from 'lucide-react';

const FOOTER_LINKS = [
  {
    heading: 'Discover',
    links: [
      { label: 'Browse all foods', href: '/explore' },
      { label: 'Mood-based picks', href: '/' },
      { label: 'Compare dishes', href: '/compare' },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { label: 'AI Dish Analyzer', href: '/analyze' },
      { label: 'Cook Mode', href: '/explore' },
      { label: 'Food Journal', href: '/journal' },
    ],
  },
  {
    heading: 'Insights',
    links: [
      { label: 'Your patterns', href: '/insights' },
      { label: 'Ratings history', href: '/journal' },
      { label: 'Visual scores', href: '/insights' },
    ],
  },
];

const FEATURE_ICONS = [
  { icon: Compass, label: 'Discover', href: '/' },
  { icon: Camera, label: 'Analyze', href: '/analyze' },
  { icon: BookOpen, label: 'Journal', href: '/journal' },
  { icon: BarChart3, label: 'Insights', href: '/insights' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto">
      {/* Top CTA band */}
      <div className="border-b border-background/10">
        <div className="page-container py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="micro-caption text-background/50 mb-3">Your personal food world</p>
            <h2
              className="text-3xl md:text-4xl font-medium text-background leading-tight max-w-md"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Every meal deserves to be remembered.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/journal"
              id="footer-cta-journal"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background text-foreground text-sm font-medium hover:bg-background/90 active:scale-95 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Start your journal
            </Link>
            <Link
              to="/analyze"
              id="footer-cta-analyze"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              Analyze a dish
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="page-container py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
              <span
                className="text-lg font-semibold tracking-tight text-background"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                FoodCompanion
              </span>
            </Link>
            <p className="text-sm text-background/50 leading-relaxed mb-6 max-w-xs">
              AI-powered food discovery, analysis, and journaling — your complete personal food world.
            </p>
            <div className="flex gap-3">
              {FEATURE_ICONS.map(({ icon: Icon, label, href }) => (
                <Link
                  key={href}
                  to={href}
                  id={`footer-icon-${label.toLowerCase()}`}
                  title={label}
                  className="w-9 h-9 rounded-lg bg-background/8 hover:bg-background/15 flex items-center justify-center transition-colors text-background/60 hover:text-background"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-background/40 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-background/60 hover:text-background flex items-center gap-1 group transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="page-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Food Companion. Built with love for food lovers.
          </p>
          <p className="text-xs text-background/30">
            AI analysis is for visual scoring only — not nutritional advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
