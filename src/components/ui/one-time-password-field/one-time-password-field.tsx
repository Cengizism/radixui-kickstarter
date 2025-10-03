import * as React from "react";
import { cn } from "@/lib/utils";
import { OTPInput, OTPInputContext } from "input-otp";
import { cva, type VariantProps } from "class-variance-authority";

const oneTimePasswordFieldRootStyle = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-1",
      default: "gap-2",
      lg: "gap-3",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    size: "default",
    orientation: "horizontal",
  },
});

const oneTimePasswordFieldSlotStyle = cva(
  "relative flex items-center justify-center text-center transition-all border-input border bg-background text-foreground shadow-sm hover:border-accent-foreground/20 focus-within:border-ring focus-within:ring-2 focus-within:ring-ring/30 focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs rounded",
        default: "h-10 w-10 text-sm rounded-md",
        lg: "h-12 w-12 text-base rounded-lg",
      },
      state: {
        active: "z-10 ring-2 ring-ring ring-offset-2",
        complete: "bg-accent",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const OneTimePasswordField = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput> &
    VariantProps<typeof oneTimePasswordFieldRootStyle> & {
      containerClassName?: string;
    }
>(({ className, containerClassName, size, orientation, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      oneTimePasswordFieldRootStyle({ size, orientation }),
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
OneTimePasswordField.displayName = "OneTimePasswordField";

const OneTimePasswordFieldSlot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof oneTimePasswordFieldSlotStyle> & {
      index: number;
    }
>(({ index, className, size, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);

  // Safely handle potentially undefined slots or missing index
  const slots = inputOTPContext?.slots || [];
  const slot = slots[index] || {
    char: "",
    hasFakeCaret: false,
    isActive: false,
  };
  const { char, hasFakeCaret, isActive } = slot;

  return (
    <div
      ref={ref}
      className={cn(
        oneTimePasswordFieldSlotStyle({
          size,
          state: isActive ? "active" : char ? "complete" : undefined,
        }),
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
OneTimePasswordFieldSlot.displayName = "OneTimePasswordFieldSlot";

const OneTimePasswordFieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof oneTimePasswordFieldRootStyle>
>(({ className, size, orientation, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      oneTimePasswordFieldRootStyle({ size, orientation }),
      className
    )}
    {...props}
  />
));
OneTimePasswordFieldGroup.displayName = "OneTimePasswordFieldGroup";

// Separator component for segmented OTP fields
const OneTimePasswordFieldSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    size?: "sm" | "default" | "lg";
  }
>(({ className, size = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-muted-foreground select-none",
      size === "sm" && "text-xs",
      size === "default" && "text-sm",
      size === "lg" && "text-base",
      className
    )}
    aria-hidden
    {...props}
  >
    -
  </div>
));
OneTimePasswordFieldSeparator.displayName = "OneTimePasswordFieldSeparator";

export {
  oneTimePasswordFieldRootStyle,
  oneTimePasswordFieldSlotStyle,
  OneTimePasswordField,
  OneTimePasswordFieldSlot,
  OneTimePasswordFieldGroup,
  OneTimePasswordFieldSeparator,
};
