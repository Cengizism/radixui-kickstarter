import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Topbar, TopbarActions, TopbarTitle } from '../topbar/topbar';
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Navbar,
  NavbarContent,
  NavbarFooter,
  NavbarGroup,
  NavbarGroupContent,
  NavbarGroupLabel,
  NavbarHeader,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuButton,
  NavbarProvider,
  NavbarSeparator,
  NavbarTrigger,
} from "./navbar";
import {
  Home,
  Settings,
  Bell,
  Calendar,
  FileText,
  Search,
  Plus,
  Archive,
  Trash2,
  Moon,
} from "lucide-react";

const meta = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A flexible navigation sidebar component with support for collapsible modes, responsive design, and contextual state management. Built with accessibility in mind and optimized for both mobile and desktop experiences.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    collapsible: {
      control: "select",
      options: ["offcanvas", "icon", "none"],
      description:
        "Controls the collapsible behavior of the navbar. 'offcanvas' creates a mobile-style overlay sidebar, 'icon' provides a collapsible desktop sidebar that shows only icons when collapsed, 'none' keeps the sidebar always expanded.",
      table: {
        category: "Navbar Props",
        type: { summary: '"offcanvas" | "icon" | "none"' },
        defaultValue: { summary: '"offcanvas"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the navbar container.",
      table: {
        category: "Navbar Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: React.ComponentProps<typeof Navbar>) => (
    <NavbarProvider>
      <div className="flex h-screen w-full">
        <Navbar {...args}>
          <NavbarHeader>
            <div className="flex items-center gap-2 p-4">
              <div className="size-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  A
                </span>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold">My Application</h1>
                <p className="text-muted-foreground text-sm">Dashboard v2.1</p>
              </div>
            </div>
          </NavbarHeader>

          <NavbarContent className="flex-1 p-2">
            <NavbarGroup>
              <NavbarGroupLabel>Main</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Home className="size-4" />
                      Dashboard
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Calendar className="size-4" />
                      Calendar
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <FileText className="size-4" />
                      Documents
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>

            <NavbarSeparator />

            <NavbarGroup>
              <NavbarGroupLabel>Tools</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Search className="size-4" />
                      Search
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Plus className="size-4" />
                      New Item
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>

            <NavbarSeparator />

            <NavbarGroup>
              <NavbarGroupLabel>Archive</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Archive className="size-4" />
                      Archived Items
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Trash2 className="size-4" />
                      Trash
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>
          </NavbarContent>

          <NavbarFooter>
            <div className="flex items-center gap-2 p-4">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">John Doe</p>
                <p className="text-muted-foreground text-xs truncate">
                  john@example.com
                </p>
              </div>
              <Button size="sm" variant="ghost">
                <Settings className="size-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Moon className="size-4" />
              </Button>
            </div>
          </NavbarFooter>
        </Navbar>

        <div className="flex-1 flex flex-col">
          <Topbar>
            <NavbarTrigger />
            <TopbarTitle>Dashboard</TopbarTitle>
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

          <main className="flex-1 p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening with your projects today.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold">Card {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    Some description for this card item.
                  </p>
                  <div className="text-2xl font-bold">
                    {Math.floor(Math.random() * 1000)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>Activity item {i + 1} occurred recently</span>
                    <span className="text-muted-foreground ml-auto">
                      {i + 1}h ago
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </NavbarProvider>
  ),
  args: {
    collapsible: "offcanvas",
  },
};

export const IconCollapsible: Story = {
  render: (args: React.ComponentProps<typeof Navbar>) => (
    <NavbarProvider>
      <div className="flex h-screen w-full">
        <Navbar {...args}>
          <NavbarHeader>
            {
              (({ isCollapsed }: { isCollapsed: boolean }) => (
                <div
                  className={`flex items-center gap-2 ${isCollapsed ? "p-2 justify-center" : "p-4"}`}
                >
                  <div className="size-8 rounded bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      A
                    </span>
                  </div>
                  {!isCollapsed && (
                    <div className="flex-1">
                      <h1 className="font-semibold">My Application</h1>
                      <p className="text-muted-foreground text-sm">
                        Dashboard v2.1
                      </p>
                    </div>
                  )}
                </div>
              )) as unknown as React.ReactElement
            }
          </NavbarHeader>

          <NavbarContent className="flex-1 p-2">
            <NavbarGroup>
              <NavbarGroupLabel>Main</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Home className="size-4" />
                      Dashboard
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Calendar className="size-4" />
                      Calendar
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <FileText className="size-4" />
                      Documents
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>

            <NavbarSeparator />

            <NavbarGroup>
              <NavbarGroupLabel>Tools</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Search className="size-4" />
                      Search
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Plus className="size-4" />
                      New Item
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>

            <NavbarSeparator />

            <NavbarGroup>
              <NavbarGroupLabel>Archive</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Archive className="size-4" />
                      Archived Items
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Trash2 className="size-4" />
                      Trash
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>
          </NavbarContent>

          <NavbarFooter>
            {
              (({ isCollapsed }: { isCollapsed: boolean }) => (
                <div
                  className={`flex gap-2 p-4 ${isCollapsed ? "flex-col items-center" : "items-center"}`}
                >
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  {isCollapsed ? (
                    <>
                      <Button size="sm" variant="ghost" className="size-8 p-0">
                        <Settings className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="size-8 p-0">
                        <Moon className="size-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">John Doe</p>
                        <p className="text-muted-foreground text-xs truncate">
                          john@example.com
                        </p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Settings className="size-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Moon className="size-4" />
                      </Button>
                    </>
                  )}
                </div>
              )) as unknown as React.ReactElement
            }
          </NavbarFooter>
        </Navbar>

        <div className="flex-1 flex flex-col">
          <Topbar>
            <NavbarTrigger />
            <TopbarTitle>Dashboard</TopbarTitle>
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

          <main className="flex-1 p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening with your projects today.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold">Card {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    Some description for this card item.
                  </p>
                  <div className="text-2xl font-bold">
                    {Math.floor(Math.random() * 1000)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>Activity item {i + 1} occurred recently</span>
                    <span className="text-muted-foreground ml-auto">
                      {i + 1}h ago
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </NavbarProvider>
  ),
  args: {
    collapsible: "icon",
  },
};

export const NonCollapsible: Story = {
  render: (args: React.ComponentProps<typeof Navbar>) => (
    <NavbarProvider>
      <div className="flex h-screen w-full">
        <Navbar {...args}>
          <NavbarHeader>
            <div className="flex items-center gap-2 p-4">
              <div className="size-8 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  A
                </span>
              </div>
              <div className="flex-1">
                <h1 className="font-semibold">My Application</h1>
                <p className="text-muted-foreground text-sm">Dashboard v2.1</p>
              </div>
            </div>
          </NavbarHeader>

          <NavbarContent className="flex-1 p-2">
            <NavbarGroup>
              <NavbarGroupLabel>Main</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Home className="size-4" />
                      Dashboard
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Calendar className="size-4" />
                      Calendar
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <FileText className="size-4" />
                      Documents
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>

            <NavbarSeparator />

            <NavbarGroup>
              <NavbarGroupLabel>Tools</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Search className="size-4" />
                      Search
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Plus className="size-4" />
                      New Item
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>

            <NavbarSeparator />

            <NavbarGroup>
              <NavbarGroupLabel>Archive</NavbarGroupLabel>
              <NavbarGroupContent>
                <NavbarMenu>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Archive className="size-4" />
                      Archived Items
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                  <NavbarMenuItem>
                    <NavbarMenuButton>
                      <Trash2 className="size-4" />
                      Trash
                    </NavbarMenuButton>
                  </NavbarMenuItem>
                </NavbarMenu>
              </NavbarGroupContent>
            </NavbarGroup>
          </NavbarContent>

          <NavbarFooter>
            <div className="flex items-center gap-2 p-4">
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">John Doe</p>
                <p className="text-muted-foreground text-xs truncate">
                  john@example.com
                </p>
              </div>
              <Button size="sm" variant="ghost">
                <Settings className="size-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Moon className="size-4" />
              </Button>
            </div>
          </NavbarFooter>
        </Navbar>

        <div className="flex-1 flex flex-col">
          <Topbar>
            <TopbarTitle>Dashboard</TopbarTitle>
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

          <main className="flex-1 p-6 space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back!</h1>
              <p className="text-muted-foreground mt-2">
                Here's what's happening with your projects today.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="border rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold">Card {i + 1}</h3>
                  <p className="text-sm text-muted-foreground">
                    Some description for this card item.
                  </p>
                  <div className="text-2xl font-bold">
                    {Math.floor(Math.random() * 1000)}
                  </div>
                </div>
              ))}
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="size-2 rounded-full bg-primary" />
                    <span>Activity item {i + 1} occurred recently</span>
                    <span className="text-muted-foreground ml-auto">
                      {i + 1}h ago
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </NavbarProvider>
  ),
  args: {
    collapsible: "none",
  },
};
