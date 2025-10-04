import { useEffect, useState } from "react";
import { useTheme as useNextThemes } from "next-themes";

export interface ThemeConfig {
  enableSystemTheme?: boolean;
  defaultTheme?: string;
  themes?: string[];
}

export function useDashboardTheme(config?: ThemeConfig) {
  const { theme, setTheme, resolvedTheme, themes } = useNextThemes();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = () => {
    const availableThemes = config?.themes ||
      themes || ["light", "dark", "system"];
    const currentIndex = availableThemes.indexOf(theme || "system");
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setTheme(availableThemes[nextIndex]);
  };

  const getThemeIcon = () => {
    if (!mounted) return "system";

    switch (resolvedTheme) {
      case "dark":
        return "dark";
      case "light":
        return "light";
      default:
        return "system";
    }
  };

  const getThemeLabel = () => {
    if (!mounted) return "System";

    switch (theme) {
      case "dark":
        return "Dark";
      case "light":
        return "Light";
      case "system":
        return "System";
      default:
        return "System";
    }
  };

  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted,
    cycleTheme,
    getThemeIcon,
    getThemeLabel,
    availableThemes: config?.themes || themes || ["light", "dark", "system"],
  };
}

// Helper to check if we're in dark mode for conditional rendering
export function useIsDark() {
  const { resolvedTheme, mounted } = useDashboardTheme();
  return mounted && resolvedTheme === "dark";
}
