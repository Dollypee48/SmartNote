export default function About() {
  return (
    <main className="min-h-screen  py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white dark:bg-zinc-900 rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-400 mb-4">
          About SmartNotes
        </h1>

        <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed">
          <strong>SmartNotes</strong> is a powerful tool designed to help you quickly summarize long-form notes
          using AI. Whether you’re a student, researcher, or professional, SmartNotes gives you:
        </p>

        <ul className="list-disc pl-6 my-6 space-y-2 text-zinc-700 dark:text-zinc-300">
          <li>📌 AI-generated summaries of any text</li>
          <li>💾 Auto-saved content (localStorage)</li>
          <li>📄 Copy summaries to clipboard</li>
        </ul>

        <p className="text-zinc-700 dark:text-zinc-300">
          This app is built with <strong>React + Tailwind CSS</strong>, and integrates OpenAI for smart summarization.
          It's a productivity tool to help you process more in less time.
        </p>
      </div>
    </main>
  );
}
