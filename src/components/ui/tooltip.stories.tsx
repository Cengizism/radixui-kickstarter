import { Badge } from './badge';
import { Button } from './button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  SimpleTooltip,
} from "./tooltip";
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
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    showArrow: {
      control: "boolean",
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
