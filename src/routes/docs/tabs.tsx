import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';
import { Separator } from '@/components/ui/separator/separator';
import { Switch } from '@/components/ui/switch/switch';
import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs/tabs";

export const Route = createFileRoute("/docs/tabs")({
  component: TabsDemo,
});

function TabsDemo() {
  const [activeTab, setActiveTab] = useState("overview");
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    notifications: true,
  });

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
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Tabs</h1>
          <p className="text-lg text-muted-foreground">
            A set of layered sections of content—known as tab panels—that are
            displayed one at a time.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Navigation</Badge>
          <Badge variant="secondary">Controlled</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">Horizontal</Badge>
          <Badge variant="secondary">Vertical</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple tab navigation with content panels.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <Tabs defaultValue="account" className="w-full max-w-md">
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
        </div>
      </section>

      <Separator />

      {/* List Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">List Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for tab lists.
          </p>
        </div>
        <div className="space-y-8 p-6 border rounded-lg">
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
              <TabsContent value="tab1">
                Dashboard content with metrics
              </TabsContent>
              <TabsContent value="tab2">
                Analytics charts and graphs
              </TabsContent>
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
              <TabsContent value="tab1">
                Product catalog and details
              </TabsContent>
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
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different sizes for various UI contexts.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
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
      </section>

      <Separator />

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Vertical Orientation</h2>
          <p className="text-muted-foreground">
            Vertical tab layouts for sidebar-style navigation.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="max-w-2xl">
            <Tabs
              defaultValue="general"
              orientation="vertical"
              className="flex gap-6"
            >
              <TabsList
                orientation="vertical"
                variant="outline"
                className="w-48"
              >
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
                    Configure your security preferences and two-factor
                    authentication.
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
                  <h3 className="text-lg font-medium">
                    Notification Preferences
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choose how you want to be notified about updates and
                    changes.
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
        </div>
      </section>

      <Separator />

      {/* Content Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Content Variants</h2>
          <p className="text-muted-foreground">
            Different content panel styles and layouts.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default (Minimal)</h4>
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
      </section>

      <Separator />

      {/* Controlled Tabs */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled Tabs</h2>
          <p className="text-muted-foreground">
            Control tab state externally with value and onValueChange.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
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

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-md"
          >
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
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for tab navigation.
          </p>
        </div>
        <div className="space-y-8 p-6 border rounded-lg">
          {/* Dashboard Tabs */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Dashboard Navigation</h4>
            <Tabs defaultValue="projects" className="w-full">
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
                        <p className="text-sm font-medium">
                          {project.progress}%
                        </p>
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
                      <p className="text-sm text-muted-foreground">
                        UI Designer
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="analytics" variant="card">
                <h3 className="text-lg font-medium mb-4">Project Analytics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg text-center">
                    <p className="text-2xl font-bold text-primary">24</p>
                    <p className="text-sm text-muted-foreground">
                      Completed Tasks
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">8</p>
                    <p className="text-sm text-muted-foreground">
                      Active Projects
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Settings Tabs */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Settings Panel</h4>
            <div className="max-w-2xl">
              <Tabs defaultValue="profile" orientation="vertical">
                <TabsList
                  orientation="vertical"
                  variant="minimal"
                  className="w-40"
                >
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
                    <h3 className="text-lg font-medium mb-3">
                      Profile Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <Label className="text-xs">Name</Label>
                          <Input
                            size="sm"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                          />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs">Email</Label>
                          <Input
                            size="sm"
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
                    <h3 className="text-lg font-medium mb-3">
                      Account Settings
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-xs text-muted-foreground">
                            Receive updates via email
                          </p>
                        </div>
                        <Switch
                          size="sm"
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
                    <h3 className="text-lg font-medium mb-3">
                      Privacy Settings
                    </h3>
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Control your privacy preferences and data sharing
                        settings.
                      </p>
                      <Button size="sm">Manage Privacy</Button>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete API reference for all Tabs components.
          </p>
        </div>
        <div className="space-y-6">
          {/* Tabs Root */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Tabs</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      orientation
                    </td>
                    <td className="border border-border p-2">
                      'horizontal' | 'vertical'
                    </td>
                    <td className="border border-border p-2">'horizontal'</td>
                    <td className="border border-border p-2">
                      The orientation of the tabs
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      spacing
                    </td>
                    <td className="border border-border p-2">
                      'none' | 'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Spacing between tab list and content
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The controlled active tab value
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultValue
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The default active tab value (uncontrolled)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onValueChange
                    </td>
                    <td className="border border-border p-2">
                      (value: string) =&gt; void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Called when the active tab changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      activationMode
                    </td>
                    <td className="border border-border p-2">
                      'automatic' | 'manual'
                    </td>
                    <td className="border border-border p-2">'automatic'</td>
                    <td className="border border-border p-2">
                      Whether tabs activate on focus or click
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TabsList */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">TabsList</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'underline' | 'pills' | 'minimal'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the tab list
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the tab list
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      orientation
                    </td>
                    <td className="border border-border p-2">
                      'horizontal' | 'vertical'
                    </td>
                    <td className="border border-border p-2">'horizontal'</td>
                    <td className="border border-border p-2">
                      Layout direction of the tab list
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TabsTrigger */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">TabsTrigger</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      Unique identifier for the tab
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'underline' | 'pills' | 'minimal'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the tab trigger
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TabsContent */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">TabsContent</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      Matches the corresponding trigger value
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'minimal' | 'default' | 'card'
                    </td>
                    <td className="border border-border p-2">'minimal'</td>
                    <td className="border border-border p-2">
                      Visual style of the content panel
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      forceMount
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Force mount content regardless of active state
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p className="text-muted-foreground">
            Built-in accessibility features and keyboard navigation.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Keyboard Interactions</h4>
            <div className="bg-muted/30 p-4 rounded-lg">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Tab
                    </td>
                    <td className="py-2 pl-4">
                      Focuses the active trigger, then moves to content
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Arrow Keys
                    </td>
                    <td className="py-2 pl-4">
                      Navigate between triggers (direction depends on
                      orientation)
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Home
                    </td>
                    <td className="py-2 pl-4">Moves to the first trigger</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      End
                    </td>
                    <td className="py-2 pl-4">Moves to the last trigger</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Space/Enter
                    </td>
                    <td className="py-2 pl-4">
                      Activates trigger (in manual activation mode)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">ARIA Compliance</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Adheres to the{" "}
                <code className="bg-muted px-1 rounded">tabs</code> ARIA design
                pattern
              </li>
              <li>
                • Automatic{" "}
                <code className="bg-muted px-1 rounded">aria-selected</code> and{" "}
                <code className="bg-muted px-1 rounded">aria-controls</code>{" "}
                management
              </li>
              <li>
                • Proper <code className="bg-muted px-1 rounded">role</code>{" "}
                attributes for tablist, tab, and tabpanel
              </li>
              <li>
                • Support for{" "}
                <code className="bg-muted px-1 rounded">aria-orientation</code>{" "}
                based on layout
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>• Use descriptive labels for tab triggers</li>
              <li>
                • Provide{" "}
                <code className="bg-muted px-1 rounded">aria-label</code> for
                TabsList when needed
              </li>
              <li>
                • Consider activation mode based on content type (automatic vs
                manual)
              </li>
              <li>
                • Ensure sufficient color contrast for active/inactive states
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
