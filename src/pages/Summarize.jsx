import { useState } from "react";
import TextArea from "../components/TextArea";
import SummaryOutput from "../components/SummaryOutput";
import { summarizeText } from "../services/summarizer";

export default function Summarizer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSummarize = async () => {
    if (!text.trim()) return;

    setLoading(true);
    setResult(null);
    setErrorMessage(null);

    try {
      const summaryResult = await summarizeText(text);
      setResult(summaryResult);
    } catch (error) {
      setErrorMessage(error.message);
      setResult({
        summary: text.split(" ").slice(0, 50).join(" ") + "...",
        status: "error",
        error: error.message,
        source: "fallback",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setText("");
    setResult(null);
    setErrorMessage(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-tr from-indigo-50 via-white to-cyan-50 rounded-xl shadow-lg">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 tracking-tight">
        AI Text Summarizer
      </h1>

      <TextArea
        value={text}
        onChange={setText}
        placeholder="Paste or type your text here to get a concise summary..."
        className="resize-none rounded-lg border border-indigo-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        rows={8}
      />

      <div className="flex flex-wrap justify-center gap-6 mt-6">
        <button
          onClick={handleSummarize}
          disabled={!text.trim() || loading}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <span>Processing...</span>
            </>
          ) : (
            "Summarize"
          )}
        </button>

        <button
          onClick={handleClear}
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md transition duration-300 ease-in-out"
        >
          Clear
        </button>
      </div>

      {errorMessage && (
        <div className="mt-6 max-w-xl mx-auto bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-md shadow-sm text-center">
          <strong>Error:</strong> {errorMessage}
        </div>
      )}

      {result && (
        <div className="mt-10 max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-indigo-100">
          <SummaryOutput
            summary={result.summary}
            source={result.source}
            error={result.error}
          />
        </div>
      )}

      {!loading && !result && (
        <p className="mt-8 text-center text-indigo-500 italic">
          Enter text above and click "Summarize" to see the magic happen.
        </p>
      )}
    </div>
  );
}
