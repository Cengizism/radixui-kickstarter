import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";

const meta = {
  title: "UI/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a list of options for the user to pick from—triggered by a button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Root Props
    defaultValue: {
      control: "text",
      description:
        "The value of the select when initially rendered. Use when you do not need to control the state of the select.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description:
        "The controlled value of the select. Should be used in conjunction with onValueChange.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Event handler called when the value changes.",
      table: {
        category: "Root Props",
        type: { summary: "(value: string) => void" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the select when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    open: {
      control: "boolean",
      description:
        "The controlled open state of the select. Must be used in conjunction with onOpenChange.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the select changes.",
      table: {
        category: "Root Props",
        type: { summary: "(open: boolean) => void" },
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the select when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      table: {
        category: "Root Props",
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    name: {
      control: "text",
      description:
        "The name of the select. Submitted with its owning form as part of a name/value pair.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    autoComplete: {
      control: "text",
      description: "The autocomplete attribute of the select.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the select.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description:
        "When true, indicates that the user must select a value before the owning form can be submitted.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Trigger Props
    // @ts-expect-error - Property added for documentation purposes
    triggerAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the trigger to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Trigger Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Value Props
    valueAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the value to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Value Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    valuePlaceholder: {
      control: "text",
      description:
        "The content that will be rendered inside the SelectValue when no value or defaultValue is set.",
      table: {
        category: "Value Props",
        type: { summary: "ReactNode" },
      },
    },

    // Portal Props
    portalContainer: {
      control: "text",
      description: "Specify a container element to portal the content into.",
      table: {
        category: "Portal Props",
        type: { summary: "HTMLElement" },
      },
    },
    portalAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the portal to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Portal Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Content Props
    onCloseAutoFocus: {
      action: "onCloseAutoFocus",
      description:
        "Event handler called when focus moves to the trigger after closing. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Content Props",
        type: { summary: "(event: Event) => void" },
      },
    },
    onEscapeKeyDown: {
      action: "onEscapeKeyDown",
      description:
        "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Content Props",
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    onPointerDownOutside: {
      action: "onPointerDownOutside",
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Content Props",
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
      },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description:
        "The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      table: {
        category: "Content Props",
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
      },
    },
    sideOffset: {
      control: "number",
      description: "The distance in pixels from the trigger.",
      table: {
        category: "Content Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description:
        "The preferred alignment against the trigger. May change when collisions occur.",
      table: {
        category: "Content Props",
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"start"' },
      },
    },
    alignOffset: {
      control: "number",
      description:
        'An offset in pixels from the "start" or "end" alignment options.',
      table: {
        category: "Content Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side and align preferences to prevent collisions with boundary edges.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    collisionBoundary: {
      control: "text",
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
      table: {
        category: "Content Props",
        type: { summary: "Element | null | Array<Element | null>" },
      },
    },
    collisionPadding: {
      control: "number",
      description:
        "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.",
      table: {
        category: "Content Props",
        type: { summary: "number | Partial<Record<Side, number>>" },
        defaultValue: { summary: "10" },
      },
    },
    arrowPadding: {
      control: "number",
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      table: {
        category: "Content Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description:
        'The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.',
      table: {
        category: "Content Props",
        type: { summary: '"partial" | "always"' },
        defaultValue: { summary: '"partial"' },
      },
    },
    hideWhenDetached: {
      control: "boolean",
      description:
        "Whether to hide the content when the trigger becomes fully occluded.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Item Props
    itemValue: {
      control: "text",
      description: "The value given as data when submitted with a name.",
      table: {
        category: "Item Props",
        type: { summary: "string" },
      },
    },
    itemDisabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the item.",
      table: {
        category: "Item Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    itemTextValue: {
      control: "text",
      description:
        "Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the SelectItemText part. Use this when the content is complex, or you have non-textual content inside.",
      table: {
        category: "Item Props",
        type: { summary: "string" },
      },
    },
    itemAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the item to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Item Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Custom Style Props
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the select components",
      table: {
        category: "Custom Style Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    variant: {
      control: "select",
      options: ["default", "ghost", "outline"],
      description: "The visual style variant of the select trigger",
      table: {
        category: "Custom Style Props",
        type: { summary: '"default" | "ghost" | "outline"' },
        defaultValue: { summary: '"default"' },
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

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

// Default story
export const Default: Story = {
  render: () => (
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
  ),
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Different trigger sizes for various contexts.",
      },
    },
  },
};

// Trigger variants
export const TriggerVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-2">
        <h4 className="text-sm font-medium">Default</h4>
        <Select>
          <SelectTrigger variant="default" className="w-48">
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
          <SelectTrigger variant="outline" className="w-48">
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
          <SelectTrigger variant="ghost" className="w-48">
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Different visual styles for the select trigger.",
      },
    },
  },
};

// Content positioning
export const ContentPositioning: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-8">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Item Aligned (Default)</h4>
        <p className="text-xs text-muted-foreground">
          Content aligns to the selected item like native macOS menus
        </p>
        <Select defaultValue="react">
          <SelectTrigger className="w-48">
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
          <SelectTrigger className="w-48">
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Different positioning modes for the dropdown content.",
      },
    },
  },
};

// Grouped options
export const GroupedOptions: Story = {
  render: () => (
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Organize options into labeled groups with separators.",
      },
    },
  },
};

// Disabled states
export const DisabledStates: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-3">
        <h4 className="text-sm font-medium">Disabled Select</h4>
        <Select disabled>
          <SelectTrigger className="w-48">
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
          <SelectTrigger className="w-48">
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled triggers and individual disabled options.",
      },
    },
  },
};

// Rich content
export const RichContent: Story = {
  render: () => (
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Select options with icons, flags, or other custom content.",
      },
    },
  },
};

// Controlled select
export const ControlledSelect: Story = {
  render: function ControlledExample() {
    const [selectedValue, setSelectedValue] = useState<string>("");

    return (
      <div className="space-y-4">
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
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Control the select state externally with value and onChange.",
      },
    },
  },
};

// Scroll behavior
export const ScrollBehavior: Story = {
  render: () => (
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Long lists with scroll buttons and keyboard navigation.",
      },
    },
  },
};

// Form integration
export const FormIntegration: Story = {
  render: () => (
    <form className="space-y-4 w-64">
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
  ),
  parameters: {
    docs: {
      description: {
        story: "Using Select in forms with validation and labels.",
      },
    },
  },
};

// Status indicators
export const StatusIndicators: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="text-xs">
            Active
          </Badge>
          <span className="text-sm font-medium">Project Status</span>
        </div>
        <Select defaultValue="active">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                Active
              </div>
            </SelectItem>
            <SelectItem value="pending">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                Pending
              </div>
            </SelectItem>
            <SelectItem value="completed">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                Completed
              </div>
            </SelectItem>
            <SelectItem value="cancelled">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                Cancelled
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Select with status indicators and colored dots.",
      },
    },
  },
};

// Advanced Examples
export const AdvancedStateManagement: Story = {
  render: function AdvancedStateExample() {
    const [selectedValues, setSelectedValues] = useState({
      category: "",
      subcategory: "",
      item: "",
    });
    const [isOpen, setIsOpen] = useState({
      category: false,
      subcategory: false,
      item: false,
    });
    const [history, setHistory] = useState<
      Array<{ action: string; value: string; timestamp: string }>
    >([]);

    const categories = [
      { value: "electronics", label: "Electronics" },
      { value: "clothing", label: "Clothing" },
      { value: "books", label: "Books" },
      { value: "sports", label: "Sports" },
    ];

    const subcategories: Record<
      string,
      Array<{ value: string; label: string }>
    > = {
      electronics: [
        { value: "computers", label: "Computers" },
        { value: "phones", label: "Phones" },
        { value: "accessories", label: "Accessories" },
      ],
      clothing: [
        { value: "shirts", label: "Shirts" },
        { value: "pants", label: "Pants" },
        { value: "shoes", label: "Shoes" },
      ],
      books: [
        { value: "fiction", label: "Fiction" },
        { value: "non-fiction", label: "Non-Fiction" },
        { value: "technical", label: "Technical" },
      ],
      sports: [
        { value: "equipment", label: "Equipment" },
        { value: "apparel", label: "Apparel" },
        { value: "nutrition", label: "Nutrition" },
      ],
    };

    const items: Record<
      string,
      Array<{ value: string; label: string; price: string }>
    > = {
      computers: [
        { value: "laptop-pro", label: "Professional Laptop", price: "$1,299" },
        { value: "desktop-gaming", label: "Gaming Desktop", price: "$2,499" },
        { value: "tablet-air", label: "Air Tablet", price: "$599" },
      ],
      phones: [
        { value: "smartphone-x", label: "Smartphone X", price: "$899" },
        { value: "basic-phone", label: "Basic Phone", price: "$199" },
        { value: "rugged-phone", label: "Rugged Phone", price: "$399" },
      ],
    };

    const handleValueChange = (
      field: keyof typeof selectedValues,
      value: string
    ) => {
      const newValues = { ...selectedValues, [field]: value };

      // Clear dependent fields
      if (field === "category") {
        newValues.subcategory = "";
        newValues.item = "";
      } else if (field === "subcategory") {
        newValues.item = "";
      }

      setSelectedValues(newValues);

      // Add to history
      setHistory((prev) =>
        [
          ...prev,
          {
            action: `Selected ${field}`,
            value: value,
            timestamp: new Date().toLocaleTimeString(),
          },
        ].slice(-10)
      ); // Keep last 10 entries
    };

    const handleOpenChange = (field: keyof typeof isOpen, open: boolean) => {
      setIsOpen((prev) => ({ ...prev, [field]: open }));

      if (open) {
        setHistory((prev) =>
          [
            ...prev,
            {
              action: `Opened ${field} dropdown`,
              value: "",
              timestamp: new Date().toLocaleTimeString(),
            },
          ].slice(-10)
        );
      }
    };

    const resetSelection = () => {
      setSelectedValues({ category: "", subcategory: "", item: "" });
      setHistory((prev) =>
        [
          ...prev,
          {
            action: "Reset all selections",
            value: "",
            timestamp: new Date().toLocaleTimeString(),
          },
        ].slice(-10)
      );
    };

    const availableSubcategories = selectedValues.category
      ? subcategories[selectedValues.category] || []
      : [];
    const availableItems = selectedValues.subcategory
      ? items[selectedValues.subcategory] || []
      : [];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced State Management & Cascading Selects
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Category Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                Category
                {isOpen.category && (
                  <Badge variant="secondary" className="text-xs">
                    Open
                  </Badge>
                )}
              </label>
              <Select
                value={selectedValues.category}
                onValueChange={(value) => handleValueChange("category", value)}
                open={isOpen.category}
                onOpenChange={(open) => handleOpenChange("category", open)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Subcategory Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                Subcategory
                {isOpen.subcategory && (
                  <Badge variant="secondary" className="text-xs">
                    Open
                  </Badge>
                )}
              </label>
              <Select
                value={selectedValues.subcategory}
                onValueChange={(value) =>
                  handleValueChange("subcategory", value)
                }
                disabled={!selectedValues.category}
                open={isOpen.subcategory}
                onOpenChange={(open) => handleOpenChange("subcategory", open)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={
                      selectedValues.category
                        ? "Choose subcategory"
                        : "Select category first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {availableSubcategories.map((subcategory) => (
                    <SelectItem
                      key={subcategory.value}
                      value={subcategory.value}
                    >
                      {subcategory.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Item Select */}
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                Item
                {isOpen.item && (
                  <Badge variant="secondary" className="text-xs">
                    Open
                  </Badge>
                )}
              </label>
              <Select
                value={selectedValues.item}
                onValueChange={(value) => handleValueChange("item", value)}
                disabled={!selectedValues.subcategory}
                open={isOpen.item}
                onOpenChange={(open) => handleOpenChange("item", open)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue
                    placeholder={
                      selectedValues.subcategory
                        ? "Choose item"
                        : "Select subcategory first"
                    }
                  />
                </SelectTrigger>
                <SelectContent>
                  {availableItems.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      <div className="flex items-center justify-between w-full">
                        <span>{item.label}</span>
                        <span className="text-muted-foreground ml-2">
                          {item.price}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <Button onClick={resetSelection} variant="outline" size="sm">
              Reset All
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Current State */}
          <div>
            <h4 className="font-medium mb-3">Current Selection</h4>
            <div className="space-y-2 p-4 bg-muted rounded-lg">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Category:</span>
                <span
                  className={
                    selectedValues.category
                      ? "font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {selectedValues.category || "None selected"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subcategory:</span>
                <span
                  className={
                    selectedValues.subcategory
                      ? "font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {selectedValues.subcategory || "None selected"}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Item:</span>
                <span
                  className={
                    selectedValues.item
                      ? "font-medium"
                      : "text-muted-foreground"
                  }
                >
                  {selectedValues.item || "None selected"}
                </span>
              </div>

              {selectedValues.item &&
                availableItems.find(
                  (item) => item.value === selectedValues.item
                ) && (
                  <div className="mt-3 pt-3 border-t">
                    <div className="text-sm font-medium text-primary">
                      Selected:{" "}
                      {
                        availableItems.find(
                          (item) => item.value === selectedValues.item
                        )?.label
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Price:{" "}
                      {
                        availableItems.find(
                          (item) => item.value === selectedValues.item
                        )?.price
                      }
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Action History */}
          <div>
            <h4 className="font-medium mb-3">
              Action History ({history.length}/10)
            </h4>
            <div className="space-y-1 p-4 bg-muted rounded-lg max-h-48 overflow-y-auto">
              {history.length === 0 ? (
                <div className="text-sm text-muted-foreground text-center py-4">
                  No actions yet
                </div>
              ) : (
                history
                  .slice()
                  .reverse()
                  .map((entry, index) => (
                    <div
                      key={index}
                      className="text-xs p-2 bg-background rounded flex justify-between"
                    >
                      <span>
                        {entry.action} {entry.value && `"${entry.value}"`}
                      </span>
                      <span className="text-muted-foreground">
                        {entry.timestamp}
                      </span>
                    </div>
                  ))
              )}
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>• Controlled open/close state with onOpenChange</li>
            <li>• Cascading selections that reset dependent fields</li>
            <li>• Conditional disabling based on parent selection</li>
            <li>• Action history tracking with timestamps</li>
            <li>• Dynamic placeholder text based on state</li>
            <li>• Complex option rendering with multiple data points</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const PositioningAndCollisionHandling: Story = {
  render: function PositioningExample() {
    const [positioning, setPositioning] = useState({
      side: "bottom" as "top" | "right" | "bottom" | "left",
      align: "start" as "start" | "center" | "end",
      sideOffset: 0,
      alignOffset: 0,
      avoidCollisions: true,
      collisionPadding: 10,
    });

    const positioningOptions = {
      side: [
        { value: "top", label: "Top" },
        { value: "right", label: "Right" },
        { value: "bottom", label: "Bottom" },
        { value: "left", label: "Left" },
      ],
      align: [
        { value: "start", label: "Start" },
        { value: "center", label: "Center" },
        { value: "end", label: "End" },
      ],
    };

    const sampleOptions = Array.from({ length: 15 }, (_, i) => ({
      value: `option-${i}`,
      label: `Option ${i + 1}`,
      description: `Description for option ${i + 1}`,
    }));

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Positioning & Collision Detection
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Side</label>
              <Select
                value={positioning.side}
                onValueChange={(value) =>
                  setPositioning((prev) => ({
                    ...prev,
                    side: value as "top" | "right" | "bottom" | "left",
                  }))
                }
              >
                <SelectTrigger size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {positioningOptions.side.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Align</label>
              <Select
                value={positioning.align}
                onValueChange={(value) =>
                  setPositioning((prev) => ({
                    ...prev,
                    align: value as "start" | "center" | "end",
                  }))
                }
              >
                <SelectTrigger size="sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {positioningOptions.align.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Side Offset</label>
              <input
                type="range"
                min="-20"
                max="20"
                value={positioning.sideOffset}
                onChange={(e) =>
                  setPositioning((prev) => ({
                    ...prev,
                    sideOffset: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-xs text-center">
                {positioning.sideOffset}px
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Align Offset</label>
              <input
                type="range"
                min="-20"
                max="20"
                value={positioning.alignOffset}
                onChange={(e) =>
                  setPositioning((prev) => ({
                    ...prev,
                    alignOffset: Number(e.target.value),
                  }))
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-xs text-center">
                {positioning.alignOffset}px
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="avoid-collisions"
                checked={positioning.avoidCollisions}
                onChange={(e) =>
                  setPositioning((prev) => ({
                    ...prev,
                    avoidCollisions: e.target.checked,
                  }))
                }
              />
              <label htmlFor="avoid-collisions" className="text-sm">
                Avoid Collisions
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-sm">Collision Padding:</label>
              <input
                type="number"
                min="0"
                max="50"
                value={positioning.collisionPadding}
                onChange={(e) =>
                  setPositioning((prev) => ({
                    ...prev,
                    collisionPadding: Number(e.target.value),
                  }))
                }
                className="w-16 px-2 py-1 text-sm border rounded"
              />
              <span className="text-xs text-muted-foreground">px</span>
            </div>
          </div>
        </div>

        <div className="border-2 border-dashed border-muted p-8 rounded-lg relative min-h-96">
          <div className="absolute top-4 left-4 text-sm text-muted-foreground">
            Collision Boundary (Try positioning near edges)
          </div>

          <div className="flex items-center justify-center h-full">
            <div className="grid grid-cols-3 gap-8">
              {/* Top Row */}
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Top Left" />
                </SelectTrigger>
                <SelectContent
                  side={positioning.side}
                  align={positioning.align}
                  sideOffset={positioning.sideOffset}
                  alignOffset={positioning.alignOffset}
                  avoidCollisions={positioning.avoidCollisions}
                  collisionPadding={positioning.collisionPadding}
                >
                  {sampleOptions.slice(0, 5).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {option.description}
                        </div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Top Center" />
                </SelectTrigger>
                <SelectContent
                  side={positioning.side}
                  align={positioning.align}
                  sideOffset={positioning.sideOffset}
                  alignOffset={positioning.alignOffset}
                  avoidCollisions={positioning.avoidCollisions}
                  collisionPadding={positioning.collisionPadding}
                >
                  {sampleOptions.slice(5, 10).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Top Right" />
                </SelectTrigger>
                <SelectContent
                  side={positioning.side}
                  align={positioning.align}
                  sideOffset={positioning.sideOffset}
                  alignOffset={positioning.alignOffset}
                  avoidCollisions={positioning.avoidCollisions}
                  collisionPadding={positioning.collisionPadding}
                >
                  {sampleOptions.slice(10).map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Middle Row */}
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Center Left" />
                </SelectTrigger>
                <SelectContent
                  side={positioning.side}
                  align={positioning.align}
                  sideOffset={positioning.sideOffset}
                  alignOffset={positioning.alignOffset}
                  avoidCollisions={positioning.avoidCollisions}
                  collisionPadding={positioning.collisionPadding}
                >
                  {sampleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="w-40 h-10 bg-primary/10 rounded flex items-center justify-center text-sm font-medium text-primary">
                Main Select
              </div>

              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Center Right" />
                </SelectTrigger>
                <SelectContent
                  side={positioning.side}
                  align={positioning.align}
                  sideOffset={positioning.sideOffset}
                  alignOffset={positioning.alignOffset}
                  avoidCollisions={positioning.avoidCollisions}
                  collisionPadding={positioning.collisionPadding}
                >
                  {sampleOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 text-xs text-muted-foreground max-w-xs">
            Current settings: {positioning.side}/{positioning.align}, offset:{" "}
            {positioning.sideOffset},{positioning.alignOffset}, collisions:{" "}
            {positioning.avoidCollisions ? "avoid" : "ignore"}
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Positioning Features:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>side:</strong> Preferred side to render against trigger
            </li>
            <li>
              • <strong>align:</strong> Alignment relative to the trigger
            </li>
            <li>
              • <strong>sideOffset:</strong> Distance in pixels from trigger
            </li>
            <li>
              • <strong>alignOffset:</strong> Offset from start/end alignment
            </li>
            <li>
              • <strong>avoidCollisions:</strong> Auto-adjust when hitting
              boundaries
            </li>
            <li>
              • <strong>collisionPadding:</strong> Safety margin from boundary
              edges
            </li>
          </ul>
        </div>
      </div>
    );
  },
};
