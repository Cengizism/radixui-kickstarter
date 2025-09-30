import * as React from 'react';
import { Circle, Dot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";


const RadioGroupRoot = RadioGroupPrimitive.Root;

const radioGroupVariants = cva("grid gap-2", {
  variants: {
    orientation: {
      vertical: "grid-cols-1",
      horizontal: "grid-flow-col auto-cols-max gap-6",
    },
    size: {
      sm: "gap-1.5",
      default: "gap-2",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    orientation: "vertical",
    size: "default",
  },
});

const radioGroupItemVariants = cva(
  "aspect-square rounded-full border text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        default: "h-4 w-4",
        lg: "h-5 w-5",
        xl: "h-6 w-6",
      },
      variant: {
        default: "border-primary shadow",
        outline:
          "border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost:
          "border-transparent bg-transparent hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

const radioGroupIndicatorVariants = cva(
  "flex items-center justify-center text-current",
  {
    variants: {
      size: {
        sm: "[&>svg]:h-1.5 [&>svg]:w-1.5",
        default: "[&>svg]:h-2 [&>svg]:w-2",
        lg: "[&>svg]:h-2.5 [&>svg]:w-2.5",
        xl: "[&>svg]:h-3 [&>svg]:w-3",
      },
      indicator: {
        circle: "",
        dot: "",
        filled: "",
      },
    },
    defaultVariants: {
      size: "default",
      indicator: "circle",
    },
  }
);

interface RadioGroupProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
      "orientation"
    >,
    VariantProps<typeof radioGroupVariants> {}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, orientation, size, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(radioGroupVariants({ orientation, size }), className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioGroupItemVariants> {
  indicator?: VariantProps<typeof radioGroupIndicatorVariants>["indicator"];
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(({ className, size, variant, indicator = "circle", ...props }, ref) => {
  const renderIndicator = () => {
    switch (indicator) {
      case "dot":
        return <Dot className="fill-current" />;
      case "filled":
        return <div className="h-full w-full rounded-full bg-current" />;
      default:
        return <Circle className="fill-current" />;
    }
  };

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(radioGroupItemVariants({ size, variant }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        className={cn(radioGroupIndicatorVariants({ size, indicator }))}
      >
        {renderIndicator()}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator> &
    VariantProps<typeof radioGroupIndicatorVariants>
>(({ className, size, indicator, children, ...props }, ref) => (
  <RadioGroupPrimitive.Indicator
    ref={ref}
    className={cn(radioGroupIndicatorVariants({ size, indicator }), className)}
    {...props}
  >
    {children}
  </RadioGroupPrimitive.Indicator>
));
RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName;

export {
  RadioGroup,
  RadioGroupRoot,
  RadioGroupItem,
  RadioGroupIndicator,
  radioGroupVariants,
  radioGroupItemVariants,
  radioGroupIndicatorVariants,
};
