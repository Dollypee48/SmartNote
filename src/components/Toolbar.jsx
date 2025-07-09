export default function Toolbar({ text }) {
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;

  return (
    <div className="flex justify-between items-center text-sm text-zinc-600 dark:text-zinc-300 mt-2">
      <p>📝 Words: {wordCount}</p>
      <p>🔡 Characters: {charCount}</p>
    </div>
  );
}
