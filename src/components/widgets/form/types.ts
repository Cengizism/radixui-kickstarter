import { Control, FieldPath, FieldValues } from 'react-hook-form';

// Base field props that all form fields will share
export interface BaseFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
  control: Control<TFieldValues>;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

// Form validation rules
export interface ValidationRules {
  required?: boolean | string;
  min?: number | string;
  max?: number | string;
  minLength?: number | string;
  maxLength?: number | string;
  pattern?: RegExp | string;
}
