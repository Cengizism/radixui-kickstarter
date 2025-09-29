import { AppSidebar } from '../components/AppSidebar';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { SidebarProvider } from '../components/ui/modules/sidebar';

export const Route = createRootRoute({
  component: () => (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  ),
});
