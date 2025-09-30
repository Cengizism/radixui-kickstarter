import { Badge } from '../badge/badge';
import { Button } from './button';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Progress } from './progress';
import { useEffect, useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description:
        "The progress value. Use null/undefined for indeterminate state",
    },
    max: {
      control: { type: "number", min: 1, max: 200, step: 1 },
      description: "The maximum progress value",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "Controls the height of the progress bar",
    },
    variant: {
      control: "select",
      options: ["default", "square", "rounded"],
      description: "Controls the corner radius of the progress bar",
    },
    color: {
      control: "select",
      options: ["default", "secondary", "success", "warning", "danger", "info"],
      description: "Controls the color of the progress indicator",
    },
    animated: {
      control: "boolean",
      description: "Whether to animate progress changes",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show automatic percentage label",
    },
    label: {
      control: "text",
      description: "Custom label text (overrides automatic label)",
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    value: 60,
  },
};

// Basic usage
export const BasicUsage: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <div className="text-sm font-medium">25% Complete</div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">50% Complete</div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">75% Complete</div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">100% Complete</div>
        <Progress value={100} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Simple progress bars showing different completion levels.",
      },
    },
  },
};

// Size variants
export const Sizes: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <div className="text-sm font-medium">Small Progress (1px)</div>
        <Progress value={60} size="sm" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Default Progress (2px)</div>
        <Progress value={60} size="default" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Large Progress (3px)</div>
        <Progress value={60} size="lg" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Extra Large Progress (4px)</div>
        <Progress value={60} size="xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different progress bar heights for various use cases.",
      },
    },
  },
};

// Shape variants
export const ShapeVariants: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <div className="text-sm font-medium">Rounded (Default)</div>
        <Progress value={45} variant="default" size="lg" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Square Corners</div>
        <Progress value={45} variant="square" size="lg" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Rounded Corners</div>
        <Progress value={45} variant="rounded" size="lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different corner radius options for progress bars.",
      },
    },
  },
};

// Color variants
export const ColorVariants: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <div className="text-sm font-medium">Default</div>
        <Progress value={70} color="default" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Success</div>
        <Progress value={85} color="success" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Warning</div>
        <Progress value={45} color="warning" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Danger</div>
        <Progress value={25} color="danger" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Info</div>
        <Progress value={60} color="info" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Secondary</div>
        <Progress value={55} color="secondary" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different colors to convey status or importance.",
      },
    },
  },
};

// With labels
export const WithLabels: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <Progress value={42} showLabel />
      <Progress value={150} max={200} showLabel label="File Upload" />
      <Progress
        value={75}
        showLabel
        formatLabel={(value, max) => `${value}/${max} items processed`}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Progress bars with automatic or custom labels.",
      },
    },
  },
};

// Animated progress
export const AnimatedProgress: Story = {
  render: function AnimatedExample() {
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (!isAnimating) return;

      const timer = setInterval(() => {
        setAnimatedProgress((prev) => {
          if (prev >= 100) {
            setIsAnimating(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [isAnimating]);

    const startAnimation = () => {
      setAnimatedProgress(0);
      setIsAnimating(true);
    };

    const pauseAnimation = () => {
      setIsAnimating(false);
    };

    const resetAnimation = () => {
      setAnimatedProgress(0);
      setIsAnimating(false);
    };

    return (
      <div className="w-80 space-y-4">
        <Progress
          value={animatedProgress}
          showLabel
          label="Processing..."
          color={animatedProgress === 100 ? "success" : "info"}
        />
        <div className="flex gap-2">
          <Button onClick={startAnimation} disabled={isAnimating} size="sm">
            <Play className="mr-2 h-3 w-3" />
            Start
          </Button>
          <Button
            onClick={pauseAnimation}
            disabled={!isAnimating}
            variant="outline"
            size="sm"
          >
            <Pause className="mr-2 h-3 w-3" />
            Pause
          </Button>
          <Button onClick={resetAnimation} variant="outline" size="sm">
            <RotateCcw className="mr-2 h-3 w-3" />
            Reset
          </Button>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Interactive progress bar with animation controls.",
      },
    },
  },
};

// Indeterminate progress
export const IndeterminateProgress: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <div className="text-sm font-medium">Loading...</div>
        <Progress value={null} />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Processing data...</div>
        <Progress value={undefined} color="info" />
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium">Syncing files...</div>
        <Progress value={null} color="success" size="lg" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Progress bars with unknown completion time showing pulsing animation.",
      },
    },
  },
};

// Real-world example
export const RealWorldExample: Story = {
  render: function UploadExample() {
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => setUploadProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="w-80 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">document.pdf</span>
            <span className="text-xs text-muted-foreground">2.4 MB</span>
          </div>
          <Progress
            value={uploadProgress}
            color={uploadProgress === 100 ? "success" : "info"}
            formatLabel={(value) => `${value}% uploaded`}
            showLabel
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "File upload simulation with animated progress.",
      },
    },
  },
};

// Complex example with multiple states
export const MultipleStates: Story = {
  render: () => (
    <div className="w-80 space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="text-xs">
            Completed
          </Badge>
          <span className="text-sm font-medium">Database Migration</span>
        </div>
        <Progress value={100} color="success" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            In Progress
          </Badge>
          <span className="text-sm font-medium">Code Compilation</span>
        </div>
        <Progress value={73} color="info" showLabel />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs">
            Warning
          </Badge>
          <span className="text-sm font-medium">Disk Space</span>
        </div>
        <Progress
          value={89}
          color="warning"
          showLabel
          formatLabel={(value) => `${value}% used`}
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="destructive" className="text-xs">
            Critical
          </Badge>
          <span className="text-sm font-medium">Memory Usage</span>
        </div>
        <Progress value={95} color="danger" showLabel />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            Loading
          </Badge>
          <span className="text-sm font-medium">Network Sync</span>
        </div>
        <Progress value={null} color="info" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple progress indicators showing different states and statuses.",
      },
    },
  },
};
