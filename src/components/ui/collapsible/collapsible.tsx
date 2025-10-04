import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Collapsible as CollapsiblePrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";

const Collapsible = CollapsiblePrimitive.Root;

const collapsibleTriggerVariants = cva(
  "flex items-center justify-between w-full text-left transition-all [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      variant: {
        default: "hover:bg-muted/50 rounded-md p-2",
        ghost: "hover:bg-muted/50",
        outline: "border rounded-md p-2 hover:bg-muted/50",
        link: "underline-offset-4 hover:underline p-0",
      },
      size: {
        sm: "text-sm py-1 px-2",
        default: "py-2 px-2",
        lg: "text-lg py-3 px-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger> &
    VariantProps<typeof collapsibleTriggerVariants> & {
      showChevron?: boolean;
    }
>(
  (
    { className, variant, size, showChevron = true, children, ...props },
    ref
  ) => (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      className={cn(collapsibleTriggerVariants({ variant, size, className }))}
      {...props}
    >
      {children}
      {showChevron && (
        <ChevronDown
          className={cn(
            "shrink-0 text-muted-foreground transition-transform duration-200",
            size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
          )}
        />
      )}
    </CollapsiblePrimitive.Trigger>
  )
);
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const collapsibleContentVariants = cva(
  "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border-l-2 border-muted ml-2 pl-4",
        card: "border rounded-md bg-background",
        highlighted: "bg-muted/30 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content> &
    VariantProps<typeof collapsibleContentVariants>
>(({ className, variant, children, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(collapsibleContentVariants({ variant, className }))}
    {...props}
  >
    <div className={cn(variant === "card" && "p-4")}>{children}</div>
  </CollapsiblePrimitive.Content>
));
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  collapsibleTriggerVariants,
  collapsibleContentVariants,
};
