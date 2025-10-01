import React from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

export default {
  title: "UI/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A vertically stacked set of interactive headings that each reveal an associated section of content. Built with Radix UI primitives for accessibility and keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Root Props
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Determines whether one or multiple items can be opened at the same time. When 'single', only one item can be open. When 'multiple', multiple items can be open simultaneously.",
      table: {
        category: "Root Props",
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: "undefined" },
      },
    },
    value: {
      control: "text",
      description:
        "The controlled value of the item to expand (controlled). Must be used in conjunction with onValueChange.",
      table: {
        category: "Root Props",
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
      },
    },
    defaultValue: {
      control: "text",
      description:
        "The value of the item to expand when initially rendered (uncontrolled). Use when you do not need to control the state of the accordion.",
      table: {
        category: "Root Props",
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description:
        "Event handler called when the expanded state of an item changes.",
      table: {
        category: "Root Props",
        type: { summary: "(value: string | string[]) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    collapsible: {
      control: "boolean",
      description:
        "When type is 'single', allows closing content when clicking trigger for an open item. Has no effect when type is 'multiple'.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the accordion and all its items.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description:
        "The orientation of the accordion. Affects keyboard navigation behavior.",
      table: {
        category: "Root Props",
        type: { summary: '"vertical" | "horizontal"' },
        defaultValue: { summary: '"vertical"' },
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction. If omitted, assumes LTR (left-to-right) reading mode.",
      table: {
        category: "Root Props",
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
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

    // Item Props
    itemValue: {
      control: "text",
      description: "A unique value for the accordion item.",
      table: {
        category: "Item Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    itemDisabled: {
      control: "boolean",
      description: "When true, prevents interaction with the accordion item.",
      table: {
        category: "Item Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    itemAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the item.",
      table: {
        category: "Item Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Trigger Props
    triggerAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the trigger.",
      table: {
        category: "Trigger Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Content Props
    contentAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the content.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful for controlling animation with React animation libraries.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Animation Props
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the accordion.",
      table: {
        category: "Styling Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Event Handlers
    onItemToggle: {
      action: "onItemToggle",
      description: "Event handler called when an accordion item is toggled.",
      table: {
        category: "Event Handlers",
        type: { summary: "(value: string, isOpen: boolean) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

// Basic example from docs
export const Default = () => (
  <div className="w-full max-w-lg">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it unstyled?</AccordionTrigger>
        <AccordionContent>
          Yes. It's unstyled by default, giving you freedom over the look and
          feel.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can it be animated?</AccordionTrigger>
        <AccordionContent>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Expanded by default
export const ExpandedByDefault = () => (
  <div className="w-full max-w-lg">
    <Accordion type="single" defaultValue="item-2" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>What is React?</AccordionTrigger>
        <AccordionContent>
          React is a JavaScript library for building user interfaces,
          particularly web applications.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What is Radix UI?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              Radix UI is a low-level UI primitive library with a focus on
              accessibility, customization and developer experience.
            </p>
            <p>
              You can use these components either as the base layer of your
              design system, or adopt them incrementally.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What is TypeScript?</AccordionTrigger>
        <AccordionContent>
          TypeScript is a strongly typed programming language that builds on
          JavaScript.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Multiple items open
export const MultipleItemsOpen = () => (
  <div className="w-full max-w-lg">
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Account Settings</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-medium">Profile Information</h4>
              <p className="text-sm text-muted-foreground">
                Update your name, email, and profile picture.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Password</h4>
              <p className="text-sm text-muted-foreground">
                Change your password and enable two-factor authentication.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Privacy & Security</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-medium">Data Usage</h4>
              <p className="text-sm text-muted-foreground">
                Control how your data is used and shared.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Login Activity</h4>
              <p className="text-sm text-muted-foreground">
                Monitor recent login attempts and devices.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Notifications</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="space-y-2">
              <h4 className="font-medium">Email Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Choose which emails you'd like to receive.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Push Notifications</h4>
              <p className="text-sm text-muted-foreground">
                Manage notifications on your devices.
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Without collapsible
export const WithoutCollapsible = () => (
  <div className="w-full max-w-lg">
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Step 1: Create Account</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Sign up for a new account with your email address.</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Enter your email address</li>
              <li>Choose a secure password</li>
              <li>Verify your email</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Step 2: Set Up Profile</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>Complete your profile to personalize your experience.</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Add profile picture</li>
              <li>Fill in basic information</li>
              <li>Set preferences</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Step 3: Get Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>You're all set! Start exploring the platform.</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Take the guided tour</li>
              <li>Invite team members</li>
              <li>Create your first project</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Horizontal orientation example
export const HorizontalOrientation = () => (
  <div className="w-full max-w-4xl">
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Horizontal Accordion</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Use the orientation prop to create a horizontal accordion. Navigation
        uses left/right arrow keys.
      </p>
    </div>
    <Accordion
      type="single"
      orientation="horizontal"
      collapsible
      className="flex border rounded-lg"
    >
      <AccordionItem
        value="features"
        className="flex-1 border-r last:border-r-0"
      >
        <AccordionTrigger className="px-4 py-3 text-sm font-medium">
          Features
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 border-t">
          <div className="space-y-2 text-sm">
            <div>• Full keyboard navigation</div>
            <div>• Supports RTL direction</div>
            <div>• WAI-ARIA compliant</div>
            <div>• Smooth animations</div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="usage" className="flex-1 border-r last:border-r-0">
        <AccordionTrigger className="px-4 py-3 text-sm font-medium">
          Usage
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 border-t">
          <div className="space-y-2 text-sm">
            <div>• FAQs and help sections</div>
            <div>• Settings panels</div>
            <div>• Progressive disclosure</div>
            <div>• Content organization</div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="customization" className="flex-1">
        <AccordionTrigger className="px-4 py-3 text-sm font-medium">
          Customization
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 border-t">
          <div className="space-y-2 text-sm">
            <div>• Unstyled by default</div>
            <div>• CSS-in-JS compatible</div>
            <div>• Custom animations</div>
            <div>• Theme integration</div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Controlled accordion example
export const ControlledAccordion = () => {
  const [value, setValue] = React.useState<string>("");

  return (
    <div className="w-full max-w-lg space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Controlled Accordion</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Control the accordion state externally using value and onValueChange
          props.
        </p>
        <div className="flex gap-2 mb-4">
          <Badge variant="outline" className="text-xs">
            Current value: {value || "none"}
          </Badge>
          <button
            onClick={() => setValue(value === "item-1" ? "" : "item-1")}
            className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded"
          >
            Toggle Item 1
          </button>
          <button
            onClick={() => setValue(value === "item-2" ? "" : "item-2")}
            className="text-xs px-2 py-1 bg-primary text-primary-foreground rounded"
          >
            Toggle Item 2
          </button>
        </div>
      </div>
      <Accordion type="single" value={value} onValueChange={setValue}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Controlled Item 1</AccordionTrigger>
          <AccordionContent>
            This accordion item is controlled externally. Its open/closed state
            is managed by the parent component.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Controlled Item 2</AccordionTrigger>
          <AccordionContent>
            You can programmatically control which items are expanded using the
            buttons above.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

// Advanced example with animations and disabled items
export const AdvancedExample = () => (
  <div className="w-full max-w-2xl space-y-6">
    <div>
      <h2 className="text-2xl font-bold mb-4">Advanced Features</h2>
      <p className="text-muted-foreground mb-6">
        Demonstrates disabled items, custom animations, and advanced styling
        patterns.
      </p>
    </div>

    <Accordion type="single" collapsible defaultValue="available">
      <AccordionItem value="available">
        <AccordionTrigger className="text-left">
          <div className="flex items-center justify-between w-full">
            <span>Available Features</span>
            <Badge variant="secondary" className="mr-6">
              Active
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-3 border rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">
                    Keyboard Navigation
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Full arrow key support
                </p>
              </div>
              <div className="p-3 border rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">Screen Reader</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  ARIA-compliant markup
                </p>
              </div>
              <div className="p-3 border rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">RTL Support</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Right-to-left languages
                </p>
              </div>
              <div className="p-3 border rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-sm">Custom Styling</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Fully customizable
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="disabled" disabled>
        <AccordionTrigger className="text-left">
          <div className="flex items-center justify-between w-full">
            <span>Premium Features</span>
            <Badge variant="outline" className="mr-6">
              Disabled
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          This content is not accessible because the item is disabled.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="animation">
        <AccordionTrigger className="text-left">
          <div className="flex items-center justify-between w-full">
            <span>Animation Details</span>
            <Badge variant="secondary" className="mr-6">
              CSS
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <p className="text-sm">
              Accordions use CSS variables for smooth height animations:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg text-xs font-mono">
              <div className="text-muted-foreground mb-2">
                /* CSS Animation Variables */
              </div>
              <div>--radix-accordion-content-height</div>
              <div>--radix-accordion-content-width</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              <div className="space-y-1">
                <span className="font-medium">Height Animation</span>
                <p className="text-muted-foreground text-xs">
                  Smooth expand/collapse using CSS transforms
                </p>
              </div>
              <div className="space-y-1">
                <span className="font-medium">Performance</span>
                <p className="text-muted-foreground text-xs">
                  Hardware-accelerated animations
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="accessibility">
        <AccordionTrigger className="text-left">
          <div className="flex items-center justify-between w-full">
            <span>Accessibility Standards</span>
            <Badge variant="secondary" className="mr-6">
              WAI-ARIA
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-sm">
              Follows the WAI-ARIA accordion design pattern with:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Proper ARIA roles and properties</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Keyboard navigation with arrow keys</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Screen reader announcements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>Focus management and indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span>High contrast mode support</span>
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
