import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Info,
  PlusCircle,
  X
  } from 'lucide-react';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A small status indicator or label element.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Appearance Props
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description:
        "The visual variant of the badge. Controls color scheme and styling.",
      table: {
        category: "Appearance Props",
        type: {
          summary: '"default" | "secondary" | "destructive" | "outline"',
        },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the badge.",
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
        "The content of the badge. Can be text, numbers, or other React elements.",
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

    // HTML Props
    role: {
      control: "text",
      description: "ARIA role attribute for accessibility.",
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
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
};

// With icons
export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">
        <CheckCircle className="w-3 h-3 mr-1" />
        Verified
      </Badge>
      <Badge variant="secondary">
        <PlusCircle className="w-3 h-3 mr-1" />
        New
      </Badge>
      <Badge variant="destructive">
        <X className="w-3 h-3 mr-1" />
        Error
      </Badge>
      <Badge variant="outline">
        <Info className="w-3 h-3 mr-1" />
        Info
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges with icons to provide additional visual context.",
      },
    },
  },
};

// As link
export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default" asChild>
        <a href="#" className="cursor-pointer">
          Clickable Default
        </a>
      </Badge>
      <Badge variant="secondary" asChild>
        <a href="#" className="cursor-pointer">
          Clickable Secondary
        </a>
      </Badge>
      <Badge variant="outline" asChild>
        <a href="#" className="cursor-pointer">
          Clickable Outline
        </a>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Badges can be rendered as links using the asChild prop.",
      },
    },
  },
};
