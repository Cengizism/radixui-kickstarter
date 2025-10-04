import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { Slot } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";

type PanelContextProps = {
  isCollapsed: boolean;
};

const PanelContext = React.createContext<PanelContextProps | null>(null);

function usePanel() {
  const context = React.useContext(PanelContext);
  return context || { isCollapsed: false };
}

// Basic Panel Component (simplified sidebar without advanced features)
function Panel({
  className,
  children,
  isCollapsed = false,
  ...props
}: React.ComponentProps<"div"> & {
  isCollapsed?: boolean;
}) {
  const contextValue = React.useMemo<PanelContextProps>(
    () => ({ isCollapsed }),
    [isCollapsed]
  );

  return (
    <PanelContext.Provider value={contextValue}>
      <div
        data-slot="panel"
        className={cn(
          "bg-background text-foreground flex h-full w-full flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </PanelContext.Provider>
  );
}

function PanelInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="panel-input"
      className={cn("bg-background h-8 w-full shadow-none", className)}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function PanelFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function PanelSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="panel-separator"
      className={cn("bg-border mx-2 w-auto", className)}
      {...props}
    />
  );
}

function PanelContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto",
        className
      )}
      {...props}
    />
  );
}

function PanelGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function PanelGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Slot : "div";
  const { isCollapsed } = usePanel();

  if (isCollapsed) {
    return null;
  }

  return (
    <Comp
      data-slot="panel-group-label"
      className={cn(
        "text-foreground/70 ring-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

function PanelGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Slot : "button";

  return (
    <Comp
      data-slot="panel-group-action"
      className={cn(
        "text-foreground ring-ring hover:bg-accent hover:text-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        className
      )}
      {...props}
    />
  );
}

function PanelGroupContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  );
}

function PanelMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="panel-menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function PanelMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="panel-menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const panelMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-ring transition-[width,height,padding] hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 active:bg-accent active:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-accent data-[active=true]:font-medium data-[active=true]:text-accent-foreground [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-accent hover:text-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_hsl(var(--border))] hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--accent))]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const PanelMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
  } & VariantProps<typeof panelMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot.Slot : "button";
    const { isCollapsed } = usePanel();

    // When collapsed, only show the first child (icon) and hide text
    const processedChildren = React.useMemo(() => {
      if (!isCollapsed || !children) return children;

      const childArray = React.Children.toArray(children);
      // Return only the first child (typically the icon)
      return childArray[0];
    }, [isCollapsed, children]);

    return (
      <Comp
        ref={ref}
        data-slot="panel-menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(
          panelMenuButtonVariants({ variant, size }),
          isCollapsed && "justify-center px-2",
          className
        )}
        {...props}
      >
        {processedChildren}
      </Comp>
    );
  }
);
PanelMenuButton.displayName = "PanelMenuButton";

function PanelMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  showOnHover?: boolean;
}) {
  const Comp = asChild ? Slot.Slot : "button";

  return (
    <Comp
      data-slot="panel-menu-action"
      className={cn(
        "text-foreground ring-ring hover:bg-accent hover:text-accent-foreground peer-hover/menu-button:text-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        showOnHover &&
          "peer-data-[active=true]/menu-button:text-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function PanelMenuBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-menu-badge"
      className={cn(
        "text-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-accent-foreground peer-data-[active=true]/menu-button:text-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        className
      )}
      {...props}
    />
  );
}

function PanelMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & {
  showIcon?: boolean;
}) {
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      data-slot="panel-menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function PanelMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="panel-menu-sub"
      className={cn(
        "border-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        className
      )}
      {...props}
    />
  );
}

function PanelMenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="panel-menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function PanelMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Comp = asChild ? Slot.Slot : "a";

  return (
    <Comp
      data-slot="panel-menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "text-foreground ring-ring hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground [&>svg]:text-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-accent data-[active=true]:text-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        className
      )}
      {...props}
    />
  );
}

export {
  Panel,
  PanelContent,
  PanelFooter,
  PanelGroup,
  PanelGroupAction,
  PanelGroupContent,
  PanelGroupLabel,
  PanelHeader,
  PanelInput,
  PanelMenu,
  PanelMenuAction,
  PanelMenuBadge,
  PanelMenuButton,
  PanelMenuItem,
  PanelMenuSkeleton,
  PanelMenuSub,
  PanelMenuSubButton,
  PanelMenuSubItem,
  PanelSeparator,
  panelMenuButtonVariants,
  usePanel,
};
