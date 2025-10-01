import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Switch } from '../switch/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
  } from '@/components/ui/tabs';
import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Root Props
    defaultValue: {
      control: "text",
      description:
        "The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description:
        "The controlled value of the tab to activate. Should be used in conjunction with onValueChange.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Event handler called when the value changes.",
      table: {
        category: "Root Props",
        type: { summary: "(value: string) => void" },
      },
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs.",
      table: {
        category: "Root Props",
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the tabs. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      table: {
        category: "Root Props",
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    activationMode: {
      control: "select",
      options: ["automatic", "manual"],
      description:
        "When automatic, tabs are activated when receiving focus. When manual, tabs are activated when clicked.",
      table: {
        category: "Root Props",
        type: { summary: '"automatic" | "manual"' },
        defaultValue: { summary: '"automatic"' },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // List Props
    listAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the list to the one passed as a child, merging their props and behavior.",
      table: {
        category: "List Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop from last tab to first, and vice versa.",
      table: {
        category: "List Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // Trigger Props
    triggerAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the trigger to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Trigger Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    triggerValue: {
      control: "text",
      description: "A unique value that associates the trigger with a content.",
      table: {
        category: "Trigger Props",
        type: { summary: "string" },
      },
    },
    triggerDisabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the tab.",
      table: {
        category: "Trigger Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Content Props
    contentAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the content to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    contentValue: {
      control: "text",
      description: "A unique value that associates the content with a trigger.",
      table: {
        category: "Content Props",
        type: { summary: "string" },
      },
    },
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Custom Style Props
    variant: {
      control: "select",
      options: ["default", "outline", "underline"],
      description: "The visual style variant of the tabs",
      table: {
        category: "Custom Style Props",
        type: { summary: '"default" | "outline" | "underline"' },
        defaultValue: { summary: '"default"' },
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the tabs",
      table: {
        category: "Custom Style Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    spacing: {
      control: { type: "select" },
      options: ["none", "sm", "default", "lg"],
      description: "Spacing between tab list and content",
      table: {
        category: "Custom Style Props",
        type: { summary: '"none" | "sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic usage from docs
export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="account" className="w-full max-w-md" {...args}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4 mt-4">
        <h3 className="text-lg font-medium">Account Information</h3>
        <p className="text-sm text-muted-foreground">
          Make changes to your account here. Click save when you're done.
        </p>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="Pedro Duarte" />
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4 mt-4">
        <h3 className="text-lg font-medium">Change Password</h3>
        <p className="text-sm text-muted-foreground">
          Change your password here. After saving, you'll be logged out.
        </p>
        <div className="space-y-2">
          <Label htmlFor="current">Current Password</Label>
          <Input id="current" type="password" />
        </div>
      </TabsContent>
      <TabsContent value="settings" className="space-y-4 mt-4">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure your application preferences and notifications.
        </p>
        <div className="flex items-center space-x-2">
          <Switch id="notifications" />
          <Label htmlFor="notifications">Enable notifications</Label>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    orientation: "horizontal",
    spacing: "default",
  },
};

// List variants
export const ListVariants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-lg">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Default</h4>
        <Tabs defaultValue="tab1">
          <TabsList variant="default">
            <TabsTrigger variant="default" value="tab1">
              Home
            </TabsTrigger>
            <TabsTrigger variant="default" value="tab2">
              About
            </TabsTrigger>
            <TabsTrigger variant="default" value="tab3">
              Contact
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Default style tab content</TabsContent>
          <TabsContent value="tab2">About page content</TabsContent>
          <TabsContent value="tab3">Contact information</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Outline</h4>
        <Tabs defaultValue="tab1">
          <TabsList variant="outline">
            <TabsTrigger variant="outline" value="tab1">
              Dashboard
            </TabsTrigger>
            <TabsTrigger variant="outline" value="tab2">
              Analytics
            </TabsTrigger>
            <TabsTrigger variant="outline" value="tab3">
              Reports
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Dashboard content with metrics</TabsContent>
          <TabsContent value="tab2">Analytics charts and graphs</TabsContent>
          <TabsContent value="tab3">Generated reports</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Underline</h4>
        <Tabs defaultValue="tab1">
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="tab1">
              Products
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tab2">
              Services
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tab3">
              Support
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Product catalog and details</TabsContent>
          <TabsContent value="tab2">Service offerings</TabsContent>
          <TabsContent value="tab3">Customer support</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Pills</h4>
        <Tabs defaultValue="tab1">
          <TabsList variant="pills">
            <TabsTrigger variant="pills" value="tab1">
              Overview
            </TabsTrigger>
            <TabsTrigger variant="pills" value="tab2">
              Features
            </TabsTrigger>
            <TabsTrigger variant="pills" value="tab3">
              Pricing
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Company overview</TabsContent>
          <TabsContent value="tab2">Feature highlights</TabsContent>
          <TabsContent value="tab3">Pricing plans</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Minimal</h4>
        <Tabs defaultValue="tab1">
          <TabsList variant="minimal">
            <TabsTrigger variant="minimal" value="tab1">
              Profile
            </TabsTrigger>
            <TabsTrigger variant="minimal" value="tab2">
              Activity
            </TabsTrigger>
            <TabsTrigger variant="minimal" value="tab3">
              History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">User profile information</TabsContent>
          <TabsContent value="tab2">Recent activity feed</TabsContent>
          <TabsContent value="tab3">Action history</TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different visual styles for tab lists.",
      },
    },
  },
};

// Size variants
export const SizeVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-lg">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Small</h4>
        <Tabs defaultValue="tab1">
          <TabsList size="sm">
            <TabsTrigger size="sm" value="tab1">
              Small
            </TabsTrigger>
            <TabsTrigger size="sm" value="tab2">
              Tabs
            </TabsTrigger>
            <TabsTrigger size="sm" value="tab3">
              Here
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Compact tab content</TabsContent>
          <TabsContent value="tab2">Perfect for tight spaces</TabsContent>
          <TabsContent value="tab3">Mobile-friendly sizing</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Default</h4>
        <Tabs defaultValue="tab1">
          <TabsList size="default">
            <TabsTrigger size="default" value="tab1">
              Standard
            </TabsTrigger>
            <TabsTrigger size="default" value="tab2">
              Regular
            </TabsTrigger>
            <TabsTrigger size="default" value="tab3">
              Normal
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Standard size content</TabsContent>
          <TabsContent value="tab2">Regular tab sizing</TabsContent>
          <TabsContent value="tab3">Normal dimensions</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Large</h4>
        <Tabs defaultValue="tab1">
          <TabsList size="lg">
            <TabsTrigger size="lg" value="tab1">
              Large
            </TabsTrigger>
            <TabsTrigger size="lg" value="tab2">
              Prominent
            </TabsTrigger>
            <TabsTrigger size="lg" value="tab3">
              Bold
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Large tab content</TabsContent>
          <TabsContent value="tab2">More prominent display</TabsContent>
          <TabsContent value="tab3">Bold visual hierarchy</TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different sizes for various UI contexts.",
      },
    },
  },
};

// Vertical orientation
export const VerticalOrientation: Story = {
  render: () => (
    <div className="max-w-2xl">
      <Tabs
        defaultValue="general"
        orientation="vertical"
        className="flex gap-6"
      >
        <TabsList orientation="vertical" variant="outline" className="w-48">
          <TabsTrigger
            orientation="vertical"
            variant="outline"
            value="general"
            className="w-full"
          >
            General
          </TabsTrigger>
          <TabsTrigger
            orientation="vertical"
            variant="outline"
            value="security"
            className="w-full"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            orientation="vertical"
            variant="outline"
            value="notifications"
            className="w-full"
          >
            Notifications
          </TabsTrigger>
          <TabsTrigger
            orientation="vertical"
            variant="outline"
            value="billing"
            className="w-full"
          >
            Billing
          </TabsTrigger>
        </TabsList>

        <div className="flex-1">
          <TabsContent
            orientation="vertical"
            value="general"
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">General Settings</h3>
            <p className="text-sm text-muted-foreground">
              Manage your general account settings and preferences.
            </p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <Input type="email" defaultValue="john@example.com" />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            orientation="vertical"
            value="security"
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">Security Settings</h3>
            <p className="text-sm text-muted-foreground">
              Configure your security preferences and two-factor authentication.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security
                  </p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label>Current Password</Label>
                <Input type="password" />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            orientation="vertical"
            value="notifications"
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">Notification Preferences</h3>
            <p className="text-sm text-muted-foreground">
              Choose how you want to be notified about updates and changes.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive updates via email
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive browser notifications
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            orientation="vertical"
            value="billing"
            className="space-y-4"
          >
            <h3 className="text-lg font-medium">Billing Information</h3>
            <p className="text-sm text-muted-foreground">
              Manage your billing details and subscription.
            </p>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <p className="font-medium">Current Plan: Pro</p>
                <p className="text-sm text-muted-foreground">
                  $19/month • Renews on Jan 15, 2024
                </p>
              </div>
              <Button>Upgrade Plan</Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Vertical tab layouts for sidebar-style navigation.",
      },
    },
  },
};

// Content variants
export const ContentVariants: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-lg">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Minimal (Default)</h4>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent variant="minimal" value="tab1">
            Minimal content with no border or background
          </TabsContent>
          <TabsContent variant="minimal" value="tab2">
            Clean, simple content presentation
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Default Container</h4>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent variant="default" value="tab1">
            Content with border and background container
          </TabsContent>
          <TabsContent variant="default" value="tab2">
            Structured content presentation
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Card</h4>
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent variant="card" value="tab1">
            Card-style content with shadow and enhanced spacing
          </TabsContent>
          <TabsContent variant="card" value="tab2">
            Elevated content presentation with card styling
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different content panel styles and layouts.",
      },
    },
  },
};

// Controlled tabs
export const ControlledTabs: Story = {
  render: function ControlledExample() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
      <div className="space-y-4 w-full max-w-lg">
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Active tab: {activeTab}</span>
          <Button
            onClick={() => setActiveTab("overview")}
            variant="outline"
            size="sm"
          >
            Go to Overview
          </Button>
          <Button
            onClick={() => setActiveTab("details")}
            variant="outline"
            size="sm"
          >
            Go to Details
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-2 mt-4">
            <h3 className="font-medium">Project Overview</h3>
            <p className="text-sm text-muted-foreground">
              High-level project information and current status.
            </p>
          </TabsContent>
          <TabsContent value="details" className="space-y-2 mt-4">
            <h3 className="font-medium">Detailed Information</h3>
            <p className="text-sm text-muted-foreground">
              In-depth project details, specifications, and requirements.
            </p>
          </TabsContent>
          <TabsContent value="history" className="space-y-2 mt-4">
            <h3 className="font-medium">Project History</h3>
            <p className="text-sm text-muted-foreground">
              Timeline of changes, updates, and milestones.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Control tab state externally with value and onValueChange.",
      },
    },
  },
};

// Dashboard example
export const DashboardExample: Story = {
  render: () => {
    const projects = [
      {
        id: "project-1",
        name: "Website Redesign",
        status: "active",
        progress: 75,
      },
      { id: "project-2", name: "Mobile App", status: "planning", progress: 20 },
      {
        id: "project-3",
        name: "API Integration",
        status: "completed",
        progress: 100,
      },
    ];

    return (
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="projects">
          <TabsList variant="underline">
            <TabsTrigger variant="underline" value="projects">
              Projects
            </TabsTrigger>
            <TabsTrigger variant="underline" value="tasks">
              Tasks
            </TabsTrigger>
            <TabsTrigger variant="underline" value="team">
              Team
            </TabsTrigger>
            <TabsTrigger variant="underline" value="analytics">
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="projects" variant="card">
            <h3 className="text-lg font-medium mb-4">Active Projects</h3>
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {project.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{project.progress}%</p>
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tasks" variant="card">
            <h3 className="text-lg font-medium mb-4">Recent Tasks</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Review design mockups</span>
              </div>
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" className="rounded" defaultChecked />
                <span className="text-sm line-through text-muted-foreground">
                  Update documentation
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 border rounded">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Deploy to staging</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team" variant="card">
            <h3 className="text-lg font-medium mb-4">Team Members</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
                  JD
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">
                    Lead Developer
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-xs">
                  JS
                </div>
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">UI Designer</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" variant="card">
            <h3 className="text-lg font-medium mb-4">Project Analytics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">24</p>
                <p className="text-sm text-muted-foreground">Completed Tasks</p>
              </div>
              <div className="p-4 border rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600">8</p>
                <p className="text-sm text-muted-foreground">Active Projects</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Real-world dashboard navigation with project data.",
      },
    },
  },
};

// Settings panel example
export const SettingsPanelExample: Story = {
  render: function SettingsExample() {
    const [formData, setFormData] = useState({
      name: "John Doe",
      email: "john@example.com",
      notifications: true,
    });

    return (
      <div className="max-w-2xl">
        <Tabs defaultValue="profile" orientation="vertical">
          <TabsList orientation="vertical" variant="minimal" className="w-40">
            <TabsTrigger
              orientation="vertical"
              variant="minimal"
              value="profile"
              className="w-full"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              orientation="vertical"
              variant="minimal"
              value="account"
              className="w-full"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              orientation="vertical"
              variant="minimal"
              value="privacy"
              className="w-full"
            >
              Privacy
            </TabsTrigger>
          </TabsList>

          <div className="flex-1">
            <TabsContent
              orientation="vertical"
              value="profile"
              variant="default"
            >
              <h3 className="text-lg font-medium mb-3">Profile Settings</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label className="text-xs">Name</Label>
                    <Input
                      className="h-8 text-sm"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs">Email</Label>
                    <Input
                      className="h-8 text-sm"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent
              orientation="vertical"
              value="account"
              variant="default"
            >
              <h3 className="text-lg font-medium mb-3">Account Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-xs text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    checked={formData.notifications}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, notifications: checked })
                    }
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent
              orientation="vertical"
              value="privacy"
              variant="default"
            >
              <h3 className="text-lg font-medium mb-3">Privacy Settings</h3>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Control your privacy preferences and data sharing settings.
                </p>
                <Button size="sm">Manage Privacy</Button>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Vertical settings panel with form controls.",
      },
    },
  },
};

// Disabled tabs
export const DisabledTabs: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="tab1">Available</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          Coming Soon
        </TabsTrigger>
        <TabsTrigger value="tab3">Active</TabsTrigger>
        <TabsTrigger value="tab4" disabled>
          Premium Only
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        This tab is available and accessible.
      </TabsContent>
      <TabsContent value="tab2">
        This content won't be shown as the tab is disabled.
      </TabsContent>
      <TabsContent value="tab3">
        Another available tab with content.
      </TabsContent>
      <TabsContent value="tab4">This content is also inaccessible.</TabsContent>
    </Tabs>
  ),
  parameters: {
    docs: {
      description: {
        story: "Tabs with disabled states for unavailable options.",
      },
    },
  },
};

// Tab spacing variants
export const SpacingVariants: Story = {
  render: () => (
    <div className="space-y-8 w-full max-w-lg">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">No Spacing</h4>
        <Tabs defaultValue="tab1" spacing="none">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content with no spacing</TabsContent>
          <TabsContent value="tab2">Tight layout</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Small Spacing</h4>
        <Tabs defaultValue="tab1" spacing="sm">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content with small spacing</TabsContent>
          <TabsContent value="tab2">Compact layout</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Default Spacing</h4>
        <Tabs defaultValue="tab1" spacing="default">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content with default spacing</TabsContent>
          <TabsContent value="tab2">Standard layout</TabsContent>
        </Tabs>
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Large Spacing</h4>
        <Tabs defaultValue="tab1" spacing="lg">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content with large spacing</TabsContent>
          <TabsContent value="tab2">Spacious layout</TabsContent>
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different spacing options between tab list and content.",
      },
    },
  },
};

// Advanced Examples
export const AdvancedControlledTabs: Story = {
  render: () => {
    const [activeTab, setActiveTab] = React.useState("overview");
    const [tabHistory, setTabHistory] = React.useState<
      Array<{
        tab: string;
        timestamp: string;
      }>
    >([{ tab: "overview", timestamp: new Date().toLocaleTimeString() }]);
    const [tabConfig, setTabConfig] = React.useState({
      orientation: "horizontal" as "horizontal" | "vertical",
      activationMode: "automatic" as "automatic" | "manual",
      loop: true,
      dir: "ltr" as "ltr" | "rtl",
    });
    const [tabData, setTabData] = React.useState({
      overview: { visits: 0, lastVisit: new Date().toISOString() },
      analytics: { visits: 0, lastVisit: new Date().toISOString() },
      settings: { visits: 0, lastVisit: new Date().toISOString() },
      security: { visits: 0, lastVisit: new Date().toISOString() },
      billing: { visits: 0, lastVisit: new Date().toISOString() },
    });

    const handleTabChange = (value: string) => {
      setActiveTab(value);
      setTabHistory((prev) =>
        [
          ...prev,
          {
            tab: value,
            timestamp: new Date().toLocaleTimeString(),
          },
        ].slice(-20)
      ); // Keep last 20 tab changes

      setTabData((prev) => ({
        ...prev,
        [value]: {
          visits: prev[value as keyof typeof prev].visits + 1,
          lastVisit: new Date().toISOString(),
        },
      }));
    };

    const resetTabHistory = () => {
      setTabHistory([
        { tab: activeTab, timestamp: new Date().toLocaleTimeString() },
      ]);
      setTabData(
        Object.keys(tabData).reduce(
          (acc, key) => ({
            ...acc,
            [key]: {
              visits: key === activeTab ? 1 : 0,
              lastVisit: new Date().toISOString(),
            },
          }),
          {} as typeof tabData
        )
      );
    };

    const tabs = [
      {
        value: "overview",
        label: "Overview",
        icon: "📊",
        description: "General dashboard and key metrics",
      },
      {
        value: "analytics",
        label: "Analytics",
        icon: "📈",
        description: "Detailed analytics and reporting",
      },
      {
        value: "settings",
        label: "Settings",
        icon: "⚙️",
        description: "Application configuration",
      },
      {
        value: "security",
        label: "Security",
        icon: "🔒",
        description: "Security and authentication settings",
      },
      {
        value: "billing",
        label: "Billing",
        icon: "💳",
        description: "Subscription and payment management",
      },
    ];

    return (
      <div className="max-w-6xl space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced Controlled Tabs Dashboard
          </h3>

          {/* Configuration Panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Orientation</label>
              <div className="flex gap-2">
                {(["horizontal", "vertical"] as const).map((orientation) => (
                  <button
                    key={orientation}
                    onClick={() =>
                      setTabConfig((prev) => ({ ...prev, orientation }))
                    }
                    className={`px-2 py-1 rounded text-xs ${
                      tabConfig.orientation === orientation
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border"
                    }`}
                  >
                    {orientation}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Activation Mode</label>
              <div className="flex gap-2">
                {(["automatic", "manual"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() =>
                      setTabConfig((prev) => ({
                        ...prev,
                        activationMode: mode,
                      }))
                    }
                    className={`px-2 py-1 rounded text-xs ${
                      tabConfig.activationMode === mode
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="loop"
                checked={tabConfig.loop}
                onChange={(e) =>
                  setTabConfig((prev) => ({ ...prev, loop: e.target.checked }))
                }
              />
              <label htmlFor="loop" className="text-sm">
                Loop Navigation
              </label>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Direction</label>
              <div className="flex gap-2">
                {(["ltr", "rtl"] as const).map((dir) => (
                  <button
                    key={dir}
                    onClick={() => setTabConfig((prev) => ({ ...prev, dir }))}
                    className={`px-2 py-1 rounded text-xs uppercase ${
                      tabConfig.dir === dir
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border"
                    }`}
                  >
                    {dir}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${tabConfig.orientation === "vertical" ? "flex gap-6" : ""}`}
        >
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            orientation={tabConfig.orientation}
            activationMode={tabConfig.activationMode}
            dir={tabConfig.dir}
            className={
              tabConfig.orientation === "vertical" ? "flex-1" : "w-full"
            }
          >
            <TabsList
              className={
                tabConfig.orientation === "vertical" ? "flex-col h-fit" : ""
              }
            >
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className={
                    tabConfig.orientation === "vertical"
                      ? "w-full justify-start"
                      : ""
                  }
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                  {tabData[tab.value as keyof typeof tabData].visits > 0 && (
                    <span className="ml-2 px-1.5 py-0.5 bg-primary/20 text-primary text-xs rounded-full">
                      {tabData[tab.value as keyof typeof tabData].visits}
                    </span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="space-y-4"
              >
                <div className="border rounded-lg p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tab.icon}</span>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold">{tab.label}</h4>
                      <p className="text-muted-foreground">{tab.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-2xl font-bold">
                        {tabData[tab.value as keyof typeof tabData].visits}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Visits
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-sm font-medium">
                        {new Date(
                          tabData[tab.value as keyof typeof tabData].lastVisit
                        ).toLocaleTimeString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Last Visit
                      </div>
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-sm font-medium">
                        {activeTab === tab.value ? "Active" : "Inactive"}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Status
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h5 className="font-medium mb-3">{tab.label} Content</h5>
                    <div className="prose text-sm text-muted-foreground">
                      {tab.value === "overview" && (
                        <div>
                          <p>
                            Welcome to your dashboard overview. Here you can see
                            key metrics and recent activity.
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li>• Total active sessions: 1,234</li>
                            <li>• Revenue this month: $45,678</li>
                            <li>• System health: 99.9%</li>
                          </ul>
                        </div>
                      )}
                      {tab.value === "analytics" && (
                        <div>
                          <p>
                            Detailed analytics and performance metrics for your
                            application.
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li>• Page views: 89,432</li>
                            <li>• Bounce rate: 32%</li>
                            <li>• Conversion rate: 4.2%</li>
                          </ul>
                        </div>
                      )}
                      {tab.value === "settings" && (
                        <div>
                          <p>
                            Configure your application settings and preferences.
                          </p>
                          <div className="mt-4 space-y-2">
                            <div className="flex items-center justify-between p-2 border rounded">
                              <span>Dark mode</span>
                              <Switch />
                            </div>
                            <div className="flex items-center justify-between p-2 border rounded">
                              <span>Notifications</span>
                              <Switch defaultChecked />
                            </div>
                          </div>
                        </div>
                      )}
                      {tab.value === "security" && (
                        <div>
                          <p>
                            Manage your security settings and authentication
                            methods.
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li>• Two-factor authentication: Enabled</li>
                            <li>• Last login: 2 hours ago</li>
                            <li>• Active sessions: 3 devices</li>
                          </ul>
                        </div>
                      )}
                      {tab.value === "billing" && (
                        <div>
                          <p>
                            View and manage your subscription and billing
                            information.
                          </p>
                          <ul className="mt-2 space-y-1">
                            <li>• Current plan: Pro ($29/month)</li>
                            <li>• Next billing: Jan 15, 2024</li>
                            <li>• Payment method: •••• 1234</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Tab Analytics Sidebar */}
          <div
            className={`${tabConfig.orientation === "vertical" ? "w-80" : "mt-6"}`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">Tab Analytics</h4>
                <Button onClick={resetTabHistory} variant="outline" size="sm">
                  Reset History
                </Button>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <h5 className="text-sm font-medium">Current Session</h5>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between">
                    <span>Active tab:</span>
                    <span className="font-medium">{activeTab}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total switches:</span>
                    <span className="font-medium">{tabHistory.length - 1}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Configuration:</span>
                    <span className="font-medium">
                      {tabConfig.orientation}, {tabConfig.activationMode}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="text-sm font-medium mb-3">
                  Recent Tab History ({tabHistory.length}/20)
                </h5>
                <div className="max-h-48 overflow-y-auto space-y-2">
                  {tabHistory
                    .slice()
                    .reverse()
                    .slice(0, 10)
                    .map((entry, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-xs p-2 bg-muted/50 rounded"
                      >
                        <div className="flex items-center gap-2">
                          <span>
                            {tabs.find((t) => t.value === entry.tab)?.icon}
                          </span>
                          <span className="capitalize">{entry.tab}</span>
                        </div>
                        <span className="text-muted-foreground">
                          {entry.timestamp}
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h5 className="text-sm font-medium mb-3">Visit Count</h5>
                <div className="space-y-2">
                  {tabs.map((tab) => (
                    <div
                      key={tab.value}
                      className="flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span>{tab.icon}</span>
                        <span>{tab.label}</span>
                      </div>
                      <span className="font-medium">
                        {tabData[tab.value as keyof typeof tabData].visits}{" "}
                        visits
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>Controlled state:</strong> Tabs controlled via React
              state with onValueChange
            </li>
            <li>
              • <strong>Dynamic configuration:</strong> Change orientation,
              activation mode, and direction
            </li>
            <li>
              • <strong>Tab analytics:</strong> Track visits, timing, and
              navigation patterns
            </li>
            <li>
              • <strong>History tracking:</strong> Maintain session history of
              tab switches
            </li>
            <li>
              • <strong>Loop navigation:</strong> Toggle keyboard navigation
              looping
            </li>
            <li>
              • <strong>Activation modes:</strong> Automatic (focus) vs Manual
              (click) tab activation
            </li>
            <li>
              • <strong>RTL support:</strong> Right-to-left reading direction
            </li>
          </ul>
        </div>
      </div>
    );
  },
};

export const DynamicTabManagement: Story = {
  render: () => {
    const [tabs, setTabs] = React.useState([
      {
        id: "1",
        label: "Tab 1",
        content: "Content for Tab 1",
        closable: false,
      },
      { id: "2", label: "Tab 2", content: "Content for Tab 2", closable: true },
      { id: "3", label: "Tab 3", content: "Content for Tab 3", closable: true },
    ]);
    const [activeTab, setActiveTab] = React.useState("1");
    const [nextId, setNextId] = React.useState(4);

    const addTab = () => {
      const newTab = {
        id: nextId.toString(),
        label: `New Tab ${nextId}`,
        content: `This is the content for dynamically created tab ${nextId}. You can edit this content.`,
        closable: true,
      };
      setTabs((prev) => [...prev, newTab]);
      setActiveTab(newTab.id);
      setNextId((prev) => prev + 1);
    };

    const closeTab = (tabId: string) => {
      setTabs((prev) => {
        const newTabs = prev.filter((tab) => tab.id !== tabId);
        // If closing the active tab, switch to another tab
        if (tabId === activeTab && newTabs.length > 0) {
          setActiveTab(newTabs[0].id);
        }
        return newTabs;
      });
    };

    const duplicateTab = (tabId: string) => {
      const tabToDuplicate = tabs.find((tab) => tab.id === tabId);
      if (tabToDuplicate) {
        const newTab = {
          id: nextId.toString(),
          label: `${tabToDuplicate.label} (Copy)`,
          content: tabToDuplicate.content,
          closable: true,
        };
        setTabs((prev) => [...prev, newTab]);
        setActiveTab(newTab.id);
        setNextId((prev) => prev + 1);
      }
    };

    const updateTabLabel = (tabId: string, newLabel: string) => {
      setTabs((prev) =>
        prev.map((tab) =>
          tab.id === tabId ? { ...tab, label: newLabel } : tab
        )
      );
    };

    const updateTabContent = (tabId: string, newContent: string) => {
      setTabs((prev) =>
        prev.map((tab) =>
          tab.id === tabId ? { ...tab, content: newContent } : tab
        )
      );
    };

    const reorderTabs = (fromIndex: number, toIndex: number) => {
      setTabs((prev) => {
        const newTabs = [...prev];
        const [removed] = newTabs.splice(fromIndex, 1);
        newTabs.splice(toIndex, 0, removed);
        return newTabs;
      });
    };

    return (
      <div className="max-w-4xl space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Dynamic Tab Management</h3>

          <div className="flex gap-2 mb-4">
            <Button onClick={addTab} size="sm">
              + Add Tab
            </Button>
            <Button
              onClick={() => duplicateTab(activeTab)}
              variant="outline"
              size="sm"
              disabled={tabs.length === 0}
            >
              Duplicate Active
            </Button>
          </div>
        </div>

        {tabs.length === 0 ? (
          <div className="text-center py-12 border rounded-lg border-dashed">
            <p className="text-muted-foreground mb-4">No tabs available</p>
            <Button onClick={addTab}>Create First Tab</Button>
          </div>
        ) : (
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full justify-start overflow-x-auto">
              {tabs.map((tab) => (
                <div key={tab.id} className="flex items-center group relative">
                  <TabsTrigger
                    value={tab.id}
                    className="pr-8 max-w-40"
                    onDoubleClick={() => {
                      const newLabel = prompt("Enter new tab name:", tab.label);
                      if (newLabel && newLabel.trim()) {
                        updateTabLabel(tab.id, newLabel.trim());
                      }
                    }}
                  >
                    <span className="truncate">{tab.label}</span>
                  </TabsTrigger>

                  {tab.closable && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeTab(tab.id);
                      }}
                      className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full hover:bg-destructive/10 hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs"
                    >
                      ×
                    </button>
                  )}

                  {/* Drag handle (visual only in this demo) */}
                  <div
                    className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-border rounded-full cursor-grab opacity-0 group-hover:opacity-50 transition-opacity"
                    title="Drag to reorder"
                  />
                </div>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="space-y-4">
                <div className="border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold">{tab.label}</h4>
                      <p className="text-sm text-muted-foreground">
                        Tab ID: {tab.id}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        onClick={() => duplicateTab(tab.id)}
                        variant="outline"
                        size="sm"
                      >
                        Duplicate
                      </Button>
                      {tab.closable && (
                        <Button
                          onClick={() => closeTab(tab.id)}
                          variant="outline"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          Close
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor={`tab-label-${tab.id}`}
                        className="text-sm font-medium"
                      >
                        Tab Label
                      </Label>
                      <Input
                        id={`tab-label-${tab.id}`}
                        value={tab.label}
                        onChange={(e) => updateTabLabel(tab.id, e.target.value)}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor={`tab-content-${tab.id}`}
                        className="text-sm font-medium"
                      >
                        Tab Content
                      </Label>
                      <textarea
                        id={`tab-content-${tab.id}`}
                        value={tab.content}
                        onChange={(e) =>
                          updateTabContent(tab.id, e.target.value)
                        }
                        className="mt-1 w-full h-32 px-3 py-2 border border-input rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter tab content..."
                      />
                    </div>

                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-medium mb-2">Preview</h5>
                      <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                        {tab.content}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}

        <div className="border rounded-lg p-4">
          <h4 className="font-medium mb-3">Tab Statistics</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="font-medium">{tabs.length}</div>
              <div className="text-muted-foreground">Total Tabs</div>
            </div>
            <div>
              <div className="font-medium">
                {tabs.filter((t) => t.closable).length}
              </div>
              <div className="text-muted-foreground">Closable</div>
            </div>
            <div>
              <div className="font-medium">
                {tabs.filter((t) => !t.closable).length}
              </div>
              <div className="text-muted-foreground">Permanent</div>
            </div>
            <div>
              <div className="font-medium">{activeTab}</div>
              <div className="text-muted-foreground">Active Tab ID</div>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>Dynamic tab creation:</strong> Add new tabs
              programmatically
            </li>
            <li>
              • <strong>Tab closing:</strong> Remove tabs with closable property
              control
            </li>
            <li>
              • <strong>Tab duplication:</strong> Clone existing tabs with
              content
            </li>
            <li>
              • <strong>Inline editing:</strong> Double-click tab labels to
              rename
            </li>
            <li>
              • <strong>Content editing:</strong> Live editing of tab content
            </li>
            <li>
              • <strong>Tab management:</strong> Control closable vs permanent
              tabs
            </li>
            <li>
              • <strong>Active tab handling:</strong> Auto-switch when closing
              active tab
            </li>
          </ul>
        </div>
      </div>
    );
  },
};
