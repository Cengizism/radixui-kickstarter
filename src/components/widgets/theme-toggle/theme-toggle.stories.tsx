import { SimpleThemeToggle, ThemeToggle } from "./theme-toggle";
import { ThemeProvider } from "./theme-provider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Widgets/ThemeToggle",
  component: ThemeToggle,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A theme toggle component that allows users to switch between light, dark, and system themes. Built with next-themes and includes smooth transitions.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ThemeToggle />,
};

export const SimpleToggle: Story = {
  render: () => <SimpleThemeToggle />,
  parameters: {
    docs: {
      description: {
        story:
          "A simple theme toggle that cycles through light → dark → system themes.",
      },
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="space-y-6 w-full max-w-2xl">
      {/* Header with theme toggle */}
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div>
          <h3 className="text-lg font-semibold">Application Header</h3>
          <p className="text-sm text-muted-foreground">
            Example usage in a header
          </p>
        </div>
        <ThemeToggle />
      </div>

      {/* Sample content to show theme effect */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Preview</CardTitle>
          <CardDescription>
            This content adapts to the selected theme automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="p-3 bg-muted rounded">
              <p className="text-sm">Muted background content</p>
            </div>
            <div className="p-3 bg-accent rounded">
              <p className="text-sm">Accent background content</p>
            </div>
            <div className="p-3 border rounded">
              <p className="text-sm">Border content</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Example of theme toggle used in context with other UI elements showing the theme effects.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Dropdown style:</span>
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Simple toggle:</span>
        <SimpleThemeToggle />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Both available theme toggle variants side by side.",
      },
    },
  },
};
