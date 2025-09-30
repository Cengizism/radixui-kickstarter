import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Slider } from '@/components/ui/slider';

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
    disabled: {
      control: "boolean",
    },
    step: {
      control: { type: "number", min: 0.1, max: 10, step: 0.1 },
    },
    min: {
      control: { type: "number", min: -100, max: 100, step: 1 },
    },
    max: {
      control: { type: "number", min: 0, max: 1000, step: 10 },
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
          <span>🔇 Mute</span>
          <span>🔊 Loud</span>
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
          <span>🌙 Dim</span>
          <span>☀️ Bright</span>
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
          <span>❄️ Cold</span>
          <span>🔥 Hot</span>
        </div>
      </div>
    </div>
  );
};

// Price range slider
export const PriceRangeSlider = () => {
  const [priceRange, setPriceRange] = useState([100, 500]);
  const formatPrice = (value: number) => `$${value}`;

  return (
    <div className="w-full max-w-md space-y-4">
      <Label className="text-base font-medium">Price Range</Label>
      <Slider
        value={priceRange}
        onValueChange={setPriceRange}
        min={0}
        max={1000}
        step={10}
      />
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <span className="text-muted-foreground">Min: </span>
          <span className="font-medium">{formatPrice(priceRange[0])}</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">Max: </span>
          <span className="font-medium">{formatPrice(priceRange[1])}</span>
        </div>
      </div>
      <div className="text-center text-sm text-muted-foreground">
        Showing products from {formatPrice(priceRange[0])} to{" "}
        {formatPrice(priceRange[1])}
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
          ⏮
        </Button>
        <Button size="sm">⏯</Button>
        <Button variant="outline" size="sm">
          ⏭
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
