import * as React from 'react';
import { cn } from '@/lib/utils';
import { Switch as SwitchPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";

const switchRootVariants = cva(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        default: "h-6 w-11",
        lg: "h-7 w-13",
        xl: "h-8 w-15",
      },
      variant: {
        default:
          "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        outline:
          "border-2 border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=unchecked]:bg-transparent",
        secondary:
          "data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input",
        destructive:
          "data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input",
        success:
          "data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-input",
        warning:
          "data-[state=checked]:bg-yellow-600 data-[state=unchecked]:bg-input",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

const switchThumbVariants = cva(
  "pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        sm: "h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0",
        default:
          "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
        lg: "h-6 w-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0",
        xl: "h-7 w-7 data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0",
      },
      variant: {
        default: "bg-background",
        outline: "bg-background",
        secondary: "bg-background",
        destructive: "bg-background",
        success: "bg-background",
        warning: "bg-background",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchRootVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, variant, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(switchRootVariants({ size, variant }), className)}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(switchThumbVariants({ size, variant }))}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

// Individual components for advanced usage
const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> &
    VariantProps<typeof switchRootVariants>
>(({ className, size, variant, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(switchRootVariants({ size, variant }), className)}
    {...props}
    ref={ref}
  />
));
SwitchRoot.displayName = SwitchPrimitive.Root.displayName;

const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Thumb>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb> &
    VariantProps<typeof switchThumbVariants>
>(({ className, size, variant, ...props }, ref) => (
  <SwitchPrimitive.Thumb
    className={cn(switchThumbVariants({ size, variant }), className)}
    {...props}
    ref={ref}
  />
));
SwitchThumb.displayName = SwitchPrimitive.Thumb.displayName;

export {
  Switch,
  SwitchRoot,
  SwitchThumb,
  switchRootVariants,
  switchThumbVariants,
};
