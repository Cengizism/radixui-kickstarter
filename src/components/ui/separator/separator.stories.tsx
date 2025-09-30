import { Badge } from '../badge/badge';
import { Button } from './button';
import { Separator } from './separator';

export default {
  title: "UI/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
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
    },
    size: {
      control: "select",
      options: ["sm", "default", "md", "lg"],
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "default", "lg", "xl"],
    },
    decorative: {
      control: "boolean",
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
