import { Input } from '@/components/ui/input';
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
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "The type of input",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size of the input",
    },
    variant: {
      control: "select",
      options: ["default", "ghost", "destructive"],
      description: "The visual variant of the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
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

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input className="h-8 px-2 text-xs" placeholder="Small input" />
      <Input placeholder="Default input" />
      <Input className="h-12 px-4" placeholder="Large input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input size variants.",
      },
    },
  },
};

// Variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="ghost" placeholder="Ghost variant" />
      <Input variant="destructive" placeholder="Destructive variant" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Input variants.",
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input placeholder="Normal state" />
      <Input disabled placeholder="Disabled state" />
      <Input required placeholder="Required field" />
      <Input defaultValue="Read only" readOnly />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different input states.",
      },
    },
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
        <svg
          className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <Input className="pl-8" placeholder="Search..." />
      </div>

      <div className="relative">
        <Input type="email" className="pl-8" placeholder="Email address" />
        <svg
          className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>

      <div className="relative">
        <Input type="password" className="pr-8" placeholder="Password" />
        <button
          type="button"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76502C0.902945 9.08329 2.02314 10.1649 3.36061 10.9068L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76502C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.91674 12.9769 4.83517 11.6394 4.09324L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
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
