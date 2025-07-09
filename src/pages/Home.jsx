import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-4">Welcome to SmartNotes</h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-8">
        Paste long notes, get clear AI summaries instantly.
        Perfect for lectures, research, and quick reviews.
      </p>
      <Link
        to="/summarize"
        className="inline-block px-6 py-3 text-white bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition"
      >
        🚀 Get Started
      </Link>
    </main>
  );
}
