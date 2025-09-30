import { Badge } from '../badge/badge';
import { Button } from './button';
import { Checkbox } from '../checkbox/checkbox';
import { Input } from '../input/input';
import { Label } from './label';

export default {
  title: "UI/Label",
  component: Label,
  docs: {
    description: {
      component:
        "A label component for associating text with form controls. Built with Radix UI primitives for proper accessibility and screen reader support.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "muted", "accent"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    htmlFor: {
      control: "text",
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
