import { Badge } from './badge';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { useState } from 'react';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from "./toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
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
  parameters: {
    layout: "centered",
  },
  argTypes: {
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
