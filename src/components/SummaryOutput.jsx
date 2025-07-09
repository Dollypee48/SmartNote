import { useState } from "react";
import { jsPDF } from "jspdf";
import DictionaryPopup from "./DictionaryPopup";
import { getWordDefinition } from "../utils/getWordDefinition";

export default function SummaryOutput({ summary }) {
  const [copied, setCopied] = useState(false);
  const [popup, setPopup] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  const handleWordClick = async (word, event) => {
    const definition = await getWordDefinition(word);
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({ x: rect.left, y: rect.bottom + window.scrollY });
    setPopup({ word, definition });
  };

  const renderTextWithClickableWords = () =>
    summary.split(" ").map((word, index) => {
      const cleaned = word.replace(/[^\w]/g, "");
      return (
        <span
          key={index}
          onClick={(e) => handleWordClick(cleaned, e)}
          className="cursor-pointer inline-block hover:text-purple-600 hover:underline transition duration-150"
        >
          {word + " "}
        </span>
      );
    });

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(summary, 10, 10, { maxWidth: 180 });
    doc.save("summary.pdf");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 shadow">
      <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-4">
        📝 Summary
      </h3>

      <p className="text-zinc-800 dark:text-zinc-100 leading-relaxed text-base whitespace-pre-wrap">
        {renderTextWithClickableWords()}
      </p>

      {/* Dictionary Popup */}
      {popup && (
        <div
          className="absolute z-50"
          style={{
            top: popupPosition.y + 10,
            left: popupPosition.x,
          }}
        >
          <DictionaryPopup
            word={popup.word}
            meaning={popup.definition}
            onClose={() => setPopup(null)}
          />
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex justify-end gap-4">
        <button
          onClick={handleCopy}
          className="text-sm px-4 py-2 rounded-lg bg-purple-100 hover:bg-purple-200 text-purple-700 font-medium transition"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
        <button
          onClick={handleDownload}
          className="text-sm px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition"
        >
          📄 Download PDF
        </button>
      </div>
    </div>
  );
}
