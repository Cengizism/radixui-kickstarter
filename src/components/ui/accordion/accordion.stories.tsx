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
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Determines whether one or multiple items can be opened at the same time. When 'single', only one item can be open. When 'multiple', multiple items can be open simultaneously.",
      table: {
        type: { summary: '"single" | "multiple"' },
        defaultValue: { summary: "undefined" },
      },
    },
    collapsible: {
      control: "boolean",
      description:
        "When type is 'single', allows closing content when clicking trigger for an open item. Has no effect when type is 'multiple'.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    defaultValue: {
      control: "text",
      description:
        "The value of the item to expand when initially rendered (uncontrolled). Use when you do not need to control the state of the accordion.",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
      },
    },
    value: {
      control: "text",
      description:
        "The controlled value of the item to expand (controlled). Must be used in conjunction with onValueChange.",
      table: {
        type: { summary: "string | string[]" },
        defaultValue: { summary: "undefined" },
      },
    },
    onValueChange: {
      description:
        "Event handler called when the expanded state of an item changes.",
      table: {
        type: { summary: "(value: string | string[]) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description:
        "The orientation of the accordion. Affects keyboard navigation behavior.",
      table: {
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
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the accordion and all its items.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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

// FAQ style
export const FAQStyle = () => (
  <div className="w-full max-w-lg">
    <Accordion type="single" collapsible>
      <AccordionItem value="billing">
        <AccordionTrigger>How does billing work?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>We offer flexible billing options to suit your needs:</p>
            <div className="space-y-2">
              <div className="border-l-2 border-primary/20 pl-4">
                <h5 className="font-medium">Monthly Billing</h5>
                <p className="text-sm text-muted-foreground">
                  Pay month-to-month with no long-term commitment.
                </p>
              </div>
              <div className="border-l-2 border-primary/20 pl-4">
                <h5 className="font-medium">Annual Billing</h5>
                <p className="text-sm text-muted-foreground">
                  Save 20% with annual payment.
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="cancellation">
        <AccordionTrigger>
          Can I cancel my subscription anytime?
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              Yes, you can cancel your subscription at any time from your
              account settings.
            </p>
            <p className="text-sm text-muted-foreground">
              When you cancel, you'll continue to have access until the end of
              your current billing period. After that, your account will be
              downgraded to our free plan.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="refunds">
        <AccordionTrigger>What's your refund policy?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>We offer a 30-day money-back guarantee on all paid plans.</p>
            <p className="text-sm text-muted-foreground">
              If you're not satisfied within the first 30 days, contact our
              support team for a full refund. Refunds are processed within 5-7
              business days.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>How can I get support?</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p>We offer multiple ways to get help:</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1">
                <h5 className="font-medium">Email Support</h5>
                <p className="text-sm text-muted-foreground">
                  Response within 24 hours
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-medium">Live Chat</h5>
                <p className="text-sm text-muted-foreground">
                  Available 9am-6pm EST
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-medium">Knowledge Base</h5>
                <p className="text-sm text-muted-foreground">
                  Self-service articles
                </p>
              </div>
              <div className="space-y-1">
                <h5 className="font-medium">Community</h5>
                <p className="text-sm text-muted-foreground">
                  Connect with other users
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Rich content example
export const RichContentExample = () => (
  <div className="w-full max-w-2xl">
    <Accordion type="single" collapsible>
      <AccordionItem value="features">
        <AccordionTrigger>Platform Features</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3">
              <h5 className="font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Analytics
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Real-time dashboard</li>
                <li>• Custom reports</li>
                <li>• Data visualization</li>
                <li>• Export capabilities</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Collaboration
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Team workspaces</li>
                <li>• Real-time editing</li>
                <li>• Comment system</li>
                <li>• Permission management</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Integration
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• REST API</li>
                <li>• Webhook support</li>
                <li>• Third-party apps</li>
                <li>• Custom connectors</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Security
              </h5>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Enterprise SSO</li>
                <li>• 2FA authentication</li>
                <li>• Data encryption</li>
                <li>• Audit logs</li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="pricing">
        <AccordionTrigger>Pricing Plans</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border rounded-lg p-4 space-y-3">
              <h5 className="font-semibold">Starter</h5>
              <div className="text-2xl font-bold">
                $9
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Up to 5 users
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  10GB storage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Email support
                </li>
              </ul>
            </div>
            <div className="border-2 border-primary rounded-lg p-4 space-y-3 relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                Most Popular
              </div>
              <h5 className="font-semibold">Professional</h5>
              <div className="text-2xl font-bold">
                $29
                <span className="text-sm font-normal text-muted-foreground">
                  /month
                </span>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Up to 50 users
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  100GB storage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Advanced analytics
                </li>
              </ul>
            </div>
            <div className="border rounded-lg p-4 space-y-3">
              <h5 className="font-semibold">Enterprise</h5>
              <div className="text-2xl font-bold">Custom</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Unlimited storage
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  24/7 phone support
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                  Custom integrations
                </li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Product documentation
export const ProductDocumentation = () => (
  <div className="w-full max-w-lg">
    <Accordion type="single" collapsible>
      <AccordionItem value="installation">
        <AccordionTrigger>Installation</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Install the package via your preferred package manager:
            </p>
            <div className="space-y-2">
              <div className="bg-muted/50 p-3 rounded-md border">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">npm</span>
                  <Badge variant="secondary" className="text-xs">
                    Copy
                  </Badge>
                </div>
                <code className="text-xs">
                  npm install @radix-ui/react-accordion
                </code>
              </div>
              <div className="bg-muted/50 p-3 rounded-md border">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">yarn</span>
                  <Badge variant="secondary" className="text-xs">
                    Copy
                  </Badge>
                </div>
                <code className="text-xs">
                  yarn add @radix-ui/react-accordion
                </code>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="usage">
        <AccordionTrigger>Basic Usage</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Import and use the component:
            </p>
            <div className="bg-muted/50 p-3 rounded-md border text-xs">
              <pre className="text-muted-foreground">
                {`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>
      Is it accessible?
    </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
              </pre>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="api">
        <AccordionTrigger>API Reference</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div>
              <h5 className="font-medium mb-2">Accordion</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>
                    <code>type</code>
                  </span>
                  <span>"single" | "multiple"</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <code>collapsible</code>
                  </span>
                  <span>boolean</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <code>defaultValue</code>
                  </span>
                  <span>string | string[]</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-2">AccordionItem</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>
                    <code>value</code>
                  </span>
                  <span>string (required)</span>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

// Simple Q&A
export const SimpleQA = () => (
  <div className="w-full max-w-lg">
    <Accordion type="single" collapsible>
      <AccordionItem value="what">
        <AccordionTrigger>What is this component for?</AccordionTrigger>
        <AccordionContent>
          This component is used to create collapsible content sections with
          smooth animations.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="when">
        <AccordionTrigger>When should I use it?</AccordionTrigger>
        <AccordionContent>
          Use accordions for FAQs, settings panels, or any content that benefits
          from progressive disclosure.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="how">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
          Click on any header to expand or collapse the content. Only one
          section can be open at a time by default.
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

// API Reference documentation
export const APIReference = () => (
  <div className="w-full max-w-4xl space-y-6">
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Accordion Props</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="border border-border p-3 text-left font-medium">
                Prop
              </th>
              <th className="border border-border p-3 text-left font-medium">
                Type
              </th>
              <th className="border border-border p-3 text-left font-medium">
                Default
              </th>
              <th className="border border-border p-3 text-left font-medium">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-mono text-xs">
                type
              </td>
              <td className="border border-border p-3 text-xs">
                "single" | "multiple"
              </td>
              <td className="border border-border p-3 text-xs">—</td>
              <td className="border border-border p-3 text-xs">
                Determines whether one or multiple items can be opened at the
                same time.
              </td>
            </tr>
            <tr className="bg-muted/25">
              <td className="border border-border p-3 font-mono text-xs">
                value
              </td>
              <td className="border border-border p-3 text-xs">
                string | string[]
              </td>
              <td className="border border-border p-3 text-xs">—</td>
              <td className="border border-border p-3 text-xs">
                The controlled value of the item to expand. Must be used with
                onValueChange.
              </td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-mono text-xs">
                defaultValue
              </td>
              <td className="border border-border p-3 text-xs">
                string | string[]
              </td>
              <td className="border border-border p-3 text-xs">—</td>
              <td className="border border-border p-3 text-xs">
                The value of the item to expand when initially rendered
                (uncontrolled).
              </td>
            </tr>
            <tr className="bg-muted/25">
              <td className="border border-border p-3 font-mono text-xs">
                onValueChange
              </td>
              <td className="border border-border p-3 text-xs">
                (value) =&gt; void
              </td>
              <td className="border border-border p-3 text-xs">—</td>
              <td className="border border-border p-3 text-xs">
                Event handler called when the expanded state changes.
              </td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-mono text-xs">
                collapsible
              </td>
              <td className="border border-border p-3 text-xs">boolean</td>
              <td className="border border-border p-3 text-xs">false</td>
              <td className="border border-border p-3 text-xs">
                When type is "single", allows closing an open item.
              </td>
            </tr>
            <tr className="bg-muted/25">
              <td className="border border-border p-3 font-mono text-xs">
                disabled
              </td>
              <td className="border border-border p-3 text-xs">boolean</td>
              <td className="border border-border p-3 text-xs">false</td>
              <td className="border border-border p-3 text-xs">
                When true, prevents interaction with the accordion.
              </td>
            </tr>
            <tr>
              <td className="border border-border p-3 font-mono text-xs">
                orientation
              </td>
              <td className="border border-border p-3 text-xs">
                "horizontal" | "vertical"
              </td>
              <td className="border border-border p-3 text-xs">"vertical"</td>
              <td className="border border-border p-3 text-xs">
                The orientation of the accordion.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="space-y-4">
      <h3 className="text-xl font-semibold">AccordionItem Props</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse border border-border">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="border border-border p-3 text-left font-medium">
                Prop
              </th>
              <th className="border border-border p-3 text-left font-medium">
                Type
              </th>
              <th className="border border-border p-3 text-left font-medium">
                Default
              </th>
              <th className="border border-border p-3 text-left font-medium">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border p-3 font-mono text-xs">
                value
              </td>
              <td className="border border-border p-3 text-xs">string</td>
              <td className="border border-border p-3 text-xs">—</td>
              <td className="border border-border p-3 text-xs">
                A unique value for the item.
              </td>
            </tr>
            <tr className="bg-muted/25">
              <td className="border border-border p-3 font-mono text-xs">
                disabled
              </td>
              <td className="border border-border p-3 text-xs">boolean</td>
              <td className="border border-border p-3 text-xs">false</td>
              <td className="border border-border p-3 text-xs">
                When true, prevents interaction with the item.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

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
