import React from 'react';
import { cn } from '@/lib/utils';

// Root Topbar Container
function Topbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "flex h-14 items-center gap-2 border-b bg-background pl-4 pr-2",
        className
      )}
      data-slot="topbar"
      {...props}
    />
  );
}

// Topbar Title
function TopbarTitle({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-1 items-center gap-4", className)}
      data-slot="topbar-title"
      {...props}
    >
      <h1 className="text-lg font-semibold">{children}</h1>
    </div>
  );
}

// Topbar Actions (button container)
function TopbarActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-0", className)}
      data-slot="topbar-actions"
      {...props}
    />
  );
}

export { Topbar, TopbarActions, TopbarTitle };
