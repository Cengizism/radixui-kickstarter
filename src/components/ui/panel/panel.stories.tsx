import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Panel,
  PanelContent,
  PanelFooter,
  PanelGroup,
  PanelGroupAction,
  PanelGroupContent,
  PanelGroupLabel,
  PanelHeader,
  PanelInput,
  PanelMenu,
  PanelMenuAction,
  PanelMenuBadge,
  PanelMenuButton,
  PanelMenuItem,
  PanelMenuSkeleton,
  PanelMenuSub,
  PanelMenuSubButton,
  PanelMenuSubItem,
  PanelSeparator,
} from "./panel";
import {
  Home,
  Settings,
  User,
  FileText,
  Search,
  Bell,
  Plus,
  MoreHorizontal,
  Folder,
  Star,
  Archive,
} from "lucide-react";

const meta = {
  title: "UI/Panel",
  component: Panel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible panel component that serves as a building block for sidebars, navigation menus, and content panels. Provides various sub-components for structured content organization.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the panel",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel {...args}>
        <PanelHeader>
          <div className="flex items-center gap-2 p-2">
            <div className="size-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">
                P
              </span>
            </div>
            <span className="font-semibold">Panel Demo</span>
          </div>
        </PanelHeader>

        <PanelContent>
          <PanelGroup>
            <PanelGroupLabel>Navigation</PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Home className="size-4" />
                    <span>Home</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton isActive>
                    <User className="size-4" />
                    <span>Profile</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Settings className="size-4" />
                    <span>Settings</span>
                  </PanelMenuButton>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>
        </PanelContent>
      </Panel>
    </div>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel>
        <PanelHeader>
          <div className="p-2">
            <h2 className="font-semibold mb-2">Dashboard</h2>
            <PanelInput placeholder="Search..." />
          </div>
        </PanelHeader>

        <PanelContent>
          <PanelMenu>
            <PanelMenuItem>
              <PanelMenuButton>
                <Search className="size-4" />
                <span>Search Results</span>
                <PanelMenuBadge>5</PanelMenuBadge>
              </PanelMenuButton>
            </PanelMenuItem>
            <PanelMenuItem>
              <PanelMenuButton>
                <Bell className="size-4" />
                <span>Notifications</span>
                <PanelMenuBadge>12</PanelMenuBadge>
              </PanelMenuButton>
            </PanelMenuItem>
          </PanelMenu>
        </PanelContent>
      </Panel>
    </div>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel>
        <PanelContent>
          <PanelGroup>
            <PanelGroupLabel>
              <Folder className="size-4" />
              Projects
            </PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <FileText className="size-4" />
                    <span>All Projects</span>
                  </PanelMenuButton>
                  <PanelMenuSub>
                    <PanelMenuSubItem>
                      <PanelMenuSubButton>
                        <span>Web App</span>
                      </PanelMenuSubButton>
                    </PanelMenuSubItem>
                    <PanelMenuSubItem>
                      <PanelMenuSubButton isActive>
                        <span>Mobile App</span>
                      </PanelMenuSubButton>
                    </PanelMenuSubItem>
                    <PanelMenuSubItem>
                      <PanelMenuSubButton>
                        <span>Desktop App</span>
                      </PanelMenuSubButton>
                    </PanelMenuSubItem>
                  </PanelMenuSub>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Star className="size-4" />
                    <span>Favorites</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Archive className="size-4" />
                    <span>Archive</span>
                  </PanelMenuButton>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>
        </PanelContent>
      </Panel>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel>
        <PanelContent>
          <PanelGroup>
            <PanelGroupLabel>
              Recent Files
              <PanelGroupAction>
                <Plus className="size-4" />
              </PanelGroupAction>
            </PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <FileText className="size-4" />
                    <span>Document.pdf</span>
                  </PanelMenuButton>
                  <PanelMenuAction showOnHover>
                    <MoreHorizontal className="size-4" />
                  </PanelMenuAction>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <FileText className="size-4" />
                    <span>Report.xlsx</span>
                  </PanelMenuButton>
                  <PanelMenuAction showOnHover>
                    <MoreHorizontal className="size-4" />
                  </PanelMenuAction>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <FileText className="size-4" />
                    <span>Presentation.pptx</span>
                  </PanelMenuButton>
                  <PanelMenuAction showOnHover>
                    <MoreHorizontal className="size-4" />
                  </PanelMenuAction>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>
        </PanelContent>
      </Panel>
    </div>
  ),
};

export const WithSkeleton: Story = {
  render: () => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel>
        <PanelContent>
          <PanelGroup>
            <PanelGroupLabel>Loading...</PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuSkeleton showIcon />
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuSkeleton showIcon />
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuSkeleton />
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuSkeleton showIcon />
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>
        </PanelContent>
      </Panel>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel>
        <PanelHeader>
          <div className="flex items-center gap-2 p-2">
            <div className="size-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                A
              </span>
            </div>
            <div className="flex-1">
              <h1 className="font-semibold text-sm">My App</h1>
              <p className="text-muted-foreground text-xs">Dashboard</p>
            </div>
          </div>
          <div className="px-2 pb-2">
            <PanelInput placeholder="Search files..." />
          </div>
        </PanelHeader>

        <PanelSeparator />

        <PanelContent>
          <PanelGroup>
            <PanelGroupLabel>
              <Home className="size-4" />
              Main
              <PanelGroupAction>
                <Plus className="size-4" />
              </PanelGroupAction>
            </PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton isActive>
                    <Home className="size-4" />
                    <span>Dashboard</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <FileText className="size-4" />
                    <span>Documents</span>
                    <PanelMenuBadge>24</PanelMenuBadge>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Bell className="size-4" />
                    <span>Notifications</span>
                    <PanelMenuBadge>3</PanelMenuBadge>
                  </PanelMenuButton>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>

          <PanelSeparator />

          <PanelGroup>
            <PanelGroupLabel>
              <Folder className="size-4" />
              Projects
            </PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Folder className="size-4" />
                    <span>Web Projects</span>
                  </PanelMenuButton>
                  <PanelMenuSub>
                    <PanelMenuSubItem>
                      <PanelMenuSubButton>
                        <span>E-commerce Site</span>
                      </PanelMenuSubButton>
                    </PanelMenuSubItem>
                    <PanelMenuSubItem>
                      <PanelMenuSubButton isActive>
                        <span>Portfolio</span>
                      </PanelMenuSubButton>
                    </PanelMenuSubItem>
                  </PanelMenuSub>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton>
                    <Star className="size-4" />
                    <span>Favorites</span>
                  </PanelMenuButton>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>
        </PanelContent>

        <PanelSeparator />

        <PanelFooter>
          <div className="flex items-center gap-2 p-2">
            <div className="size-6 rounded-full bg-muted flex items-center justify-center">
              <User className="size-3" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-xs truncate">John Doe</p>
              <p className="text-muted-foreground text-xs truncate">
                john@example.com
              </p>
            </div>
            <PanelMenuAction>
              <Settings className="size-4" />
            </PanelMenuAction>
          </div>
        </PanelFooter>
      </Panel>
    </div>
  ),
};

export const ButtonVariants: Story = {
  render: () => (
    <div className="h-[600px] w-[300px] border rounded-lg overflow-hidden">
      <Panel>
        <PanelContent>
          <PanelGroup>
            <PanelGroupLabel>Button Sizes</PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton size="sm">
                    <Home className="size-4" />
                    <span>Small Button</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton size="default">
                    <User className="size-4" />
                    <span>Default Button</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton size="lg">
                    <Settings className="size-4" />
                    <span>Large Button</span>
                  </PanelMenuButton>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>

          <PanelSeparator />

          <PanelGroup>
            <PanelGroupLabel>Button Variants</PanelGroupLabel>
            <PanelGroupContent>
              <PanelMenu>
                <PanelMenuItem>
                  <PanelMenuButton variant="default">
                    <Home className="size-4" />
                    <span>Default Variant</span>
                  </PanelMenuButton>
                </PanelMenuItem>
                <PanelMenuItem>
                  <PanelMenuButton variant="outline">
                    <User className="size-4" />
                    <span>Outline Variant</span>
                  </PanelMenuButton>
                </PanelMenuItem>
              </PanelMenu>
            </PanelGroupContent>
          </PanelGroup>
        </PanelContent>
      </Panel>
    </div>
  ),
};
