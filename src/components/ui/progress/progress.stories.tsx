import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useEffect, useMemo, useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "UI/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays an indicator showing the completion progress of a task. Built with Radix UI primitives for accessibility and screen reader support. Supports determinate and indeterminate states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Root Props
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description:
        "The progress value. Can be null or undefined for indeterminate state. When provided, should be between 0 and max.",
      table: {
        category: "Root",
      },
    },
    max: {
      control: { type: "number", min: 1, max: 200, step: 1 },
      description:
        "The maximum progress value. Used to calculate the percentage when value is provided.",
      table: {
        category: "Root",
      },
    },
    getValueLabel: {
      control: false,
      description:
        "A function to get the accessible label text representing the current value in a human-readable format.",
      table: {
        category: "Root",
        type: { summary: "(value: number, max: number) => string" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Root",
      },
    },

    // Custom Style Props
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description:
        "Controls the height of the progress bar for different visual hierarchy needs.",
      table: {
        category: "Styling",
      },
    },
    variant: {
      control: "select",
      options: ["default", "square", "rounded"],
      description: "Controls the corner radius styling of the progress bar.",
      table: {
        category: "Styling",
      },
    },
    color: {
      control: "select",
      options: ["default", "secondary", "success", "warning", "danger", "info"],
      description:
        "Controls the color theme of the progress indicator to convey different states or meanings.",
      table: {
        category: "Styling",
      },
    },

    // Enhanced Props
    animated: {
      control: "boolean",
      description:
        "Whether to animate progress changes with smooth transitions.",
      table: {
        category: "Enhancement",
      },
    },
    showLabel: {
      control: "boolean",
      description:
        "Whether to display automatic percentage or custom label text.",
      table: {
        category: "Enhancement",
      },
    },
    label: {
      control: "text",
      description:
        "Custom label text that overrides the automatic percentage display.",
      table: {
        category: "Enhancement",
      },
    },
    formatLabel: {
      control: false,
      description:
        "Function to customize the label format when showLabel is true.",
      table: {
        category: "Enhancement",
        type: { summary: "(value: number, max: number) => string" },
      },
    },

    // Accessibility Props
    "aria-label": {
      control: "text",
      description:
        "Accessible label for the progress bar when no visible label is present.",
      table: {
        category: "Accessibility",
      },
    },
    "aria-describedby": {
      control: "text",
      description:
        "Reference to elements that provide additional description for the progress bar.",
      table: {
        category: "Accessibility",
      },
    },
    "aria-labelledby": {
      control: "text",
      description: "Reference to elements that label the progress bar.",
      table: {
        category: "Accessibility",
      },
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

// Advanced accessibility features
export const AccessibilityFeatures: Story = {
  render: () => (
    <div className="w-80 space-y-8">
      <div className="space-y-2">
        <div className="text-sm font-medium" id="file-progress-label">
          File Upload Progress
        </div>
        <div className="text-xs text-muted-foreground" id="file-progress-desc">
          Uploading document.pdf (3.2 MB) - 45% complete
        </div>
        <Progress
          value={45}
          aria-labelledby="file-progress-label"
          aria-describedby="file-progress-desc"
          getValueLabel={(value, max) =>
            `${value} percent of ${max} percent complete`
          }
        />
      </div>

      <div className="space-y-2">
        <Progress
          value={72}
          aria-label="System backup progress"
          getValueLabel={(value) => `Backup ${value} percent complete`}
          color="info"
        />
        <div className="text-xs text-muted-foreground">
          Custom aria-label for screen readers when no visible label
        </div>
      </div>

      <div className="space-y-2">
        <Progress
          value={null}
          aria-label="Loading content, please wait"
          color="secondary"
        />
        <div className="text-xs text-muted-foreground">
          Indeterminate progress with accessible loading message
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Progress bars with proper ARIA labels and descriptions for screen reader accessibility.",
      },
    },
  },
};

// Custom value formatting and labeling
export const CustomFormatting: Story = {
  render: function CustomFormattingExample() {
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [uploadBytes, setUploadBytes] = useState(0);
    const [processingItems, setProcessingItems] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setDownloadProgress((prev) => Math.min(prev + Math.random() * 3, 100));
        setUploadBytes((prev) =>
          Math.min(prev + Math.random() * 50000, 2500000)
        );
        setProcessingItems((prev) => Math.min(prev + Math.random() * 2, 150));
      }, 200);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="w-80 space-y-6">
        <div className="space-y-2">
          <div className="text-sm font-medium">Download Speed</div>
          <Progress
            value={downloadProgress}
            showLabel
            formatLabel={(value) => `${value.toFixed(1)}%`}
            getValueLabel={(value) =>
              `Download ${value.toFixed(1)} percent complete`
            }
            color="info"
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">File Upload</div>
          <Progress
            value={uploadBytes}
            max={2500000}
            showLabel
            formatLabel={(value, max) => {
              const mbValue = (value / 1000000).toFixed(1);
              const mbMax = (max / 1000000).toFixed(1);
              return `${mbValue} MB / ${mbMax} MB`;
            }}
            getValueLabel={(value, max) => {
              const percent = Math.round((value / max) * 100);
              return `Uploaded ${(value / 1000000).toFixed(1)} megabytes of ${(max / 1000000).toFixed(1)} megabytes, ${percent} percent complete`;
            }}
            color="success"
          />
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium">Items Processed</div>
          <Progress
            value={processingItems}
            max={150}
            showLabel
            formatLabel={(value, max) => `${Math.floor(value)} / ${max} items`}
            getValueLabel={(value, max) =>
              `Processed ${Math.floor(value)} of ${max} items`
            }
            color="warning"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Custom formatting functions for different data types and units with proper accessibility labels.",
      },
    },
  },
};

// Multi-step process indicator
export const MultiStepProcess: Story = {
  render: function MultiStepExample() {
    const [currentStep, setCurrentStep] = useState(0);
    const [stepProgress, setStepProgress] = useState(0);

    const steps = useMemo(
      () => [
        { name: "Validation", duration: 2000 },
        { name: "Processing", duration: 4000 },
        { name: "Optimization", duration: 3000 },
        { name: "Deployment", duration: 2500 },
        { name: "Verification", duration: 1500 },
      ],
      []
    );

    useEffect(() => {
      if (currentStep >= steps.length) return;

      const stepDuration = steps[currentStep].duration;
      const increment = 100 / (stepDuration / 50); // 50ms intervals

      const timer = setInterval(() => {
        setStepProgress((prev) => {
          if (prev >= 100) {
            setCurrentStep((curr) => curr + 1);
            return 0;
          }
          return prev + increment;
        });
      }, 50);

      return () => clearInterval(timer);
    }, [currentStep, steps]);

    const overallProgress =
      currentStep >= steps.length
        ? 100
        : (currentStep * 100 + stepProgress) / steps.length;

    return (
      <div className="w-80 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium">Overall Progress</div>
            <div className="text-xs text-muted-foreground">
              Step {Math.min(currentStep + 1, steps.length)} of {steps.length}
            </div>
          </div>
          <Progress
            value={overallProgress}
            showLabel
            color={overallProgress === 100 ? "success" : "info"}
            getValueLabel={(value) =>
              `Overall progress ${value.toFixed(0)} percent complete`
            }
          />
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            let stepStatus: "pending" | "active" | "completed";
            let stepValue: number | null;
            let stepColor: "default" | "info" | "success";

            if (index < currentStep) {
              stepStatus = "completed";
              stepValue = 100;
              stepColor = "success";
            } else if (index === currentStep) {
              stepStatus = "active";
              stepValue = stepProgress;
              stepColor = "info";
            } else {
              stepStatus = "pending";
              stepValue = 0;
              stepColor = "default";
            }

            return (
              <div key={step.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        stepStatus === "completed"
                          ? "bg-green-500"
                          : stepStatus === "active"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        stepStatus === "active" ? "font-medium" : ""
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  <Badge
                    variant={
                      stepStatus === "completed"
                        ? "default"
                        : stepStatus === "active"
                          ? "secondary"
                          : "outline"
                    }
                    className="text-xs"
                  >
                    {stepStatus === "completed"
                      ? "Done"
                      : stepStatus === "active"
                        ? "Running"
                        : "Pending"}
                  </Badge>
                </div>
                <Progress
                  value={stepValue}
                  color={stepColor}
                  size="sm"
                  getValueLabel={(value) =>
                    `${step.name} step ${value?.toFixed(0) || 0} percent complete`
                  }
                />
              </div>
            );
          })}
        </div>

        {overallProgress === 100 && (
          <div className="p-3 bg-green-50 rounded-lg">
            <div className="text-sm font-medium text-green-800">
              ✅ Process Complete
            </div>
            <div className="text-xs text-green-600">
              All steps have been successfully completed.
            </div>
          </div>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complex multi-step process with individual step progress and overall completion tracking.",
      },
    },
  },
};
