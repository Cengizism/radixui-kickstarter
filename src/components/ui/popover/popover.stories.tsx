import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Calendar,
  HelpCircle,
  Info,
  Settings,
  User,
  X
  } from 'lucide-react';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Separator } from '../separator/separator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
  PopoverArrow,
} from "./popover";

export default {
  title: "UI/Popover",
  component: Popover,
  docs: {
    description: {
      component:
        "Displays rich content in a portal, triggered by a button. Built with Radix UI primitives for keyboard navigation, focus management, and screen reader accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the popover when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    open: {
      control: "boolean",
      description:
        "The controlled open state of the popover. Must be used in conjunction with onOpenChange.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
      },
    },
    onOpenChange: {
      control: false,
      description:
        "Event handler called when the open state of the popover changes.",
      table: {
        category: "Event Handlers",
        type: { summary: "(open: boolean) => void" },
      },
    },
    modal: {
      control: "boolean",
      description:
        "The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Trigger Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Trigger Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Anchor Props
    anchorAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the anchor.",
      table: {
        category: "Anchor Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Portal Props
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        category: "Portal Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    container: {
      control: "object",
      description: "Specify a container element to portal the content into.",
      table: {
        category: "Portal Props",
        type: { summary: "HTMLElement" },
      },
    },

    // Content Props
    contentAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the content.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description:
        "The preferred side of the anchor to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.",
      table: {
        category: "Positioning Props",
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
      },
    },
    sideOffset: {
      control: "number",
      description: "The distance in pixels from the anchor.",
      table: {
        category: "Positioning Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description:
        "The preferred alignment against the anchor. May change when collisions occur.",
      table: {
        category: "Positioning Props",
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"center"' },
      },
    },
    alignOffset: {
      control: "number",
      description:
        "An offset in pixels from the start or end alignment options.",
      table: {
        category: "Positioning Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side and align preferences to prevent collisions with boundary edges.",
      table: {
        category: "Content",
      },
    },
    collisionBoundary: {
      control: "object",
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
      table: {
        category: "Positioning Props",
        type: { summary: "Element | null | Array<Element | null>" },
      },
    },
    collisionPadding: {
      control: "number",
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: {
        category: "Positioning Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    arrowPadding: {
      control: "number",
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      table: {
        category: "Appearance Props",
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.",
      table: {
        category: "Positioning Props",
        type: { summary: '"partial" | "always"' },
        defaultValue: { summary: '"partial"' },
      },
    },
    hideWhenDetached: {
      control: "boolean",
      description:
        "Whether to hide the content when the trigger becomes fully occluded.",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onEscapeKeyDown: {
      control: false,
      description:
        "Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Event Handlers",
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    onPointerDownOutside: {
      control: false,
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Event Handlers",
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
      },
    },
    onFocusOutside: {
      control: false,
      description:
        "Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Event Handlers",
        type: { summary: "(event: FocusOutsideEvent) => void" },
      },
    },
    onInteractOutside: {
      control: false,
      description:
        "Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling event.preventDefault.",
      table: {
        category: "Event Handlers",
        type: {
          summary:
            "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
        },
      },
    },

    // Arrow Props
    width: {
      control: "number",
      description: "The width of the arrow in pixels.",
      table: {
        category: "Arrow Props",
        type: { summary: "number" },
        defaultValue: { summary: "10" },
      },
    },
    height: {
      control: "number",
      description: "The height of the arrow in pixels.",
      table: {
        category: "Arrow Props",
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    arrowAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the arrow.",
      table: {
        category: "Arrow Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Close Props
    closeAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the close button.",
      table: {
        category: "Close Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
};

// Default popover
export const Default = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Popover Title</h4>
        <p className="text-sm text-muted-foreground">
          This is a popover with some content inside it.
        </p>
      </div>
    </PopoverContent>
  </Popover>
);

// Size variations
export const SizeVariations = () => (
  <div className="flex flex-wrap gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </PopoverTrigger>
      <PopoverContent size="sm">
        <p className="text-sm">Small popover content</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Default</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Default Popover</h4>
          <p className="text-sm text-muted-foreground">
            This is the default size for popover content.
          </p>
        </div>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Large</Button>
      </PopoverTrigger>
      <PopoverContent size="lg">
        <div className="space-y-3">
          <h4 className="font-medium text-lg">Large Popover</h4>
          <p className="text-muted-foreground">
            This is a larger popover with more space for content and better
            readability.
          </p>
        </div>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Extra Large</Button>
      </PopoverTrigger>
      <PopoverContent size="xl">
        <div className="space-y-4">
          <h4 className="font-medium text-xl">Extra Large Popover</h4>
          <p className="text-lg text-muted-foreground">
            This is an extra large popover with even more space for extensive
            content.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);

// Positioning and alignment
export const PositioningAndAlignment = () => (
  <div className="grid grid-cols-3 gap-8 place-items-center">
    {/* Top row */}
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Top Start</Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="start">
        <p className="text-sm">Top, aligned to start</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Top Center</Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="center">
        <p className="text-sm">Top, centered</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Top End</Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="end">
        <p className="text-sm">Top, aligned to end</p>
      </PopoverContent>
    </Popover>

    {/* Middle row */}
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Left</Button>
      </PopoverTrigger>
      <PopoverContent side="left">
        <p className="text-sm">Left side</p>
      </PopoverContent>
    </Popover>

    <div className="text-sm text-muted-foreground text-center">
      Center Reference
    </div>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Right</Button>
      </PopoverTrigger>
      <PopoverContent side="right">
        <p className="text-sm">Right side</p>
      </PopoverContent>
    </Popover>

    {/* Bottom row */}
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Bottom Start</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start">
        <p className="text-sm">Bottom, aligned to start</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Bottom Center</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="center">
        <p className="text-sm">Bottom, centered</p>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Bottom End</Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end">
        <p className="text-sm">Bottom, aligned to end</p>
      </PopoverContent>
    </Popover>
  </div>
);

// With arrow
export const WithArrow = () => (
  <div className="flex gap-4">
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">With Arrow</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <div className="space-y-2">
          <h4 className="font-medium">Popover with Arrow</h4>
          <p className="text-sm text-muted-foreground">
            This popover includes an arrow pointing to the trigger.
          </p>
        </div>
      </PopoverContent>
    </Popover>

    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Large Arrow</Button>
      </PopoverTrigger>
      <PopoverContent size="lg">
        <PopoverArrow size="lg" />
        <div className="space-y-2">
          <h4 className="font-medium text-lg">Large Arrow</h4>
          <p className="text-muted-foreground">
            This popover has a larger arrow for better visual connection.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </div>
);

// Controlled popover
export const ControlledPopover = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">
            {open ? "Close" : "Open"} Controlled Popover
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-3">
            <h4 className="font-medium">Controlled Popover</h4>
            <p className="text-sm text-muted-foreground">
              This popover's state is controlled programmatically.
            </p>
            <Button size="sm" onClick={() => setOpen(false)} className="w-full">
              Close Popover
            </Button>
          </div>
        </PopoverContent>
      </Popover>

      <div className="text-sm text-muted-foreground">
        Popover is currently: <strong>{open ? "Open" : "Closed"}</strong>
      </div>
    </div>
  );
};

// Form in popover
export const FormInPopover = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <User className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </PopoverTrigger>
      <PopoverContent size="lg" className="w-80">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Edit Profile</h4>
            <p className="text-sm text-muted-foreground">
              Update your profile information.
            </p>
          </div>

          <Separator />

          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <PopoverClose asChild>
              <Button type="button" variant="outline" size="sm">
                Cancel
              </Button>
            </PopoverClose>
            <Button type="submit" size="sm">
              Save Changes
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

// Settings popover
export const SettingsPopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" size="icon">
        <Settings className="w-4 h-4" />
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverClose asChild>
        <Button variant="ghost" size="icon" className="absolute right-2 top-2">
          <X className="w-4 h-4" />
        </Button>
      </PopoverClose>

      <div className="space-y-3">
        <h4 className="font-medium">Settings</h4>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Notifications</span>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Dark Mode</span>
            <input type="checkbox" className="rounded" />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm">Auto Save</span>
            <input type="checkbox" defaultChecked className="rounded" />
          </div>
        </div>

        <Separator />

        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Account Settings
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Privacy Settings
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start text-red-500"
          >
            Sign Out
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

// Info popover
export const InfoPopover = () => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <span>Password Requirements</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="w-5 h-5">
            <Info className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="space-y-2">
            <h4 className="font-medium text-sm">Password Requirements</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• At least 8 characters long</li>
              <li>• Contains uppercase and lowercase letters</li>
              <li>• Contains at least one number</li>
              <li>• Contains at least one special character</li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <div className="flex items-center space-x-2">
      <span>Help & Support</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="w-5 h-5">
            <HelpCircle className="w-4 h-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent size="lg">
          <div className="space-y-3">
            <h4 className="font-medium">Need Help?</h4>
            <p className="text-sm text-muted-foreground">
              Get support and find answers to common questions.
            </p>

            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                📚 Documentation
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                💬 Live Chat
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                📧 Email Support
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                🎥 Video Tutorials
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
);

// Calendar popover
export const CalendarPopover = () => {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Calendar className="w-4 h-4 mr-2" />
          {selectedDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-3">
          <h4 className="font-medium">Select Date</h4>

          {/* Mock calendar */}
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            <div className="font-medium text-muted-foreground p-1">S</div>
            <div className="font-medium text-muted-foreground p-1">M</div>
            <div className="font-medium text-muted-foreground p-1">T</div>
            <div className="font-medium text-muted-foreground p-1">W</div>
            <div className="font-medium text-muted-foreground p-1">T</div>
            <div className="font-medium text-muted-foreground p-1">F</div>
            <div className="font-medium text-muted-foreground p-1">S</div>

            {Array.from({ length: 31 }, (_, i) => (
              <button
                key={i + 1}
                className={`p-1 rounded hover:bg-accent ${
                  i + 1 === 15 ? "bg-primary text-primary-foreground" : ""
                }`}
                onClick={() =>
                  setSelectedDate(`2024-01-${String(i + 1).padStart(2, "0")}`)
                }
              >
                {i + 1}
              </button>
            ))}
          </div>

          <Separator />

          <div className="flex justify-between">
            <Button variant="outline" size="sm">
              Today
            </Button>
            <PopoverClose asChild>
              <Button size="sm">Select</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

// Action menu popover
export const ActionMenuPopover = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Actions</Button>
    </PopoverTrigger>
    <PopoverContent align="start">
      <div className="space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          📄 New Document
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          📁 New Folder
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          📤 Upload File
        </Button>

        <Separator />

        <Button variant="ghost" size="sm" className="w-full justify-start">
          ✏️ Rename
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          📋 Copy Link
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          📥 Download
        </Button>

        <Separator />

        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start text-red-500"
        >
          🗑️ Delete
        </Button>
      </div>
    </PopoverContent>
  </Popover>
);

// Nested popovers
export const NestedPopovers = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Menu</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className="space-y-3">
        <h4 className="font-medium">Main Menu</h4>

        <div className="space-y-1">
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Dashboard
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Projects
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                Settings →
              </Button>
            </PopoverTrigger>
            <PopoverContent side="right" align="start">
              <div className="space-y-1">
                <h4 className="font-medium text-sm mb-2">Settings</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                >
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                >
                  Preferences
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                >
                  Security
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Button variant="ghost" size="sm" className="w-full justify-start">
            Help
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "xl" | "full";
}) => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent size={args.size}>
      <div className="space-y-2">
        <h4 className="font-medium">Popover ({args.size})</h4>
        <p className="text-sm text-muted-foreground">
          This popover demonstrates the {args.size} size variant.
        </p>
        <PopoverClose asChild>
          <Button size="sm">Close</Button>
        </PopoverClose>
      </div>
    </PopoverContent>
  </Popover>
);

Playground.args = {
  size: "default",
};

// Advanced collision handling and positioning
export const AdvancedPositioning = () => (
  <div className="space-y-8 p-8">
    <div className="text-sm text-gray-600 p-4 bg-blue-50 rounded-lg">
      <div className="font-semibold mb-2">Advanced Positioning Features:</div>
      <ul className="space-y-1 text-xs">
        <li>• Custom collision boundaries</li>
        <li>• Side and align offset adjustments</li>
        <li>• Collision padding to prevent edge overlapping</li>
        <li>• Sticky behavior on align axis</li>
        <li>• Hide when trigger becomes detached</li>
      </ul>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <div>
        <h3 className="text-sm font-semibold mb-4">
          Custom Collision Boundary
        </h3>
        <div className="border-2 border-dashed border-gray-300 p-4 h-32 relative overflow-hidden">
          <span className="text-xs text-gray-500 absolute top-1 left-1">
            Boundary Container
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="absolute bottom-2 right-2">
                Boundary Test
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              align="end"
              collisionBoundary={null}
              collisionPadding={10}
            >
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Collision Aware</h4>
                <p className="text-xs text-muted-foreground">
                  This popover respects collision boundaries and has 10px
                  padding from edges.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-4">Offset Adjustments</h3>
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Side Offset
              </Button>
            </PopoverTrigger>
            <PopoverContent side="right" sideOffset={20}>
              <p className="text-sm">20px side offset</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Align Offset
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" alignOffset={-10}>
              <p className="text-sm">-10px align offset</p>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm">
                Combined Offsets
              </Button>
            </PopoverTrigger>
            <PopoverContent
              side="top"
              sideOffset={15}
              align="end"
              alignOffset={5}
            >
              <p className="text-sm">Combined side & align offsets</p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>

    <div>
      <h3 className="text-sm font-semibold mb-4">Sticky Behavior</h3>
      <div className="flex gap-4">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Partial Sticky</Button>
          </PopoverTrigger>
          <PopoverContent sticky="partial">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Partial Sticky</h4>
              <p className="text-xs text-muted-foreground">
                Stays in boundary while trigger is partially visible
              </p>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Always Sticky</Button>
          </PopoverTrigger>
          <PopoverContent sticky="always">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Always Sticky</h4>
              <p className="text-xs text-muted-foreground">
                Always stays in boundary regardless of trigger
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  </div>
);

// Modal vs non-modal behavior
export const ModalBehavior = () => (
  <div className="space-y-6">
    <div className="text-sm text-gray-600 p-4 bg-yellow-50 rounded-lg">
      <div className="font-semibold mb-2">Modal vs Non-Modal:</div>
      <ul className="space-y-1 text-xs">
        <li>• Modal: Disables interaction with outside elements</li>
        <li>• Non-modal: Allows interaction with outside elements</li>
        <li>• Try clicking outside each popover to see the difference</li>
      </ul>
    </div>

    <div className="flex gap-6">
      <div className="space-y-3">
        <h3 className="text-sm font-semibold">Non-Modal (Default)</h3>
        <Popover modal={false}>
          <PopoverTrigger asChild>
            <Button variant="outline">Non-Modal Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium">Non-Modal Popover</h4>
              <p className="text-sm text-muted-foreground">
                You can interact with elements outside this popover.
              </p>
              <p className="text-xs text-muted-foreground">
                Click outside to close, or interact with other elements.
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button size="sm" variant="secondary">
          Clickable Outside Element
        </Button>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-semibold">Modal</h3>
        <Popover modal={true}>
          <PopoverTrigger asChild>
            <Button variant="outline">Modal Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-3">
              <h4 className="font-medium">Modal Popover</h4>
              <p className="text-sm text-muted-foreground">
                This popover blocks interaction with outside elements.
              </p>
              <p className="text-xs text-muted-foreground">
                Must use close button or Escape key to close.
              </p>
              <PopoverClose asChild>
                <Button size="sm">Close Modal</Button>
              </PopoverClose>
            </div>
          </PopoverContent>
        </Popover>
        <Button size="sm" variant="secondary">
          Blocked When Modal Open
        </Button>
      </div>
    </div>
  </div>
);

// Interactive examples with event handling
export const InteractiveExamples = () => {
  const [interactions, setInteractions] = React.useState<string[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);

  const addInteraction = (type: string) => {
    setInteractions((prev) => [
      ...prev.slice(-4),
      `${new Date().toLocaleTimeString()}: ${type}`,
    ]);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold">Event Handling</h3>
        <div className="text-xs text-gray-600 min-h-[80px] p-3 bg-gray-50 rounded border">
          <div className="font-medium mb-1">Recent Interactions:</div>
          {interactions.length === 0 ? (
            <div className="text-gray-400">No interactions yet...</div>
          ) : (
            interactions.map((interaction, i) => (
              <div key={i} className="font-mono">
                {interaction}
              </div>
            ))
          )}
        </div>
      </div>

      <Popover
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          addInteraction(open ? "Opened" : "Closed");
        }}
      >
        <PopoverTrigger asChild>
          <Button variant="outline">
            Interactive Popover ({isOpen ? "Open" : "Closed"})
          </Button>
        </PopoverTrigger>
        <PopoverContent
          onEscapeKeyDown={() => addInteraction("Escape key pressed")}
          onPointerDownOutside={() => addInteraction("Clicked outside")}
          onFocusOutside={() => addInteraction("Focus moved outside")}
          onInteractOutside={() => addInteraction("Interaction outside")}
        >
          <div className="space-y-3">
            <h4 className="font-medium">Event Monitoring</h4>
            <p className="text-sm text-muted-foreground">
              This popover logs all interaction events.
            </p>

            <div className="space-y-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => addInteraction("Internal button clicked")}
                className="w-full"
              >
                Click Me (Internal)
              </Button>

              <PopoverClose asChild>
                <Button
                  size="sm"
                  onClick={() => addInteraction("Close button clicked")}
                  className="w-full"
                >
                  Close Popover
                </Button>
              </PopoverClose>
            </div>

            <p className="text-xs text-muted-foreground">
              Try: clicking outside, pressing Escape, or using Tab to move
              focus.
            </p>
          </div>
        </PopoverContent>
      </Popover>

      <div className="space-y-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => addInteraction("External button clicked")}
        >
          External Button
        </Button>
        <Input
          placeholder="External input field"
          onFocus={() => addInteraction("External input focused")}
          className="text-sm"
        />
      </div>
    </div>
  );
};

// Complex form with multiple popovers
export const ComplexFormExample = () => {
  const [formData, setFormData] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const validatePassword = (password: string) => {
    const issues = [];
    if (password.length < 8) issues.push("At least 8 characters");
    if (!/[A-Z]/.test(password)) issues.push("One uppercase letter");
    if (!/[a-z]/.test(password)) issues.push("One lowercase letter");
    if (!/[0-9]/.test(password)) issues.push("One number");
    if (!/[^A-Za-z0-9]/.test(password)) issues.push("One special character");
    return issues;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="username">Username</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="w-4 h-4">
                  <Info className="w-3 h-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent size="sm" align="start">
                <div className="space-y-1">
                  <p className="text-xs font-medium">Username Guidelines:</p>
                  <ul className="text-xs text-muted-foreground space-y-0.5">
                    <li>• 3-20 characters</li>
                    <li>• Letters, numbers, underscore</li>
                    <li>• Must start with a letter</li>
                  </ul>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Input
            id="username"
            value={formData.username}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, username: e.target.value }))
            }
            placeholder="Enter username"
            className={errors.username ? "border-red-500" : ""}
          />
          {errors.username && (
            <p className="text-xs text-red-500">{errors.username}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder="Enter email"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="password">Password</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="w-4 h-4">
                  <HelpCircle className="w-3 h-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Password Requirements:</p>
                  {formData.password ? (
                    <div className="space-y-1">
                      {validatePassword(formData.password).map((issue, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-xs"
                        >
                          <span className="text-red-500">✗</span>
                          <span className="text-red-600">{issue}</span>
                        </div>
                      ))}
                      {validatePassword(formData.password).length === 0 && (
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <span>✓</span>
                          <span>Password meets all requirements</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <ul className="text-xs text-muted-foreground space-y-0.5">
                      <li>• At least 8 characters</li>
                      <li>• One uppercase letter</li>
                      <li>• One lowercase letter</li>
                      <li>• One number</li>
                      <li>• One special character</li>
                    </ul>
                  )}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
            placeholder="Enter password"
            className={errors.password ? "border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
            placeholder="Confirm password"
            className={errors.confirmPassword ? "border-red-500" : ""}
          />
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="newsletter"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, newsletter: e.target.checked }))
            }
            className="rounded"
          />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to newsletter
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="w-4 h-4">
                <Info className="w-3 h-3" />
              </Button>
            </PopoverTrigger>
            <PopoverContent size="sm" align="start">
              <div className="space-y-1">
                <p className="text-xs font-medium">Newsletter Info:</p>
                <p className="text-xs text-muted-foreground">
                  Weekly updates about new features and tips. You can
                  unsubscribe at any time.
                </p>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Separator />

        <div className="flex gap-2">
          <Button type="submit" className="flex-1">
            Create Account
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button type="button" variant="outline">
                <HelpCircle className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <div className="space-y-2">
                <p className="text-sm font-medium">Need Help?</p>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs"
                  >
                    📧 Contact Support
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs"
                  >
                    📖 View Documentation
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs"
                  >
                    💬 Live Chat
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </div>
  );
};
