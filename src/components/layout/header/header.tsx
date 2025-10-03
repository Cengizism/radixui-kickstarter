import * as React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
  actions?: React.ReactNode;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, title, description, actions, children, ...props }, ref) => (
    <header ref={ref} className={cn("w-full space-y-2", className)} {...props}>
      <div className="flex items-center justify-between gap-4 w-full">
        <div className="flex-1 space-y-2 text-left">
          {title && <h1 className="text-3xl font-bold">{title}</h1>}
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex-shrink-0 flex items-center">{actions}</div>
        )}
      </div>
      {children}
    </header>
  )
);
Header.displayName = "Header";

export { Header, type HeaderProps };
