import * as React from 'react';
import { cn } from '@/lib/utils';
import { Popover as PopoverPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";


const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverPortal = PopoverPrimitive.Portal;

const popoverContentVariants = cva(
  "z-50 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        sm: "min-w-[8rem] p-3 text-sm",
        default: "min-w-[12rem] p-4",
        lg: "min-w-[16rem] p-6 text-lg",
        xl: "min-w-[20rem] p-8 text-xl",
        full: "w-[var(--radix-popover-trigger-width)] max-h-[var(--radix-popover-content-available-height)]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> &
    VariantProps<typeof popoverContentVariants>
>(({ className, size, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPortal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(popoverContentVariants({ size }), className)}
      style={{
        transformOrigin: "var(--radix-popover-content-transform-origin)",
      }}
      {...props}
    />
  </PopoverPortal>
));
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

const popoverArrowVariants = cva("fill-popover", {
  variants: {
    size: {
      sm: "w-2 h-2",
      default: "w-3 h-3",
      lg: "w-4 h-4",
      xl: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const PopoverArrow = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow> &
    VariantProps<typeof popoverArrowVariants>
>(({ className, size, ...props }, ref) => (
  <PopoverPrimitive.Arrow
    ref={ref}
    className={cn(popoverArrowVariants({ size }), className)}
    {...props}
  />
));
PopoverArrow.displayName = PopoverPrimitive.Arrow.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
  PopoverPortal,
  PopoverClose,
  PopoverArrow,
  popoverContentVariants,
  popoverArrowVariants,
};
