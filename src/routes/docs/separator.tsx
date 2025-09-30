import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';

export const Route = createFileRoute("/docs/separator")({
  component: SeparatorDemo,
});

function SeparatorDemo() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Separator</h1>
          <p className="text-lg text-muted-foreground">
            Visually or semantically separates content with horizontal or
            vertical lines.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Horizontal</Badge>
          <Badge variant="secondary">Vertical</Badge>
          <Badge variant="secondary">Decorative</Badge>
          <Badge variant="secondary">Accessible</Badge>
          <Badge variant="secondary">Lightweight</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple horizontal and vertical separators for content division.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Horizontal Separator</h4>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Content above the separator
              </div>
              <Separator />
              <div className="text-sm text-muted-foreground">
                Content below the separator
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Vertical Separator</h4>
            <div className="flex items-center gap-4 h-8">
              <span className="text-sm text-muted-foreground">Left</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-muted-foreground">Center</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-muted-foreground">Right</span>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Orientation Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Orientation</h2>
          <p className="text-muted-foreground">
            Separators can be oriented horizontally or vertically.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Horizontal</h4>
            <div className="space-y-4 p-4 border rounded-md">
              <p className="text-sm">Section One</p>
              <Separator orientation="horizontal" />
              <p className="text-sm">Section Two</p>
              <Separator orientation="horizontal" />
              <p className="text-sm">Section Three</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Vertical</h4>
            <div className="flex items-center gap-4 p-4 border rounded-md h-20">
              <div className="text-sm">Item 1</div>
              <Separator orientation="vertical" />
              <div className="text-sm">Item 2</div>
              <Separator orientation="vertical" />
              <div className="text-sm">Item 3</div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Visual Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Visual Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles to match your design needs.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Default</h4>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Standard border color
              </p>
              <Separator variant="default" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Subtle</h4>
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground">
                Lighter, less prominent
              </p>
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
              <p className="text-xs text-muted-foreground">
                Using accent color
              </p>
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
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different thickness options for various visual hierarchy needs.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
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
              <Separator
                orientation="vertical"
                size="default"
                variant="strong"
              />
              <span className="text-xs">MD</span>
              <Separator orientation="vertical" size="md" variant="strong" />
              <span className="text-xs">LG</span>
              <Separator orientation="vertical" size="lg" variant="strong" />
              <span className="text-xs">End</span>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Spacing Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Spacing Variants</h2>
          <p className="text-muted-foreground">
            Built-in margin spacing for consistent layouts.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
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
      </section>

      <Separator />

      {/* Decorative vs Semantic */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Decorative vs Semantic</h2>
          <p className="text-muted-foreground">
            Control whether the separator has semantic meaning for screen
            readers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg">
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
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common use cases and patterns for separators.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          {/* Navigation Menu */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Navigation Menu</h4>
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
          </div>

          {/* Content Card */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Content Card</h4>
            <div className="max-w-md border rounded-lg p-4 space-y-4">
              <div>
                <h5 className="font-semibold">Article Title</h5>
                <p className="text-sm text-muted-foreground">
                  Brief description of the article content...
                </p>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>March 15, 2024</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Toolbar</h4>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Sidebar Sections</h4>
            <div className="max-w-xs border rounded-lg p-3 space-y-3">
              <div>
                <h6 className="text-sm font-medium mb-2">User Account</h6>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Profile
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Settings
                  </Button>
                </div>
              </div>
              <Separator />
              <div>
                <h6 className="text-sm font-medium mb-2">Content</h6>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start"
                  >
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
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete API reference for the Separator component.
          </p>
        </div>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="border border-border p-2 text-left">Prop</th>
                  <th className="border border-border p-2 text-left">Type</th>
                  <th className="border border-border p-2 text-left">
                    Default
                  </th>
                  <th className="border border-border p-2 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    orientation
                  </td>
                  <td className="border border-border p-2">
                    'horizontal' | 'vertical'
                  </td>
                  <td className="border border-border p-2">'horizontal'</td>
                  <td className="border border-border p-2">
                    The orientation of the separator
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    variant
                  </td>
                  <td className="border border-border p-2">
                    'default' | 'subtle' | 'strong' | 'accent' | 'primary' |
                    'destructive'
                  </td>
                  <td className="border border-border p-2">'default'</td>
                  <td className="border border-border p-2">
                    Visual style of the separator
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">size</td>
                  <td className="border border-border p-2">
                    'sm' | 'default' | 'md' | 'lg'
                  </td>
                  <td className="border border-border p-2">'default'</td>
                  <td className="border border-border p-2">
                    Thickness of the separator line
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    spacing
                  </td>
                  <td className="border border-border p-2">
                    'none' | 'sm' | 'default' | 'lg' | 'xl'
                  </td>
                  <td className="border border-border p-2">'none'</td>
                  <td className="border border-border p-2">
                    Built-in margin spacing around separator
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    decorative
                  </td>
                  <td className="border border-border p-2">boolean</td>
                  <td className="border border-border p-2">true</td>
                  <td className="border border-border p-2">
                    When true, separator is hidden from screen readers
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    asChild
                  </td>
                  <td className="border border-border p-2">boolean</td>
                  <td className="border border-border p-2">false</td>
                  <td className="border border-border p-2">
                    Change the default rendered element
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p className="text-muted-foreground">
            Built-in accessibility features and best practices.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">ARIA Compliance</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Adheres to the{" "}
                <code className="bg-muted px-1 rounded">separator</code> ARIA
                role requirements
              </li>
              <li>
                • Automatically sets appropriate{" "}
                <code className="bg-muted px-1 rounded">aria-orientation</code>
              </li>
              <li>
                • Decorative separators are hidden from assistive technology
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Use{" "}
                <code className="bg-muted px-1 rounded">decorative=true</code>{" "}
                for purely visual separators
              </li>
              <li>
                • Use{" "}
                <code className="bg-muted px-1 rounded">decorative=false</code>{" "}
                when separator provides semantic structure
              </li>
              <li>
                • Consider using headings or landmarks instead of semantic
                separators when possible
              </li>
              <li>• Ensure sufficient color contrast for visual separators</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Example Usage</h4>
            <div className="bg-muted/30 p-3 rounded-md">
              <code className="text-sm">
                {`// Decorative (visual only)
<Separator decorative={true} />

// Semantic (announced to screen readers)  
<Separator decorative={false} />`}
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
