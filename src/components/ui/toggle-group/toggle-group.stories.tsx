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
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "solid"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
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
