import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/elements/separator';
import { useState } from 'react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
} from "@/components/ui/elements/tooltip";
import {
  Plus,
  Minus,
  Star,
  Trash2,
  Copy,
  Scissors,
  Save,
  Settings,
  User,
  Bell,
  Eye,
  EyeOff,
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Shield,
  Wifi,
  Battery,
  Monitor,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
} from "lucide-react";

export const Route = createFileRoute("/docs/tooltip")({
  component: TooltipDemo,
});

function TooltipDemo() {
  const [isOpen, setIsOpen] = useState(false);
  const [delayDuration, setDelayDuration] = useState(700);

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Tooltip</h1>
          <p className="text-lg text-muted-foreground">
            A popup that displays information related to an element when the
            element receives keyboard focus or the mouse hovers over it.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Hover Trigger</Badge>
          <Badge variant="secondary">Focus Trigger</Badge>
          <Badge variant="secondary">Customizable Delay</Badge>
          <Badge variant="secondary">Positioning</Badge>
          <Badge variant="secondary">Accessible</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple tooltips that appear on hover or focus.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Simple Tooltip</h4>
            <div className="flex gap-4 items-center">
              <SimpleTooltip content="Add new item">
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Remove item">
                <Button variant="outline" size="icon">
                  <Minus className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Save changes">
                <Button variant="default">
                  <Save className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Manual Tooltip (Advanced)</h4>
            <div className="flex gap-4 items-center">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Configure application settings
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <div className="space-y-1">
                      <p className="font-medium">Need help?</p>
                      <p className="text-xs">Click to open the help center</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Tooltip Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Tooltip Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for various use cases and semantic meanings.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Semantic Variants</h4>
            <div className="flex flex-wrap gap-4">
              <SimpleTooltip content="Default tooltip" variant="default">
                <Button variant="outline" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip
                content="Secondary information"
                variant="secondary"
              >
                <Button variant="secondary" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Important information" variant="accent">
                <Button variant="default" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Destructive action" variant="destructive">
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Success message" variant="success">
                <Button className="bg-green-600 hover:bg-green-700" size="icon">
                  <CheckCircle2 className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Warning message" variant="warning">
                <Button
                  className="bg-orange-600 hover:bg-orange-700"
                  size="icon"
                >
                  <AlertTriangle className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Information message" variant="info">
                <Button className="bg-blue-600 hover:bg-blue-700" size="icon">
                  <AlertCircle className="h-4 w-4" />
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Theme Variants</h4>
            <div className="flex gap-4">
              <SimpleTooltip content="Dark theme tooltip" variant="dark">
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Light theme tooltip" variant="light">
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-gray-800 text-white hover:bg-gray-700"
                >
                  <EyeOff className="h-4 w-4" />
                </Button>
              </SimpleTooltip>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different sizes for various UI contexts and content lengths.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Size Comparison</h4>
            <div className="flex gap-6 items-center">
              <div className="text-center space-y-2">
                <SimpleTooltip content="Small" size="sm">
                  <Button variant="outline" size="sm">
                    Small
                  </Button>
                </SimpleTooltip>
                <p className="text-xs text-muted-foreground">Small</p>
              </div>

              <div className="text-center space-y-2">
                <SimpleTooltip content="Default size tooltip" size="default">
                  <Button variant="outline">Default</Button>
                </SimpleTooltip>
                <p className="text-xs text-muted-foreground">Default</p>
              </div>

              <div className="text-center space-y-2">
                <SimpleTooltip
                  content="Large tooltip with more content space"
                  size="lg"
                >
                  <Button variant="outline" size="lg">
                    Large
                  </Button>
                </SimpleTooltip>
                <p className="text-xs text-muted-foreground">Large</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Positioning */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Positioning & Alignment</h2>
          <p className="text-muted-foreground">
            Control tooltip positioning relative to the trigger element.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Side Positioning</h4>
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <SimpleTooltip content="Top tooltip" side="top">
                  <Button variant="outline">Top</Button>
                </SimpleTooltip>
              </div>
              <div></div>

              <SimpleTooltip content="Left tooltip" side="left">
                <Button variant="outline">Left</Button>
              </SimpleTooltip>

              <SimpleTooltip content="Right tooltip" side="right">
                <Button variant="outline">Right</Button>
              </SimpleTooltip>

              <div></div>
              <div className="text-center">
                <SimpleTooltip content="Bottom tooltip" side="bottom">
                  <Button variant="outline">Bottom</Button>
                </SimpleTooltip>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Alignment Options</h4>
            <div className="flex justify-center gap-6">
              <SimpleTooltip content="Start aligned" side="top" align="start">
                <Button variant="outline" size="sm">
                  Start
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Center aligned" side="top" align="center">
                <Button variant="outline" size="sm">
                  Center
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="End aligned" side="top" align="end">
                <Button variant="outline" size="sm">
                  End
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Custom Offsets</h4>
            <div className="flex justify-center gap-6">
              <SimpleTooltip content="Default offset" side="top">
                <Button variant="outline" size="sm">
                  Default
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Large offset" side="top" sideOffset={20}>
                <Button variant="outline" size="sm">
                  Large Offset
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="No offset" side="top" sideOffset={0}>
                <Button variant="outline" size="sm">
                  No Offset
                </Button>
              </SimpleTooltip>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Controlled Tooltips */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled Tooltips</h2>
          <p className="text-muted-foreground">
            Control tooltip state programmatically and customize timing.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Controlled State</h4>
            <div className="space-y-4">
              <div className="flex gap-4 items-center">
                <SimpleTooltip
                  content="This tooltip is controlled programmatically"
                  open={isOpen}
                  onOpenChange={setIsOpen}
                >
                  <Button variant="outline">Controlled Tooltip</Button>
                </SimpleTooltip>

                <Button
                  onClick={() => setIsOpen(!isOpen)}
                  variant={isOpen ? "default" : "secondary"}
                  size="sm"
                >
                  {isOpen ? "Hide" : "Show"}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Tooltip is currently:{" "}
                <strong>{isOpen ? "Open" : "Closed"}</strong>
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Custom Timing</h4>
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Button
                  onClick={() => setDelayDuration(0)}
                  variant={delayDuration === 0 ? "default" : "outline"}
                  size="sm"
                >
                  Instant (0ms)
                </Button>
                <Button
                  onClick={() => setDelayDuration(300)}
                  variant={delayDuration === 300 ? "default" : "outline"}
                  size="sm"
                >
                  Fast (300ms)
                </Button>
                <Button
                  onClick={() => setDelayDuration(700)}
                  variant={delayDuration === 700 ? "default" : "outline"}
                  size="sm"
                >
                  Default (700ms)
                </Button>
                <Button
                  onClick={() => setDelayDuration(1500)}
                  variant={delayDuration === 1500 ? "default" : "outline"}
                  size="sm"
                >
                  Slow (1500ms)
                </Button>
              </div>

              <SimpleTooltip
                content={`Delay: ${delayDuration}ms`}
                delayDuration={delayDuration}
              >
                <Button variant="outline">
                  Test Delay ({delayDuration}ms)
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">No Arrow</h4>
            <div className="flex gap-4">
              <SimpleTooltip content="Tooltip with arrow" showArrow={true}>
                <Button variant="outline" size="sm">
                  With Arrow
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Tooltip without arrow" showArrow={false}>
                <Button variant="outline" size="sm">
                  No Arrow
                </Button>
              </SimpleTooltip>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common tooltip patterns and use cases in applications.
          </p>
        </div>
        <div className="space-y-8 p-6 border rounded-lg">
          {/* Toolbar with Tooltips */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">
              Toolbar with Action Tooltips
            </h4>
            <div className="flex gap-2 p-3 bg-muted/30 rounded-lg border">
              <SimpleTooltip content="Copy (Ctrl+C)" size="sm">
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Cut (Ctrl+X)" size="sm">
                <Button variant="ghost" size="icon">
                  <Scissors className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Save (Ctrl+S)" size="sm">
                <Button variant="ghost" size="icon">
                  <Save className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <Separator orientation="vertical" className="h-8" />

              <SimpleTooltip
                content="Delete selected items"
                variant="destructive"
                size="sm"
              >
                <Button variant="ghost" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          {/* Media Controls */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Media Player Controls</h4>
            <div className="flex gap-2 justify-center p-4 bg-muted/30 rounded-lg border">
              <SimpleTooltip content="Previous track" side="top">
                <Button variant="ghost" size="icon">
                  <SkipBack className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Play/Pause (Spacebar)" side="top">
                <Button variant="default" size="icon">
                  <Play className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Next track" side="top">
                <Button variant="ghost" size="icon">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Repeat mode" side="top">
                <Button variant="ghost" size="icon">
                  <Repeat className="h-4 w-4" />
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Shuffle playlist" side="top">
                <Button variant="ghost" size="icon">
                  <Shuffle className="h-4 w-4" />
                </Button>
              </SimpleTooltip>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Status Indicators</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <SimpleTooltip
                content={
                  <div className="space-y-1">
                    <p className="font-medium">System Status</p>
                    <p className="text-xs">All systems operational</p>
                    <p className="text-xs text-green-400">
                      Last checked: 2 minutes ago
                    </p>
                  </div>
                }
                variant="success"
                size="lg"
              >
                <div className="p-3 border rounded-lg text-center cursor-pointer hover:bg-muted/50">
                  <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Healthy</p>
                </div>
              </SimpleTooltip>

              <SimpleTooltip
                content={
                  <div className="space-y-1">
                    <p className="font-medium">Connection Status</p>
                    <p className="text-xs">WiFi: Strong signal (5G)</p>
                    <p className="text-xs">Speed: 150 Mbps</p>
                  </div>
                }
                variant="info"
                size="lg"
              >
                <div className="p-3 border rounded-lg text-center cursor-pointer hover:bg-muted/50">
                  <Wifi className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Connected</p>
                </div>
              </SimpleTooltip>

              <SimpleTooltip
                content={
                  <div className="space-y-1">
                    <p className="font-medium">Battery Status</p>
                    <p className="text-xs">Charging: 85%</p>
                    <p className="text-xs">Time remaining: 2h 30m</p>
                  </div>
                }
                variant="warning"
                size="lg"
              >
                <div className="p-3 border rounded-lg text-center cursor-pointer hover:bg-muted/50">
                  <Battery className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Charging</p>
                </div>
              </SimpleTooltip>

              <SimpleTooltip
                content={
                  <div className="space-y-1">
                    <p className="font-medium">Security Alert</p>
                    <p className="text-xs">Suspicious login attempt detected</p>
                    <p className="text-xs">
                      Location: Unknown (IP: 192.168.1.1)
                    </p>
                  </div>
                }
                variant="destructive"
                size="lg"
              >
                <div className="p-3 border rounded-lg text-center cursor-pointer hover:bg-muted/50">
                  <Shield className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Alert</p>
                </div>
              </SimpleTooltip>
            </div>
          </div>

          {/* Form Field Help */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Form Field Help</h4>
            <div className="max-w-md space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  Username
                  <SimpleTooltip
                    content={
                      <div className="space-y-1">
                        <p className="font-medium">Username Requirements</p>
                        <ul className="text-xs space-y-1">
                          <li>• 3-20 characters</li>
                          <li>• Letters, numbers, and underscores only</li>
                          <li>• Cannot start with a number</li>
                        </ul>
                      </div>
                    }
                    size="lg"
                    side="right"
                  >
                    <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                  </SimpleTooltip>
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full px-3 py-2 border border-input rounded-md"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  Password
                  <SimpleTooltip
                    content={
                      <div className="space-y-1">
                        <p className="font-medium">Password Security</p>
                        <ul className="text-xs space-y-1">
                          <li>• At least 8 characters</li>
                          <li>• Include uppercase & lowercase</li>
                          <li>• Include numbers & symbols</li>
                          <li>• Avoid common words</li>
                        </ul>
                      </div>
                    }
                    size="lg"
                    side="right"
                  >
                    <HelpCircle className="h-4 w-4 text-muted-foreground cursor-help" />
                  </SimpleTooltip>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full px-3 py-2 border border-input rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Navigation with Tooltips */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Navigation Menu</h4>
            <div className="flex gap-1 p-2 bg-muted/30 rounded-lg border">
              <SimpleTooltip content="Dashboard Overview" side="bottom">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Monitor className="h-4 w-4" />
                  Dashboard
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="User Management" side="bottom">
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="h-4 w-4" />
                  Users
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="Application Settings" side="bottom">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </SimpleTooltip>

              <SimpleTooltip content="System Notifications" side="bottom">
                <Button variant="ghost" size="sm" className="gap-2 relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                  Alerts
                </Button>
              </SimpleTooltip>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Global Provider */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Global Configuration</h2>
          <p className="text-muted-foreground">
            Use TooltipProvider to configure tooltips globally across your
            application.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">
              Provider Configuration Example
            </h4>
            <div className="bg-muted/50 p-4 rounded-lg">
              <pre className="text-sm overflow-x-auto">
                {`<TooltipProvider 
  delayDuration={700}
  skipDelayDuration={300}
>
  <App />
</TooltipProvider>`}
              </pre>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>
                • <strong>delayDuration</strong>: Time before tooltip appears
                (default: 700ms)
              </p>
              <p>
                • <strong>skipDelayDuration</strong>: Time to skip delay when
                moving between tooltips (default: 300ms)
              </p>
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
            Complete API reference for Tooltip components.
          </p>
        </div>
        <div className="space-y-6">
          {/* TooltipProvider */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">TooltipProvider</h3>
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
                      delayDuration
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">700</td>
                    <td className="border border-border p-2">
                      Time in ms before tooltip appears
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      skipDelayDuration
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">300</td>
                    <td className="border border-border p-2">
                      Time to skip delay when moving between tooltips
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disableHoverableContent
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Prevents hovering over tooltip content
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tooltip */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Tooltip</h3>
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
                    <td className="border border-border p-2 font-mono">open</td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Controlled open state
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultOpen
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Default open state for uncontrolled usage
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onOpenChange
                    </td>
                    <td className="border border-border p-2">
                      (open: boolean) =&gt; void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Called when open state changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      delayDuration
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">700</td>
                    <td className="border border-border p-2">
                      Override global delay duration
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disableHoverableContent
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Prevents hovering over content
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* TooltipContent */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">TooltipContent</h3>
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
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'secondary' | 'accent' | 'destructive' |
                      'success' | 'warning' | 'info' | 'dark' | 'light'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the tooltip
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the tooltip
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">side</td>
                    <td className="border border-border p-2">
                      'top' | 'right' | 'bottom' | 'left'
                    </td>
                    <td className="border border-border p-2">'top'</td>
                    <td className="border border-border p-2">
                      Position relative to trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      align
                    </td>
                    <td className="border border-border p-2">
                      'start' | 'center' | 'end'
                    </td>
                    <td className="border border-border p-2">'center'</td>
                    <td className="border border-border p-2">
                      Alignment relative to trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      sideOffset
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">4</td>
                    <td className="border border-border p-2">
                      Distance from trigger
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      alignOffset
                    </td>
                    <td className="border border-border p-2">number</td>
                    <td className="border border-border p-2">0</td>
                    <td className="border border-border p-2">
                      Alignment offset
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      showArrow
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">true</td>
                    <td className="border border-border p-2">
                      Show/hide the arrow
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      avoidCollisions
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">true</td>
                    <td className="border border-border p-2">
                      Adjust position to avoid collisions
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SimpleTooltip */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">SimpleTooltip</h3>
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
                      content
                    </td>
                    <td className="border border-border p-2">ReactNode</td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      Tooltip content to display
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      children
                    </td>
                    <td className="border border-border p-2">ReactNode</td>
                    <td className="border border-border p-2">required</td>
                    <td className="border border-border p-2">
                      Trigger element
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      Tooltip variants
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style variant
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">Size variants</td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">Size variant</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      showArrow
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">true</td>
                    <td className="border border-border p-2">
                      Show/hide arrow
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
                  <td className="border border-border p-2">
                    "closed" | "delayed-open" | "instant-open"
                  </td>
                  <td className="border border-border p-2">
                    Current state of the tooltip
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-side]
                  </td>
                  <td className="border border-border p-2">
                    "top" | "right" | "bottom" | "left"
                  </td>
                  <td className="border border-border p-2">
                    Current side (after collision detection)
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-align]
                  </td>
                  <td className="border border-border p-2">
                    "start" | "center" | "end"
                  </td>
                  <td className="border border-border p-2">
                    Current alignment (after collision detection)
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
            Built-in accessibility features and keyboard interactions.
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
                      Opens/closes the tooltip without delay
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Space
                    </td>
                    <td className="py-2 pl-4">
                      If open, closes the tooltip without delay
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Enter
                    </td>
                    <td className="py-2 pl-4">
                      If open, closes the tooltip without delay
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Escape
                    </td>
                    <td className="py-2 pl-4">
                      If open, closes the tooltip without delay
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">ARIA Compliance</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Automatically applies{" "}
                <code className="bg-muted px-1 rounded">role="tooltip"</code>
              </li>
              <li>
                • Uses{" "}
                <code className="bg-muted px-1 rounded">aria-describedby</code>{" "}
                to associate tooltip with trigger
              </li>
              <li>
                • Supports both hover and focus triggers for keyboard users
              </li>
              <li>
                • Respects{" "}
                <code className="bg-muted px-1 rounded">
                  prefers-reduced-motion
                </code>{" "}
                settings
              </li>
              <li>• Provides appropriate focus management</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>• Keep tooltip content concise and helpful</li>
              <li>• Don't put essential information only in tooltips</li>
              <li>• Ensure tooltips work with keyboard navigation</li>
              <li>• Use appropriate variants for semantic meaning</li>
              <li>• Test with screen readers and keyboard-only users</li>
              <li>• Consider touch device users (no hover state)</li>
              <li>• Provide alternative access to tooltip information</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
