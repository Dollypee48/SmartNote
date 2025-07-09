import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950 px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-3xl">🧠</span>
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-white tracking-tight">
            SmartNotes
          </h1>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-700 dark:text-purple-400 mb-4 leading-tight">
          Summarize Notes with AI
        </h2>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 mb-10">
          Paste your notes and get intelligent summaries in seconds. Ideal for students, researchers, and busy minds.
        </p>

        {/* CTA Button */}
        <Link
          to="/summarize"
          className="inline-block px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white text-lg font-medium rounded-xl transition shadow-lg"
        >
          🚀 Get Started
        </Link>
      </div>
    </main>
  );
}
