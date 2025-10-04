import { useEffect, useState } from "react";
import { useTheme as useNextThemes } from "next-themes";

export function useTheme() {
  const { theme, setTheme, resolvedTheme } = useNextThemes();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return {
      theme: undefined,
      setTheme,
      resolvedTheme: undefined,
      mounted: false,
    };
  }

  return {
    theme,
    setTheme,
    resolvedTheme,
    mounted: true,
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
