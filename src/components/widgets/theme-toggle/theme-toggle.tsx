import { Button } from "@/components/ui/button/button";
import { Label } from "@/components/ui/label/label";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";

// Icon theme toggle with dropdown menu - shows current theme icon
export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun />
        <span className="sr-only">Loading theme</span>
      </Button>
    );
  }

  const getCurrentIcon = () => {
    if (theme === "system") {
      return <Monitor />;
    }
    if (resolvedTheme === "dark") {
      return <Moon />;
    }
    return <Sun />;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {getCurrentIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 h-4 w-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 h-4 w-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 h-4 w-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Simple toggle - only switches between light and dark (respects system as default)
export function SimpleThemeToggle() {
  const { theme, setTheme, resolvedTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <Sun />
        <span className="sr-only">Loading theme</span>
      </Button>
    );
  }

  const toggleTheme = () => {
    // If current theme is system or resolves to light, go to dark
    // If current theme resolves to dark, go to light
    if (theme === "system" || resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {/* Show opposite icon of what will be activated */}
      {theme === "system" || resolvedTheme === "light" ? <Moon /> : <Sun />}
      <span className="sr-only">Toggle between light and dark theme</span>
    </Button>
  );
}

// Select component for forms and settings
export function ThemeSelect({
  label = "Theme",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={`space-y-2 ${className}`}>
        <Label>{label}</Label>
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Loading..." />
          </SelectTrigger>
        </Select>
      </div>
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      <Select value={theme} onValueChange={setTheme}>
        <SelectTrigger>
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" />
              Light
            </div>
          </SelectItem>
          <SelectItem value="dark">
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4" />
              Dark
            </div>
          </SelectItem>
          <SelectItem value="system">
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              System
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
