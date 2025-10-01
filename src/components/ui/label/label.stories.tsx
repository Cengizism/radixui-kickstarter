import * as React from 'react';
import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '../checkbox/checkbox';
import { Input } from '../input/input';
import { Label } from '@/components/ui/label';

/**
 * ## API Reference
 *
 * ### Label.Root
 * Contains the content for the label.
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
 * | `htmlFor` | `string` | - | The id of the element the label is associated with. When provided, clicking the label will focus the associated control. |
 *
 * ### Styling Variants
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `variant` | `"default" \| "destructive" \| "muted" \| "accent"` | `"default"` | The visual style variant of the label. |
 * | `size` | `"sm" \| "default" \| "lg"` | `"default"` | The size variant affecting text size and spacing. |
 * | `weight` | `"normal" \| "medium" \| "semibold" \| "bold"` | `"medium"` | The font weight of the label text. |
 */

export default {
  title: "UI/Label",
  component: Label,
  docs: {
    description: {
      component:
        "Renders an accessible label associated with controls. Built with Radix UI primitives.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Root",
      },
    },
    htmlFor: {
      control: "text",
      description:
        "The id of the element the label is associated with. When provided, clicking the label will focus the associated control.",
      table: {
        type: { summary: "string" },
        category: "Root",
      },
    },
    variant: {
      control: "select",
      options: ["default", "destructive", "muted", "accent"],
      description: "The visual style variant of the label.",
      table: {
        type: { summary: '"default" | "destructive" | "muted" | "accent"' },
        defaultValue: { summary: '"default"' },
        category: "Styling",
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the label text.",
      table: {
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
        category: "Styling",
      },
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
      description: "The font weight of the label text.",
      table: {
        type: { summary: '"normal" | "medium" | "semibold" | "bold"' },
        defaultValue: { summary: '"medium"' },
        category: "Styling",
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the label.",
      table: {
        type: { summary: "string" },
        category: "HTML",
      },
    },
    onClick: {
      action: "onClick",
      description: "Event handler called when the label is clicked.",
      table: {
        type: { summary: "MouseEventHandler<HTMLLabelElement>" },
        category: "Events",
      },
    },
  },
};

// Basic label usage
export const Default = () => (
  <div className="max-w-md space-y-2">
    <Label htmlFor="firstName">First name</Label>
    <Input id="firstName" placeholder="Pedro Duarte" />
  </div>
);

// Different sizes
export const SizeVariants = () => (
  <div className="max-w-md space-y-6">
    <div className="space-y-2">
      <Label size="sm" htmlFor="small-input">
        Small Label
      </Label>
      <Input
        id="small-input"
        className="h-8 px-2 text-xs"
        placeholder="Small input"
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="default-input">Default Label</Label>
      <Input id="default-input" placeholder="Default input" />
    </div>

    <div className="space-y-2">
      <Label size="lg" htmlFor="large-input">
        Large Label
      </Label>
      <Input id="large-input" className="h-12 px-4" placeholder="Large input" />
    </div>
  </div>
);

// Font weight variants
export const WeightVariants = () => (
  <div className="max-w-md space-y-4">
    <div className="space-y-2">
      <Label weight="normal" htmlFor="normal-weight">
        Normal Weight
      </Label>
      <Input id="normal-weight" placeholder="With normal weight label" />
    </div>

    <div className="space-y-2">
      <Label weight="medium" htmlFor="medium-weight">
        Medium Weight (Default)
      </Label>
      <Input id="medium-weight" placeholder="With medium weight label" />
    </div>

    <div className="space-y-2">
      <Label weight="semibold" htmlFor="semibold-weight">
        Semibold Weight
      </Label>
      <Input id="semibold-weight" placeholder="With semibold weight label" />
    </div>

    <div className="space-y-2">
      <Label weight="bold" htmlFor="bold-weight">
        Bold Weight
      </Label>
      <Input id="bold-weight" placeholder="With bold weight label" />
    </div>
  </div>
);

// Color variants
export const ColorVariants = () => (
  <div className="max-w-md space-y-4">
    <div className="space-y-2">
      <Label variant="default" htmlFor="default-color">
        Default Color
      </Label>
      <Input id="default-color" placeholder="Default label color" />
    </div>

    <div className="space-y-2">
      <Label variant="destructive" htmlFor="error-input">
        Error State
      </Label>
      <Input
        id="error-input"
        className="border-destructive focus-visible:ring-destructive"
        placeholder="This field has an error"
      />
      <p className="text-sm text-destructive">This field is required.</p>
    </div>

    <div className="space-y-2">
      <Label variant="muted" htmlFor="optional-input">
        Optional Field
      </Label>
      <Input id="optional-input" placeholder="This field is optional" />
    </div>

    <div className="space-y-2">
      <Label variant="accent" htmlFor="accent-input">
        Accent Color
      </Label>
      <Input id="accent-input" placeholder="With accent colored label" />
    </div>
  </div>
);

// Nested controls (no htmlFor needed)
export const NestedControls = () => (
  <div className="max-w-md space-y-4">
    <Label className="flex items-center space-x-2 cursor-pointer">
      <Checkbox />
      <span>I agree to the terms and conditions</span>
    </Label>

    <Label className="flex items-center space-x-2 cursor-pointer">
      <input type="radio" name="option" className="rounded border-input" />
      <span>Option 1</span>
    </Label>

    <Label className="flex items-center space-x-2 cursor-pointer">
      <input type="radio" name="option" className="rounded border-input" />
      <span>Option 2</span>
    </Label>

    <Label className="flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" className="rounded border-input" />
      <span>Subscribe to newsletter</span>
    </Label>
  </div>
);

// Complex form with labels and badges
export const ComplexFormLabels = () => (
  <div className="max-w-lg space-y-6">
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="username">Username</Label>
        <Badge variant="destructive" className="text-xs">
          Required
        </Badge>
      </div>
      <Input id="username" placeholder="Enter your username" />
      <p className="text-xs text-muted-foreground">
        Must be 3-20 characters long and contain only letters, numbers, and
        underscores.
      </p>
    </div>

    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor="api-key">API Key</Label>
        <Badge variant="outline" className="text-xs">
          Optional
        </Badge>
      </div>
      <Input id="api-key" type="password" placeholder="sk-..." />
      <p className="text-xs text-muted-foreground">
        Leave blank to use the default API key.
      </p>
    </div>

    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="project-name">Project Name</Label>
        <Badge className="text-xs">Premium</Badge>
      </div>
      <Input id="project-name" placeholder="My awesome project" />
    </div>

    <div className="space-y-2">
      <Label htmlFor="description" className="flex items-center gap-2">
        Description
        <span className="text-xs text-muted-foreground font-normal">
          (0/500 characters)
        </span>
      </Label>
      <textarea
        id="description"
        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        placeholder="Describe your project..."
      />
    </div>
  </div>
);

// Disabled states
export const DisabledState = () => (
  <div className="max-w-md space-y-4">
    <div className="space-y-2">
      <Label htmlFor="disabled-input">Disabled Field</Label>
      <Input
        id="disabled-input"
        disabled
        placeholder="This field is disabled"
      />
    </div>

    <Label className="flex items-center space-x-2 cursor-not-allowed opacity-70">
      <Checkbox disabled />
      <span>Disabled checkbox option</span>
    </Label>

    <div className="space-y-2 opacity-70">
      <Label htmlFor="readonly-input">Read-only Field</Label>
      <Input
        id="readonly-input"
        readOnly
        value="This value cannot be changed"
      />
    </div>
  </div>
);

// Accessible form group
export const AccessibleFormGroup = () => (
  <div className="max-w-lg space-y-6">
    <fieldset className="space-y-4 border border-border rounded-lg p-4">
      <legend className="text-sm font-medium px-2">Contact Information</legend>

      <div className="space-y-2">
        <Label htmlFor="contact-name">Full Name</Label>
        <Input id="contact-name" required aria-describedby="name-help" />
        <p id="name-help" className="text-xs text-muted-foreground">
          Enter your first and last name
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-email">Email Address</Label>
        <Input
          id="contact-email"
          type="email"
          required
          aria-describedby="email-help"
        />
        <p id="email-help" className="text-xs text-muted-foreground">
          We'll never share your email with anyone else
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-phone">Phone Number</Label>
        <Input id="contact-phone" type="tel" aria-describedby="phone-help" />
        <p id="phone-help" className="text-xs text-muted-foreground">
          Optional. Include country code for international numbers
        </p>
      </div>
    </fieldset>
  </div>
);

// Radio group with labels
export const RadioGroupLabels = () => (
  <div className="max-w-md">
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium">Preferred Contact Method</legend>

      <Label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="contact-method"
          value="email"
          className="rounded-full"
        />
        <span>Email</span>
      </Label>

      <Label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="contact-method"
          value="phone"
          className="rounded-full"
        />
        <span>Phone</span>
      </Label>

      <Label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="radio"
          name="contact-method"
          value="sms"
          className="rounded-full"
        />
        <span>SMS</span>
      </Label>
    </fieldset>
  </div>
);

// Complete form example
export const CompleteForm = () => (
  <div className="max-w-2xl space-y-8">
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">User Registration</h2>
      <p className="text-sm text-muted-foreground">
        Please fill out all required fields to create your account.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="reg-first-name">First Name</Label>
        <Input id="reg-first-name" placeholder="John" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-last-name">Last Name</Label>
        <Input id="reg-last-name" placeholder="Doe" />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="reg-email">Email Address</Label>
        <Input id="reg-email" type="email" placeholder="john@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-password">Password</Label>
        <Input id="reg-password" type="password" placeholder="••••••••" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-confirm-password">Confirm Password</Label>
        <Input
          id="reg-confirm-password"
          type="password"
          placeholder="••••••••"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <Label htmlFor="reg-bio">Bio (Optional)</Label>
        <textarea
          id="reg-bio"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="Tell us about yourself..."
        />
      </div>

      <div className="md:col-span-2 space-y-4">
        <Label className="flex items-start space-x-2 cursor-pointer">
          <Checkbox className="mt-0.5" />
          <span className="text-sm">
            I agree to the{" "}
            <a href="#" className="underline hover:text-primary">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>
          </span>
        </Label>

        <Label className="flex items-center space-x-2 cursor-pointer">
          <Checkbox />
          <span>Send me promotional emails and updates</span>
        </Label>
      </div>

      <div className="md:col-span-2 flex gap-4 pt-4">
        <Button type="submit" className="flex-1">
          Create Account
        </Button>
        <Button type="button" variant="outline">
          Cancel
        </Button>
      </div>
    </div>
  </div>
);

// Interactive playground
export const Playground = (args: {
  variant?: "default" | "destructive" | "muted" | "accent";
  size?: "sm" | "default" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  htmlFor?: string;
}) => (
  <div className="max-w-md space-y-2">
    <Label {...args} htmlFor={args.htmlFor || "playground-input"}>
      Sample Label
    </Label>
    <Input
      id={args.htmlFor || "playground-input"}
      placeholder="Enter some text..."
    />
  </div>
);

Playground.args = {
  variant: "default",
  size: "default",
  weight: "medium",
  htmlFor: "playground-input",
};

// Advanced: Text Selection Prevention Demo
export const TextSelectionDemo = () => (
  <div className="max-w-lg space-y-6">
    <div className="space-y-4">
      <h3 className="font-semibold">Text Selection Prevention</h3>
      <p className="text-sm text-muted-foreground">
        Try double-clicking the labels below. Notice how Radix UI Label prevents
        text selection to improve UX.
      </p>
    </div>

    <div className="space-y-4 border border-border rounded-lg p-4">
      <div className="space-y-2">
        <Label htmlFor="selection-demo-1" className="text-lg">
          Try double-clicking this label (selection prevented)
        </Label>
        <Input
          id="selection-demo-1"
          placeholder="Focus moves here when label is clicked"
        />
      </div>

      <div className="space-y-2">
        <span className="text-lg text-foreground">
          Regular span text (selection allowed)
        </span>
        <Input placeholder="Click this input directly to focus" />
        <p className="text-xs text-muted-foreground">
          Double-click the span above - text selection is allowed since it's not
          a Label component
        </p>
      </div>
    </div>

    <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
      <strong>Feature:</strong> Radix UI Label automatically prevents text
      selection on double-click, making it easier for users to interact with
      form controls without accidentally selecting label text.
    </div>
  </div>
);

// Advanced: Nested vs External Association Patterns
export const AssociationPatterns = () => (
  <div className="max-w-lg space-y-8">
    <div className="space-y-4">
      <h3 className="font-semibold">Label Association Patterns</h3>
      <p className="text-sm text-muted-foreground">
        Demonstrates different ways to associate labels with controls using
        Radix UI Label.
      </p>
    </div>

    <div className="space-y-6">
      {/* External Association with htmlFor */}
      <div className="border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-medium text-sm">
          1. External Association (htmlFor)
        </h4>
        <div className="space-y-2">
          <Label htmlFor="external-input" className="text-blue-600">
            Username (click to focus input)
          </Label>
          <Input id="external-input" placeholder="Separate label and input" />
        </div>
        <p className="text-xs text-muted-foreground">
          Uses <code className="bg-muted px-1 rounded">htmlFor</code> to
          associate label with input via{" "}
          <code className="bg-muted px-1 rounded">id</code>
        </p>
      </div>

      {/* Nested Controls */}
      <div className="border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-medium text-sm">2. Nested Controls (wrapped)</h4>
        <div className="space-y-3">
          <Label className="flex items-center space-x-2 cursor-pointer text-green-600">
            <Checkbox />
            <span>Enable notifications (entire area is clickable)</span>
          </Label>

          <Label className="block cursor-pointer text-green-600">
            <input type="checkbox" className="mr-2" />
            Newsletter subscription (block layout)
          </Label>
        </div>
        <p className="text-xs text-muted-foreground">
          Controls are wrapped inside the label - no{" "}
          <code className="bg-muted px-1 rounded">htmlFor</code> needed
        </p>
      </div>

      {/* Complex Nested Example */}
      <div className="border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-medium text-sm">3. Complex Nested Layout</h4>
        <Label className="flex items-start space-x-3 cursor-pointer text-purple-600">
          <Checkbox className="mt-1" />
          <div className="space-y-1">
            <span className="font-medium">I agree to the terms</span>
            <p className="text-xs text-muted-foreground">
              This includes our privacy policy, terms of service, and cookie
              policy. The entire area is clickable to toggle the checkbox.
            </p>
          </div>
        </Label>
        <p className="text-xs text-muted-foreground">
          Complex content can be nested inside labels for rich interactive areas
        </p>
      </div>
    </div>
  </div>
);

// Advanced: Accessibility Enhancements
export const AccessibilityEnhancements = () => (
  <div className="max-w-lg space-y-8">
    <div className="space-y-4">
      <h3 className="font-semibold">Accessibility Best Practices</h3>
      <p className="text-sm text-muted-foreground">
        Examples showing how to properly implement accessible form labelling
        patterns.
      </p>
    </div>

    <div className="space-y-6">
      {/* Required Field Pattern */}
      <div className="border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-medium text-sm">
          Required Field with Clear Indication
        </h4>
        <div className="space-y-2">
          <Label htmlFor="required-field" className="flex items-center gap-1">
            Email Address
            <span className="text-destructive" aria-hidden="true">
              *
            </span>
          </Label>
          <Input
            id="required-field"
            type="email"
            required
            aria-describedby="email-help email-error"
            placeholder="user@example.com"
          />
          <p id="email-help" className="text-xs text-muted-foreground">
            Required. We'll use this to send you important updates.
          </p>
          <p id="email-error" className="text-xs text-destructive hidden">
            Please enter a valid email address
          </p>
        </div>
        <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
          <strong>Accessibility:</strong> Uses <code>aria-describedby</code> to
          associate help text and error messages
        </div>
      </div>

      {/* Custom Control Pattern */}
      <div className="border border-border rounded-lg p-4 space-y-3">
        <h4 className="font-medium text-sm">Custom Control with Proper Base</h4>
        <div className="space-y-2">
          <Label htmlFor="custom-toggle">Dark Mode</Label>
          <button
            id="custom-toggle"
            type="button"
            role="switch"
            aria-checked="false"
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="sr-only">Toggle dark mode</span>
            <span className="inline-block h-4 w-4 transform rounded-full bg-background shadow-lg transition-transform translate-x-1" />
          </button>
        </div>
        <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
          <strong>Best Practice:</strong> Custom controls use native button
          element as base for proper accessibility
        </div>
      </div>

      {/* Fieldset with Legend */}
      <fieldset className="border border-border rounded-lg p-4 space-y-3">
        <legend className="font-medium text-sm px-2">
          Contact Preferences
        </legend>

        <Label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="contact-pref"
            value="email"
            className="rounded-full"
          />
          <span>Email notifications</span>
        </Label>

        <Label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="contact-pref"
            value="sms"
            className="rounded-full"
          />
          <span>SMS notifications</span>
        </Label>

        <Label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="radio"
            name="contact-pref"
            value="none"
            className="rounded-full"
          />
          <span>No notifications</span>
        </Label>

        <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
          <strong>Pattern:</strong> Fieldset and legend provide group context
          for related form controls
        </div>
      </fieldset>
    </div>
  </div>
);

// Advanced: Dynamic Label States
export const DynamicLabelStates = () => {
  const [hasError, setHasError] = React.useState(false);
  const [isOptional, setIsOptional] = React.useState(false);
  const [value, setValue] = React.useState("");

  const validateEmail = (email: string) => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setHasError(!isValid && email.length > 0);
  };

  return (
    <div className="max-w-lg space-y-8">
      <div className="space-y-4">
        <h3 className="font-semibold">Dynamic Label States</h3>
        <p className="text-sm text-muted-foreground">
          Interactive examples showing how labels adapt to different form states
          and contexts.
        </p>
      </div>

      <div className="space-y-6">
        {/* Validation State Example */}
        <div className="border border-border rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-sm">Validation State Changes</h4>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOptional(!isOptional)}
            >
              Toggle Optional
            </Button>
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="dynamic-email"
              variant={hasError ? "destructive" : "default"}
              className="flex items-center gap-2"
            >
              Email Address
              {!isOptional && (
                <span className="text-destructive text-xs" aria-hidden="true">
                  *
                </span>
              )}
              {isOptional && (
                <Badge variant="outline" className="text-xs">
                  Optional
                </Badge>
              )}
            </Label>

            <Input
              id="dynamic-email"
              type="email"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                validateEmail(e.target.value);
              }}
              className={
                hasError
                  ? "border-destructive focus-visible:ring-destructive"
                  : ""
              }
              placeholder="Enter your email"
              required={!isOptional}
              aria-describedby="email-feedback"
            />

            <div id="email-feedback" className="min-h-[1.25rem]">
              {hasError && (
                <p className="text-xs text-destructive">
                  Please enter a valid email address
                </p>
              )}
              {!hasError && value.length > 0 && (
                <p className="text-xs text-green-600">
                  Email format looks good
                </p>
              )}
            </div>
          </div>

          <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
            <strong>Feature:</strong> Label variant changes dynamically based on
            validation state
          </div>
        </div>

        {/* Character Counter Example */}
        <div className="border border-border rounded-lg p-4 space-y-3">
          <h4 className="font-medium text-sm">Character Counter in Label</h4>

          <div className="space-y-2">
            <Label
              htmlFor="bio-input"
              className="flex items-center justify-between"
            >
              <span>Bio</span>
              <span className="text-xs text-muted-foreground font-normal">
                {value.length}/160 characters
              </span>
            </Label>

            <textarea
              id="bio-input"
              value={value}
              onChange={(e) => setValue(e.target.value.slice(0, 160))}
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Tell us about yourself..."
            />
          </div>

          <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
            <strong>Pattern:</strong> Labels can contain dynamic content like
            character counters
          </div>
        </div>
      </div>
    </div>
  );
};
