import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer/footer";
import { Header } from "@/components/layout/header/header";
import {
  SimpleThemeToggle,
  ThemeToggle,
} from "@/components/widgets/theme-toggle";
import { ThemeProvider } from "@/components/widgets/theme-toggle";
import {
  Topbar,
  TopbarActions,
  TopbarTitle,
} from "@/components/layout/topbar/topbar";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  StatsCardGrid,
  ContentGrid,
  TwoColumnLayout,
} from "@/stories/content/layouts.stories";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  NavbarMenuButtonWithTooltip,
  NavbarProvider,
  NavbarSeparator,
  NavbarTrigger,
} from "@/components/layout/navbar/navbar";
import {
  Home,
  Settings,
  Bell,
  Calendar,
  FileText,
  Search,
  Archive,
  Users,
  BarChart3,
} from "lucide-react";

// Helper Components for cleaner story code
const NavbarComponent = () => (
  <Navbar collapsible="icon" className="data-[collapsed=false]:w-64">
    <NavbarHeader>
      {
        (({ isCollapsed }: { isCollapsed: boolean }) => (
          <div
            className={`flex items-center gap-2 ${
              isCollapsed ? "p-2 justify-center" : "p-4"
            }`}
          >
            <div className="size-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                A
              </span>
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <h1 className="font-semibold">My Application</h1>
                <p className="text-muted-foreground text-sm">Dashboard v2.1</p>
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
              <NavbarMenuButtonWithTooltip>
                <Home className="size-4" />
                Dashboard
              </NavbarMenuButtonWithTooltip>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarMenuButtonWithTooltip>
                <BarChart3 className="size-4" />
                Analytics
              </NavbarMenuButtonWithTooltip>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarMenuButtonWithTooltip>
                <Users className="size-4" />
                Team
              </NavbarMenuButtonWithTooltip>
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarGroupContent>
      </NavbarGroup>

      <NavbarSeparator />

      <NavbarGroup>
        <NavbarGroupLabel>Content</NavbarGroupLabel>
        <NavbarGroupContent>
          <NavbarMenu>
            <NavbarMenuItem>
              <NavbarMenuButtonWithTooltip>
                <FileText className="size-4" />
                Projects
              </NavbarMenuButtonWithTooltip>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarMenuButtonWithTooltip>
                <Calendar className="size-4" />
                Calendar
              </NavbarMenuButtonWithTooltip>
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
              <NavbarMenuButtonWithTooltip>
                <Search className="size-4" />
                Search
              </NavbarMenuButtonWithTooltip>
            </NavbarMenuItem>
            <NavbarMenuItem>
              <NavbarMenuButtonWithTooltip>
                <Archive className="size-4" />
                Archive
              </NavbarMenuButtonWithTooltip>
            </NavbarMenuItem>
          </NavbarMenu>
        </NavbarGroupContent>
      </NavbarGroup>
    </NavbarContent>

    <NavbarFooter>
      {
        (({ isCollapsed }: { isCollapsed: boolean }) => (
          <div
            className={`flex gap-2 p-4 ${
              isCollapsed ? "flex-col items-center" : "items-center"
            }`}
          >
            {isCollapsed ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Avatar className="size-8 cursor-pointer">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent size="sm" side="right">
                  John Doe
                </TooltipContent>
              </Tooltip>
            ) : (
              <Avatar className="size-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            )}
            {isCollapsed ? (
              <>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="sm" variant="ghost" className="size-8 p-0">
                      <Settings className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent size="sm" side="right">
                    Settings
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="size-8">
                      <SimpleThemeToggle />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent size="sm" side="right">
                    Toggle Theme
                  </TooltipContent>
                </Tooltip>
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
                <SimpleThemeToggle />
              </>
            )}
          </div>
        )) as unknown as React.ReactElement
      }
    </NavbarFooter>
  </Navbar>
);

const TopbarComponent = ({ title = "Dashboard" }: { title?: string }) => (
  <Topbar>
    <NavbarTrigger />
    <TopbarTitle>{title}</TopbarTitle>
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
      <ThemeToggle />
    </TopbarActions>
  </Topbar>
);

const meta = {
  title: "Templates/Dashboard",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Complete dashboard page templates with icon navbar, sticky topbar, header, and footer. Copy-able layouts for post-login application pages.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const DashboardGrid: Story = {
  render: () => (
    <ThemeProvider>
      <TooltipProvider>
        <NavbarProvider>
          <div className="flex h-screen w-full">
            <NavbarComponent />

            <div className="flex-1 flex flex-col min-h-0">
              <TopbarComponent title="Dashboard" />

              <div className="flex-1 flex flex-col overflow-auto">
                <main className="flex-1 p-6 space-y-6">
                  <Header
                    title="Welcome back!"
                    description="Here's what's happening with your projects today."
                  />
                  <ContentGrid />
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </NavbarProvider>
      </TooltipProvider>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete dashboard with content grid layout. Uses reusable content components for a rich dashboard experience.",
      },
    },
  },
};

export const DashboardMinimal: Story = {
  render: () => (
    <ThemeProvider>
      <TooltipProvider>
        <NavbarProvider>
          <div className="flex h-screen w-full">
            <NavbarComponent />

            <div className="flex-1 flex flex-col min-h-0">
              <TopbarComponent title="Dashboard" />

              <div className="flex-1 flex flex-col overflow-auto">
                <main className="flex-1 p-6 space-y-6">
                  <Header
                    title="Welcome back!"
                    description="Here's what's happening with your projects today."
                  />
                  <StatsCardGrid />
                  <TwoColumnLayout />
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </NavbarProvider>
      </TooltipProvider>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Minimal dashboard with just stats cards and two-column layout. Footer sticks to viewport bottom.",
      },
    },
  },
};

export const DashboardWithTheme: Story = {
  render: () => (
    <ThemeProvider>
      <TooltipProvider>
        <NavbarProvider>
          <div className="flex h-screen w-full">
            <NavbarComponent />

            <div className="flex-1 flex flex-col min-h-0">
              <TopbarComponent title="Dashboard with Theme Toggle" />

              <div className="flex-1 flex flex-col overflow-auto">
                <main className="flex-1 p-6 space-y-6">
                  <Header
                    title="Theme-Aware Dashboard"
                    description="This dashboard demonstrates the theme toggle functionality. Try switching between light, dark, and system themes using the toggle in the topbar or sidebar."
                  />

                  {/* Theme showcase section */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Light Theme Elements
                      </h3>
                      <div className="p-4 bg-background border rounded-lg space-y-2">
                        <div className="h-4 bg-primary rounded"></div>
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-accent rounded"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Interactive Elements
                      </h3>
                      <div className="space-y-2">
                        <Button className="w-full">Primary Button</Button>
                        <Button variant="outline" className="w-full">
                          Secondary Button
                        </Button>
                        <Button variant="ghost" className="w-full">
                          Ghost Button
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">
                        Color Variations
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-8 bg-destructive rounded"></div>
                        <div className="h-8 bg-primary rounded"></div>
                        <div className="h-8 bg-muted rounded"></div>
                        <div className="h-8 bg-accent rounded"></div>
                      </div>
                    </div>
                  </div>

                  <ContentGrid />
                </main>
                <Footer />
              </div>
            </div>
          </div>
        </NavbarProvider>
      </TooltipProvider>
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Dashboard specifically showcasing theme toggle functionality. Includes theme toggle buttons in both the topbar and sidebar, with visual elements that demonstrate the theme changes.",
      },
    },
  },
};
