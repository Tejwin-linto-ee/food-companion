# 🍽️ Food Companion — AI-Powered Personal Food World

An immersive, full-featured culinary platform and food journal. Discover dishes by mood and cravings, learn authentic cooking techniques with sensory-guided steps, analyze food photographs with multimodal AI vision and reference matching, rate experiences, and build a lasting personal food memory.

$$\textbf{DISCOVER} \longrightarrow \textbf{EXPLORE} \longrightarrow \textbf{COOK} \longrightarrow \textbf{PHOTOGRAPH} \longrightarrow \textbf{ANALYZE} \longrightarrow \textbf{RATE} \longrightarrow \textbf{REMEMBER} \longrightarrow \textbf{LEARN}$$

---

## ✨ Features

### 1. 🧭 Mood & Cravings Discovery
- **Context-Aware Recommendations**: Match dishes based on your current mood (*Comforting, Cozy, Energetic, Indulgent, Adventurous, Refreshing*), time budget, energy level, dietary restrictions, and spice preferences.
- **Pantry Discovery**: Enter ingredients on hand to find matched dishes with missing-ingredient breakdowns.
- **Surprise Me**: Random curated dish generator with instant dietary filtering.

### 2. 📖 189 Authentic Handcrafted Recipes
- **100% Coverage**: All 189 dishes in the catalog feature complete, beginner-friendly mini-lessons across 15 global culinary traditions (Indian, Italian, East Asian, Southeast Asian, Mediterranean, Americas, and Global heritage).
- **Interactive Servings Scaler**: Dynamically scales essential and optional ingredients with exact metric and imperial units.
- **Multi-Sensory Cues**: Detailed benchmarks for each cooking step:
  - 👁️ **Sight**: Color progression, reduction benchmarks, and emulsion gloss.
  - 👂 **Sound**: Sizzle rates, boiling indicators, and auditory transitions.
  - 👃 **Smell**: Fragrance bloom, toasted aromatics, and caramelization cues.
  - ✋ **Feel / Texture**: Resistance, bounce, and chew benchmarks.
- **4-Part Troubleshooting**: Every dish includes structured problem-solving:
  - *Problem $\rightarrow$ Chemical / Thermal Cause $\rightarrow$ Immediate Fix $\rightarrow$ Future Prevention*.

### 3. 📸 Upgraded AI Analyze Mode
- **Reference-Based Food Identification**: Matches uploaded dish photos against the curated 189-dish reference dataset with verified local photography.
- **Mobile Camera First**: Native camera capture (`capture="environment"`) with live photo preview and retake.
- **Pre-Flight Image Quality Inspection**: HTML5 Canvas engine calculates pixel luminance and Laplacian edge gradients, flagging blurry or poorly lit photos with actionable advice.
- **Truthful Multimodal AI Vision**:
  - Powered by **Google Gemini 1.5 Flash** (via optional `VITE_GEMINI_API_KEY`).
  - **Zero-Key Fallback**: Built-in client-side visual feature matcher analyzing color histograms and category archetypes when offline or without an API key.
  - **No Fake Certainty**: Calibrates results into 4 honest tiers (*High Confidence, Medium Confidence, Low Confidence, No Confident Match*).
- **"Did AI Get It Right?" Flow**: Side-by-side photo vs reference comparison with candidate alternatives and a searchable 189-dish manual correction modal.
- **Context-Aware Visual Presentation Scoring (0–100)**: Evaluates physical presentation across 7 dimensions (*Presentation, Color, Composition, Visible Texture, Plating, Garnish, Visual Balance*) with tailored criteria for curries, pizzas, pastas, desserts, and home-style dishes.

### 4. ⭐ Strict AI vs. Human Dining Separation & Journal
- **Clean Distinction**: AI scores strictly evaluate visual plating and presentation. Personal taste, aroma, texture, and overall impressions are rated separately (1–5 stars) by the user.
- **Persistent Food Journal**: Captures photos, AI predictions, human corrections, sensory ratings, and notes in localStorage.
- **Taste Insights**: Charts flavor profiles, cuisine distributions, and favorite meals over time.

---

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite & TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS Design Tokens
- **Icons & Animation**: Lucide React, Framer Motion
- **UI Primitives**: Radix UI / shadcn-ui components
- **State & Data**: React Router v6, TanStack Query
- **Computer Vision**: HTML5 Canvas, Google Gemini 1.5 Flash Vision API (optional)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tejwin-linto-ee/food-companion.git
   cd food-companion
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment (Optional)**:
   ```bash
   cp .env.example .env
   ```
   *To enable Gemini 1.5 Flash multimodal vision analysis, add your Google AI Studio key to `VITE_GEMINI_API_KEY` in `.env`. If left empty, Food Companion will automatically use its built-in client-side visual reference matcher.*

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:8080/`.

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📂 Project Structure

```text
food-companion/
├── public/
│   └── food/                 # 189 verified local food reference images (*.jpg)
├── src/
│   ├── components/           # Reusable UI primitives, Layout, Navigation, and Food cards
│   │   ├── food/             # FoodCard, VisualScore, FoodSelectorModal, PantryDiscovery
│   │   └── ui/               # shadcn / Radix UI components
│   ├── data/
│   │   ├── mockFoods.ts      # Master 189-dish catalog with metadata & visual descriptors
│   │   ├── foods/            # cookingData.ts, flavor profiles, nutrition
│   │   └── recipes/          # 189 handcrafted recipes by region & glossary
│   ├── pages/
│   │   ├── Index.tsx         # Mood discovery & editorial hero
│   │   ├── Explore.tsx       # 189-food searchable, filterable catalog
│   │   ├── FoodDetail.tsx    # Comprehensive dish overview & sensory breakdown
│   │   ├── CookMode.tsx      # Step-by-step guided cooking with timers & troubleshooting
│   │   ├── Analyze.tsx       # Upgraded AI Analyze Mode with mobile camera & journal
│   │   ├── Journal.tsx       # Personal food memories & ratings log
│   │   ├── Compare.tsx       # Side-by-side dish comparison tool
│   │   └── Insights.tsx      # Taste profile analytics & eating habits
│   ├── services/
│   │   ├── aiAnalysisService.ts      # FoodIdentificationService (Gemini Vision + Visual Matcher)
│   │   ├── foodReferenceService.ts   # 189-dish reference knowledge base & search
│   │   ├── imageProcessingService.ts # Canvas sharpness, luminance & resizing
│   │   ├── recommendationService.ts  # Mood & context recommendation algorithms
│   │   └── userPreferenceService.ts  # Taste profiles & journal localStorage storage
│   ├── types/
│   │   └── food.ts           # Core TypeScript interfaces & confidence tiers
│   ├── App.tsx               # Route definitions
│   └── main.tsx              # Application entry point
├── .env.example              # Template for optional API configuration
└── package.json
```

---

## 🔒 Security & Privacy

- **No Secrets Tracked**: API keys are never bundled into client distributions or committed to version control.
- **Local Persistence**: Food journal entries and taste profiles remain stored securely in your browser's `localStorage`.

---

## 📄 License

This project is licensed under the MIT License.
