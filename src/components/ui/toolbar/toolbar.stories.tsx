import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
} from "@/components/ui/toolbar";
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
  Copy,
  Scissors,
  ClipboardPaste,
  Save,
  Upload,
  Download,
  Trash2,
  Edit3,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Grid3X3,
  Rows3,
  Columns3,
  Undo,
  Redo,
  Settings,
  Share2,
  FileText,
  Image,
  Video,
  Folder,
  Plus,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Palette,
  Type,
  Eye,
  EyeOff,
  Play,
  Pause,
  Square,
  SkipBack,
  SkipForward,
} from "lucide-react";

export default {
  title: "UI/Toolbar",
  component: Toolbar,
  docs: {
    description: {
      component:
        "A toolbar component that provides a collection of commonly used controls and actions. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
};

// Basic toolbar
export const Basic = () => {
  const [alignment, setAlignment] = useState<string>("left");

  return (
    <div className="space-y-4">
      <Toolbar>
        <ToolbarButton onClick={() => alert("Save clicked")}>
          <Save className="h-4 w-4" />
          Save
        </ToolbarButton>

        <ToolbarSeparator />

        <ToolbarToggleGroup
          type="single"
          value={alignment}
          onValueChange={(value) => value && setAlignment(value)}
        >
          <ToolbarToggleItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToolbarToggleItem>
          <ToolbarToggleItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>

        <ToolbarSeparator />

        <ToolbarLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            alert("Settings clicked");
          }}
        >
          <Settings className="h-4 w-4" />
          Settings
        </ToolbarLink>
      </Toolbar>

      <p className="text-sm text-muted-foreground text-center">
        Current alignment: <strong>{alignment || "None"}</strong>
      </p>
    </div>
  );
};

// Variant showcase
export const Variants = () => {
  const [states, setStates] = useState({
    default: "center",
    secondary: "left",
    outline: "right",
    ghost: "justify",
  });

  const updateAlignment = (variant: string, value: string) => {
    if (value) {
      setStates((prev) => ({ ...prev, [variant]: value }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Toolbar variant="default">
            <ToolbarButton>
              <Save className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              value={states.default}
              onValueChange={(value) => updateAlignment("default", value || "")}
            >
              <ToolbarToggleItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="right">
                <AlignRight className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="justify">
                <AlignJustify className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Secondary</h3>
          <Toolbar variant="secondary">
            <ToolbarButton>
              <Save className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              value={states.secondary}
              onValueChange={(value) =>
                updateAlignment("secondary", value || "")
              }
            >
              <ToolbarToggleItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="right">
                <AlignRight className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="justify">
                <AlignJustify className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Outline</h3>
          <Toolbar variant="outline">
            <ToolbarButton>
              <Save className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              value={states.outline}
              onValueChange={(value) => updateAlignment("outline", value || "")}
            >
              <ToolbarToggleItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="right">
                <AlignRight className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="justify">
                <AlignJustify className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Ghost</h3>
          <Toolbar variant="ghost">
            <ToolbarButton>
              <Save className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup
              type="single"
              value={states.ghost}
              onValueChange={(value) => updateAlignment("ghost", value || "")}
            >
              <ToolbarToggleItem value="left">
                <AlignLeft className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="right">
                <AlignRight className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="justify">
                <AlignJustify className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>
      </div>
    </div>
  );
};

// Size variations
export const SizeVariations = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xs font-medium">Small</h3>
          <Toolbar size="sm">
            <ToolbarButton size="sm">
              <Save className="h-3 w-3" />
              Save
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup type="single">
              <ToolbarToggleItem size="sm" value="bold">
                <Bold className="h-3 w-3" />
              </ToolbarToggleItem>
              <ToolbarToggleItem size="sm" value="italic">
                <Italic className="h-3 w-3" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Toolbar size="default">
            <ToolbarButton size="default">
              <Save className="h-4 w-4" />
              Save
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup type="single">
              <ToolbarToggleItem size="default" value="bold">
                <Bold className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem size="default" value="italic">
                <Italic className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Large</h3>
          <Toolbar size="lg">
            <ToolbarButton size="lg">
              <Save className="h-4 w-4" />
              Save
            </ToolbarButton>
            <ToolbarSeparator />
            <ToolbarToggleGroup type="single">
              <ToolbarToggleItem size="lg" value="bold">
                <Bold className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem size="lg" value="italic">
                <Italic className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
          </Toolbar>
        </div>
      </div>
    </div>
  );
};

// Orientation variations
export const OrientationVariations = () => {
  const [horizontalAlignment, setHorizontalAlignment] =
    useState<string>("left");
  const [verticalAlignment, setVerticalAlignment] = useState<string>("center");

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Horizontal (Default)</h3>
        <Toolbar orientation="horizontal">
          <ToolbarButton>
            <Save className="h-4 w-4" />
            Save
          </ToolbarButton>
          <ToolbarSeparator orientation="horizontal" />
          <ToolbarToggleGroup
            type="single"
            value={horizontalAlignment}
            onValueChange={(value) => value && setHorizontalAlignment(value)}
          >
            <ToolbarToggleItem value="left">
              <AlignLeft className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="center">
              <AlignCenter className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="right">
              <AlignRight className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>
          <ToolbarSeparator orientation="horizontal" />
          <ToolbarLink href="#" onClick={(e) => e.preventDefault()}>
            <Settings className="h-4 w-4" />
            Settings
          </ToolbarLink>
        </Toolbar>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Vertical</h3>
        <div className="flex gap-4">
          <Toolbar orientation="vertical" className="w-fit">
            <ToolbarButton>
              <Save className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarSeparator orientation="vertical" />
            <ToolbarToggleGroup
              type="single"
              value={verticalAlignment}
              onValueChange={(value) => value && setVerticalAlignment(value)}
            >
              <ToolbarToggleItem value="top">
                <AlignLeft className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="center">
                <AlignCenter className="h-4 w-4" />
              </ToolbarToggleItem>
              <ToolbarToggleItem value="bottom">
                <AlignRight className="h-4 w-4" />
              </ToolbarToggleItem>
            </ToolbarToggleGroup>
            <ToolbarSeparator orientation="vertical" />
            <ToolbarLink href="#" onClick={(e) => e.preventDefault()}>
              <Settings className="h-4 w-4" />
            </ToolbarLink>
          </Toolbar>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              Horizontal alignment: <strong>{horizontalAlignment}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              Vertical alignment: <strong>{verticalAlignment}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Rich text editor toolbar
export const RichTextEditor = () => {
  const [formatting, setFormatting] = useState<string[]>(["bold"]);
  const [alignment, setAlignment] = useState<string>("left");
  const [listType, setListType] = useState<string>("");

  return (
    <Card className="w-[700px]">
      <CardHeader>
        <CardTitle>Rich Text Editor</CardTitle>
        <CardDescription>
          Complete text editor with comprehensive toolbar controls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Toolbar className="flex-wrap">
          {/* File Actions */}
          <ToolbarButton onClick={() => alert("Save")}>
            <Save className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Upload")}>
            <Upload className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Download")}>
            <Download className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarSeparator />

          {/* Undo/Redo */}
          <ToolbarButton onClick={() => alert("Undo")}>
            <Undo className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Redo")}>
            <Redo className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarSeparator />

          {/* Text Formatting */}
          <ToolbarToggleGroup
            type="multiple"
            value={formatting}
            onValueChange={setFormatting}
          >
            <ToolbarToggleItem value="bold" aria-label="Bold">
              <Bold className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="italic" aria-label="Italic">
              <Italic className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="underline" aria-label="Underline">
              <Underline className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          {/* Text Alignment */}
          <ToolbarToggleGroup
            type="single"
            value={alignment}
            onValueChange={(value) => value && setAlignment(value)}
          >
            <ToolbarToggleItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="justify" aria-label="Justify">
              <AlignJustify className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          {/* Lists */}
          <ToolbarToggleGroup
            type="single"
            value={listType}
            onValueChange={(value) => setListType(value || "")}
          >
            <ToolbarToggleItem value="bullet" aria-label="Bullet list">
              <List className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="numbered" aria-label="Numbered list">
              <ListOrdered className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          {/* Clipboard */}
          <ToolbarButton onClick={() => alert("Copy")}>
            <Copy className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Cut")}>
            <Scissors className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Paste")}>
            <ClipboardPaste className="h-4 w-4" />
          </ToolbarButton>
        </Toolbar>

        {/* Editor Preview */}
        <div className="min-h-[200px] p-4 border rounded-lg bg-muted/20">
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
            This is a sample text with applied formatting. You can see how the
            toolbar controls affect the text appearance in real-time.
          </div>
        </div>

        {/* Status */}
        <div className="flex flex-wrap gap-2 text-sm">
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

// Media player toolbar
export const MediaPlayer = () => {
  const [playState, setPlayState] = useState<string>("pause");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Media Player Controls</CardTitle>
        <CardDescription>
          Audio/video player with transport controls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Play className="h-12 w-12 text-white opacity-50" />
        </div>

        <Toolbar>
          <ToolbarButton onClick={() => alert("Previous track")}>
            <SkipBack className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarToggleGroup
            type="single"
            value={playState}
            onValueChange={(value) => value && setPlayState(value)}
          >
            <ToolbarToggleItem value="play" aria-label="Play">
              <Play className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="pause" aria-label="Pause">
              <Pause className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="stop" aria-label="Stop">
              <Square className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarButton onClick={() => alert("Next track")}>
            <SkipForward className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarSeparator />

          <ToolbarButton onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </ToolbarButton>

          <ToolbarButton onClick={() => alert("Settings")}>
            <Settings className="h-4 w-4" />
          </ToolbarButton>
        </Toolbar>

        <div className="text-center">
          <div className="font-medium">Now Playing</div>
          <div className="text-sm text-muted-foreground">
            Sample Track - Artist Name
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            Status:{" "}
            {playState === "play"
              ? "Playing"
              : playState === "pause"
                ? "Paused"
                : "Stopped"}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// File browser toolbar
export const FileBrowser = () => {
  const [viewMode, setViewMode] = useState<string>("grid");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>File Browser</CardTitle>
        <CardDescription>
          File management with comprehensive toolbar actions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Toolbar>
          {/* File Actions */}
          <ToolbarButton onClick={() => alert("New folder")}>
            <Plus className="h-4 w-4" />
            New
          </ToolbarButton>

          <ToolbarButton
            onClick={() => alert("Upload files")}
            disabled={selectedItems.length === 0}
          >
            <Upload className="h-4 w-4" />
            Upload
          </ToolbarButton>

          <ToolbarButton
            onClick={() => alert("Delete files")}
            disabled={selectedItems.length === 0}
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </ToolbarButton>

          <ToolbarSeparator />

          {/* View Mode */}
          <ToolbarToggleGroup
            type="single"
            value={viewMode}
            onValueChange={(value) => value && setViewMode(value)}
          >
            <ToolbarToggleItem value="grid" aria-label="Grid view">
              <Grid3X3 className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="list" aria-label="List view">
              <Rows3 className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="columns" aria-label="Column view">
              <Columns3 className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          {/* Sort Controls */}
          <ToolbarToggleGroup
            type="single"
            value={sortOrder}
            onValueChange={(value) => value && setSortOrder(value)}
          >
            <ToolbarToggleItem value="asc" aria-label="Sort ascending">
              <SortAsc className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="desc" aria-label="Sort descending">
              <SortDesc className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          {/* Search and Filter */}
          <ToolbarButton onClick={() => alert("Search")}>
            <Search className="h-4 w-4" />
            Search
          </ToolbarButton>

          <ToolbarButton onClick={() => alert("Filter")}>
            <Filter className="h-4 w-4" />
            Filter
          </ToolbarButton>
        </Toolbar>

        {/* File List Mock */}
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-4 gap-4" : "space-y-2"
          }
        >
          {["Document.pdf", "Image.jpg", "Video.mp4", "Folder"].map((item) => (
            <div
              key={item}
              className={`p-3 border rounded cursor-pointer transition-colors ${
                selectedItems.includes(item) ? "bg-accent" : "hover:bg-muted"
              } ${viewMode === "list" ? "flex items-center gap-2" : "text-center"}`}
              onClick={() => {
                setSelectedItems((prev) =>
                  prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item]
                );
              }}
            >
              {item === "Folder" ? (
                <Folder className="h-6 w-6" />
              ) : item.endsWith(".jpg") ? (
                <Image className="h-6 w-6" />
              ) : item.endsWith(".mp4") ? (
                <Video className="h-6 w-6" />
              ) : (
                <FileText className="h-6 w-6" />
              )}
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 text-sm">
          <Badge variant="secondary">View: {viewMode}</Badge>
          <Badge variant="secondary">
            Sort: {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Badge>
          <Badge variant="secondary">
            Selected: {selectedItems.length} items
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

// Image editor toolbar
export const ImageEditor = () => {
  const [tool, setTool] = useState<string>("select");
  const [zoom, setZoom] = useState<number>(100);

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Image Editor</CardTitle>
        <CardDescription>
          Professional image editing toolbar with tools and controls
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Toolbar className="flex-wrap">
          {/* Tools */}
          <ToolbarToggleGroup
            type="single"
            value={tool}
            onValueChange={(value) => value && setTool(value)}
          >
            <ToolbarToggleItem value="select" aria-label="Select tool">
              <Edit3 className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="brush" aria-label="Brush tool">
              <Palette className="h-4 w-4" />
            </ToolbarToggleItem>
            <ToolbarToggleItem value="text" aria-label="Text tool">
              <Type className="h-4 w-4" />
            </ToolbarToggleItem>
          </ToolbarToggleGroup>

          <ToolbarSeparator />

          {/* Transform */}
          <ToolbarButton onClick={() => alert("Rotate left")}>
            <RotateCcw className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Rotate right")}>
            <RotateCw className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarSeparator />

          {/* Zoom */}
          <ToolbarButton
            onClick={() => setZoom(Math.max(25, zoom - 25))}
            disabled={zoom <= 25}
          >
            <ZoomOut className="h-4 w-4" />
          </ToolbarButton>
          <span className="px-2 text-sm font-mono">{zoom}%</span>
          <ToolbarButton
            onClick={() => setZoom(Math.min(400, zoom + 25))}
            disabled={zoom >= 400}
          >
            <ZoomIn className="h-4 w-4" />
          </ToolbarButton>

          <ToolbarSeparator />

          {/* Actions */}
          <ToolbarButton onClick={() => alert("Save")}>
            <Save className="h-4 w-4" />
            Save
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Export")}>
            <Download className="h-4 w-4" />
            Export
          </ToolbarButton>
          <ToolbarButton onClick={() => alert("Share")}>
            <Share2 className="h-4 w-4" />
            Share
          </ToolbarButton>
        </Toolbar>

        {/* Canvas Mock */}
        <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
          <div className="text-center">
            <Image className="h-12 w-12 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-500">Image Canvas</p>
            <p className="text-sm text-gray-400">Current tool: {tool}</p>
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <Badge variant="secondary">Tool: {tool}</Badge>
          <Badge variant="secondary">Zoom: {zoom}%</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

// Interactive playground
export const Playground = (args: {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
  orientation?: "horizontal" | "vertical";
}) => {
  const [toggleState, setToggleState] = useState<string>("center");

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <Badge variant="secondary">Variant: {args.variant || "default"}</Badge>
        <Badge variant="secondary">Size: {args.size || "default"}</Badge>
        <Badge variant="secondary">
          Orientation: {args.orientation || "horizontal"}
        </Badge>
      </div>

      <Toolbar
        variant={args.variant}
        size={args.size}
        orientation={args.orientation}
      >
        <ToolbarButton
          size={args.size}
          onClick={() => alert("Action button clicked")}
        >
          <Save className="h-4 w-4" />
          Action
        </ToolbarButton>

        <ToolbarSeparator orientation={args.orientation} />

        <ToolbarToggleGroup
          type="single"
          value={toggleState}
          onValueChange={(value) => value && setToggleState(value)}
        >
          <ToolbarToggleItem
            size={args.size}
            value="left"
            aria-label="Left option"
          >
            <AlignLeft className="h-4 w-4" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            size={args.size}
            value="center"
            aria-label="Center option"
          >
            <AlignCenter className="h-4 w-4" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            size={args.size}
            value="right"
            aria-label="Right option"
          >
            <AlignRight className="h-4 w-4" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>

        <ToolbarSeparator orientation={args.orientation} />

        <ToolbarLink
          href="#"
          size={args.size}
          onClick={(e) => {
            e.preventDefault();
            alert("Link clicked");
          }}
        >
          <Settings className="h-4 w-4" />
          Settings
        </ToolbarLink>
      </Toolbar>

      <p className="text-sm text-muted-foreground">
        Selected toggle: <strong>{toggleState || "None"}</strong>
      </p>

      <Button variant="outline" size="sm" onClick={() => setToggleState("")}>
        Clear Selection
      </Button>
    </div>
  );
};

Playground.args = {
  variant: "default",
  size: "default",
  orientation: "horizontal",
};
