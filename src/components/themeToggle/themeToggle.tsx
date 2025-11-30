import { Moon, Sun } from "lucide-react";
import { useStore } from "@/store";
import { Button } from "../ui";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <Button onClick={toggleTheme} variant="outline">
      {theme === "dark" ? (
        <Sun className="w-4 h-4" color="#fff" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </Button>
  );
};
