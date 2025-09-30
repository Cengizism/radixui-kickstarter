import * as React from 'react';
import { AspectRatio as AspectRatioPrimitive } from 'radix-ui';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from "class-variance-authority";

const aspectRatioVariants = cva("overflow-hidden", {
  variants: {
    ratio: {
      "1:1": "[&>*]:aspect-square",
      "4:3": "[&>*]:aspect-[4/3]",
      "16:9": "[&>*]:aspect-video",
      "3:2": "[&>*]:aspect-[3/2]",
      "21:9": "[&>*]:aspect-[21/9]",
      "9:16": "[&>*]:aspect-[9/16]", // Portrait/mobile
      custom: "",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      default: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    ratio: "16:9",
    rounded: "default",
  },
});

interface AspectRatioProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>,
      "ratio"
    >,
    Omit<VariantProps<typeof aspectRatioVariants>, "ratio"> {
  ratio?: number | VariantProps<typeof aspectRatioVariants>["ratio"];
  rounded?: VariantProps<typeof aspectRatioVariants>["rounded"];
}

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  AspectRatioProps
>(({ className, ratio = "16:9", rounded, children, ...props }, ref) => {
  // If ratio is a number, use it directly. If it's a string preset, use that
  const ratioValue = typeof ratio === "number" ? ratio : undefined;
  const ratioVariant = typeof ratio === "string" ? ratio : "custom";

  return (
    <AspectRatioPrimitive.Root
      ref={ref}
      ratio={ratioValue}
      className={cn(
        aspectRatioVariants({
          ratio: ratioVariant as VariantProps<
            typeof aspectRatioVariants
          >["ratio"],
          rounded,
        }),
        className
      )}
      {...props}
    >
      {children}
    </AspectRatioPrimitive.Root>
  );
});

AspectRatio.displayName = "AspectRatio";

export { AspectRatio, aspectRatioVariants };
export type { AspectRatioProps };
