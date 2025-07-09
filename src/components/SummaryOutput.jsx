import { useState } from "react";
import { jsPDF } from "jspdf";
import DictionaryPopup from "./DictionaryPopup";
import { getWordDefinition } from "../utils/getWordDefinition";

export default function SummaryOutput({ summary }) {
  const [copied, setCopied] = useState(false);
  const [popup, setPopup] = useState(null);

  const handleWordClick = async (word) => {
    const definition = await getWordDefinition(word);
    setPopup({ word, definition });
  };

  const renderTextWithClickableWords = () => {
    return summary.split(" ").map((word, index) => (
      <span
        key={index}
        onClick={() => handleWordClick(word.replace(/[^\w]/g, ""))}
        className="cursor-pointer hover:underline hover:text-purple-600"
      >
        {word}{" "}
      </span>
    ));
  };

  return (
    <div className="p-4 bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded relative">
      <h3 className="font-semibold mb-2 text-lg">📝 Summary</h3>
      <p className="text-zinc-700 dark:text-zinc-100 whitespace-pre-wrap mb-4 leading-relaxed">
        {renderTextWithClickableWords()}
      </p>

      {popup && (
        <div className="absolute top-10 left-10">
          <DictionaryPopup
            word={popup.word}
            meaning={popup.definition}
            onClose={() => setPopup(null)}
          />
        </div>
      )}

      <div className="flex gap-4 justify-end">
        <button
          onClick={() => {
            navigator.clipboard.writeText(summary);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="text-sm text-purple-600 hover:underline"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
        <button
          onClick={() => {
            const doc = new jsPDF();
            doc.text(summary, 10, 10);
            doc.save("summary.pdf");
          }}
          className="text-sm text-purple-600 hover:underline"
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}
