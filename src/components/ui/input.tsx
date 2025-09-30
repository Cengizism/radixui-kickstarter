import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex w-full min-w-0 rounded-md border px-3 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: "h-8 py-1 px-2 text-sm file:h-6",
        default: "h-9 py-1 file:h-7",
        lg: "h-10 py-2 px-4 text-base file:h-8",
      },
      variant: {
        default: "border-input",
        ghost: "border-transparent bg-transparent",
        destructive: "border-destructive",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

function Input({
  className,
  type,
  size,
  variant,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, variant, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
