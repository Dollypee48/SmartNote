export default function DictionaryPopup({ word, meaning, onClose }) {
  return (
    <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl rounded-xl p-4 z-50 animate-fadeIn transition-all">
      {/* Arrow */}
      <div className="absolute -top-2 left-4 w-4 h-4 bg-white dark:bg-zinc-900 rotate-45 border-l border-t border-zinc-200 dark:border-zinc-700"></div>

      {/* Word Title */}
      <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-1">
        {word}
      </h4>

      {/* Meaning Text */}
      <p className="text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed">
        {meaning}
      </p>

      {/* Close Button */}
      <div className="text-right mt-3">
        <button
          onClick={onClose}
          className="text-xs text-red-500 hover:underline transition"
        >
          ✖ Close
        </button>
      </div>
    </div>
  );
}
