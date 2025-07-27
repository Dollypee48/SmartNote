export default function Toolbar({ onClear, hasText }) {
  return (
    <div className="flex justify-end mt-2 gap-2">
      <button
        onClick={onClear}
        disabled={!hasText}
        className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded disabled:opacity-50"
      >
        Clear Text
      </button>
    </div>
  );
}