import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs as TabsPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

// Tabs Root
const tabsRootVariants = cva("", {
  variants: {
    orientation: {
      horizontal: "flex flex-col",
      vertical: "flex flex-row",
    },
    spacing: {
      none: "gap-0",
      sm: "gap-2",
      default: "gap-4",
      lg: "gap-6",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    spacing: "default",
  },
});

interface TabsProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
      "orientation"
    >,
    VariantProps<typeof tabsRootVariants> {
  orientation?: "horizontal" | "vertical";
}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, orientation = "horizontal", spacing, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    orientation={orientation}
    className={cn(tabsRootVariants({ orientation, spacing }), className)}
    {...props}
  />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

// Tabs List
const tabsListVariants = cva("inline-flex items-center justify-center", {
  variants: {
    variant: {
      default: "rounded-lg bg-muted p-0.5 text-muted-foreground",
      outline: "border border-border bg-background",
      underline: "border-b border-border bg-transparent",
      pills: "gap-2 bg-transparent",
      minimal: "bg-transparent",
    },
    size: {
      sm: "h-8 text-xs",
      default: "h-9 text-sm",
      lg: "h-10 text-base",
    },
    orientation: {
      horizontal: "flex-row w-fit",
      vertical: "flex-col h-fit w-auto",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    orientation: "horizontal",
  },
});

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>,
    VariantProps<typeof tabsListVariants> {}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(({ className, variant, size, orientation, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(tabsListVariants({ variant, size, orientation }), className)}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

// Tabs Trigger
const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-md px-3 font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
        outline:
          "border-b-2 border-transparent px-3 font-medium data-[state=active]:border-primary data-[state=active]:text-primary",
        underline:
          "border-b-2 border-transparent px-3 py-2 font-medium data-[state=active]:border-primary data-[state=active]:text-foreground hover:text-foreground",
        pills:
          "rounded-full px-4 font-medium bg-secondary/50 text-secondary-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground hover:bg-secondary/80",
        minimal:
          "px-3 py-2 font-medium text-muted-foreground data-[state=active]:text-foreground hover:text-foreground",
      },
      size: {
        sm: "h-7 px-2 text-xs",
        default: "h-8 px-3 text-sm",
        lg: "h-9 px-4 text-base",
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col w-full justify-start",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      orientation: "horizontal",
    },
  }
);

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>,
    VariantProps<typeof tabsTriggerVariants> {}

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, variant, size, orientation, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      tabsTriggerVariants({ variant, size, orientation }),
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// Tabs Content
const tabsContentVariants = cva(
  "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "rounded-lg border border-border bg-background p-4",
        minimal: "bg-transparent",
        card: "rounded-lg border border-border bg-card p-6 shadow-sm",
      },
      orientation: {
        horizontal: "w-full",
        vertical: "flex-1 ml-4",
      },
    },
    defaultVariants: {
      variant: "minimal",
      orientation: "horizontal",
    },
  }
);

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>,
    VariantProps<typeof tabsContentVariants> {}

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(({ className, variant, orientation, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(tabsContentVariants({ variant, orientation }), className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsRootVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
};
