import { useEffect, useState } from "react";
import { useTheme as useNextThemes } from "next-themes";

export interface ThemeConfig {
  themes?: string[];
  defaultTheme?: string;
}

export function useTheme(config?: ThemeConfig) {
  const { theme, setTheme, resolvedTheme, themes } = useNextThemes();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const availableThemes = config?.themes ||
    themes || ["light", "dark", "system"];

  const cycleTheme = () => {
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

  // Prevent hydration mismatch
  if (!mounted) {
    return {
      theme: undefined,
      setTheme,
      resolvedTheme: undefined,
      mounted: false,
      cycleTheme,
      getThemeIcon,
      getThemeLabel,
      availableThemes,
    };
  }

  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted: true,
    cycleTheme,
    getThemeIcon,
    getThemeLabel,
    availableThemes,
  };
}

// Helper to check if current theme is dark
export function useIsDarkTheme() {
  const { resolvedTheme, mounted } = useTheme();
  return mounted ? resolvedTheme === "dark" : false;
}

// Helper to get theme-appropriate values
export function useThemeValue<T>(lightValue: T, darkValue: T): T {
  const isDark = useIsDarkTheme();
  return isDark ? darkValue : lightValue;
}
