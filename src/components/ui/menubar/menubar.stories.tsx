import React from 'react';
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
        "A visually persistent menu common in desktop applications that provides a consistent set of commands. Built with Radix UI primitives for keyboard navigation and screen reader accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    value: {
      control: "text",
      description:
        "The controlled value of the menu that is currently open. Use when controlling the open state of a menu.",
      table: {
        category: "Root Props",
      },
    },
    defaultValue: {
      control: "text",
      description:
        "The value of the menu that should be open by default when initially rendered. Use when not controlling the open state.",
      table: {
        category: "Root Props",
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction. Can be set when it differs from the default direction.",
      table: {
        category: "Root Props",
      },
    },
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop around when reaching the end.",
      table: {
        category: "Root Props",
      },
    },
    // Event Handlers
    onValueChange: {
      control: false,
      description: "Event handler called when the value changes.",
      table: {
        category: "Event Handlers",
        type: { summary: "(value: string) => void" },
      },
    },

    // Menu Props
    menuValue: {
      control: "text",
      description:
        "A unique value for the menu. Required when controlling the open state.",
      table: {
        category: "Menu",
      },
    },

    // Trigger Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Trigger",
      },
    },

    // Content Props
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description:
        "The preferred side of the anchor to render against when open.",
      table: {
        category: "Content",
      },
    },
    sideOffset: {
      control: "number",
      description: "The distance in pixels from the anchor.",
      table: {
        category: "Content",
      },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "The preferred alignment against the anchor.",
      table: {
        category: "Content",
      },
    },
    alignOffset: {
      control: "number",
      description:
        "An offset in pixels from the start or end alignment options.",
      table: {
        category: "Content",
      },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side and align preferences to prevent collisions with viewport edges.",
      table: {
        category: "Content",
      },
    },
    collisionBoundary: {
      control: "object",
      description:
        "The element used as the collision boundary. By default this is the viewport.",
      table: {
        category: "Content",
        type: { summary: "Element | null | Array<Element | null>" },
      },
    },
    collisionPadding: {
      control: "number",
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: {
        category: "Content",
      },
    },
    arrowPadding: {
      control: "number",
      description:
        "The padding between the arrow and the edges of the content.",
      table: {
        category: "Content",
      },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description: "The sticky behavior on the align axis.",
      table: {
        category: "Content",
      },
    },
    hideWhenDetached: {
      control: "boolean",
      description:
        "Whether to hide the content when the trigger becomes fully occluded.",
      table: {
        category: "Content",
      },
    },
    onEscapeKeyDown: {
      control: false,
      description: "Event handler called when the escape key is down.",
      table: {
        category: "Content",
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    onPointerDownOutside: {
      control: false,
      description:
        "Event handler called when a pointer event occurs outside of the component.",
      table: {
        category: "Content",
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
      },
    },
    onFocusOutside: {
      control: false,
      description:
        "Event handler called when the focus moves outside of the component.",
      table: {
        category: "Content",
        type: { summary: "(event: FocusOutsideEvent) => void" },
      },
    },
    onInteractOutside: {
      control: false,
      description:
        "Event handler called when an interaction occurs outside the component.",
      table: {
        category: "Content",
        type: {
          summary:
            "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
        },
      },
    },

    // Item Props
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the item.",
      table: {
        category: "Item",
      },
    },
    onSelect: {
      control: false,
      description:
        "Event handler called when the user selects an item (via mouse or keyboard).",
      table: {
        category: "Item",
        type: { summary: "(event: Event) => void" },
      },
    },
    textValue: {
      control: "text",
      description:
        "Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the item.",
      table: {
        category: "Item",
      },
    },

    // CheckboxItem Props
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description: "The controlled checked state of the item.",
      table: {
        category: "CheckboxItem",
      },
    },
    onCheckedChange: {
      control: false,
      description: "Event handler called when the checked state changes.",
      table: {
        category: "CheckboxItem",
        type: { summary: "(checked: boolean) => void" },
      },
    },

    // RadioGroup Props
    radioValue: {
      control: "text",
      description:
        "The controlled value of the radio item that should be checked.",
      table: {
        category: "RadioGroup",
      },
    },
    radioDefaultValue: {
      control: "text",
      description:
        "The value of the radio item that should be checked when initially rendered.",
      table: {
        category: "RadioGroup",
      },
    },
    onRadioValueChange: {
      control: false,
      description: "Event handler called when the value changes.",
      table: {
        category: "RadioGroup",
        type: { summary: "(value: string) => void" },
      },
    },

    // RadioItem Props
    radioItemValue: {
      control: "text",
      description: "The unique value of the item.",
      table: {
        category: "RadioItem",
      },
    },

    // Arrow Props
    width: {
      control: "number",
      description: "The width of the arrow in pixels.",
      table: {
        category: "Arrow",
      },
    },
    height: {
      control: "number",
      description: "The height of the arrow in pixels.",
      table: {
        category: "Arrow",
      },
    },

    // SubTrigger Props
    subDisabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the sub trigger.",
      table: {
        category: "SubTrigger",
      },
    },
    subTextValue: {
      control: "text",
      description: "Optional text used for typeahead purposes in sub menus.",
      table: {
        category: "SubTrigger",
      },
    },

    // SubContent Props
    subSideOffset: {
      control: "number",
      description: "The distance in pixels from the trigger for sub content.",
      table: {
        category: "SubContent",
      },
    },
    subAlignOffset: {
      control: "number",
      description: "An offset in pixels from alignment for sub content.",
      table: {
        category: "SubContent",
      },
    },
    subAvoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides positioning preferences to prevent collisions for sub content.",
      table: {
        category: "SubContent",
      },
    },
    subCollisionBoundary: {
      control: "object",
      description: "The collision boundary for sub content positioning.",
      table: {
        category: "SubContent",
        type: { summary: "Element | null | Array<Element | null>" },
      },
    },
    subCollisionPadding: {
      control: "number",
      description: "The collision padding for sub content positioning.",
      table: {
        category: "SubContent",
      },
    },
    subArrowPadding: {
      control: "number",
      description: "The arrow padding for sub content.",
      table: {
        category: "SubContent",
      },
    },
    subSticky: {
      control: "select",
      options: ["partial", "always"],
      description: "The sticky behavior for sub content.",
      table: {
        category: "SubContent",
      },
    },
    subHideWhenDetached: {
      control: "boolean",
      description: "Whether to hide sub content when trigger becomes occluded.",
      table: {
        category: "SubContent",
      },
    },
    onSubEscapeKeyDown: {
      control: false,
      description: "Event handler for escape key in sub content.",
      table: {
        category: "SubContent",
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    onSubPointerDownOutside: {
      control: false,
      description: "Event handler for pointer events outside sub content.",
      table: {
        category: "SubContent",
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
      },
    },
    onSubFocusOutside: {
      control: false,
      description: "Event handler for focus outside sub content.",
      table: {
        category: "SubContent",
        type: { summary: "(event: FocusOutsideEvent) => void" },
      },
    },
    onSubInteractOutside: {
      control: false,
      description: "Event handler for interactions outside sub content.",
      table: {
        category: "SubContent",
        type: {
          summary:
            "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
        },
      },
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

// Controlled state management
export const ControlledState = () => {
  const [currentMenu, setCurrentMenu] = React.useState<string>("");
  const [checkedItems, setCheckedItems] = React.useState<
    Record<string, boolean>
  >({
    sidebar: true,
    toolbar: false,
    statusbar: true,
  });
  const [viewMode, setViewMode] = React.useState("list");

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600">
        Current open menu: {currentMenu || "None"}
      </div>

      <Menubar value={currentMenu} onValueChange={setCurrentMenu}>
        <MenubarMenu value="file">
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
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu value="view">
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem
              checked={checkedItems.sidebar}
              onCheckedChange={(checked) =>
                setCheckedItems((prev) => ({ ...prev, sidebar: checked }))
              }
            >
              <Monitor className="mr-2 h-4 w-4" />
              Show Sidebar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={checkedItems.toolbar}
              onCheckedChange={(checked) =>
                setCheckedItems((prev) => ({ ...prev, toolbar: checked }))
              }
            >
              Show Toolbar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={checkedItems.statusbar}
              onCheckedChange={(checked) =>
                setCheckedItems((prev) => ({ ...prev, statusbar: checked }))
              }
            >
              Show Status Bar
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value={viewMode} onValueChange={setViewMode}>
              <MenubarRadioItem value="list">List View</MenubarRadioItem>
              <MenubarRadioItem value="grid">Grid View</MenubarRadioItem>
              <MenubarRadioItem value="tile">Tile View</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-sm">
        <div className="font-semibold">Current State:</div>
        <div>Sidebar: {checkedItems.sidebar ? "Visible" : "Hidden"}</div>
        <div>Toolbar: {checkedItems.toolbar ? "Visible" : "Hidden"}</div>
        <div>Status Bar: {checkedItems.statusbar ? "Visible" : "Hidden"}</div>
        <div>View Mode: {viewMode}</div>
      </div>
    </div>
  );
};

// Complex nested submenus with collision handling
export const NestedSubmenus = () => (
  <div className="w-full max-w-2xl">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <FileText className="mr-2 h-4 w-4" />
            New
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSub>
            <MenubarSubTrigger>
              <FolderOpen className="mr-2 h-4 w-4" />
              Open Recent
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>project-1.txt</MenubarItem>
              <MenubarItem>project-2.txt</MenubarItem>
              <MenubarItem>project-3.txt</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>More Files</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>old-project-1.txt</MenubarItem>
                  <MenubarItem>old-project-2.txt</MenubarItem>
                  <MenubarSub>
                    <MenubarSubTrigger>Archive</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>2023-projects.zip</MenubarItem>
                      <MenubarItem>2022-projects.zip</MenubarItem>
                      <MenubarItem>2021-projects.zip</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>Clear History</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              <Share className="mr-2 h-4 w-4" />
              Export
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarSub>
                <MenubarSubTrigger>
                  <FileDown className="mr-2 h-4 w-4" />
                  Export as...
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>PDF Document</MenubarItem>
                  <MenubarItem>Word Document</MenubarItem>
                  <MenubarItem>HTML Page</MenubarItem>
                  <MenubarItem>Markdown File</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload to...
                </MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Google Drive</MenubarItem>
                  <MenubarItem>Dropbox</MenubarItem>
                  <MenubarItem>OneDrive</MenubarItem>
                  <MenubarItem>iCloud</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                <Copy className="mr-2 h-4 w-4" />
                Copy Link
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarSub>
                <MenubarSubTrigger>Editor</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Font Settings</MenubarItem>
                  <MenubarItem>Color Scheme</MenubarItem>
                  <MenubarItem>Key Bindings</MenubarItem>
                  <MenubarSeparator />
                  <MenubarCheckboxItem>Line Numbers</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Word Wrap</MenubarCheckboxItem>
                  <MenubarCheckboxItem>Auto Save</MenubarCheckboxItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Language</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="en">
                    <MenubarRadioItem value="en">English</MenubarRadioItem>
                    <MenubarRadioItem value="es">Español</MenubarRadioItem>
                    <MenubarRadioItem value="fr">Français</MenubarRadioItem>
                    <MenubarRadioItem value="de">Deutsch</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Appearance</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarRadioGroup value="system">
                    <MenubarRadioItem value="light">
                      <Sun className="mr-2 h-4 w-4" />
                      Light Mode
                    </MenubarRadioItem>
                    <MenubarRadioItem value="dark">
                      <Moon className="mr-2 h-4 w-4" />
                      Dark Mode
                    </MenubarRadioItem>
                    <MenubarRadioItem value="system">
                      <Monitor className="mr-2 h-4 w-4" />
                      System Default
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Extensions</MenubarItem>
          <MenubarItem>Keyboard Shortcuts</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
);

// Keyboard navigation demonstration
export const KeyboardNavigation = () => (
  <div className="space-y-4">
    <div className="text-sm text-gray-600 p-4 bg-blue-50 rounded-lg">
      <div className="font-semibold mb-2">Keyboard Navigation:</div>
      <ul className="space-y-1 text-xs">
        <li>
          • <kbd className="px-1 py-0.5 bg-white border rounded">Tab</kbd> /{" "}
          <kbd className="px-1 py-0.5 bg-white border rounded">Shift+Tab</kbd> -
          Navigate between menu triggers
        </li>
        <li>
          • <kbd className="px-1 py-0.5 bg-white border rounded">←</kbd> /{" "}
          <kbd className="px-1 py-0.5 bg-white border rounded">→</kbd> - Move
          between menu triggers
        </li>
        <li>
          • <kbd className="px-1 py-0.5 bg-white border rounded">↓</kbd> - Open
          menu or navigate to next item
        </li>
        <li>
          • <kbd className="px-1 py-0.5 bg-white border rounded">↑</kbd> -
          Navigate to previous item
        </li>
        <li>
          • <kbd className="px-1 py-0.5 bg-white border rounded">Enter</kbd> /{" "}
          <kbd className="px-1 py-0.5 bg-white border rounded">Space</kbd> -
          Activate item
        </li>
        <li>
          • <kbd className="px-1 py-0.5 bg-white border rounded">Esc</kbd> -
          Close menu
        </li>
      </ul>
    </div>

    <Menubar loop>
      <MenubarMenu>
        <MenubarTrigger>Navigation Demo</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            First Item
            <MenubarShortcut>1</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Second Item
            <MenubarShortcut>2</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarCheckboxItem>Checkable Item</MenubarCheckboxItem>
          <MenubarRadioGroup value="option1">
            <MenubarRadioItem value="option1">Radio Option 1</MenubarRadioItem>
            <MenubarRadioItem value="option2">Radio Option 2</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Submenu Item</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Nested Item 1</MenubarItem>
              <MenubarItem>Nested Item 2</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Second Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Another Item</MenubarItem>
          <MenubarItem>Final Item</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Third Menu</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Last Menu Item</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
);

// Custom positioning and collision handling
export const CustomPositioning = () => (
  <div className="space-y-8 p-8">
    <div className="text-center text-sm text-gray-600">
      Try scrolling or resizing the viewport to see collision handling in action
    </div>

    <div className="flex justify-between items-start">
      {/* Left positioned menubar */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Left Aligned</h3>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Align Start</MenubarTrigger>
            <MenubarContent align="start" sideOffset={8}>
              <MenubarItem>Content aligns to start of trigger</MenubarItem>
              <MenubarItem>This demonstrates alignment options</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Collision boundary handling</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Center positioned menubar */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Center Aligned</h3>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Align Center</MenubarTrigger>
            <MenubarContent align="center" sideOffset={12}>
              <MenubarItem>Centered content</MenubarItem>
              <MenubarItem>Default alignment behavior</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Submenu</MenubarSubTrigger>
                <MenubarSubContent sideOffset={4}>
                  <MenubarItem>Submenu positioning</MenubarItem>
                  <MenubarItem>Handles collisions too</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>

      {/* Right positioned menubar */}
      <div>
        <h3 className="text-sm font-semibold mb-2">Right Aligned</h3>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Align End</MenubarTrigger>
            <MenubarContent align="end" sideOffset={8}>
              <MenubarItem>Content aligns to end of trigger</MenubarItem>
              <MenubarItem>Useful for right-side menus</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Auto collision detection</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>

    {/* Top positioned menubar */}
    <div className="text-center mt-16">
      <h3 className="text-sm font-semibold mb-2">Top Positioned</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Opens Above</MenubarTrigger>
          <MenubarContent side="top" align="center" sideOffset={8}>
            <MenubarItem>
              <FileText className="mr-2 h-4 w-4" />
              Content opens above trigger
            </MenubarItem>
            <MenubarItem>
              <Settings className="mr-2 h-4 w-4" />
              Useful for bottom toolbars
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              Collision boundaries respected
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>

    {/* Collision padding demonstration */}
    <div className="border-t pt-8">
      <h3 className="text-sm font-semibold mb-2">Custom Collision Padding</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Collision Padding</MenubarTrigger>
          <MenubarContent collisionPadding={20} avoidCollisions={true}>
            <MenubarItem>20px collision padding</MenubarItem>
            <MenubarItem>Prevents edge overlapping</MenubarItem>
            <MenubarItem>Better viewport handling</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Nested with padding</MenubarSubTrigger>
              <MenubarSubContent collisionPadding={16}>
                <MenubarItem>Submenu collision padding</MenubarItem>
                <MenubarItem>Inherits smart positioning</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </div>
);

// Advanced interaction patterns
export const InteractionPatterns = () => {
  const [preventClose, setPreventClose] = React.useState(false);
  const [selectionCount, setSelectionCount] = React.useState(0);

  return (
    <div className="space-y-6">
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Interaction Controls</h3>
        <div className="space-y-2 text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={preventClose}
              onChange={(e) => setPreventClose(e.target.checked)}
              className="mr-2"
            />
            Prevent menu close on item selection
          </label>
          <div>Selection count: {selectionCount}</div>
        </div>
      </div>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Interactive Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onSelect={(e) => {
                if (preventClose) {
                  e.preventDefault();
                }
                setSelectionCount((prev) => prev + 1);
              }}
            >
              <FileText className="mr-2 h-4 w-4" />
              Selectable Item
              <MenubarShortcut>{selectionCount}</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onSelect={(e) => {
                if (preventClose) {
                  e.preventDefault();
                }
                setSelectionCount((prev) => prev + 1);
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              Another Item
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              <Trash2 className="mr-2 h-4 w-4" />
              Disabled Item
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>
                <Share className="mr-2 h-4 w-4" />
                Submenu Options
              </MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onSelect={(e) => {
                    if (preventClose) {
                      e.preventDefault();
                    }
                    setSelectionCount((prev) => prev + 1);
                  }}
                >
                  Nested Item 1
                </MenubarItem>
                <MenubarItem
                  onSelect={(e) => {
                    if (preventClose) {
                      e.preventDefault();
                    }
                    setSelectionCount((prev) => prev + 1);
                  }}
                >
                  Nested Item 2
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Text Values</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Typeahead Support</MenubarLabel>
            <MenubarItem textValue="apple fruit red">
              🍎 Apple (try typing "fruit")
            </MenubarItem>
            <MenubarItem textValue="banana yellow fruit">
              🍌 Banana (try typing "yellow")
            </MenubarItem>
            <MenubarItem textValue="cherry red small">
              🍒 Cherry (try typing "small")
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem textValue="settings preferences config">
              <Settings className="mr-2 h-4 w-4" />
              Complex Content (try "config")
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
