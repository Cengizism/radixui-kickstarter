import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator/separator';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";

export const Route = createFileRoute("/docs/select")({
  component: SelectDemo,
});

function SelectDemo() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const frameworks = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
    { value: "solid", label: "Solid" },
    { value: "qwik", label: "Qwik" },
  ];

  const fruits = [
    { value: "apple", label: "Apple", category: "Popular" },
    { value: "banana", label: "Banana", category: "Popular" },
    { value: "orange", label: "Orange", category: "Popular" },
    { value: "grape", label: "Grape", category: "Seasonal" },
    { value: "pineapple", label: "Pineapple", category: "Seasonal" },
    { value: "mango", label: "Mango", category: "Seasonal" },
  ];

  const countries = [
    { value: "us", label: "United States", flag: "🇺🇸" },
    { value: "uk", label: "United Kingdom", flag: "🇬🇧" },
    { value: "fr", label: "France", flag: "🇫🇷" },
    { value: "de", label: "Germany", flag: "🇩🇪" },
    { value: "jp", label: "Japan", flag: "🇯🇵" },
    { value: "cn", label: "China", flag: "🇨🇳" },
  ];

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Select</h1>
          <p className="text-lg text-muted-foreground">
            Displays a list of options for the user to pick from—triggered by a
            button.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Controlled</Badge>
          <Badge variant="secondary">Uncontrolled</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">Typeahead</Badge>
          <Badge variant="secondary">Positioning</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            A simple select with options triggered by a button.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 p-6 border rounded-lg">
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select a framework..." />
            </SelectTrigger>
            <SelectContent>
              {frameworks.map((framework) => (
                <SelectItem key={framework.value} value={framework.value}>
                  {framework.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="text-sm text-muted-foreground">
            Try opening the select and navigating with your keyboard
          </div>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different trigger sizes for various contexts.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Small</h4>
            <Select>
              <SelectTrigger size="sm" className="w-40">
                <SelectValue placeholder="Small select" />
              </SelectTrigger>
              <SelectContent size="sm">
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem
                    key={framework.value}
                    value={framework.value}
                    size="sm"
                  >
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Default</h4>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Default select" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Large</h4>
            <Select>
              <SelectTrigger size="lg" className="w-56">
                <SelectValue placeholder="Large select" />
              </SelectTrigger>
              <SelectContent size="lg">
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem
                    key={framework.value}
                    value={framework.value}
                    size="lg"
                  >
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <Separator />

      {/* Trigger Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Trigger Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for the select trigger.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 border rounded-lg">
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Default</h4>
            <Select>
              <SelectTrigger variant="default" className="w-full">
                <SelectValue placeholder="Default style" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Outline</h4>
            <Select>
              <SelectTrigger variant="outline" className="w-full">
                <SelectValue placeholder="Outline style" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Ghost</h4>
            <Select>
              <SelectTrigger variant="ghost" className="w-full">
                <SelectValue placeholder="Ghost style" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <Separator />

      {/* Content Positioning */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Content Positioning</h2>
          <p className="text-muted-foreground">
            Different positioning modes for the dropdown content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Item Aligned (Default)</h4>
            <p className="text-xs text-muted-foreground">
              Content aligns to the selected item like native macOS menus
            </p>
            <Select defaultValue="react">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                {frameworks.map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Popper Positioned</h4>
            <p className="text-xs text-muted-foreground">
              Content positions like a popover with side alignment
            </p>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Popper positioning" />
              </SelectTrigger>
              <SelectContent position="popper">
                {frameworks.map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <Separator />

      {/* Grouped Options */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Grouped Options</h2>
          <p className="text-muted-foreground">
            Organize options into labeled groups with separators.
          </p>
        </div>
        <div className="flex justify-center p-6 border rounded-lg">
          <Select>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a fruit..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Popular</SelectLabel>
                {fruits
                  .filter((fruit) => fruit.category === "Popular")
                  .map((fruit) => (
                    <SelectItem key={fruit.value} value={fruit.value}>
                      {fruit.label}
                    </SelectItem>
                  ))}
              </SelectGroup>

              <SelectSeparator />

              <SelectGroup>
                <SelectLabel>Seasonal</SelectLabel>
                {fruits
                  .filter((fruit) => fruit.category === "Seasonal")
                  .map((fruit) => (
                    <SelectItem key={fruit.value} value={fruit.value}>
                      {fruit.label}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      <Separator />

      {/* Disabled States */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Disabled States</h2>
          <p className="text-muted-foreground">
            Disabled triggers and individual disabled options.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Disabled Select</h4>
            <Select disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="This select is disabled" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.slice(0, 3).map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Disabled Options</h4>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Some options disabled" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="react">React</SelectItem>
                <SelectItem value="vue" disabled>
                  Vue (Coming Soon)
                </SelectItem>
                <SelectItem value="angular">Angular</SelectItem>
                <SelectItem value="svelte" disabled>
                  Svelte (Coming Soon)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <Separator />

      {/* Rich Content */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Rich Content</h2>
          <p className="text-muted-foreground">
            Select options with icons, flags, or other custom content.
          </p>
        </div>
        <div className="flex justify-center p-6 border rounded-lg">
          <Select>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select a country..." />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.value} value={country.value}>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{country.flag}</span>
                    <span>{country.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      <Separator />

      {/* Controlled Select */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled Select</h2>
          <p className="text-muted-foreground">
            Control the select state externally with value and onChange.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center gap-4">
            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Choose framework" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework.value} value={framework.value}>
                    {framework.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={() => setSelectedValue("")}
              variant="outline"
              size="sm"
              disabled={!selectedValue}
            >
              Clear
            </Button>
          </div>

          {selectedValue && (
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm">
                Selected: <span className="font-medium">{selectedValue}</span>
              </p>
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Scroll Behavior */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Scroll Behavior</h2>
          <p className="text-muted-foreground">
            Long lists with scroll buttons and keyboard navigation.
          </p>
        </div>
        <div className="flex justify-center p-6 border rounded-lg">
          <Select>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Choose from many options..." />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {Array.from({ length: 25 }, (_, i) => (
                <SelectItem key={`option-${i}`} value={`option-${i}`}>
                  Option {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </section>

      <Separator />

      {/* Form Integration */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Form Integration</h2>
          <p className="text-muted-foreground">
            Using Select in forms with validation and labels.
          </p>
        </div>
        <div className="max-w-md p-6 border rounded-lg">
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="framework-select" className="text-sm font-medium">
                Preferred Framework *
              </label>
              <Select required>
                <SelectTrigger id="framework-select">
                  <SelectValue placeholder="Select your framework" />
                </SelectTrigger>
                <SelectContent>
                  {frameworks.map((framework) => (
                    <SelectItem key={framework.value} value={framework.value}>
                      {framework.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Choose your primary development framework
              </p>
            </div>

            <Button type="submit" className="w-full">
              Submit Form
            </Button>
          </form>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete props reference for all Select components.
          </p>
        </div>
        <div className="space-y-6">
          {/* Select Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Select (Root)</h3>
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
                      The controlled value of the select
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultValue
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The default value (uncontrolled)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onValueChange
                    </td>
                    <td className="border border-border p-2">
                      (value: string) =&gt; void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Called when the value changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the entire select
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      required
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Makes the select required for forms
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SelectTrigger Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">SelectTrigger</h3>
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
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the trigger button
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
                      Visual style of the trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the trigger button
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SelectContent Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">SelectContent</h3>
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
                      position
                    </td>
                    <td className="border border-border p-2">
                      'item-aligned' | 'popper'
                    </td>
                    <td className="border border-border p-2">'item-aligned'</td>
                    <td className="border border-border p-2">
                      Positioning strategy for the content
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'full'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size constraints for the content
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">side</td>
                    <td className="border border-border p-2">
                      'top' | 'right' | 'bottom' | 'left'
                    </td>
                    <td className="border border-border p-2">'bottom'</td>
                    <td className="border border-border p-2">
                      Side to position against (popper mode)
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
                      Alignment on the side (popper mode)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SelectItem Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">SelectItem</h3>
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
                      The value of the item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      textValue
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Text for typeahead (if different from children)
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
