import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "./sheet";

export default {
  title: "UI/Sheet",
  component: Sheet,
  docs: {
    description: {
      component:
        "A sheet component that slides in from the edge of the screen, typically used for navigation menus or secondary content. Built with Radix UI primitives.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "The controlled open state of the sheet",
    },
    defaultOpen: {
      control: "boolean",
      description: "The open state of the sheet when it is initially rendered",
    },
    modal: {
      control: "boolean",
      description:
        "The modality of the sheet. When set to true, interaction with outside elements will be disabled",
    },
  },
};

// Default sheet example (right side)
export const Default = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit Profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            id="username"
            defaultValue="@peduarte"
            className="col-span-3"
          />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

// Side variations
export const SideVariations = () => (
  <div className="flex flex-wrap gap-4">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Left Panel</SheetTitle>
          <SheetDescription>
            This sheet slides in from the left side of the screen.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Perfect for navigation menus, filters, or secondary content.
          </p>
        </div>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Right</Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Right Panel</SheetTitle>
          <SheetDescription>
            This sheet slides in from the right side of the screen.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Commonly used for settings panels, details views, or form inputs.
          </p>
        </div>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Top</Button>
      </SheetTrigger>
      <SheetContent side="top">
        <SheetHeader>
          <SheetTitle>Top Panel</SheetTitle>
          <SheetDescription>
            This sheet slides down from the top of the screen.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Great for notifications, announcements, or quick actions.
          </p>
        </div>
      </SheetContent>
    </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Bottom</Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Bottom Panel</SheetTitle>
          <SheetDescription>
            This sheet slides up from the bottom of the screen.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            Perfect for mobile-style action sheets or quick forms.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

// Navigation menu example
export const NavigationMenu = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">☰ Menu</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Navigation</SheetTitle>
        <SheetDescription>
          Navigate through the application sections.
        </SheetDescription>
      </SheetHeader>
      <div className="py-4 space-y-4">
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent"
          >
            <span className="w-4 h-4 bg-primary rounded-xs"></span>
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent"
          >
            <span className="w-4 h-4 bg-secondary rounded-xs"></span>
            <span>Projects</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent"
          >
            <span className="w-4 h-4 bg-muted rounded-xs"></span>
            <span>Tasks</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 p-2 rounded-md hover:bg-accent"
          >
            <span className="w-4 h-4 bg-accent rounded-xs"></span>
            <span>Calendar</span>
          </a>
        </nav>

        <Separator />

        <div className="space-y-2">
          <h4 className="font-medium text-sm">Recent</h4>
          <div className="space-y-1">
            <a
              href="#"
              className="block p-2 text-sm hover:bg-accent rounded-md"
            >
              Marketing Campaign
            </a>
            <a
              href="#"
              className="block p-2 text-sm hover:bg-accent rounded-md"
            >
              Q4 Planning
            </a>
            <a
              href="#"
              className="block p-2 text-sm hover:bg-accent rounded-md"
            >
              Website Redesign
            </a>
          </div>
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button variant="ghost" className="w-full">
            Settings
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

// Settings panel
export const SettingsPanel = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">⚙️ Settings</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Settings</SheetTitle>
        <SheetDescription>
          Configure your application preferences.
        </SheetDescription>
      </SheetHeader>
      <div className="py-4 space-y-6">
        <div className="space-y-4">
          <h4 className="font-medium">Appearance</h4>
          <div className="space-y-3">
            <div>
              <Label htmlFor="theme">Theme</Label>
              <select
                id="theme"
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="animations" className="rounded" />
              <Label htmlFor="animations">Enable animations</Label>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h4 className="font-medium">Notifications</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="email-notifications"
                className="rounded"
                defaultChecked
              />
              <Label htmlFor="email-notifications">Email notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="push-notifications"
                className="rounded"
              />
              <Label htmlFor="push-notifications">Push notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="marketing-emails"
                className="rounded"
              />
              <Label htmlFor="marketing-emails">Marketing emails</Label>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h4 className="font-medium">Privacy</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="analytics"
                className="rounded"
                defaultChecked
              />
              <Label htmlFor="analytics">Allow analytics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="cookies"
                className="rounded"
                defaultChecked
              />
              <Label htmlFor="cookies">Accept cookies</Label>
            </div>
          </div>
        </div>
      </div>
      <SheetFooter>
        <Button variant="outline">Reset</Button>
        <SheetClose asChild>
          <Button>Save Settings</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

// Contact form
export const ContactForm = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Contact Us</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Contact Us</SheetTitle>
        <SheetDescription>
          Send us a message and we'll get back to you as soon as possible.
        </SheetDescription>
      </SheetHeader>
      <form className="space-y-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Name</Label>
          <Input id="contact-name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-subject">Subject</Label>
          <Input id="contact-subject" placeholder="What is this about?" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            placeholder="Tell us more about your inquiry..."
            rows={5}
            required
          />
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="newsletter" className="rounded" />
          <Label htmlFor="newsletter" className="text-sm">
            Subscribe to our newsletter for updates
          </Label>
        </div>
      </form>
      <SheetFooter>
        <Button variant="outline">Cancel</Button>
        <SheetClose asChild>
          <Button type="submit">Send Message</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

// Product details
export const ProductDetails = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">View Product</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Wireless Headphones</SheetTitle>
        <SheetDescription>
          Premium noise-cancelling wireless headphones
        </SheetDescription>
      </SheetHeader>
      <div className="py-4 space-y-6">
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">Product Image</span>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">$299.99</h4>
            <p className="text-sm text-muted-foreground">
              Free shipping available
            </p>
          </div>

          <div className="space-y-2">
            <Label>Color</Label>
            <div className="flex space-x-2">
              <button className="w-8 h-8 bg-black rounded-full border-2 border-primary"></button>
              <button className="w-8 h-8 bg-white border rounded-full"></button>
              <button className="w-8 h-8 bg-gray-400 rounded-full"></button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              min="1"
              defaultValue="1"
              className="w-20"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Features</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Active noise cancellation</li>
              <li>• 30-hour battery life</li>
              <li>• Bluetooth 5.0 connectivity</li>
              <li>• Quick charge support</li>
              <li>• Foldable design</li>
            </ul>
          </div>
        </div>
      </div>
      <SheetFooter className="flex-col gap-2">
        <Button className="w-full">Add to Cart</Button>
        <Button variant="outline" className="w-full">
          Add to Wishlist
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

// Mobile action sheet (bottom)
export const MobileActionSheet = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">📱 Actions</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Quick Actions</SheetTitle>
        <SheetDescription>Choose an action to perform</SheetDescription>
      </SheetHeader>
      <div className="grid grid-cols-2 gap-4 py-4">
        <Button variant="outline" className="h-16 flex-col space-y-2">
          <span className="text-lg">📁</span>
          <span className="text-sm">Files</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-2">
          <span className="text-lg">📷</span>
          <span className="text-sm">Camera</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-2">
          <span className="text-lg">📝</span>
          <span className="text-sm">Notes</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col space-y-2">
          <span className="text-lg">📞</span>
          <span className="text-sm">Contacts</span>
        </Button>
      </div>
    </SheetContent>
  </Sheet>
);

// Notification center (top)
export const NotificationCenter = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">🔔 Notifications (3)</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Notifications</SheetTitle>
        <SheetDescription>
          Your recent notifications and updates
        </SheetDescription>
      </SheetHeader>
      <div className="py-4 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 border rounded-md">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">New message from John</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Hey, are we still on for the meeting tomorrow?
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                2 minutes ago
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 border rounded-md">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Deployment successful</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Your app has been deployed to production successfully.
              </p>
              <p className="text-xs text-muted-foreground mt-2">1 hour ago</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 p-3 border rounded-md bg-muted/50">
            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
            <div className="flex-1">
              <h4 className="font-medium text-sm">Security update available</h4>
              <p className="text-xs text-muted-foreground mt-1">
                A new security patch is available for your system.
              </p>
              <p className="text-xs text-muted-foreground mt-2">3 hours ago</p>
            </div>
          </div>
        </div>
      </div>
      <SheetFooter>
        <Button variant="outline" className="w-full">
          Mark All as Read
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

// Controlled sheet
export const ControlledSheet = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Controlled Sheet</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
            <SheetDescription>
              This sheet's open state is controlled externally.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              You can control this sheet's visibility from outside components or
              based on application state.
            </p>
          </div>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>
              Close Programmatically
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

// Interactive playground
export const Playground = (args: {
  side?: "top" | "right" | "bottom" | "left";
}) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Sheet</Button>
    </SheetTrigger>
    <SheetContent side={args.side}>
      <SheetHeader>
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>
          This sheet opens from the {args.side} side.
        </SheetDescription>
      </SheetHeader>
      <div className="py-4">
        <p className="text-sm text-muted-foreground">
          Adjust the side using the controls to see how the sheet behavior
          changes.
        </p>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button>Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

Playground.args = {
  side: "right",
};
