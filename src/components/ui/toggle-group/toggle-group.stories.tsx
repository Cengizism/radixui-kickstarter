import React from 'react';
import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '../separator/separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
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
  AlignJustify,
  List,
  ListOrdered,
  Heart,
  Star,
  Bookmark,
  Grid3X3,
  LayoutGrid,
  Rows3,
  Columns3,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume1,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";

export default {
  title: "UI/ToggleGroup",
  component: ToggleGroup,
  docs: {
    description: {
      component:
        "A toggle group component that allows users to select one or multiple options from a set of toggle buttons. Built with Radix UI primitives.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    type: {
      control: "select",
      options: ["single", "multiple"],
      description:
        "Determines whether one or multiple items can be pressed at a time.",
      table: { category: "Root Props" },
    },
    value: {
      control: "text",
      description:
        'The controlled value of the pressed item when type is "single".',
      table: { category: "Root Props" },
    },
    defaultValue: {
      control: "text",
      description:
        'The value of the item to press when initially rendered when type is "single".',
      table: { category: "Root Props" },
    },
    multipleValue: {
      control: "object",
      description:
        'The controlled value of the pressed items when type is "multiple".',
      table: { category: "Root Props" },
    },
    defaultMultipleValue: {
      control: "object",
      description:
        'The values of the items to press when initially rendered when type is "multiple".',
      table: { category: "Root Props" },
    },
    // Event Handlers
    onValueChange: {
      action: "onValueChange",
      description: "Event handler called when the pressed state changes.",
      table: { category: "Event Handlers" },
    },
    onMultipleValueChange: {
      action: "onMultipleValueChange",
      description:
        'Event handler called when the pressed state changes when type is "multiple".',
      table: { category: "Event Handlers" },
    },
    // State Props
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the toggle group.",
      table: { category: "State Props" },
    },
    rovingFocus: {
      control: "boolean",
      description: "When false, navigating through the items will be disabled.",
      table: { category: "Root Props" },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the component.",
      table: { category: "Root Props" },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description: "The reading direction of the toggle group.",
      table: { category: "Root Props" },
    },
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop from last item to first, and vice versa.",
      table: { category: "Root Props" },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child.",
      table: { category: "Root Props" },
    },

    // Item Props
    itemValue: {
      control: "text",
      description: "A unique value for the item.",
      table: { category: "Item Props" },
    },
    itemDisabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the item.",
      table: { category: "Item Props" },
    },
    itemAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the item.",
      table: { category: "Item Props" },
    },

    // Custom Style Props
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "solid"],
      table: { category: "Style Props" },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      table: { category: "Style Props" },
    },
  },
};

// Basic toggle group
export const Basic = () => {
  const [value, setValue] = useState<string>("center");

  return (
    <div className="space-y-4">
      <ToggleGroup type="single" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <AlignJustify className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <p className="text-sm text-muted-foreground">
        Selected: <strong>{value || "None"}</strong>
      </p>
    </div>
  );
};

// Multiple selection
export const MultipleSelection = () => {
  const [value, setValue] = useState<string[]>(["bold"]);

  return (
    <div className="space-y-4">
      <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <p className="text-sm text-muted-foreground">
        Selected:{" "}
        <strong>{value.length > 0 ? value.join(", ") : "None"}</strong>
      </p>
    </div>
  );
};

// Variant showcase
export const Variants = () => {
  const [values, setValues] = useState({
    default: "option2",
    outline: "option1",
    secondary: "option3",
    ghost: "option2",
    solid: "option1",
  });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <ToggleGroup
            type="single"
            variant="default"
            value={values.default}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, default: value }))
            }
          >
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Outline</h3>
          <ToggleGroup
            type="single"
            variant="outline"
            value={values.outline}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, outline: value }))
            }
          >
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Secondary</h3>
          <ToggleGroup
            type="single"
            variant="secondary"
            value={values.secondary}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, secondary: value }))
            }
          >
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Ghost</h3>
          <ToggleGroup
            type="single"
            variant="ghost"
            value={values.ghost}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, ghost: value }))
            }
          >
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Solid</h3>
          <ToggleGroup
            type="single"
            variant="solid"
            value={values.solid}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, solid: value }))
            }
          >
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

// Size variations
export const SizeVariations = () => {
  const [values, setValues] = useState({
    sm: "center",
    default: "center",
    lg: "center",
    xl: "center",
  });

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xs font-medium">Small</h3>
          <ToggleGroup
            type="single"
            size="sm"
            value={values.sm}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, sm: value }))
            }
          >
            <ToggleGroupItem value="left">
              <AlignLeft className="h-3 w-3" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <AlignCenter className="h-3 w-3" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <AlignRight className="h-3 w-3" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <ToggleGroup
            type="single"
            size="default"
            value={values.default}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, default: value }))
            }
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
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Large</h3>
          <ToggleGroup
            type="single"
            size="lg"
            value={values.lg}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, lg: value }))
            }
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
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Extra Large</h3>
          <ToggleGroup
            type="single"
            size="xl"
            value={values.xl}
            onValueChange={(value) =>
              value && setValues((prev) => ({ ...prev, xl: value }))
            }
          >
            <ToggleGroupItem value="left">
              <AlignLeft className="h-5 w-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center">
              <AlignCenter className="h-5 w-5" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right">
              <AlignRight className="h-5 w-5" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

// Orientation variations
export const OrientationVariations = () => {
  const [horizontal, setHorizontal] = useState<string>("grid");
  const [vertical, setVertical] = useState<string>("list");

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Horizontal (Default)</h3>
        <ToggleGroup
          type="single"
          orientation="horizontal"
          value={horizontal}
          onValueChange={(value) => value && setHorizontal(value)}
        >
          <ToggleGroupItem value="grid">
            <LayoutGrid className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <Rows3 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="columns">
            <Columns3 className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">Selected: {horizontal}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Vertical</h3>
        <div className="flex items-start gap-4">
          <ToggleGroup
            type="single"
            orientation="vertical"
            value={vertical}
            onValueChange={(value) => value && setVertical(value)}
          >
            <ToggleGroupItem value="grid">
              <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="list">
              <Rows3 className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="columns">
              <Columns3 className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground">Selected: {vertical}</p>
        </div>
      </div>
    </div>
  );
};

// Text editor toolbar
export const TextEditorToolbar = () => {
  const [formatting, setFormatting] = useState<string[]>(["bold"]);
  const [alignment, setAlignment] = useState<string>("left");
  const [listType, setListType] = useState<string>("");

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Text Editor</CardTitle>
        <CardDescription>
          Rich text editor with toggle group controls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Formatting Controls */}
        <div>
          <h4 className="text-sm font-medium mb-2">Text Formatting</h4>
          <ToggleGroup
            type="multiple"
            variant="outline"
            value={formatting}
            onValueChange={setFormatting}
          >
            <ToggleGroupItem value="bold" aria-label="Bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <Separator />

        {/* Alignment Controls */}
        <div>
          <h4 className="text-sm font-medium mb-2">Text Alignment</h4>
          <ToggleGroup
            type="single"
            variant="secondary"
            value={alignment}
            onValueChange={(value) => value && setAlignment(value)}
          >
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="justify" aria-label="Justify">
              <AlignJustify className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <Separator />

        {/* List Controls */}
        <div>
          <h4 className="text-sm font-medium mb-2">Lists</h4>
          <ToggleGroup
            type="single"
            variant="ghost"
            value={listType}
            onValueChange={(value) => setListType(value || "")}
          >
            <ToggleGroupItem value="bullet" aria-label="Bullet list">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="numbered" aria-label="Numbered list">
              <ListOrdered className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Preview */}
        <div className="p-4 border rounded-lg bg-muted/50">
          <div
            className={`text-sm ${
              alignment === "left"
                ? "text-left"
                : alignment === "center"
                  ? "text-center"
                  : alignment === "right"
                    ? "text-right"
                    : "text-justify"
            }`}
            style={{
              fontWeight: formatting.includes("bold") ? "bold" : "normal",
              fontStyle: formatting.includes("italic") ? "italic" : "normal",
              textDecoration: formatting.includes("underline")
                ? "underline"
                : "none",
            }}
          >
            {listType === "bullet" && "• "}
            {listType === "numbered" && "1. "}
            Sample text with applied formatting and alignment
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">
            Formatting: {formatting.join(", ") || "None"}
          </Badge>
          <Badge variant="secondary">Alignment: {alignment}</Badge>
          <Badge variant="secondary">List: {listType || "None"}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

// View switcher
export const ViewSwitcher = () => {
  const [view, setView] = useState<string>("grid");
  const [theme, setTheme] = useState<string>("light");

  const mockData = [
    { id: 1, title: "Project Alpha", status: "In Progress" },
    { id: 2, title: "Project Beta", status: "Completed" },
    { id: 3, title: "Project Gamma", status: "Planning" },
  ];

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Project Dashboard</CardTitle>
            <CardDescription>
              Switch between different view modes
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <ToggleGroup
              type="single"
              variant="outline"
              size="sm"
              value={view}
              onValueChange={(value) => value && setView(value)}
            >
              <ToggleGroupItem value="grid" aria-label="Grid view">
                <Grid3X3 className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="list" aria-label="List view">
                <Rows3 className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>

            <ToggleGroup
              type="single"
              variant="ghost"
              size="sm"
              value={theme}
              onValueChange={(value) => value && setTheme(value)}
            >
              <ToggleGroupItem value="light" aria-label="Light theme">
                <Sun className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="dark" aria-label="Dark theme">
                <Moon className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="system" aria-label="System theme">
                <Monitor className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === "grid" ? (
          <div className="grid grid-cols-2 gap-4">
            {mockData.map((project) => (
              <div key={project.id} className="p-3 border rounded-lg">
                <h4 className="font-medium">{project.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {project.status}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {mockData.map((project) => (
              <div
                key={project.id}
                className="flex justify-between items-center p-2 border rounded"
              >
                <span className="font-medium">{project.title}</span>
                <Badge variant="secondary">{project.status}</Badge>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// Media player controls
export const MediaPlayerControls = () => {
  const [playState, setPlayState] = useState<string>("pause");
  const [volume, setVolume] = useState<string>("medium");

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Media Player</CardTitle>
        <CardDescription>Control playback and volume settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-2">Playback Controls</h4>
          <ToggleGroup
            type="single"
            variant="solid"
            value={playState}
            onValueChange={(value) => value && setPlayState(value)}
          >
            <ToggleGroupItem value="previous">
              <SkipBack className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="play">
              <Play className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="pause">
              <Pause className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="next">
              <SkipForward className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Volume Control</h4>
          <ToggleGroup
            type="single"
            variant="outline"
            value={volume}
            onValueChange={(value) => value && setVolume(value)}
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
        </div>

        <div className="p-4 bg-muted/50 rounded-lg text-center">
          <div className="text-sm font-medium">Now Playing</div>
          <div className="text-lg font-semibold">Sample Track</div>
          <div className="text-sm text-muted-foreground mt-2">
            Status:{" "}
            {playState === "play"
              ? "Playing"
              : playState === "pause"
                ? "Paused"
                : "Stopped"}{" "}
            | Volume: {volume}
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
        <h3 className="text-sm font-medium mb-4">Disabled Toggle Group</h3>
        <ToggleGroup type="single" disabled>
          <ToggleGroupItem value="left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Individual Disabled Items</h3>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" disabled>
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <p className="text-sm text-muted-foreground">
        Disabled toggle groups and items cannot be interacted with.
      </p>
    </div>
  );
};

// Interactive playground
export const Playground = (args: {
  variant?: "default" | "outline" | "secondary" | "ghost" | "solid";
  size?: "sm" | "default" | "lg" | "xl";
  orientation?: "horizontal" | "vertical";
  type?: "single" | "multiple";
}) => {
  const [singleValue, setSingleValue] = useState<string>("option2");
  const [multipleValue, setMultipleValue] = useState<string[]>([]);

  const isMultiple = args.type === "multiple";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <Badge variant="secondary">Variant: {args.variant || "default"}</Badge>
        <Badge variant="secondary">Size: {args.size || "default"}</Badge>
        <Badge variant="secondary">
          Orientation: {args.orientation || "horizontal"}
        </Badge>
        <Badge variant="secondary">Type: {args.type || "single"}</Badge>
      </div>

      {isMultiple ? (
        <ToggleGroup
          type="multiple"
          variant={args.variant}
          size={args.size}
          orientation={args.orientation}
          value={multipleValue}
          onValueChange={setMultipleValue}
        >
          <ToggleGroupItem value="option1">
            <Star className="h-4 w-4" />
            <span className="ml-2">Option 1</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="option2">
            <Heart className="h-4 w-4" />
            <span className="ml-2">Option 2</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="option3">
            <Bookmark className="h-4 w-4" />
            <span className="ml-2">Option 3</span>
          </ToggleGroupItem>
        </ToggleGroup>
      ) : (
        <ToggleGroup
          type="single"
          variant={args.variant}
          size={args.size}
          orientation={args.orientation}
          value={singleValue}
          onValueChange={(value) => value && setSingleValue(value)}
        >
          <ToggleGroupItem value="option1">
            <Star className="h-4 w-4" />
            <span className="ml-2">Option 1</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="option2">
            <Heart className="h-4 w-4" />
            <span className="ml-2">Option 2</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="option3">
            <Bookmark className="h-4 w-4" />
            <span className="ml-2">Option 3</span>
          </ToggleGroupItem>
        </ToggleGroup>
      )}

      <p className="text-sm text-muted-foreground">
        Selected:{" "}
        <strong>
          {isMultiple
            ? multipleValue.join(", ") || "None"
            : singleValue || "None"}
        </strong>
      </p>

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          if (isMultiple) {
            setMultipleValue([]);
          } else {
            setSingleValue("");
          }
        }}
      >
        Clear Selection
      </Button>
    </div>
  );
};

Playground.args = {
  variant: "default",
  size: "default",
  orientation: "horizontal",
  type: "single",
};

// Advanced Examples
export const AdvancedToggleGroupInteractions = {
  render: () => {
    const [textFormat, setTextFormat] = React.useState<string[]>([]);
    const [alignment, setAlignment] = React.useState<string>("left");
    const [layout, setLayout] = React.useState<string>("grid");
    const [mediaControls, setMediaControls] = React.useState<string[]>([]);
    const [theme, setTheme] = React.useState<string>("system");

    const [activeGroups, setActiveGroups] = React.useState({
      formatting: true,
      alignment: true,
      layout: true,
      media: true,
      theme: true,
    });

    const [groupSettings, setGroupSettings] = React.useState({
      orientation: "horizontal" as "horizontal" | "vertical",
      disabled: false,
      rovingFocus: true,
      loop: true,
      rtl: false,
    });

    const resetAllSelections = () => {
      setTextFormat([]);
      setAlignment("left");
      setLayout("grid");
      setMediaControls([]);
      setTheme("system");
    };

    const toggleGroupActive = (groupName: keyof typeof activeGroups) => {
      setActiveGroups((prev) => ({
        ...prev,
        [groupName]: !prev[groupName],
      }));
    };

    return (
      <div className="max-w-6xl space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced Toggle Group Interactions
          </h3>

          {/* Configuration Panel */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Orientation</label>
              <ToggleGroup
                type="single"
                value={groupSettings.orientation}
                onValueChange={(value) =>
                  value &&
                  setGroupSettings((prev) => ({
                    ...prev,
                    orientation: value as "horizontal" | "vertical",
                  }))
                }
                size="sm"
              >
                <ToggleGroupItem value="horizontal" className="text-xs">
                  H
                </ToggleGroupItem>
                <ToggleGroupItem value="vertical" className="text-xs">
                  V
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="disabled"
                checked={groupSettings.disabled}
                onChange={(e) =>
                  setGroupSettings((prev) => ({
                    ...prev,
                    disabled: e.target.checked,
                  }))
                }
              />
              <label htmlFor="disabled" className="text-sm">
                Disabled
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rovingFocus"
                checked={groupSettings.rovingFocus}
                onChange={(e) =>
                  setGroupSettings((prev) => ({
                    ...prev,
                    rovingFocus: e.target.checked,
                  }))
                }
              />
              <label htmlFor="rovingFocus" className="text-sm">
                Roving Focus
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="loop"
                checked={groupSettings.loop}
                onChange={(e) =>
                  setGroupSettings((prev) => ({
                    ...prev,
                    loop: e.target.checked,
                  }))
                }
              />
              <label htmlFor="loop" className="text-sm">
                Loop
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rtl"
                checked={groupSettings.rtl}
                onChange={(e) =>
                  setGroupSettings((prev) => ({
                    ...prev,
                    rtl: e.target.checked,
                  }))
                }
              />
              <label htmlFor="rtl" className="text-sm">
                RTL
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Text Formatting (Multiple Selection) */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Text Formatting
                    <Badge variant="outline" className="text-xs">
                      Multiple
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Apply multiple text formatting options
                  </CardDescription>
                </div>
                <Button
                  onClick={() => toggleGroupActive("formatting")}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  {activeGroups.formatting ? "Disable" : "Enable"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleGroup
                type="multiple"
                value={textFormat}
                onValueChange={setTextFormat}
                orientation={groupSettings.orientation}
                disabled={groupSettings.disabled || !activeGroups.formatting}
                rovingFocus={groupSettings.rovingFocus}
                loop={groupSettings.loop}
                dir={groupSettings.rtl ? "rtl" : "ltr"}
                variant="outline"
              >
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="text-sm font-medium mb-2">Preview</div>
                <div
                  className={`text-sm ${
                    textFormat.includes("bold") ? "font-bold" : ""
                  } ${textFormat.includes("italic") ? "italic" : ""} ${
                    textFormat.includes("underline") ? "underline" : ""
                  }`}
                >
                  Sample text with formatting
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Active: {textFormat.length > 0 ? textFormat.join(", ") : "None"}
              </div>
            </CardContent>
          </Card>

          {/* Text Alignment (Single Selection) */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Text Alignment
                    <Badge variant="outline" className="text-xs">
                      Single
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Choose text alignment option
                  </CardDescription>
                </div>
                <Button
                  onClick={() => toggleGroupActive("alignment")}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  {activeGroups.alignment ? "Disable" : "Enable"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleGroup
                type="single"
                value={alignment}
                onValueChange={(value) => value && setAlignment(value)}
                orientation={groupSettings.orientation}
                disabled={groupSettings.disabled || !activeGroups.alignment}
                rovingFocus={groupSettings.rovingFocus}
                loop={groupSettings.loop}
                dir={groupSettings.rtl ? "rtl" : "ltr"}
                variant="outline"
              >
                <ToggleGroupItem value="left" aria-label="Align Left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center" aria-label="Align Center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right" aria-label="Align Right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="justify" aria-label="Justify">
                  <AlignJustify className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="text-sm font-medium mb-2">Preview</div>
                <div
                  className={`text-sm ${
                    alignment === "center"
                      ? "text-center"
                      : alignment === "right"
                        ? "text-right"
                        : alignment === "justify"
                          ? "text-justify"
                          : "text-left"
                  }`}
                >
                  This text will be aligned according to your selection. Lorem
                  ipsum dolor sit amet.
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Active: {alignment || "None"}
              </div>
            </CardContent>
          </Card>

          {/* Layout Options */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Layout Mode
                    <Badge variant="outline" className="text-xs">
                      Single
                    </Badge>
                  </CardTitle>
                  <CardDescription>Select layout display mode</CardDescription>
                </div>
                <Button
                  onClick={() => toggleGroupActive("layout")}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  {activeGroups.layout ? "Disable" : "Enable"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleGroup
                type="single"
                value={layout}
                onValueChange={(value) => value && setLayout(value)}
                orientation={groupSettings.orientation}
                disabled={groupSettings.disabled || !activeGroups.layout}
                rovingFocus={groupSettings.rovingFocus}
                loop={groupSettings.loop}
                dir={groupSettings.rtl ? "rtl" : "ltr"}
                variant="ghost"
                size="sm"
              >
                <ToggleGroupItem value="grid" aria-label="Grid Layout">
                  <Grid3X3 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List Layout">
                  <LayoutGrid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="rows" aria-label="Rows Layout">
                  <Rows3 className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="columns" aria-label="Columns Layout">
                  <Columns3 className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="text-sm font-medium mb-2">Layout Preview</div>
                <div className="space-y-1">
                  {layout === "grid" && (
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="h-6 bg-muted rounded" />
                      ))}
                    </div>
                  )}
                  {layout === "list" && (
                    <div className="space-y-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-4 bg-muted rounded" />
                      ))}
                    </div>
                  )}
                  {layout === "rows" && (
                    <div className="grid grid-cols-1 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-3 bg-muted rounded" />
                      ))}
                    </div>
                  )}
                  {layout === "columns" && (
                    <div className="grid grid-cols-4 gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-8 bg-muted rounded" />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Active: {layout || "None"}
              </div>
            </CardContent>
          </Card>

          {/* Media Controls (Multiple Selection) */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Media Controls
                    <Badge variant="outline" className="text-xs">
                      Multiple
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    Control media playback options
                  </CardDescription>
                </div>
                <Button
                  onClick={() => toggleGroupActive("media")}
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                >
                  {activeGroups.media ? "Disable" : "Enable"}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ToggleGroup
                type="multiple"
                value={mediaControls}
                onValueChange={setMediaControls}
                orientation={groupSettings.orientation}
                disabled={groupSettings.disabled || !activeGroups.media}
                rovingFocus={groupSettings.rovingFocus}
                loop={groupSettings.loop}
                dir={groupSettings.rtl ? "rtl" : "ltr"}
                variant="secondary"
                size="lg"
              >
                <ToggleGroupItem value="shuffle" aria-label="Shuffle">
                  🔀
                </ToggleGroupItem>
                <ToggleGroupItem value="repeat" aria-label="Repeat">
                  🔁
                </ToggleGroupItem>
                <ToggleGroupItem value="mute" aria-label="Mute">
                  {mediaControls.includes("mute") ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </ToggleGroupItem>
                <ToggleGroupItem value="subtitles" aria-label="Subtitles">
                  📱
                </ToggleGroupItem>
                <ToggleGroupItem value="hd" aria-label="HD Quality">
                  HD
                </ToggleGroupItem>
              </ToggleGroup>

              <div className="p-3 bg-muted/20 rounded-lg">
                <div className="text-sm font-medium mb-2">Active Features</div>
                <div className="flex flex-wrap gap-1">
                  {mediaControls.length > 0 ? (
                    mediaControls.map((control) => (
                      <Badge
                        key={control}
                        variant="secondary"
                        className="text-xs capitalize"
                      >
                        {control}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      No features active
                    </span>
                  )}
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                Active:{" "}
                {mediaControls.length > 0 ? mediaControls.join(", ") : "None"}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Theme Selection (Horizontal with custom styling) */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  Theme Selection
                  <Badge variant="outline" className="text-xs">
                    Single + Custom
                  </Badge>
                </CardTitle>
                <CardDescription>
                  Choose application theme with enhanced visual feedback
                </CardDescription>
              </div>
              <Button
                onClick={() => toggleGroupActive("theme")}
                variant="ghost"
                size="sm"
                className="text-xs"
              >
                {activeGroups.theme ? "Disable" : "Enable"}
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <ToggleGroup
              type="single"
              value={theme}
              onValueChange={(value) => value && setTheme(value)}
              disabled={groupSettings.disabled || !activeGroups.theme}
              rovingFocus={groupSettings.rovingFocus}
              loop={groupSettings.loop}
              dir={groupSettings.rtl ? "rtl" : "ltr"}
              variant="outline"
              size="lg"
              className="justify-center"
            >
              <ToggleGroupItem
                value="light"
                aria-label="Light Theme"
                className="flex-col h-20 w-20"
              >
                <Sun className="h-6 w-6 mb-1 text-yellow-500" />
                <span className="text-xs">Light</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="dark"
                aria-label="Dark Theme"
                className="flex-col h-20 w-20"
              >
                <Moon className="h-6 w-6 mb-1 text-blue-500" />
                <span className="text-xs">Dark</span>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="system"
                aria-label="System Theme"
                className="flex-col h-20 w-20"
              >
                <Monitor className="h-6 w-6 mb-1 text-gray-500" />
                <span className="text-xs">System</span>
              </ToggleGroupItem>
            </ToggleGroup>

            <div className="p-4 border rounded-lg">
              <div className="text-sm font-medium mb-3">Theme Preview</div>
              <div
                className={`p-3 rounded border transition-colors ${
                  theme === "light"
                    ? "bg-white text-black border-gray-200"
                    : theme === "dark"
                      ? "bg-gray-900 text-white border-gray-700"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                }`}
              >
                <div className="text-sm">
                  <div className="font-medium">Selected Theme: {theme}</div>
                  <div className="text-xs opacity-70 mt-1">
                    This preview shows how the {theme} theme would look
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Global Controls */}
        <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
          <div className="space-y-1">
            <div className="font-medium">Global Actions</div>
            <div className="text-sm text-muted-foreground">
              Manage all toggle groups at once
            </div>
          </div>
          <div className="flex gap-2">
            <Button onClick={resetAllSelections} variant="outline" size="sm">
              Reset All Selections
            </Button>
            <Button
              onClick={() =>
                setGroupSettings((prev) => ({
                  ...prev,
                  disabled: !prev.disabled,
                }))
              }
              variant={groupSettings.disabled ? "destructive" : "default"}
              size="sm"
            >
              {groupSettings.disabled ? "Enable All" : "Disable All"}
            </Button>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>
              • <strong>Single vs Multiple selection:</strong> Different toggle
              group types with appropriate behaviors
            </li>
            <li>
              • <strong>Dynamic configuration:</strong> Live changes to
              orientation, focus behavior, and accessibility
            </li>
            <li>
              • <strong>Complex state management:</strong> Multiple groups with
              independent state and cross-group interactions
            </li>
            <li>
              • <strong>Visual feedback:</strong> Real-time previews showing the
              effect of toggle selections
            </li>
            <li>
              • <strong>Accessibility features:</strong> Roving focus, keyboard
              navigation, and RTL support
            </li>
            <li>
              • <strong>Custom styling:</strong> Different variants, sizes, and
              custom layouts for specialized use cases
            </li>
            <li>
              • <strong>Conditional enabling:</strong> Groups that can be
              disabled independently or globally
            </li>
          </ul>
        </div>
      </div>
    );
  },
};
