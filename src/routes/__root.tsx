import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Home, LayoutDashboard, Sliders } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import {
  Navbar,
  NavbarContent,
  NavbarGroup,
  NavbarGroupContent,
  NavbarGroupLabel,
  NavbarHeader,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuButton,
  NavbarProvider,
} from "@/components/layout/navbar";

export const Route = createRootRoute({
  component: () => (
    <NavbarProvider>
      <Navbar>
        <NavbarHeader>
          <div className="flex items-center gap-2 p-4">
            <div className="size-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                R
              </span>
            </div>
            <div className="flex-1">
              <h1 className="font-semibold">RadixUI</h1>
              <p className="text-muted-foreground text-sm">Kickstarter</p>
            </div>
          </div>
        </NavbarHeader>

        <NavbarContent>
          <NavbarGroup>
            <NavbarGroupLabel>General</NavbarGroupLabel>
            <NavbarGroupContent>
              <NavbarMenu>
                <NavbarMenuItem>
                  <NavbarMenuButton asChild>
                    <Link to="/">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </NavbarMenuButton>
                </NavbarMenuItem>
                <NavbarMenuItem>
                  <NavbarMenuButton asChild>
                    <Link to="/templates/dashboard">
                      <LayoutDashboard className="h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </NavbarMenuButton>
                </NavbarMenuItem>
                <NavbarMenuItem>
                  <NavbarMenuButton asChild>
                    <Link to="/templates/advanced">
                      <Sliders className="h-4 w-4" />
                      <span>Advanced Config</span>
                    </Link>
                  </NavbarMenuButton>
                </NavbarMenuItem>
              </NavbarMenu>
            </NavbarGroupContent>
          </NavbarGroup>
        </NavbarContent>
      </Navbar>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet />
      </div>
    </NavbarProvider>
  ),
});
