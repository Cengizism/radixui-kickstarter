import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Textarea } from './textarea';
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
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "full"],
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
