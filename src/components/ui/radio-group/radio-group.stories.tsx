import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '../label/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default {
  title: "UI/RadioGroup",
  component: RadioGroup,
  docs: {
    description: {
      component:
        "A radio group component that allows users to select a single option from a list of choices. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
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
