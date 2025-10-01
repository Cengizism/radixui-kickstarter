import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '../label/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type Story = {
  render: () => JSX.Element;
};

export default {
  title: "UI/RadioGroup",
  component: RadioGroup,
  docs: {
    description: {
      component:
        "A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time. Built with Radix UI primitives for keyboard navigation and screen reader accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    defaultValue: {
      control: "text",
      description:
        "The value of the radio item that should be checked when initially rendered. Use when you do not need to control the state of the radio items.",
      table: {
        category: "Root",
      },
    },
    value: {
      control: "text",
      description:
        "The controlled value of the radio item to check. Should be used in conjunction with onValueChange.",
      table: {
        category: "Root",
      },
    },
    onValueChange: {
      control: false,
      description: "Event handler called when the value changes.",
      table: {
        category: "Root",
        type: { summary: "(value: string) => void" },
      },
    },
    name: {
      control: "text",
      description:
        "The name of the group. Submitted with its owning form as part of a name/value pair.",
      table: {
        category: "Root",
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with radio items.",
      table: {
        category: "Root",
      },
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must check a radio item before the owning form can be submitted.",
      table: {
        category: "Root",
      },
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description:
        "The orientation of the component, which determines how focus moves: horizontal for left/right arrows, vertical for up/down arrows.",
      table: {
        category: "Root",
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the radio group. If omitted, assumes LTR (left-to-right) reading mode.",
      table: {
        category: "Root",
      },
    },
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop from last item to first, and vice versa.",
      table: {
        category: "Root",
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Root",
      },
    },

    // Item Props
    itemValue: {
      control: "text",
      description: "The value given as data when submitted with a name.",
      table: {
        category: "Item",
      },
    },
    itemDisabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the radio item.",
      table: {
        category: "Item",
      },
    },
    itemRequired: {
      control: "boolean",
      description:
        "When true, indicates that the user must check the radio item before the owning form can be submitted.",
      table: {
        category: "Item",
      },
    },
    itemAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the item.",
      table: {
        category: "Item",
      },
    },

    // Indicator Props
    indicatorAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the indicator.",
      table: {
        category: "Indicator",
      },
    },
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        category: "Indicator",
      },
    },

    // Custom Style Props
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description:
        "Controls the size of the radio items for different visual hierarchy needs.",
      table: {
        category: "Styling",
      },
    },
    variant: {
      control: "select",
      options: ["default", "outline", "ghost"],
      description: "Controls the visual style variant of the radio items.",
      table: {
        category: "Styling",
      },
    },
    indicator: {
      control: "select",
      options: ["circle", "dot", "filled"],
      description: "Controls the style of the selection indicator.",
      table: {
        category: "Styling",
      },
    },
  },
};

// Default radio group
export const Default = () => (
  <RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-three" id="option-three" />
      <Label htmlFor="option-three">Option Three</Label>
    </div>
  </RadioGroup>
);

// Size variations
export const SizeVariations = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-medium mb-3">Small</h4>
      <RadioGroup defaultValue="sm-one" size="sm">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sm-one" id="sm-one" size="sm" />
          <Label htmlFor="sm-one" className="text-sm">
            Small Option 1
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="sm-two" id="sm-two" size="sm" />
          <Label htmlFor="sm-two" className="text-sm">
            Small Option 2
          </Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Default</h4>
      <RadioGroup defaultValue="default-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default-one" id="default-one" />
          <Label htmlFor="default-one">Default Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default-two" id="default-two" />
          <Label htmlFor="default-two">Default Option 2</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Large</h4>
      <RadioGroup defaultValue="lg-one" size="lg">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lg-one" id="lg-one" size="lg" />
          <Label htmlFor="lg-one">Large Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="lg-two" id="lg-two" size="lg" />
          <Label htmlFor="lg-two">Large Option 2</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Extra Large</h4>
      <RadioGroup defaultValue="xl-one">
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="xl-one" id="xl-one" size="xl" />
          <Label htmlFor="xl-one" className="text-lg">
            Extra Large Option 1
          </Label>
        </div>
        <div className="flex items-center space-x-3">
          <RadioGroupItem value="xl-two" id="xl-two" size="xl" />
          <Label htmlFor="xl-two" className="text-lg">
            Extra Large Option 2
          </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

// Orientation variations
export const OrientationVariations = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-medium mb-3">Vertical (Default)</h4>
      <RadioGroup defaultValue="vertical-one" orientation="vertical">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vertical-one" id="vertical-one" />
          <Label htmlFor="vertical-one">Vertical Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vertical-two" id="vertical-two" />
          <Label htmlFor="vertical-two">Vertical Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="vertical-three" id="vertical-three" />
          <Label htmlFor="vertical-three">Vertical Option 3</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Horizontal</h4>
      <RadioGroup defaultValue="horizontal-one" orientation="horizontal">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="horizontal-one" id="horizontal-one" />
          <Label htmlFor="horizontal-one">Option 1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="horizontal-two" id="horizontal-two" />
          <Label htmlFor="horizontal-two">Option 2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="horizontal-three" id="horizontal-three" />
          <Label htmlFor="horizontal-three">Option 3</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

// Variant styles
export const VariantStyles = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-medium mb-3">Default Variant</h4>
      <RadioGroup defaultValue="default-variant-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="default-variant-one"
            id="default-variant-one"
            variant="default"
          />
          <Label htmlFor="default-variant-one">Default style</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="default-variant-two"
            id="default-variant-two"
            variant="default"
          />
          <Label htmlFor="default-variant-two">Another option</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Outline Variant</h4>
      <RadioGroup defaultValue="outline-variant-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="outline-variant-one"
            id="outline-variant-one"
            variant="outline"
          />
          <Label htmlFor="outline-variant-one">Outline style</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="outline-variant-two"
            id="outline-variant-two"
            variant="outline"
          />
          <Label htmlFor="outline-variant-two">Another option</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Ghost Variant</h4>
      <RadioGroup defaultValue="ghost-variant-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="ghost-variant-one"
            id="ghost-variant-one"
            variant="ghost"
          />
          <Label htmlFor="ghost-variant-one">Ghost style</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="ghost-variant-two"
            id="ghost-variant-two"
            variant="ghost"
          />
          <Label htmlFor="ghost-variant-two">Another option</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

// Indicator styles
export const IndicatorStyles = () => (
  <div className="space-y-6">
    <div>
      <h4 className="font-medium mb-3">Circle Indicator</h4>
      <RadioGroup defaultValue="circle-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="circle-one"
            id="circle-one"
            indicator="circle"
          />
          <Label htmlFor="circle-one">Circle indicator</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="circle-two"
            id="circle-two"
            indicator="circle"
          />
          <Label htmlFor="circle-two">Another option</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Dot Indicator</h4>
      <RadioGroup defaultValue="dot-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dot-one" id="dot-one" indicator="dot" />
          <Label htmlFor="dot-one">Dot indicator</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dot-two" id="dot-two" indicator="dot" />
          <Label htmlFor="dot-two">Another option</Label>
        </div>
      </RadioGroup>
    </div>

    <div>
      <h4 className="font-medium mb-3">Filled Indicator</h4>
      <RadioGroup defaultValue="filled-one">
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="filled-one"
            id="filled-one"
            indicator="filled"
          />
          <Label htmlFor="filled-one">Filled indicator</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="filled-two"
            id="filled-two"
            indicator="filled"
          />
          <Label htmlFor="filled-two">Another option</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

// Disabled states
export const DisabledStates = () => (
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-3">Mixed States</h4>
      <RadioGroup defaultValue="enabled-option">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enabled-option" id="enabled-option" />
          <Label htmlFor="enabled-option">Enabled and selected</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="enabled-unselected" id="enabled-unselected" />
          <Label htmlFor="enabled-unselected">Enabled but unselected</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="disabled-unselected"
            id="disabled-unselected"
            disabled
          />
          <Label
            htmlFor="disabled-unselected"
            className="text-muted-foreground"
          >
            Disabled and unselected
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="disabled-selected"
            id="disabled-selected"
            disabled
          />
          <Label htmlFor="disabled-selected" className="text-muted-foreground">
            Disabled (would be selected)
          </Label>
        </div>
      </RadioGroup>
    </div>
  </div>
);

// Controlled radio group
export const ControlledRadioGroup = () => {
  const [theme, setTheme] = useState("light");
  const [notification, setNotification] = useState("email");

  return (
    <div className="space-y-6 max-w-md">
      <div>
        <h4 className="font-medium mb-3">Theme Preference</h4>
        <RadioGroup value={theme} onValueChange={setTheme}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="theme-light" />
            <Label htmlFor="theme-light">Light Theme</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="theme-dark" />
            <Label htmlFor="theme-dark">Dark Theme</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="theme-system" />
            <Label htmlFor="theme-system">System Default</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-muted-foreground mt-2">
          Selected: <strong>{theme}</strong>
        </p>
      </div>

      <div>
        <h4 className="font-medium mb-3">Notification Method</h4>
        <RadioGroup value={notification} onValueChange={setNotification}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="notify-email" />
            <Label htmlFor="notify-email">Email notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sms" id="notify-sms" />
            <Label htmlFor="notify-sms">SMS notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="push" id="notify-push" />
            <Label htmlFor="notify-push">Push notifications</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="none" id="notify-none" />
            <Label htmlFor="notify-none">No notifications</Label>
          </div>
        </RadioGroup>
        <p className="text-sm text-muted-foreground mt-2">
          Selected: <strong>{notification}</strong>
        </p>
      </div>
    </div>
  );
};

// Form integration
export const FormIntegration = () => {
  const [formData, setFormData] = useState({
    plan: "basic",
    billing: "monthly",
    support: "community",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <h3 className="font-medium">Subscription Settings</h3>

      <div>
        <Label className="text-base font-medium mb-3 block">
          Choose your plan <span className="text-red-500">*</span>
        </Label>
        <RadioGroup
          value={formData.plan}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, plan: value }))
          }
          required
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="basic" id="plan-basic" />
            <Label htmlFor="plan-basic">Basic - Free</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pro" id="plan-pro" />
            <Label htmlFor="plan-pro">Pro - $9/month</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="enterprise" id="plan-enterprise" />
            <Label htmlFor="plan-enterprise">Enterprise - $29/month</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label className="text-base font-medium mb-3 block">
          Billing Cycle
        </Label>
        <RadioGroup
          value={formData.billing}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, billing: value }))
          }
          orientation="horizontal"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="billing-monthly" />
            <Label htmlFor="billing-monthly">Monthly</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yearly" id="billing-yearly" />
            <Label htmlFor="billing-yearly">Yearly (20% off)</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <Label className="text-base font-medium mb-3 block">
          Support Level
        </Label>
        <RadioGroup
          value={formData.support}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, support: value }))
          }
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="community" id="support-community" />
            <div>
              <Label htmlFor="support-community">Community Support</Label>
              <p className="text-sm text-muted-foreground">
                Access to community forums
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="support-email" />
            <div>
              <Label htmlFor="support-email">Email Support</Label>
              <p className="text-sm text-muted-foreground">
                Email support within 24 hours
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="priority" id="support-priority" />
            <div>
              <Label htmlFor="support-priority">Priority Support</Label>
              <p className="text-sm text-muted-foreground">
                Phone and email support within 4 hours
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <Button type="submit" className="w-full">
        Save Settings
      </Button>
    </form>
  );
};

// Card-based layout
export const CardBasedLayout = () => (
  <div className="max-w-lg">
    <h4 className="font-medium mb-4">Choose a payment method</h4>
    <RadioGroup defaultValue="credit-card" className="space-y-3">
      <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent/50 transition-colors">
        <RadioGroupItem
          value="credit-card"
          id="payment-card"
          className="mt-0.5"
        />
        <div className="flex-1">
          <Label htmlFor="payment-card" className="text-base font-medium">
            Credit Card
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Pay with Visa, Mastercard, or American Express
          </p>
          <div className="flex space-x-2 mt-2">
            <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">
              VISA
            </div>
            <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">
              MC
            </div>
            <div className="w-8 h-5 bg-blue-800 rounded text-white text-xs flex items-center justify-center">
              AMEX
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent/50 transition-colors">
        <RadioGroupItem value="paypal" id="payment-paypal" className="mt-0.5" />
        <div className="flex-1">
          <Label htmlFor="payment-paypal" className="text-base font-medium">
            PayPal
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Pay securely with your PayPal account
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent/50 transition-colors">
        <RadioGroupItem
          value="apple-pay"
          id="payment-apple"
          className="mt-0.5"
        />
        <div className="flex-1">
          <Label htmlFor="payment-apple" className="text-base font-medium">
            Apple Pay
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Pay with Touch ID or Face ID
          </p>
        </div>
      </div>

      <div className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-accent/50 transition-colors opacity-60">
        <RadioGroupItem
          value="bank-transfer"
          id="payment-bank"
          className="mt-0.5"
          disabled
        />
        <div className="flex-1">
          <Label htmlFor="payment-bank" className="text-base font-medium">
            Bank Transfer
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Direct bank transfer (Coming Soon)
          </p>
        </div>
      </div>
    </RadioGroup>
  </div>
);

// Different use cases
export const UseCases = () => (
  <div className="space-y-8 max-w-lg">
    {/* Survey question */}
    <div>
      <h4 className="font-medium mb-3">Survey Question</h4>
      <p className="text-sm text-muted-foreground mb-4">
        How would you rate our customer service?
      </p>
      <RadioGroup defaultValue="good" orientation="horizontal">
        <div className="flex flex-col items-center space-y-1">
          <RadioGroupItem value="excellent" id="rating-excellent" />
          <Label htmlFor="rating-excellent" className="text-sm">
            Excellent
          </Label>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <RadioGroupItem value="good" id="rating-good" />
          <Label htmlFor="rating-good" className="text-sm">
            Good
          </Label>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <RadioGroupItem value="average" id="rating-average" />
          <Label htmlFor="rating-average" className="text-sm">
            Average
          </Label>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <RadioGroupItem value="poor" id="rating-poor" />
          <Label htmlFor="rating-poor" className="text-sm">
            Poor
          </Label>
        </div>
      </RadioGroup>
    </div>

    {/* Settings preference */}
    <div>
      <h4 className="font-medium mb-3">Privacy Settings</h4>
      <RadioGroup defaultValue="friends">
        <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="public" id="privacy-public" />
            <Label htmlFor="privacy-public">Public</Label>
          </div>
          <span className="text-sm text-muted-foreground">
            Everyone can see
          </span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="friends" id="privacy-friends" />
            <Label htmlFor="privacy-friends">Friends Only</Label>
          </div>
          <span className="text-sm text-muted-foreground">Friends can see</span>
        </div>
        <div className="flex items-center justify-between p-2 rounded-md hover:bg-accent/50">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="privacy-private" />
            <Label htmlFor="privacy-private">Private</Label>
          </div>
          <span className="text-sm text-muted-foreground">
            Only you can see
          </span>
        </div>
      </RadioGroup>
    </div>

    {/* Product options */}
    <div>
      <h4 className="font-medium mb-3">Product Configuration</h4>
      <RadioGroup defaultValue="standard">
        <div className="border rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <RadioGroupItem value="basic" id="config-basic" className="mt-1" />
            <div className="flex-1">
              <Label htmlFor="config-basic" className="font-medium">
                Basic Package
              </Label>
              <p className="text-sm text-muted-foreground">
                Essential features only
              </p>
              <p className="text-sm font-medium text-green-600 mt-1">Free</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-3 border-primary">
          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="standard"
              id="config-standard"
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="config-standard" className="font-medium">
                Standard Package
              </Label>
              <p className="text-sm text-muted-foreground">
                Most popular choice
              </p>
              <p className="text-sm font-medium text-primary mt-1">$19/month</p>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-block px-2 py-1 bg-primary text-primary-foreground text-xs rounded">
              Most Popular
            </span>
          </div>
        </div>
        <div className="border rounded-lg p-3">
          <div className="flex items-start space-x-2">
            <RadioGroupItem
              value="premium"
              id="config-premium"
              className="mt-1"
            />
            <div className="flex-1">
              <Label htmlFor="config-premium" className="font-medium">
                Premium Package
              </Label>
              <p className="text-sm text-muted-foreground">
                All features included
              </p>
              <p className="text-sm font-medium text-purple-600 mt-1">
                $49/month
              </p>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  </div>
);

// Interactive playground
export const Playground = (args: {
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "default" | "lg";
}) => (
  <RadioGroup
    defaultValue="playground-one"
    orientation={args.orientation}
    size={args.size}
  >
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value="playground-one"
        id="playground-one"
        size={args.size === "sm" ? "sm" : args.size === "lg" ? "lg" : "default"}
      />
      <Label htmlFor="playground-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value="playground-two"
        id="playground-two"
        size={args.size === "sm" ? "sm" : args.size === "lg" ? "lg" : "default"}
      />
      <Label htmlFor="playground-two">Option Two</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem
        value="playground-three"
        id="playground-three"
        size={args.size === "sm" ? "sm" : args.size === "lg" ? "lg" : "default"}
      />
      <Label htmlFor="playground-three">Option Three</Label>
    </div>
  </RadioGroup>
);

Playground.args = {
  orientation: "vertical",
  size: "default",
};

// Advanced Examples
export const AdvancedControlledState: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("option-1");
    const [history, setHistory] = React.useState<string[]>(["option-1"]);

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      setHistory((prev) => [...prev, newValue]);
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Controlled Radio Group with History
          </h3>
          <RadioGroup value={value} onValueChange={handleValueChange}>
            {["option-1", "option-2", "option-3", "option-4"].map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="capitalize">
                  {option.replace("-", " ")}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="p-4 bg-muted rounded-lg">
          <h4 className="font-medium mb-2">Current Value: {value}</h4>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">
              Selection History ({history.length} changes):
            </p>
            <div className="flex flex-wrap gap-1">
              {history.map((item, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary/10 rounded text-xs"
                >
                  {index + 1}. {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const DynamicOptionsWithLooping: Story = {
  render: () => {
    const [options, setOptions] = React.useState(["apple", "banana", "cherry"]);
    const [selectedValue, setSelectedValue] = React.useState<string>("");
    const [isLoopEnabled, setIsLoopEnabled] = React.useState(true);

    const addOption = () => {
      const fruits = ["date", "elderberry", "fig", "grape", "honeydew"];
      const availableFruits = fruits.filter(
        (fruit) => !options.includes(fruit)
      );
      if (availableFruits.length > 0) {
        const newFruit =
          availableFruits[Math.floor(Math.random() * availableFruits.length)];
        setOptions((prev) => [...prev, newFruit]);
      }
    };

    const removeOption = (optionToRemove: string) => {
      setOptions((prev) => prev.filter((option) => option !== optionToRemove));
      if (selectedValue === optionToRemove) {
        setSelectedValue("");
      }
    };

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            Dynamic Options with Keyboard Navigation
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="loop-toggle"
              checked={isLoopEnabled}
              onChange={(e) => setIsLoopEnabled(e.target.checked)}
              className="rounded"
            />
            <Label htmlFor="loop-toggle" className="text-sm">
              Enable Loop Navigation
            </Label>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={addOption}
            className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm hover:bg-primary/90"
            disabled={options.length >= 8}
          >
            Add Option
          </button>
        </div>

        <RadioGroup
          value={selectedValue}
          onValueChange={setSelectedValue}
          loop={isLoopEnabled}
          className="focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2 rounded-lg p-2"
        >
          {options.map((option, index) => (
            <div
              key={option}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="capitalize">
                  {option} (#{index + 1})
                </Label>
              </div>
              {options.length > 1 && (
                <button
                  onClick={() => removeOption(option)}
                  className="opacity-0 group-hover:opacity-100 px-2 py-1 text-destructive hover:bg-destructive/10 rounded text-sm transition-opacity"
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </RadioGroup>

        <div className="text-sm text-muted-foreground">
          <p>
            <strong>Keyboard Navigation:</strong> Use ↑↓ arrow keys to navigate
            between options
          </p>
          <p>
            <strong>Loop Mode:</strong>{" "}
            {isLoopEnabled
              ? "Navigation wraps around from last to first option"
              : "Navigation stops at first/last option"}
          </p>
          <p>
            <strong>Selected:</strong> {selectedValue || "None"}
          </p>
        </div>
      </div>
    );
  },
};

export const ComplexFormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      deliveryMethod: "",
      paymentMethod: "",
      notificationPrefs: "",
      priority: "standard",
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (!formData.deliveryMethod) {
        newErrors.deliveryMethod = "Please select a delivery method";
      }
      if (!formData.paymentMethod) {
        newErrors.paymentMethod = "Please select a payment method";
      }
      if (!formData.notificationPrefs) {
        newErrors.notificationPrefs = "Please select notification preferences";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const isValid = validateForm();

      if (isValid) {
        setIsSubmitted(true);
        // Form data would be submitted to backend here
      }
    };

    const updateFormData = (field: string) => (value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error when user makes selection
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

    if (isSubmitted) {
      return (
        <div className="p-6 border border-green-200 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Order Submitted Successfully!
          </h3>
          <div className="text-sm text-green-700 space-y-1">
            <p>
              <strong>Delivery:</strong> {formData.deliveryMethod}
            </p>
            <p>
              <strong>Payment:</strong> {formData.paymentMethod}
            </p>
            <p>
              <strong>Notifications:</strong> {formData.notificationPrefs}
            </p>
            <p>
              <strong>Priority:</strong> {formData.priority}
            </p>
          </div>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-3 px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
          >
            Reset Form
          </button>
        </div>
      );
    }

    return (
      <form onSubmit={handleSubmit} className="space-y-8">
        <h3 className="text-lg font-semibold">Complex Order Form</h3>

        {/* Delivery Method - Required */}
        <div className={`space-y-3 ${errors.deliveryMethod ? "pb-2" : ""}`}>
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">Delivery Method *</Label>
            {errors.deliveryMethod && (
              <span className="text-sm text-destructive">
                {errors.deliveryMethod}
              </span>
            )}
          </div>

          <RadioGroup
            value={formData.deliveryMethod}
            onValueChange={updateFormData("deliveryMethod")}
            className={
              errors.deliveryMethod
                ? "ring-2 ring-destructive/20 rounded-lg p-2"
                : ""
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  value: "standard",
                  label: "Standard Delivery",
                  desc: "5-7 business days",
                  price: "Free",
                },
                {
                  value: "express",
                  label: "Express Delivery",
                  desc: "2-3 business days",
                  price: "$9.99",
                },
                {
                  value: "overnight",
                  label: "Overnight Delivery",
                  desc: "Next business day",
                  price: "$24.99",
                },
                {
                  value: "pickup",
                  label: "Store Pickup",
                  desc: "Ready in 2 hours",
                  price: "Free",
                },
              ].map((option) => (
                <div
                  key={option.value}
                  className="border rounded-lg p-3 hover:border-primary/50"
                >
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem
                      value={option.value}
                      id={`delivery-${option.value}`}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <Label
                        htmlFor={`delivery-${option.value}`}
                        className="font-medium"
                      >
                        {option.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {option.desc}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {option.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Payment Method - Required */}
        <div className={`space-y-3 ${errors.paymentMethod ? "pb-2" : ""}`}>
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">Payment Method *</Label>
            {errors.paymentMethod && (
              <span className="text-sm text-destructive">
                {errors.paymentMethod}
              </span>
            )}
          </div>

          <RadioGroup
            value={formData.paymentMethod}
            onValueChange={updateFormData("paymentMethod")}
            orientation="horizontal"
            className={`flex flex-wrap gap-4 ${errors.paymentMethod ? "ring-2 ring-destructive/20 rounded-lg p-2" : ""}`}
          >
            {[
              { value: "card", label: "💳 Credit Card" },
              { value: "paypal", label: "🅿️ PayPal" },
              { value: "apple-pay", label: "🍎 Apple Pay" },
              { value: "google-pay", label: "🔍 Google Pay" },
            ].map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 border rounded-lg px-3 py-2 hover:border-primary/50"
              >
                <RadioGroupItem
                  value={option.value}
                  id={`payment-${option.value}`}
                />
                <Label
                  htmlFor={`payment-${option.value}`}
                  className="cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Notification Preferences - Required */}
        <div className={`space-y-3 ${errors.notificationPrefs ? "pb-2" : ""}`}>
          <div className="flex items-center justify-between">
            <Label className="text-base font-medium">
              Notification Preferences *
            </Label>
            {errors.notificationPrefs && (
              <span className="text-sm text-destructive">
                {errors.notificationPrefs}
              </span>
            )}
          </div>

          <RadioGroup
            value={formData.notificationPrefs}
            onValueChange={updateFormData("notificationPrefs")}
            className={
              errors.notificationPrefs
                ? "ring-2 ring-destructive/20 rounded-lg p-2"
                : ""
            }
          >
            {[
              {
                value: "email",
                label: "Email Only",
                desc: "Order updates via email",
              },
              {
                value: "sms",
                label: "SMS Only",
                desc: "Text message notifications",
              },
              {
                value: "both",
                label: "Email & SMS",
                desc: "Comprehensive notifications",
              },
              {
                value: "none",
                label: "No Notifications",
                desc: "Check order status manually",
              },
            ].map((option) => (
              <div
                key={option.value}
                className="flex items-center space-x-2 p-2 rounded hover:bg-accent/50"
              >
                <RadioGroupItem
                  value={option.value}
                  id={`notif-${option.value}`}
                />
                <div>
                  <Label
                    htmlFor={`notif-${option.value}`}
                    className="font-medium"
                  >
                    {option.label}
                  </Label>
                  <p className="text-sm text-muted-foreground">{option.desc}</p>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Priority Level - Optional with default */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Order Priority</Label>
          <RadioGroup
            value={formData.priority}
            onValueChange={updateFormData("priority")}
            orientation="horizontal"
            className="flex gap-6"
          >
            {[
              { value: "low", label: "Low", color: "text-blue-600" },
              { value: "standard", label: "Standard", color: "text-gray-600" },
              { value: "high", label: "High", color: "text-orange-600" },
              { value: "urgent", label: "Urgent", color: "text-red-600" },
            ].map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={`priority-${option.value}`}
                />
                <Label
                  htmlFor={`priority-${option.value}`}
                  className={`font-medium ${option.color}`}
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="flex gap-4 pt-4 border-t">
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 font-medium"
          >
            Submit Order
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData({
                deliveryMethod: "",
                paymentMethod: "",
                notificationPrefs: "",
                priority: "standard",
              });
              setErrors({});
            }}
            className="px-6 py-2 border border-input rounded hover:bg-accent font-medium"
          >
            Reset
          </button>
        </div>
      </form>
    );
  },
};
