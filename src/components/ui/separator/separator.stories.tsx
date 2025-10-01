import React from 'react';
import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator.",
      table: {
        category: "Root Props",
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    decorative: {
      control: "boolean",
      description:
        "When true, signifies that it is purely visual, carries no semantic meaning, and ensures it is not present in the accessibility tree.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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

    // Data Attributes (Auto-applied)
    "data-orientation": {
      control: false,
      description: "Present when orientation is vertical. No value.",
      table: {
        category: "Data Attributes",
        type: { summary: "string" },
      },
    },

    // Custom Style Props
    variant: {
      control: "select",
      options: [
        "default",
        "subtle",
        "strong",
        "accent",
        "primary",
        "destructive",
      ],
      description: "The visual style variant of the separator.",
      table: {
        category: "Custom Style Props",
        type: {
          summary:
            '"default" | "subtle" | "strong" | "accent" | "primary" | "destructive"',
        },
        defaultValue: { summary: '"default"' },
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "md", "lg"],
      description: "The thickness/size of the separator line.",
      table: {
        category: "Custom Style Props",
        type: { summary: '"sm" | "default" | "md" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "default", "lg", "xl"],
      description: "The amount of spacing around the separator.",
      table: {
        category: "Custom Style Props",
        type: { summary: '"none" | "sm" | "default" | "lg" | "xl"' },
        defaultValue: { summary: '"none"' },
      },
    },

    // ARIA Properties
    "aria-orientation": {
      control: "select",
      options: ["horizontal", "vertical"],
      description:
        "The orientation of the separator for accessibility. Automatically set based on the orientation prop when decorative is false.",
      table: {
        category: "ARIA Properties",
        type: { summary: '"horizontal" | "vertical"' },
      },
    },
    role: {
      control: "text",
      description:
        "The ARIA role of the separator. Automatically set to 'separator' when decorative is false, or 'none' when decorative is true.",
      table: {
        category: "ARIA Properties",
        type: { summary: "string" },
        defaultValue: { summary: '"separator" | "none"' },
      },
    },
  },
};

// Basic horizontal separator
export const Default = () => (
  <div className="w-full max-w-md space-y-4">
    <div className="text-sm text-muted-foreground">
      Content above the separator
    </div>
    <Separator />
    <div className="text-sm text-muted-foreground">
      Content below the separator
    </div>
  </div>
);

// Orientation examples
export const Horizontal = () => (
  <div className="w-full max-w-md space-y-4">
    <div className="text-sm text-muted-foreground">Section One</div>
    <Separator orientation="horizontal" />
    <div className="text-sm text-muted-foreground">Section Two</div>
    <Separator orientation="horizontal" />
    <div className="text-sm text-muted-foreground">Section Three</div>
  </div>
);

export const Vertical = () => (
  <div className="flex items-center gap-4 h-8">
    <span className="text-sm text-muted-foreground">Left</span>
    <Separator orientation="vertical" />
    <span className="text-sm text-muted-foreground">Center</span>
    <Separator orientation="vertical" />
    <span className="text-sm text-muted-foreground">Right</span>
  </div>
);

// Visual variants
export const VisualVariants = () => (
  <div className="w-full max-w-md space-y-6">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Default</h4>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Standard border color</p>
        <Separator variant="default" />
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Subtle</h4>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Lighter, less prominent</p>
        <Separator variant="subtle" />
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Strong</h4>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">
          More prominent with shadow
        </p>
        <Separator variant="strong" />
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Accent</h4>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">Using accent color</p>
        <Separator variant="accent" />
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Primary</h4>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">
          Primary color with transparency
        </p>
        <Separator variant="primary" />
      </div>
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Destructive</h4>
      <div className="space-y-2">
        <p className="text-xs text-muted-foreground">
          For error or warning contexts
        </p>
        <Separator variant="destructive" />
      </div>
    </div>
  </div>
);

// Size variants
export const SizeVariants = () => (
  <div className="w-full max-w-md space-y-6">
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Small (1px)</h4>
      <Separator size="sm" variant="strong" />
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Default (1px)</h4>
      <Separator size="default" variant="strong" />
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Medium (2px)</h4>
      <Separator size="md" variant="strong" />
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Large (4px)</h4>
      <Separator size="lg" variant="strong" />
    </div>

    <div className="space-y-4">
      <h4 className="text-sm font-medium">Vertical Size Comparison</h4>
      <div className="flex items-center gap-4 h-12">
        <span className="text-xs">SM</span>
        <Separator orientation="vertical" size="sm" variant="strong" />
        <span className="text-xs">DEFAULT</span>
        <Separator orientation="vertical" size="default" variant="strong" />
        <span className="text-xs">MD</span>
        <Separator orientation="vertical" size="md" variant="strong" />
        <span className="text-xs">LG</span>
        <Separator orientation="vertical" size="lg" variant="strong" />
        <span className="text-xs">End</span>
      </div>
    </div>
  </div>
);

// Spacing variants
export const SpacingVariants = () => (
  <div className="w-full max-w-md space-y-6">
    <div className="space-y-2">
      <h4 className="text-sm font-medium">No Spacing</h4>
      <div className="bg-muted/30 p-4 rounded">
        <p className="text-sm">Content above</p>
        <Separator spacing="none" />
        <p className="text-sm">Content below (no spacing)</p>
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Small Spacing</h4>
      <div className="bg-muted/30 p-4 rounded">
        <p className="text-sm">Content above</p>
        <Separator spacing="sm" />
        <p className="text-sm">Content below (small spacing)</p>
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Default Spacing</h4>
      <div className="bg-muted/30 p-4 rounded">
        <p className="text-sm">Content above</p>
        <Separator spacing="default" />
        <p className="text-sm">Content below (default spacing)</p>
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Large Spacing</h4>
      <div className="bg-muted/30 p-4 rounded">
        <p className="text-sm">Content above</p>
        <Separator spacing="lg" />
        <p className="text-sm">Content below (large spacing)</p>
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Extra Large Spacing</h4>
      <div className="bg-muted/30 p-4 rounded">
        <p className="text-sm">Content above</p>
        <Separator spacing="xl" />
        <p className="text-sm">Content below (extra large spacing)</p>
      </div>
    </div>
  </div>
);

// Decorative vs semantic
export const Accessibility = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
    <div className="space-y-3">
      <h4 className="text-sm font-medium">Decorative (Default)</h4>
      <p className="text-xs text-muted-foreground">
        Hidden from screen readers, purely visual
      </p>
      <div className="p-4 border rounded-md space-y-2">
        <p className="text-sm font-medium">Product Name</p>
        <p className="text-xs text-muted-foreground">Category</p>
        <Separator decorative={true} />
        <p className="text-sm">$99.99</p>
      </div>
    </div>

    <div className="space-y-3">
      <h4 className="text-sm font-medium">Semantic</h4>
      <p className="text-xs text-muted-foreground">
        Announced to screen readers as a separator
      </p>
      <div className="p-4 border rounded-md space-y-2">
        <p className="text-sm font-medium">Navigation</p>
        <Separator decorative={false} />
        <p className="text-sm">Content Section</p>
      </div>
    </div>
  </div>
);

// Navigation menu example
export const NavigationMenu = () => (
  <div className="flex items-center gap-2 p-3 border rounded-md">
    <Button variant="ghost" size="sm">
      Home
    </Button>
    <Separator orientation="vertical" />
    <Button variant="ghost" size="sm">
      About
    </Button>
    <Separator orientation="vertical" />
    <Button variant="ghost" size="sm">
      Services
    </Button>
    <Separator orientation="vertical" />
    <Button variant="ghost" size="sm">
      Contact
    </Button>
  </div>
);

// Content card example
export const ContentCard = () => (
  <div className="max-w-md border rounded-lg p-4 space-y-4">
    <div>
      <h5 className="font-semibold">Article Title</h5>
      <p className="text-sm text-muted-foreground">
        Brief description of the article content and what readers can expect to
        learn from this piece...
      </p>
    </div>
    <Separator />
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span>March 15, 2024</span>
      <span>5 min read</span>
    </div>
  </div>
);

// Toolbar example
export const Toolbar = () => (
  <div className="flex items-center gap-2 p-2 border rounded-md bg-muted/20">
    <Button variant="ghost" size="sm">
      Bold
    </Button>
    <Button variant="ghost" size="sm">
      Italic
    </Button>
    <Separator orientation="vertical" />
    <Button variant="ghost" size="sm">
      Link
    </Button>
    <Button variant="ghost" size="sm">
      Image
    </Button>
    <Separator orientation="vertical" />
    <Button variant="ghost" size="sm">
      Save
    </Button>
  </div>
);

// Sidebar example
export const Sidebar = () => (
  <div className="max-w-xs border rounded-lg p-3 space-y-3">
    <div>
      <h6 className="text-sm font-medium mb-2">User Account</h6>
      <div className="space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Profile
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Settings
        </Button>
      </div>
    </div>
    <Separator />
    <div>
      <h6 className="text-sm font-medium mb-2">Content</h6>
      <div className="space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Dashboard
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          Analytics
        </Button>
      </div>
    </div>
    <Separator />
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="w-full justify-start text-destructive"
      >
        Sign Out
      </Button>
    </div>
  </div>
);

// Complex layout example
export const ComplexLayout = () => (
  <div className="max-w-2xl border rounded-lg">
    {/* Header */}
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Dashboard</h3>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">Pro</Badge>
          <Button size="sm">Settings</Button>
        </div>
      </div>
    </div>

    <Separator />

    {/* Stats Section */}
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold">1,234</div>
          <div className="text-sm text-muted-foreground">Users</div>
        </div>
        <Separator orientation="vertical" className="justify-self-center" />
        <div className="text-center">
          <div className="text-2xl font-bold">567</div>
          <div className="text-sm text-muted-foreground">Orders</div>
        </div>
        <Separator orientation="vertical" className="justify-self-center" />
        <div className="text-center">
          <div className="text-2xl font-bold">$12,345</div>
          <div className="text-sm text-muted-foreground">Revenue</div>
        </div>
      </div>
    </div>

    <Separator />

    {/* Actions */}
    <div className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Last updated 2 minutes ago
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Export
          </Button>
          <Button size="sm">Refresh</Button>
        </div>
      </div>
    </div>
  </div>
);

// Interactive playground with all props
export const Playground = (args: {
  orientation?: "horizontal" | "vertical";
  variant?:
    | "default"
    | "subtle"
    | "strong"
    | "accent"
    | "primary"
    | "destructive";
  size?: "sm" | "default" | "md" | "lg";
  spacing?: "none" | "sm" | "default" | "lg" | "xl";
  decorative?: boolean;
}) => (
  <div className="w-full max-w-md">
    {args.orientation === "vertical" ? (
      <div className="flex items-center gap-4 h-12">
        <span className="text-sm text-muted-foreground">Left</span>
        <Separator {...args} />
        <span className="text-sm text-muted-foreground">Right</span>
      </div>
    ) : (
      <div className="space-y-4">
        <div className="text-sm text-muted-foreground">Content above</div>
        <Separator {...args} />
        <div className="text-sm text-muted-foreground">Content below</div>
      </div>
    )}
  </div>
);

Playground.args = {
  orientation: "horizontal",
  variant: "default",
  size: "default",
  spacing: "none",
  decorative: true,
};

// Advanced Examples
export const AdvancedAccessibilityDemo = {
  render: () => {
    const [showScreenReaderText, setShowScreenReaderText] =
      React.useState(false);
    const [separatorType, setSeparatorType] = React.useState<
      "decorative" | "semantic"
    >("decorative");

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Accessibility & Semantic Meaning
          </h3>

          <div className="flex items-center gap-4 mb-6 p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="decorative-radio"
                name="separator-type"
                checked={separatorType === "decorative"}
                onChange={() => setSeparatorType("decorative")}
              />
              <label htmlFor="decorative-radio" className="text-sm font-medium">
                Decorative (Hidden from screen readers)
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="semantic-radio"
                name="separator-type"
                checked={separatorType === "semantic"}
                onChange={() => setSeparatorType("semantic")}
              />
              <label htmlFor="semantic-radio" className="text-sm font-medium">
                Semantic (Announced to screen readers)
              </label>
            </div>

            <div className="flex items-center space-x-2 ml-4">
              <input
                type="checkbox"
                id="show-sr-text"
                checked={showScreenReaderText}
                onChange={(e) => setShowScreenReaderText(e.target.checked)}
              />
              <label htmlFor="show-sr-text" className="text-sm">
                Show screen reader attributes
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Article Layout */}
          <div>
            <h4 className="font-medium mb-3">Article Layout Example</h4>
            <div className="border rounded-lg p-4 space-y-4">
              <div>
                <h5 className="font-semibold text-lg">
                  Understanding Web Accessibility
                </h5>
                <p className="text-sm text-muted-foreground mt-1">
                  A comprehensive guide to making your web content accessible to
                  all users, including those who rely on assistive technologies
                  like screen readers.
                </p>
              </div>

              <div className="relative">
                <Separator
                  decorative={separatorType === "decorative"}
                  variant="primary"
                  className="my-4"
                />
                {showScreenReaderText && (
                  <div className="absolute -right-2 -top-8 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {separatorType === "decorative"
                      ? "Hidden from screen readers"
                      : 'Announced as "separator"'}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h6 className="font-medium">Article Content</h6>
                <p className="text-sm text-muted-foreground">
                  This section contains the main article content. When using
                  decorative separators, the visual break doesn't create a
                  semantic boundary in the document structure.
                </p>
                <p className="text-sm text-muted-foreground">
                  When using semantic separators (decorative=false), screen
                  readers will announce the separator, helping users understand
                  there's a meaningful content division.
                </p>
              </div>

              <Separator
                decorative={separatorType === "decorative"}
                variant="accent"
              />

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Published: March 15, 2024</span>
                <span>Reading time: 8 minutes</span>
              </div>
            </div>
          </div>

          {/* Navigation Example */}
          <div>
            <h4 className="font-medium mb-3">Navigation Example</h4>
            <div className="border rounded-lg p-4 space-y-4">
              <div>
                <h5 className="font-medium mb-2">Main Navigation</h5>
                <div className="flex items-center gap-1 p-2 bg-muted/30 rounded">
                  <Button variant="ghost" size="sm">
                    Home
                  </Button>
                  <Separator
                    orientation="vertical"
                    decorative={separatorType === "decorative"}
                    className="mx-1"
                  />
                  <Button variant="ghost" size="sm">
                    About
                  </Button>
                  <Separator
                    orientation="vertical"
                    decorative={separatorType === "decorative"}
                    className="mx-1"
                  />
                  <Button variant="ghost" size="sm">
                    Services
                  </Button>
                  <Separator
                    orientation="vertical"
                    decorative={separatorType === "decorative"}
                    className="mx-1"
                  />
                  <Button variant="ghost" size="sm">
                    Contact
                  </Button>
                </div>
              </div>

              <Separator decorative={separatorType === "decorative"} />

              <div>
                <h5 className="font-medium mb-2">User Menu</h5>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Profile Settings
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Account Preferences
                  </Button>

                  <div className="relative py-2">
                    <Separator decorative={separatorType === "decorative"} />
                    {showScreenReaderText && separatorType === "semantic" && (
                      <div className="absolute right-0 top-0 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        Screen reader: "separator"
                      </div>
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-destructive"
                  >
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-50 rounded-lg">
          <h4 className="font-medium text-blue-900 mb-2">
            Accessibility Notes:
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>
              <strong>Decorative separators (decorative=true):</strong> Pure
              visual elements, hidden from assistive technology. Use for visual
              spacing and design elements.
            </li>
            <li>
              <strong>Semantic separators (decorative=false):</strong>{" "}
              Meaningful content dividers that screen readers announce. Use when
              the separator indicates a real content boundary.
            </li>
            <li>
              <strong>Navigation separators:</strong> Usually decorative since
              the navigation structure provides semantic meaning through roles
              and labels.
            </li>
            <li>
              <strong>Content separators:</strong> May be semantic when they
              separate distinct sections like article content from metadata.
            </li>
          </ul>
        </div>
      </div>
    );
  },
};

export const DynamicLayoutSeparators = {
  render: () => {
    const [layoutMode, setLayoutMode] = React.useState<
      "card" | "list" | "grid"
    >("card");
    const [separatorStyle, setSeparatorStyle] = React.useState<{
      variant:
        | "default"
        | "subtle"
        | "strong"
        | "accent"
        | "primary"
        | "destructive";
      size: "sm" | "default" | "md" | "lg";
      spacing: "none" | "sm" | "default" | "lg" | "xl";
    }>({
      variant: "default",
      size: "default",
      spacing: "default",
    });
    const [showSeparators, setShowSeparators] = React.useState(true);

    const sampleData = [
      {
        id: 1,
        title: "Product Alpha",
        category: "Electronics",
        price: "$299",
        status: "active",
      },
      {
        id: 2,
        title: "Product Beta",
        category: "Clothing",
        price: "$59",
        status: "pending",
      },
      {
        id: 3,
        title: "Product Gamma",
        category: "Books",
        price: "$24",
        status: "active",
      },
      {
        id: 4,
        title: "Product Delta",
        category: "Sports",
        price: "$149",
        status: "discontinued",
      },
      {
        id: 5,
        title: "Product Epsilon",
        category: "Electronics",
        price: "$449",
        status: "active",
      },
    ];

    const renderCardLayout = () => (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sampleData.map((item) => (
          <div key={item.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium">{item.title}</h4>
              <Badge
                variant={item.status === "active" ? "default" : "secondary"}
              >
                {item.status}
              </Badge>
            </div>

            {showSeparators && (
              <Separator
                variant={separatorStyle.variant}
                size={separatorStyle.size}
                spacing={separatorStyle.spacing}
                className="my-3"
              />
            )}

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{item.category}</span>
              <span className="font-medium">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    );

    const renderListLayout = () => (
      <div className="space-y-2">
        {sampleData.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="flex items-center justify-between p-3 hover:bg-muted/50 rounded">
              <div className="flex items-center gap-3">
                <div>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-medium">{item.price}</span>
                <Badge
                  variant={item.status === "active" ? "default" : "secondary"}
                >
                  {item.status}
                </Badge>
              </div>
            </div>

            {showSeparators && index < sampleData.length - 1 && (
              <Separator
                variant={separatorStyle.variant}
                size={separatorStyle.size}
                spacing={separatorStyle.spacing}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );

    const renderGridLayout = () => (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {sampleData.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="p-3 text-center">
              <h4 className="font-medium text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">
                {item.category}
              </p>
              <p className="font-medium text-sm">{item.price}</p>
            </div>

            {showSeparators &&
              (index + 1) % 3 !== 0 &&
              index < sampleData.length - 1 && (
                <Separator
                  orientation="vertical"
                  variant={separatorStyle.variant}
                  size={separatorStyle.size}
                  className="justify-self-center"
                />
              )}
          </React.Fragment>
        ))}
      </div>
    );

    const renderLayout = () => {
      switch (layoutMode) {
        case "card":
          return renderCardLayout();
        case "list":
          return renderListLayout();
        case "grid":
          return renderGridLayout();
        default:
          return renderCardLayout();
      }
    };

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Dynamic Layout Separators
          </h3>

          <div className="flex flex-wrap gap-4 mb-4 p-4 bg-muted rounded-lg">
            {/* Layout Mode */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Layout Mode:</label>
              <div className="flex gap-2">
                {(["card", "list", "grid"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setLayoutMode(mode)}
                    className={`px-3 py-1 rounded text-xs font-medium capitalize ${
                      layoutMode === mode
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border hover:bg-accent"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Separator Variant */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Separator Variant:</label>
              <select
                value={separatorStyle.variant}
                onChange={(e) =>
                  setSeparatorStyle((prev) => ({
                    ...prev,
                    variant: e.target.value as
                      | "default"
                      | "subtle"
                      | "strong"
                      | "accent"
                      | "primary",
                  }))
                }
                className="px-2 py-1 text-sm border rounded"
              >
                <option value="default">Default</option>
                <option value="subtle">Subtle</option>
                <option value="strong">Strong</option>
                <option value="accent">Accent</option>
                <option value="primary">Primary</option>
              </select>
            </div>

            {/* Separator Size */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Size:</label>
              <select
                value={separatorStyle.size}
                onChange={(e) =>
                  setSeparatorStyle((prev) => ({
                    ...prev,
                    size: e.target.value as "sm" | "default" | "md" | "lg",
                  }))
                }
                className="px-2 py-1 text-sm border rounded"
              >
                <option value="sm">Small</option>
                <option value="default">Default</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            {/* Show/Hide Toggle */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="show-separators"
                checked={showSeparators}
                onChange={(e) => setShowSeparators(e.target.checked)}
              />
              <label htmlFor="show-separators" className="text-sm">
                Show separators
              </label>
            </div>
          </div>
        </div>

        <div className="border rounded-lg p-4 min-h-96">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-medium">
              Product{" "}
              {layoutMode === "card"
                ? "Cards"
                : layoutMode === "list"
                  ? "List"
                  : "Grid"}
            </h4>
            <div className="text-sm text-muted-foreground">
              {sampleData.length} items • Separators:{" "}
              {showSeparators ? "Visible" : "Hidden"}
            </div>
          </div>

          {renderLayout()}
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Layout Demonstrations:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>Card Layout:</strong> Horizontal separators within each
              card
            </li>
            <li>
              • <strong>List Layout:</strong> Horizontal separators between list
              items
            </li>
            <li>
              • <strong>Grid Layout:</strong> Vertical separators between grid
              columns
            </li>
            <li>• Dynamic separator styling and visibility controls</li>
            <li>• Responsive behavior across different screen sizes</li>
          </ul>
        </div>
      </div>
    );
  },
};
