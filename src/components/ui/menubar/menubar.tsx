import * as React from 'react';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Menubar as MenubarPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";

const Menubar = MenubarPrimitive.Root;
const MenubarMenu = MenubarPrimitive.Menu;
const MenubarPortal = MenubarPrimitive.Portal;
const MenubarSub = MenubarPrimitive.Sub;
const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

const menubarTriggerVariants = cva(
  "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
  {
    variants: {
      variant: {
        default: "",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        default: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger> &
    VariantProps<typeof menubarTriggerVariants>
>(({ className, variant, size, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(menubarTriggerVariants({ variant, size }), className)}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const menubarContentVariants = cva(
  "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-background p-1 text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        sm: "min-w-[8rem] p-0.5",
        default: "min-w-[12rem] p-1",
        lg: "min-w-[16rem] p-1.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content> &
    VariantProps<typeof menubarContentVariants>
>(
  (
    {
      className,
      size,
      align = "start",
      alignOffset = -4,
      sideOffset = 8,
      ...props
    },
    ref
  ) => (
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(menubarContentVariants({ size }), className)}
      {...props}
    />
  )
);
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const menubarItemVariants = cva(
  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive:
          "text-destructive focus:bg-destructive focus:text-destructive-foreground",
      },
      size: {
        sm: "px-1.5 py-1 text-xs",
        default: "px-2 py-1.5 text-sm",
        lg: "px-3 py-2 text-base",
      },
      inset: {
        true: "pl-8",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      inset: false,
    },
  }
);

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> &
    VariantProps<typeof menubarItemVariants>
>(({ className, variant, size, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(menubarItemVariants({ variant, size, inset }), className)}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem> &
    VariantProps<typeof menubarItemVariants>
>(
  (
    { className, children, checked, variant, size, inset = true, ...props },
    ref
  ) => (
    <MenubarPrimitive.CheckboxItem
      ref={ref}
      className={cn(menubarItemVariants({ variant, size, inset }), className)}
      checked={checked}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
);
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem> &
    VariantProps<typeof menubarItemVariants>
>(({ className, children, variant, size, inset = true, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(menubarItemVariants({ variant, size, inset }), className)}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const menubarLabelVariants = cva("px-2 py-1.5 text-sm font-semibold", {
  variants: {
    size: {
      sm: "px-1.5 py-1 text-xs",
      default: "px-2 py-1.5 text-sm",
      lg: "px-3 py-2 text-base",
    },
    inset: {
      true: "pl-8",
      false: "",
    },
  },
  defaultVariants: {
    size: "default",
    inset: false,
  },
});

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> &
    VariantProps<typeof menubarLabelVariants>
>(({ className, size, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn(menubarLabelVariants({ size, inset }), className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const menubarSeparatorVariants = cva("-mx-1 my-1 h-px bg-muted", {
  variants: {
    size: {
      sm: "-mx-0.5 my-0.5",
      default: "-mx-1 my-1",
      lg: "-mx-1.5 my-1.5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator> &
    VariantProps<typeof menubarSeparatorVariants>
>(({ className, size, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn(menubarSeparatorVariants({ size }), className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> &
    VariantProps<typeof menubarItemVariants> & {
      children?: React.ReactNode;
    }
>(({ className, children, variant, size, inset, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      menubarItemVariants({ variant, size, inset }),
      "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent> &
    VariantProps<typeof menubarContentVariants>
>(({ className, size, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      menubarContentVariants({ size }),
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

// Shortcut component for keyboard shortcuts
const MenubarShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayName = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarPortal,
  MenubarRadioGroup,
  menubarTriggerVariants,
  menubarContentVariants,
  menubarItemVariants,
  menubarLabelVariants,
  menubarSeparatorVariants,
};
