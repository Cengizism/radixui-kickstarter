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
        "A popover component that displays content in a floating container when triggered. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "full"],
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
