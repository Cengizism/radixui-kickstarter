import { BaseFieldProps } from './types';
import { cn } from '@/lib/utils';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Label } from '@/components/ui/label/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFieldProps<TFieldValues, TName> {
  options: SelectOption[];
  placeholder?: string;
  rules?: object;
}

export function SelectField<
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
  options,
  placeholder = "Select an option...",
  rules,
}: SelectFieldProps<TFieldValues, TName>) {
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
            <Select
              value={field.value || ""}
              onValueChange={field.onChange}
              disabled={disabled}
            >
              <SelectTrigger
                id={name}
                aria-invalid={!!error}
                className={error ? "border-destructive" : ""}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
