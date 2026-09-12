import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Discover', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'Analyze', href: '/analyze' },
  { label: 'Journal', href: '/journal' },
  { label: 'Insights', href: '/insights' },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile nav on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="page-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
              aria-label="Food Companion home"
            >
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
              <span
                className="text-lg font-semibold tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Food<span className="text-accent">Companion</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  id={`nav-${link.label.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-accent/10 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                to="/analyze"
                id="nav-cta-analyze"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Analyze Dish
              </Link>
              <button
                id="nav-mobile-toggle"
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setMobileOpen((p) => !p)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-72 bg-background border-l border-border flex flex-col md:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <span className="font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Menu
                </span>
                <button
                  className="p-2 rounded-lg hover:bg-muted"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col p-5 gap-2 flex-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <Link
                      to={link.href}
                      id={`mobile-nav-${link.label.toLowerCase()}`}
                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? 'bg-accent/10 text-accent'
                          : 'hover:bg-muted text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-5 border-t border-border">
                <Link
                  to="/analyze"
                  id="mobile-nav-cta"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90"
                >
                  <Sparkles className="w-4 h-4" />
                  Analyze a Dish
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
