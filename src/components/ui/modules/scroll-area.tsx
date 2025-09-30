import * as React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea as ScrollAreaPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";


const ScrollAreaRoot = ScrollAreaPrimitive.Root;

const scrollAreaVariants = cva("relative overflow-hidden", {
  variants: {
    size: {
      sm: "h-32",
      default: "h-64",
      lg: "h-96",
      xl: "h-[32rem]",
      full: "h-full",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const scrollAreaViewportVariants = cva("h-full w-full rounded-[inherit]");

const scrollAreaScrollbarVariants = cva(
  "flex touch-none select-none transition-colors",
  {
    variants: {
      orientation: {
        vertical: "h-full w-2.5 border-l border-l-transparent p-[1px]",
        horizontal: "h-2.5 w-full border-t border-t-transparent p-[1px]",
      },
      variant: {
        default: "hover:bg-border",
        thin: "w-1.5 hover:bg-border data-[orientation=horizontal]:h-1.5",
        thick: "w-4 hover:bg-border data-[orientation=horizontal]:h-4",
      },
    },
    defaultVariants: {
      orientation: "vertical",
      variant: "default",
    },
  }
);

const scrollAreaThumbVariants = cva("relative flex-1 rounded-full", {
  variants: {
    variant: {
      default: "bg-border",
      primary: "bg-primary/50 hover:bg-primary/70",
      secondary: "bg-secondary hover:bg-secondary/80",
      muted: "bg-muted-foreground/30 hover:bg-muted-foreground/50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>,
    VariantProps<typeof scrollAreaVariants> {
  scrollbarVariant?: VariantProps<
    typeof scrollAreaScrollbarVariants
  >["variant"];
  thumbVariant?: VariantProps<typeof scrollAreaThumbVariants>["variant"];
  type?: "auto" | "always" | "scroll" | "hover";
  scrollHideDelay?: number;
  dir?: "ltr" | "rtl";
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(
  (
    {
      className,
      children,
      size,
      scrollbarVariant = "default",
      thumbVariant = "default",
      type = "hover",
      scrollHideDelay = 600,
      dir,
      ...props
    },
    ref
  ) => (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn(scrollAreaVariants({ size }), className)}
      type={type}
      scrollHideDelay={scrollHideDelay}
      dir={dir}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={cn(scrollAreaViewportVariants())}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.Scrollbar
        className={cn(
          scrollAreaScrollbarVariants({
            orientation: "vertical",
            variant: scrollbarVariant,
          })
        )}
        orientation="vertical"
      >
        <ScrollAreaPrimitive.Thumb
          className={cn(scrollAreaThumbVariants({ variant: thumbVariant }))}
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Scrollbar
        className={cn(
          scrollAreaScrollbarVariants({
            orientation: "horizontal",
            variant: scrollbarVariant,
          })
        )}
        orientation="horizontal"
      >
        <ScrollAreaPrimitive.Thumb
          className={cn(scrollAreaThumbVariants({ variant: thumbVariant }))}
        />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
);
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollAreaViewport = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Viewport
    ref={ref}
    className={cn(scrollAreaViewportVariants(), className)}
    {...props}
  />
));
ScrollAreaViewport.displayName = ScrollAreaPrimitive.Viewport.displayName;

interface ScrollAreaScrollbarProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>,
      "orientation"
    >,
    VariantProps<typeof scrollAreaScrollbarVariants> {
  orientation?: "vertical" | "horizontal";
}

const ScrollAreaScrollbar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
  ScrollAreaScrollbarProps
>(({ className, orientation = "vertical", variant, ...props }, ref) => (
  <ScrollAreaPrimitive.Scrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      scrollAreaScrollbarVariants({ orientation, variant }),
      className
    )}
    {...props}
  />
));
ScrollAreaScrollbar.displayName = ScrollAreaPrimitive.Scrollbar.displayName;

interface ScrollAreaThumbProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Thumb>,
    VariantProps<typeof scrollAreaThumbVariants> {}

const ScrollAreaThumb = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Thumb>,
  ScrollAreaThumbProps
>(({ className, variant, ...props }, ref) => (
  <ScrollAreaPrimitive.Thumb
    ref={ref}
    className={cn(scrollAreaThumbVariants({ variant }), className)}
    {...props}
  />
));
ScrollAreaThumb.displayName = ScrollAreaPrimitive.Thumb.displayName;

const ScrollAreaCorner = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Corner>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Corner>
>(({ className, ...props }, ref) => (
  <ScrollAreaPrimitive.Corner
    ref={ref}
    className={cn("bg-blackA6", className)}
    {...props}
  />
));
ScrollAreaCorner.displayName = ScrollAreaPrimitive.Corner.displayName;

export {
  ScrollArea,
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
  scrollAreaVariants,
  scrollAreaViewportVariants,
  scrollAreaScrollbarVariants,
  scrollAreaThumbVariants,
};
