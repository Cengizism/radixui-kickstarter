import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useState } from 'react';
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  MoreHorizontal,
  Edit,
  Trash,
  Copy,
  Share,
  Download,
  FileText,
  Image,
  Folder,
  Star,
  Heart,
  Eye,
  Lock,
  Archive,
  Zap,
  Bell,
  Filter,
  Info,
  CheckCircle,
  XCircle,
  Link,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  docs: {
    description: {
      component:
        "A dropdown menu component that displays a list of options when triggered. Built with Radix UI primitives for accessibility and keyboard navigation.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    open: {
      control: "boolean",
      description:
        "The controlled open state of the dropdown menu. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        category: "Root",
      },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Root",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the dropdown menu changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Root",
      },
    },
    modal: {
      control: "boolean",
      description:
        "The modality of the dropdown menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Root",
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the dropdown menu when applicable. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        category: "Root",
      },
    },

    // Trigger Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Trigger",
      },
    },

    // Content Props
    loop: {
      control: "boolean",
      description:
        "When true, keyboard navigation will loop from last item to first, and vice versa.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },
    onCloseAutoFocus: {
      action: "onCloseAutoFocus",
      description:
        "Event handler called when focus moves back to the trigger after closing. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: Event) => void" },
        category: "Content",
      },
    },
    onEscapeKeyDown: {
      action: "onEscapeKeyDown",
      description:
        "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: KeyboardEvent) => void" },
        category: "Content",
      },
    },
    onPointerDownOutside: {
      action: "onPointerDownOutside",
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
        category: "Content",
      },
    },
    onFocusOutside: {
      action: "onFocusOutside",
      description:
        "Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        type: { summary: "(event: FocusOutsideEvent) => void" },
        category: "Content",
      },
    },
    onInteractOutside: {
      action: "onInteractOutside",
      description:
        "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        type: {
          summary:
            "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
        },
        category: "Content",
      },
    },
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        type: { summary: "boolean" },
        category: "Content",
      },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description:
        "The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Content",
      },
    },
    sideOffset: {
      control: { type: "number" },
      description: "The distance in pixels from the anchor.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description:
        "The preferred alignment against the anchor. May change when collisions occur.",
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"center"' },
        category: "Content",
      },
    },
    alignOffset: {
      control: { type: "number" },
      description:
        "An offset in pixels from the 'start' or 'end' alignment options.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side andalign preferences to prevent collisions with boundary edges.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    collisionBoundary: {
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
      table: {
        type: { summary: "Element | null | Array<Element | null>" },
        defaultValue: { summary: "[]" },
        category: "Content",
      },
    },
    collisionPadding: {
      control: { type: "number" },
      description:
        "The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.",
      table: {
        type: { summary: "number | Partial<Record<Side, number>>" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    arrowPadding: {
      control: { type: "number" },
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.",
      table: {
        type: { summary: '"partial" | "always"' },
        defaultValue: { summary: '"partial"' },
        category: "Content",
      },
    },
    hideWhenDetached: {
      control: "boolean",
      description:
        "Whether to hide the content when the trigger becomes fully occluded.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },

    // Item Props
    disabled: {
      control: "boolean",
      description:
        "When true, prevents the user from interacting with the item.",
      table: {
        type: { summary: "boolean" },
        category: "Item",
      },
    },
    onSelect: {
      action: "onSelect",
      description:
        "Event handler called when the user selects an item (via mouse or keyboard). Calling event.preventDefault in this handler will prevent the dropdown menu from closing when selecting that item.",
      table: {
        type: { summary: "(event: Event) => void" },
        category: "Item",
      },
    },
    textValue: {
      control: "text",
      description:
        "Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the item. Use this when the content is complex, or you have non-textual content inside.",
      table: {
        type: { summary: "string" },
        category: "Item",
      },
    },

    // CheckboxItem Props
    checked: {
      control: "select",
      options: [true, false, "indeterminate"],
      description:
        "The controlled checked state of the item. Must be used in conjunction with onCheckedChange.",
      table: {
        type: { summary: 'boolean | "indeterminate"' },
        category: "CheckboxItem",
      },
    },
    onCheckedChange: {
      action: "onCheckedChange",
      description: "Event handler called when the checked state changes.",
      table: {
        type: { summary: '(checked: boolean | "indeterminate") => void' },
        category: "CheckboxItem",
      },
    },

    // RadioItem Props
    value: {
      control: "text",
      description: "The unique value of the item.",
      table: {
        type: { summary: "string" },
        category: "RadioItem",
      },
    },

    // RadioGroup Props
    radioValue: {
      control: "text",
      description:
        "The controlled value of the radio item to check. Should be used in conjunction with onValueChange.",
      table: {
        type: { summary: "string" },
        category: "RadioGroup",
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Event handler called when the value changes.",
      table: {
        type: { summary: "(value: string) => void" },
        category: "RadioGroup",
      },
    },

    // Sub Props
    subOpen: {
      control: "boolean",
      description:
        "The controlled open state of the sub menu. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        category: "Sub",
      },
    },
    defaultSubOpen: {
      control: "boolean",
      description:
        "The open state of the submenu when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Sub",
      },
    },
    onSubOpenChange: {
      action: "onSubOpenChange",
      description:
        "Event handler called when the open state of the submenu changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Sub",
      },
    },
  },
};

// Default dropdown menu
export const Default = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Keyboard className="mr-2 h-4 w-4" />
        <span>Keyboard shortcuts</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Size variations
export const SizeVariations = () => (
  <div className="flex gap-4">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="sm">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Default</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Large</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent size="lg">
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

// With shortcuts
export const WithShortcuts = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Actions</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Actions</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Plus className="mr-2 h-4 w-4" />
        <span>New File</span>
        <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        <span>Copy</span>
        <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Edit className="mr-2 h-4 w-4" />
        <span>Edit</span>
        <DropdownMenuShortcut>⌘E</DropdownMenuShortcut>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Trash className="mr-2 h-4 w-4" />
        <span>Delete</span>
        <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// With checkbox items
export const WithCheckboxItems = () => {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">View</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// With radio items
export const WithRadioItems = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Panel Position</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// With submenus
export const WithSubmenus = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">More Options</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56">
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <UserPlus className="mr-2 h-4 w-4" />
          <span>Invite users</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Email</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MessageSquare className="mr-2 h-4 w-4" />
            <span>Message</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>More...</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <Share className="mr-2 h-4 w-4" />
          <span>Share</span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Email</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy Link</span>
          </DropdownMenuItem>
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// User account menu
export const UserAccountMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-4 w-4" />
        </div>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="end" forceMount>
      <DropdownMenuLabel className="font-normal">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium leading-none">John Doe</p>
          <p className="text-xs leading-none text-muted-foreground">
            john@example.com
          </p>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCard className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Keyboard className="mr-2 h-4 w-4" />
          <span>Keyboard shortcuts</span>
          <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Users className="mr-2 h-4 w-4" />
          <span>Team</span>
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <UserPlus className="mr-2 h-4 w-4" />
            <span>Invite users</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span>Message</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>More...</span>
            </DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Github className="mr-2 h-4 w-4" />
        <span>GitHub</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <LifeBuoy className="mr-2 h-4 w-4" />
        <span>Support</span>
      </DropdownMenuItem>
      <DropdownMenuItem disabled>
        <Cloud className="mr-2 h-4 w-4" />
        <span>API</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Action menu (three dots)
export const ActionMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="sm">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>
        <Edit className="mr-2 h-4 w-4" />
        <span>Edit</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        <span>Make a copy</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Share className="mr-2 h-4 w-4" />
        <span>Share</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <Trash className="mr-2 h-4 w-4" />
        <span>Delete</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

// Controlled dropdown
export const ControlledDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string>("");

  const handleSelect = (action: string) => {
    setSelectedAction(action);
    setOpen(false);
  };

  return (
    <div className="space-y-4">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{selectedAction || "Choose Action"}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => handleSelect("Profile")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("Settings")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleSelect("Help")}>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Help</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => handleSelect("Sign out")}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="text-sm text-muted-foreground">
        Dropdown is: <strong>{open ? "Open" : "Closed"}</strong>
        {selectedAction && (
          <>
            <br />
            Last selected: <strong>{selectedAction}</strong>
          </>
        )}
      </div>
    </div>
  );
};

// Context menu style
export const ContextMenuStyle = () => (
  <div className="flex items-center justify-center p-8 border-2 border-dashed rounded-lg">
    <div className="text-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="cursor-pointer p-4 hover:bg-accent rounded-md">
            <div className="w-16 h-16 bg-muted rounded-lg mb-2 flex items-center justify-center">
              📄
            </div>
            <p className="text-sm">Document.pdf</p>
            <p className="text-xs text-muted-foreground">Right-click menu</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            <span>Open</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            <span>Copy</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Properties</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);

// Different trigger types
export const DifferentTriggers = () => (
  <div className="space-y-4">
    {/* Button trigger */}
    <div className="flex items-center space-x-4">
      <span className="text-sm w-20">Button:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
          <DropdownMenuItem>Item 2</DropdownMenuItem>
          <DropdownMenuItem>Item 3</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    {/* Avatar trigger */}
    <div className="flex items-center space-x-4">
      <span className="text-sm w-20">Avatar:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90">
            JD
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    {/* Icon trigger */}
    <div className="flex items-center space-x-4">
      <span className="text-sm w-20">Icon:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>General</DropdownMenuItem>
          <DropdownMenuItem>Privacy</DropdownMenuItem>
          <DropdownMenuItem>Security</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>

    {/* Text trigger */}
    <div className="flex items-center space-x-4">
      <span className="text-sm w-20">Text:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="text-sm hover:underline">Click me</button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option A</DropdownMenuItem>
          <DropdownMenuItem>Option B</DropdownMenuItem>
          <DropdownMenuItem>Option C</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </div>
);

// Complex menu with all features
export const ComplexMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Complex Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard className="mr-2 h-4 w-4" />
            <span>Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus className="mr-2 h-4 w-4" />
              <span>Invite users</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>Message</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusCircle className="mr-2 h-4 w-4" />
                <span>More...</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={bookmarksChecked}
          onCheckedChange={setBookmarksChecked}
        >
          Show Bookmarks Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={urlsChecked}
          onCheckedChange={setUrlsChecked}
        >
          Show Full URLs
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={person} onValueChange={setPerson}>
          <DropdownMenuLabel>People</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioItem value="pedro">
            Pedro Duarte
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="colm">Colm Tuite</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github className="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud className="mr-2 h-4 w-4" />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Interactive playground
export const Playground = (args: { size?: "sm" | "default" | "lg" }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Playground Menu</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent size={args.size}>
      <DropdownMenuItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <LogOut className="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

Playground.args = {
  size: "default",
};

// API Reference
export const APIReference = () => (
  <div className="max-w-4xl space-y-6">
    <div>
      <h2 className="text-2xl font-bold mb-4">Dropdown Menu API Reference</h2>
      <p className="text-muted-foreground mb-6">
        Complete API documentation for all Dropdown Menu components based on
        Radix UI primitives.
      </p>
    </div>

    {/* Root Component */}
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">DropdownMenu (Root)</h3>
        <p className="text-sm text-muted-foreground">
          Contains all the parts of a dropdown menu.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-2 text-left">Prop</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Default</th>
                <th className="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">defaultOpen</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">false</td>
                <td className="p-2 text-sm">
                  The open state when initially rendered. Use when you do not
                  need to control its open state.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">open</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  The controlled open state. Must be used in conjunction with
                  onOpenChange.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">onOpenChange</td>
                <td className="p-2 font-mono text-sm text-blue-600">{`(open: boolean) => void`}</td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  Event handler called when the open state changes.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">modal</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">true</td>
                <td className="p-2 text-sm">
                  The modality of the dropdown menu.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">dir</td>
                <td className="p-2 font-mono text-sm text-blue-600">
                  "ltr" | "rtl"
                </td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  The reading direction when applicable.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Trigger Component */}
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">DropdownMenuTrigger</h3>
        <p className="text-sm text-muted-foreground">
          The button that toggles the dropdown menu. By default, renders a
          button.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-2 text-left">Prop</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Default</th>
                <th className="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">asChild</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">false</td>
                <td className="p-2 text-sm">
                  Change the default rendered element for the one passed as a
                  child.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Content Component */}
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">DropdownMenuContent</h3>
        <p className="text-sm text-muted-foreground">
          The component that pops out when the dropdown menu is open.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-2 text-left">Prop</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Default</th>
                <th className="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">loop</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">false</td>
                <td className="p-2 text-sm">
                  When true, keyboard navigation will loop from last item to
                  first, and vice versa.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">side</td>
                <td className="p-2 font-mono text-sm text-blue-600">
                  "top" | "right" | "bottom" | "left"
                </td>
                <td className="p-2 font-mono text-sm">"bottom"</td>
                <td className="p-2 text-sm">
                  The preferred side of the anchor to render against.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">sideOffset</td>
                <td className="p-2 font-mono text-sm text-blue-600">number</td>
                <td className="p-2 font-mono text-sm">0</td>
                <td className="p-2 text-sm">
                  The distance in pixels from the anchor.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">align</td>
                <td className="p-2 font-mono text-sm text-blue-600">
                  "start" | "center" | "end"
                </td>
                <td className="p-2 font-mono text-sm">"center"</td>
                <td className="p-2 text-sm">
                  The preferred alignment against the anchor.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">alignOffset</td>
                <td className="p-2 font-mono text-sm text-blue-600">number</td>
                <td className="p-2 font-mono text-sm">0</td>
                <td className="p-2 text-sm">
                  An offset in pixels from the alignment options.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">avoidCollisions</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">true</td>
                <td className="p-2 text-sm">
                  When true, overrides side and align to prevent collisions.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Item Component */}
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">DropdownMenuItem</h3>
        <p className="text-sm text-muted-foreground">
          The component that contains the dropdown menu items.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-2 text-left">Prop</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Default</th>
                <th className="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">disabled</td>
                <td className="p-2 font-mono text-sm text-blue-600">boolean</td>
                <td className="p-2 font-mono text-sm">false</td>
                <td className="p-2 text-sm">
                  When true, prevents the user from interacting with the item.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">onSelect</td>
                <td className="p-2 font-mono text-sm text-blue-600">{`(event: Event) => void`}</td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  Event handler called when the user selects an item.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">textValue</td>
                <td className="p-2 font-mono text-sm text-blue-600">string</td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  Optional text used for typeahead purposes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* CheckboxItem Component */}
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">DropdownMenuCheckboxItem</h3>
        <p className="text-sm text-muted-foreground">
          An item that can be controlled and rendered like a checkbox.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-2 text-left">Prop</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Default</th>
                <th className="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">checked</td>
                <td className="p-2 font-mono text-sm text-blue-600">
                  boolean | "indeterminate"
                </td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  The controlled checked state of the item.
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">onCheckedChange</td>
                <td className="p-2 font-mono text-sm text-blue-600">{`(checked: boolean | "indeterminate") => void`}</td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">
                  Event handler called when the checked state changes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* RadioItem Component */}
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">DropdownMenuRadioItem</h3>
        <p className="text-sm text-muted-foreground">
          An item that can be controlled and rendered like a radio button. Must
          be rendered inside DropdownMenuRadioGroup.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-2 text-left">Prop</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Default</th>
                <th className="p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-2 font-mono text-sm">value</td>
                <td className="p-2 font-mono text-sm text-blue-600">string</td>
                <td className="p-2 font-mono text-sm">-</td>
                <td className="p-2 text-sm">The unique value of the item.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    <div className="mt-6 p-4 bg-muted rounded-lg">
      <h4 className="font-semibold mb-2">Data Attributes</h4>
      <p className="text-sm text-muted-foreground mb-2">
        The following data attributes are automatically applied and can be used
        for styling:
      </p>
      <ul className="text-sm space-y-1">
        <li>
          <code className="bg-background px-1 rounded">data-state</code> -
          "open" | "closed"
        </li>
        <li>
          <code className="bg-background px-1 rounded">data-side</code> - "left"
          | "right" | "bottom" | "top"
        </li>
        <li>
          <code className="bg-background px-1 rounded">data-align</code> -
          "start" | "center" | "end"
        </li>
        <li>
          <code className="bg-background px-1 rounded">data-disabled</code> -
          Present when disabled
        </li>
        <li>
          <code className="bg-background px-1 rounded">data-highlighted</code> -
          Present when highlighted
        </li>
      </ul>
    </div>
  </div>
);

// Advanced Interactive Example
export const AdvancedInteractiveExample = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: "1", name: "Dashboard", url: "/dashboard", starred: false },
    { id: "2", name: "Analytics", url: "/analytics", starred: true },
    { id: "3", name: "Reports", url: "/reports", starred: false },
  ]);

  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: true,
  });

  const [theme, setTheme] = useState("system");
  const [view, setView] = useState("grid");

  const toggleBookmarkStar = (id: string) => {
    setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.id === id
          ? { ...bookmark, starred: !bookmark.starred }
          : bookmark
      )
    );
  };

  const removeBookmark = (id: string) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Advanced Interactive Example
        </h2>
        <p className="text-muted-foreground mb-6">
          A comprehensive example showcasing all dropdown menu features
          including checkboxes, radio groups, submenus, and complex
          interactions.
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        {/* Main Application Menu */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Application Menu</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48">
                <User className="mr-2 h-4 w-4" />
                User Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email invitation</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>SMS invitation</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    <span>Copy invite link</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Notification Settings */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Notification Settings</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48">
                <Bell className="mr-2 h-4 w-4" />
                Notifications
                <Badge variant="secondary" className="ml-auto">
                  {Object.values(notifications).filter(Boolean).length}
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Notification Preferences</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuCheckboxItem
                checked={notifications.email}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, email: !!checked }))
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Email notifications
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem
                checked={notifications.push}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, push: !!checked }))
                }
              >
                <Bell className="mr-2 h-4 w-4" />
                Push notifications
              </DropdownMenuCheckboxItem>

              <DropdownMenuCheckboxItem
                checked={notifications.sms}
                onCheckedChange={(checked) =>
                  setNotifications((prev) => ({ ...prev, sms: !!checked }))
                }
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                SMS notifications
              </DropdownMenuCheckboxItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Advanced settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Theme Selector */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Theme Selection</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48">
                {theme === "light" && <Star className="mr-2 h-4 w-4" />}
                {theme === "dark" && <Eye className="mr-2 h-4 w-4" />}
                {theme === "system" && <Settings className="mr-2 h-4 w-4" />}
                Theme: {theme}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value="light">
                  <Star className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">
                  <Eye className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">
                  <Settings className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* View Options */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">View Options</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48">
                <Filter className="mr-2 h-4 w-4" />
                View: {view}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>Display Mode</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuRadioGroup value={view} onValueChange={setView}>
                <DropdownMenuRadioItem value="grid">
                  <Folder className="mr-2 h-4 w-4" />
                  Grid view
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="list">
                  <FileText className="mr-2 h-4 w-4" />
                  List view
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="card">
                  <Image className="mr-2 h-4 w-4" />
                  Card view
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Bookmark Manager */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Bookmarks</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48">
                <Heart className="mr-2 h-4 w-4" />
                Bookmarks ({bookmarks.length})
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel>Saved Bookmarks</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {bookmarks.map((bookmark) => (
                <DropdownMenuSub key={bookmark.id}>
                  <DropdownMenuSubTrigger>
                    {bookmark.starred ? (
                      <Star className="mr-2 h-4 w-4 text-yellow-500" />
                    ) : (
                      <FileText className="mr-2 h-4 w-4" />
                    )}
                    <span className="truncate">{bookmark.name}</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem
                      onClick={() => toggleBookmarkStar(bookmark.id)}
                    >
                      {bookmark.starred ? (
                        <Star className="mr-2 h-4 w-4 text-yellow-500" />
                      ) : (
                        <Star className="mr-2 h-4 w-4" />
                      )}
                      {bookmark.starred
                        ? "Remove from favorites"
                        : "Add to favorites"}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy URL
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Share className="mr-2 h-4 w-4" />
                      Share
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="text-destructive"
                      onClick={() => removeBookmark(bookmark.id)}
                    >
                      <Trash className="mr-2 h-4 w-4" />
                      Remove bookmark
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              ))}

              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                Add new bookmark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* File Actions Menu */}
        <div className="space-y-2">
          <h3 className="text-sm font-medium">File Actions</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-48">
                <MoreHorizontal className="mr-2 h-4 w-4" />
                File Actions
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download</span>
                  <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Copy className="mr-2 h-4 w-4" />
                  <span>Copy</span>
                  <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  <span>Rename</span>
                  <DropdownMenuShortcut>F2</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Archive className="mr-2 h-4 w-4" />
                  <span>Archive</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Zap className="mr-2 h-4 w-4" />
                    <span>ZIP Archive</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Archive className="mr-2 h-4 w-4" />
                    <span>TAR Archive</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>7-Zip Archive</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <Share className="mr-2 h-4 w-4" />
                  <span>Share</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Link className="mr-2 h-4 w-4" />
                    <span>Copy link</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Message</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Lock className="mr-2 h-4 w-4" />
                <span>Set permissions</span>
              </DropdownMenuItem>

              <DropdownMenuItem disabled>
                <Cloud className="mr-2 h-4 w-4" />
                <span>Upload to cloud</span>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                <span>Delete</span>
                <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Status Display */}
      <Card className="p-4">
        <h3 className="font-semibold mb-3">Current State</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Notifications</h4>
            <ul className="space-y-1">
              <li
                className={`flex items-center gap-2 ${notifications.email ? "text-green-600" : "text-muted-foreground"}`}
              >
                {notifications.email ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                Email: {notifications.email ? "Enabled" : "Disabled"}
              </li>
              <li
                className={`flex items-center gap-2 ${notifications.push ? "text-green-600" : "text-muted-foreground"}`}
              >
                {notifications.push ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                Push: {notifications.push ? "Enabled" : "Disabled"}
              </li>
              <li
                className={`flex items-center gap-2 ${notifications.sms ? "text-green-600" : "text-muted-foreground"}`}
              >
                {notifications.sms ? (
                  <CheckCircle className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                SMS: {notifications.sms ? "Enabled" : "Disabled"}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-2">Preferences</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <Info className="h-3 w-3 text-blue-600" />
                Theme: {theme}
              </li>
              <li className="flex items-center gap-2">
                <Filter className="h-3 w-3 text-blue-600" />
                View: {view}
              </li>
              <li className="flex items-center gap-2">
                <Heart className="h-3 w-3 text-blue-600" />
                Bookmarks: {bookmarks.length} (
                {bookmarks.filter((b) => b.starred).length} starred)
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};
