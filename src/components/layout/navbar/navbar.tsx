import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PanelLeft } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
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
  usePanel,
} from "@/components/ui/panel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const NAVBAR_COOKIE_NAME = "navbar_state";
const NAVBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const NAVBAR_WIDTH = "16rem";
const NAVBAR_WIDTH_MOBILE = "18rem";
const NAVBAR_WIDTH_ICON = "4rem";
const NAVBAR_KEYBOARD_SHORTCUT = "b";

type NavbarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
  openMobile: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleNavbar: () => void;
  isCollapsed: boolean;
};

const NavbarContext = React.createContext<NavbarContextProps | null>(null);

function useNavbar() {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider.");
  }
  return context;
}

function NavbarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  // eslint-disable-next-line no-unused-vars
  onOpenChange?: (openState: boolean) => void;
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);

  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    // eslint-disable-next-line no-unused-vars
    (value: boolean | ((prev: boolean) => boolean)) => {
      const finalState = typeof value === "function" ? value(open) : value;

      if (setOpenProp) {
        setOpenProp(finalState);
      } else {
        _setOpen(finalState);
      }

      // Set cookie to keep navbar state
      document.cookie = `${NAVBAR_COOKIE_NAME}=${finalState}; path=/; max-age=${NAVBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );

  const toggleNavbar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Keyboard shortcut to toggle navbar
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === NAVBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleNavbar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleNavbar]);

  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<NavbarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleNavbar,
      isCollapsed: state === "collapsed",
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleNavbar]
  );

  return (
    <NavbarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="navbar-wrapper"
          style={
            {
              "--navbar-width": NAVBAR_WIDTH,
              "--navbar-width-icon": NAVBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            "group/navbar-wrapper flex min-h-screen w-full",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </NavbarContext.Provider>
  );
}

function Navbar({
  collapsible = "offcanvas",
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  collapsible?: "offcanvas" | "icon" | "none";
}) {
  const { isMobile, state, openMobile, setOpenMobile, isCollapsed } =
    useNavbar();

  if (collapsible === "none") {
    return (
      <div
        data-slot="navbar"
        className={cn(
          "bg-sidebar text-sidebar-foreground flex h-full flex-col",
          className
        )}
        style={{ width: "var(--navbar-width)" }}
        {...props}
      >
        <Panel>{children}</Panel>
      </div>
    );
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-navbar="navbar"
          data-slot="navbar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground p-0 [&>button]:hidden"
          style={
            {
              width: "var(--navbar-width)",
              "--navbar-width": NAVBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side="left"
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>Displays the mobile navigation.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">
            <Panel>{children}</Panel>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div
      className="group peer text-sidebar-foreground block"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-side="left"
      data-slot="navbar"
    >
      {/* Navbar gap on desktop */}
      <div
        data-slot="navbar-gap"
        className={cn(
          "relative bg-transparent transition-[width] duration-200 ease-linear",
          state === "collapsed" && collapsible === "offcanvas" ? "w-0" : ""
        )}
        style={{
          width:
            state === "collapsed"
              ? collapsible === "offcanvas"
                ? "0"
                : "var(--navbar-width-icon)"
              : "var(--navbar-width)",
        }}
      />
      <div
        data-slot="navbar-container"
        className={cn(
          "fixed inset-y-0 z-10 flex h-full transition-[left,right,width] duration-200 ease-linear",
          state === "collapsed" && collapsible === "offcanvas"
            ? "left-[calc(var(--navbar-width)*-1)]"
            : "left-0",
          className
        )}
        style={{
          width:
            state === "collapsed"
              ? "var(--navbar-width-icon)"
              : "var(--navbar-width)",
        }}
        {...props}
      >
        <div
          data-navbar="navbar"
          data-slot="navbar-inner"
          className="bg-sidebar border-r border-sidebar-border flex h-full w-full flex-col"
        >
          <Panel isCollapsed={isCollapsed && collapsible === "icon"}>
            {children}
          </Panel>
        </div>
      </div>
    </div>
  );
}

const NavbarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleNavbar } = useNavbar();

  return (
    <Button
      ref={ref}
      data-navbar="trigger"
      data-slot="navbar-trigger"
      variant="ghost"
      size="icon"
      className={cn("size-7", className)}
      onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
        onClick?.(event);
        toggleNavbar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Navigation</span>
    </Button>
  );
});

NavbarTrigger.displayName = "NavbarTrigger";

function NavbarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="navbar-inset"
      className={cn(
        "bg-background relative flex w-full flex-1 flex-col",
        className
      )}
      {...props}
    />
  );
}

// Navbar-specific wrappers for Panel components
const NavbarContent = PanelContent;

// Flexible components that support both plain children and render props
const NavbarHeader = React.forwardRef<
  React.ElementRef<typeof PanelHeader>,
  React.ComponentPropsWithoutRef<typeof PanelHeader> & {
    children?:
      | React.ReactNode
      // eslint-disable-next-line no-unused-vars
      | ((props: { isCollapsed: boolean }) => React.ReactNode);
  }
>(({ children, ...props }, ref) => {
  const { isCollapsed } = usePanel();

  return (
    <PanelHeader ref={ref} {...props}>
      {typeof children === "function" ? children({ isCollapsed }) : children}
    </PanelHeader>
  );
});
NavbarHeader.displayName = "NavbarHeader";

const NavbarFooter = React.forwardRef<
  React.ElementRef<typeof PanelFooter>,
  React.ComponentPropsWithoutRef<typeof PanelFooter> & {
    children?:
      | React.ReactNode
      // eslint-disable-next-line no-unused-vars
      | ((props: { isCollapsed: boolean }) => React.ReactNode);
  }
>(({ children, ...props }, ref) => {
  const { isCollapsed } = usePanel();

  return (
    <PanelFooter ref={ref} {...props}>
      {typeof children === "function" ? children({ isCollapsed }) : children}
    </PanelFooter>
  );
});
NavbarFooter.displayName = "NavbarFooter";

// NavbarMenuButton with conditional tooltip
const NavbarMenuButtonWithTooltip = React.forwardRef<
  React.ElementRef<typeof PanelMenuButton>,
  React.ComponentPropsWithoutRef<typeof PanelMenuButton> & {
    tooltip?: string;
    showTooltipWhenCollapsed?: boolean;
  }
>(({ tooltip, showTooltipWhenCollapsed = true, children, ...props }, ref) => {
  const { isCollapsed } = usePanel();

  // Show tooltip only when collapsed and tooltip is provided
  if (isCollapsed && showTooltipWhenCollapsed && tooltip) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <PanelMenuButton ref={ref} {...props}>
            {children}
          </PanelMenuButton>
        </TooltipTrigger>
        <TooltipContent size="sm" side="right">
          {tooltip}
        </TooltipContent>
      </Tooltip>
    );
  }

  return (
    <PanelMenuButton ref={ref} {...props}>
      {children}
    </PanelMenuButton>
  );
});
NavbarMenuButtonWithTooltip.displayName = "NavbarMenuButtonWithTooltip";

const NavbarSeparator = PanelSeparator;
const NavbarGroup = PanelGroup;
const NavbarGroupLabel = PanelGroupLabel;
const NavbarGroupContent = PanelGroupContent;
const NavbarGroupAction = PanelGroupAction;
const NavbarMenu = PanelMenu;
const NavbarMenuItem = PanelMenuItem;
const NavbarMenuButton = PanelMenuButton;
const NavbarMenuAction = PanelMenuAction;
const NavbarMenuBadge = PanelMenuBadge;
const NavbarMenuSkeleton = PanelMenuSkeleton;
const NavbarMenuSub = PanelMenuSub;
const NavbarMenuSubItem = PanelMenuSubItem;
const NavbarMenuSubButton = PanelMenuSubButton;
const NavbarInput = PanelInput;

export {
  Navbar,
  NavbarContent,
  NavbarFooter,
  NavbarGroup,
  NavbarGroupAction,
  NavbarGroupContent,
  NavbarGroupLabel,
  NavbarHeader,
  NavbarInput,
  NavbarInset,
  NavbarMenu,
  NavbarMenuAction,
  NavbarMenuBadge,
  NavbarMenuButton,
  NavbarMenuButtonWithTooltip,
  NavbarMenuItem,
  NavbarMenuSkeleton,
  NavbarMenuSub,
  NavbarMenuSubButton,
  NavbarMenuSubItem,
  NavbarProvider,
  NavbarSeparator,
  NavbarTrigger,
  useNavbar,
};
