import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input/input';
import { SimpleThemeToggle, ThemeSelect, ThemeToggle } from './theme-toggle';
import { ThemeProvider } from './theme-provider';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip/tooltip";
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
          "A simple theme toggle that switches only between light and dark themes. Shows the opposite icon of the theme it will activate (moon when light is active, sun when dark is active).",
      },
    },
  },
};

export const ThemeDisplay: Story = {
  render: () => (
    <div className="p-8 space-y-8 bg-background text-foreground max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Theme System Test</h1>
        <ThemeToggle />
      </div>

      {/* Color Palette Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Theme Color Palette
          </CardTitle>
          <CardDescription>
            Testing all theme colors and their proper contrast ratios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Primary Colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Primary</h4>
              <div className="bg-primary text-primary-foreground p-3 rounded text-center text-sm">
                Primary
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Secondary</h4>
              <div className="bg-secondary text-secondary-foreground p-3 rounded text-center text-sm">
                Secondary
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Accent</h4>
              <div className="bg-accent text-accent-foreground p-3 rounded text-center text-sm">
                Accent
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Muted</h4>
              <div className="bg-muted text-muted-foreground p-3 rounded text-center text-sm">
                Muted
              </div>
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Success</h4>
              <div className="bg-success text-success-foreground p-3 rounded text-center text-sm">
                Success
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Warning</h4>
              <div className="bg-warning text-warning-foreground p-3 rounded text-center text-sm">
                Warning
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Info</h4>
              <div className="bg-info text-info-foreground p-3 rounded text-center text-sm">
                Info
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm">Destructive</h4>
              <div className="bg-destructive text-destructive-foreground p-3 rounded text-center text-sm">
                Destructive
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Component Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </CardContent>
        </Card>

        {/* Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Default input" />
            <Input placeholder="Ghost input" variant="ghost" />
            <Input placeholder="Destructive input" variant="destructive" />
            <div className="space-y-2">
              <span className="text-sm font-medium">Theme select:</span>
              <ThemeSelect label="Choose Theme" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Popovers and Tooltips */}
      <TooltipProvider>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Popovers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Default Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <p>This is a default popover using theme colors.</p>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Success Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="success">
                    <p>This is a success popover.</p>
                  </PopoverContent>
                </Popover>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Warning Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent variant="warning">
                    <p>This is a warning popover.</p>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tooltips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Default Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Default tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Light Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent variant="light">
                    <p>Light tooltip</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Dark Tooltip</Button>
                  </TooltipTrigger>
                  <TooltipContent variant="dark">
                    <p>Dark tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        </div>
      </TooltipProvider>

      {/* Semantic Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Semantic Elements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Surface Tests */}
      <Card>
        <CardHeader>
          <CardTitle>Surface Hierarchy</CardTitle>
          <CardDescription>
            Testing different surface levels and their contrast
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-background border p-4 rounded">
              Background Surface
              <div className="bg-background border p-3 rounded mt-2">
                Card Surface
                <div className="bg-muted p-2 rounded mt-2">
                  Muted Surface
                  <div className="bg-accent p-2 rounded mt-2">
                    Accent Surface
                  </div>
                </div>
              </div>
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
          "Comprehensive theme testing display showing all colors, variants, and components with proper theme integration.",
      },
    },
  },
};

export const FormSelect: Story = {
  render: () => (
    <div className="max-w-sm">
      <ThemeSelect />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Theme select component for forms and settings pages with proper label and select dropdown.",
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 max-w-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Icon with dropdown:</span>
        <ThemeToggle />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Simple toggle (light/dark):</span>
        <SimpleThemeToggle />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium">Form select:</span>
        <ThemeSelect label="Choose Theme" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All three theme toggle variants: icon with dropdown menu, simple light/dark toggle, and form select component.",
      },
    },
  },
};
