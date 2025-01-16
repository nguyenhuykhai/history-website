"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {theme === "dark" ? (
        <Button onClick={() => setTheme("light")}>
          <Sun className="w-4 h-4" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")}>
          <Moon className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
