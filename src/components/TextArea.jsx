export default function TextArea({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Paste your notes here..."
      className="w-full h-64 p-5 border border-gray-300 rounded-lg shadow-sm resize-none
        transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-400 focus:border-transparent dark:bg-zinc-900 dark:border-zinc-700 dark:text-gray-100 dark:focus:ring-purple-600"
      spellCheck="true"
      aria-label="Text input area"
    />
  );
}
