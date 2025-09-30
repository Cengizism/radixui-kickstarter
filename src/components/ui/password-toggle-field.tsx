import * as React from 'react';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { cva, type VariantProps } from "class-variance-authority";

const passwordToggleFieldRootStyle = cva("relative flex items-center", {
  variants: {
    size: {
      sm: "h-8",
      default: "h-10",
      lg: "h-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const passwordToggleFieldInputStyle = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pr-10",
  {
    variants: {
      size: {
        sm: "h-8 px-2 py-1 text-xs pr-8",
        default: "h-10 px-3 py-2 text-sm pr-10",
        lg: "h-12 px-4 py-3 text-base pr-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

const passwordToggleFieldToggleStyle = cva(
  "absolute right-0 top-0 flex items-center justify-center rounded-r-md text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
  {
    variants: {
      size: {
        sm: "h-8 w-8 px-2",
        default: "h-10 w-10 px-3",
        lg: "h-12 w-12 px-4",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface PasswordToggleFieldContextType {
  visible: boolean;
  setVisible: (newVisible: boolean) => void;
  size?: "sm" | "default" | "lg";
}

const PasswordToggleFieldContext =
  React.createContext<PasswordToggleFieldContextType | null>(null);

const PasswordToggleFieldRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof passwordToggleFieldRootStyle> & {
      defaultVisible?: boolean;
      visible?: boolean;
      onVisibleChange?: (visible: boolean) => void;
    }
>(
  (
    {
      className,
      size,
      defaultVisible = false,
      visible: controlledVisible,
      onVisibleChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalVisible, setInternalVisible] =
      React.useState(defaultVisible);

    const isControlled = controlledVisible !== undefined;
    const visible = isControlled ? controlledVisible : internalVisible;

    const setVisible = React.useCallback(
      (newVisible: boolean) => {
        if (!isControlled) {
          setInternalVisible(newVisible);
        }
        onVisibleChange?.(newVisible);
      },
      [isControlled, onVisibleChange]
    );

    const contextValue = React.useMemo(
      () => ({
        visible,
        setVisible,
        size: size || "default",
      }),
      [visible, setVisible, size]
    );

    return (
      <PasswordToggleFieldContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(passwordToggleFieldRootStyle({ size }), className)}
          {...props}
        >
          {children}
        </div>
      </PasswordToggleFieldContext.Provider>
    );
  }
);
PasswordToggleFieldRoot.displayName = "PasswordToggleFieldRoot";

const PasswordToggleFieldInput = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> &
    VariantProps<typeof passwordToggleFieldInputStyle>
>(({ className, size: sizeProp, type, ...props }, ref) => {
  const context = React.useContext(PasswordToggleFieldContext);
  const size = sizeProp || context?.size || "default";
  const inputType = type || (context?.visible ? "text" : "password");

  return (
    <input
      ref={ref}
      type={inputType}
      className={cn(passwordToggleFieldInputStyle({ size }), className)}
      {...props}
    />
  );
});
PasswordToggleFieldInput.displayName = "PasswordToggleFieldInput";

const PasswordToggleFieldToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof passwordToggleFieldToggleStyle>
>(({ className, size: sizeProp, onClick, children, ...props }, ref) => {
  const context = React.useContext(PasswordToggleFieldContext);

  if (!context) {
    throw new Error(
      "PasswordToggleFieldToggle must be used within PasswordToggleFieldRoot"
    );
  }

  const { visible, setVisible } = context;
  const size = sizeProp || context.size || "default";

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(!visible);
    onClick?.(event);
  };

  return (
    <button
      ref={ref}
      type="button"
      className={cn(passwordToggleFieldToggleStyle({ size }), className)}
      onClick={handleClick}
      aria-label={visible ? "Hide password" : "Show password"}
      {...props}
    >
      {children}
    </button>
  );
});
PasswordToggleFieldToggle.displayName = "PasswordToggleFieldToggle";

const PasswordToggleFieldIcon = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    visible?: React.ReactNode;
    hidden?: React.ReactNode;
    size?: "sm" | "default" | "lg";
  }
>(
  (
    {
      className,
      visible: visibleIcon,
      hidden: hiddenIcon,
      size: sizeProp,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(PasswordToggleFieldContext);

    if (!context) {
      throw new Error(
        "PasswordToggleFieldIcon must be used within PasswordToggleFieldRoot"
      );
    }

    const { visible } = context;
    const size = sizeProp || context.size || "default";

    const iconSize = size === "sm" ? 14 : size === "lg" ? 20 : 16;

    const defaultVisibleIcon = <Eye size={iconSize} />;
    const defaultHiddenIcon = <EyeOff size={iconSize} />;

    return (
      <span
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        aria-hidden
        {...props}
      >
        {visible
          ? visibleIcon || defaultVisibleIcon
          : hiddenIcon || defaultHiddenIcon}
      </span>
    );
  }
);
PasswordToggleFieldIcon.displayName = "PasswordToggleFieldIcon";

const PasswordToggleFieldSlot = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & {
    visible?: React.ReactNode;
    hidden?: React.ReactNode;
    render?: (args: { visible: boolean }) => React.ReactNode;
  }
>(
  (
    {
      className,
      visible: visibleContent,
      hidden: hiddenContent,
      render,
      ...props
    },
    ref
  ) => {
    const context = React.useContext(PasswordToggleFieldContext);

    if (!context) {
      throw new Error(
        "PasswordToggleFieldSlot must be used within PasswordToggleFieldRoot"
      );
    }

    const { visible } = context;

    let content: React.ReactNode = null;

    if (render) {
      content = render({ visible });
    } else if (visible && visibleContent) {
      content = visibleContent;
    } else if (!visible && hiddenContent) {
      content = hiddenContent;
    }

    return (
      <span
        ref={ref}
        className={cn("flex items-center justify-center", className)}
        aria-hidden
        {...props}
      >
        {content}
      </span>
    );
  }
);
PasswordToggleFieldSlot.displayName = "PasswordToggleFieldSlot";

export {
  passwordToggleFieldRootStyle,
  passwordToggleFieldInputStyle,
  passwordToggleFieldToggleStyle,
  PasswordToggleFieldRoot,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldIcon,
  PasswordToggleFieldSlot,
};
