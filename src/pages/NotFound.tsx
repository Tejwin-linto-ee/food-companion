import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Compass, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md"
      >
        <p className="text-8xl mb-6">🍽️</p>
        <h1
          className="text-4xl font-semibold mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          Looks like this dish isn't on the menu. Let's get you back to something delicious.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            id="not-found-home"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Discover
          </Link>
          <Link
            to="/explore"
            id="not-found-explore"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-medium hover:bg-muted transition-all"
          >
            <Compass className="w-4 h-4" />
            Explore dishes
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
