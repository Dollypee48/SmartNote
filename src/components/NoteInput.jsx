export default function NoteInput({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="✍️ Paste or type your notes here..."
      className="w-full min-h-[180px] sm:min-h-[220px] p-4 rounded-xl border border-zinc-300 text-zinc-800 bg-white placeholder-zinc-500 text-base leading-relaxed focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow duration-200 resize-none"
    />
  );
}
