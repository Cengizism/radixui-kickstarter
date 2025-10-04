import * as React from "react";
import { cn } from "@/lib/utils";
import { Progress as ProgressPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

const ProgressRoot = ProgressPrimitive.Root;

const progressVariants = cva("relative w-full overflow-hidden bg-secondary", {
  variants: {
    size: {
      sm: "h-1",
      default: "h-2",
      lg: "h-3",
      xl: "h-4",
    },
    variant: {
      default: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-md",
    },
  },
  defaultVariants: {
    size: "default",
    variant: "default",
  },
});

const progressIndicatorVariants = cva(
  "h-full w-full flex-1 transition-all duration-300 ease-in-out",
  {
    variants: {
      color: {
        default: "bg-primary",
        secondary: "bg-secondary-foreground",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-destructive",
        info: "bg-info",
      },
      animated: {
        true: "transition-transform duration-300",
        false: "",
      },
    },
    defaultVariants: {
      color: "default",
      animated: true,
    },
  }
);

interface ProgressProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
      "color"
    >,
    VariantProps<typeof progressVariants> {
  color?: VariantProps<typeof progressIndicatorVariants>["color"];
  animated?: boolean;
  showLabel?: boolean;
  label?: string;
  // eslint-disable-next-line no-unused-vars
  formatLabel?: (value: number, max: number) => string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    {
      className,
      value,
      size,
      variant,
      color = "default",
      animated = true,
      showLabel = false,
      label,
      formatLabel,
      max = 100,
      ...props
    },
    ref
  ) => {
    const progressValue = value ?? 0;
    const isIndeterminate = value === null || value === undefined;

    const getLabel = () => {
      if (label) return label;
      if (formatLabel && value !== null && value !== undefined) {
        return formatLabel(value, max);
      }
      if (showLabel && value !== null && value !== undefined) {
        return `${Math.round((value / max) * 100)}%`;
      }
      return null;
    };

    return (
      <div className="w-full">
        {(showLabel || label) && (
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">
              {getLabel()}
            </span>
            {!isIndeterminate && showLabel && !label && (
              <span className="text-sm text-muted-foreground">
                {value} / {max}
              </span>
            )}
          </div>
        )}
        <ProgressPrimitive.Root
          ref={ref}
          className={cn(progressVariants({ size, variant }), className)}
          value={value}
          max={max}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className={cn(
              progressIndicatorVariants({ color, animated }),
              isIndeterminate && "animate-pulse"
            )}
            style={{
              transform: isIndeterminate
                ? undefined
                : `translateX(-${100 - (progressValue / max) * 100}%)`,
            }}
          />
        </ProgressPrimitive.Root>
      </div>
    );
  }
);
Progress.displayName = ProgressPrimitive.Root.displayName;

const ProgressIndicator = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Indicator> &
    VariantProps<typeof progressIndicatorVariants>
>(({ className, color, animated, ...props }, ref) => (
  <ProgressPrimitive.Indicator
    ref={ref}
    className={cn(progressIndicatorVariants({ color, animated }), className)}
    {...props}
  />
));
ProgressIndicator.displayName = ProgressPrimitive.Indicator.displayName;

export {
  Progress,
  ProgressRoot,
  ProgressIndicator,
  progressVariants,
  progressIndicatorVariants,
};
