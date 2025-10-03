import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

// Define custom args type for playground story
type PlaygroundArgs = React.ComponentProps<typeof Accordion> & {
  itemCount?: number;
  showBadges?: boolean;
  richContent?: boolean;
  contentLength?: "short" | "medium" | "long";
};

const meta = {
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
  },
} satisfies Meta<typeof Accordion>;

export default meta;

// Interactive playground for testing different accordion configurations
export const Playground = {
  args: {
    type: "single",
    collapsible: true,
  },
  argTypes: {
    itemCount: {
      control: { type: "range", min: 2, max: 6, step: 1 },
      description: "Number of accordion items to display",
      table: {
        category: "Playground",
        defaultValue: { summary: "3" },
      },
    },
    showBadges: {
      control: "boolean",
      description: "Show status badges in triggers",
      table: {
        category: "Playground",
        defaultValue: { summary: "false" },
      },
    },
    richContent: {
      control: "boolean",
      description: "Use rich content with lists and formatting",
      table: {
        category: "Playground",
        defaultValue: { summary: "false" },
      },
    },
    contentLength: {
      control: "select",
      options: ["short", "medium", "long"],
      description: "Length of content in accordion items",
      table: {
        category: "Playground",
        defaultValue: { summary: "medium" },
      },
    },
  },
  render: ({
    itemCount = 3,
    showBadges = false,
    richContent = false,
    contentLength = "medium",
    ...args
  }: PlaygroundArgs) => {
    const items = [
      {
        title: "Is it accessible?",
        badge: "New",
        short: "Yes. It adheres to the WAI-ARIA design pattern.",
        medium:
          "Yes. It adheres to the WAI-ARIA design pattern and includes full keyboard navigation support.",
        long: "Yes. It adheres to the WAI-ARIA design pattern and includes full keyboard navigation support. The component provides proper ARIA attributes, screen reader compatibility, and follows accessibility best practices for interactive disclosure widgets.",
        richContent: (
          <div className="space-y-2">
            <p>Yes. It adheres to the WAI-ARIA design pattern with:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Proper ARIA roles and properties</li>
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Focus management</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Is it styled?",
        badge: "Updated",
        short: "No. It comes unstyled by default.",
        medium:
          "No. It comes completely unstyled by default, giving you freedom over the look and feel.",
        long: "No. It comes completely unstyled by default, giving you freedom over the look and feel. You can style it with CSS, CSS-in-JS libraries, or any styling solution of your choice. The component provides the behavior and accessibility features while leaving the visual design entirely up to you.",
        richContent: (
          <div className="space-y-3">
            <p>No. It comes completely unstyled by default, providing:</p>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Complete styling freedom</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">CSS-in-JS compatibility</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Theme integration support</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Can it be animated?",
        badge: "Popular",
        short: "Yes! You can animate the Accordion with CSS or JavaScript.",
        medium:
          "Yes! You can animate the Accordion with CSS or JavaScript animation libraries for smooth transitions.",
        long: "Yes! You can animate the Accordion with CSS or JavaScript animation libraries for smooth transitions. The component provides CSS variables for height and width that make it easy to create custom animations. It works great with Framer Motion, React Spring, and other animation libraries.",
        richContent: (
          <div className="space-y-3">
            <p>Yes! Multiple animation options available:</p>
            <div className="bg-muted/50 p-3 rounded-lg space-y-2">
              <div className="text-sm font-medium">CSS Variables</div>
              <div className="text-xs font-mono space-y-1">
                <div>--radix-accordion-content-height</div>
                <div>--radix-accordion-content-width</div>
              </div>
            </div>
            <div className="text-sm">
              <strong>Compatible with:</strong> Framer Motion, React Spring, CSS
              transitions
            </div>
          </div>
        ),
      },
      {
        title: "What about performance?",
        badge: "Fast",
        short: "Optimized for performance with minimal overhead.",
        medium:
          "Highly optimized for performance with minimal bundle size and runtime overhead.",
        long: "Highly optimized for performance with minimal bundle size and runtime overhead. Uses efficient rendering techniques and only re-renders when necessary. The animations are hardware-accelerated and the component is designed to handle large numbers of items without performance degradation.",
        richContent: (
          <div className="space-y-3">
            <p>Highly optimized with:</p>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <span>Bundle Size</span>
                <span className="text-green-600 font-medium">Small</span>
              </div>
              <div className="flex justify-between">
                <span>Runtime Overhead</span>
                <span className="text-green-600 font-medium">Minimal</span>
              </div>
              <div className="flex justify-between">
                <span>Animations</span>
                <span className="text-green-600 font-medium">
                  Hardware Accelerated
                </span>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "How about customization?",
        badge: "Flexible",
        short: "Fully customizable with complete control over styling.",
        medium:
          "Fully customizable component with complete control over styling, behavior, and structure.",
        long: "Fully customizable component with complete control over styling, behavior, and structure. You can customize every aspect from the trigger appearance to content animations. Supports custom icons, complex layouts, and advanced interaction patterns while maintaining accessibility.",
        richContent: (
          <div className="space-y-3">
            <p>Extensive customization options:</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                  Styling
                </span>
                <span className="text-sm">Complete visual control</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Behavior
                </span>
                <span className="text-sm">Flexible interaction patterns</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                  Structure
                </span>
                <span className="text-sm">Custom layouts and content</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "What about browser support?",
        badge: "Compatible",
        short: "Works in all modern browsers.",
        medium:
          "Excellent browser support covering all modern browsers and assistive technologies.",
        long: "Excellent browser support covering all modern browsers and assistive technologies. Thoroughly tested across different platforms and devices. Includes fallbacks and polyfills for older browsers when needed, ensuring consistent behavior across your user base.",
        richContent: (
          <div className="space-y-3">
            <p>Comprehensive browser support:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" />
                Chrome 80+
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" />
                Firefox 75+
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" />
                Safari 13+
              </div>
              <div className="flex items-center gap-1">
                <Check className="h-3 w-3 text-green-600" />
                Edge 80+
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              Includes assistive technology compatibility and mobile support.
            </p>
          </div>
        ),
      },
    ];

    const selectedItems = items.slice(0, itemCount);

    return (
      <div className="w-full max-w-lg">
        <Accordion {...args}>
          {selectedItems.map((item, index) => (
            <AccordionItem key={`item-${index}`} value={`item-${index}`}>
              <AccordionTrigger>
                <div className="flex items-center justify-between w-full">
                  <span>{item.title}</span>
                  {showBadges && (
                    <Badge variant="secondary" className="mr-6 text-xs">
                      {item.badge}
                    </Badge>
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {richContent ? item.richContent : item[contentLength]}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different accordion configurations, content types, and display options.",
      },
    },
  },
} satisfies StoryObj<PlaygroundArgs>;

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
          <Button
            onClick={() => setValue(value === "item-1" ? "" : "item-1")}
            size="sm"
            className="text-xs"
          >
            Toggle Item 1
          </Button>
          <Button
            onClick={() => setValue(value === "item-2" ? "" : "item-2")}
            size="sm"
            className="text-xs"
          >
            Toggle Item 2
          </Button>
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
                <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                <span>Proper ARIA roles and properties</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                <span>Keyboard navigation with arrow keys</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                <span>Screen reader announcements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                <span>Focus management and indicators</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                <span>High contrast mode support</span>
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);
