import { Badge } from './badge';
import { Button } from './button';
import { Separator } from './separator';
import { Toggle } from './toggle';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Heart,
  Star,
  Bookmark,
  Bell,
  BellOff,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Wifi,
  WifiOff,
  Lock,
  Sun,
  Moon,
} from "lucide-react";

export default {
  title: "UI/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "solid",
        "destructive",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
    disabled: {
      control: "boolean",
    },
  },
};

// Basic toggle
export const Basic = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Toggle pressed={pressed} onPressedChange={setPressed}>
          <Bold className="h-4 w-4" />
        </Toggle>
        <span className="text-sm">Bold text formatting</span>
      </div>

      <p className="text-sm text-muted-foreground">
        Current state: <strong>{pressed ? "Active" : "Inactive"}</strong>
      </p>
    </div>
  );
};

// Variant showcase
export const Variants = () => {
  const [states, setStates] = useState({
    default: false,
    outline: false,
    secondary: false,
    ghost: false,
    solid: false,
    destructive: false,
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Toggle
            variant="default"
            pressed={states.default}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, default: pressed }))
            }
          >
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Outline</h3>
          <Toggle
            variant="outline"
            pressed={states.outline}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, outline: pressed }))
            }
          >
            <Italic className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Secondary</h3>
          <Toggle
            variant="secondary"
            pressed={states.secondary}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, secondary: pressed }))
            }
          >
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Ghost</h3>
          <Toggle
            variant="ghost"
            pressed={states.ghost}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, ghost: pressed }))
            }
          >
            <Star className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Solid</h3>
          <Toggle
            variant="solid"
            pressed={states.solid}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, solid: pressed }))
            }
          >
            <Heart className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Destructive</h3>
          <Toggle
            variant="destructive"
            pressed={states.destructive}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, destructive: pressed }))
            }
          >
            <Lock className="h-4 w-4" />
          </Toggle>
        </div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          setStates({
            default: false,
            outline: false,
            secondary: false,
            ghost: false,
            solid: false,
            destructive: false,
          })
        }
      >
        Reset All
      </Button>
    </div>
  );
};

// Size variations
export const SizeVariations = () => {
  const [states, setStates] = useState({
    sm: false,
    default: false,
    lg: false,
    xl: false,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-end gap-4">
        <div className="space-y-2">
          <h3 className="text-xs font-medium">Small</h3>
          <Toggle
            size="sm"
            pressed={states.sm}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, sm: pressed }))
            }
          >
            <Bold className="h-3 w-3" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Toggle
            size="default"
            pressed={states.default}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, default: pressed }))
            }
          >
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Large</h3>
          <Toggle
            size="lg"
            pressed={states.lg}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, lg: pressed }))
            }
          >
            <Bold className="h-4 w-4" />
          </Toggle>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Extra Large</h3>
          <Toggle
            size="xl"
            pressed={states.xl}
            onPressedChange={(pressed) =>
              setStates((s) => ({ ...s, xl: pressed }))
            }
          >
            <Bold className="h-5 w-5" />
          </Toggle>
        </div>
      </div>
    </div>
  );
};

// Text formatting toolbar
export const TextFormatting = () => {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
    alignLeft: true,
    alignCenter: false,
    alignRight: false,
    orderedList: false,
    unorderedList: false,
  });

  const setAlignment = (align: "left" | "center" | "right") => {
    setFormatting((prev) => ({
      ...prev,
      alignLeft: align === "left",
      alignCenter: align === "center",
      alignRight: align === "right",
    }));
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Text Editor Toolbar</CardTitle>
        <CardDescription>
          Rich text formatting controls using toggle buttons
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Formatting Controls */}
        <div>
          <h4 className="text-sm font-medium mb-2">Text Style</h4>
          <div className="flex gap-1">
            <Toggle
              pressed={formatting.bold}
              onPressedChange={(pressed) =>
                setFormatting((prev) => ({ ...prev, bold: pressed }))
              }
              aria-label="Bold"
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={formatting.italic}
              onPressedChange={(pressed) =>
                setFormatting((prev) => ({ ...prev, italic: pressed }))
              }
              aria-label="Italic"
            >
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={formatting.underline}
              onPressedChange={(pressed) =>
                setFormatting((prev) => ({ ...prev, underline: pressed }))
              }
              aria-label="Underline"
            >
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>
        </div>

        <Separator />

        {/* Alignment Controls */}
        <div>
          <h4 className="text-sm font-medium mb-2">Text Alignment</h4>
          <div className="flex gap-1">
            <Toggle
              pressed={formatting.alignLeft}
              onPressedChange={() => setAlignment("left")}
              aria-label="Align Left"
            >
              <AlignLeft className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={formatting.alignCenter}
              onPressedChange={() => setAlignment("center")}
              aria-label="Align Center"
            >
              <AlignCenter className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={formatting.alignRight}
              onPressedChange={() => setAlignment("right")}
              aria-label="Align Right"
            >
              <AlignRight className="h-4 w-4" />
            </Toggle>
          </div>
        </div>

        <Separator />

        {/* List Controls */}
        <div>
          <h4 className="text-sm font-medium mb-2">Lists</h4>
          <div className="flex gap-1">
            <Toggle
              pressed={formatting.unorderedList}
              onPressedChange={(pressed) =>
                setFormatting((prev) => ({
                  ...prev,
                  unorderedList: pressed,
                  orderedList: pressed ? false : prev.orderedList,
                }))
              }
              aria-label="Bullet List"
            >
              <List className="h-4 w-4" />
            </Toggle>
            <Toggle
              pressed={formatting.orderedList}
              onPressedChange={(pressed) =>
                setFormatting((prev) => ({
                  ...prev,
                  orderedList: pressed,
                  unorderedList: pressed ? false : prev.unorderedList,
                }))
              }
              aria-label="Numbered List"
            >
              <ListOrdered className="h-4 w-4" />
            </Toggle>
          </div>
        </div>

        {/* Preview */}
        <div className="p-4 border rounded-lg bg-muted/50">
          <div
            className={`text-sm ${
              formatting.alignLeft
                ? "text-left"
                : formatting.alignCenter
                  ? "text-center"
                  : "text-right"
            }`}
            style={{
              fontWeight: formatting.bold ? "bold" : "normal",
              fontStyle: formatting.italic ? "italic" : "normal",
              textDecoration: formatting.underline ? "underline" : "none",
            }}
          >
            {formatting.orderedList && "1. "}
            {formatting.unorderedList && "• "}
            Sample text with applied formatting
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Settings panel
export const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    sound: false,
    darkMode: false,
    wifi: true,
    bluetooth: false,
    location: true,
    autoplay: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>System Settings</CardTitle>
        <CardDescription>
          Manage your system preferences and toggles
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.notifications ? (
                <Bell className="h-4 w-4" />
              ) : (
                <BellOff className="h-4 w-4" />
              )}
              <div>
                <p className="text-sm font-medium">Notifications</p>
                <p className="text-xs text-muted-foreground">
                  {settings.notifications ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <Toggle
              variant="solid"
              pressed={settings.notifications}
              onPressedChange={() => toggleSetting("notifications")}
            >
              {settings.notifications ? (
                <Bell className="h-4 w-4" />
              ) : (
                <BellOff className="h-4 w-4" />
              )}
            </Toggle>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.sound ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
              <div>
                <p className="text-sm font-medium">Sound</p>
                <p className="text-xs text-muted-foreground">
                  {settings.sound ? "On" : "Muted"}
                </p>
              </div>
            </div>
            <Toggle
              variant="outline"
              pressed={settings.sound}
              onPressedChange={() => toggleSetting("sound")}
            >
              {settings.sound ? (
                <Volume2 className="h-4 w-4" />
              ) : (
                <VolumeX className="h-4 w-4" />
              )}
            </Toggle>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.darkMode ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              <div>
                <p className="text-sm font-medium">Dark Mode</p>
                <p className="text-xs text-muted-foreground">
                  {settings.darkMode ? "Dark theme" : "Light theme"}
                </p>
              </div>
            </div>
            <Toggle
              variant="ghost"
              pressed={settings.darkMode}
              onPressedChange={() => toggleSetting("darkMode")}
            >
              {settings.darkMode ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Toggle>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.wifi ? (
                <Wifi className="h-4 w-4" />
              ) : (
                <WifiOff className="h-4 w-4" />
              )}
              <div>
                <p className="text-sm font-medium">Wi-Fi</p>
                <p className="text-xs text-muted-foreground">
                  {settings.wifi ? "Connected" : "Disconnected"}
                </p>
              </div>
            </div>
            <Toggle
              variant="secondary"
              pressed={settings.wifi}
              onPressedChange={() => toggleSetting("wifi")}
            >
              {settings.wifi ? (
                <Wifi className="h-4 w-4" />
              ) : (
                <WifiOff className="h-4 w-4" />
              )}
            </Toggle>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {settings.autoplay ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
              <div>
                <p className="text-sm font-medium">Autoplay Videos</p>
                <p className="text-xs text-muted-foreground">
                  {settings.autoplay ? "Enabled" : "Disabled"}
                </p>
              </div>
            </div>
            <Toggle
              pressed={settings.autoplay}
              onPressedChange={() => toggleSetting("autoplay")}
            >
              {settings.autoplay ? (
                <Play className="h-4 w-4" />
              ) : (
                <Pause className="h-4 w-4" />
              )}
            </Toggle>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Social actions
export const SocialActions = () => {
  const [actions, setActions] = useState({
    liked: false,
    bookmarked: false,
    starred: false,
  });

  const stats = {
    likes: 124 + (actions.liked ? 1 : 0),
    bookmarks: 43 + (actions.bookmarked ? 1 : 0),
    stars: 89 + (actions.starred ? 1 : 0),
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Article Title</CardTitle>
        <CardDescription>
          Understanding React Components and State Management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This article covers the fundamentals of React components, how to
          manage state effectively, and best practices for building scalable
          applications.
        </p>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex gap-2">
            <Toggle
              variant={actions.liked ? "solid" : "ghost"}
              pressed={actions.liked}
              onPressedChange={(pressed) =>
                setActions((prev) => ({ ...prev, liked: pressed }))
              }
              className={actions.liked ? "text-red-600" : ""}
            >
              <Heart
                className={`h-4 w-4 ${actions.liked ? "fill-current" : ""}`}
              />
              <span className="ml-2 text-sm">{stats.likes}</span>
            </Toggle>

            <Toggle
              variant={actions.bookmarked ? "solid" : "ghost"}
              pressed={actions.bookmarked}
              onPressedChange={(pressed) =>
                setActions((prev) => ({ ...prev, bookmarked: pressed }))
              }
              className={actions.bookmarked ? "text-blue-600" : ""}
            >
              <Bookmark
                className={`h-4 w-4 ${actions.bookmarked ? "fill-current" : ""}`}
              />
              <span className="ml-2 text-sm">{stats.bookmarks}</span>
            </Toggle>

            <Toggle
              variant={actions.starred ? "solid" : "ghost"}
              pressed={actions.starred}
              onPressedChange={(pressed) =>
                setActions((prev) => ({ ...prev, starred: pressed }))
              }
              className={actions.starred ? "text-yellow-600" : ""}
            >
              <Star
                className={`h-4 w-4 ${actions.starred ? "fill-current" : ""}`}
              />
              <span className="ml-2 text-sm">{stats.stars}</span>
            </Toggle>
          </div>

          <div className="flex gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">JavaScript</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Disabled state
export const DisabledState = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-4">Disabled Toggles</h3>
        <div className="flex gap-2">
          <Toggle disabled>
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle disabled pressed>
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle disabled variant="solid">
            <Star className="h-4 w-4" />
          </Toggle>
          <Toggle disabled pressed variant="solid">
            <Heart className="h-4 w-4 fill-current" />
          </Toggle>
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Disabled toggles cannot be interacted with and show reduced opacity.
      </p>
    </div>
  );
};

// Interactive playground
export const Playground = (args: {
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "ghost"
    | "solid"
    | "destructive";
  size?: "sm" | "default" | "lg" | "xl";
  disabled?: boolean;
}) => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <Badge variant="secondary">Variant: {args.variant || "default"}</Badge>
        <Badge variant="secondary">Size: {args.size || "default"}</Badge>
        <Badge variant="secondary">Pressed: {pressed ? "Yes" : "No"}</Badge>
        {args.disabled && <Badge variant="destructive">Disabled</Badge>}
      </div>

      <div className="flex items-center gap-4">
        <Toggle
          variant={args.variant}
          size={args.size}
          disabled={args.disabled}
          pressed={pressed}
          onPressedChange={setPressed}
        >
          <Star className="h-4 w-4" />
          <span className="ml-2">Toggle Me</span>
        </Toggle>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setPressed(!pressed)}
          disabled={args.disabled}
        >
          Toggle Externally
        </Button>
      </div>

      <p className="text-sm text-muted-foreground">
        Current state: <strong>{pressed ? "Pressed" : "Not Pressed"}</strong>
      </p>
    </div>
  );
};

Playground.args = {
  variant: "default",
  size: "default",
  disabled: false,
};
