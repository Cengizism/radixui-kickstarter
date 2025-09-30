import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Switch } from './switch';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
    } from './tabs';
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
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "The orientation of the tabs",
    },
    spacing: {
      control: { type: "select" },
      options: ["none", "sm", "default", "lg"],
      description: "Spacing between tab list and content",
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
