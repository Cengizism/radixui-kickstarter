import * as React from 'react';
import { cn } from '@/lib/utils';
import { Tooltip as TooltipPrimitive } from 'radix-ui';
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
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

const tooltipContentVariants = cva(
  "z-50 w-fit overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border-border",
        secondary: "bg-secondary text-secondary-foreground border-secondary",
        accent: "bg-accent text-accent-foreground border-accent",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive",
        success: "bg-green-600 text-white border-green-600",
        warning: "bg-orange-600 text-white border-orange-600",
        info: "bg-blue-600 text-white border-blue-600",
        dark: "bg-gray-900 text-white border-gray-800",
        light: "bg-white text-gray-900 border-gray-200",
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

const tooltipArrowVariants = cva("fill-current", {
  variants: {
    variant: {
      default: "fill-popover",
      secondary: "fill-secondary",
      accent: "fill-accent",
      destructive: "fill-destructive",
      success: "fill-green-600",
      warning: "fill-orange-600",
      info: "fill-blue-600",
      dark: "fill-gray-900",
      light: "fill-white",
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
  delayDuration?: number;
  skipDelayDuration?: number;
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
  delayDuration,
  skipDelayDuration,
  disableHoverableContent,
  open,
  defaultOpen,
  onOpenChange,
  showArrow = true,
  ...props
}: SimpleTooltipProps) {
  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
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
    </TooltipProvider>
  );
}

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  SimpleTooltip,
};
