import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar/avatar";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { Footer } from "@/components/layout/footer/footer";
import { SimpleThemeToggle, ThemeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import {
  Topbar,
  TopbarActions,
  TopbarTitle,
} from "@/components/layout/topbar/topbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
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

interface DashboardLayoutProps {
  title?: string;
  children?: React.ReactNode;
  showThemeToggle?: boolean;
}

export function DashboardLayout({
  title = "Dashboard",
  children,
  showThemeToggle = true,
}: DashboardLayoutProps) {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <NavbarProvider>
          <div className="flex h-screen w-full">
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
                              <Button
                                size="sm"
                                variant="ghost"
                                className="size-8 p-0"
                              >
                                <Settings className="size-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent size="sm" side="right">
                              Settings
                            </TooltipContent>
                          </Tooltip>
                          {showThemeToggle && (
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
                          )}
                        </>
                      ) : (
                        <>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">
                              John Doe
                            </p>
                            <p className="text-muted-foreground text-xs truncate">
                              john@example.com
                            </p>
                          </div>
                          <Button size="sm" variant="ghost">
                            <Settings className="size-4" />
                          </Button>
                          {showThemeToggle && <SimpleThemeToggle />}
                        </>
                      )}
                    </div>
                  )) as unknown as React.ReactElement
                }
              </NavbarFooter>
            </Navbar>

            <div className="flex-1 flex flex-col min-h-0">
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
                  {showThemeToggle && <ThemeToggle />}
                </TopbarActions>
              </Topbar>

              <div className="flex-1 flex flex-col overflow-auto">
                <main className="flex-1 p-6 space-y-6">{children}</main>
                <Footer />
              </div>
            </div>
          </div>
        </NavbarProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
