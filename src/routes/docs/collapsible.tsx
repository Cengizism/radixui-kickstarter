import * as React from 'react';
import { AppHeader } from '@/components/AppHeader';
import { Badge } from '@/components/ui/badge/badge';
import {
  Bell,
  File,
  Folder,
  Settings,
  Star,
  User
  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible/collapsible";

export const Route = createFileRoute("/docs/collapsible")({
  component: CollapsibleRoute,
});

function CollapsibleRoute() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [repositoriesOpen, setRepositoriesOpen] = React.useState(false);

  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Collapsible</h1>
          <p className="text-muted-foreground mb-8">
            An interactive component which expands/collapses a panel. Supports
            full keyboard navigation and can be controlled or uncontrolled.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Simple collapsible panel, similar to the GitHub starred
                repositories example from the official docs.
              </p>
              <div className="p-4 border rounded-lg max-w-md">
                <Collapsible
                  open={repositoriesOpen}
                  onOpenChange={setRepositoriesOpen}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      @peduarte starred 3 repositories
                    </span>
                    <CollapsibleTrigger
                      variant="ghost"
                      size="sm"
                      showChevron={false}
                    >
                      {repositoriesOpen ? "×" : "▼"}
                    </CollapsibleTrigger>
                  </div>

                  <div className="mt-2 p-2 bg-muted/50 rounded">
                    <span className="text-sm">@radix-ui/primitives</span>
                  </div>

                  <CollapsibleContent>
                    <div className="space-y-2 mt-2">
                      <div className="p-2 bg-muted/50 rounded">
                        <span className="text-sm">@radix-ui/colors</span>
                      </div>
                      <div className="p-2 bg-muted/50 rounded">
                        <span className="text-sm">@radix-ui/themes</span>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Trigger Variants</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different styling variants for collapsible triggers.
              </p>
              <div className="p-4 border rounded-lg space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Default Trigger</h4>
                    <Collapsible>
                      <CollapsibleTrigger variant="default">
                        Default variant
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <p className="text-sm text-muted-foreground p-2">
                          Content with default trigger styling.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Ghost Trigger</h4>
                    <Collapsible>
                      <CollapsibleTrigger variant="ghost">
                        Ghost variant
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <p className="text-sm text-muted-foreground p-2">
                          Content with ghost trigger styling.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Outline Trigger</h4>
                    <Collapsible>
                      <CollapsibleTrigger variant="outline">
                        Outline variant
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <p className="text-sm text-muted-foreground p-2">
                          Content with outline trigger styling.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Link Trigger</h4>
                    <Collapsible>
                      <CollapsibleTrigger variant="link">
                        Link variant
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <p className="text-sm text-muted-foreground p-2">
                          Content with link trigger styling.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Content Variants</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different styling options for collapsible content areas.
              </p>
              <div className="p-4 border rounded-lg space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Default Content</h4>
                  <Collapsible>
                    <CollapsibleTrigger>
                      Default content styling
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="default">
                      <p className="text-sm p-2">
                        This is the default content styling with no additional
                        visual treatment.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Bordered Content</h4>
                  <Collapsible>
                    <CollapsibleTrigger>
                      Bordered content styling
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="bordered">
                      <p className="text-sm p-2">
                        This content has a left border to visually indicate the
                        nested relationship.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Card Content</h4>
                  <Collapsible>
                    <CollapsibleTrigger>
                      Card content styling
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="card">
                      <p className="text-sm">
                        This content is wrapped in a card with padding and
                        borders for a more defined look.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Highlighted Content</h4>
                  <Collapsible>
                    <CollapsibleTrigger>
                      Highlighted content styling
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="highlighted">
                      <p className="text-sm p-3">
                        This content has a subtle background highlight to make
                        it stand out.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different sizes for triggers to match your design scale.
              </p>
              <div className="p-4 border rounded-lg space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Small</h4>
                  <Collapsible>
                    <CollapsibleTrigger size="sm">
                      Small collapsible trigger
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground p-2">
                        Content for small-sized collapsible.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Default</h4>
                  <Collapsible>
                    <CollapsibleTrigger size="default">
                      Default collapsible trigger
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground p-2">
                        Content for default-sized collapsible.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Large</h4>
                  <Collapsible>
                    <CollapsibleTrigger size="lg">
                      Large collapsible trigger
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <p className="text-sm text-muted-foreground p-2">
                        Content for large-sized collapsible.
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Controlled State</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Collapsible with controlled open state and external controls.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => setIsOpen(!isOpen)}
                      variant="outline"
                      size="sm"
                    >
                      {isOpen ? "Close" : "Open"} Panel
                    </Button>
                    <Badge variant="outline">
                      State: {isOpen ? "Open" : "Closed"}
                    </Badge>
                  </div>

                  <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <CollapsibleTrigger>
                      Controlled collapsible panel
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="card">
                      <div className="space-y-2">
                        <p className="text-sm">
                          This collapsible panel is controlled by both the
                          trigger and the external button above.
                        </p>
                        <p className="text-sm text-muted-foreground">
                          You can control the state programmatically from parent
                          components.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                File Explorer Pattern
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Common pattern for nested navigation like file explorers or
                menus.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="space-y-1 max-w-sm">
                  <Collapsible defaultOpen>
                    <CollapsibleTrigger
                      variant="ghost"
                      className="justify-start gap-2"
                    >
                      <Folder className="h-4 w-4 text-muted-foreground" />
                      src
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="bordered">
                      <div className="space-y-1">
                        <Collapsible>
                          <CollapsibleTrigger
                            variant="ghost"
                            className="justify-start gap-2 ml-4"
                          >
                            <Folder className="h-4 w-4 text-muted-foreground" />
                            components
                          </CollapsibleTrigger>
                          <CollapsibleContent variant="bordered">
                            <div className="space-y-1 ml-4">
                              <div className="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded">
                                <File className="h-4 w-4 text-muted-foreground" />
                                Button.tsx
                              </div>
                              <div className="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded">
                                <File className="h-4 w-4 text-muted-foreground" />
                                Input.tsx
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>

                        <div className="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded ml-4">
                          <File className="h-4 w-4 text-muted-foreground" />
                          App.tsx
                        </div>
                        <div className="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded ml-4">
                          <File className="h-4 w-4 text-muted-foreground" />
                          main.tsx
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger
                      variant="ghost"
                      className="justify-start gap-2"
                    >
                      <Folder className="h-4 w-4 text-muted-foreground" />
                      public
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="bordered">
                      <div className="flex items-center gap-2 p-2 text-sm hover:bg-muted/50 rounded ml-4">
                        <File className="h-4 w-4 text-muted-foreground" />
                        index.html
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Settings Panel</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Collapsible sections for organizing settings and preferences.
              </p>
              <div className="p-4 border rounded-lg space-y-4 max-w-md">
                <Collapsible defaultOpen>
                  <CollapsibleTrigger
                    variant="outline"
                    className="justify-start gap-2"
                  >
                    <User className="h-4 w-4" />
                    Account Settings
                  </CollapsibleTrigger>
                  <CollapsibleContent variant="card">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Profile visibility</span>
                        <Badge variant="outline">Public</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Two-factor auth</span>
                        <Badge>Enabled</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email verified</span>
                        <Badge>Yes</Badge>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger
                    variant="outline"
                    className="justify-start gap-2"
                  >
                    <Bell className="h-4 w-4" />
                    Notifications
                  </CollapsibleTrigger>
                  <CollapsibleContent variant="card">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Email notifications</span>
                        <Badge>On</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Push notifications</span>
                        <Badge variant="outline">Off</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Weekly digest</span>
                        <Badge>On</Badge>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger
                    variant="outline"
                    className="justify-start gap-2"
                  >
                    <Settings className="h-4 w-4" />
                    Advanced
                  </CollapsibleTrigger>
                  <CollapsibleContent variant="card">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Developer mode</span>
                        <Badge variant="outline">Off</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Beta features</span>
                        <Badge variant="outline">Off</Badge>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">FAQ Pattern</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Collapsible Q&A sections for documentation and help content.
              </p>
              <div className="p-4 border rounded-lg space-y-3">
                {[
                  {
                    question: "What is a collapsible component?",
                    answer:
                      "A collapsible component allows you to toggle the visibility of content sections. It's useful for organizing information in a compact, expandable format.",
                  },
                  {
                    question: "How do I control the state?",
                    answer:
                      "You can use the component in either controlled or uncontrolled mode. For controlled mode, pass 'open' and 'onOpenChange' props. For uncontrolled mode, use 'defaultOpen'.",
                  },
                  {
                    question: "Are there keyboard shortcuts?",
                    answer:
                      "Yes! You can use Space or Enter keys to toggle the collapsible when the trigger is focused. The component follows WCAG accessibility guidelines.",
                  },
                  {
                    question: "Can I customize the animation?",
                    answer:
                      "Yes, the component uses CSS custom properties for animation. You can override the --radix-collapsible-content-height variable to customize the animation behavior.",
                  },
                ].map((faq, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger
                      variant="ghost"
                      className="text-left hover:no-underline"
                      showChevron={true}
                    >
                      <span className="font-medium">{faq.question}</span>
                    </CollapsibleTrigger>
                    <CollapsibleContent variant="highlighted">
                      <p className="text-sm text-muted-foreground">
                        {faq.answer}
                      </p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Without Chevron</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Collapsible triggers without the default chevron indicator.
              </p>
              <div className="p-4 border rounded-lg">
                <Collapsible>
                  <CollapsibleTrigger showChevron={false}>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4" />
                      Custom trigger without chevron
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <p className="text-sm text-muted-foreground p-2">
                      This collapsible uses a custom trigger design without the
                      default chevron indicator.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Accessibility Features
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Keyboard navigation and ARIA compliance following the Disclosure
                pattern.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Keyboard Navigation</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Use{" "}
                      <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">
                        Space
                      </kbd>{" "}
                      or{" "}
                      <kbd className="bg-muted px-1.5 py-0.5 rounded text-xs">
                        Enter
                      </kbd>{" "}
                      to toggle collapsible panels.
                    </p>

                    <Collapsible>
                      <CollapsibleTrigger>
                        Focus me and press Space or Enter
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <p className="text-sm text-muted-foreground p-2">
                          This content was opened using keyboard navigation!
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div>
                      <h5 className="font-medium mb-1">✅ WCAG Features</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Follows Disclosure ARIA pattern</li>
                        <li>• Keyboard accessible</li>
                        <li>• Screen reader friendly</li>
                        <li>• Focus management</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">✅ Supports</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Controlled/uncontrolled modes</li>
                        <li>• Custom animations</li>
                        <li>• Flexible content</li>
                        <li>• Custom triggers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
