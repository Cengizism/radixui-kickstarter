import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button';
import {
  Cog,
  Info,
  Settings,
  Settings2,
  X
  } from 'lucide-react';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';
import { Separator } from '@/components/ui/separator/separator';
import { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverClose,
  PopoverArrow,
} from "@/components/ui/popover/popover";

export const Route = createFileRoute("/docs/popover")({
  component: PopoverDemo,
});

function PopoverDemo() {
  const [controlledOpen, setControlledOpen] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Popover</h1>
          <p className="text-lg text-muted-foreground">
            Displays rich content in a portal, triggered by a button.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Overlay</Badge>
          <Badge variant="secondary">Portal</Badge>
          <Badge variant="secondary">Positioning</Badge>
          <Badge variant="secondary">Collision Detection</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            A simple popover with rich content and automatic positioning.
          </p>
        </div>
        <div className="flex items-center gap-4 p-6 border rounded-lg">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input
                      id="width"
                      defaultValue="100%"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input
                      id="maxWidth"
                      defaultValue="300px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input
                      id="height"
                      defaultValue="25px"
                      className="col-span-2 h-8"
                    />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxHeight">Max. height</Label>
                    <Input
                      id="maxHeight"
                      defaultValue="none"
                      className="col-span-2 h-8"
                    />
                  </div>
                </div>
              </div>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different popover sizes with appropriate padding and content
            dimensions.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 p-6 border rounded-lg">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Small
              </Button>
            </PopoverTrigger>
            <PopoverContent size="sm">
              <p className="text-sm">
                Small popover content with compact spacing.
              </p>
              <PopoverArrow size="sm" />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Default</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>
                Default size popover with standard spacing and content area.
              </p>
              <PopoverArrow />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg">
                Large
              </Button>
            </PopoverTrigger>
            <PopoverContent size="lg">
              <p className="text-lg">
                Large popover content with generous spacing for rich content
                displays.
              </p>
              <PopoverArrow size="lg" />
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Extra Large</Button>
            </PopoverTrigger>
            <PopoverContent size="xl">
              <div className="space-y-3">
                <h4 className="text-xl font-medium">Extra Large Content</h4>
                <p className="text-xl">
                  Perfect for complex forms, detailed information, or rich media
                  content.
                </p>
              </div>
              <PopoverArrow size="xl" />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator />

      {/* Positioning and Alignment */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Positioning and Alignment</h2>
          <p className="text-muted-foreground">
            Control popover positioning with side and alignment options.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Top Side</h4>
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top Start
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="start">
                  <p>Top side, start aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top Center
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="center">
                  <p>Top side, center aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Top End
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="top" align="end">
                  <p>Top side, end aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Right Side</h4>
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right Start
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="right" align="start">
                  <p>Right side, start aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right Center
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="right" align="center">
                  <p>Right side, center aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Right End
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="right" align="end">
                  <p>Right side, end aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Bottom Side</h4>
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom Start
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="start">
                  <p>Bottom side, start aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom Center
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="center">
                  <p>Bottom side, center aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Bottom End
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="bottom" align="end">
                  <p>Bottom side, end aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Left Side</h4>
            <div className="flex flex-col gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left Start
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="left" align="start">
                  <p>Left side, start aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left Center
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="left" align="center">
                  <p>Left side, center aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm">
                    Left End
                  </Button>
                </PopoverTrigger>
                <PopoverContent side="left" align="end">
                  <p>Left side, end aligned</p>
                  <PopoverArrow />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* With Close Button */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">With Close Button</h2>
          <p className="text-muted-foreground">
            Add a close button for explicit popover dismissal.
          </p>
        </div>
        <div className="flex items-center gap-4 p-6 border rounded-lg">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Info className="mr-2 h-4 w-4" />
                Information
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-96">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">
                    About this feature
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    This is a detailed explanation of the feature with
                    additional information that users might find helpful. The
                    close button allows explicit dismissal.
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <Badge variant="outline">Feature Info</Badge>
                  <PopoverClose asChild>
                    <Button variant="ghost" size="sm">
                      <X className="h-4 w-4" />
                    </Button>
                  </PopoverClose>
                </div>
              </div>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator />

      {/* Custom Anchor */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Custom Anchor</h2>
          <p className="text-muted-foreground">
            Position the popover relative to a different element than the
            trigger.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <Popover>
            <div className="flex items-center gap-4 p-4 bg-muted rounded-md">
              <PopoverAnchor asChild>
                <div className="flex items-center gap-2 px-3 py-2 bg-background rounded border">
                  <Cog className="h-4 w-4" />
                  <span>Anchor Element</span>
                </div>
              </PopoverAnchor>
              <span className="text-sm text-muted-foreground">
                This is the anchor for positioning
              </span>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings2 className="mr-2 h-4 w-4" />
                  Open Settings
                </Button>
              </PopoverTrigger>
            </div>
            <PopoverContent>
              <div className="space-y-3">
                <h4 className="font-medium">Settings Panel</h4>
                <p className="text-sm text-muted-foreground">
                  This popover is positioned relative to the anchor element, not
                  the trigger button.
                </p>
                <div className="space-y-2">
                  <Label htmlFor="setting1">Setting 1</Label>
                  <Input id="setting1" placeholder="Enter value" />
                </div>
              </div>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator />

      {/* Controlled State */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled State</h2>
          <p className="text-muted-foreground">
            Control the popover's open state programmatically.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setControlledOpen(!controlledOpen)}
            >
              {controlledOpen ? "Close" : "Open"} Controlled Popover
            </Button>
            <Badge variant={controlledOpen ? "default" : "secondary"}>
              {controlledOpen ? "Open" : "Closed"}
            </Badge>
          </div>

          <Popover open={controlledOpen} onOpenChange={setControlledOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline">Trigger (Controlled)</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-3">
                <h4 className="font-medium">Controlled Popover</h4>
                <p className="text-sm text-muted-foreground">
                  This popover's state is controlled by the parent component.
                  Open state: {controlledOpen ? "true" : "false"}
                </p>
                <Button size="sm" onClick={() => setControlledOpen(false)}>
                  Close Programmatically
                </Button>
              </div>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator />

      {/* Constrained Size */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Constrained Size</h2>
          <p className="text-muted-foreground">
            Use CSS custom properties to constrain popover dimensions.
          </p>
        </div>
        <div className="flex items-center gap-4 p-6 border rounded-lg">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-64">
                Wide Trigger Button (Constrained Content)
              </Button>
            </PopoverTrigger>
            <PopoverContent size="full">
              <div className="space-y-3">
                <h4 className="font-medium">Constrained Content</h4>
                <p className="text-sm text-muted-foreground">
                  This popover's width matches the trigger width and height is
                  constrained to the available viewport space using CSS custom
                  properties.
                </p>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="p-2 text-xs bg-muted rounded">
                      Item {i + 1} - This content scrolls when it exceeds the
                      available height
                    </div>
                  ))}
                </div>
              </div>
              <PopoverArrow />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete props reference for all Popover components.
          </p>
        </div>
        <div className="space-y-6">
          {/* PopoverContent Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">PopoverContent</h3>
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
                      Controls popover content size and padding
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">side</td>
                    <td className="border border-border p-2">
                      'top' | 'right' | 'bottom' | 'left'
                    </td>
                    <td className="border border-border p-2">'bottom'</td>
                    <td className="border border-border p-2">
                      Preferred side to position the content
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      align
                    </td>
                    <td className="border border-border p-2">
                      'start' | 'center' | 'end'
                    </td>
                    <td className="border border-border p-2">'center'</td>
                    <td className="border border-border p-2">
                      How to align the content relative to the trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      sideOffset
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">4</td>
                    <td className="border border-border p-2">
                      Distance from the trigger in pixels
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      alignOffset
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">0</td>
                    <td className="border border-border p-2">
                      Offset for the alignment position
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PopoverArrow Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">PopoverArrow</h3>
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
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls arrow size
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      width
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">10</td>
                    <td className="border border-border p-2">
                      Arrow width in pixels
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      height
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">5</td>
                    <td className="border border-border p-2">
                      Arrow height in pixels
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
