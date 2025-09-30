import { Badge } from '@/components/ui/badge/badge';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator/separator';
import { useState } from 'react';
import {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
} from "@/components/ui/toolbar/toolbar";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Copy,
  Scissors,
  Clipboard,
  Undo,
  Redo,
  Save,
  FileText,
  Image,
  Link2,
  MoreHorizontal,
  MoreVertical,
  Settings,
  Share,
  Download,
  Upload,
  Edit,
  Eye,
  EyeOff,
  Star,
  Grid3X3,
  List,
  BarChart3,
  PieChart,
  Calendar,
  Clock,
  Tag,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  RotateCw,
  Maximize2,
  Minimize2,
} from "lucide-react";

export const Route = createFileRoute("/docs/toolbar")({
  component: ToolbarDemo,
});

function ToolbarDemo() {
  const [textFormat, setTextFormat] = useState<string[]>(["bold"]);
  const [alignment, setAlignment] = useState("left");
  const [view, setView] = useState("grid");
  const [sort, setSort] = useState("asc");
  const [visibility, setVisibility] = useState<string[]>(["public"]);
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Toolbar</h1>
          <p className="text-lg text-muted-foreground">
            A container for grouping a set of controls, such as buttons, toggle
            groups or dropdown menus.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Grouping Container</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">Roving Focus</Badge>
          <Badge variant="secondary">Flexible Layout</Badge>
          <Badge variant="secondary">Accessible</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple toolbars with buttons, links, and separators.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Document Toolbar</h4>
            <Toolbar aria-label="Document formatting">
              <ToolbarButton>
                <FileText className="h-4 w-4" />
                New
              </ToolbarButton>
              <ToolbarButton>
                <Save className="h-4 w-4" />
                Save
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>
                <Copy className="h-4 w-4" />
                Copy
              </ToolbarButton>
              <ToolbarButton>
                <Scissors className="h-4 w-4" />
                Cut
              </ToolbarButton>
              <ToolbarButton>
                <Clipboard className="h-4 w-4" />
                Paste
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>
                <Undo className="h-4 w-4" />
                Undo
              </ToolbarButton>
              <ToolbarButton>
                <Redo className="h-4 w-4" />
                Redo
              </ToolbarButton>
              <ToolbarLink href="#" className="ml-auto">
                <Edit className="h-4 w-4" />
                Edit in Browser
              </ToolbarLink>
            </Toolbar>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Media Toolbar</h4>
            <Toolbar aria-label="Media controls">
              <ToolbarButton>
                <Upload className="h-4 w-4" />
                Upload
              </ToolbarButton>
              <ToolbarButton>
                <Download className="h-4 w-4" />
                Download
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>
                <Image className="h-4 w-4" />
                Image
              </ToolbarButton>
              <ToolbarButton>
                <Link2 className="h-4 w-4" />
                Link
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>
                <Share className="h-4 w-4" />
                Share
              </ToolbarButton>
              <ToolbarButton variant="secondary">
                <Settings className="h-4 w-4" />
              </ToolbarButton>
            </Toolbar>
          </div>
        </div>
      </section>

      <Separator />

      {/* Toolbar Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Toolbar Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for various use cases.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <Toolbar variant="default" aria-label="Default toolbar">
              <ToolbarButton>Action 1</ToolbarButton>
              <ToolbarButton>Action 2</ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>Action 3</ToolbarButton>
            </Toolbar>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Secondary</h4>
            <Toolbar variant="secondary" aria-label="Secondary toolbar">
              <ToolbarButton>Action 1</ToolbarButton>
              <ToolbarButton>Action 2</ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>Action 3</ToolbarButton>
            </Toolbar>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Outline</h4>
            <Toolbar variant="outline" aria-label="Outline toolbar">
              <ToolbarButton>Action 1</ToolbarButton>
              <ToolbarButton>Action 2</ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>Action 3</ToolbarButton>
            </Toolbar>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Ghost</h4>
            <Toolbar variant="ghost" aria-label="Ghost toolbar">
              <ToolbarButton>Action 1</ToolbarButton>
              <ToolbarButton>Action 2</ToolbarButton>
              <ToolbarSeparator />
              <ToolbarButton>Action 3</ToolbarButton>
            </Toolbar>
          </div>
        </div>
      </section>

      <Separator />

      {/* Toggle Groups in Toolbar */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Toggle Groups</h2>
          <p className="text-muted-foreground">
            Combine toggle groups within toolbars for related controls.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Text Formatting Toolbar</h4>
            <Toolbar aria-label="Text formatting">
              <ToolbarToggleGroup
                type="multiple"
                value={textFormat}
                onValueChange={setTextFormat}
                aria-label="Text formatting"
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
                <ToolbarToggleItem
                  value="strikethrough"
                  aria-label="Strikethrough"
                >
                  <Strikethrough className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarToggleGroup
                type="single"
                value={alignment}
                onValueChange={setAlignment}
                aria-label="Text alignment"
              >
                <ToolbarToggleItem value="left" aria-label="Left align">
                  <AlignLeft className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="center" aria-label="Center align">
                  <AlignCenter className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="right" aria-label="Right align">
                  <AlignRight className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="justify" aria-label="Justify">
                  <AlignJustify className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarButton>
                <Star className="h-4 w-4" />
                Favorite
              </ToolbarButton>
              <ToolbarLink href="#" className="ml-auto">
                Updated 2 hours ago
              </ToolbarLink>
            </Toolbar>

            <div className="text-sm text-muted-foreground">
              Active formats: {textFormat.join(", ") || "None"} | Alignment:{" "}
              {alignment}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">View Controls</h4>
            <Toolbar aria-label="View controls">
              <ToolbarToggleGroup
                type="single"
                value={view}
                onValueChange={setView}
                variant="outline"
                aria-label="View mode"
              >
                <ToolbarToggleItem value="grid" aria-label="Grid view">
                  <Grid3X3 className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="list" aria-label="List view">
                  <List className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarToggleGroup
                type="single"
                value={sort}
                onValueChange={setSort}
                variant="ghost"
                aria-label="Sort direction"
              >
                <ToolbarToggleItem value="asc" aria-label="Sort ascending">
                  <SortAsc className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="desc" aria-label="Sort descending">
                  <SortDesc className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarButton>
                <Filter className="h-4 w-4" />
                Filter
              </ToolbarButton>
              <ToolbarButton>
                <Search className="h-4 w-4" />
                Search
              </ToolbarButton>
            </Toolbar>
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
            <Toolbar size="sm" aria-label="Small toolbar">
              <ToolbarButton size="sm">
                <Copy className="h-3 w-3" />
                Copy
              </ToolbarButton>
              <ToolbarButton size="sm">
                <Scissors className="h-3 w-3" />
                Cut
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarToggleGroup type="single" size="sm">
                <ToolbarToggleItem value="bold" size="sm">
                  <Bold className="h-3 w-3" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic" size="sm">
                  <Italic className="h-3 w-3" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
            </Toolbar>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <Toolbar size="default" aria-label="Default size toolbar">
              <ToolbarButton>
                <Copy className="h-4 w-4" />
                Copy
              </ToolbarButton>
              <ToolbarButton>
                <Scissors className="h-4 w-4" />
                Cut
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarToggleGroup type="single">
                <ToolbarToggleItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
            </Toolbar>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Large</h4>
            <Toolbar size="lg" aria-label="Large toolbar">
              <ToolbarButton size="lg">
                <Copy className="h-5 w-5" />
                Copy
              </ToolbarButton>
              <ToolbarButton size="lg">
                <Scissors className="h-5 w-5" />
                Cut
              </ToolbarButton>
              <ToolbarSeparator />
              <ToolbarToggleGroup type="single" size="lg">
                <ToolbarToggleItem value="bold" size="lg">
                  <Bold className="h-5 w-5" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic" size="lg">
                  <Italic className="h-5 w-5" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
            </Toolbar>
          </div>
        </div>
      </section>

      <Separator />

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Vertical Orientation</h2>
          <p className="text-muted-foreground">
            Toolbars can be arranged vertically for sidebar-style navigation.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="max-w-xs">
            <h4 className="text-sm font-medium mb-3">Vertical Toolbar</h4>
            <Toolbar orientation="vertical" aria-label="Vertical toolbar">
              <ToolbarButton className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                New Document
              </ToolbarButton>
              <ToolbarButton className="w-full justify-start">
                <Image className="h-4 w-4 mr-2" />
                Add Image
              </ToolbarButton>
              <ToolbarSeparator orientation="vertical" />
              <ToolbarToggleGroup
                type="multiple"
                value={visibility}
                onValueChange={setVisibility}
                aria-label="Visibility options"
              >
                <ToolbarToggleItem
                  value="public"
                  className="w-full justify-start"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Public
                </ToolbarToggleItem>
                <ToolbarToggleItem
                  value="private"
                  className="w-full justify-start"
                >
                  <EyeOff className="h-4 w-4 mr-2" />
                  Private
                </ToolbarToggleItem>
              </ToolbarToggleGroup>
              <ToolbarSeparator orientation="vertical" />
              <ToolbarButton className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </ToolbarButton>
              <ToolbarLink href="#" className="w-full justify-start">
                <Share className="h-4 w-4 mr-2" />
                Share
              </ToolbarLink>
            </Toolbar>
          </div>
        </div>
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common toolbar patterns and use cases.
          </p>
        </div>
        <div className="space-y-8 p-6 border rounded-lg">
          {/* Editor Toolbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Rich Text Editor</h4>
            <Toolbar variant="outline" aria-label="Rich text editor">
              <ToolbarButton>
                <Undo className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton>
                <Redo className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarSeparator />

              <ToolbarToggleGroup type="multiple" variant="outline">
                <ToolbarToggleItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarToggleGroup type="single" variant="outline">
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

              <ToolbarSeparator />

              <ToolbarButton>
                <Link2 className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton>
                <Image className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarButton variant="outline" className="ml-auto">
                <MoreHorizontal className="h-4 w-4" />
              </ToolbarButton>
            </Toolbar>
          </div>

          {/* Dashboard Toolbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Dashboard Controls</h4>
            <Toolbar aria-label="Dashboard controls">
              <ToolbarButton>
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </ToolbarButton>

              <ToolbarSeparator />

              <ToolbarToggleGroup
                type="single"
                value={chartType}
                onValueChange={setChartType}
                aria-label="Chart type"
              >
                <ToolbarToggleItem value="bar">
                  <BarChart3 className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="pie">
                  <PieChart className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarButton>
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </ToolbarButton>
              <ToolbarButton>
                <Download className="h-4 w-4 mr-2" />
                Export
              </ToolbarButton>

              <ToolbarLink href="#" variant="secondary" className="ml-auto">
                <Clock className="h-4 w-4 mr-2" />
                Last updated 5 minutes ago
              </ToolbarLink>
            </Toolbar>
            <div className="text-sm text-muted-foreground">
              Chart type: {chartType}
            </div>
          </div>

          {/* Media Player Toolbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Media Player</h4>
            <Toolbar variant="secondary" aria-label="Media player controls">
              <ToolbarButton>
                <ZoomOut className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton>
                <ZoomIn className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarSeparator />

              <ToolbarButton>
                <RotateCcw className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton>
                <RotateCw className="h-4 w-4" />
              </ToolbarButton>

              <ToolbarSeparator />

              <ToolbarToggleGroup type="single">
                <ToolbarToggleItem value="fit">
                  <Maximize2 className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="actual">
                  <Minimize2 className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarButton variant="solid" className="ml-auto">
                <Share className="h-4 w-4 mr-2" />
                Share
              </ToolbarButton>
            </Toolbar>
          </div>

          {/* File Manager Toolbar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">File Manager</h4>
            <Toolbar variant="ghost" aria-label="File manager">
              <ToolbarButton>
                <FileText className="h-4 w-4 mr-2" />
                New
              </ToolbarButton>
              <ToolbarButton>
                <Upload className="h-4 w-4 mr-2" />
                Upload
              </ToolbarButton>

              <ToolbarSeparator />

              <ToolbarToggleGroup type="single" variant="ghost">
                <ToolbarToggleItem value="grid">
                  <Grid3X3 className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="list">
                  <List className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarSeparator />

              <ToolbarToggleGroup type="multiple" variant="ghost">
                <ToolbarToggleItem value="starred">
                  <Star className="h-4 w-4" />
                </ToolbarToggleItem>
                <ToolbarToggleItem value="tagged">
                  <Tag className="h-4 w-4" />
                </ToolbarToggleItem>
              </ToolbarToggleGroup>

              <ToolbarButton className="ml-auto">
                <Search className="h-4 w-4" />
              </ToolbarButton>
              <ToolbarButton>
                <MoreVertical className="h-4 w-4" />
              </ToolbarButton>
            </Toolbar>
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete API reference for Toolbar components.
          </p>
        </div>
        <div className="space-y-6">
          {/* Toolbar Root */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Toolbar</h3>
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
                      'default' | 'secondary' | 'outline' | 'ghost'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the toolbar
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the toolbar
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
                      Layout direction of the toolbar
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
                  <tr>
                    <td className="border border-border p-2 font-mono">dir</td>
                    <td className="border border-border p-2">'ltr' | 'rtl'</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Text direction for proper keyboard navigation
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Toolbar Button */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToolbarButton</h3>
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
                      'default' | 'secondary' | 'outline' | 'ghost' | 'solid'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the button
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Toolbar Link */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToolbarLink</h3>
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
                      'default' | 'secondary' | 'accent' | 'muted'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the link
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the link
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Toolbar Toggle Group */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToolbarToggleGroup</h3>
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
                      'default' | 'secondary' | 'outline' | 'ghost' | 'solid'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the toggle group
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of toggle items
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
                      Controlled value(s)
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
                </tbody>
              </table>
            </div>
          </div>

          {/* Toolbar Toggle Item */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToolbarToggleItem</h3>
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
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'secondary' | 'outline' | 'ghost' | 'solid'
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
                      'sm' | 'default' | 'lg'
                    </td>
                    <td className="border border-border p-2">
                      Inherits from group
                    </td>
                    <td className="border border-border p-2">
                      Override group size for this item
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
                </tbody>
              </table>
            </div>
          </div>

          {/* Toolbar Separator */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">ToolbarSeparator</h3>
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
                      orientation
                    </td>
                    <td className="border border-border p-2">
                      'horizontal' | 'vertical'
                    </td>
                    <td className="border border-border p-2">'horizontal'</td>
                    <td className="border border-border p-2">
                      Orientation of the separator
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
                    [data-orientation]
                  </td>
                  <td className="border border-border p-2">
                    "horizontal" | "vertical"
                  </td>
                  <td className="border border-border p-2">
                    Layout direction of the toolbar
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-state]
                  </td>
                  <td className="border border-border p-2">"on" | "off"</td>
                  <td className="border border-border p-2">
                    Current pressed state of toggle items
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
                    Indicates disabled state
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
                      Moves focus to the first item in the toolbar
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
                      Moves focus to the first item in the toolbar
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      End
                    </td>
                    <td className="py-2 pl-4">
                      Moves focus to the last item in the toolbar
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
                state for toggle items
              </li>
              <li>
                • Supports{" "}
                <code className="bg-muted px-1 rounded">aria-label</code> for
                toolbar groups
              </li>
              <li>• Proper focus management with keyboard navigation</li>
              <li>• Follows the ARIA toolbar design pattern</li>
              <li>
                • Accessible to screen readers with proper role announcements
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Always provide{" "}
                <code className="bg-muted px-1 rounded">aria-label</code> for
                toolbar groups
              </li>
              <li>• Use clear labels and tooltips for icon-only buttons</li>
              <li>• Group related controls with separators</li>
              <li>• Consider keyboard-only users in your layouts</li>
              <li>• Ensure sufficient color contrast in all states</li>
              <li>• Use consistent sizing and spacing throughout</li>
              <li>• Provide alternative access methods for complex tools</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
