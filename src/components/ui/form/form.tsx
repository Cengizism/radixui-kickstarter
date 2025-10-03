import * as React from "react";
import { cn } from "@/lib/utils";
import { Form as FormPrimitive } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

const Form = FormPrimitive.Root;
const FormField = FormPrimitive.Field;
const FormLabel = FormPrimitive.Label;
const FormMessage = FormPrimitive.Message;
const FormValidityState = FormPrimitive.ValidityState;
const FormSubmit = FormPrimitive.Submit;

const formControlVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive focus-visible:ring-destructive",
      },
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10",
        lg: "h-12 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const FormControl = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Control>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Control> &
    VariantProps<typeof formControlVariants>
>(({ className, variant, size, ...props }, ref) => (
  <FormPrimitive.Control
    ref={ref}
    className={cn(formControlVariants({ variant, size, className }))}
    {...props}
  />
));
FormControl.displayName = FormPrimitive.Control.displayName;

const formLabelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      variant: {
        default: "",
        destructive: "text-destructive",
      },
      size: {
        sm: "text-xs",
        default: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const FormLabelStyled = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Label> &
    VariantProps<typeof formLabelVariants>
>(({ className, variant, size, ...props }, ref) => (
  <FormPrimitive.Label
    ref={ref}
    className={cn(formLabelVariants({ variant, size, className }))}
    {...props}
  />
));
FormLabelStyled.displayName = "FormLabelStyled";

const formMessageVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-muted-foreground",
      destructive: "text-destructive",
    },
    size: {
      sm: "text-xs",
      default: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    variant: "destructive",
    size: "default",
  },
});

const FormMessageStyled = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Message>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Message> &
    VariantProps<typeof formMessageVariants>
>(({ className, variant, size, ...props }, ref) => (
  <FormPrimitive.Message
    ref={ref}
    className={cn(formMessageVariants({ variant, size, className }))}
    {...props}
  />
));
FormMessageStyled.displayName = "FormMessageStyled";

const formFieldVariants = cva("space-y-2", {
  variants: {
    layout: {
      default: "space-y-2",
      horizontal: "flex items-center space-x-4 space-y-0",
      inline: "flex items-center gap-2 space-y-0",
    },
  },
  defaultVariants: {
    layout: "default",
  },
});

const FormFieldStyled = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Field>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Field> &
    VariantProps<typeof formFieldVariants>
>(({ className, layout, ...props }, ref) => (
  <FormPrimitive.Field
    ref={ref}
    className={cn(formFieldVariants({ layout, className }))}
    {...props}
  />
));
FormFieldStyled.displayName = "FormFieldStyled";

const formSubmitVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 rounded-md px-3",
        default: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const FormSubmitStyled = React.forwardRef<
  React.ElementRef<typeof FormPrimitive.Submit>,
  React.ComponentPropsWithoutRef<typeof FormPrimitive.Submit> &
    VariantProps<typeof formSubmitVariants>
>(({ className, variant, size, ...props }, ref) => (
  <FormPrimitive.Submit
    ref={ref}
    className={cn(formSubmitVariants({ variant, size, className }))}
    {...props}
  />
));
FormSubmitStyled.displayName = "FormSubmitStyled";

// Helper component for form descriptions
const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

export {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormValidityState,
  FormSubmit,
  FormLabelStyled,
  FormMessageStyled,
  FormFieldStyled,
  FormSubmitStyled,
  FormDescription,
  formControlVariants,
  formLabelVariants,
  formMessageVariants,
  formFieldVariants,
  formSubmitVariants,
};
