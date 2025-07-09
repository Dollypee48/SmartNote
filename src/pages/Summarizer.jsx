import { useState } from "react";
import NoteInput from "../components/NoteInput";
import SummaryOutput from "../components/SummaryOutput";
import Toolbar from "../components/Toolbar";
import useLocalStorage from "../hooks/useLocalStorage";
import { summarizeText } from "../utils/summarizeText";

export default function Summarizer() {
  const [text, setText] = useLocalStorage("smartnotes_input", "");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [tone, setTone] = useState("neutral");

  const handleSummarize = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const result = await summarizeText(text, tone);
    setSummary(result);
    setLoading(false);
  };

  const handleClear = () => {
    setText("");
    setSummary("");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-white dark:from-zinc-900 dark:to-zinc-950 px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-8 space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-2">
            Summarize Your Notes
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Paste your notes below, choose a tone, and generate an AI summary instantly.
          </p>
        </div>

        {/* Input */}
        <div>
          <NoteInput value={text} onChange={setText} />
          <Toolbar text={text} />
        </div>

        {/* Tone Selector + Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">🧠 Tone:</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="border rounded-lg px-4 py-2 bg-white dark:bg-zinc-800 dark:border-zinc-700 text-sm text-zinc-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            >
              <option value="neutral">Neutral</option>
              <option value="formal">Formal</option>
              <option value="casual">Casual</option>
              <option value="academic">Academic</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-2 sm:mt-6 flex gap-4">
            {/* Summarize Button */}
            <button
              onClick={handleSummarize}
              disabled={!text.trim()}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition duration-200 ${
                !text.trim()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-400"
              }`}
            >
              {loading ? "Summarizing..." : "🚀 Summarize"}
            </button>

            {/* Clear Button */}
            <button
              onClick={handleClear}
              className="px-5 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-100 hover:bg-red-200 dark:bg-zinc-800 dark:text-red-400 dark:hover:bg-zinc-700 transition"
            >
              🔁 Clear
            </button>
          </div>
        </div>

        {/* Summary Output */}
        {summary && <SummaryOutput summary={summary} />}
      </div>
    </main>
  );
}
