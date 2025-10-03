import * as React from "react";
import { cn } from "@/lib/utils";
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";
("use client");

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tooltipContentVariants = cva(
  "z-50 w-fit overflow-hidden rounded-md px-3 py-1.5 text-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        accent: "bg-accent text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        success: "bg-green-600 text-white",
        warning: "bg-orange-600 text-white",
        info: "bg-blue-600 text-white",
        dark: "bg-gray-900 text-white",
        light: "bg-background text-foreground",
      },
      size: {
        sm: "px-2 py-1 text-xs rounded",
        default: "px-3 py-1.5 text-sm rounded-md",
        lg: "px-4 py-2 text-base rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const tooltipArrowVariants = cva("", {
  variants: {
    variant: {
      default: "fill-primary",
      secondary: "fill-secondary",
      accent: "fill-accent",
      destructive: "fill-destructive",
      success: "fill-green-600",
      warning: "fill-orange-600",
      info: "fill-blue-600",
      dark: "fill-gray-900",
      light: "fill-background",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function TooltipContent({
  className,
  variant = "default",
  size = "default",
  sideOffset = 4,
  children,
  showArrow = true,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content> &
  VariantProps<typeof tooltipContentVariants> & {
    showArrow?: boolean;
  }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ variant, size }), className)}
        {...props}
      >
        {children}
        {showArrow && (
          <TooltipPrimitive.Arrow
            className={cn(tooltipArrowVariants({ variant }))}
          />
        )}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

// Simple Tooltip Wrapper Component
interface SimpleTooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  variant?: VariantProps<typeof tooltipContentVariants>["variant"];
  size?: VariantProps<typeof tooltipContentVariants>["size"];
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
  disableHoverableContent?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: React.ComponentProps<typeof Tooltip>["onOpenChange"];
  showArrow?: boolean;
}

function SimpleTooltip({
  content,
  children,
  variant = "default",
  size = "default",
  side = "top",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  disableHoverableContent,
  open,
  defaultOpen,
  onOpenChange,
  showArrow = true,
  ...props
}: SimpleTooltipProps) {
  return (
    <Tooltip
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disableHoverableContent={disableHoverableContent}
    >
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent
        variant={variant}
        size={size}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        showArrow={showArrow}
        {...props}
      >
        {content}
      </TooltipContent>
    </Tooltip>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
};
