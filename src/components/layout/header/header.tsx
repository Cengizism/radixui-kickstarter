import * as React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, title, description, ...props }, ref) => (
    <header ref={ref} className={cn("space-y-2", className)} {...props}>
      {title && <h1 className="text-3xl font-bold">{title}</h1>}
      {description && <p className="text-muted-foreground">{description}</p>}
    </header>
  )
);
Header.displayName = "Header";

export { Header, type HeaderProps };
