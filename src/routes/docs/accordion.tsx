import { AppHeader } from '@/components/AppHeader';
import { createFileRoute } from '@tanstack/react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/docs/accordion")({
  component: AccordionRoute,
});

function AccordionRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Accordion</h1>
          <p className="text-muted-foreground mb-8">
            A vertically stacked set of interactive headings that each reveal a
            section of content.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
              <p className="text-sm text-muted-foreground mb-4">
                A simple accordion with collapsible items.
              </p>
              <div className="p-4 border rounded-lg">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It's unstyled by default, giving you freedom over the
                      look and feel.
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Expanded by Default
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use the{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  defaultValue
                </code>{" "}
                prop to define the open item by default.
              </p>
              <div className="p-4 border rounded-lg">
                <Accordion
                  type="single"
                  defaultValue="item-2"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is React?</AccordionTrigger>
                    <AccordionContent>
                      React is a JavaScript library for building user
                      interfaces, particularly web applications.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is Radix UI?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          Radix UI is a low-level UI primitive library with a
                          focus on accessibility, customization and developer
                          experience.
                        </p>
                        <p>
                          You can use these components either as the base layer
                          of your design system, or adopt them incrementally.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is TypeScript?</AccordionTrigger>
                    <AccordionContent>
                      TypeScript is a strongly typed programming language that
                      builds on JavaScript.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Multiple Items Open
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Set the{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  type
                </code>{" "}
                prop to{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  multiple
                </code>{" "}
                to enable opening multiple items at once.
              </p>
              <div className="p-4 border rounded-lg">
                <Accordion type="multiple" className="w-full">
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
                            Change your password and enable two-factor
                            authentication.
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Without Collapsible
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Remove the{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  collapsible
                </code>{" "}
                prop to prevent all items from being closed at once.
              </p>
              <div className="p-4 border rounded-lg">
                <Accordion
                  type="single"
                  defaultValue="item-1"
                  className="w-full"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Step 1: Create Account</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          Sign up for a new account with your email address.
                        </p>
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
                        <p>
                          Complete your profile to personalize your experience.
                        </p>
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">FAQ Style</h2>
              <p className="text-sm text-muted-foreground mb-4">
                A common use case for accordions is FAQ sections with detailed
                answers.
              </p>
              <div className="p-4 border rounded-lg">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="billing">
                    <AccordionTrigger>How does billing work?</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p>
                          We offer flexible billing options to suit your needs:
                        </p>
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
                          All plans include a 14-day free trial. No credit card
                          required.
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
                          Yes, you can cancel your subscription at any time from
                          your account settings.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          When you cancel, you'll continue to have access until
                          the end of your current billing period. After that,
                          your account will be downgraded to our free plan.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="refunds">
                    <AccordionTrigger>
                      What's your refund policy?
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2">
                        <p>
                          We offer a 30-day money-back guarantee on all paid
                          plans.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          If you're not satisfied within the first 30 days,
                          contact our support team for a full refund. Refunds
                          are processed within 5-7 business days.
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
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Rich Content Example
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Accordions can contain any type of content, including forms,
                lists, and media.
              </p>
              <div className="p-4 border rounded-lg">
                <Accordion type="single" collapsible className="w-full">
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
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
