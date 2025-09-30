import * as React from 'react';
import { cn } from '@/lib/utils';
import { HoverCard as HoverCardPrimitive } from 'radix-ui';
import { cva, type VariantProps } from "class-variance-authority";

const HoverCard = HoverCardPrimitive.Root;
const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardPortal = HoverCardPrimitive.Portal;
const HoverCardArrow = HoverCardPrimitive.Arrow;

const hoverCardContentVariants = cva(
  "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  {
    variants: {
      size: {
        sm: "w-48 p-3",
        default: "w-64 p-4",
        lg: "w-80 p-6",
        xl: "w-96 p-6",
      },
      align: {
        start: "",
        center: "",
        end: "",
      },
    },
    defaultVariants: {
      size: "default",
      align: "center",
    },
  }
);

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content> &
    VariantProps<typeof hoverCardContentVariants>
>(({ className, size, align, sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(hoverCardContentVariants({ size, align }), className)}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

const hoverCardArrowVariants = cva("fill-popover", {
  variants: {
    size: {
      sm: "h-3 w-3",
      default: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const HoverCardArrowStyled = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Arrow> &
    VariantProps<typeof hoverCardArrowVariants>
>(({ className, size, ...props }, ref) => (
  <HoverCardPrimitive.Arrow
    ref={ref}
    className={cn(hoverCardArrowVariants({ size }), className)}
    {...props}
  />
));
HoverCardArrowStyled.displayName = "HoverCardArrowStyled";

// Profile component for user hover cards
const HoverCardProfile = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    avatar?: string;
    name?: string;
    username?: string;
    description?: string;
    stats?: { label: string; value: string | number }[];
    verified?: boolean;
  }
>(
  (
    {
      className,
      avatar,
      name,
      username,
      description,
      stats,
      verified,
      ...props
    },
    ref
  ) => (
    <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
      {avatar && (
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full"
            src={avatar}
            alt={name || username || "Profile"}
          />
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <div className="font-semibold text-sm">{name}</div>
              {verified && (
                <svg
                  className="h-4 w-4 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            {username && (
              <div className="text-muted-foreground text-sm">@{username}</div>
            )}
          </div>
        </div>
      )}

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {stats && stats.length > 0 && (
        <div className="flex gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex gap-1 text-sm">
              <span className="font-semibold">{stat.value}</span>
              <span className="text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
);
HoverCardProfile.displayName = "HoverCardProfile";

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardPortal,
  HoverCardArrow,
  HoverCardArrowStyled,
  HoverCardProfile,
  hoverCardContentVariants,
  hoverCardArrowVariants,
};
