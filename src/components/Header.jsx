import { Link, useLocation } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const location = useLocation();

  const navItemClass = (path) =>
    `text-sm font-medium px-4 py-2 rounded-xl transition duration-200 ${
      location.pathname === path
        ? "bg-white text-purple-700 dark:bg-zinc-100"
        : "text-white hover:bg-purple-500"
    }`;

  return (
    <header className="sticky top-0 z-30 bg-purple-700 dark:bg-purple-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-xl font-bold flex items-center gap-2 text-white tracking-tight"
        >
          <span className="bg-white/20 p-1 rounded-lg">🧠</span>
          SmartNotes
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link to="/" className={navItemClass("/")}>Home</Link>
          <Link to="/summarize" className={navItemClass("/summarize")}>Summarize</Link>
          <Link to="/about" className={navItemClass("/about")}>About</Link>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
