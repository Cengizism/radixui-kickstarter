import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '../input/input';
import { Label } from '../label/label';
import { Textarea } from '../textarea/textarea';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./dialog";

export default {
  title: "UI/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. Built with Radix UI primitives for accessibility and keyboard navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Root Props
    open: {
      control: "boolean",
      description:
        "The controlled open state of the dialog. Must be used in conjunction with onOpenChange.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "undefined" },
      },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the dialog changes.",
      table: {
        category: "Root Props",
        type: { summary: "(open: boolean) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    modal: {
      control: "boolean",
      description:
        "The modality of the dialog. When set to true, interaction with outside elements will be disabled and only dialog content will be visible to screen readers.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },

    // Trigger Props
    triggerAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the trigger.",
      table: {
        category: "Trigger Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "full"],
      description: "The size variant of the dialog content.",
      table: {
        category: "Content Props",
        type: { summary: '"sm" | "default" | "lg" | "xl" | "full"' },
        defaultValue: { summary: '"default"' },
      },
    },
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onPointerDownOutside: {
      action: "onPointerDownOutside",
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component.",
      table: {
        category: "Content Props",
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    onEscapeKeyDown: {
      action: "onEscapeKeyDown",
      description: "Event handler called when the escape key is down.",
      table: {
        category: "Content Props",
        type: { summary: "(event: KeyboardEvent) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    onInteractOutside: {
      action: "onInteractOutside",
      description:
        "Event handler called when an interaction happens outside the component.",
      table: {
        category: "Content Props",
        type: {
          summary:
            "(event: FocusOutsideEvent | PointerDownOutsideEvent) => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
    onCloseAutoFocus: {
      action: "onCloseAutoFocus",
      description: "Event handler called when auto-focusing on close.",
      table: {
        category: "Content Props",
        type: { summary: "(event: Event) => void" },
        defaultValue: { summary: "undefined" },
      },
    },
    onOpenAutoFocus: {
      action: "onOpenAutoFocus",
      description: "Event handler called when auto-focusing on open.",
      table: {
        category: "Content Props",
        type: { summary: "(event: Event) => void" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Portal Props
    container: {
      description: "Specify a container element to portal the content into.",
      table: {
        category: "Portal Props",
        type: { summary: "HTMLElement | (() => HTMLElement)" },
        defaultValue: { summary: "document.body" },
      },
    },

    // Overlay Props
    overlayClassName: {
      control: "text",
      description: "Additional CSS classes to apply to the overlay.",
      table: {
        category: "Overlay Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Header Props
    title: {
      control: "text",
      description: "The title of the dialog.",
      table: {
        category: "Header Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    description: {
      control: "text",
      description: "The description of the dialog.",
      table: {
        category: "Header Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Styling Props
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the dialog content.",
      table: {
        category: "Styling Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

// Basic dialog example
export const Default = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Edit Profile</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
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
      <DialogFooter>
        <Button type="submit">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

// Controlled dialog with async operations
export const ControlledDialog = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Update Profile</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Profile</DialogTitle>
          <DialogDescription>
            This dialog closes automatically after form submission.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="controlled-name" className="text-right">
                Name
              </Label>
              <Input
                id="controlled-name"
                defaultValue="John Doe"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="controlled-email" className="text-right">
                Email
              </Label>
              <Input
                id="controlled-email"
                type="email"
                defaultValue="john@example.com"
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Updating..." : "Update Profile"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Size variants
export const SizeVariants = () => (
  <div className="flex flex-wrap gap-4">
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </DialogTrigger>
      <DialogContent size="sm">
        <DialogHeader>
          <DialogTitle>Small Dialog</DialogTitle>
          <DialogDescription>
            Perfect for simple confirmations or brief forms.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-sm">
            This is a compact dialog for minimal content.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button size="sm">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Default</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Default Dialog</DialogTitle>
          <DialogDescription>
            Standard size suitable for most forms and content.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="grid gap-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="default-input" className="text-right">
                Input
              </Label>
              <Input id="default-input" className="col-span-3" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Save</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Large</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Large Dialog</DialogTitle>
          <DialogDescription>
            Spacious dialog for complex forms and detailed information.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="large-first">First Name</Label>
              <Input id="large-first" placeholder="First name" />
            </div>
            <div>
              <Label htmlFor="large-last">Last Name</Label>
              <Input id="large-last" placeholder="Last name" />
            </div>
            <div className="col-span-2">
              <Label htmlFor="large-address">Address</Label>
              <Textarea id="large-address" placeholder="Full address" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Extra Large</Button>
      </DialogTrigger>
      <DialogContent size="xl">
        <DialogHeader>
          <DialogTitle>Extra Large Dialog</DialogTitle>
          <DialogDescription>
            Maximum space for complex layouts and detailed forms.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="xl-name">Name</Label>
              <Input id="xl-name" placeholder="Full name" />
            </div>
            <div>
              <Label htmlFor="xl-email">Email</Label>
              <Input id="xl-email" type="email" placeholder="Email" />
            </div>
            <div>
              <Label htmlFor="xl-phone">Phone</Label>
              <Input id="xl-phone" type="tel" placeholder="Phone" />
            </div>
            <div className="col-span-3">
              <Label htmlFor="xl-bio">Biography</Label>
              <Textarea
                id="xl-bio"
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
);

// Confirmation dialog
export const ConfirmationDialog = () => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setConfirmOpen(false);
  };

  return (
    <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setConfirmOpen(false)}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete Account"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Complex form dialog
export const FeedbackDialog = () => {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Send Feedback</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>Send Feedback</DialogTitle>
          <DialogDescription>
            Help us improve by sharing your thoughts and suggestions.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="feedback-name">Name</Label>
              <Input id="feedback-name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="feedback-email">Email</Label>
              <Input
                id="feedback-email"
                type="email"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="feedback-type">Feedback Type</Label>
            <select
              id="feedback-type"
              className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md"
            >
              <option value="">Select type</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="general">General Feedback</option>
            </select>
          </div>
          <div>
            <Label htmlFor="feedback-message">Message</Label>
            <Textarea
              id="feedback-message"
              placeholder="Tell us about your experience..."
              rows={5}
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setFeedbackOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Send Feedback</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Scrollable content dialog
export const ScrollableContent = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">View Terms</Button>
    </DialogTrigger>
    <DialogContent className="max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Terms and Conditions</DialogTitle>
        <DialogDescription>
          Please read our terms and conditions carefully.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4 space-y-4">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i}>
            <h4 className="font-semibold">Section {i + 1}</h4>
            <p className="text-sm text-muted-foreground mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        ))}
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Decline</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Accept</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

// Alert dialog style
export const AlertDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Show Alert</Button>
    </DialogTrigger>
    <DialogContent size="sm">
      <DialogHeader>
        <DialogTitle>Important Notice</DialogTitle>
        <DialogDescription>
          Your session will expire in 5 minutes. Please save your work to avoid
          losing any changes.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Dismiss</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Save Work</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

// Multi-step dialog
export const MultiStepDialog = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const resetSteps = () => setCurrentStep(1);

  return (
    <Dialog onOpenChange={(open) => !open && resetSteps()}>
      <DialogTrigger asChild>
        <Button variant="outline">Setup Wizard</Button>
      </DialogTrigger>
      <DialogContent size="lg">
        <DialogHeader>
          <DialogTitle>
            Account Setup - Step {currentStep} of {totalSteps}
          </DialogTitle>
          <DialogDescription>
            Complete your account setup to get started.
          </DialogDescription>
        </DialogHeader>

        <div className="py-6">
          {/* Progress indicator */}
          <div className="flex justify-between items-center mb-6">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`flex items-center ${i < totalSteps - 1 ? "flex-1" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    i + 1 <= currentStep
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                {i < totalSteps - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      i + 1 < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step content */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <h3 className="font-medium">Personal Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="step1-first">First Name</Label>
                  <Input id="step1-first" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="step1-last">Last Name</Label>
                  <Input id="step1-last" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="step1-email">Email</Label>
                <Input
                  id="step1-email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h3 className="font-medium">Company Information</h3>
              <div>
                <Label htmlFor="step2-company">Company Name</Label>
                <Input id="step2-company" placeholder="Acme Corp" />
              </div>
              <div>
                <Label htmlFor="step2-role">Your Role</Label>
                <select
                  id="step2-role"
                  className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md"
                >
                  <option value="">Select your role</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <h3 className="font-medium">Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Send me product updates</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Send me marketing emails</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Send me security alerts</span>
                </label>
              </div>
              <div>
                <Label htmlFor="step3-notes">Additional Notes</Label>
                <Textarea
                  id="step3-notes"
                  placeholder="Anything else you'd like us to know?"
                  rows={3}
                />
              </div>
            </div>
          )}
        </div>

        <DialogFooter>
          {currentStep > 1 && (
            <Button type="button" variant="outline" onClick={prevStep}>
              Previous
            </Button>
          )}
          {currentStep < totalSteps ? (
            <Button onClick={nextStep}>Next</Button>
          ) : (
            <DialogClose asChild>
              <Button>Complete Setup</Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

// Nested dialog example
export const NestedDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open Settings</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Settings</DialogTitle>
        <DialogDescription>
          Manage your application settings and preferences.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4 space-y-4">
        <div className="space-y-2">
          <Label>Theme</Label>
          <select className="w-full px-3 py-2 border border-input bg-background rounded-md">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Advanced Settings
            </Button>
          </DialogTrigger>
          <DialogContent size="sm">
            <DialogHeader>
              <DialogTitle>Advanced Settings</DialogTitle>
              <DialogDescription>
                Configure advanced application behavior.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Enable debug mode</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Auto-save changes</span>
              </label>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button size="sm">Save</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Save Settings</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "xl" | "full";
}) => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent size={args.size}>
      <DialogHeader>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogDescription>
          This is a sample dialog with {args.size} size.
        </DialogDescription>
      </DialogHeader>
      <div className="py-4">
        <p className="text-sm text-muted-foreground">
          Dialog content goes here. Adjust the size using the controls to see
          how it affects the layout.
        </p>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button>Confirm</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

Playground.args = {
  size: "default",
};

// Advanced Example
export const AdvancedExample = () => {
  const [dialogStates, setDialogStates] = useState({
    profile: false,
    settings: false,
    confirm: false,
    wizard: false,
  });

  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "",
    notifications: true,
    theme: "light",
    language: "en",
  });

  const [wizardStep, setWizardStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const openDialog = (dialog: keyof typeof dialogStates) => {
    setDialogStates((prev) => ({ ...prev, [dialog]: true }));
  };

  const closeDialog = (dialog: keyof typeof dialogStates) => {
    setDialogStates((prev) => ({ ...prev, [dialog]: false }));
    if (dialog === "wizard") {
      setWizardStep(1);
    }
  };

  const handleSave = async (dialog: keyof typeof dialogStates) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    closeDialog(dialog);
  };

  const updateFormData = (key: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6 w-full max-w-4xl">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Advanced Dialog Management System
        </h3>
        <Badge
          variant={
            Object.values(dialogStates).some(Boolean) ? "default" : "secondary"
          }
        >
          {Object.values(dialogStates).filter(Boolean).length} dialogs open
        </Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Button onClick={() => openDialog("profile")} variant="outline">
          Edit Profile
        </Button>
        <Button onClick={() => openDialog("settings")} variant="outline">
          Settings
        </Button>
        <Button onClick={() => openDialog("confirm")} variant="destructive">
          Delete Account
        </Button>
        <Button onClick={() => openDialog("wizard")} variant="outline">
          Setup Wizard
        </Button>
      </div>

      {/* Profile Dialog */}
      <Dialog
        open={dialogStates.profile}
        onOpenChange={(open) => !open && closeDialog("profile")}
      >
        <DialogContent size="lg">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your personal information and preferences.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="profile-name">Full Name</Label>
                <Input
                  id="profile-name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="profile-email">Email</Label>
                <Input
                  id="profile-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="profile-bio">Bio</Label>
              <Textarea
                id="profile-bio"
                placeholder="Tell us about yourself..."
                value={formData.bio}
                onChange={(e) => updateFormData("bio", e.target.value)}
                rows={4}
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="profile-notifications"
                checked={formData.notifications}
                onChange={(e) =>
                  updateFormData("notifications", e.target.checked)
                }
                className="rounded"
              />
              <Label htmlFor="profile-notifications">
                Send me email notifications
              </Label>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => closeDialog("profile")}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button onClick={() => handleSave("profile")} disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog
        open={dialogStates.settings}
        onOpenChange={(open) => !open && closeDialog("settings")}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Application Settings</DialogTitle>
            <DialogDescription>
              Configure your application preferences.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <Label htmlFor="settings-theme">Theme</Label>
              <select
                id="settings-theme"
                value={formData.theme}
                onChange={(e) => updateFormData("theme", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>
            <div>
              <Label htmlFor="settings-language">Language</Label>
              <select
                id="settings-language"
                value={formData.language}
                onChange={(e) => updateFormData("language", e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>

            {/* Nested Dialog Example */}
            <div>
              <Label>Advanced Options</Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full mt-2">
                    Configure Advanced Settings
                  </Button>
                </DialogTrigger>
                <DialogContent size="sm">
                  <DialogHeader>
                    <DialogTitle>Advanced Settings</DialogTitle>
                    <DialogDescription>
                      Configure advanced application behavior.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="debug" className="rounded" />
                      <Label htmlFor="debug">Enable debug mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="analytics"
                        className="rounded"
                      />
                      <Label htmlFor="analytics">
                        Share anonymous analytics
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="beta" className="rounded" />
                      <Label htmlFor="beta">Participate in beta features</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button size="sm">Save Advanced Settings</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => closeDialog("settings")}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button onClick={() => handleSave("settings")} disabled={isLoading}>
              {isLoading ? "Saving..." : "Save Settings"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Confirmation Dialog */}
      <Dialog
        open={dialogStates.confirm}
        onOpenChange={(open) => !open && closeDialog("confirm")}
      >
        <DialogContent size="sm">
          <DialogHeader>
            <DialogTitle>Delete Account</DialogTitle>
            <DialogDescription>
              Are you absolutely sure? This action cannot be undone and will
              permanently delete your account and all associated data.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <h4 className="font-medium text-destructive mb-2">
                This will delete:
              </h4>
              <ul className="text-sm text-destructive space-y-1">
                <li>• Your profile and personal information</li>
                <li>• All your projects and files</li>
                <li>• Your subscription and billing history</li>
                <li>• All shared content and collaborations</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => closeDialog("confirm")}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleSave("confirm")}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete Account"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Multi-step Wizard Dialog */}
      <Dialog
        open={dialogStates.wizard}
        onOpenChange={(open) => !open && closeDialog("wizard")}
      >
        <DialogContent size="xl">
          <DialogHeader>
            <DialogTitle>
              Account Setup Wizard - Step {wizardStep} of 3
            </DialogTitle>
            <DialogDescription>
              Complete your account setup with this guided wizard.
            </DialogDescription>
          </DialogHeader>

          <div className="py-6">
            {/* Progress Bar */}
            <div className="flex items-center mb-8">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                      i + 1 <= wizardStep
                        ? "bg-primary border-primary text-primary-foreground"
                        : "bg-background border-muted-foreground/30 text-muted-foreground"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < 2 && (
                    <div
                      className={`flex-1 h-1 mx-4 ${
                        i + 1 < wizardStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="min-h-[300px]">
              {wizardStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Welcome!</h3>
                    <p className="text-muted-foreground">
                      Let's start by setting up your basic information.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    <div>
                      <Label htmlFor="wizard-first">First Name</Label>
                      <Input id="wizard-first" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="wizard-last">Last Name</Label>
                      <Input id="wizard-last" placeholder="Doe" />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="wizard-email">Email Address</Label>
                      <Input
                        id="wizard-email"
                        type="email"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>
              )}

              {wizardStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">
                      Company Information
                    </h3>
                    <p className="text-muted-foreground">
                      Tell us about your organization.
                    </p>
                  </div>
                  <div className="space-y-4 max-w-lg mx-auto">
                    <div>
                      <Label htmlFor="wizard-company">Company Name</Label>
                      <Input
                        id="wizard-company"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <Label htmlFor="wizard-role">Your Role</Label>
                      <select
                        id="wizard-role"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Select your role</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="wizard-size">Company Size</Label>
                      <select
                        id="wizard-size"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Select size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="200+">200+ employees</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {wizardStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Final Setup</h3>
                    <p className="text-muted-foreground">
                      Configure your preferences to complete the setup.
                    </p>
                  </div>
                  <div className="space-y-4 max-w-lg mx-auto">
                    <div>
                      <Label className="text-base font-medium">
                        Notification Preferences
                      </Label>
                      <div className="space-y-3 mt-3">
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Product updates</span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">
                            Marketing communications
                          </span>
                        </label>
                        <label className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Security alerts</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="wizard-timezone">Timezone</Label>
                      <select
                        id="wizard-timezone"
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Select timezone</option>
                        <option value="UTC">UTC</option>
                        <option value="EST">Eastern Time</option>
                        <option value="PST">Pacific Time</option>
                        <option value="GMT">GMT</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <DialogFooter>
            {wizardStep > 1 && (
              <Button
                variant="outline"
                onClick={() => setWizardStep((prev) => prev - 1)}
                disabled={isLoading}
              >
                Previous
              </Button>
            )}
            {wizardStep < 3 ? (
              <Button onClick={() => setWizardStep((prev) => prev + 1)}>
                Next
              </Button>
            ) : (
              <Button onClick={() => handleSave("wizard")} disabled={isLoading}>
                {isLoading ? "Completing..." : "Complete Setup"}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Status Display */}
      <Card>
        <CardHeader>
          <h4 className="font-medium">Dialog States</h4>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Profile Dialog:</span>
              <Badge variant={dialogStates.profile ? "default" : "secondary"}>
                {dialogStates.profile ? "Open" : "Closed"}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>Settings Dialog:</span>
              <Badge variant={dialogStates.settings ? "default" : "secondary"}>
                {dialogStates.settings ? "Open" : "Closed"}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>Confirm Dialog:</span>
              <Badge
                variant={dialogStates.confirm ? "destructive" : "secondary"}
              >
                {dialogStates.confirm ? "Open" : "Closed"}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span>Wizard Dialog:</span>
              <Badge variant={dialogStates.wizard ? "default" : "secondary"}>
                {dialogStates.wizard ? `Open (Step ${wizardStep})` : "Closed"}
              </Badge>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="text-xs text-muted-foreground">
              Form Data: Name={formData.name}, Email={formData.email}, Theme=
              {formData.theme}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
