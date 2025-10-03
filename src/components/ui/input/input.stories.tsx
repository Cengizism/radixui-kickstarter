import { Button } from "@/components/ui/button";
import { EyeOff, Mail, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A text input field for user data entry.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Appearance Props
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description:
        "The size variant of the input. Controls padding and text size.",
      table: {
        category: "Appearance Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    variant: {
      control: "select",
      options: ["default", "ghost", "destructive"],
      description:
        "The visual variant of the input. Controls border and background styling.",
      table: {
        category: "Appearance Props",
        type: { summary: '"default" | "ghost" | "destructive"' },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the input.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Input Props
    type: {
      control: "select",
      options: [
        "text",
        "email",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
      ],
      description:
        "The type of input field. Determines input behavior and validation.",
      table: {
        category: "Input Props",
        type: {
          summary:
            '"text" | "email" | "password" | "number" | "tel" | "url" | "search" | ...',
        },
        defaultValue: { summary: '"text"' },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text to show when the input is empty.",
      table: {
        category: "Input Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the input.",
      table: {
        category: "Input Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    defaultValue: {
      control: "text",
      description: "The default value of the input when uncontrolled.",
      table: {
        category: "Input Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    name: {
      control: "text",
      description: "The name attribute of the input for form submission.",
      table: {
        category: "Input Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    id: {
      control: "text",
      description:
        "The id attribute of the input for labeling and accessibility.",
      table: {
        category: "Input Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // State Props
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled. Prevents user interaction.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      control: "boolean",
      description:
        "Whether the input is read-only. Prevents editing but allows focus.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      control: "boolean",
      description: "Whether the input is required for form submission.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Validation Props
    pattern: {
      control: "text",
      description: "Regular expression pattern for input validation.",
      table: {
        category: "Validation Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    min: {
      control: "text",
      description: "Minimum value for number/date inputs.",
      table: {
        category: "Validation Props",
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
      },
    },
    max: {
      control: "text",
      description: "Maximum value for number/date inputs.",
      table: {
        category: "Validation Props",
        type: { summary: "string | number" },
        defaultValue: { summary: "undefined" },
      },
    },
    maxLength: {
      control: "number",
      description: "Maximum number of characters allowed.",
      table: {
        category: "Validation Props",
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
    minLength: {
      control: "number",
      description: "Minimum number of characters required.",
      table: {
        category: "Validation Props",
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Event Handlers
    onChange: {
      action: "onChange",
      description: "Event handler called when the input value changes.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.ChangeEvent<HTMLInputElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onFocus: {
      action: "onFocus",
      description: "Event handler called when the input receives focus.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.FocusEvent<HTMLInputElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onBlur: {
      action: "onBlur",
      description: "Event handler called when the input loses focus.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.FocusEvent<HTMLInputElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onKeyDown: {
      action: "onKeyDown",
      description: "Event handler called when a key is pressed down.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.KeyboardEvent<HTMLInputElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

// Different types
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="tel" placeholder="Phone number" />
      <Input type="url" placeholder="URL input" />
      <Input type="search" placeholder="Search input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different input types.",
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    placeholder: "Enter text...",
    type: "text",
    disabled: false,
    readOnly: false,
    required: false,
  },
};

// With labels and descriptions
export const WithLabels: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email
        </label>
        <Input type="email" placeholder="Enter your email" />
        <p className="text-sm text-muted-foreground">
          We'll never share your email.
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Password
        </label>
        <Input type="password" placeholder="Enter your password" />
        <p className="text-sm text-muted-foreground">
          Must be at least 8 characters.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with labels and helper text.",
      },
    },
  },
};

// Error states
export const ErrorStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Email
        </label>
        <Input
          type="email"
          placeholder="Enter your email"
          className="border-destructive focus-visible:ring-destructive/20"
          aria-invalid="true"
        />
        <p className="text-sm text-destructive">
          Please enter a valid email address.
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Password
        </label>
        <Input
          type="password"
          placeholder="Enter your password"
          variant="destructive"
          aria-invalid="true"
        />
        <p className="text-sm text-destructive">
          Password must be at least 8 characters long.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input error states with validation messages.",
      },
    },
  },
};

// File input
export const FileInput: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Upload File
        </label>
        <Input type="file" />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Upload Multiple Images
        </label>
        <Input type="file" accept="image/*" multiple />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "File input variants.",
      },
    },
  },
};

// With icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="relative">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-8" placeholder="Search..." />
      </div>

      <div className="relative">
        <Mail className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="email" className="pl-8" placeholder="Email address" />
      </div>

      <div className="relative">
        <Input type="password" className="pr-8" placeholder="Password" />
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-0 text-muted-foreground hover:text-foreground"
        >
          <EyeOff className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with icons and interactive elements.",
      },
    },
  },
};
