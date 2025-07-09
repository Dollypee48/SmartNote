import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-700">
      <h1 className="text-xl font-bold">
        <Link to="/">🧠 SmartNotes</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/summarize" className="hover:underline">Summarize</Link>
        <DarkModeToggle />
      </nav>
    </header>
  );
}
