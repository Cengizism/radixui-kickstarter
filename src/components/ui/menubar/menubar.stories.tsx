import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarRadioGroup,
} from "./menubar";
import {
  File,
  Edit,
  View,
  Search,
  Settings,
  HelpCircle,
  Copy,
  Scissors,
  ClipboardPaste,
  Undo,
  Redo,
  Save,
  FileDown,
  FileText,
  Folder,
  FolderOpen,
  ZoomIn,
  ZoomOut,
  Maximize,
  RotateCcw,
  RotateCw,
  Trash2,
  Download,
  Upload,
  Share,
  Monitor,
  Sun,
  Moon,
  Palette,
} from "lucide-react";

export default {
  title: "UI/Menubar",
  component: Menubar,
  docs: {
    description: {
      component:
        "A menubar component that provides a horizontal menu with dropdown options. Built with Radix UI primitives for accessibility and keyboard navigation.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
};

// Basic menubar
export const Basic = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <FileText className="mr-2 h-4 w-4" />
          New File
          <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <FolderOpen className="mr-2 h-4 w-4" />
          Open File
          <MenubarShortcut>⌘O</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Save className="mr-2 h-4 w-4" />
          Save
          <MenubarShortcut>⌘S</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <FileDown className="mr-2 h-4 w-4" />
          Save As...
          <MenubarShortcut>⇧⌘S</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <Undo className="mr-2 h-4 w-4" />
          Undo
          <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <Redo className="mr-2 h-4 w-4" />
          Redo
          <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Scissors className="mr-2 h-4 w-4" />
          Cut
          <MenubarShortcut>⌘X</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
          <MenubarShortcut>⌘C</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <ClipboardPaste className="mr-2 h-4 w-4" />
          Paste
          <MenubarShortcut>⌘V</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <ZoomIn className="mr-2 h-4 w-4" />
          Zoom In
          <MenubarShortcut>⌘+</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <ZoomOut className="mr-2 h-4 w-4" />
          Zoom Out
          <MenubarShortcut>⌘-</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarCheckboxItem checked>
          <Monitor className="mr-2 h-4 w-4" />
          Show Sidebar
        </MenubarCheckboxItem>
        <MenubarCheckboxItem>Show Toolbar</MenubarCheckboxItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

// Complete application menubar
export const ApplicationMenubar = () => (
  <div className="w-full max-w-4xl">
    <Menubar className="rounded-none border-b px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Folder className="mr-2 h-4 w-4" />
            New Folder
            <MenubarShortcut>⇧⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <FolderOpen className="mr-2 h-4 w-4" />
            Open File
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open Folder
            <MenubarShortcut>⌘K ⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Save className="mr-2 h-4 w-4" />
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <FileDown className="mr-2 h-4 w-4" />
            Save As...
            <MenubarShortcut>⇧⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              Share
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>
                <Upload className="mr-2 h-4 w-4" />
                Upload to Cloud
              </MenubarItem>
              <MenubarItem>
                <Download className="mr-2 h-4 w-4" />
                Export as PDF
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Copy Link</MenubarItem>
              <MenubarItem>Share via Email</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem disabled>
            Print
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
            <MenubarShortcut>⌫</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Undo className="mr-2 h-4 w-4" />
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Redo className="mr-2 h-4 w-4" />
            Redo
            <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Scissors className="mr-2 h-4 w-4" />
            Cut
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ClipboardPaste className="mr-2 h-4 w-4" />
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Select All
            <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <Search className="mr-2 h-4 w-4" />
            Find
            <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Find and Replace
            <MenubarShortcut>⌥⌘F</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem checked>
            <Monitor className="mr-2 h-4 w-4" />
            Show Sidebar
            <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem checked>Show Status Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem>Show Activity Bar</MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            <ZoomIn className="mr-2 h-4 w-4" />
            Zoom In
            <MenubarShortcut>⌘+</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            <ZoomOut className="mr-2 h-4 w-4" />
            Zoom Out
            <MenubarShortcut>⌘-</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Reset Zoom
            <MenubarShortcut>⌘0</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Maximize className="mr-2 h-4 w-4" />
            Toggle Full Screen
            <MenubarShortcut>⌃⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Palette className="mr-2 h-4 w-4" />
              Appearance
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarRadioGroup value="light">
                <MenubarRadioItem value="light">
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </MenubarRadioItem>
                <MenubarRadioItem value="dark">
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </MenubarRadioItem>
                <MenubarRadioItem value="system">
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Selection</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Select All</MenubarItem>
          <MenubarItem>Expand Selection</MenubarItem>
          <MenubarItem>Shrink Selection</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Copy Line Up</MenubarItem>
          <MenubarItem>Copy Line Down</MenubarItem>
          <MenubarItem>Move Line Up</MenubarItem>
          <MenubarItem>Move Line Down</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Duplicate Selection</MenubarItem>
          <MenubarItem>Add Cursor Above</MenubarItem>
          <MenubarItem>Add Cursor Below</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Terminal</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Terminal</MenubarItem>
          <MenubarItem>Split Terminal</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Run Task</MenubarItem>
          <MenubarItem>Run Build Task</MenubarItem>
          <MenubarItem>Run Test Task</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Configure Tasks</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <HelpCircle className="mr-2 h-4 w-4" />
            Welcome
          </MenubarItem>
          <MenubarItem>Show All Commands</MenubarItem>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Show Release Notes</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Keyboard Shortcuts Reference</MenubarItem>
          <MenubarItem>Video Tutorials</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>View License</MenubarItem>
          <MenubarItem>Privacy Statement</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Developer Tools</MenubarItem>
          <MenubarItem>Open Process Explorer</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
);

// Simple browser-style menubar
export const BrowserMenubar = () => (
  <Menubar className="rounded-none border-b">
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab
          <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Window
          <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Incognito Window
          <MenubarShortcut>⇧⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Open File
          <MenubarShortcut>⌘O</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Open Location
          <MenubarShortcut>⌘L</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Close Tab
          <MenubarShortcut>⌘W</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Close Window
          <MenubarShortcut>⇧⌘W</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Save className="mr-2 h-4 w-4" />
          Save Page As...
          <MenubarShortcut>⌘S</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Print
          <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <Undo className="mr-2 h-4 w-4" />
          Undo
          <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <Redo className="mr-2 h-4 w-4" />
          Redo
          <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Scissors className="mr-2 h-4 w-4" />
          Cut
          <MenubarShortcut>⌘X</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
          <MenubarShortcut>⌘C</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <ClipboardPaste className="mr-2 h-4 w-4" />
          Paste
          <MenubarShortcut>⌘V</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Select All
          <MenubarShortcut>⌘A</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Search className="mr-2 h-4 w-4" />
          Find
          <MenubarShortcut>⌘F</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Find Next
          <MenubarShortcut>⌘G</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Find Previous
          <MenubarShortcut>⇧⌘G</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Reload
          <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Force Reload
          <MenubarShortcut>⇧⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Actual Size
          <MenubarShortcut>⌘0</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <ZoomIn className="mr-2 h-4 w-4" />
          Zoom In
          <MenubarShortcut>⌘+</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <ZoomOut className="mr-2 h-4 w-4" />
          Zoom Out
          <MenubarShortcut>⌘-</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarCheckboxItem checked>
          Show Bookmarks Bar
          <MenubarShortcut>⇧⌘B</MenubarShortcut>
        </MenubarCheckboxItem>
        <MenubarCheckboxItem>Show Full URLs</MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem>
          Developer Tools
          <MenubarShortcut>⌥⌘I</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          View Source
          <MenubarShortcut>⌥⌘U</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <Maximize className="mr-2 h-4 w-4" />
          Enter Full Screen
          <MenubarShortcut>⌃⌘F</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>History</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Back
          <MenubarShortcut>⌘[</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          Forward
          <MenubarShortcut>⌘]</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          Reload
          <MenubarShortcut>⌘R</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Home</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Show Full History</MenubarItem>
        <MenubarItem>Clear Browsing Data</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

// Size variations
export const SizeVariations = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Small Menubar</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger variant="default" size="sm">
            File
          </MenubarTrigger>
          <MenubarContent size="sm">
            <MenubarItem size="sm">
              <FileText className="mr-2 h-3 w-3" />
              New File
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator size="sm" />
            <MenubarItem size="sm">
              <Save className="mr-2 h-3 w-3" />
              Save
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger variant="default" size="sm">
            Edit
          </MenubarTrigger>
          <MenubarContent size="sm">
            <MenubarItem size="sm">
              <Undo className="mr-2 h-3 w-3" />
              Undo
            </MenubarItem>
            <MenubarItem size="sm">
              <Redo className="mr-2 h-3 w-3" />
              Redo
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Default Menubar</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              New File
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Save className="mr-2 h-4 w-4" />
              Save
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Undo className="mr-2 h-4 w-4" />
              Undo
            </MenubarItem>
            <MenubarItem>
              <Redo className="mr-2 h-4 w-4" />
              Redo
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Large Menubar</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger variant="default" size="lg">
            File
          </MenubarTrigger>
          <MenubarContent size="lg">
            <MenubarItem size="lg">
              <FileText className="mr-2 h-5 w-5" />
              New File
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator size="lg" />
            <MenubarItem size="lg">
              <Save className="mr-2 h-5 w-5" />
              Save
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger variant="default" size="lg">
            Edit
          </MenubarTrigger>
          <MenubarContent size="lg">
            <MenubarItem size="lg">
              <Undo className="mr-2 h-5 w-5" />
              Undo
            </MenubarItem>
            <MenubarItem size="lg">
              <Redo className="mr-2 h-5 w-5" />
              Redo
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </div>
);

// Creative context menu
export const CreativeMenubar = () => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>
        <File className="mr-2 h-4 w-4" />
        File
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <FileText className="mr-2 h-4 w-4" />
          New Document
          <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <FolderOpen className="mr-2 h-4 w-4" />
          Open
          <MenubarShortcut>⌘O</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>
            <Download className="mr-2 h-4 w-4" />
            Import
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>From Computer</MenubarItem>
            <MenubarItem>From URL</MenubarItem>
            <MenubarItem>From Cloud Drive</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Scan Document</MenubarItem>
            <MenubarItem>Import from Camera</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSub>
          <MenubarSubTrigger>
            <Upload className="mr-2 h-4 w-4" />
            Export
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>Export as PDF</MenubarItem>
            <MenubarItem>Export as Image</MenubarItem>
            <MenubarItem>Export as HTML</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Upload to Cloud</MenubarItem>
            <MenubarItem>Share Link</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarSeparator />
        <MenubarItem>
          <Save className="mr-2 h-4 w-4" />
          Save
          <MenubarShortcut>⌘S</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <FileDown className="mr-2 h-4 w-4" />
          Save As...
          <MenubarShortcut>⇧⌘S</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <Edit className="mr-2 h-4 w-4" />
        Edit
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          <Undo className="mr-2 h-4 w-4" />
          Undo
          <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          <Redo className="mr-2 h-4 w-4" />
          Redo
          <MenubarShortcut>⇧⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarSub>
          <MenubarSubTrigger>
            <RotateCcw className="mr-2 h-4 w-4" />
            Transform
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem>
              <RotateCcw className="mr-2 h-4 w-4" />
              Rotate Left
            </MenubarItem>
            <MenubarItem>
              <RotateCw className="mr-2 h-4 w-4" />
              Rotate Right
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Flip Horizontal</MenubarItem>
            <MenubarItem>Flip Vertical</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Resize</MenubarItem>
            <MenubarItem>Crop</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <View className="mr-2 h-4 w-4" />
        View
      </MenubarTrigger>
      <MenubarContent>
        <MenubarRadioGroup value="fit">
          <MenubarRadioItem value="fit">Fit to Window</MenubarRadioItem>
          <MenubarRadioItem value="fill">Fill Window</MenubarRadioItem>
          <MenubarRadioItem value="actual">Actual Size</MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator />
        <MenubarCheckboxItem checked>Show Grid</MenubarCheckboxItem>
        <MenubarCheckboxItem checked>Show Rulers</MenubarCheckboxItem>
        <MenubarCheckboxItem>Show Guides</MenubarCheckboxItem>
        <MenubarSeparator />
        <MenubarItem>
          <Maximize className="mr-2 h-4 w-4" />
          Full Screen
          <MenubarShortcut>F11</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>
        <Settings className="mr-2 h-4 w-4" />
        Tools
      </MenubarTrigger>
      <MenubarContent>
        <MenubarLabel>Drawing Tools</MenubarLabel>
        <MenubarItem>Pencil</MenubarItem>
        <MenubarItem>Brush</MenubarItem>
        <MenubarItem>Eraser</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>Shape Tools</MenubarLabel>
        <MenubarItem>Rectangle</MenubarItem>
        <MenubarItem>Circle</MenubarItem>
        <MenubarItem>Line</MenubarItem>
        <MenubarSeparator />
        <MenubarLabel>Text Tools</MenubarLabel>
        <MenubarItem>Text Box</MenubarItem>
        <MenubarItem>Font Settings</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

// Interactive playground
export const Playground = (args: {
  variant?: "default" | "ghost";
  size?: "sm" | "default" | "lg";
}) => (
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger variant={args.variant} size={args.size}>
        Playground
      </MenubarTrigger>
      <MenubarContent size={args.size}>
        <MenubarLabel>Menu Options</MenubarLabel>
        <MenubarItem size={args.size}>Regular Item</MenubarItem>
        <MenubarItem size={args.size} variant="destructive">
          Destructive Item
        </MenubarItem>
        <MenubarSeparator size={args.size} />
        <MenubarCheckboxItem size={args.size}>
          Checkbox Item
        </MenubarCheckboxItem>
        <MenubarRadioGroup value="option1">
          <MenubarRadioItem value="option1" size={args.size}>
            Radio Option 1
          </MenubarRadioItem>
          <MenubarRadioItem value="option2" size={args.size}>
            Radio Option 2
          </MenubarRadioItem>
        </MenubarRadioGroup>
        <MenubarSeparator size={args.size} />
        <MenubarSub>
          <MenubarSubTrigger size={args.size}>Submenu</MenubarSubTrigger>
          <MenubarSubContent size={args.size}>
            <MenubarItem size={args.size}>Nested Item</MenubarItem>
            <MenubarItem size={args.size}>Another Item</MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger variant={args.variant} size={args.size}>
        Settings
      </MenubarTrigger>
      <MenubarContent size={args.size}>
        <MenubarItem size={args.size}>Size: {args.size}</MenubarItem>
        <MenubarItem size={args.size}>Variant: {args.variant}</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
);

Playground.args = {
  variant: "default",
  size: "default",
};
