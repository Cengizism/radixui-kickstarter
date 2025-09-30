import * as React from 'react';
import { cn } from '@/lib/utils';
import { Separator as SeparatorPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";

const separatorVariants = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-px w-full",
      vertical: "h-full w-px",
    },
    variant: {
      default: "bg-border",
      subtle: "bg-border/50",
      strong: "bg-border shadow-sm",
      accent: "bg-accent",
      primary: "bg-primary/20",
      destructive: "bg-destructive/20",
    },
    size: {
      sm: "data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px",
      default:
        "data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px",
      md: "data-[orientation=horizontal]:h-0.5 data-[orientation=vertical]:w-0.5",
      lg: "data-[orientation=horizontal]:h-1 data-[orientation=vertical]:w-1",
    },
    spacing: {
      none: "",
      sm: "data-[orientation=horizontal]:my-2 data-[orientation=vertical]:mx-2",
      default:
        "data-[orientation=horizontal]:my-4 data-[orientation=vertical]:mx-4",
      lg: "data-[orientation=horizontal]:my-6 data-[orientation=vertical]:mx-6",
      xl: "data-[orientation=horizontal]:my-8 data-[orientation=vertical]:mx-8",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    size: "default",
    spacing: "none",
  },
});

interface SeparatorProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
      "orientation"
    >,
    VariantProps<typeof separatorVariants> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  SeparatorProps
>(
  (
    {
      className,
      orientation = "horizontal",
      variant,
      size,
      spacing,
      decorative = true,
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorVariants({ orientation, variant, size, spacing }),
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, separatorVariants };
