import React, { useState } from 'react';
import { Button } from '../button/button';
import { Label } from '../label/label';
import { Switch } from '@/components/ui/switch';
import {
  Smartphone,
  Monitor,
  Mail,
  Moon,
  Sun,
  VolumeX,
  Volume2,
  Bell,
  Save,
  Lock,
  BarChart3,
} from "lucide-react";

export default {
  title: "UI/Switch",
  component: Switch,
  docs: {
    description: {
      component:
        "A switch component for toggling between on and off states. Built with Radix UI primitives for accessibility and keyboard navigation.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    defaultChecked: {
      control: "boolean",
      description:
        "The state of the switch when it is initially rendered. Use when you do not need to control its state.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
      },
    },
    checked: {
      control: "boolean",
      description:
        "The controlled state of the switch. Must be used in conjunction with onCheckedChange.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
      },
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "Event handler called when the state of the switch changes.",
      table: {
        category: "Root Props",
        type: { summary: "(checked: boolean) => void" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the switch.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must check the switch before the owning form can be submitted.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    name: {
      control: "text",
      description:
        "The name of the switch. Submitted with its owning form as part of a name/value pair.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "The value given as data when submitted with a name.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
        defaultValue: { summary: '"on"' },
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

    // Thumb Props
    thumbAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the thumb to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Thumb Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Data Attributes (Auto-applied)
    "data-state": {
      control: false,
      description: "The state of the switch. Either 'checked' or 'unchecked'.",
      table: {
        category: "Data Attributes",
        type: { summary: '"checked" | "unchecked"' },
      },
    },
    "data-disabled": {
      control: false,
      description: "Present when disabled.",
      table: {
        category: "Data Attributes",
        type: { summary: "" },
      },
    },

    // Custom Style Props
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "The size variant of the switch",
      table: {
        category: "Custom Style Props",
        type: { summary: '"sm" | "default" | "lg" | "xl"' },
        defaultValue: { summary: '"default"' },
      },
    },
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "destructive",
        "success",
        "warning",
      ],
      description: "The visual style variant of the switch",
      table: {
        category: "Custom Style Props",
        type: {
          summary:
            '"default" | "outline" | "secondary" | "destructive" | "success" | "warning"',
        },
        defaultValue: { summary: '"default"' },
      },
    },
  },
};

// Default switch
export const Default = () => (
  <div className="flex items-center space-x-2">
    <Switch id="default-switch" />
    <Label htmlFor="default-switch">Default Switch</Label>
  </div>
);

// Variant styles
export const Variants = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Switch id="default-variant" variant="default" defaultChecked />
      <Label htmlFor="default-variant">Default</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="outline-variant" variant="outline" defaultChecked />
      <Label htmlFor="outline-variant">Outline</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="secondary-variant" variant="secondary" defaultChecked />
      <Label htmlFor="secondary-variant">Secondary</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="destructive-variant" variant="destructive" defaultChecked />
      <Label htmlFor="destructive-variant">Destructive</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="success-variant" variant="success" defaultChecked />
      <Label htmlFor="success-variant">Success</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="warning-variant" variant="warning" defaultChecked />
      <Label htmlFor="warning-variant">Warning</Label>
    </div>
  </div>
);

// States (checked/unchecked)
export const States = () => (
  <div className="grid grid-cols-2 gap-6">
    <div className="space-y-4">
      <h3 className="font-medium">Unchecked States</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Switch id="unchecked-1" />
          <Label htmlFor="unchecked-1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="unchecked-2" variant="outline" />
          <Label htmlFor="unchecked-2">Outline</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="unchecked-3" variant="secondary" />
          <Label htmlFor="unchecked-3">Secondary</Label>
        </div>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="font-medium">Checked States</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Switch id="checked-1" defaultChecked />
          <Label htmlFor="checked-1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="checked-2" variant="outline" defaultChecked />
          <Label htmlFor="checked-2">Outline</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="checked-3" variant="secondary" defaultChecked />
          <Label htmlFor="checked-3">Secondary</Label>
        </div>
      </div>
    </div>
  </div>
);

// Disabled states
export const DisabledStates = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Switch id="disabled-unchecked" disabled />
      <Label htmlFor="disabled-unchecked">Disabled (unchecked)</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="disabled-checked" disabled defaultChecked />
      <Label htmlFor="disabled-checked">Disabled (checked)</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="disabled-outline" disabled defaultChecked variant="outline" />
      <Label htmlFor="disabled-outline">Disabled outline</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch
        id="disabled-destructive"
        disabled
        defaultChecked
        variant="destructive"
      />
      <Label htmlFor="disabled-destructive">Disabled destructive</Label>
    </div>
  </div>
);

// Controlled switches
export const ControlledSwitches = () => {
  const [notifications, setNotifications] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Privacy Settings</h3>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notifications">Push Notifications</Label>
            <p className="text-sm text-muted-foreground">
              Receive notifications about activity
            </p>
          </div>
          <Switch
            id="notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="marketing">Marketing Emails</Label>
            <p className="text-sm text-muted-foreground">
              Receive emails about new features and promotions
            </p>
          </div>
          <Switch
            id="marketing"
            checked={marketing}
            onCheckedChange={setMarketing}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="analytics">Analytics</Label>
            <p className="text-sm text-muted-foreground">
              Help us improve by sharing anonymous usage data
            </p>
          </div>
          <Switch
            id="analytics"
            checked={analytics}
            onCheckedChange={setAnalytics}
            variant="success"
          />
        </div>
      </div>

      <div className="mt-4 p-3 bg-muted rounded-md text-sm">
        <strong>Current Settings:</strong>
        <ul className="mt-1 space-y-1">
          <li>Notifications: {notifications ? "Enabled" : "Disabled"}</li>
          <li>Marketing: {marketing ? "Enabled" : "Disabled"}</li>
          <li>Analytics: {analytics ? "Enabled" : "Disabled"}</li>
        </ul>
      </div>
    </div>
  );
};

// Form integration
export const FormIntegration = () => {
  const [formData, setFormData] = useState({
    emailNotifications: true,
    smsNotifications: false,
    darkMode: true,
    autoSave: false,
    publicProfile: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with settings: ${JSON.stringify(formData, null, 2)}`);
  };

  const updateSetting = (key: string, value: boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <h3 className="font-medium">Account Preferences</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="email-notifications">Email Notifications</Label>
          <Switch
            id="email-notifications"
            checked={formData.emailNotifications}
            onCheckedChange={(checked) =>
              updateSetting("emailNotifications", checked)
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="sms-notifications">SMS Notifications</Label>
          <Switch
            id="sms-notifications"
            checked={formData.smsNotifications}
            onCheckedChange={(checked) =>
              updateSetting("smsNotifications", checked)
            }
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch
            id="dark-mode"
            checked={formData.darkMode}
            onCheckedChange={(checked) => updateSetting("darkMode", checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="auto-save">Auto Save</Label>
          <Switch
            id="auto-save"
            checked={formData.autoSave}
            onCheckedChange={(checked) => updateSetting("autoSave", checked)}
            variant="success"
          />
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="public-profile">Public Profile</Label>
          <Switch
            id="public-profile"
            checked={formData.publicProfile}
            onCheckedChange={(checked) =>
              updateSetting("publicProfile", checked)
            }
            variant="warning"
          />
        </div>
      </div>

      <Button type="submit" className="w-full">
        Save Preferences
      </Button>
    </form>
  );
};

// Different layouts
export const DifferentLayouts = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-medium mb-3">Horizontal Layout</h4>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Switch id="horizontal-1" size="sm" />
          <Label htmlFor="horizontal-1">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="horizontal-2" size="sm" />
          <Label htmlFor="horizontal-2">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="horizontal-3" size="sm" />
          <Label htmlFor="horizontal-3">Option 3</Label>
        </div>
      </div>
    </div>

    <div>
      <h4 className="font-medium mb-3">Card Layout</h4>
      <div className="grid grid-cols-1 gap-3">
        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="card-1" className="text-base font-medium">
                Feature One
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable this awesome feature
              </p>
            </div>
            <Switch id="card-1" defaultChecked />
          </div>
        </div>

        <div className="border rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="card-2" className="text-base font-medium">
                Feature Two
              </Label>
              <p className="text-sm text-muted-foreground">
                Another great option to toggle
              </p>
            </div>
            <Switch id="card-2" variant="success" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 className="font-medium mb-3">List Layout</h4>
      <div className="border rounded-lg divide-y">
        <div className="p-3 flex items-center justify-between">
          <Label htmlFor="list-1">Two-factor authentication</Label>
          <Switch id="list-1" variant="success" defaultChecked />
        </div>
        <div className="p-3 flex items-center justify-between">
          <Label htmlFor="list-2">Login notifications</Label>
          <Switch id="list-2" defaultChecked />
        </div>
        <div className="p-3 flex items-center justify-between">
          <Label htmlFor="list-3">Data export</Label>
          <Switch id="list-3" />
        </div>
      </div>
    </div>
  </div>
);

// Loading and async states
export const AsyncStates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [asyncChecked, setAsyncChecked] = useState(false);

  const handleAsyncToggle = async (checked: boolean) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setAsyncChecked(checked);
    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="async-switch">Sync to Cloud</Label>
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Syncing..." : "Automatically sync your data"}
          </p>
        </div>
        <Switch
          id="async-switch"
          checked={asyncChecked}
          onCheckedChange={handleAsyncToggle}
          disabled={isLoading}
        />
      </div>

      {isLoading && (
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
          <span>Updating settings...</span>
        </div>
      )}
    </div>
  );
};

// Switch with icons
export const WithIcons = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Moon className="h-4 w-4" />
        <Switch id="dark-mode-icon" />
        <Sun className="h-4 w-4" />
      </div>
      <Label htmlFor="dark-mode-icon">Dark Mode</Label>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <VolumeX className="h-4 w-4" />
        <Switch id="sound-icon" defaultChecked />
        <Volume2 className="h-4 w-4" />
      </div>
      <Label htmlFor="sound-icon">Sound</Label>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Smartphone className="h-4 w-4 text-muted-foreground" />
        <Switch id="mobile-icon" />
        <Monitor className="h-4 w-4 text-muted-foreground" />
      </div>
      <Label htmlFor="mobile-icon">Desktop Mode</Label>
    </div>
  </div>
);

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "xl";
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "success"
    | "warning";
  disabled?: boolean;
}) => (
  <div className="flex items-center space-x-2">
    <Switch
      id="playground-switch"
      size={args.size}
      variant={args.variant}
      disabled={args.disabled}
    />
    <Label htmlFor="playground-switch">
      Switch ({args.size}, {args.variant})
    </Label>
  </div>
);

Playground.args = {
  size: "default",
  variant: "default",
  disabled: false,
};

// Advanced Examples
export const AdvancedControlledSwitches = {
  render: () => {
    const [settings, setSettings] = React.useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      twoFactor: false,
      analytics: false,
      marketing: true,
    });
    const [switchHistory, setSwitchHistory] = React.useState<
      Array<{
        setting: string;
        value: boolean;
        timestamp: string;
      }>
    >([]);
    const [pendingChanges, setPendingChanges] = React.useState<Set<string>>(
      new Set()
    );

    const handleSwitchChange = (
      setting: keyof typeof settings,
      checked: boolean
    ) => {
      // Add to pending changes temporarily
      setPendingChanges((prev) => new Set(prev).add(setting));

      // Simulate async operation
      setTimeout(
        () => {
          setSettings((prev) => ({ ...prev, [setting]: checked }));
          setSwitchHistory((prev) =>
            [
              ...prev,
              {
                setting: setting.charAt(0).toUpperCase() + setting.slice(1),
                value: checked,
                timestamp: new Date().toLocaleTimeString(),
              },
            ].slice(-15)
          ); // Keep last 15 changes
          setPendingChanges((prev) => {
            const next = new Set(prev);
            next.delete(setting);
            return next;
          });
        },
        Math.random() * 1000 + 500
      ); // Random delay 500-1500ms
    };

    const resetAllSettings = () => {
      const defaultSettings = {
        notifications: true,
        darkMode: false,
        autoSave: true,
        twoFactor: false,
        analytics: false,
        marketing: true,
      };
      setSettings(defaultSettings);
      setSwitchHistory([]);
      setPendingChanges(new Set());
    };

    const toggleAll = (enable: boolean) => {
      Object.keys(settings).forEach((key) => {
        handleSwitchChange(key as keyof typeof settings, enable);
      });
    };

    const settingsConfig = [
      {
        key: "notifications" as const,
        label: "Push Notifications",
        description: "Receive notifications about important updates",
        icon: <Bell className="h-4 w-4" />,
        variant: "default" as const,
        critical: false,
      },
      {
        key: "darkMode" as const,
        label: "Dark Mode",
        description: "Use dark theme across the application",
        icon: <Moon className="h-4 w-4" />,
        variant: "secondary" as const,
        critical: false,
      },
      {
        key: "autoSave" as const,
        label: "Auto Save",
        description: "Automatically save your work every 30 seconds",
        icon: <Save className="h-4 w-4" />,
        variant: "success" as const,
        critical: true,
      },
      {
        key: "twoFactor" as const,
        label: "Two-Factor Authentication",
        description: "Add an extra layer of security to your account",
        icon: <Lock className="h-4 w-4" />,
        variant: "warning" as const,
        critical: true,
      },
      {
        key: "analytics" as const,
        label: "Usage Analytics",
        description: "Help us improve by sharing anonymous usage data",
        icon: <BarChart3 className="h-4 w-4" />,
        variant: "outline" as const,
        critical: false,
      },
      {
        key: "marketing" as const,
        label: "Marketing Emails",
        description: "Receive product updates and promotional content",
        icon: <Mail className="h-4 w-4" />,
        variant: "destructive" as const,
        critical: false,
      },
    ];

    return (
      <div className="max-w-4xl space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced Settings Dashboard
          </h3>

          <div className="flex flex-wrap gap-2 mb-6 p-4 bg-muted rounded-lg">
            <Button onClick={() => toggleAll(true)} size="sm">
              Enable All
            </Button>
            <Button
              onClick={() => toggleAll(false)}
              variant="destructive"
              size="sm"
            >
              Disable All
            </Button>
            <Button onClick={resetAllSettings} variant="outline" size="sm">
              Reset to Defaults
            </Button>

            <div className="ml-auto flex items-center gap-2 text-sm">
              <span>Pending changes:</span>
              <span className="font-medium">{pendingChanges.size}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {settingsConfig.map((config) => (
            <div key={config.key} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="text-muted-foreground">{config.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Label htmlFor={config.key} className="font-medium">
                        {config.label}
                      </Label>
                      {config.critical && (
                        <span className="px-1.5 py-0.5 bg-orange-100 text-orange-700 text-xs rounded-full">
                          Critical
                        </span>
                      )}
                      {pendingChanges.has(config.key) && (
                        <div className="w-3 h-3 border border-primary border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {config.description}
                    </p>
                  </div>
                </div>

                <Switch
                  id={config.key}
                  checked={settings[config.key]}
                  onCheckedChange={(checked) =>
                    handleSwitchChange(config.key, checked)
                  }
                  variant={config.variant}
                  disabled={pendingChanges.has(config.key)}
                />
              </div>

              <div className="text-xs text-muted-foreground">
                Status:{" "}
                {settings[config.key] ? (
                  <span className="text-green-600 font-medium">Enabled</span>
                ) : (
                  <span className="text-gray-500 font-medium">Disabled</span>
                )}
                {pendingChanges.has(config.key) && (
                  <span className="text-blue-600 ml-2">• Updating...</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Settings Summary */}
          <div>
            <h4 className="font-medium mb-3">Settings Summary</h4>
            <div className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Total Settings:</span>
                <span className="font-medium">{settingsConfig.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Enabled:</span>
                <span className="font-medium text-green-600">
                  {Object.values(settings).filter(Boolean).length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Disabled:</span>
                <span className="font-medium text-gray-500">
                  {Object.values(settings).filter((v) => !v).length}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Critical Enabled:</span>
                <span className="font-medium text-orange-600">
                  {
                    settingsConfig.filter((c) => c.critical && settings[c.key])
                      .length
                  }
                  /{settingsConfig.filter((c) => c.critical).length}
                </span>
              </div>
            </div>
          </div>

          {/* Change History */}
          <div>
            <h4 className="font-medium mb-3">
              Recent Changes ({switchHistory.length}/15)
            </h4>
            <div className="border rounded-lg p-4 max-h-64 overflow-y-auto">
              {switchHistory.length === 0 ? (
                <div className="text-center text-sm text-muted-foreground py-8">
                  No changes yet
                </div>
              ) : (
                <div className="space-y-2">
                  {switchHistory
                    .slice()
                    .reverse()
                    .map((change, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between text-sm p-2 bg-muted/50 rounded"
                      >
                        <div>
                          <span className="font-medium">{change.setting}</span>
                          <span
                            className={`ml-2 ${change.value ? "text-green-600" : "text-gray-500"}`}
                          >
                            {change.value ? "Enabled" : "Disabled"}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {change.timestamp}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>Controlled state:</strong> All switches use controlled
              state with React
            </li>
            <li>
              • <strong>Async operations:</strong> Simulated network delays when
              toggling
            </li>
            <li>
              • <strong>Loading states:</strong> Visual feedback during state
              changes
            </li>
            <li>
              • <strong>Bulk operations:</strong> Enable/disable all
              functionality
            </li>
            <li>
              • <strong>Change history:</strong> Track and display recent
              setting changes
            </li>
            <li>
              • <strong>Variant styling:</strong> Different visual styles for
              different setting types
            </li>
            <li>
              • <strong>Critical indicators:</strong> Special marking for
              important settings
            </li>
          </ul>
        </div>
      </div>
    );
  },
};

export const FormIntegrationWithValidation = {
  render: () => {
    const [formData, setFormData] = React.useState({
      termsAccepted: false,
      privacyAccepted: false,
      marketingOptIn: false,
      newsletterOptIn: true,
      smsNotifications: false,
      emailNotifications: true,
      betaFeatures: false,
      dataSharing: false,
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [touchedFields, setTouchedFields] = React.useState<Set<string>>(
      new Set()
    );

    const handleSwitchChange = (
      field: keyof typeof formData,
      checked: boolean
    ) => {
      setFormData((prev) => ({ ...prev, [field]: checked }));
      setTouchedFields((prev) => new Set(prev).add(field));

      // Clear error when user interacts
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.termsAccepted) {
        newErrors.termsAccepted =
          "You must accept the Terms of Service to continue";
      }
      if (!formData.privacyAccepted) {
        newErrors.privacyAccepted =
          "You must accept the Privacy Policy to continue";
      }
      if (formData.smsNotifications && !formData.emailNotifications) {
        newErrors.emailNotifications =
          "Email notifications are required when SMS notifications are enabled";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Mark all fields as touched for validation display
      const allFields = Object.keys(formData) as (keyof typeof formData)[];
      setTouchedFields(new Set(allFields));

      const isValid = validateForm();
      if (isValid) {
        setIsSubmitted(true);
      }
    };

    const resetForm = () => {
      setFormData({
        termsAccepted: false,
        privacyAccepted: false,
        marketingOptIn: false,
        newsletterOptIn: true,
        smsNotifications: false,
        emailNotifications: true,
        betaFeatures: false,
        dataSharing: false,
      });
      setErrors({});
      setTouchedFields(new Set());
      setIsSubmitted(false);
    };

    if (isSubmitted) {
      return (
        <div className="max-w-2xl p-6 border border-green-200 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">
            Account Created Successfully!
          </h3>
          <div className="space-y-2 text-sm text-green-700">
            <h4 className="font-medium">Your preferences:</h4>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, " $1").toLowerCase()}:
                  </span>
                  <span
                    className={
                      value ? "text-green-600 font-medium" : "text-gray-500"
                    }
                  >
                    {value ? "Yes" : "No"}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <Button onClick={resetForm} className="mt-4" variant="default">
            Create Another Account
          </Button>
        </div>
      );
    }

    const formSections = [
      {
        title: "Required Agreements",
        description: "These agreements are required to create your account",
        fields: [
          {
            key: "termsAccepted" as const,
            label: "Accept Terms of Service",
            description: "I agree to the Terms of Service and User Agreement",
            required: true,
            variant: "default" as const,
          },
          {
            key: "privacyAccepted" as const,
            label: "Accept Privacy Policy",
            description:
              "I acknowledge that I have read and understand the Privacy Policy",
            required: true,
            variant: "default" as const,
          },
        ],
      },
      {
        title: "Communication Preferences",
        description: "Choose how you want to receive updates and notifications",
        fields: [
          {
            key: "emailNotifications" as const,
            label: "Email Notifications",
            description: "Receive important account updates via email",
            required: false,
            variant: "success" as const,
          },
          {
            key: "smsNotifications" as const,
            label: "SMS Notifications",
            description: "Receive urgent notifications via text message",
            required: false,
            variant: "warning" as const,
          },
          {
            key: "newsletterOptIn" as const,
            label: "Newsletter Subscription",
            description: "Get our weekly newsletter with tips and updates",
            required: false,
            variant: "secondary" as const,
          },
        ],
      },
      {
        title: "Optional Features",
        description: "Additional features you can enable for your account",
        fields: [
          {
            key: "marketingOptIn" as const,
            label: "Marketing Communications",
            description: "Receive promotional offers and product announcements",
            required: false,
            variant: "outline" as const,
          },
          {
            key: "betaFeatures" as const,
            label: "Beta Features Access",
            description: "Get early access to new features and improvements",
            required: false,
            variant: "secondary" as const,
          },
          {
            key: "dataSharing" as const,
            label: "Anonymous Usage Analytics",
            description:
              "Help us improve by sharing anonymous usage statistics",
            required: false,
            variant: "outline" as const,
          },
        ],
      },
    ];

    return (
      <div className="max-w-2xl space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Account Setup - Privacy & Preferences
          </h3>
          <p className="text-sm text-muted-foreground">
            Configure your account settings and communication preferences
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {formSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <div>
                <h4 className="font-medium mb-1">{section.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </div>

              <div className="space-y-4 pl-4 border-l-2 border-muted">
                {section.fields.map((field) => (
                  <div key={field.key} className="space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={field.key} className="font-medium">
                            {field.label}
                          </Label>
                          {field.required && (
                            <span className="text-destructive text-sm">*</span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {field.description}
                        </p>
                        {errors[field.key] && touchedFields.has(field.key) && (
                          <p className="text-sm text-destructive mt-1">
                            {errors[field.key]}
                          </p>
                        )}
                      </div>

                      <Switch
                        id={field.key}
                        checked={formData[field.key]}
                        onCheckedChange={(checked) =>
                          handleSwitchChange(field.key, checked)
                        }
                        variant={field.variant}
                        className={
                          errors[field.key] && touchedFields.has(field.key)
                            ? "ring-2 ring-destructive/20"
                            : ""
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Summary</h4>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Required items completed:</span>
                <span className="font-medium">
                  {
                    formSections[0].fields.filter(
                      (field) => formData[field.key]
                    ).length
                  }
                  /{formSections[0].fields.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Communication preferences set:</span>
                <span className="font-medium">
                  {
                    formSections[1].fields.filter(
                      (field) => formData[field.key]
                    ).length
                  }
                  /{formSections[1].fields.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Optional features enabled:</span>
                <span className="font-medium">
                  {
                    formSections[2].fields.filter(
                      (field) => formData[field.key]
                    ).length
                  }
                  /{formSections[2].fields.length}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <Button type="submit" className="flex-1">
              Create Account
            </Button>
            <Button type="button" onClick={resetForm} variant="outline">
              Reset Form
            </Button>
          </div>
        </form>
      </div>
    );
  },
};
