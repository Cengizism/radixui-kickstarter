import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Label } from '@/components/ui/elements/label';
import { Separator } from '@/components/ui/elements/separator';
import { useState } from 'react';
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/elements/radio-group";

export const Route = createFileRoute("/docs/radio-group")({
  component: RadioGroupDemo,
});

function RadioGroupDemo() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [controlledValue, setControlledValue] = useState("option1");

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Radio Group</h1>
          <p className="text-lg text-muted-foreground">
            A set of checkable buttons—known as radio buttons—where no more than
            one of the buttons can be checked at a time.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Single Selection</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">ARIA Compliant</Badge>
          <Badge variant="secondary">Form Integration</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple radio group with default styling and behavior.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different sizes for radio buttons to fit various design needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Small</h4>
            <RadioGroup defaultValue="sm1" size="sm">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sm1" id="sm1" size="sm" />
                <Label htmlFor="sm1" className="text-sm">
                  Option 1
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sm2" id="sm2" size="sm" />
                <Label htmlFor="sm2" className="text-sm">
                  Option 2
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <RadioGroup defaultValue="def1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="def1" id="def1" />
                <Label htmlFor="def1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="def2" id="def2" />
                <Label htmlFor="def2">Option 2</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Large</h4>
            <RadioGroup defaultValue="lg1" size="lg">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lg1" id="lg1" size="lg" />
                <Label htmlFor="lg1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="lg2" id="lg2" size="lg" />
                <Label htmlFor="lg2">Option 2</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Extra Large</h4>
            <RadioGroup defaultValue="xl1" size="lg">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="xl1" id="xl1" size="xl" />
                <Label htmlFor="xl1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="xl2" id="xl2" size="xl" />
                <Label htmlFor="xl2">Option 2</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Orientation */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Orientation</h2>
          <p className="text-muted-foreground">
            Control the layout direction of radio group items.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Vertical (Default)</h4>
            <RadioGroup defaultValue="v1" orientation="vertical">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="v1" id="v1" />
                <Label htmlFor="v1">First option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="v2" id="v2" />
                <Label htmlFor="v2">Second option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="v3" id="v3" />
                <Label htmlFor="v3">Third option</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Horizontal</h4>
            <RadioGroup defaultValue="h1" orientation="horizontal">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="h1" id="h1" />
                <Label htmlFor="h1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="h2" id="h2" />
                <Label htmlFor="h2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="h3" id="h3" />
                <Label htmlFor="h3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Style Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Style Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for radio buttons.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <RadioGroup defaultValue="style1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="style1" id="style1" variant="default" />
                <Label htmlFor="style1">Default style</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="style2" id="style2" variant="default" />
                <Label htmlFor="style2">With border</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Outline</h4>
            <RadioGroup defaultValue="outline1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="outline1"
                  id="outline1"
                  variant="outline"
                />
                <Label htmlFor="outline1">Outline style</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="outline2"
                  id="outline2"
                  variant="outline"
                />
                <Label htmlFor="outline2">Hover effects</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Ghost</h4>
            <RadioGroup defaultValue="ghost1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ghost1" id="ghost1" variant="ghost" />
                <Label htmlFor="ghost1">Ghost style</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ghost2" id="ghost2" variant="ghost" />
                <Label htmlFor="ghost2">Minimal look</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Indicator Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Indicator Variants</h2>
          <p className="text-muted-foreground">
            Different styles for the radio button indicator.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Circle (Default)</h4>
            <RadioGroup defaultValue="circle1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="circle1"
                  id="circle1"
                  indicator="circle"
                />
                <Label htmlFor="circle1">Circle indicator</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="circle2"
                  id="circle2"
                  indicator="circle"
                />
                <Label htmlFor="circle2">Default style</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Dot</h4>
            <RadioGroup defaultValue="dot1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dot1" id="dot1" indicator="dot" />
                <Label htmlFor="dot1">Dot indicator</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dot2" id="dot2" indicator="dot" />
                <Label htmlFor="dot2">Simple dot</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Filled</h4>
            <RadioGroup defaultValue="filled1">
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="filled1"
                  id="filled1"
                  indicator="filled"
                />
                <Label htmlFor="filled1">Filled indicator</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="filled2"
                  id="filled2"
                  indicator="filled"
                />
                <Label htmlFor="filled2">Solid circle</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Controlled State */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled State</h2>
          <p className="text-muted-foreground">
            Control the radio group value programmatically.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">
              Selected: {controlledValue}
            </span>
            <Button
              onClick={() => setControlledValue("option2")}
              variant="outline"
              size="sm"
            >
              Select Option 2
            </Button>
            <Button
              onClick={() => setControlledValue("option3")}
              variant="outline"
              size="sm"
            >
              Select Option 3
            </Button>
          </div>
          <RadioGroup
            value={controlledValue}
            onValueChange={setControlledValue}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option1" id="option1" />
              <Label htmlFor="option1">Option 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option2" id="option2" />
              <Label htmlFor="option2">Option 2</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option3" id="option3" />
              <Label htmlFor="option3">Option 3</Label>
            </div>
          </RadioGroup>
        </div>
      </section>

      <Separator />

      {/* Form Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Form Integration</h2>
          <p className="text-muted-foreground">
            Real-world examples of radio groups in forms.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4 p-6 border rounded-lg">
            <div>
              <Label className="text-base font-medium">Choose your plan</Label>
              <p className="text-sm text-muted-foreground">
                Select the plan that works best for you.
              </p>
            </div>
            <RadioGroup
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              className="mt-2"
            >
              <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50">
                <RadioGroupItem value="free" id="free" className="mt-1" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="free" className="font-medium">
                    Free Plan
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Perfect for getting started. $0/month
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50">
                <RadioGroupItem value="pro" id="pro" className="mt-1" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="pro" className="font-medium">
                    Pro Plan
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Best for professionals. $10/month
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-md hover:bg-muted/50">
                <RadioGroupItem
                  value="enterprise"
                  id="enterprise"
                  className="mt-1"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="enterprise" className="font-medium">
                    Enterprise Plan
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    For large organizations. $25/month
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4 p-6 border rounded-lg">
            <div>
              <Label className="text-base font-medium">T-Shirt Size</Label>
              <p className="text-sm text-muted-foreground">
                Select your preferred size.
              </p>
            </div>
            <RadioGroup
              value={selectedSize}
              onValueChange={setSelectedSize}
              orientation="horizontal"
              className="mt-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">S</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">M</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">L</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extra-large" id="extra-large" />
                <Label htmlFor="extra-large">XL</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Disabled State */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Disabled State</h2>
          <p className="text-muted-foreground">
            Radio groups in disabled state for non-interactive scenarios.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Entire group disabled</h4>
            <RadioGroup defaultValue="option-one" disabled>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="disabled-1" />
                <Label htmlFor="disabled-1">Option One (Selected)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="disabled-2" />
                <Label htmlFor="disabled-2">Option Two</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Individual items disabled</h4>
            <RadioGroup defaultValue="available">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="available" id="available" />
                <Label htmlFor="available">Available Option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sold-out" id="sold-out" disabled />
                <Label htmlFor="sold-out" className="opacity-50">
                  Sold Out
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="coming-soon" id="coming-soon" disabled />
                <Label htmlFor="coming-soon" className="opacity-50">
                  Coming Soon
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete props reference for all RadioGroup components.
          </p>
        </div>
        <div className="space-y-6">
          {/* RadioGroup Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">RadioGroup</h3>
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
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The controlled value of the radio item to check
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultValue
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The value of the radio item that should be checked when
                      initially rendered
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onValueChange
                    </td>
                    <td className="border border-border p-2">
                      (value: string) {"=>"} void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Event handler called when the value changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      orientation
                    </td>
                    <td className="border border-border p-2">
                      'vertical' | 'horizontal'
                    </td>
                    <td className="border border-border p-2">'vertical'</td>
                    <td className="border border-border p-2">
                      The orientation of the component
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the spacing between items
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      When true, prevents the user from interacting with radio
                      items
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* RadioGroupItem Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">RadioGroupItem</h3>
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
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      The value given as data when submitted with a name
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the size of the radio button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'ghost'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Controls the visual style of the radio button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      indicator
                    </td>
                    <td className="border border-border p-2">
                      'circle' | 'dot' | 'filled'
                    </td>
                    <td className="border border-border p-2">'circle'</td>
                    <td className="border border-border p-2">
                      Controls the style of the indicator when checked
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      When true, prevents the user from interacting with the
                      item
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
