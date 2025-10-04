import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import { DashboardLayout } from "./dashboard-layout";
import { Header } from "@/components/layout/header/header";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  StatsCardGrid,
  ContentGrid,
  TwoColumnLayout,
} from "@/stories/content/layouts.stories";

const meta = {
  title: "Layout/DashboardLayout",
  component: DashboardLayout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A complete dashboard layout component with integrated theme toggle functionality. Includes sidebar navigation, topbar, and content area with theme switching capability.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed in the topbar",
      table: {
        category: "Content Props",
        type: { summary: "string" },
        defaultValue: { summary: "Dashboard" },
      },
    },
    showThemeToggle: {
      control: "boolean",
      description: "Whether to show theme toggle buttons in topbar and sidebar",
      table: {
        category: "Feature Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    children: {
      control: false,
      description: "Content to be displayed in the main area",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
      },
    },
  },
} satisfies Meta<typeof DashboardLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Dashboard",
    showThemeToggle: true,
  },
  render: (args) => (
    <DashboardLayout {...args}>
      <Header
        title="Welcome to your Dashboard"
        description="Manage your projects and view analytics."
      />
      <ContentGrid />
    </DashboardLayout>
  ),
};

export const WithoutThemeToggle: Story = {
  args: {
    title: "Simple Dashboard",
    showThemeToggle: false,
  },
  render: (args) => (
    <DashboardLayout {...args}>
      <Header
        title="Simple Dashboard"
        description="Basic dashboard without theme toggle functionality."
      />
      <StatsCardGrid />
    </DashboardLayout>
  ),
  parameters: {
    docs: {
      description: {
        story: "Dashboard layout with theme toggle disabled.",
      },
    },
  },
};

export const ThemeShowcase: Story = {
  args: {
    title: "Theme Showcase",
    showThemeToggle: true,
  },
  render: (args) => (
    <DashboardLayout {...args}>
      <Header
        title="Theme Toggle Showcase"
        description="Demonstrates the theme toggle functionality and how different elements adapt to theme changes."
      />

      {/* Theme demonstration content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Background Colors
              <Badge variant="outline">Theme Aware</Badge>
            </CardTitle>
            <CardDescription>
              These elements automatically adapt to the selected theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-12 bg-background border rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">Background</span>
            </div>
            <div className="h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">Muted</span>
            </div>
            <div className="h-12 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-sm font-medium">Accent</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interactive Elements</CardTitle>
            <CardDescription>
              Buttons and interactive elements that respect the theme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full">Primary Button</Button>
            <Button variant="outline" className="w-full">
              Outline Button
            </Button>
            <Button variant="secondary" className="w-full">
              Secondary Button
            </Button>
            <Button variant="ghost" className="w-full">
              Ghost Button
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Theme Instructions</CardTitle>
            <CardDescription>
              How to use the theme toggle functionality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Use the dropdown in the topbar for full options</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Use the sidebar button for quick toggle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>System theme follows OS preference</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Theme preference is saved locally</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <TwoColumnLayout />
    </DashboardLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Comprehensive showcase of theme toggle functionality with visual examples of how different UI elements adapt to theme changes.",
      },
    },
  },
};

export const MinimalContent: Story = {
  args: {
    title: "Minimal Dashboard",
    showThemeToggle: true,
  },
  render: (args) => (
    <DashboardLayout {...args}>
      <Header
        title="Minimal Content"
        description="A simple dashboard with minimal content to focus on the layout structure."
      />
      <StatsCardGrid />
    </DashboardLayout>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Minimal dashboard content to showcase the layout structure and theme toggle placement.",
      },
    },
  },
};
