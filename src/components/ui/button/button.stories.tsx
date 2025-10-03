import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Info, Loader2, X } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A clickable button element that triggers an action.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Appearance Props
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description:
        "The visual variant of the button. Controls color scheme and styling.",
      table: {
        category: "Appearance Props",
        type: {
          summary:
            '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"default"' },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description:
        "The size variant of the button. Controls padding and text size.",
      table: {
        category: "Appearance Props",
        type: { summary: '"default" | "sm" | "lg" | "icon"' },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the button.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Content Props
    children: {
      control: "text",
      description:
        "The content of the button. Can be text, icons, or other React elements.",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child. Merges props and behavior.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // State Props
    disabled: {
      control: "boolean",
      description:
        "Whether the button is disabled. Prevents interaction and applies disabled styling.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Event Handlers
    onClick: {
      action: "clicked",
      description: "Function to call when button is clicked.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onMouseEnter: {
      action: "mouseEnter",
      description: "Function to call when mouse enters the button.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onMouseLeave: {
      action: "mouseLeave",
      description: "Function to call when mouse leaves the button.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.MouseEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onFocus: {
      action: "focus",
      description: "Function to call when button receives focus.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.FocusEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onBlur: {
      action: "blur",
      description: "Function to call when button loses focus.",
      table: {
        category: "Event Handlers",
        type: {
          summary: "(event: React.FocusEvent<HTMLButtonElement>) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },

    // HTML Props
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "The type of the button element.",
      table: {
        category: "HTML Props",
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
      },
    },
    form: {
      control: "text",
      description: "Associates the button with a form element by id.",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    title: {
      control: "text",
      description: "Tooltip text to display on hover.",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    tabIndex: {
      control: "number",
      description: "The tab order of the button for keyboard navigation.",
      table: {
        category: "HTML Props",
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground for testing different button configurations
export const Playground: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
    asChild: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different button configurations, variants, sizes, and states.",
      },
    },
  },
};

// Default story
export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
  },
};

// Icon buttons
export const Icon: Story = {
  args: {
    size: "icon",
    children: <Info className="h-4 w-4" />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only button with size="icon".',
      },
    },
  },
};

// With icons
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button>
        <CheckCircle className="h-4 w-4 mr-2" />
        With Icon
      </Button>
      <Button variant="outline">
        <X className="h-4 w-4 mr-2" />
        Delete
      </Button>
      <Button variant="secondary">
        Download
        <Download className="h-4 w-4 ml-2" />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Buttons with icons. Icons can be placed before or after the text.",
      },
    },
  },
};

// As child
export const AsChild: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button asChild>
        <a href="#" className="no-underline">
          Link Button
        </a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#" className="no-underline">
          Outline Link
        </a>
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Button rendered as different elements using the asChild prop.",
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button disabled>
        <Loader2 className="h-4 w-4 animate-spin mr-2" />
        Loading...
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="h-4 w-4 animate-spin mr-2" />
        Please wait
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Loading state buttons with spinner icons.",
      },
    },
  },
};
