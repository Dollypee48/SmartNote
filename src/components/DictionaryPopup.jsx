export default function DictionaryPopup({ word, meaning, onClose }) {
  return (
    <div className="absolute bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 shadow-lg rounded p-4 z-10">
      <h4 className="font-bold text-purple-600">{word}</h4>
      <p className="text-sm mt-1">{meaning}</p>
      <button
        onClick={onClose}
        className="text-xs text-red-500 hover:underline mt-2"
      >
        Close
      </button>
    </div>
  );
}
