import React from 'react';
import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '../separator/separator';
import { Toggle } from '@/components/ui/toggle';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/card";
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
  docs: {
    description: {
      component:
        "A toggle component that can be pressed to switch between on and off states. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    defaultPressed: {
      control: "boolean",
      description:
        "The pressed state of the toggle when it is initially rendered.",
      table: { category: "Root Props" },
    },
    pressed: {
      control: "boolean",
      description: "The controlled pressed state of the toggle.",
      table: { category: "Root Props" },
    },
    onPressedChange: {
      action: "onPressedChange",
      description:
        "Event handler called when the pressed state of the toggle changes.",
      table: { category: "Root Props" },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child.",
      table: { category: "Root Props" },
    },

    // Appearance Props
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
      description: "The visual style variant of the toggle",
      table: { category: "Appearance Props" },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "The size of the toggle button",
      table: { category: "Appearance Props" },
    },
    // State Props
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the toggle",
      table: { category: "State Props" },
    },
    // HTML Props
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the toggle",
      table: { category: "HTML Props" },
    },
    id: {
      control: "text",
      description: "The id attribute for the toggle element",
      table: { category: "HTML Props" },
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

// Advanced Examples
export const AdvancedToggleGroups = {
  render: () => {
    const [textFormatting, setTextFormatting] = React.useState({
      bold: false,
      italic: false,
      underline: false,
    });

    const [alignment, setAlignment] = React.useState<
      "left" | "center" | "right"
    >("left");

    const [listType, setListType] = React.useState<
      "none" | "bullet" | "number"
    >("none");

    const [preferences, setPreferences] = React.useState({
      notifications: true,
      darkMode: false,
      wifi: true,
      sound: true,
      autoPlay: false,
    });

    const [favoriteItems, setFavoriteItems] = React.useState(new Set<string>());

    const toggleFavorite = (itemId: string) => {
      setFavoriteItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(itemId)) {
          newSet.delete(itemId);
        } else {
          newSet.add(itemId);
        }
        return newSet;
      });
    };

    const resetAllToggles = () => {
      setTextFormatting({ bold: false, italic: false, underline: false });
      setAlignment("left");
      setListType("none");
      setPreferences({
        notifications: true,
        darkMode: false,
        wifi: true,
        sound: true,
        autoPlay: false,
      });
      setFavoriteItems(new Set());
    };

    const sampleItems = [
      { id: "1", title: "React Documentation", category: "Learning" },
      { id: "2", title: "TypeScript Guide", category: "Learning" },
      { id: "3", title: "Design System", category: "Design" },
      { id: "4", title: "API Reference", category: "Development" },
      { id: "5", title: "Best Practices", category: "Development" },
    ];

    return (
      <div className="max-w-4xl space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced Toggle Interactions
          </h3>
        </div>

        {/* Text Formatting Toolbar */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Text Formatting Toolbar
              <Badge variant="secondary" className="text-xs">
                Multi-state
              </Badge>
            </CardTitle>
            <CardDescription>
              Independent toggles that can be combined for rich text formatting
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-1">
              <Toggle
                pressed={textFormatting.bold}
                onPressedChange={(pressed) =>
                  setTextFormatting((prev) => ({ ...prev, bold: pressed }))
                }
                variant="outline"
                aria-label="Toggle bold"
              >
                <Bold className="h-4 w-4" />
              </Toggle>

              <Toggle
                pressed={textFormatting.italic}
                onPressedChange={(pressed) =>
                  setTextFormatting((prev) => ({ ...prev, italic: pressed }))
                }
                variant="outline"
                aria-label="Toggle italic"
              >
                <Italic className="h-4 w-4" />
              </Toggle>

              <Toggle
                pressed={textFormatting.underline}
                onPressedChange={(pressed) =>
                  setTextFormatting((prev) => ({ ...prev, underline: pressed }))
                }
                variant="outline"
                aria-label="Toggle underline"
              >
                <Underline className="h-4 w-4" />
              </Toggle>

              <Separator orientation="vertical" className="h-6 mx-2" />

              <Toggle
                pressed={alignment === "left"}
                onPressedChange={(pressed) => pressed && setAlignment("left")}
                variant={alignment === "left" ? "default" : "ghost"}
                aria-label="Align left"
              >
                <AlignLeft className="h-4 w-4" />
              </Toggle>

              <Toggle
                pressed={alignment === "center"}
                onPressedChange={(pressed) => pressed && setAlignment("center")}
                variant={alignment === "center" ? "default" : "ghost"}
                aria-label="Align center"
              >
                <AlignCenter className="h-4 w-4" />
              </Toggle>

              <Toggle
                pressed={alignment === "right"}
                onPressedChange={(pressed) => pressed && setAlignment("right")}
                variant={alignment === "right" ? "default" : "ghost"}
                aria-label="Align right"
              >
                <AlignRight className="h-4 w-4" />
              </Toggle>

              <Separator orientation="vertical" className="h-6 mx-2" />

              <Toggle
                pressed={listType === "bullet"}
                onPressedChange={(pressed) =>
                  setListType(pressed ? "bullet" : "none")
                }
                variant="outline"
                aria-label="Bullet list"
              >
                <List className="h-4 w-4" />
              </Toggle>

              <Toggle
                pressed={listType === "number"}
                onPressedChange={(pressed) =>
                  setListType(pressed ? "number" : "none")
                }
                variant="outline"
                aria-label="Numbered list"
              >
                <ListOrdered className="h-4 w-4" />
              </Toggle>
            </div>

            <div className="p-4 border rounded-lg bg-muted/20">
              <h4 className="font-medium mb-2">Preview</h4>
              <div
                className={`
                  ${textFormatting.bold ? "font-bold" : ""}
                  ${textFormatting.italic ? "italic" : ""}
                  ${textFormatting.underline ? "underline" : ""}
                  ${alignment === "center" ? "text-center" : alignment === "right" ? "text-right" : "text-left"}
                `}
              >
                {listType === "none" &&
                  "Sample text with your formatting applied."}
                {listType === "bullet" && (
                  <ul className="list-disc list-inside">
                    <li>First bullet point</li>
                    <li>Second bullet point</li>
                    <li>Third bullet point</li>
                  </ul>
                )}
                {listType === "number" && (
                  <ol className="list-decimal list-inside">
                    <li>First numbered item</li>
                    <li>Second numbered item</li>
                    <li>Third numbered item</li>
                  </ol>
                )}
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              <div className="flex gap-2">
                <span>Format:</span>
                {Object.entries(textFormatting)
                  .filter(([active]) => active)
                  .map(([format]) => (
                    <Badge
                      key={format}
                      variant="secondary"
                      className="capitalize"
                    >
                      {format}
                    </Badge>
                  ))}
                {Object.values(textFormatting).every((v) => !v) && (
                  <Badge variant="outline">None</Badge>
                )}
              </div>
              <div className="flex gap-2">
                <span>Alignment:</span>
                <Badge variant="secondary" className="capitalize">
                  {alignment}
                </Badge>
              </div>
              <div className="flex gap-2">
                <span>List:</span>
                <Badge variant="secondary" className="capitalize">
                  {listType}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              System Preferences
              <Badge variant="secondary" className="text-xs">
                Settings Panel
              </Badge>
            </CardTitle>
            <CardDescription>
              Toggle switches for system-wide settings with visual feedback
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {preferences.notifications ? (
                    <Bell className="h-4 w-4 text-blue-500" />
                  ) : (
                    <BellOff className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm font-medium">Notifications</span>
                </div>
                <Toggle
                  pressed={preferences.notifications}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({
                      ...prev,
                      notifications: pressed,
                    }))
                  }
                  size="sm"
                  variant={preferences.notifications ? "default" : "outline"}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {preferences.darkMode ? (
                    <Moon className="h-4 w-4 text-indigo-500" />
                  ) : (
                    <Sun className="h-4 w-4 text-yellow-500" />
                  )}
                  <span className="text-sm font-medium">Dark Mode</span>
                </div>
                <Toggle
                  pressed={preferences.darkMode}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, darkMode: pressed }))
                  }
                  size="sm"
                  variant={preferences.darkMode ? "default" : "outline"}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {preferences.wifi ? (
                    <Wifi className="h-4 w-4 text-green-500" />
                  ) : (
                    <WifiOff className="h-4 w-4 text-red-500" />
                  )}
                  <span className="text-sm font-medium">WiFi</span>
                </div>
                <Toggle
                  pressed={preferences.wifi}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, wifi: pressed }))
                  }
                  size="sm"
                  variant={preferences.wifi ? "default" : "outline"}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {preferences.sound ? (
                    <Volume2 className="h-4 w-4 text-purple-500" />
                  ) : (
                    <VolumeX className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm font-medium">Sound</span>
                </div>
                <Toggle
                  pressed={preferences.sound}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, sound: pressed }))
                  }
                  size="sm"
                  variant={preferences.sound ? "default" : "outline"}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  {preferences.autoPlay ? (
                    <Play className="h-4 w-4 text-green-500" />
                  ) : (
                    <Pause className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm font-medium">Auto Play</span>
                </div>
                <Toggle
                  pressed={preferences.autoPlay}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, autoPlay: pressed }))
                  }
                  size="sm"
                  variant={preferences.autoPlay ? "default" : "outline"}
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Security Lock</span>
                </div>
                <Toggle
                  disabled
                  pressed={true}
                  size="sm"
                  variant="destructive"
                />
              </div>
            </div>

            <div className="p-4 bg-muted/20 rounded-lg">
              <h4 className="font-medium mb-2">Current Settings Summary</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
                {Object.entries(preferences).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <Badge variant={value ? "default" : "secondary"}>
                      {value ? "Enabled" : "Disabled"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Favorites System */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Favorites & Bookmarks
              <Badge variant="secondary" className="text-xs">
                Dynamic State
              </Badge>
            </CardTitle>
            <CardDescription>
              Toggle favorites with visual feedback and state persistence
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              {sampleItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Toggle
                      pressed={favoriteItems.has(item.id)}
                      onPressedChange={() => toggleFavorite(item.id)}
                      variant={favoriteItems.has(item.id) ? "default" : "ghost"}
                      size="sm"
                      aria-label={`${favoriteItems.has(item.id) ? "Remove from" : "Add to"} favorites`}
                    >
                      <Heart
                        className={`h-4 w-4 ${favoriteItems.has(item.id) ? "fill-current text-red-500" : ""}`}
                      />
                    </Toggle>
                    <Toggle
                      pressed={favoriteItems.has(`bookmark-${item.id}`)}
                      onPressedChange={() =>
                        toggleFavorite(`bookmark-${item.id}`)
                      }
                      variant={
                        favoriteItems.has(`bookmark-${item.id}`)
                          ? "default"
                          : "ghost"
                      }
                      size="sm"
                      aria-label={`${favoriteItems.has(`bookmark-${item.id}`) ? "Remove bookmark" : "Add bookmark"}`}
                    >
                      <Bookmark
                        className={`h-4 w-4 ${favoriteItems.has(`bookmark-${item.id}`) ? "fill-current text-blue-500" : ""}`}
                      />
                    </Toggle>
                    <Toggle
                      pressed={favoriteItems.has(`star-${item.id}`)}
                      onPressedChange={() => toggleFavorite(`star-${item.id}`)}
                      variant={
                        favoriteItems.has(`star-${item.id}`)
                          ? "default"
                          : "ghost"
                      }
                      size="sm"
                      aria-label={`${favoriteItems.has(`star-${item.id}`) ? "Remove star" : "Add star"}`}
                    >
                      <Star
                        className={`h-4 w-4 ${favoriteItems.has(`star-${item.id}`) ? "fill-current text-yellow-500" : ""}`}
                      />
                    </Toggle>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
              <div className="text-sm">
                <div className="font-medium mb-1">Statistics</div>
                <div className="space-y-1 text-muted-foreground">
                  <div>
                    ❤️ Hearts:{" "}
                    {
                      Array.from(favoriteItems).filter(
                        (id) => !id.includes("-")
                      ).length
                    }
                  </div>
                  <div>
                    🔖 Bookmarks:{" "}
                    {
                      Array.from(favoriteItems).filter((id) =>
                        id.startsWith("bookmark-")
                      ).length
                    }
                  </div>
                  <div>
                    ⭐ Stars:{" "}
                    {
                      Array.from(favoriteItems).filter((id) =>
                        id.startsWith("star-")
                      ).length
                    }
                  </div>
                </div>
              </div>
              <Button onClick={resetAllToggles} variant="outline" size="sm">
                Reset All
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>Independent toggles:</strong> Multiple toggles that can
              be active simultaneously
            </li>
            <li>
              • <strong>Mutually exclusive groups:</strong> Radio-like behavior
              where only one can be active
            </li>
            <li>
              • <strong>Visual state feedback:</strong> Icons and colors that
              change based on toggle state
            </li>
            <li>
              • <strong>Complex state management:</strong> Multiple toggle
              states with external controls
            </li>
            <li>
              • <strong>Disabled states:</strong> Non-interactive toggles for
              locked settings
            </li>
            <li>
              • <strong>Accessibility:</strong> Proper ARIA labels and keyboard
              navigation
            </li>
            <li>
              • <strong>Dynamic collections:</strong> Toggle state management
              for dynamic lists
            </li>
          </ul>
        </div>
      </div>
    );
  },
};
