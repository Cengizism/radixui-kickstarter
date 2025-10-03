import * as React from "react";
import { cn } from "@/lib/utils";
import { Toast as ToastPrimitives } from "radix-ui";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

// Toast Provider
const ToastProvider = ToastPrimitives.Provider;

// Toast Viewport Variants
const toastViewportVariants = cva(
  "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
  {
    variants: {
      position: {
        "top-left":
          "top-0 left-0 sm:top-0 sm:left-0 sm:bottom-auto sm:right-auto",
        "top-center":
          "top-0 left-1/2 -translate-x-1/2 sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:bottom-auto sm:right-auto",
        "top-right": "top-0 right-0 sm:top-0 sm:right-0 sm:bottom-auto",
        "bottom-left":
          "bottom-0 left-0 sm:bottom-0 sm:left-0 sm:top-auto sm:right-auto",
        "bottom-center":
          "bottom-0 left-1/2 -translate-x-1/2 sm:bottom-0 sm:left-1/2 sm:-translate-x-1/2 sm:top-auto sm:right-auto",
        "bottom-right": "bottom-0 right-0 sm:bottom-0 sm:right-0 sm:top-auto",
      },
    },
    defaultVariants: {
      position: "bottom-right",
    },
  }
);

// Toast Root Variants
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-start justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive border-destructive bg-destructive text-destructive-foreground",
        success:
          "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-900/20 dark:text-green-100",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-100",
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-100",
        loading: "border-muted bg-muted/50 text-muted-foreground",
      },
      size: {
        sm: "p-3 pr-6",
        default: "p-4 pr-8",
        lg: "p-6 pr-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Toast Action Variants
const toastActionVariants = cva(
  "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-muted hover:bg-secondary text-foreground",
        destructive:
          "border-red-200 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300 dark:hover:bg-red-900/50",
        success:
          "border-green-300 bg-green-50 text-green-700 hover:bg-green-100 dark:border-green-600 dark:bg-green-900/20 dark:text-green-300 dark:hover:bg-green-900/50",
        warning:
          "border-yellow-300 bg-yellow-50 text-yellow-700 hover:bg-yellow-100 dark:border-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-300 dark:hover:bg-yellow-900/50",
        info: "border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-600 dark:bg-blue-900/20 dark:text-blue-300 dark:hover:bg-blue-900/50",
        ghost: "border-transparent hover:bg-muted text-foreground",
      },
      size: {
        sm: "h-6 px-2 text-xs",
        default: "h-8 px-3 text-sm",
        lg: "h-10 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Toast Close Variants
const toastCloseVariants = cva(
  "absolute right-1 top-1 rounded-sm p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-destructive-foreground/80 group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
  {
    variants: {
      size: {
        sm: "right-1 top-1 h-4 w-4",
        default: "right-2 top-2 h-4 w-4",
        lg: "right-3 top-3 h-5 w-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

// Toast Title Variants
const toastTitleVariants = cva("font-semibold", {
  variants: {
    size: {
      sm: "text-sm",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Toast Description Variants
const toastDescriptionVariants = cva("opacity-90", {
  variants: {
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-sm",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

// Component Interfaces
interface ToastViewportProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>,
    VariantProps<typeof toastViewportVariants> {
  className?: string;
}

interface ToastProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>,
    VariantProps<typeof toastVariants> {
  className?: string;
}

interface ToastActionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>,
    VariantProps<typeof toastActionVariants> {
  className?: string;
}

interface ToastCloseProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>,
    VariantProps<typeof toastCloseVariants> {
  className?: string;
}

interface ToastTitleProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>,
    VariantProps<typeof toastTitleVariants> {
  className?: string;
}

interface ToastDescriptionProps
  extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>,
    VariantProps<typeof toastDescriptionVariants> {
  className?: string;
}

// Components
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  ToastViewportProps
>(({ className, position, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(toastViewportVariants({ position }), className)}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  ToastProps
>(({ className, variant, size, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant, size }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  ToastActionProps
>(({ className, variant, size, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(toastActionVariants({ variant, size }), className)}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  ToastCloseProps
>(({ className, size, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(toastCloseVariants({ size }), className)}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  ToastTitleProps
>(({ className, size, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn(toastTitleVariants({ size }), className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  ToastDescriptionProps
>(({ className, size, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn(toastDescriptionVariants({ size }), className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
