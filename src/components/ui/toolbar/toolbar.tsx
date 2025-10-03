import * as React from "react";
import { cn } from "@/lib/utils";
import { Toolbar as ToolbarPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

// Toolbar Root
const toolbarVariants = cva(
  "flex items-center gap-1 bg-background border border-border rounded-lg p-1 shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-background border-border",
        secondary: "bg-secondary/50 border-secondary",
        outline: "bg-transparent border-input",
        ghost: "bg-transparent border-transparent shadow-none",
      },
      size: {
        sm: "p-0.5 gap-0.5 rounded-md",
        default: "p-1 gap-1 rounded-lg",
        lg: "p-1.5 gap-1.5 rounded-lg",
      },
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      orientation: "horizontal",
    },
  }
);

const ToolbarRoot = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Root> &
    VariantProps<typeof toolbarVariants>
>(({ className, variant, size, orientation, ...props }, ref) => (
  <ToolbarPrimitive.Root
    className={cn(toolbarVariants({ variant, size, orientation, className }))}
    orientation={orientation}
    ref={ref}
    {...props}
  />
));
ToolbarRoot.displayName = ToolbarPrimitive.Root.displayName;

// Toolbar Button
const toolbarButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        secondary:
          "bg-transparent hover:bg-secondary hover:text-secondary-foreground data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        solid:
          "bg-primary text-primary-foreground hover:bg-primary/90 data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ToolbarButton = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Button>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button> &
    VariantProps<typeof toolbarButtonVariants>
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.Button
    className={cn(toolbarButtonVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));
ToolbarButton.displayName = ToolbarPrimitive.Button.displayName;

// Toolbar Link
const toolbarLinkVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 underline-offset-4 hover:underline",
  {
    variants: {
      variant: {
        default: "text-foreground hover:text-foreground/80",
        secondary: "text-muted-foreground hover:text-foreground",
        accent: "text-accent-foreground hover:text-accent-foreground/80",
        muted: "text-muted-foreground hover:text-muted-foreground/80",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ToolbarLink = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link> &
    VariantProps<typeof toolbarLinkVariants>
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.Link
    className={cn(toolbarLinkVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));
ToolbarLink.displayName = ToolbarPrimitive.Link.displayName;

// Toolbar Toggle Group
const toolbarToggleGroupVariants = cva(
  "inline-flex items-center justify-center rounded-md",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        secondary: "bg-transparent",
        outline: "border border-input bg-transparent",
        ghost: "bg-transparent",
        solid: "bg-muted",
      },
      size: {
        sm: "h-8",
        default: "h-9",
        lg: "h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ToolbarToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleGroup>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleGroup> &
    VariantProps<typeof toolbarToggleGroupVariants>
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.ToggleGroup
    className={cn(toolbarToggleGroupVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));
ToolbarToggleGroup.displayName = ToolbarPrimitive.ToggleGroup.displayName;

// Toolbar Toggle Item
const toolbarToggleItemVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        secondary:
          "bg-transparent hover:bg-secondary hover:text-secondary-foreground data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground",
        outline:
          "bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        ghost:
          "hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        solid:
          "bg-background text-foreground hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-9 px-3",
        lg: "h-10 px-4",
      },
    },
    compoundVariants: [
      // Grouped styling for outline variant
      {
        variant: "outline",
        className:
          "first:rounded-l-md first:border-r-0 last:rounded-r-md last:border-l-0 rounded-none border border-input",
      },
      // Grouped styling for default variant
      {
        variant: "default",
        className: "first:rounded-l-md last:rounded-r-md rounded-none",
      },
      // Grouped styling for secondary variant
      {
        variant: "secondary",
        className: "first:rounded-l-md last:rounded-r-md rounded-none",
      },
      // Grouped styling for ghost variant
      {
        variant: "ghost",
        className: "first:rounded-l-md last:rounded-r-md rounded-none",
      },
      // Grouped styling for solid variant
      {
        variant: "solid",
        className:
          "first:rounded-l-md last:rounded-r-md rounded-none border border-border/50",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const ToolbarToggleItem = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.ToggleItem>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem> &
    VariantProps<typeof toolbarToggleItemVariants>
>(({ className, variant, size, ...props }, ref) => (
  <ToolbarPrimitive.ToggleItem
    className={cn(toolbarToggleItemVariants({ variant, size, className }))}
    ref={ref}
    {...props}
  />
));
ToolbarToggleItem.displayName = ToolbarPrimitive.ToggleItem.displayName;

// Toolbar Separator
const toolbarSeparatorVariants = cva("shrink-0 bg-border", {
  variants: {
    orientation: {
      horizontal: "h-full w-[1px] mx-1",
      vertical: "w-full h-[1px] my-1",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

const ToolbarSeparator = React.forwardRef<
  React.ElementRef<typeof ToolbarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator> &
    VariantProps<typeof toolbarSeparatorVariants>
>(({ className, orientation = "horizontal", ...props }, ref) => (
  <ToolbarPrimitive.Separator
    orientation={orientation}
    className={cn(toolbarSeparatorVariants({ orientation, className }))}
    ref={ref}
    {...props}
  />
));
ToolbarSeparator.displayName = ToolbarPrimitive.Separator.displayName;

export {
  ToolbarRoot as Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  ToolbarSeparator,
};
