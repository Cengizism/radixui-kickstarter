import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  SimpleTooltip,
} from "@/components/ui/tooltip";
import {
  Plus,
  Minus,
  Save,
  Settings,
  HelpCircle,
  Copy,
  Scissors,
  Trash2,
  Star,
  Info,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  Eye,
  EyeOff,
  Bell,
  User,
  Monitor,
  Play,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  Wifi,
  Battery,
  Shield,
} from "lucide-react";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  docs: {
    description: {
      component:
        "A tooltip component that displays helpful information when hovering or focusing on an element. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Provider Props
    delayDuration: {
      control: { type: "number", min: 0, max: 2000 },
      description:
        "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
      table: { category: "Provider Props" },
    },
    skipDelayDuration: {
      control: { type: "number", min: 0, max: 1000 },
      description:
        "When moving from one tooltip trigger to another, the delay before showing.",
      table: { category: "Provider Props" },
    },
    disableHoverableContent: {
      control: "boolean",
      description: "When true, tooltips will not be hoverable.",
      table: { category: "Provider Props" },
    },

    // Root Props
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the tooltip when it is initially rendered.",
      table: { category: "Root Props" },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the tooltip.",
      table: { category: "Root Props" },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the tooltip changes.",
      table: { category: "Root Props" },
    },

    // Trigger Props
    triggerAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the trigger.",
      table: { category: "Trigger Props" },
    },

    // Content Props
    contentAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the content.",
      table: { category: "Content Props" },
    },
    aria: {
      control: "text",
      description:
        "By default, screen readers will announce the content inside the component.",
      table: { category: "Content Props" },
    },
    onEscapeKeyDown: {
      action: "onEscapeKeyDown",
      description: "Event handler called when the escape key is down.",
      table: { category: "Content Props" },
    },
    onPointerDownOutside: {
      action: "onPointerDownOutside",
      description:
        "Event handler called when a pointer event occurs outside the bounds.",
      table: { category: "Content Props" },
    },
    forceMount: {
      control: "boolean",
      description: "Used to force mounting when more control is needed.",
      table: { category: "Content Props" },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "The preferred side of the trigger to render against.",
      table: { category: "Content Props" },
    },
    sideOffset: {
      control: { type: "number", min: -50, max: 50 },
      description: "The distance in pixels from the trigger.",
      table: { category: "Content Props" },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "The preferred alignment against the trigger.",
      table: { category: "Content Props" },
    },
    alignOffset: {
      control: { type: "number", min: -50, max: 50 },
      description:
        'An offset in pixels from the "start" or "end" alignment options.',
      table: { category: "Content Props" },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side and align to prevent collisions with boundary edges.",
      table: { category: "Content Props" },
    },
    collisionBoundary: {
      control: "object",
      description: "The element used as the collision boundary.",
      table: { category: "Content Props" },
    },
    collisionPadding: {
      control: { type: "number", min: 0, max: 50 },
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: { category: "Content Props" },
    },
    arrowPadding: {
      control: { type: "number", min: 0, max: 20 },
      description:
        "The padding between the arrow and the edges of the content.",
      table: { category: "Content Props" },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description: "The sticky behavior on the align axis.",
      table: { category: "Content Props" },
    },
    hideWhenDetached: {
      control: "boolean",
      description: "Whether to hide when the trigger becomes fully occluded.",
      table: { category: "Content Props" },
    },

    // Custom Style Props
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "accent",
        "destructive",
        "success",
        "warning",
        "info",
        "dark",
        "light",
      ],
      table: { category: "Style Props" },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      table: { category: "Style Props" },
    },
    showArrow: {
      control: "boolean",
      table: { category: "Style Props" },
    },
  },
};

// Basic tooltip usage
export const Default = () => (
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
);

// Manual tooltip implementation
export const ManualTooltip = () => (
  <div className="flex gap-4 items-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </TooltipTrigger>
        <TooltipContent>Configure application settings</TooltipContent>
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
);

// Tooltip variants
export const Variants = () => (
  <div className="flex flex-wrap gap-4">
    <SimpleTooltip content="Default tooltip" variant="default">
      <Button variant="outline" size="icon">
        <Info className="h-4 w-4" />
      </Button>
    </SimpleTooltip>

    <SimpleTooltip content="Secondary information" variant="secondary">
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
      <Button className="bg-orange-600 hover:bg-orange-700" size="icon">
        <AlertTriangle className="h-4 w-4" />
      </Button>
    </SimpleTooltip>

    <SimpleTooltip content="Information message" variant="info">
      <Button className="bg-blue-600 hover:bg-blue-700" size="icon">
        <AlertCircle className="h-4 w-4" />
      </Button>
    </SimpleTooltip>
  </div>
);

// Theme variants
export const ThemeVariants = () => (
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
);

// Size variants
export const SizeVariants = () => (
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
      <SimpleTooltip content="Large tooltip with more content space" size="lg">
        <Button variant="outline" size="lg">
          Large
        </Button>
      </SimpleTooltip>
      <p className="text-xs text-muted-foreground">Large</p>
    </div>
  </div>
);

// Positioning
export const Positioning = () => (
  <div className="grid grid-cols-3 gap-8 items-center justify-items-center min-h-[200px]">
    <div></div>
    <SimpleTooltip content="Top tooltip" side="top">
      <Button variant="outline">Top</Button>
    </SimpleTooltip>
    <div></div>

    <SimpleTooltip content="Left tooltip" side="left">
      <Button variant="outline">Left</Button>
    </SimpleTooltip>
    <div></div>
    <SimpleTooltip content="Right tooltip" side="right">
      <Button variant="outline">Right</Button>
    </SimpleTooltip>

    <div></div>
    <SimpleTooltip content="Bottom tooltip" side="bottom">
      <Button variant="outline">Bottom</Button>
    </SimpleTooltip>
    <div></div>
  </div>
);

// Alignment options
export const Alignment = () => (
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
);

// Custom offsets
export const CustomOffsets = () => (
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
);

// Arrow options
export const ArrowOptions = () => (
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
);

// Toolbar example
export const ToolbarExample = () => (
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

    <div className="w-px h-8 bg-border mx-1" />

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
);

// Media controls example
export const MediaControls = () => (
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
);

// Status indicators
export const StatusIndicators = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
    <SimpleTooltip
      content={
        <div className="space-y-1">
          <p className="font-medium">System Status</p>
          <p className="text-xs">All systems operational</p>
          <p className="text-xs text-green-400">Last checked: 2 minutes ago</p>
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
          <p className="text-xs">Location: Unknown (IP: 192.168.1.1)</p>
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
);

// Form field help
export const FormFieldHelp = () => (
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
);

// Navigation menu
export const NavigationMenu = () => (
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
);

// Complex content example
export const ComplexContent = () => (
  <div className="flex gap-4">
    <SimpleTooltip
      content={
        <div className="space-y-2 max-w-xs">
          <div className="flex items-center gap-2">
            <Badge variant="destructive" className="text-xs">
              Critical
            </Badge>
            <span className="font-medium">System Alert</span>
          </div>
          <p className="text-xs">
            Database connection failed. Please check your network settings and
            try again.
          </p>
          <div className="flex gap-2 pt-1">
            <Button size="sm" className="h-6 text-xs">
              Retry
            </Button>
            <Button size="sm" variant="outline" className="h-6 text-xs">
              Details
            </Button>
          </div>
        </div>
      }
      variant="destructive"
      size="lg"
      side="top"
    >
      <Button variant="destructive">
        <AlertCircle className="h-4 w-4 mr-2" />
        Critical Alert
      </Button>
    </SimpleTooltip>

    <SimpleTooltip
      content={
        <div className="space-y-2 max-w-sm">
          <div className="flex items-center justify-between">
            <span className="font-medium">User Profile</span>
            <Badge className="text-xs">Premium</Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@example.com</p>
            </div>
          </div>
          <p className="text-xs">Last active: 2 minutes ago</p>
        </div>
      }
      variant="accent"
      size="lg"
      side="bottom"
    >
      <Button variant="outline">
        <User className="h-4 w-4 mr-2" />
        View Profile
      </Button>
    </SimpleTooltip>
  </div>
);

// Interactive playground
export const Playground = (args: {
  variant?:
    | "default"
    | "secondary"
    | "accent"
    | "destructive"
    | "success"
    | "warning"
    | "info"
    | "dark"
    | "light";
  size?: "sm" | "default" | "lg";
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  showArrow?: boolean;
  sideOffset?: number;
}) => (
  <SimpleTooltip
    content={`This is a ${args.variant || "default"} tooltip with ${args.size || "default"} size`}
    {...args}
  >
    <Button variant="outline">Hover me</Button>
  </SimpleTooltip>
);

Playground.args = {
  variant: "default",
  size: "default",
  side: "top",
  align: "center",
  showArrow: true,
  sideOffset: 4,
};

// Advanced Examples
export const AdvancedTooltipSystem = {
  render: () => {
    const [tooltipSettings, setTooltipSettings] = React.useState({
      delayDuration: 700,
      skipDelayDuration: 300,
      disableHoverableContent: false,
      globalDisabled: false,
    });

    const [interactionStats, setInteractionStats] = React.useState({
      totalHovers: 0,
      currentlyOpen: 0,
      mostUsedTooltip: "",
      tooltipCounts: {} as Record<string, number>,
    });

    const trackTooltipInteraction = (tooltipId: string, isOpening: boolean) => {
      setInteractionStats((prev) => {
        const newStats = { ...prev };

        if (isOpening) {
          newStats.totalHovers += 1;
          newStats.currentlyOpen += 1;
          newStats.tooltipCounts[tooltipId] =
            (newStats.tooltipCounts[tooltipId] || 0) + 1;

          // Update most used tooltip
          const maxCount = Math.max(...Object.values(newStats.tooltipCounts));
          newStats.mostUsedTooltip =
            Object.entries(newStats.tooltipCounts).find(
              ([_, count]) => count === maxCount
            )?.[0] || "";
        } else {
          newStats.currentlyOpen = Math.max(0, newStats.currentlyOpen - 1);
        }

        return newStats;
      });
    };

    const resetStats = () => {
      setInteractionStats({
        totalHovers: 0,
        currentlyOpen: 0,
        mostUsedTooltip: "",
        tooltipCounts: {},
      });
    };

    const TooltipWrapper: React.FC<{
      children: React.ReactNode;
      content: React.ReactNode;
      tooltipId: string;
      variant?: string;
      side?: "top" | "bottom" | "left" | "right";
      [key: string]: any;
    }> = ({ children, content, tooltipId, ...props }) => {
      if (tooltipSettings.globalDisabled) {
        return <>{children}</>;
      }

      return (
        <Tooltip
          onOpenChange={(open) => trackTooltipInteraction(tooltipId, open)}
          {...props}
        >
          <TooltipTrigger asChild>{children}</TooltipTrigger>
          <TooltipContent {...props}>{content}</TooltipContent>
        </Tooltip>
      );
    };

    return (
      <TooltipProvider
        delayDuration={tooltipSettings.delayDuration}
        skipDelayDuration={tooltipSettings.skipDelayDuration}
        disableHoverableContent={tooltipSettings.disableHoverableContent}
      >
        <div className="max-w-6xl space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Advanced Tooltip System
            </h3>

            {/* Configuration Panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Delay Duration ({tooltipSettings.delayDuration}ms)
                </label>
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={tooltipSettings.delayDuration}
                  onChange={(e) =>
                    setTooltipSettings((prev) => ({
                      ...prev,
                      delayDuration: parseInt(e.target.value),
                    }))
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Skip Delay ({tooltipSettings.skipDelayDuration}ms)
                </label>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={tooltipSettings.skipDelayDuration}
                  onChange={(e) =>
                    setTooltipSettings((prev) => ({
                      ...prev,
                      skipDelayDuration: parseInt(e.target.value),
                    }))
                  }
                  className="w-full"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="disableHoverable"
                  checked={tooltipSettings.disableHoverableContent}
                  onChange={(e) =>
                    setTooltipSettings((prev) => ({
                      ...prev,
                      disableHoverableContent: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="disableHoverable" className="text-sm">
                  Disable Hoverable Content
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="globalDisabled"
                  checked={tooltipSettings.globalDisabled}
                  onChange={(e) =>
                    setTooltipSettings((prev) => ({
                      ...prev,
                      globalDisabled: e.target.checked,
                    }))
                  }
                />
                <label htmlFor="globalDisabled" className="text-sm">
                  Disable All Tooltips
                </label>
              </div>
            </div>
          </div>

          {/* Interactive Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Interactive Dashboard</h4>
              <div className="p-6 border rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <TooltipWrapper
                    tooltipId="cpu-usage"
                    content={
                      <div className="space-y-2 max-w-xs">
                        <div className="font-medium">CPU Usage</div>
                        <div className="text-sm">Current: 68%</div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-yellow-500 h-2 rounded-full"
                            style={{ width: "68%" }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Last updated: 2s ago
                        </div>
                      </div>
                    }
                    variant="warning"
                    side="top"
                  >
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm cursor-help">
                      <div className="text-2xl font-bold text-yellow-600">
                        68%
                      </div>
                      <div className="text-sm text-muted-foreground">CPU</div>
                    </div>
                  </TooltipWrapper>

                  <TooltipWrapper
                    tooltipId="memory-usage"
                    content={
                      <div className="space-y-2 max-w-xs">
                        <div className="font-medium">Memory Usage</div>
                        <div className="text-sm">8.2GB / 16GB (51%)</div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: "51%" }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Available: 7.8GB
                        </div>
                      </div>
                    }
                    variant="info"
                    side="top"
                  >
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm cursor-help">
                      <div className="text-2xl font-bold text-blue-600">
                        8.2GB
                      </div>
                      <div className="text-sm text-muted-foreground">RAM</div>
                    </div>
                  </TooltipWrapper>

                  <TooltipWrapper
                    tooltipId="disk-usage"
                    content={
                      <div className="space-y-2 max-w-xs">
                        <div className="font-medium">Disk Usage</div>
                        <div className="text-sm">245GB / 512GB (48%)</div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: "48%" }}
                          />
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Free space: 267GB
                        </div>
                      </div>
                    }
                    variant="success"
                    side="top"
                  >
                    <div className="p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm cursor-help">
                      <div className="text-2xl font-bold text-green-600">
                        245GB
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Storage
                      </div>
                    </div>
                  </TooltipWrapper>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <TooltipWrapper
                    tooltipId="network-status"
                    content={
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Wifi className="h-4 w-4 text-green-500" />
                          <span className="font-medium">Network Connected</span>
                        </div>
                        <div className="text-sm space-y-1">
                          <div>Download: 150 Mbps</div>
                          <div>Upload: 50 Mbps</div>
                          <div>Ping: 12ms</div>
                        </div>
                      </div>
                    }
                    variant="success"
                    side="right"
                  >
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm cursor-help">
                      <Wifi className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Connected</div>
                        <div className="text-sm text-muted-foreground">
                          150 Mbps
                        </div>
                      </div>
                    </div>
                  </TooltipWrapper>

                  <TooltipWrapper
                    tooltipId="security-status"
                    content={
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-500" />
                          <span className="font-medium">Security Active</span>
                        </div>
                        <div className="text-sm space-y-1">
                          <div>Firewall: Enabled</div>
                          <div>Antivirus: Up to date</div>
                          <div>Last scan: 1 hour ago</div>
                        </div>
                      </div>
                    }
                    variant="success"
                    side="left"
                  >
                    <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border shadow-sm cursor-help">
                      <Shield className="h-5 w-5 text-green-500" />
                      <div>
                        <div className="font-medium">Protected</div>
                        <div className="text-sm text-muted-foreground">
                          All systems
                        </div>
                      </div>
                    </div>
                  </TooltipWrapper>
                </div>
              </div>
            </div>

            {/* Media Player Interface */}
            <div className="space-y-4">
              <h4 className="font-medium">Media Player Controls</h4>
              <div className="p-6 border rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-48 h-32 bg-white dark:bg-gray-800 rounded-lg border shadow-sm flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-semibold">Now Playing</div>
                      <div className="text-sm text-muted-foreground">
                        Ambient Sounds
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <TooltipWrapper
                      tooltipId="shuffle"
                      content="Shuffle playlist"
                      variant="default"
                      side="top"
                    >
                      <Button variant="ghost" size="sm">
                        <Shuffle className="h-4 w-4" />
                      </Button>
                    </TooltipWrapper>

                    <TooltipWrapper
                      tooltipId="previous"
                      content="Previous track (Shift + ←)"
                      variant="default"
                      side="top"
                    >
                      <Button variant="ghost" size="sm">
                        <SkipBack className="h-4 w-4" />
                      </Button>
                    </TooltipWrapper>

                    <TooltipWrapper
                      tooltipId="play-pause"
                      content={
                        <div className="space-y-1">
                          <div className="font-medium">Play/Pause</div>
                          <div className="text-xs">Spacebar or Click</div>
                        </div>
                      }
                      variant="accent"
                      side="top"
                    >
                      <Button size="lg" className="rounded-full">
                        <Play className="h-6 w-6" />
                      </Button>
                    </TooltipWrapper>

                    <TooltipWrapper
                      tooltipId="next"
                      content="Next track (Shift + →)"
                      variant="default"
                      side="top"
                    >
                      <Button variant="ghost" size="sm">
                        <SkipForward className="h-4 w-4" />
                      </Button>
                    </TooltipWrapper>

                    <TooltipWrapper
                      tooltipId="repeat"
                      content="Repeat mode: Off"
                      variant="default"
                      side="top"
                    >
                      <Button variant="ghost" size="sm">
                        <Repeat className="h-4 w-4" />
                      </Button>
                    </TooltipWrapper>
                  </div>

                  <div className="w-full max-w-sm">
                    <TooltipWrapper
                      tooltipId="progress"
                      content={
                        <div className="space-y-1">
                          <div>2:34 / 4:21</div>
                          <div className="text-xs">Click to seek</div>
                        </div>
                      }
                      variant="dark"
                      side="top"
                    >
                      <div className="w-full bg-muted rounded-full h-1 cursor-pointer">
                        <div
                          className="bg-primary h-1 rounded-full"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </TooltipWrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tooltip Analytics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-muted/20 rounded-lg">
            <div>
              <div className="text-2xl font-bold">
                {interactionStats.totalHovers}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Tooltip Hovers
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {interactionStats.currentlyOpen}
              </div>
              <div className="text-sm text-muted-foreground">
                Currently Open
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">
                {Object.keys(interactionStats.tooltipCounts).length}
              </div>
              <div className="text-sm text-muted-foreground">
                Unique Tooltips Used
              </div>
            </div>
            <div>
              <div className="text-sm font-medium truncate">
                {interactionStats.mostUsedTooltip || "None yet"}
              </div>
              <div className="text-sm text-muted-foreground">Most Used</div>
            </div>
          </div>

          {/* Usage Statistics Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Tooltip Usage Statistics</h4>
              <Button onClick={resetStats} variant="outline" size="sm">
                Reset Stats
              </Button>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-3 text-sm font-medium">
                      Tooltip ID
                    </th>
                    <th className="text-left p-3 text-sm font-medium">
                      Hover Count
                    </th>
                    <th className="text-left p-3 text-sm font-medium">
                      Usage %
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(interactionStats.tooltipCounts)
                    .sort(([, a], [, b]) => b - a)
                    .map(([id, count]) => (
                      <tr key={id} className="border-t">
                        <td className="p-3 text-sm font-mono">{id}</td>
                        <td className="p-3 text-sm">{count}</td>
                        <td className="p-3 text-sm">
                          {interactionStats.totalHovers > 0
                            ? Math.round(
                                (count / interactionStats.totalHovers) * 100
                              )
                            : 0}
                          %
                        </td>
                      </tr>
                    ))}
                  {Object.keys(interactionStats.tooltipCounts).length === 0 && (
                    <tr>
                      <td
                        colSpan={3}
                        className="p-6 text-center text-muted-foreground"
                      >
                        No tooltip interactions yet. Hover over the elements
                        above to see statistics.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            <strong>Features demonstrated:</strong>
            <ul className="mt-1 space-y-1">
              <li>
                • <strong>Dynamic configuration:</strong> Real-time adjustment
                of delay durations and provider settings
              </li>
              <li>
                • <strong>Complex tooltip content:</strong> Rich content with
                charts, progress bars, and interactive elements
              </li>
              <li>
                • <strong>Usage analytics:</strong> Track tooltip interactions
                and generate usage statistics
              </li>
              <li>
                • <strong>Contextual positioning:</strong> Smart positioning
                that adapts to different UI contexts
              </li>
              <li>
                • <strong>Accessibility features:</strong> Proper ARIA
                attributes and keyboard navigation support
              </li>
              <li>
                • <strong>Performance monitoring:</strong> Real-time tracking of
                active tooltips and interaction patterns
              </li>
              <li>
                • <strong>Global control:</strong> System-wide tooltip
                enabling/disabling with graceful fallbacks
              </li>
            </ul>
          </div>
        </div>
      </TooltipProvider>
    );
  },
};
