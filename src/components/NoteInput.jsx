export default function NoteInput({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste or type your notes here..."
      className="w-full h-40 p-4 border border-gray-300 dark:border-zinc-700 rounded resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white dark:bg-zinc-800"
    />
  );
}
