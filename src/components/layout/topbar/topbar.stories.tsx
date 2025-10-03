import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, ChevronDown, Search, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavbarProvider, NavbarTrigger } from "../navbar";
import { Topbar, TopbarActions, TopbarTitle } from "./topbar";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const meta = {
  title: "Layout/Topbar",
  component: Topbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible topbar/header component that provides navigation, branding, and action areas. Integrates with the Panel/Navbar system for responsive layouts.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="h-screen w-full flex flex-col">
      <Topbar>
        <TopbarTitle>Basic topbar</TopbarTitle>
      </Topbar>
    </div>
  ),
};

export const Complete: Story = {
  render: () => (
    <NavbarProvider>
      <div className="h-screen w-full flex flex-col">
        <Topbar>
          <NavbarTrigger />
          <TopbarTitle>Full-featured topbar</TopbarTitle>

          <TopbarActions>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>
          </TopbarActions>
        </Topbar>
      </div>
    </NavbarProvider>
  ),
};

export const TopbarWithUserMenu: Story = {
  render: () => (
    <NavbarProvider>
      <div className="h-screen w-full flex flex-col">
        <Topbar>
          <NavbarTrigger />
          <TopbarTitle>Topbar with User Menu</TopbarTitle>

          <TopbarActions>
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                3
              </Badge>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 h-8">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TopbarActions>
        </Topbar>
      </div>
    </NavbarProvider>
  ),
};
