import * as React from "react";
import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "sticky" | "content";
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, variant = "content", children, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        "border-t bg-background p-6",
        variant === "sticky" && "mt-auto",
        className
      )}
      {...props}
    >
      {children || (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            © 2024 My Application. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Support</span>
          </div>
        </div>
      )}
    </footer>
  )
);
Footer.displayName = "Footer";

export { Footer, type FooterProps };
