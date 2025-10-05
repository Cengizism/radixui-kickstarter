import { BaseFieldProps } from './types';
import { cn } from '@/lib/utils';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label/label';
import { Textarea } from '@/components/ui/textarea/textarea';

interface TextareaFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFieldProps<TFieldValues, TName> {
  placeholder?: string;
  rows?: number;
  rules?: object;
}

export function TextareaField<
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
  placeholder,
  rows,
  rules,
}: TextareaFieldProps<TFieldValues, TName>) {
  const validationRules = {
    required: required
      ? typeof required === "string"
        ? required
        : `${label || name} is required`
      : false,
    ...rules,
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={name}>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}

      <Controller
        name={name}
        control={control}
        rules={validationRules}
        disabled={disabled}
        render={({ field, fieldState: { error } }) => (
          <>
            <Textarea
              {...field}
              id={name}
              placeholder={placeholder}
              rows={rows}
              disabled={disabled}
              aria-invalid={!!error}
              className={cn(
                error && "border-destructive focus-visible:ring-destructive"
              )}
            />
            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error.message}
              </p>
            )}
          </>
        )}
      />

      {description && !control._formState.errors[name] && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
