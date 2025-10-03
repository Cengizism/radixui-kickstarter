import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Filter, Plus, Search, Settings } from "lucide-react";
import { Header } from "./header";
import { Separator } from "@/components/ui/separator";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Layout/Header",
  component: Header,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A flexible header component for displaying page titles and descriptions with optional right-aligned actions. Built with semantic HTML and accessibility in mind.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title displayed in the header.",
      table: {
        category: "Content Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    description: {
      control: "text",
      description: "Optional description text displayed below the title.",
      table: {
        category: "Content Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    actions: {
      control: false,
      description: "Right-aligned actions like badges, buttons, or toolbars.",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the header element.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    children: {
      control: false,
      description: "Custom content to display below the header row.",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground
export const Playground: Story = {
  args: {
    title: "Dashboard",
    description: "Welcome to your dashboard overview",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different header configurations.",
      },
    },
  },
};

// Default story with title only
export const Default: Story = {
  args: {
    title: "Page Title",
  },
  parameters: {
    docs: {
      description: {
        story: "Basic header with just a title.",
      },
    },
  },
};

// With description
export const WithDescription: Story = {
  args: {
    title: "Dashboard",
    description: "Here's what's happening with your projects today.",
  },
  parameters: {
    docs: {
      description: {
        story: "Header with both title and description text.",
      },
    },
  },
};

// With single action
export const WithSingleAction: Story = {
  render: () => (
    <Header
      title="Projects"
      description="Manage your project portfolio"
      actions={
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Header with a single action button on the right side.",
      },
    },
  },
};

// With badge actions
export const WithBadgeActions: Story = {
  render: () => (
    <Header
      title="Team Dashboard"
      description="Monitor team activity and performance"
      actions={
        <div className="flex items-center gap-2">
          <Badge variant="secondary">12 Active</Badge>
          <Badge variant="outline">3 Pending</Badge>
        </div>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Header with status badges showing key metrics.",
      },
    },
  },
};

// With button group
export const WithButtonGroup: Story = {
  render: () => (
    <Header
      title="Data Analysis"
      description="View and analyze your data insights"
      actions={
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Header with a toolbar containing multiple action buttons and a separator.",
      },
    },
  },
};

// With mixed actions
export const WithMixedActions: Story = {
  render: () => (
    <Header
      title="Search Results"
      description="Found 127 items matching your criteria"
      actions={
        <div className="flex items-center gap-3">
          <Badge variant="secondary">127 results</Badge>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Export All
            </Button>
          </div>
        </div>
      }
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Header with mixed action types: badge + icon buttons + text button.",
      },
    },
  },
};

// Long title and description
export const LongContent: Story = {
  args: {
    title: "Very Long Page Title That Might Wrap to Multiple Lines",
    description:
      "This is a much longer description that demonstrates how the header component handles extended text content and maintains proper spacing and readability even with more verbose content.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Header with longer title and description to show text wrapping behavior.",
      },
    },
  },
};

// Empty header (no content)
export const Empty: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Empty header component with no title or description.",
      },
    },
  },
};

// Custom content with children
export const WithCustomChildren: Story = {
  render: () => (
    <Header
      title="Advanced Dashboard"
      description="Real-time monitoring and analytics"
      actions={
        <Button variant="outline">
          <Settings className="h-4 w-4 mr-2" />
          Configure
        </Button>
      }
    >
      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <p className="text-sm text-muted-foreground">
          Additional content area below the header. This can contain tabs,
          filters, or any other supplementary information.
        </p>
      </div>
    </Header>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Header with actions and additional content area using children prop.",
      },
    },
  },
};

// Different styling variations
export const Variations: Story = {
  render: () => (
    <div className="space-y-8 w-full">
      <Header title="Default Style" description="Standard header appearance" />

      <Header
        title="With Custom Styling"
        description="Header with additional CSS classes"
        className="border-l-4 border-primary pl-4"
      />

      <Header
        title="Centered Header"
        description="Center-aligned header content"
        className="text-center"
      />

      <Header
        title="Compact Header"
        description="Tighter spacing between elements"
        className="space-y-1"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different styling variations of the header component.",
      },
    },
  },
};
