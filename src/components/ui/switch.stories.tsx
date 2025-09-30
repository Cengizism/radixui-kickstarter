import React, { useState } from 'react';
import { Label } from './label';
import { Switch, SwitchRoot, SwitchThumb } from './switch';

export default {
  title: "UI/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
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
    },
    disabled: {
      control: "boolean",
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

// Size variations
export const SizeVariations = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Switch id="sm-switch" size="sm" />
      <Label htmlFor="sm-switch">Small</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="default-size-switch" size="default" />
      <Label htmlFor="default-size-switch">Default</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="lg-switch" size="lg" />
      <Label htmlFor="lg-switch">Large</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch id="xl-switch" size="xl" />
      <Label htmlFor="xl-switch">Extra Large</Label>
    </div>
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

      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Save Preferences
      </button>
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

// Custom styled switches
export const CustomStyles = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <Switch
        id="custom-1"
        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-purple-600"
        defaultChecked
      />
      <Label htmlFor="custom-1">Gradient Switch</Label>
    </div>

    <div className="flex items-center space-x-2">
      <Switch
        id="custom-2"
        className="data-[state=checked]:bg-pink-500 data-[state=unchecked]:bg-gray-200"
        size="lg"
      />
      <Label htmlFor="custom-2">Pink Theme</Label>
    </div>

    <div className="flex items-center space-x-2">
      <SwitchRoot
        id="custom-components"
        className="data-[state=checked]:bg-emerald-500 data-[state=unchecked]:bg-slate-300"
        size="xl"
      >
        <SwitchThumb className="bg-white shadow-lg" size="xl" />
      </SwitchRoot>
      <Label htmlFor="custom-components">Custom Components</Label>
    </div>
  </div>
);

// Switch with icons
export const WithIcons = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm">🌙</span>
        <Switch id="dark-mode-icon" />
        <span className="text-sm">☀️</span>
      </div>
      <Label htmlFor="dark-mode-icon">Dark Mode</Label>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm">🔇</span>
        <Switch id="sound-icon" defaultChecked />
        <span className="text-sm">🔊</span>
      </div>
      <Label htmlFor="sound-icon">Sound</Label>
    </div>

    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm">📱</span>
        <Switch id="mobile-icon" />
        <span className="text-sm">💻</span>
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
