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
