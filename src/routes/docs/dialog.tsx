import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/elements/input';
import { Label } from '@/components/ui/elements/label';
import { Textarea } from '@/components/ui/elements/textarea';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/modules/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/modules/dialog";

export const Route = createFileRoute("/docs/dialog")({
  component: DialogPage,
});

function DialogPage() {
  const [open, setOpen] = useState(false);
  const [profileData] = useState({
    name: "Pedro Duarte",
    username: "@peduarte",
    email: "pedro@example.com",
    bio: "Frontend developer passionate about design systems and accessibility.",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    await wait();
    setIsLoading(false);
    setOpen(false);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    await wait();
    setIsLoading(false);
    setConfirmOpen(false);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dialog</h1>
        <p className="text-xl text-muted-foreground">
          A window overlaid on either the primary window or another dialog
          window, rendering the content underneath inert.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Dialog */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Dialog
              <Badge variant="outline">Default</Badge>
            </CardTitle>
            <CardDescription>
              A simple dialog with form inputs and standard layout.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
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
          </CardContent>
        </Card>

        {/* Controlled Dialog with Async Operations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Controlled Dialog
              <Badge variant="outline">Async</Badge>
            </CardTitle>
            <CardDescription>
              Programmatically control dialog state and handle async form
              submissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                        defaultValue={profileData.name}
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
                        defaultValue={profileData.email}
                        className="col-span-3"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="controlled-bio" className="text-right">
                        Bio
                      </Label>
                      <Textarea
                        id="controlled-bio"
                        defaultValue={profileData.bio}
                        className="col-span-3"
                        rows={3}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setOpen(false)}
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
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Size Variants
              <Badge variant="outline">Responsive</Badge>
            </CardTitle>
            <CardDescription>
              Different dialog sizes for various content types and screen sizes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Small Dialog
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
                  <Button variant="outline">Default Dialog</Button>
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
                  <Button variant="outline">Large Dialog</Button>
                </DialogTrigger>
                <DialogContent size="lg">
                  <DialogHeader>
                    <DialogTitle>Large Dialog</DialogTitle>
                    <DialogDescription>
                      Spacious dialog for complex forms and detailed
                      information.
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
                        <Textarea
                          id="large-address"
                          placeholder="Full address"
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
          </CardContent>
        </Card>

        {/* Confirmation Dialog */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Confirmation Dialog
              <Badge variant="outline">Destructive</Badge>
            </CardTitle>
            <CardDescription>
              Dialog for confirming destructive actions with proper messaging.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
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
          </CardContent>
        </Card>

        {/* Feedback Dialog */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Feedback Dialog
              <Badge variant="outline">Form</Badge>
            </CardTitle>
            <CardDescription>
              Complex form dialog with multiple input types and validation.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Scrollable Content */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Scrollable Content
              <Badge variant="outline">Overflow</Badge>
            </CardTitle>
            <CardDescription>
              Dialog with scrollable content when content exceeds viewport
              height.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris.
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
          </CardContent>
        </Card>
      </div>

      {/* Usage Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guide</CardTitle>
          <CardDescription>
            Learn how to implement and customize Dialog components based on
            official RadixUI patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">Basic Implementation</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <div>Dialog content</div>
    <DialogFooter>
      <Button>Action</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Controlled Dialog</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    {/* Content with programmatic control */}
  </DialogContent>
</Dialog>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">
              Async Form Submission
            </h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`const handleSubmit = async (event) => {
  event.preventDefault();
  setIsLoading(true);
  await submitForm();
  setIsLoading(false);
  setOpen(false); // Close dialog after success
};`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">
              Available Size Variants
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Content Sizes:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    • <code>sm</code> - Small dialog (max-w-sm)
                  </li>
                  <li>
                    • <code>default</code> - Standard dialog (max-w-lg)
                  </li>
                  <li>
                    • <code>lg</code> - Large dialog (max-w-2xl)
                  </li>
                  <li>
                    • <code>xl</code> - Extra large (max-w-4xl)
                  </li>
                  <li>
                    • <code>full</code> - Full size (95vw/95vh)
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Key Features:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Modal and non-modal modes</li>
                  <li>• Automatic focus trapping</li>
                  <li>• Controlled/uncontrolled state</li>
                  <li>• Screen reader announcements</li>
                  <li>• Escape key closes dialog</li>
                  <li>• Custom portal containers</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
