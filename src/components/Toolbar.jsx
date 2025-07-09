export default function Toolbar({ text }) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="mt-3 p-3 bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg flex justify-between items-center text-sm text-zinc-700 dark:text-zinc-200 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="text-purple-600 dark:text-purple-400">📝</span>
        <span className="font-medium">Words:</span>
        <span>{wordCount}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-purple-600 dark:text-purple-400">🔡</span>
        <span className="font-medium">Characters:</span>
        <span>{charCount}</span>
      </div>
    </div>
  );
}
