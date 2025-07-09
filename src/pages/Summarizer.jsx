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
    const result = await summarizeText(text, tone); // tone not yet used, placeholder for real AI
    setSummary(result);
    setLoading(false);
  };

  const handleClear = () => {
    setText("");
    setSummary("");
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Summarize Your Notes</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          Paste your notes below, choose a tone, and generate an AI summary instantly.
        </p>
      </div>

      {/* Note Input */}
      <div>
        <NoteInput value={text} onChange={setText} />
        <Toolbar text={text} />
      </div>

      {/* Tone Selection */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">🧠 Tone:</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="border rounded px-4 py-2 bg-white dark:bg-zinc-800 dark:border-zinc-700"
          >
            <option value="neutral">Neutral</option>
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="academic">Academic</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="mt-2 sm:mt-6 flex gap-4">
          <button
            onClick={handleSummarize}
            disabled={!text.trim()}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-5 py-2 rounded disabled:bg-gray-400"
          >
            {loading ? "Summarizing..." : "Summarize"}
          </button>
          <button
            onClick={handleClear}
            className="text-red-500 hover:underline text-sm font-medium"
          >
            🔁 Clear
          </button>
        </div>
      </div>

      {/* Summary Output */}
      {summary && <SummaryOutput summary={summary} />}
    </main>
  );
}
