import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/elements/input';
import { Label } from '@/components/ui/elements/label';
import { Separator } from '@/components/ui/elements/separator';
import { Switch } from '@/components/ui/elements/switch';
import { useEffect, useState } from 'react';
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/modules/toast";

export const Route = createFileRoute("/docs/toast")({
  component: ToastDemo,
});

function ToastDemo() {
  const [toasts, setToasts] = useState<
    { id: number; type: string; title: string; description: string }[]
  >([]);
  const [toastId, setToastId] = useState(0);

  // Auto-dismiss toasts
  useEffect(() => {
    const timer = setTimeout(() => {
      if (toasts.length > 0) {
        setToasts((prev) => prev.slice(1));
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [toasts]);

  const showToast = (type: string, title: string, description: string) => {
    const newToast = { id: toastId, type, title, description };
    setToasts((prev) => [...prev, newToast]);
    setToastId((prev) => prev + 1);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastProvider>
      <div className="p-8 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Toast</h1>
            <p className="text-lg text-muted-foreground">
              A succinct message that is displayed temporarily.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Notifications</Badge>
            <Badge variant="secondary">Temporary</Badge>
            <Badge variant="secondary">Auto-dismiss</Badge>
            <Badge variant="secondary">Swipe to Close</Badge>
            <Badge variant="secondary">Accessibility</Badge>
          </div>
        </div>

        <Separator />

        {/* Basic Usage */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <p className="text-muted-foreground">
              Simple toast notifications with different variants.
            </p>
          </div>
          <div className="space-y-4 p-6 border rounded-lg">
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() =>
                  showToast(
                    "default",
                    "Success",
                    "Your changes have been saved successfully."
                  )
                }
              >
                Show Default Toast
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  showToast(
                    "destructive",
                    "Error",
                    "Failed to save changes. Please try again."
                  )
                }
              >
                Show Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showToast("success", "Success", "File uploaded successfully!")
                }
              >
                Show Success Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() =>
                  showToast(
                    "warning",
                    "Warning",
                    "Please review your changes before saving."
                  )
                }
              >
                Show Warning Toast
              </Button>
            </div>

            {/* Sample Toast Display */}
            <div className="space-y-3 mt-6">
              <h4 className="text-sm font-medium">Current Toasts:</h4>
              <div className="space-y-2">
                <Toast variant="default">
                  <div className="flex-1 grid gap-1">
                    <ToastTitle>Default Toast</ToastTitle>
                    <ToastDescription>
                      This is a default toast notification.
                    </ToastDescription>
                  </div>
                  <ToastClose />
                </Toast>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Toast Variants */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Toast Variants</h2>
            <p className="text-muted-foreground">
              Different visual styles for various notification types.
            </p>
          </div>
          <div className="space-y-6 p-6 border rounded-lg">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Default</h4>
              <Toast variant="default">
                <div className="flex-1 grid gap-1">
                  <ToastTitle>Default Notification</ToastTitle>
                  <ToastDescription>
                    Standard notification with default styling.
                  </ToastDescription>
                </div>
                <ToastClose />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Destructive</h4>
              <Toast variant="destructive">
                <div className="flex-1 grid gap-1">
                  <ToastTitle>Error Occurred</ToastTitle>
                  <ToastDescription>
                    Something went wrong. Please try again.
                  </ToastDescription>
                </div>
                <ToastAction
                  variant="destructive"
                  altText="Retry the failed action"
                >
                  Retry
                </ToastAction>
                <ToastClose />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Success</h4>
              <Toast variant="success">
                <div className="flex-1 grid gap-1">
                  <ToastTitle>Success!</ToastTitle>
                  <ToastDescription>
                    Your action was completed successfully.
                  </ToastDescription>
                </div>
                <ToastAction
                  variant="success"
                  altText="View detailed information"
                >
                  View Details
                </ToastAction>
                <ToastClose />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Warning</h4>
              <Toast variant="warning">
                <div className="grid gap-1">
                  <ToastTitle>Warning</ToastTitle>
                  <ToastDescription>
                    Please review your changes before proceeding.
                  </ToastDescription>
                </div>
                <ToastAction variant="warning" altText="Review your changes">
                  Review
                </ToastAction>
                <ToastClose />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Info</h4>
              <Toast variant="info">
                <div className="grid gap-1">
                  <ToastTitle>Information</ToastTitle>
                  <ToastDescription>
                    New features are now available for your account.
                  </ToastDescription>
                </div>
                <ToastAction
                  variant="info"
                  altText="Learn more about new features"
                >
                  Learn More
                </ToastAction>
                <ToastClose />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Loading</h4>
              <Toast variant="loading">
                <div className="grid gap-1">
                  <ToastTitle>Processing...</ToastTitle>
                  <ToastDescription>
                    Please wait while we process your request.
                  </ToastDescription>
                </div>
                <ToastClose />
              </Toast>
            </div>
          </div>
        </section>

        <Separator />

        {/* Size Variants */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Size Variants</h2>
            <p className="text-muted-foreground">
              Different sizes for various use cases.
            </p>
          </div>
          <div className="space-y-6 p-6 border rounded-lg">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Small</h4>
              <Toast size="sm">
                <div className="grid gap-1">
                  <ToastTitle size="sm">Small Toast</ToastTitle>
                  <ToastDescription size="sm">
                    Compact notification for minimal UI impact.
                  </ToastDescription>
                </div>
                <ToastAction size="sm" altText="Perform action">
                  Action
                </ToastAction>
                <ToastClose size="sm" />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Default</h4>
              <Toast size="default">
                <div className="grid gap-1">
                  <ToastTitle size="default">Default Size</ToastTitle>
                  <ToastDescription size="default">
                    Standard size for most notifications.
                  </ToastDescription>
                </div>
                <ToastAction size="default" altText="Perform action">
                  Action
                </ToastAction>
                <ToastClose size="default" />
              </Toast>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Large</h4>
              <Toast size="lg">
                <div className="grid gap-1">
                  <ToastTitle size="lg">Large Toast</ToastTitle>
                  <ToastDescription size="lg">
                    Prominent notification for important messages.
                  </ToastDescription>
                </div>
                <ToastAction size="lg" altText="Perform action">
                  Action
                </ToastAction>
                <ToastClose size="lg" />
              </Toast>
            </div>
          </div>
        </section>

        <Separator />

        {/* Viewport Positions */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Viewport Positions</h2>
            <p className="text-muted-foreground">
              Configure where toasts appear on the screen.
            </p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  showToast(
                    "default",
                    "Top Left",
                    "Toast positioned at top-left corner"
                  )
                }
              >
                Top Left
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  showToast(
                    "default",
                    "Top Center",
                    "Toast positioned at top-center"
                  )
                }
              >
                Top Center
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  showToast(
                    "default",
                    "Top Right",
                    "Toast positioned at top-right corner"
                  )
                }
              >
                Top Right
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  showToast(
                    "default",
                    "Bottom Left",
                    "Toast positioned at bottom-left corner"
                  )
                }
              >
                Bottom Left
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  showToast(
                    "default",
                    "Bottom Center",
                    "Toast positioned at bottom-center"
                  )
                }
              >
                Bottom Center
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  showToast(
                    "default",
                    "Bottom Right",
                    "Toast positioned at bottom-right corner"
                  )
                }
              >
                Bottom Right (Default)
              </Button>
            </div>
          </div>
        </section>

        <Separator />

        {/* Interactive Examples */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Interactive Examples</h2>
            <p className="text-muted-foreground">
              Real-world toast notification patterns.
            </p>
          </div>
          <div className="space-y-8 p-6 border rounded-lg">
            {/* File Upload Example */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">File Upload Simulation</h4>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    showToast(
                      "loading",
                      "Uploading...",
                      "Please wait while we upload your file."
                    );
                    setTimeout(() => {
                      showToast(
                        "success",
                        "Upload Complete",
                        "Your file has been uploaded successfully."
                      );
                    }, 2000);
                  }}
                >
                  Upload File
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    showToast(
                      "loading",
                      "Uploading...",
                      "Please wait while we upload your file."
                    );
                    setTimeout(() => {
                      showToast(
                        "destructive",
                        "Upload Failed",
                        "Failed to upload file. Network error."
                      );
                    }, 2000);
                  }}
                >
                  Simulate Error
                </Button>
              </div>
            </div>

            {/* Form Validation Example */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Form Validation</h4>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter email" />
                  </div>
                  <div className="space-y-1">
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter password" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() =>
                      showToast(
                        "success",
                        "Login Successful",
                        "Welcome back! Redirecting to dashboard."
                      )
                    }
                  >
                    Valid Login
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      showToast(
                        "destructive",
                        "Invalid Credentials",
                        "Please check your email and password."
                      )
                    }
                  >
                    Invalid Login
                  </Button>
                </div>
              </div>
            </div>

            {/* Settings Update Example */}
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Settings Update</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    onCheckedChange={(checked) => {
                      if (checked) {
                        showToast(
                          "success",
                          "Notifications Enabled",
                          "You will now receive email notifications."
                        );
                      } else {
                        showToast(
                          "info",
                          "Notifications Disabled",
                          "Email notifications have been turned off."
                        );
                      }
                    }}
                  />
                </div>
                <Button
                  onClick={() =>
                    showToast(
                      "success",
                      "Settings Saved",
                      "Your preferences have been updated successfully."
                    )
                  }
                >
                  Save All Settings
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Props Reference */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Props Reference</h2>
            <p className="text-muted-foreground">
              Complete API reference for all Toast components.
            </p>
          </div>
          <div className="space-y-6">
            {/* ToastProvider */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">ToastProvider</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="border border-border p-2 text-left">
                        Prop
                      </th>
                      <th className="border border-border p-2 text-left">
                        Type
                      </th>
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
                        duration
                      </td>
                      <td className="border border-border p-2">number</td>
                      <td className="border border-border p-2">5000</td>
                      <td className="border border-border p-2">
                        Duration before auto-close (ms)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        label
                      </td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">
                        "Notification"
                      </td>
                      <td className="border border-border p-2">
                        Accessible label for notifications
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        swipeDirection
                      </td>
                      <td className="border border-border p-2">
                        'up' | 'down' | 'left' | 'right'
                      </td>
                      <td className="border border-border p-2">'right'</td>
                      <td className="border border-border p-2">
                        Direction to swipe for dismissal
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        swipeThreshold
                      </td>
                      <td className="border border-border p-2">number</td>
                      <td className="border border-border p-2">50</td>
                      <td className="border border-border p-2">
                        Swipe distance threshold for dismissal
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ToastViewport */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">ToastViewport</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="border border-border p-2 text-left">
                        Prop
                      </th>
                      <th className="border border-border p-2 text-left">
                        Type
                      </th>
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
                        position
                      </td>
                      <td className="border border-border p-2">
                        'top-left' | 'top-center' | 'top-right' | 'bottom-left'
                        | 'bottom-center' | 'bottom-right'
                      </td>
                      <td className="border border-border p-2">
                        'bottom-right'
                      </td>
                      <td className="border border-border p-2">
                        Position of the toast viewport
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        hotkey
                      </td>
                      <td className="border border-border p-2">string[]</td>
                      <td className="border border-border p-2">["F8"]</td>
                      <td className="border border-border p-2">
                        Keyboard shortcut to focus viewport
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        label
                      </td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">
                        "Notifications ({"hotkey"})"
                      </td>
                      <td className="border border-border p-2">
                        Accessible label for the viewport
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Toast */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Toast</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="border border-border p-2 text-left">
                        Prop
                      </th>
                      <th className="border border-border p-2 text-left">
                        Type
                      </th>
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
                        'default' | 'destructive' | 'success' | 'warning' |
                        'info' | 'loading'
                      </td>
                      <td className="border border-border p-2">'default'</td>
                      <td className="border border-border p-2">
                        Visual style of the toast
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        size
                      </td>
                      <td className="border border-border p-2">
                        'sm' | 'default' | 'lg'
                      </td>
                      <td className="border border-border p-2">'default'</td>
                      <td className="border border-border p-2">
                        Size of the toast
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        type
                      </td>
                      <td className="border border-border p-2">
                        'foreground' | 'background'
                      </td>
                      <td className="border border-border p-2">'foreground'</td>
                      <td className="border border-border p-2">
                        Screen reader announcement priority
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        duration
                      </td>
                      <td className="border border-border p-2">number</td>
                      <td className="border border-border p-2">
                        Provider default
                      </td>
                      <td className="border border-border p-2">
                        Override provider duration
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        open
                      </td>
                      <td className="border border-border p-2">boolean</td>
                      <td className="border border-border p-2">undefined</td>
                      <td className="border border-border p-2">
                        Controlled open state
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        onOpenChange
                      </td>
                      <td className="border border-border p-2">
                        (open: boolean) =&gt; void
                      </td>
                      <td className="border border-border p-2">undefined</td>
                      <td className="border border-border p-2">
                        Called when open state changes
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ToastAction */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium">ToastAction</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-border">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="border border-border p-2 text-left">
                        Prop
                      </th>
                      <th className="border border-border p-2 text-left">
                        Type
                      </th>
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
                        'default' | 'destructive' | 'success' | 'warning' |
                        'info' | 'ghost'
                      </td>
                      <td className="border border-border p-2">'default'</td>
                      <td className="border border-border p-2">
                        Visual style of the action button
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        size
                      </td>
                      <td className="border border-border p-2">
                        'sm' | 'default' | 'lg'
                      </td>
                      <td className="border border-border p-2">'default'</td>
                      <td className="border border-border p-2">
                        Size of the action button
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2 font-mono">
                        altText
                      </td>
                      <td className="border border-border p-2">string</td>
                      <td className="border border-border p-2">undefined</td>
                      <td className="border border-border p-2">
                        Alternative text for screen readers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Accessibility */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Accessibility</h2>
            <p className="text-muted-foreground">
              Built-in accessibility features and best practices.
            </p>
          </div>
          <div className="space-y-4 p-6 border rounded-lg">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Screen Reader Support</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    • Adheres to{" "}
                    <code className="bg-muted px-1 rounded">aria-live</code>{" "}
                    requirements
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-muted px-1 rounded">
                      type="foreground"
                    </code>{" "}
                    announces immediately
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-muted px-1 rounded">
                      type="background"
                    </code>{" "}
                    announces at next opportunity
                  </li>
                  <li>
                    • Automatic{" "}
                    <code className="bg-muted px-1 rounded">aria-label</code>{" "}
                    management
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Keyboard Interactions</h4>
              <div className="bg-muted/30 p-4 rounded-lg">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-2 font-mono bg-background px-2 rounded">
                        F8
                      </td>
                      <td className="py-2 pl-4">Focuses the toast viewport</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 font-mono bg-background px-2 rounded">
                        Tab
                      </td>
                      <td className="py-2 pl-4">
                        Moves focus to next focusable element
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 font-mono bg-background px-2 rounded">
                        Shift + Tab
                      </td>
                      <td className="py-2 pl-4">
                        Moves focus to previous focusable element
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 font-mono bg-background px-2 rounded">
                        Space
                      </td>
                      <td className="py-2 pl-4">
                        Activates focused action or close button
                      </td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 font-mono bg-background px-2 rounded">
                        Enter
                      </td>
                      <td className="py-2 pl-4">
                        Activates focused action or close button
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-mono bg-background px-2 rounded">
                        Escape
                      </td>
                      <td className="py-2 pl-4">Closes the focused toast</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Best Practices</h4>
              <ul className="text-sm text-muted-foreground space-y-1 pl-4">
                <li>• Use descriptive titles and clear messages</li>
                <li>
                  • Provide{" "}
                  <code className="bg-muted px-1 rounded">altText</code> for
                  actions when needed
                </li>
                <li>
                  • Choose appropriate{" "}
                  <code className="bg-muted px-1 rounded">type</code> based on
                  urgency
                </li>
                <li>• Ensure sufficient duration for reading</li>
                <li>• Label close buttons properly for icon-only buttons</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Render Active Toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={
            toast.type as
              | "default"
              | "destructive"
              | "success"
              | "warning"
              | "info"
              | "loading"
          }
          open
          onOpenChange={(open) => !open && removeToast(toast.id)}
        >
          <div className="grid gap-1">
            <ToastTitle>{toast.title}</ToastTitle>
            <ToastDescription>{toast.description}</ToastDescription>
          </div>
          <ToastClose />
        </Toast>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
}
