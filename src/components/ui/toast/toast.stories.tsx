import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "@/components/ui/toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  Loader2,
  Save,
  Download,
  Share,
  Trash2,
  Mail,
} from "lucide-react";

export default {
  title: "UI/Toast",
  component: Toast,
  docs: {
    description: {
      component:
        "A toast component for displaying temporary notifications to users. Built with Radix UI primitives for accessibility and animations.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Provider Props
    swipeDirection: {
      control: "select",
      options: ["right", "left", "up", "down"],
      description:
        "The direction of the pointer down event that should close the toast.",
      table: { category: "Provider Props" },
    },
    swipeThreshold: {
      control: { type: "number", min: 0, max: 200 },
      description:
        "The distance in pixels that the swipe must pass before a close is triggered.",
      table: { category: "Provider Props" },
    },
    providerLabel: {
      control: "text",
      description: "An author-localized label for each toast.",
      table: { category: "Provider Props" },
    },
    providerDuration: {
      control: { type: "number", min: 0, max: 10000 },
      description:
        "The time in milliseconds that should elapse before automatically closing each toast.",
      table: { category: "Provider Props" },
    },

    // Root Props
    type: {
      control: "select",
      options: ["foreground", "background"],
      description:
        "Control the sensitivity of the toast for accessibility purposes.",
      table: { category: "Root Props" },
    },
    duration: {
      control: { type: "number", min: 0, max: 10000 },
      description:
        "The time in milliseconds that should elapse before automatically closing the toast.",
      table: { category: "Root Props" },
    },
    open: {
      control: "boolean",
      description:
        "The controlled open state of the toast when it is initially rendered.",
      table: { category: "Root Props" },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the toast when it is initially rendered. Use when you do not need to control its open state.",
      table: { category: "Root Props" },
    },
    // Event Handlers
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the toast changes.",
      table: { category: "Event Handlers" },
    },
    onEscapeKeyDown: {
      action: "onEscapeKeyDown",
      description: "Event handler called when the escape key is down.",
      table: { category: "Event Handlers" },
    },
    onPause: {
      action: "onPause",
      description: "Event handler called when the dismiss timer is paused.",
      table: { category: "Event Handlers" },
    },
    onResume: {
      action: "onResume",
      description: "Event handler called when the dismiss timer is resumed.",
      table: { category: "Event Handlers" },
    },
    onSwipeStart: {
      action: "onSwipeStart",
      description: "Event handler called when starting a swipe interaction.",
      table: { category: "Event Handlers" },
    },
    onSwipeMove: {
      action: "onSwipeMove",
      description: "Event handler called during a swipe interaction.",
      table: { category: "Root Props" },
    },
    onSwipeCancel: {
      action: "onSwipeCancel",
      description:
        "Event handler called when a swipe interaction is cancelled.",
      table: { category: "Root Props" },
    },
    onSwipeEnd: {
      action: "onSwipeEnd",
      description: "Event handler called at the end of a swipe interaction.",
      table: { category: "Root Props" },
    },
    forceMount: {
      control: "boolean",
      description: "Used to force mounting when more control is needed.",
      table: { category: "Root Props" },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child.",
      table: { category: "Root Props" },
    },

    // Title Props
    titleAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the title.",
      table: { category: "Title Props" },
    },

    // Description Props
    descriptionAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the description.",
      table: { category: "Description Props" },
    },

    // Action Props
    actionAltText: {
      control: "text",
      description: "A description for the action for screen reader users.",
      table: { category: "Action Props" },
    },
    actionAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the action.",
      table: { category: "Action Props" },
    },

    // Close Props
    closeAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the close button.",
      table: { category: "Close Props" },
    },

    // Viewport Props
    hotkey: {
      control: "object",
      description:
        "The keys to use as the keyboard shortcut that will move focus to the toast viewport.",
      table: { category: "Viewport Props" },
    },
    viewportLabel: {
      control: "text",
      description: "An author-localized label for the toast viewport.",
      table: { category: "Viewport Props" },
    },

    // Custom Style Props
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "success",
        "warning",
        "info",
        "loading",
      ],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <ToastProvider>
        <Story />
        <ToastViewport />
      </ToastProvider>
    ),
  ],
};

// Basic toast variants
export const BasicVariants = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: number; variant: string; open: boolean }>
  >([]);

  const showToast = (variant: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, variant, open: true }]);
  };

  const hideToast = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => showToast("default")}>Default Toast</Button>
        <Button onClick={() => showToast("success")} variant="outline">
          Success Toast
        </Button>
        <Button onClick={() => showToast("warning")} variant="outline">
          Warning Toast
        </Button>
        <Button onClick={() => showToast("info")} variant="outline">
          Info Toast
        </Button>
        <Button onClick={() => showToast("destructive")} variant="destructive">
          Error Toast
        </Button>
        <Button onClick={() => showToast("loading")} variant="outline">
          Loading Toast
        </Button>
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={
            toast.variant as
              | "default"
              | "destructive"
              | "success"
              | "warning"
              | "info"
              | "loading"
          }
          open={toast.open}
          onOpenChange={(open) => !open && hideToast(toast.id)}
        >
          <div className="flex items-center gap-2">
            {toast.variant === "success" && <CheckCircle className="h-4 w-4" />}
            {toast.variant === "warning" && (
              <AlertTriangle className="h-4 w-4" />
            )}
            {toast.variant === "info" && <Info className="h-4 w-4" />}
            {toast.variant === "destructive" && (
              <AlertCircle className="h-4 w-4" />
            )}
            {toast.variant === "loading" && (
              <Loader2 className="h-4 w-4 animate-spin" />
            )}
            <div>
              <ToastTitle>
                {toast.variant === "success" && "Success!"}
                {toast.variant === "warning" && "Warning"}
                {toast.variant === "info" && "Information"}
                {toast.variant === "destructive" && "Error"}
                {toast.variant === "loading" && "Loading..."}
                {toast.variant === "default" && "Notification"}
              </ToastTitle>
              <ToastDescription>
                {toast.variant === "success" &&
                  "Your action was completed successfully."}
                {toast.variant === "warning" &&
                  "Please check your input and try again."}
                {toast.variant === "info" &&
                  "Here's some important information for you."}
                {toast.variant === "destructive" &&
                  "Something went wrong. Please try again."}
                {toast.variant === "loading" &&
                  "Please wait while we process your request."}
                {toast.variant === "default" &&
                  "This is a basic notification message."}
              </ToastDescription>
            </div>
          </div>
          <ToastClose />
        </Toast>
      ))}
    </div>
  );
};

// Size variations
export const SizeVariations = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: number; size: string; open: boolean }>
  >([]);

  const showToast = (size: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, size, open: true }]);
  };

  const hideToast = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast))
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => showToast("sm")} size="sm">
          Small Toast
        </Button>
        <Button onClick={() => showToast("default")}>Default Toast</Button>
        <Button onClick={() => showToast("lg")} size="lg">
          Large Toast
        </Button>
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          size={toast.size as "sm" | "default" | "lg"}
          variant="success"
          open={toast.open}
          onOpenChange={(open) => !open && hideToast(toast.id)}
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <div>
              <ToastTitle size={toast.size as "sm" | "default" | "lg"}>
                {toast.size.charAt(0).toUpperCase() + toast.size.slice(1)} Toast
              </ToastTitle>
              <ToastDescription size={toast.size as "sm" | "default" | "lg"}>
                This is a {toast.size} sized toast notification.
              </ToastDescription>
            </div>
          </div>
          <ToastClose size={toast.size as "sm" | "default" | "lg"} />
        </Toast>
      ))}
    </div>
  );
};

// Toast with actions
export const WithActions = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: number; type: string; open: boolean }>
  >([]);

  const showToast = (type: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, open: true }]);
  };

  const hideToast = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast))
    );
  };

  const handleAction = (action: string) => {
    alert(`${action} clicked!`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => showToast("save")}>Save Action</Button>
        <Button onClick={() => showToast("delete")} variant="destructive">
          Delete Action
        </Button>
        <Button onClick={() => showToast("download")} variant="outline">
          Download Action
        </Button>
        <Button onClick={() => showToast("share")} variant="outline">
          Share Action
        </Button>
      </div>

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.type === "delete" ? "destructive" : "default"}
          open={toast.open}
          onOpenChange={(open) => !open && hideToast(toast.id)}
        >
          <div className="flex items-center gap-2">
            {toast.type === "save" && <Save className="h-4 w-4" />}
            {toast.type === "delete" && <Trash2 className="h-4 w-4" />}
            {toast.type === "download" && <Download className="h-4 w-4" />}
            {toast.type === "share" && <Share className="h-4 w-4" />}
            <div>
              <ToastTitle>
                {toast.type === "save" && "Document Saved"}
                {toast.type === "delete" && "Delete Item"}
                {toast.type === "download" && "Download Ready"}
                {toast.type === "share" && "Share Link"}
              </ToastTitle>
              <ToastDescription>
                {toast.type === "save" &&
                  "Your changes have been saved successfully."}
                {toast.type === "delete" &&
                  "Are you sure you want to delete this item?"}
                {toast.type === "download" &&
                  "Your file is ready for download."}
                {toast.type === "share" &&
                  "Copy the link to share with others."}
              </ToastDescription>
            </div>
          </div>
          <ToastAction
            variant={toast.type === "delete" ? "destructive" : "default"}
            altText={
              toast.type === "save"
                ? "View document"
                : toast.type === "delete"
                  ? "Confirm delete"
                  : toast.type === "download"
                    ? "Download now"
                    : "Copy link"
            }
            onClick={() =>
              handleAction(
                toast.type === "save"
                  ? "View"
                  : toast.type === "delete"
                    ? "Delete"
                    : toast.type === "download"
                      ? "Download"
                      : "Copy"
              )
            }
          >
            {toast.type === "save" && "View"}
            {toast.type === "delete" && "Delete"}
            {toast.type === "download" && "Download"}
            {toast.type === "share" && "Copy"}
          </ToastAction>
          <ToastClose />
        </Toast>
      ))}
    </div>
  );
};

// Form submission example
export const FormSubmission = () => {
  const [email, setEmail] = useState("");
  const [toasts, setToasts] = useState<
    Array<{ id: number; type: string; open: boolean }>
  >([]);

  const showToast = (type: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, open: true }]);
  };

  const hideToast = (id: number) => {
    setToasts((prev) =>
      prev.map((toast) => (toast.id === id ? { ...toast, open: false } : toast))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast("error");
      return;
    }

    // Show loading toast
    showToast("loading");

    // Simulate API call
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.type !== "loading"));
      showToast("success");
      setEmail("");
    }, 2000);
  };

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Newsletter Signup
        </CardTitle>
        <CardDescription>
          Subscribe to our newsletter for updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Subscribe
          </Button>
        </form>

        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={
              toast.type === "error"
                ? "destructive"
                : toast.type === "success"
                  ? "success"
                  : "loading"
            }
            open={toast.open}
            onOpenChange={(open) => !open && hideToast(toast.id)}
          >
            <div className="flex items-center gap-2">
              {toast.type === "success" && <CheckCircle className="h-4 w-4" />}
              {toast.type === "error" && <AlertCircle className="h-4 w-4" />}
              {toast.type === "loading" && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}
              <div>
                <ToastTitle>
                  {toast.type === "success" && "Subscription Successful!"}
                  {toast.type === "error" && "Validation Error"}
                  {toast.type === "loading" && "Subscribing..."}
                </ToastTitle>
                <ToastDescription>
                  {toast.type === "success" &&
                    "Thank you for subscribing to our newsletter."}
                  {toast.type === "error" &&
                    "Please enter a valid email address."}
                  {toast.type === "loading" &&
                    "Please wait while we process your subscription."}
                </ToastDescription>
              </div>
            </div>
            {toast.type !== "loading" && <ToastClose />}
          </Toast>
        ))}
      </CardContent>
    </Card>
  );
};

// Notification center example
export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "info",
      title: "System Update",
      message: "A new system update is available.",
      time: "2 min ago",
      open: true,
    },
    {
      id: 2,
      type: "success",
      title: "Backup Complete",
      message: "Your data has been backed up successfully.",
      time: "5 min ago",
      open: true,
    },
    {
      id: 3,
      type: "warning",
      title: "Storage Warning",
      message: "You are running low on storage space.",
      time: "10 min ago",
      open: true,
    },
  ]);

  const hideNotification = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, open: false } : notif))
    );
  };

  const addNotification = () => {
    const types = ["info", "success", "warning", "destructive"];
    const titles = [
      "New Message",
      "Task Complete",
      "Update Available",
      "Error Occurred",
    ];
    const messages = [
      "You have a new message from John.",
      "Your task has been completed successfully.",
      "A new update is ready to install.",
      "An error occurred while processing.",
    ];

    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    const newNotification = {
      id: Date.now(),
      type: randomType,
      title: randomTitle,
      message: randomMessage,
      time: "Just now",
      open: true,
    };

    setNotifications((prev) => [newNotification, ...prev]);
  };

  const clearAll = () => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, open: false }))
    );
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Recent system notifications and alerts
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button onClick={addNotification} size="sm" variant="outline">
              Add Random
            </Button>
            <Button onClick={clearAll} size="sm" variant="ghost">
              Clear All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        {notifications.filter((n) => n.open).length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">
            No notifications at this time
          </p>
        ) : (
          notifications.map((notification) => (
            <Toast
              key={notification.id}
              variant={
                notification.type as
                  | "default"
                  | "destructive"
                  | "success"
                  | "warning"
                  | "info"
                  | "loading"
              }
              size="sm"
              open={notification.open}
              onOpenChange={(open) =>
                !open && hideNotification(notification.id)
              }
              className="relative mb-2"
            >
              <div className="flex items-start gap-2 w-full">
                {notification.type === "success" && (
                  <CheckCircle className="h-4 w-4 mt-0.5" />
                )}
                {notification.type === "warning" && (
                  <AlertTriangle className="h-4 w-4 mt-0.5" />
                )}
                {notification.type === "info" && (
                  <Info className="h-4 w-4 mt-0.5" />
                )}
                {notification.type === "destructive" && (
                  <AlertCircle className="h-4 w-4 mt-0.5" />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <ToastTitle size="sm">{notification.title}</ToastTitle>
                    <Badge variant="secondary" className="text-xs">
                      {notification.time}
                    </Badge>
                  </div>
                  <ToastDescription size="sm">
                    {notification.message}
                  </ToastDescription>
                </div>
              </div>
              <ToastClose size="sm" />
            </Toast>
          ))
        )}
      </CardContent>
    </Card>
  );
};

// Playground for testing
export const Playground = (args: {
  variant?:
    | "default"
    | "destructive"
    | "success"
    | "warning"
    | "info"
    | "loading";
  size?: "sm" | "default" | "lg";
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 text-sm">
        <Badge variant="secondary">Variant: {args.variant || "default"}</Badge>
        <Badge variant="secondary">Size: {args.size || "default"}</Badge>
      </div>

      <Button onClick={() => setIsOpen(true)}>
        Show {args.variant || "default"} Toast
      </Button>

      <Toast
        variant={args.variant}
        size={args.size}
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <div className="flex items-center gap-2">
          {args.variant === "success" && <CheckCircle className="h-4 w-4" />}
          {args.variant === "warning" && <AlertTriangle className="h-4 w-4" />}
          {args.variant === "info" && <Info className="h-4 w-4" />}
          {args.variant === "destructive" && (
            <AlertCircle className="h-4 w-4" />
          )}
          {args.variant === "loading" && (
            <Loader2 className="h-4 w-4 animate-spin" />
          )}
          <div>
            <ToastTitle size={args.size}>Interactive Toast</ToastTitle>
            <ToastDescription size={args.size}>
              This is a {args.variant || "default"} toast in{" "}
              {args.size || "default"} size.
            </ToastDescription>
          </div>
        </div>
        <ToastAction
          altText="Action"
          variant={args.variant === "destructive" ? "destructive" : "default"}
        >
          Action
        </ToastAction>
        <ToastClose size={args.size} />
      </Toast>
    </div>
  );
};

Playground.args = {
  variant: "default",
  size: "default",
};

// Advanced Examples
export const AdvancedToastQueue = {
  render: () => {
    const [toasts, setToasts] = React.useState<
      Array<{
        id: string;
        type: "success" | "error" | "warning" | "info" | "loading";
        title: string;
        description: string;
        action?: { label: string; onClick: () => void };
        duration?: number;
        priority: "low" | "normal" | "high" | "critical";
        category: string;
        timestamp: Date;
        progress?: number;
        metadata?: unknown;
      }>
    >([]);

    const [queueSettings, setQueueSettings] = React.useState({
      maxToasts: 5,
      position: "bottom-right" as
        | "top-left"
        | "top-right"
        | "bottom-left"
        | "bottom-right",
      swipeDirection: "right" as "right" | "left" | "up" | "down",
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      newestOnTop: true,
      showProgress: true,
    });

    const [globalStats, setGlobalStats] = React.useState({
      totalShown: 0,
      dismissed: 0,
      actionsClicked: 0,
      averageViewTime: 0,
    });

    const addToast = (
      type: (typeof toasts)[0]["type"],
      overrides: Partial<(typeof toasts)[0]> = {}
    ) => {
      const toastId = `toast-${Date.now()}-${Math.random()}`;
      const baseToasts = {
        success: {
          title: "Success!",
          description: "Operation completed successfully.",
          duration: 4000,
        },
        error: {
          title: "Error",
          description: "Something went wrong. Please try again.",
          duration: 6000,
          action: {
            label: "Retry",
            onClick: () => console.log("Retry clicked"),
          },
        },
        warning: {
          title: "Warning",
          description: "Please review your input and try again.",
          duration: 5000,
        },
        info: {
          title: "Information",
          description: "Here is some important information.",
          duration: 4000,
        },
        loading: {
          title: "Processing...",
          description: "Please wait while we process your request.",
          duration: 0,
          progress: 0,
        },
      };

      const newToast = {
        id: toastId,
        type,
        ...baseToasts[type],
        priority: "normal" as const,
        category: "General",
        timestamp: new Date(),
        ...overrides,
      };

      setToasts((prev) => {
        const filteredToasts = prev.slice(0, queueSettings.maxToasts - 1);
        const ordered = queueSettings.newestOnTop
          ? [newToast, ...filteredToasts]
          : [...filteredToasts, newToast];

        // Sort by priority
        return ordered.sort((a, b) => {
          const priorityOrder = { critical: 4, high: 3, normal: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        });
      });

      setGlobalStats((prev) => ({ ...prev, totalShown: prev.totalShown + 1 }));

      // Simulate progress for loading toasts
      if (type === "loading") {
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 20;
          if (progress >= 100) {
            clearInterval(interval);
            updateToast(toastId, {
              type: "success",
              title: "Complete!",
              description: "Processing finished successfully.",
              duration: 3000,
              progress: undefined,
            });
          } else {
            updateToast(toastId, { progress });
          }
        }, 300);
      }
    };

    const updateToast = (id: string, updates: Partial<(typeof toasts)[0]>) => {
      setToasts((prev) =>
        prev.map((toast) =>
          toast.id === id ? { ...toast, ...updates } : toast
        )
      );
    };

    const removeToast = (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
      setGlobalStats((prev) => ({ ...prev, dismissed: prev.dismissed + 1 }));
    };

    const clearAllToasts = () => {
      setToasts([]);
    };

    const handleActionClick = (toastId: string, action: () => void) => {
      action();
      setGlobalStats((prev) => ({
        ...prev,
        actionsClicked: prev.actionsClicked + 1,
      }));
      removeToast(toastId);
    };

    const presetScenarios = [
      {
        label: "File Upload Success",
        action: () =>
          addToast("success", {
            title: "File uploaded",
            description: "Your document was uploaded successfully.",
            category: "File System",
            priority: "normal",
          }),
      },
      {
        label: "Network Error",
        action: () =>
          addToast("error", {
            title: "Network Error",
            description:
              "Failed to connect to server. Check your internet connection.",
            category: "Network",
            priority: "high",
            action: {
              label: "Retry",
              onClick: () => console.log("Network retry"),
            },
          }),
      },
      {
        label: "Form validation",
        action: () =>
          addToast("warning", {
            title: "Validation Error",
            description:
              "Please fill in all required fields before submitting.",
            category: "Validation",
            priority: "normal",
          }),
      },
      {
        label: "System Maintenance",
        action: () =>
          addToast("info", {
            title: "Scheduled Maintenance",
            description:
              "System will be unavailable from 2:00 AM - 3:00 AM UTC.",
            category: "System",
            priority: "low",
            duration: 8000,
          }),
      },
      {
        label: "Critical Security Alert",
        action: () =>
          addToast("error", {
            title: "Security Alert",
            description: "Suspicious login detected from unknown device.",
            category: "Security",
            priority: "critical",
            duration: 0,
            action: {
              label: "Review",
              onClick: () => console.log("Review security"),
            },
          }),
      },
      {
        label: "Long Process",
        action: () =>
          addToast("loading", {
            title: "Generating Report",
            description: "This may take a few moments...",
            category: "Reports",
            priority: "normal",
          }),
      },
    ];

    return (
      <ToastProvider
        swipeDirection={queueSettings.swipeDirection}
        duration={5000}
      >
        <div className="max-w-6xl space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Advanced Toast Queue Management
            </h3>

            {/* Configuration Panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-muted rounded-lg">
              <div className="space-y-2">
                <Label className="text-sm font-medium">Max Toasts</Label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={queueSettings.maxToasts}
                  onChange={(e) =>
                    setQueueSettings((prev) => ({
                      ...prev,
                      maxToasts: parseInt(e.target.value) || 5,
                    }))
                  }
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Position</Label>
                <select
                  value={queueSettings.position}
                  onChange={(e) =>
                    setQueueSettings((prev) => ({
                      ...prev,
                      position: e.target.value as
                        | "top-left"
                        | "top-right"
                        | "bottom-left"
                        | "bottom-right",
                    }))
                  }
                  className="w-full px-3 py-2 text-sm border rounded-md"
                >
                  <option value="top-left">Top Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-right">Bottom Right</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium">Swipe Direction</Label>
                <select
                  value={queueSettings.swipeDirection}
                  onChange={(e) =>
                    setQueueSettings((prev) => ({
                      ...prev,
                      swipeDirection: e.target.value as
                        | "left"
                        | "right"
                        | "up"
                        | "down",
                    }))
                  }
                  className="w-full px-3 py-2 text-sm border rounded-md"
                >
                  <option value="right">Right</option>
                  <option value="left">Left</option>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newestOnTop"
                    checked={queueSettings.newestOnTop}
                    onChange={(e) =>
                      setQueueSettings((prev) => ({
                        ...prev,
                        newestOnTop: e.target.checked,
                      }))
                    }
                  />
                  <Label htmlFor="newestOnTop" className="text-sm">
                    Newest on Top
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="showProgress"
                    checked={queueSettings.showProgress}
                    onChange={(e) =>
                      setQueueSettings((prev) => ({
                        ...prev,
                        showProgress: e.target.checked,
                      }))
                    }
                  />
                  <Label htmlFor="showProgress" className="text-sm">
                    Show Progress
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="font-medium">Quick Test Scenarios</h4>
            <div className="flex flex-wrap gap-2">
              {presetScenarios.map((scenario, index) => (
                <Button
                  key={index}
                  onClick={scenario.action}
                  variant="outline"
                  size="sm"
                >
                  {scenario.label}
                </Button>
              ))}
            </div>

            <div className="flex gap-2">
              <Button onClick={clearAllToasts} variant="ghost" size="sm">
                Clear All
              </Button>
              <Button
                onClick={() => {
                  // Stress test - add multiple toasts quickly
                  for (let i = 0; i < 3; i++) {
                    setTimeout(() => {
                      const types = [
                        "success",
                        "error",
                        "warning",
                        "info",
                      ] as const;
                      const type =
                        types[Math.floor(Math.random() * types.length)];
                      addToast(type, {
                        title: `Stress Test ${i + 1}`,
                        description: `This is stress test toast number ${i + 1}`,
                        category: "Test",
                      });
                    }, i * 200);
                  }
                }}
                variant="outline"
                size="sm"
              >
                Stress Test
              </Button>
            </div>
          </div>

          {/* Statistics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold">{globalStats.totalShown}</div>
              <div className="text-sm text-muted-foreground">Total Shown</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold">{toasts.length}</div>
              <div className="text-sm text-muted-foreground">
                Currently Active
              </div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold">{globalStats.dismissed}</div>
              <div className="text-sm text-muted-foreground">Dismissed</div>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg">
              <div className="text-2xl font-bold">
                {globalStats.actionsClicked}
              </div>
              <div className="text-sm text-muted-foreground">
                Actions Clicked
              </div>
            </div>
          </div>

          {/* Active Toasts List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">Active Toasts ({toasts.length})</h4>
              {toasts.length > 0 && (
                <Button onClick={clearAllToasts} variant="ghost" size="sm">
                  Clear All
                </Button>
              )}
            </div>

            {toasts.length === 0 ? (
              <div className="text-center py-8 border rounded-lg border-dashed">
                <p className="text-muted-foreground mb-4">No active toasts</p>
                <p className="text-sm text-muted-foreground">
                  Try the quick scenarios above to see toasts in action
                </p>
              </div>
            ) : (
              <div className="max-h-96 overflow-y-auto space-y-2 p-4 border rounded-lg">
                {toasts.map((toast) => (
                  <div
                    key={toast.id}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded-md text-sm"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={
                            toast.priority === "critical"
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {toast.priority}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {toast.category}
                        </Badge>
                        <span className="font-medium">{toast.title}</span>
                      </div>
                      <div className="text-muted-foreground">
                        {toast.description}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {toast.timestamp.toLocaleTimeString()}
                        {toast.progress !== undefined && (
                          <span>
                            {" "}
                            • Progress: {Math.round(toast.progress)}%
                          </span>
                        )}
                      </div>
                      {queueSettings.showProgress &&
                        toast.progress !== undefined && (
                          <div className="w-full bg-muted rounded-full h-1 mt-2">
                            <div
                              className="bg-primary h-1 rounded-full transition-all duration-300"
                              style={{ width: `${toast.progress}%` }}
                            />
                          </div>
                        )}
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {toast.action && (
                        <Button
                          onClick={() =>
                            handleActionClick(toast.id, toast.action!.onClick)
                          }
                          variant="outline"
                          size="sm"
                        >
                          {toast.action.label}
                        </Button>
                      )}
                      <Button
                        onClick={() => removeToast(toast.id)}
                        variant="ghost"
                        size="sm"
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="text-sm text-muted-foreground">
            <strong>Features demonstrated:</strong>
            <ul className="mt-1 space-y-1">
              <li>
                • <strong>Toast queue management:</strong> Maximum toast limits
                and priority-based sorting
              </li>
              <li>
                • <strong>Dynamic configuration:</strong> Position, swipe
                direction, and display options
              </li>
              <li>
                • <strong>Progress tracking:</strong> Loading toasts with
                real-time progress updates
              </li>
              <li>
                • <strong>Priority system:</strong> Critical, high, normal, and
                low priority toasts
              </li>
              <li>
                • <strong>Category organization:</strong> Group toasts by
                functional categories
              </li>
              <li>
                • <strong>Action handling:</strong> Interactive buttons with
                callback tracking
              </li>
              <li>
                • <strong>Analytics dashboard:</strong> Track toast metrics and
                user interactions
              </li>
            </ul>
          </div>
        </div>

        <ToastViewport
          className={`fixed ${
            queueSettings.position === "top-left"
              ? "top-4 left-4"
              : queueSettings.position === "top-right"
                ? "top-4 right-4"
                : queueSettings.position === "bottom-left"
                  ? "bottom-4 left-4"
                  : "bottom-4 right-4"
          } flex flex-col gap-2 max-w-sm z-50`}
        />

        {/* Render active toasts */}
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            variant={
              toast.type === "error"
                ? "destructive"
                : toast.type === "success"
                  ? "default"
                  : toast.type
            }
            duration={toast.duration}
            onOpenChange={(open) => !open && removeToast(toast.id)}
          >
            <div className="flex items-start gap-3 w-full">
              <div className="flex-shrink-0 mt-0.5">
                {toast.type === "success" && (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                )}
                {toast.type === "error" && (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
                {toast.type === "warning" && (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                )}
                {toast.type === "info" && (
                  <Info className="h-4 w-4 text-blue-500" />
                )}
                {toast.type === "loading" && (
                  <Loader2 className="h-4 w-4 text-muted-foreground animate-spin" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <ToastTitle className="flex items-center gap-2">
                  {toast.title}
                  {toast.priority === "critical" && (
                    <Badge variant="destructive" className="text-xs">
                      Critical
                    </Badge>
                  )}
                </ToastTitle>
                <ToastDescription>{toast.description}</ToastDescription>
                {queueSettings.showProgress && toast.progress !== undefined && (
                  <div className="w-full bg-muted rounded-full h-1 mt-2">
                    <div
                      className="bg-primary h-1 rounded-full transition-all duration-300"
                      style={{ width: `${toast.progress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
            {toast.action && (
              <ToastAction
                altText={toast.action.label}
                onClick={() =>
                  handleActionClick(toast.id, toast.action!.onClick)
                }
              >
                {toast.action.label}
              </ToastAction>
            )}
            <ToastClose />
          </Toast>
        ))}
      </ToastProvider>
    );
  },
};
