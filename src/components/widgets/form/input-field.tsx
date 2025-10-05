import React from 'react';
import { BaseFieldProps } from './types';
import { cn } from '@/lib/utils';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';

interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends BaseFieldProps<TFieldValues, TName> {
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  rules?: object;
  autoComplete?: string;
  inputSize?: "sm" | "default" | "lg";
  variant?: "default" | "ghost" | "destructive";
}

export function InputField<
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
  type = "text",
  placeholder,
  inputSize,
  variant,
  rules,
  autoComplete,
}: InputFieldProps<TFieldValues, TName>) {
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
        render={({ field, fieldState: { error } }) => {
          return (
            <>
              <Input
                {...field}
                id={name}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                autoComplete={autoComplete}
                aria-invalid={!!error}
                // @ts-ignore - TypeScript has conflict between HTML size and variant size
                size={inputSize}
                variant={error ? "destructive" : variant}
              />
              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error.message}
                </p>
              )}
            </>
          );
        }}
      />

      {description && !control._formState.errors[name] && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
