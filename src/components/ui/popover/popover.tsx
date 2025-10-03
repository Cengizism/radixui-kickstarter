import * as React from "react";
import { cn } from "@/lib/utils";
import { Popover as PopoverPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverPortal = PopoverPrimitive.Portal;

const popoverContentVariants = cva(
  "z-50 rounded-md border shadow-md bg-popover p-4 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border-border",
        secondary: "bg-secondary text-secondary-foreground border-border",
        accent: "bg-accent text-accent-foreground border-border",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive",
        success: "bg-green-600 text-white border-green-600",
        warning: "bg-orange-600 text-white border-orange-600",
        info: "bg-blue-600 text-white border-blue-600",
        dark: "bg-gray-900 text-white border-gray-800",
        light: "bg-background text-foreground border-border",
      },
      size: {
        sm: "min-w-[8rem] p-3 text-sm",
        default: "min-w-[12rem] p-4",
        lg: "min-w-[16rem] p-6 text-lg",
        xl: "min-w-[20rem] p-8 text-xl",
        full: "w-[var(--radix-popover-trigger-width)] max-h-[var(--radix-popover-content-available-height)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    VariantProps<typeof popoverContentVariants>
>(
  (
    {
      className,
      variant = "default",
      size,
      align = "center",
      sideOffset = 4,
      ...props
    },
    ref
  ) => (
    <PopoverPortal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(popoverContentVariants({ variant, size }), className)}
        style={{
          transformOrigin: "var(--radix-popover-content-transform-origin)",
        }}
        {...props}
      />
    </PopoverPortal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
      className
    )}
    {...props}
  />
));
PopoverClose.displayName = PopoverPrimitive.Close.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverPortal,
  PopoverClose,
  popoverContentVariants,
};
