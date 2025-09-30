import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator/separator';
import { useState } from 'react';
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group/toggle-group";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Zap,
  Smartphone,
  Tablet,
  Monitor,
  Volume1,
  Volume2,
  VolumeX,
  Calendar,
  Grid3X3,
  List,
  BarChart3,
  PieChart,
  LineChart,
  Sun,
  Cloud,
  CloudRain,
  Snowflake,
  Eye,
  Settings,
  User,
  Bell,
  Shield,
  Wifi,
  Bluetooth,
  Battery,
} from "lucide-react";

export const Route = createFileRoute("/docs/toggle-group")({
  component: ToggleGroupDemo,
});

function ToggleGroupDemo() {
  const [textFormat, setTextFormat] = useState<string[]>([]);
  const [alignment, setAlignment] = useState("left");
  const [deviceView, setDeviceView] = useState("desktop");
  const [volume, setVolume] = useState("medium");
  const [chartType, setChartType] = useState("bar");
  const [weather, setWeather] = useState("sunny");
  const [visibility, setVisibility] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<string[]>(["wifi"]);

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Toggle Group</h1>
          <p className="text-lg text-muted-foreground">
            A set of two-state buttons that can be toggled on or off.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Group Control</Badge>
          <Badge variant="secondary">Multiple Selection</Badge>
          <Badge variant="secondary">Single Selection</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">Accessible</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple toggle groups for related binary choices.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">
              Text Alignment (Single Selection)
            </h4>
            <ToggleGroup type="single" defaultValue="left">
              <ToggleGroupItem value="left" aria-label="Left align">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Center align">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Right align">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">
              Text Formatting (Multiple Selection)
            </h4>
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="strikethrough" aria-label="Strikethrough">
                <Strikethrough className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Toggle Group Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Toggle Group Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for various use cases.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <ToggleGroup type="single" variant="default">
              <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Outline</h4>
            <ToggleGroup type="single" variant="outline" defaultValue="option2">
              <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Secondary</h4>
            <ToggleGroup type="multiple" variant="secondary">
              <ToggleGroupItem value="feature1">Feature 1</ToggleGroupItem>
              <ToggleGroupItem value="feature2">Feature 2</ToggleGroupItem>
              <ToggleGroupItem value="feature3">Feature 3</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Ghost</h4>
            <ToggleGroup type="single" variant="ghost">
              <ToggleGroupItem value="view1">
                <Grid3X3 className="h-4 w-4 mr-2" />
                Grid
              </ToggleGroupItem>
              <ToggleGroupItem value="view2">
                <List className="h-4 w-4 mr-2" />
                List
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Solid</h4>
            <ToggleGroup type="single" variant="solid" defaultValue="high">
              <ToggleGroupItem value="low">Low</ToggleGroupItem>
              <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
              <ToggleGroupItem value="high">
                <Zap className="h-4 w-4 mr-2" />
                High
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different sizes for various UI contexts.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Small</h4>
            <ToggleGroup type="single" size="sm" variant="outline">
              <ToggleGroupItem value="sm1">S</ToggleGroupItem>
              <ToggleGroupItem value="sm2">M</ToggleGroupItem>
              <ToggleGroupItem value="sm3">L</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <ToggleGroup type="single" size="default" variant="outline">
              <ToggleGroupItem value="def1">Small</ToggleGroupItem>
              <ToggleGroupItem value="def2">Medium</ToggleGroupItem>
              <ToggleGroupItem value="def3">Large</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Large</h4>
            <ToggleGroup type="single" size="lg" variant="outline">
              <ToggleGroupItem value="lg1">Option 1</ToggleGroupItem>
              <ToggleGroupItem value="lg2">Option 2</ToggleGroupItem>
              <ToggleGroupItem value="lg3">Option 3</ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Extra Large</h4>
            <ToggleGroup type="single" size="xl" variant="outline">
              <ToggleGroupItem value="xl1">Large Option</ToggleGroupItem>
              <ToggleGroupItem value="xl2">Another Choice</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Controlled Toggle Groups */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled Toggle Groups</h2>
          <p className="text-muted-foreground">
            Control toggle group state externally with value and onValueChange.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Text Formatting Controls</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="multiple"
                value={textFormat}
                onValueChange={setTextFormat}
                variant="outline"
              >
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="strikethrough">
                  <Strikethrough className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="text-sm text-muted-foreground">
                Active formats:{" "}
                {textFormat.length > 0 ? textFormat.join(", ") : "None"}
              </div>
              <Button
                onClick={() => setTextFormat([])}
                variant="outline"
                size="sm"
              >
                Clear All
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Text Alignment</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="single"
                value={alignment}
                onValueChange={setAlignment}
                variant="outline"
              >
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify">
                  <AlignJustify className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="text-sm text-muted-foreground">
                Current alignment: {alignment || "None"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Vertical Orientation</h2>
          <p className="text-muted-foreground">
            Toggle groups can be arranged vertically for sidebar-style
            navigation.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="max-w-xs">
            <h4 className="text-sm font-medium mb-3">Navigation Menu</h4>
            <ToggleGroup
              type="single"
              orientation="vertical"
              variant="ghost"
              className="w-full"
              defaultValue="dashboard"
            >
              <ToggleGroupItem
                value="dashboard"
                className="w-full justify-start"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Dashboard
              </ToggleGroupItem>
              <ToggleGroupItem value="users" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Users
              </ToggleGroupItem>
              <ToggleGroupItem
                value="settings"
                className="w-full justify-start"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </ToggleGroupItem>
              <ToggleGroupItem
                value="notifications"
                className="w-full justify-start"
              >
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for toggle groups.
          </p>
        </div>
        <div className="space-y-8 p-6 border rounded-lg">
          {/* Device View Selector */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Device Preview</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="single"
                value={deviceView}
                onValueChange={setDeviceView}
                variant="outline"
              >
                <ToggleGroupItem value="mobile">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Mobile
                </ToggleGroupItem>
                <ToggleGroupItem value="tablet">
                  <Tablet className="h-4 w-4 mr-2" />
                  Tablet
                </ToggleGroupItem>
                <ToggleGroupItem value="desktop">
                  <Monitor className="h-4 w-4 mr-2" />
                  Desktop
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="p-4 border rounded-lg bg-muted/20">
                <p className="text-sm">
                  Preview mode: <strong>{deviceView}</strong>
                </p>
                <div className="text-xs text-muted-foreground mt-1">
                  {deviceView === "mobile" && "Showing mobile layout (320px)"}
                  {deviceView === "tablet" && "Showing tablet layout (768px)"}
                  {deviceView === "desktop" &&
                    "Showing desktop layout (1200px)"}
                </div>
              </div>
            </div>
          </div>

          {/* Volume Control */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Audio Settings</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="single"
                value={volume}
                onValueChange={setVolume}
                variant="secondary"
              >
                <ToggleGroupItem value="mute">
                  <VolumeX className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="low">
                  <Volume1 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="medium">
                  <Volume2 className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="text-sm text-muted-foreground">
                Volume: {volume}
              </div>
            </div>
          </div>

          {/* Chart Type Selector */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Chart View</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="single"
                value={chartType}
                onValueChange={setChartType}
                variant="outline"
              >
                <ToggleGroupItem value="bar">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Bar
                </ToggleGroupItem>
                <ToggleGroupItem value="pie">
                  <PieChart className="h-4 w-4 mr-2" />
                  Pie
                </ToggleGroupItem>
                <ToggleGroupItem value="line">
                  <LineChart className="h-4 w-4 mr-2" />
                  Line
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="p-4 border rounded-lg">
                <p className="text-sm">
                  Chart type: <strong>{chartType}</strong>
                </p>
                <div className="w-full h-20 bg-gradient-to-r from-blue-100 to-blue-200 rounded mt-2 flex items-center justify-center text-xs text-muted-foreground">
                  {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart
                  Placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Weather Selector */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Weather Conditions</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="single"
                value={weather}
                onValueChange={setWeather}
                variant="ghost"
              >
                <ToggleGroupItem value="sunny">
                  <Sun className="h-4 w-4 mr-2" />
                  Sunny
                </ToggleGroupItem>
                <ToggleGroupItem value="cloudy">
                  <Cloud className="h-4 w-4 mr-2" />
                  Cloudy
                </ToggleGroupItem>
                <ToggleGroupItem value="rainy">
                  <CloudRain className="h-4 w-4 mr-2" />
                  Rainy
                </ToggleGroupItem>
                <ToggleGroupItem value="snowy">
                  <Snowflake className="h-4 w-4 mr-2" />
                  Snowy
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="text-sm text-muted-foreground">
                Current weather: {weather}
              </div>
            </div>
          </div>

          {/* Privacy Controls */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Privacy Settings</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="multiple"
                value={visibility}
                onValueChange={setVisibility}
                variant="outline"
              >
                <ToggleGroupItem value="profile">
                  <User className="h-4 w-4 mr-2" />
                  Profile
                </ToggleGroupItem>
                <ToggleGroupItem value="activity">
                  <Eye className="h-4 w-4 mr-2" />
                  Activity
                </ToggleGroupItem>
                <ToggleGroupItem value="location">
                  <Calendar className="h-4 w-4 mr-2" />
                  Location
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="text-sm text-muted-foreground">
                Visible:{" "}
                {visibility.length > 0
                  ? visibility.join(", ")
                  : "Nothing selected"}
              </div>
            </div>
          </div>

          {/* System Preferences */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">System Connections</h4>
            <div className="space-y-3">
              <ToggleGroup
                type="multiple"
                value={preferences}
                onValueChange={setPreferences}
                variant="secondary"
              >
                <ToggleGroupItem value="wifi">
                  <Wifi className="h-4 w-4 mr-2" />
                  WiFi
                </ToggleGroupItem>
                <ToggleGroupItem value="bluetooth">
                  <Bluetooth className="h-4 w-4 mr-2" />
                  Bluetooth
                </ToggleGroupItem>
                <ToggleGroupItem value="battery">
                  <Battery className="h-4 w-4 mr-2" />
                  Battery Saver
                </ToggleGroupItem>
                <ToggleGroupItem value="security">
                  <Shield className="h-4 w-4 mr-2" />
                  Security
                </ToggleGroupItem>
              </ToggleGroup>
              <div className="text-sm text-muted-foreground">
                Active: {preferences.join(", ") || "None"}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete API reference for Toggle Group components.
          </p>
        </div>
        <div className="space-y-6">
          {/* ToggleGroup */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToggleGroup</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">type</td>
                    <td className="border border-border p-2">
                      'single' | 'multiple'
                    </td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      Selection mode for the toggle group
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'secondary' | 'ghost' | 'solid'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the toggle group
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of toggle items
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      orientation
                    </td>
                    <td className="border border-border p-2">
                      'horizontal' | 'vertical'
                    </td>
                    <td className="border border-border p-2">'horizontal'</td>
                    <td className="border border-border p-2">
                      Layout direction of the group
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">
                      string | string[]
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Controlled value(s) - string for single, array for
                      multiple
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultValue
                    </td>
                    <td className="border border-border p-2">
                      string | string[]
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Default value(s) for uncontrolled usage
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onValueChange
                    </td>
                    <td className="border border-border p-2">
                      (value: string | string[]) =&gt; void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Called when the value changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the entire toggle group
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      rovingFocus
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">true</td>
                    <td className="border border-border p-2">
                      Enable roving tabindex navigation
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">loop</td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">true</td>
                    <td className="border border-border p-2">
                      Loop focus navigation at boundaries
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ToggleGroupItem */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToggleGroupItem</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      Unique identifier for the toggle item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables this specific toggle item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'secondary' | 'ghost' | 'solid'
                    </td>
                    <td className="border border-border p-2">
                      Inherits from group
                    </td>
                    <td className="border border-border p-2">
                      Override group variant for this item
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">
                      Inherits from group
                    </td>
                    <td className="border border-border p-2">
                      Override group size for this item
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Data Attributes */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Data Attributes</h2>
          <p className="text-muted-foreground">
            Available data attributes for styling and testing.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="border border-border p-2 text-left">
                    Attribute
                  </th>
                  <th className="border border-border p-2 text-left">Values</th>
                  <th className="border border-border p-2 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-state]
                  </td>
                  <td className="border border-border p-2">"on" | "off"</td>
                  <td className="border border-border p-2">
                    Current pressed state of the toggle item
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-disabled]
                  </td>
                  <td className="border border-border p-2">
                    Present when disabled
                  </td>
                  <td className="border border-border p-2">
                    Indicates the item is disabled
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-orientation]
                  </td>
                  <td className="border border-border p-2">
                    "horizontal" | "vertical"
                  </td>
                  <td className="border border-border p-2">
                    Layout direction of the toggle group
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p className="text-muted-foreground">
            Built-in accessibility features and keyboard navigation.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Keyboard Interactions</h4>
            <div className="bg-muted/30 p-4 rounded-lg">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Tab
                    </td>
                    <td className="py-2 pl-4">
                      Moves focus to the first item or the pressed item in the
                      group
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Space
                    </td>
                    <td className="py-2 pl-4">
                      Activates/deactivates the focused item
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Enter
                    </td>
                    <td className="py-2 pl-4">
                      Activates/deactivates the focused item
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Arrow Keys
                    </td>
                    <td className="py-2 pl-4">
                      Moves focus between items (direction depends on
                      orientation)
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Home
                    </td>
                    <td className="py-2 pl-4">
                      Moves focus to the first item in the group
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      End
                    </td>
                    <td className="py-2 pl-4">
                      Moves focus to the last item in the group
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">ARIA Compliance</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>• Uses roving tabindex for focus management</li>
              <li>
                • Automatic{" "}
                <code className="bg-muted px-1 rounded">aria-pressed</code>{" "}
                state for each item
              </li>
              <li>
                • Supports{" "}
                <code className="bg-muted px-1 rounded">aria-label</code> and{" "}
                <code className="bg-muted px-1 rounded">aria-labelledby</code>{" "}
                for groups
              </li>
              <li>• Proper focus management with keyboard navigation</li>
              <li>• Follows the ARIA button design pattern for each toggle</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>• Always provide accessible labels for toggle items</li>
              <li>
                • Use clear visual indicators for pressed/unpressed states
              </li>
              <li>• Group related toggles with proper semantic grouping</li>
              <li>
                • Consider using single vs multiple selection appropriately
              </li>
              <li>• Ensure sufficient color contrast in all states</li>
              <li>• Provide keyboard navigation instructions when needed</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
