import { BaseFieldProps } from './types';
import { cn } from '@/lib/utils';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label/label';
import { Switch } from '@/components/ui/switch/switch';

interface SwitchFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFieldProps<TFieldValues, TName> {
  rules?: object;
  size?: "sm" | "default" | "lg" | "xl";
  variant?:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "success"
    | "warning";
}

export function SwitchField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  name,
  control,
  label,
  description,
  required,
  disabled,
  className,
  rules,
  size,
  variant,
}: SwitchFieldProps<TFieldValues, TName>) {
  const validationRules = {
    required: required
      ? typeof required === "string"
        ? required
        : `${label || name} is required`
      : false,
    ...rules,
  };

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        disabled={disabled}
        render={({ field, fieldState: { error } }) => (
          <>
            <Switch
              id={name}
              checked={field.value || false}
              onCheckedChange={field.onChange}
              disabled={disabled}
              aria-invalid={!!error}
              size={size}
              variant={error ? "destructive" : variant}
            />
            <div className="grid gap-1.5 leading-none">
              {label && (
                <Label
                  htmlFor={name}
                  className={cn(
                    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                    error && "text-destructive"
                  )}
                >
                  {label}
                  {required && <span className="text-destructive ml-1">*</span>}
                </Label>
              )}
              {description && !error && (
                <p className="text-xs text-muted-foreground">{description}</p>
              )}
              {error && (
                <p className="text-xs text-destructive" role="alert">
                  {error.message}
                </p>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
}
