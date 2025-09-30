import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/elements/separator';
import { useState } from 'react';
import {
  ScrollArea,
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from "@/components/ui/modules/scroll-area";

export const Route = createFileRoute("/docs/scroll-area")({
  component: ScrollAreaDemo,
});

function ScrollAreaDemo() {
  const [itemCount, setItemCount] = useState(50);

  const TAGS = Array.from({ length: itemCount }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const LOREM_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`;

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Scroll Area</h1>
          <p className="text-lg text-muted-foreground">
            Augments native scroll functionality for custom, cross-browser
            styling.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Custom Scrollbars</Badge>
          <Badge variant="secondary">Native Scrolling</Badge>
          <Badge variant="secondary">Cross-browser</Badge>
          <Badge variant="secondary">RTL Support</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            A simple scroll area with custom scrollbars that overlay the
            content.
          </p>
        </div>
        <div className="flex justify-center p-6 border rounded-lg">
          <ScrollArea className="w-72 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {TAGS.slice(0, 20).map((tag) => (
                <div
                  key={tag}
                  className="text-sm p-2 border-b border-border last:border-0"
                >
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different height presets for various use cases.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Small (8rem)</h4>
            <ScrollArea size="sm" className="rounded-md border">
              <div className="p-3">
                {TAGS.slice(0, 10).map((tag) => (
                  <div
                    key={tag}
                    className="text-xs p-1 border-b border-border last:border-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Default (16rem)</h4>
            <ScrollArea size="default" className="rounded-md border">
              <div className="p-3">
                {TAGS.slice(0, 15).map((tag) => (
                  <div
                    key={tag}
                    className="text-sm p-2 border-b border-border last:border-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Large (24rem)</h4>
            <ScrollArea size="lg" className="rounded-md border">
              <div className="p-4">
                {TAGS.slice(0, 20).map((tag) => (
                  <div
                    key={tag}
                    className="text-sm p-2 border-b border-border last:border-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Extra Large (32rem)</h4>
            <ScrollArea size="xl" className="rounded-md border">
              <div className="p-4">
                {TAGS.slice(0, 25).map((tag) => (
                  <div
                    key={tag}
                    className="text-sm p-2 border-b border-border last:border-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      <Separator />

      {/* Scrollbar Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Scrollbar Variants</h2>
          <p className="text-muted-foreground">
            Different scrollbar thickness options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Thin Scrollbars</h4>
            <ScrollArea
              size="lg"
              scrollbarVariant="thin"
              className="rounded-md border"
            >
              <div className="p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Minimal scrollbar design
                </p>
                {TAGS.slice(0, 15).map((tag) => (
                  <div key={tag} className="text-sm p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Default Scrollbars</h4>
            <ScrollArea
              size="lg"
              scrollbarVariant="default"
              className="rounded-md border"
            >
              <div className="p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Standard scrollbar thickness
                </p>
                {TAGS.slice(0, 15).map((tag) => (
                  <div key={tag} className="text-sm p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Thick Scrollbars</h4>
            <ScrollArea
              size="lg"
              scrollbarVariant="thick"
              className="rounded-md border"
            >
              <div className="p-4 space-y-2">
                <p className="text-sm text-muted-foreground">
                  Bold scrollbar for accessibility
                </p>
                {TAGS.slice(0, 15).map((tag) => (
                  <div key={tag} className="text-sm p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      <Separator />

      {/* Thumb Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Thumb Variants</h2>
          <p className="text-muted-foreground">
            Different scrollbar thumb colors and styles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Default</h4>
            <ScrollArea
              size="lg"
              thumbVariant="default"
              className="rounded-md border"
            >
              <div className="p-3 space-y-1">
                {TAGS.slice(0, 12).map((tag) => (
                  <div key={tag} className="text-xs p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Primary</h4>
            <ScrollArea
              size="lg"
              thumbVariant="primary"
              className="rounded-md border"
            >
              <div className="p-3 space-y-1">
                {TAGS.slice(0, 12).map((tag) => (
                  <div key={tag} className="text-xs p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Secondary</h4>
            <ScrollArea
              size="lg"
              thumbVariant="secondary"
              className="rounded-md border"
            >
              <div className="p-3 space-y-1">
                {TAGS.slice(0, 12).map((tag) => (
                  <div key={tag} className="text-xs p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Muted</h4>
            <ScrollArea
              size="lg"
              thumbVariant="muted"
              className="rounded-md border"
            >
              <div className="p-3 space-y-1">
                {TAGS.slice(0, 12).map((tag) => (
                  <div key={tag} className="text-xs p-2 bg-muted rounded">
                    {tag}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      <Separator />

      {/* Horizontal Scrolling */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Horizontal Scrolling</h2>
          <p className="text-muted-foreground">
            Scroll areas with horizontal overflow and scrollbars.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <ScrollArea className="w-full h-20 rounded-md border">
            <div
              className="flex p-4 space-x-4"
              style={{ width: "max-content" }}
            >
              {TAGS.slice(0, 20).map((tag) => (
                <div
                  key={tag}
                  className="flex-none bg-muted text-sm px-3 py-2 rounded whitespace-nowrap"
                >
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>

          <h4 className="text-sm font-medium">Wide table example</h4>
          <ScrollArea className="w-full h-32 rounded-md border">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b">
                  <th className="p-2 text-left">ID</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Role</th>
                  <th className="p-2 text-left">Department</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{i + 1}</td>
                    <td className="p-2">User {i + 1}</td>
                    <td className="p-2">user{i + 1}@example.com</td>
                    <td className="p-2">Developer</td>
                    <td className="p-2">Engineering</td>
                    <td className="p-2">Active</td>
                    <td className="p-2">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollArea>
        </div>
      </section>

      <Separator />

      {/* Dynamic Content */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Dynamic Content</h2>
          <p className="text-muted-foreground">
            Scroll area that adapts to changing content length.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Items: {itemCount}</span>
            <Button
              onClick={() => setItemCount(Math.max(5, itemCount - 10))}
              variant="outline"
              size="sm"
            >
              Remove 10
            </Button>
            <Button
              onClick={() => setItemCount(itemCount + 10)}
              variant="outline"
              size="sm"
            >
              Add 10
            </Button>
            <Button onClick={() => setItemCount(5)} variant="outline" size="sm">
              Reset
            </Button>
          </div>

          <ScrollArea size="lg" className="rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">
                Dynamic Tag List ({itemCount} items)
              </h4>
              {TAGS.map((tag, index) => (
                <div
                  key={tag}
                  className="text-sm p-2 border-b border-border last:border-0 flex justify-between"
                >
                  <span>{tag}</span>
                  <span className="text-muted-foreground">#{index + 1}</span>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      <Separator />

      {/* Text Content */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Text Content</h2>
          <p className="text-muted-foreground">
            Scroll areas for long text content with proper text flow.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Article Content</h4>
            <ScrollArea size="xl" className="rounded-md border">
              <div className="p-6 max-w-none">
                <h3 className="text-lg font-semibold mb-4">
                  Lorem Ipsum Article
                </h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <p key={i}>{LOREM_TEXT}</p>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Code Block</h4>
            <ScrollArea size="xl" className="rounded-md border bg-muted/30">
              <div className="p-4">
                <pre className="text-xs font-mono">
                  {`// Example TypeScript React Component

interface Props {
  data: string[];
  onSelect: (item: string) => void;
}

export const DataList: React.FC<Props> = ({ data, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data.filter(item => 
      item.toLowerCase().includes(searchQuery.toLowerCase())
    ));
  }, [data, searchQuery]);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <ScrollArea className="h-96 w-full rounded-md border">
      <div className="p-4">
        {filteredData.map((item, index) => (
          <div
            key={index}
            onClick={() => handleItemClick(item)}
            className="cursor-pointer hover:bg-accent p-2 rounded"
          >
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};`}
                </pre>
              </div>
            </ScrollArea>
          </div>
        </div>
      </section>

      <Separator />

      {/* Custom Composition */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Custom Composition</h2>
          <p className="text-muted-foreground">
            Building custom scroll areas using individual components.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <ScrollAreaRoot
            className="w-96 h-64 rounded-md border bg-background relative overflow-hidden"
            type="hover"
          >
            <ScrollAreaViewport className="h-full w-full p-4">
              <div className="space-y-3">
                <h4 className="text-sm font-medium">Custom Scroll Area</h4>
                <p className="text-xs text-muted-foreground">
                  Built with individual ScrollArea components for full control.
                </p>
                {TAGS.slice(0, 25).map((tag) => (
                  <div
                    key={tag}
                    className="text-sm p-3 bg-primary/5 border border-primary/20 rounded-lg"
                  >
                    <div className="font-medium">{tag}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Release version with custom styling
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAreaViewport>

            <ScrollAreaScrollbar orientation="vertical" variant="thick">
              <ScrollAreaThumb variant="primary" />
            </ScrollAreaScrollbar>

            <ScrollAreaScrollbar orientation="horizontal" variant="thick">
              <ScrollAreaThumb variant="primary" />
            </ScrollAreaScrollbar>

            <ScrollAreaCorner />
          </ScrollAreaRoot>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete props reference for all ScrollArea components.
          </p>
        </div>
        <div className="space-y-6">
          {/* ScrollArea Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ScrollArea</h3>
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
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl' | 'full'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the height of the scroll area
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      scrollbarVariant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'thin' | 'thick'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the thickness of scrollbars
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      thumbVariant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'primary' | 'secondary' | 'muted'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the color of scrollbar thumbs
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">type</td>
                    <td className="border border-border p-2">
                      'auto' | 'always' | 'scroll' | 'hover'
                    </td>
                    <td className="border border-border p-2">'hover'</td>
                    <td className="border border-border p-2">
                      Controls when scrollbars are visible
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      scrollHideDelay
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">600</td>
                    <td className="border border-border p-2">
                      Delay in ms before scrollbars hide
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">dir</td>
                    <td className="border border-border p-2">'ltr' | 'rtl'</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Reading direction for RTL support
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ScrollAreaScrollbar Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ScrollAreaScrollbar</h3>
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
                      'vertical' | 'horizontal'
                    </td>
                    <td className="border border-border p-2">'vertical'</td>
                    <td className="border border-border p-2">
                      The orientation of the scrollbar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'thin' | 'thick'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the thickness of the scrollbar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      forceMount
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Force mount the scrollbar regardless of visibility
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ScrollAreaThumb Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ScrollAreaThumb</h3>
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
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'primary' | 'secondary' | 'muted'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the color of the thumb
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
