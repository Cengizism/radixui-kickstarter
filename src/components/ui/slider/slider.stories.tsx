import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "../input/input";
import { Label } from "../label/label";
import { Slider } from "@/components/ui/slider";
import {
  VolumeX,
  Volume2,
  Moon,
  Sun,
  Snowflake,
  Flame,
  SkipBack,
  Play,
  SkipForward,
} from "lucide-react";

export default {
  title: "UI/Slider",
  component: Slider,
  docs: {
    description: {
      component:
        "A slider component for selecting numeric values from a range. Built with Radix UI primitives for accessibility and keyboard navigation.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    defaultValue: {
      control: "object",
      description:
        "The value of the slider when initially rendered. Use when you do not need to control the state of the slider.",
      table: {
        category: "Root Props",
        type: { summary: "number[]" },
      },
    },
    value: {
      control: "object",
      description:
        "The controlled value of the slider. Must be used in conjunction with onValueChange.",
      table: {
        category: "Root Props",
        type: { summary: "number[]" },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Event handler called when the slider value changes.",
      table: {
        category: "Root Props",
        type: { summary: "(value: number[]) => void" },
      },
    },
    onValueCommit: {
      action: "onValueCommit",
      description:
        "Event handler called when the user is done selecting a new value (e.g. when user releases the mouse button or stops dragging).",
      table: {
        category: "Root Props",
        type: { summary: "(value: number[]) => void" },
      },
    },
    name: {
      control: "text",
      description:
        "The name of the slider. Submitted with its owning form as part of a name/value pair.",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the slider.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the slider.",
      table: {
        category: "Root Props",
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the slider. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      table: {
        category: "Root Props",
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    inverted: {
      control: "boolean",
      description: "Whether the slider is visually inverted.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    min: {
      control: { type: "number", min: -1000, max: 1000, step: 1 },
      description: "The minimum value for the range.",
      table: {
        category: "Root Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    max: {
      control: { type: "number", min: 0, max: 10000, step: 10 },
      description: "The maximum value for the range.",
      table: {
        category: "Root Props",
        type: { summary: "number" },
        defaultValue: { summary: "100" },
      },
    },
    step: {
      control: { type: "number", min: 0.01, max: 100, step: 0.01 },
      description: "The stepping interval.",
      table: {
        category: "Root Props",
        type: { summary: "number" },
        defaultValue: { summary: "1" },
      },
    },
    minStepsBetweenThumbs: {
      control: "number",
      description: "The minimum permitted steps between multiple thumbs.",
      table: {
        category: "Root Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Track Props
    trackAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the track to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Track Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Range Props
    rangeAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the range to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Range Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Thumb Props
    thumbAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the thumb to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Thumb Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Custom Style Props
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the slider components",
      table: {
        category: "Custom Style Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive"],
      description: "The visual style variant of the slider",
      table: {
        category: "Custom Style Props",
        type: { summary: '"default" | "secondary" | "destructive"' },
        defaultValue: { summary: '"default"' },
      },
    },
  },
};

// Default slider
export const Default = () => (
  <div className="w-full max-w-md space-y-3">
    <Label>Default Slider</Label>
    <Slider defaultValue={[50]} max={100} step={1} />
    <div className="flex justify-between text-sm text-muted-foreground">
      <span>0</span>
      <span>100</span>
    </div>
  </div>
);

// Range slider (multiple values)
export const RangeSlider = () => {
  const [range, setRange] = useState([20, 80]);

  return (
    <div className="w-full max-w-md space-y-3">
      <Label>Range Slider</Label>
      <Slider value={range} onValueChange={setRange} max={100} step={1} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>0</span>
        <span>100</span>
      </div>
      <div className="text-center text-sm">
        Selected range:{" "}
        <strong>
          {range[0]} - {range[1]}
        </strong>
      </div>
    </div>
  );
};

// Different step sizes
export const StepSizes = () => (
  <div className="w-full max-w-md space-y-6">
    <div className="space-y-3">
      <Label>Step 1 (Integer)</Label>
      <Slider defaultValue={[25]} max={100} step={1} />
    </div>

    <div className="space-y-3">
      <Label>Step 5</Label>
      <Slider defaultValue={[25]} max={100} step={5} />
      <div className="text-sm text-muted-foreground">
        Values: 0, 5, 10, 15, 20, 25, ...
      </div>
    </div>

    <div className="space-y-3">
      <Label>Step 10</Label>
      <Slider defaultValue={[50]} max={100} step={10} />
      <div className="text-sm text-muted-foreground">
        Values: 0, 10, 20, 30, 40, 50, ...
      </div>
    </div>

    <div className="space-y-3">
      <Label>Step 0.1 (Decimal)</Label>
      <Slider defaultValue={[2.5]} max={10} step={0.1} />
      <div className="text-sm text-muted-foreground">
        Values: 0.0, 0.1, 0.2, 0.3, ...
      </div>
    </div>
  </div>
);

// Different ranges
export const DifferentRanges = () => (
  <div className="w-full max-w-md space-y-6">
    <div className="space-y-3">
      <Label>0 - 100 (Default)</Label>
      <Slider defaultValue={[50]} min={0} max={100} step={1} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>0</span>
        <span>100</span>
      </div>
    </div>

    <div className="space-y-3">
      <Label>-50 to 50</Label>
      <Slider defaultValue={[0]} min={-50} max={50} step={1} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>-50</span>
        <span>50</span>
      </div>
    </div>

    <div className="space-y-3">
      <Label>0 - 1000</Label>
      <Slider defaultValue={[500]} min={0} max={1000} step={10} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>0</span>
        <span>1000</span>
      </div>
    </div>

    <div className="space-y-3">
      <Label>0.0 - 1.0</Label>
      <Slider defaultValue={[0.5]} min={0} max={1} step={0.01} />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>0.0</span>
        <span>1.0</span>
      </div>
    </div>
  </div>
);

// States and variants
export const StatesAndVariants = () => (
  <div className="w-full max-w-md space-y-6">
    <div className="space-y-3">
      <Label>Normal State</Label>
      <Slider defaultValue={[40]} max={100} step={1} />
    </div>

    <div className="space-y-3">
      <Label className="text-muted-foreground">Disabled State</Label>
      <Slider defaultValue={[60]} max={100} step={1} disabled />
    </div>

    <div className="space-y-3">
      <Label>Custom Styling</Label>
      <Slider
        defaultValue={[70]}
        max={100}
        step={1}
        className="[&>span[role='slider']]:bg-red-500 [&>span[role='slider']]:border-red-500 [&_[data-orientation='horizontal']]:bg-red-100 [&_.bg-primary]:bg-red-500"
      />
    </div>
  </div>
);

// Controlled slider with display
export const ControlledSlider = () => {
  const [volume, setVolume] = useState([75]);
  const [brightness, setBrightness] = useState([50]);
  const [temperature, setTemperature] = useState([20]);

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Volume</Label>
          <span className="text-sm font-medium">{volume[0]}%</span>
        </div>
        <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <VolumeX className="h-3 w-3" />
            Mute
          </span>
          <span className="flex items-center gap-1">
            <Volume2 className="h-3 w-3" />
            Loud
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Brightness</Label>
          <span className="text-sm font-medium">{brightness[0]}%</span>
        </div>
        <Slider
          value={brightness}
          onValueChange={setBrightness}
          max={100}
          step={5}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Moon className="h-3 w-3" />
            Dim
          </span>
          <span className="flex items-center gap-1">
            <Sun className="h-3 w-3" />
            Bright
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Temperature</Label>
          <span className="text-sm font-medium">{temperature[0]}°C</span>
        </div>
        <Slider
          value={temperature}
          onValueChange={setTemperature}
          min={-10}
          max={50}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Snowflake className="h-3 w-3" />
            Cold
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3 w-3" />
            Hot
          </span>
        </div>
      </div>
    </div>
  );
};

// Slider with input synchronization
export const SliderWithInput = () => {
  const [value, setValue] = useState([50]);

  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.max(0, Math.min(100, Number(e.target.value)));
    setValue([newValue]);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <Label className="text-base font-medium">Synchronized Input</Label>

      <div className="space-y-3">
        <Slider
          value={value}
          onValueChange={handleSliderChange}
          max={100}
          step={1}
        />

        <div className="flex items-center space-x-2">
          <Label htmlFor="value-input" className="text-sm">
            Value:
          </Label>
          <Input
            id="value-input"
            type="number"
            min={0}
            max={100}
            value={value[0]}
            onChange={handleInputChange}
            className="w-20 text-center"
          />
          <span className="text-sm text-muted-foreground">%</span>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        The slider and input are synchronized. Change either to update both.
      </div>
    </div>
  );
};

// Multi-thumb range with labels
export const MultiThumbRange = () => {
  const [timeRange, setTimeRange] = useState([9, 17]); // 9 AM to 5 PM

  const formatTime = (hour: number) => {
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:00 ${ampm}`;
  };

  return (
    <div className="w-full max-w-md space-y-4">
      <Label className="text-base font-medium">Work Hours</Label>
      <Slider
        value={timeRange}
        onValueChange={setTimeRange}
        min={0}
        max={23}
        step={1}
      />
      <div className="flex justify-between text-sm">
        <div>
          <span className="text-muted-foreground">Start: </span>
          <span className="font-medium">{formatTime(timeRange[0])}</span>
        </div>
        <div>
          <span className="text-muted-foreground">End: </span>
          <span className="font-medium">{formatTime(timeRange[1])}</span>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Total hours: {timeRange[1] - timeRange[0]} hours
      </div>
    </div>
  );
};

// Form integration
export const FormIntegration = () => {
  const [settings, setSettings] = useState({
    quality: [80],
    fileSize: [50],
    compression: [30],
    timeout: [5000],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Settings saved: ${JSON.stringify(settings, null, 2)}`);
  };

  const updateSetting = (key: string, value: number[]) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <h3 className="text-lg font-medium">Export Settings</h3>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Image Quality</Label>
          <span className="text-sm font-medium">{settings.quality[0]}%</span>
        </div>
        <Slider
          value={settings.quality}
          onValueChange={(value) => updateSetting("quality", value)}
          min={1}
          max={100}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Maximum File Size</Label>
          <span className="text-sm font-medium">{settings.fileSize[0]} MB</span>
        </div>
        <Slider
          value={settings.fileSize}
          onValueChange={(value) => updateSetting("fileSize", value)}
          min={1}
          max={100}
          step={1}
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Compression Level</Label>
          <span className="text-sm font-medium">
            {settings.compression[0]}%
          </span>
        </div>
        <Slider
          value={settings.compression}
          onValueChange={(value) => updateSetting("compression", value)}
          min={0}
          max={100}
          step={5}
        />
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Label>Timeout</Label>
          <span className="text-sm font-medium">{settings.timeout[0]}ms</span>
        </div>
        <Slider
          value={settings.timeout}
          onValueChange={(value) => updateSetting("timeout", value)}
          min={1000}
          max={10000}
          step={500}
        />
      </div>

      <Button type="submit" className="w-full">
        Save Settings
      </Button>
    </form>
  );
};

// Audio/Video controls
export const MediaControls = () => {
  const [volume, setVolume] = useState([70]);
  const [playbackSpeed, setPlaybackSpeed] = useState([1]);
  const [progress, setProgress] = useState([30]);

  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];
  const speedIndex = speeds.indexOf(playbackSpeed[0]);

  return (
    <div className="w-full max-w-md space-y-6 p-6 border rounded-lg">
      <h3 className="text-lg font-medium">Media Player Controls</h3>

      {/* Progress */}
      <div className="space-y-2">
        <Label className="text-sm">Progress</Label>
        <Slider
          value={progress}
          onValueChange={setProgress}
          max={100}
          step={0.1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0:00</span>
          <span>
            {Math.floor((progress[0] * 3.5) / 100)}:
            {String(
              Math.floor((((progress[0] * 3.5) / 100) % 1) * 60)
            ).padStart(2, "0")}
          </span>
          <span>3:30</span>
        </div>
      </div>

      {/* Volume */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-sm">Volume</Label>
          <span className="text-xs">{volume[0]}%</span>
        </div>
        <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
      </div>

      {/* Playback Speed */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <Label className="text-sm">Playback Speed</Label>
          <span className="text-xs">{playbackSpeed[0]}x</span>
        </div>
        <Slider
          value={[speedIndex]}
          onValueChange={(value) => setPlaybackSpeed([speeds[value[0]]])}
          min={0}
          max={speeds.length - 1}
          step={1}
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0.5x</span>
          <span>2x</span>
        </div>
      </div>

      <div className="flex justify-center space-x-3">
        <Button variant="outline" size="sm">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button size="sm">
          <Play className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="sm">
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

// Color picker simulation
export const ColorSliders = () => {
  const [red, setRed] = useState([255]);
  const [green, setGreen] = useState([100]);
  const [blue, setBlue] = useState([50]);

  const rgbColor = `rgb(${red[0]}, ${green[0]}, ${blue[0]})`;

  return (
    <div className="w-full max-w-md space-y-6">
      <h3 className="text-lg font-medium">RGB Color Picker</h3>

      <div className="space-y-4">
        {/* Red */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm">Red</Label>
            <span className="text-sm font-mono">{red[0]}</span>
          </div>
          <Slider
            value={red}
            onValueChange={setRed}
            min={0}
            max={255}
            step={1}
            className="[&_.bg-primary]:bg-red-500 [&>span[role='slider']]:border-red-500"
          />
        </div>

        {/* Green */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm">Green</Label>
            <span className="text-sm font-mono">{green[0]}</span>
          </div>
          <Slider
            value={green}
            onValueChange={setGreen}
            min={0}
            max={255}
            step={1}
            className="[&_.bg-primary]:bg-green-500 [&>span[role='slider']]:border-green-500"
          />
        </div>

        {/* Blue */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label className="text-sm">Blue</Label>
            <span className="text-sm font-mono">{blue[0]}</span>
          </div>
          <Slider
            value={blue}
            onValueChange={setBlue}
            min={0}
            max={255}
            step={1}
            className="[&_.bg-primary]:bg-blue-500 [&>span[role='slider']]:border-blue-500"
          />
        </div>

        {/* Color preview */}
        <div className="space-y-2">
          <Label className="text-sm">Preview</Label>
          <div
            className="h-16 w-full rounded-md border"
            style={{ backgroundColor: rgbColor }}
          />
          <div className="text-center text-sm font-mono">{rgbColor}</div>
        </div>
      </div>
    </div>
  );
};

// Interactive playground
export const Playground = (args: {
  disabled?: boolean;
  step?: number;
  min?: number;
  max?: number;
}) => (
  <div className="w-full max-w-md space-y-3">
    <Label>Playground Slider</Label>
    <Slider
      defaultValue={[50]}
      disabled={args.disabled}
      step={args.step}
      min={args.min}
      max={args.max}
    />
    <div className="flex justify-between text-sm text-muted-foreground">
      <span>{args.min}</span>
      <span>{args.max}</span>
    </div>
    <div className="text-sm">
      Step: {args.step}, Range: {args.min} - {args.max}
    </div>
  </div>
);

Playground.args = {
  disabled: false,
  step: 1,
  min: 0,
  max: 100,
};

// Advanced Examples
export const AdvancedControlledSliders = {
  render: () => {
    const [sliderValues, setSliderValues] = React.useState({
      single: [50],
      range: [20, 80],
      multiRange: [10, 35, 65, 90],
    });
    const [sliderConfig, setSliderConfig] = React.useState({
      orientation: "horizontal" as "horizontal" | "vertical",
      dir: "ltr" as "ltr" | "rtl",
      inverted: false,
      disabled: false,
      step: 1,
      minStepsBetweenThumbs: 0,
    });
    const [commitHistory, setCommitHistory] = React.useState<
      Array<{
        type: string;
        values: number[];
        timestamp: string;
      }>
    >([]);

    const handleValueChange = (
      type: keyof typeof sliderValues,
      values: number[]
    ) => {
      setSliderValues((prev) => ({ ...prev, [type]: values }));
    };

    const handleValueCommit = (type: string, values: number[]) => {
      setCommitHistory((prev) =>
        [
          ...prev,
          {
            type,
            values: [...values],
            timestamp: new Date().toLocaleTimeString(),
          },
        ].slice(-10)
      ); // Keep last 10 commits
    };

    const resetAllValues = () => {
      setSliderValues({
        single: [50],
        range: [20, 80],
        multiRange: [10, 35, 65, 90],
      });
      setCommitHistory([]);
    };

    const generateRandomValues = () => {
      setSliderValues({
        single: [Math.floor(Math.random() * 100)],
        range: [
          Math.floor(Math.random() * 40),
          60 + Math.floor(Math.random() * 40),
        ],
        multiRange: [
          Math.floor(Math.random() * 20),
          20 + Math.floor(Math.random() * 20),
          50 + Math.floor(Math.random() * 20),
          80 + Math.floor(Math.random() * 20),
        ],
      });
    };

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced Controlled Sliders
          </h3>

          {/* Configuration Panel */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Orientation</label>
              <div className="flex gap-2">
                {(["horizontal", "vertical"] as const).map((orientation) => (
                  <button
                    key={orientation}
                    onClick={() =>
                      setSliderConfig((prev) => ({ ...prev, orientation }))
                    }
                    className={`px-2 py-1 rounded text-xs ${
                      sliderConfig.orientation === orientation
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border"
                    }`}
                  >
                    {orientation}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Direction</label>
              <div className="flex gap-2">
                {(["ltr", "rtl"] as const).map((dir) => (
                  <button
                    key={dir}
                    onClick={() =>
                      setSliderConfig((prev) => ({ ...prev, dir }))
                    }
                    className={`px-2 py-1 rounded text-xs uppercase ${
                      sliderConfig.dir === dir
                        ? "bg-primary text-primary-foreground"
                        : "bg-background border"
                    }`}
                  >
                    {dir}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="inverted"
                checked={sliderConfig.inverted}
                onCheckedChange={(checked) =>
                  setSliderConfig((prev) => ({
                    ...prev,
                    inverted: checked === true,
                  }))
                }
              />
              <Label htmlFor="inverted" className="text-sm">
                Inverted
              </Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="disabled"
                checked={sliderConfig.disabled}
                onCheckedChange={(checked) =>
                  setSliderConfig((prev) => ({
                    ...prev,
                    disabled: checked === true,
                  }))
                }
              />
              <Label htmlFor="disabled" className="text-sm">
                Disabled
              </Label>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Step Size</Label>
              <Input
                type="number"
                min="0.1"
                max="10"
                step="0.1"
                value={sliderConfig.step.toString()}
                onChange={(e) =>
                  setSliderConfig((prev) => ({
                    ...prev,
                    step: Number(e.target.value),
                  }))
                }
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium">Min Steps Between</Label>
              <Input
                type="number"
                min="0"
                max="10"
                value={sliderConfig.minStepsBetweenThumbs.toString()}
                onChange={(e) =>
                  setSliderConfig((prev) => ({
                    ...prev,
                    minStepsBetweenThumbs: Number(e.target.value),
                  }))
                }
                className="w-full"
              />
            </div>

            <div className="col-span-2 flex gap-2">
              <Button onClick={resetAllValues} variant="outline" size="sm">
                Reset Values
              </Button>
              <Button
                onClick={generateRandomValues}
                variant="outline"
                size="sm"
              >
                Randomize
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-8 ${sliderConfig.orientation === "vertical" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"}`}
        >
          {/* Single Value Slider */}
          <div
            className={
              sliderConfig.orientation === "vertical"
                ? "flex flex-col items-center"
                : ""
            }
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Single Value</h4>
              <span className="text-sm text-muted-foreground">
                Value: {sliderValues.single[0]}
              </span>
            </div>
            <div
              className={
                sliderConfig.orientation === "vertical" ? "h-48" : "w-full"
              }
            >
              <Slider
                value={sliderValues.single}
                onValueChange={(values) => handleValueChange("single", values)}
                onValueCommit={(values) => handleValueCommit("Single", values)}
                min={0}
                max={100}
                step={sliderConfig.step}
                orientation={sliderConfig.orientation}
                dir={sliderConfig.dir}
                inverted={sliderConfig.inverted}
                disabled={sliderConfig.disabled}
                className={
                  sliderConfig.orientation === "vertical" ? "h-full" : "w-full"
                }
              />
            </div>
          </div>

          {/* Range Slider */}
          <div
            className={
              sliderConfig.orientation === "vertical"
                ? "flex flex-col items-center"
                : ""
            }
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Range</h4>
              <span className="text-sm text-muted-foreground">
                Range: {sliderValues.range[0]} - {sliderValues.range[1]} (span:{" "}
                {sliderValues.range[1] - sliderValues.range[0]})
              </span>
            </div>
            <div
              className={
                sliderConfig.orientation === "vertical" ? "h-48" : "w-full"
              }
            >
              <Slider
                value={sliderValues.range}
                onValueChange={(values) => handleValueChange("range", values)}
                onValueCommit={(values) => handleValueCommit("Range", values)}
                min={0}
                max={100}
                step={sliderConfig.step}
                minStepsBetweenThumbs={sliderConfig.minStepsBetweenThumbs}
                orientation={sliderConfig.orientation}
                dir={sliderConfig.dir}
                inverted={sliderConfig.inverted}
                disabled={sliderConfig.disabled}
                className={
                  sliderConfig.orientation === "vertical" ? "h-full" : "w-full"
                }
              />
            </div>
          </div>

          {/* Multi-Range Slider */}
          <div
            className={
              sliderConfig.orientation === "vertical"
                ? "flex flex-col items-center"
                : ""
            }
          >
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium">Multi-Range (4 thumbs)</h4>
              <span className="text-sm text-muted-foreground">
                Values: [{sliderValues.multiRange.join(", ")}]
              </span>
            </div>
            <div
              className={
                sliderConfig.orientation === "vertical" ? "h-48" : "w-full"
              }
            >
              <Slider
                value={sliderValues.multiRange}
                onValueChange={(values) =>
                  handleValueChange("multiRange", values)
                }
                onValueCommit={(values) =>
                  handleValueCommit("Multi-Range", values)
                }
                min={0}
                max={100}
                step={sliderConfig.step}
                minStepsBetweenThumbs={sliderConfig.minStepsBetweenThumbs}
                orientation={sliderConfig.orientation}
                dir={sliderConfig.dir}
                inverted={sliderConfig.inverted}
                disabled={sliderConfig.disabled}
                className={
                  sliderConfig.orientation === "vertical" ? "h-full" : "w-full"
                }
              />
            </div>
          </div>
        </div>

        {/* Value Commit History */}
        <div>
          <h4 className="font-medium mb-3">
            Value Commit History ({commitHistory.length}/10)
          </h4>
          <div className="border rounded-lg p-4 bg-muted/30 max-h-48 overflow-y-auto">
            {commitHistory.length === 0 ? (
              <div className="text-sm text-muted-foreground text-center py-4">
                No commits yet. Drag slider thumbs to generate commit events.
              </div>
            ) : (
              <div className="space-y-2">
                {commitHistory
                  .slice()
                  .reverse()
                  .map((commit, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm p-2 bg-background rounded"
                    >
                      <div>
                        <span className="font-medium">{commit.type}</span>
                        <span className="text-muted-foreground ml-2">
                          [{commit.values.join(", ")}]
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {commit.timestamp}
                      </span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>onValueChange:</strong> Real-time updates while dragging
            </li>
            <li>
              • <strong>onValueCommit:</strong> Events when drag is complete
            </li>
            <li>
              • <strong>minStepsBetweenThumbs:</strong> Prevents thumbs from
              overlapping
            </li>
            <li>
              • <strong>orientation:</strong> Horizontal vs vertical layouts
            </li>
            <li>
              • <strong>dir:</strong> LTR vs RTL reading direction
            </li>
            <li>
              • <strong>inverted:</strong> Flipped value direction
            </li>
            <li>• Multiple thumbs for range and multi-range selection</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const ComplexFormIntegrationSlider = {
  render: () => {
    const [formData, setFormData] = React.useState({
      budget: [500, 2000],
      priority: [5],
      duration: [30],
      team_size: [3],
      complexity: [2],
    });
    const [errors, setErrors] = React.useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const budgetLabels = ["$0", "$1K", "$2K", "$5K", "$10K+"];
    const priorityLabels = ["Low", "Medium", "High", "Critical", "Emergency"];
    const complexityLabels = ["Simple", "Moderate", "Complex", "Expert Level"];

    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      if (formData.budget[1] - formData.budget[0] < 200) {
        newErrors.budget = "Budget range must be at least $200";
      }
      if (formData.priority[0] === 0) {
        newErrors.priority = "Please set a priority level";
      }
      if (formData.duration[0] < 7) {
        newErrors.duration = "Project duration must be at least 7 days";
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };

    const handleSliderChange = (
      field: keyof typeof formData,
      values: number[]
    ) => {
      setFormData((prev) => ({ ...prev, [field]: values }));
      // Clear error when user adjusts value
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const isValid = validateForm();

      if (isValid) {
        setIsSubmitted(true);
      }
    };

    const resetForm = () => {
      setFormData({
        budget: [500, 2000],
        priority: [5],
        duration: [30],
        team_size: [3],
        complexity: [2],
      });
      setErrors({});
      setIsSubmitted(false);
    };

    if (isSubmitted) {
      return (
        <div className="max-w-2xl p-6 border border-green-200 bg-green-50 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">
            Project Proposal Submitted!
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm text-green-700">
            <div>
              <strong>Budget Range:</strong> $
              {formData.budget[0].toLocaleString()} - $
              {formData.budget[1].toLocaleString()}
            </div>
            <div>
              <strong>Priority:</strong>{" "}
              {priorityLabels[formData.priority[0] - 1]} ({formData.priority[0]}
              /5)
            </div>
            <div>
              <strong>Duration:</strong> {formData.duration[0]} days
            </div>
            <div>
              <strong>Team Size:</strong> {formData.team_size[0]}{" "}
              {formData.team_size[0] === 1 ? "person" : "people"}
            </div>
            <div>
              <strong>Complexity:</strong>{" "}
              {complexityLabels[formData.complexity[0] - 1]}
            </div>
            <div>
              <strong>Total Budget:</strong> $
              {(
                (((formData.budget[0] + formData.budget[1]) / 2) *
                  formData.duration[0]) /
                30
              ).toLocaleString()}
            </div>
          </div>
          <Button onClick={resetForm} className="mt-4" variant="outline">
            Create Another Proposal
          </Button>
        </div>
      );
    }

    return (
      <div className="max-w-2xl space-y-6">
        <h3 className="text-lg font-semibold">Project Proposal Form</h3>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Budget Range */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Budget Range *</Label>
              <div className="text-sm">
                ${formData.budget[0].toLocaleString()} - $
                {formData.budget[1].toLocaleString()}
                <span className="text-muted-foreground ml-2">
                  (${(formData.budget[1] - formData.budget[0]).toLocaleString()}{" "}
                  range)
                </span>
              </div>
            </div>
            <Slider
              value={formData.budget}
              onValueChange={(values) => handleSliderChange("budget", values)}
              min={0}
              max={5000}
              step={100}
              minStepsBetweenThumbs={2} // Minimum $200 apart
              className={
                errors.budget ? "ring-2 ring-destructive/20 rounded-lg" : ""
              }
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {budgetLabels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
            {errors.budget && (
              <p className="text-sm text-destructive">{errors.budget}</p>
            )}
          </div>

          {/* Priority Level */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Priority Level *</Label>
              <div className="flex items-center gap-2">
                <span className="text-sm">
                  {priorityLabels[formData.priority[0] - 1] || "Not set"}
                </span>
                <div
                  className={`w-3 h-3 rounded-full ${
                    formData.priority[0] <= 1
                      ? "bg-gray-400"
                      : formData.priority[0] <= 2
                        ? "bg-blue-400"
                        : formData.priority[0] <= 3
                          ? "bg-yellow-400"
                          : formData.priority[0] <= 4
                            ? "bg-orange-400"
                            : "bg-red-400"
                  }`}
                />
              </div>
            </div>
            <Slider
              value={formData.priority}
              onValueChange={(values) => handleSliderChange("priority", values)}
              min={1}
              max={5}
              step={1}
              className={
                errors.priority ? "ring-2 ring-destructive/20 rounded-lg" : ""
              }
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {priorityLabels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
            {errors.priority && (
              <p className="text-sm text-destructive">{errors.priority}</p>
            )}
          </div>

          {/* Project Duration */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">
                Project Duration *
              </Label>
              <div className="text-sm">
                {formData.duration[0]} days
                <span className="text-muted-foreground ml-2">
                  (~{Math.ceil(formData.duration[0] / 7)} weeks)
                </span>
              </div>
            </div>
            <Slider
              value={formData.duration}
              onValueChange={(values) => handleSliderChange("duration", values)}
              min={1}
              max={365}
              step={1}
              className={
                errors.duration ? "ring-2 ring-destructive/20 rounded-lg" : ""
              }
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 day</span>
              <span>1 month</span>
              <span>3 months</span>
              <span>6 months</span>
              <span>1 year</span>
            </div>
            {errors.duration && (
              <p className="text-sm text-destructive">{errors.duration}</p>
            )}
          </div>

          {/* Team Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">Team Size</Label>
              <div className="text-sm">
                {formData.team_size[0]}{" "}
                {formData.team_size[0] === 1 ? "person" : "people"}
              </div>
            </div>
            <Slider
              value={formData.team_size}
              onValueChange={(values) =>
                handleSliderChange("team_size", values)
              }
              min={1}
              max={20}
              step={1}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Solo</span>
              <span>Small Team</span>
              <span>Large Team</span>
            </div>
          </div>

          {/* Complexity */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-base font-medium">
                Project Complexity
              </Label>
              <div className="text-sm">
                {complexityLabels[formData.complexity[0] - 1]}
              </div>
            </div>
            <Slider
              value={formData.complexity}
              onValueChange={(values) =>
                handleSliderChange("complexity", values)
              }
              min={1}
              max={4}
              step={1}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              {complexityLabels.map((label, index) => (
                <span key={index}>{label}</span>
              ))}
            </div>
          </div>

          {/* Estimated Cost Display */}
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Estimated Project Cost</h4>
            <div className="text-2xl font-bold text-primary">
              $
              {(
                (((formData.budget[0] + formData.budget[1]) / 2) *
                  formData.duration[0]) /
                30
              ).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              Based on average budget over {formData.duration[0]} days
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t">
            <Button type="submit" className="flex-1">
              Submit Proposal
            </Button>
            <Button type="button" onClick={resetForm} variant="outline">
              Reset Form
            </Button>
          </div>
        </form>
      </div>
    );
  },
};
