import { createRootRoute, Outlet } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/widgets/theme-toggle";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  ),
});
