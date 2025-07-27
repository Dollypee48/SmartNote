export default function DictionaryPopup({ visible, word, definition, position, onClose }) {
  if (!visible) return null;

  return (
    <div 
      className="fixed z-50 bg-white shadow-xl rounded-md p-4 max-w-xs border border-gray-200"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translateX(-50%)'
      }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-indigo-700">{word}</h3>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-700">
        {definition || "No definition found"}
      </p>
    </div>
  );
}