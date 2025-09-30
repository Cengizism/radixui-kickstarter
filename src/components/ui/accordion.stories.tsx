import { Badge } from './badge';
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
