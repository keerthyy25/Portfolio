import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Mount flag to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Get current theme state
  const isDarkMode = theme === "dark";

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="h-6 w-6" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-primary/50",
        "bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800",
        "border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-sm",
        "hover:scale-110 active:scale-95 hover:shadow-xl",
        isDarkMode 
          ? "hover:shadow-yellow-300/20" 
          : "hover:shadow-blue-900/20"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative">
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-400 transition-all duration-300 hover:text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-800 transition-all duration-300 hover:text-blue-700" />
        )}
      </div>
    </button>
  );
};
