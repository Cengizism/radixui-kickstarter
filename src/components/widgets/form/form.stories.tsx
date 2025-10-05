import {
  CheckboxField,
  InputField,
  SelectField,
  TextareaField
  } from './index';
import { FormExample } from './form-example';
import { useForm } from 'react-hook-form';
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta = {
  title: "Widgets/Form",
  component: FormExample,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "React Hook Form integration with RadixUI components. Provides type-safe form fields with validation and error handling.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// Complete form example
export const CompleteForm: Story = {
  render: () => <FormExample />,
  parameters: {
    docs: {
      description: {
        story:
          "A complete form example showcasing all form field components with validation.",
      },
    },
  },
};

// Individual field examples
export const InputFieldExample: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        email: "",
        password: "",
      },
    });

    return (
      <div className="space-y-4 max-w-md">
        <InputField
          name="email"
          control={control}
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          required
          inputSize="default"
          description="We'll never share your email"
        />

        <InputField
          name="password"
          control={control}
          type="password"
          label="Password"
          placeholder="Enter your password"
          required
          inputSize="default"
          variant="default"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Individual input field components with different types and validation.",
      },
    },
  },
};

export const SelectFieldExample: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        country: "",
        framework: "",
      },
    });

    const countryOptions = [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "uk", label: "United Kingdom" },
      { value: "de", label: "Germany" },
    ];

    const frameworkOptions = [
      { value: "react", label: "React" },
      { value: "vue", label: "Vue.js" },
      { value: "angular", label: "Angular" },
      { value: "svelte", label: "Svelte", disabled: true },
    ];

    return (
      <div className="space-y-4 max-w-md">
        <SelectField
          name="country"
          control={control}
          label="Country"
          placeholder="Select your country"
          options={countryOptions}
          required
          description="Choose your country of residence"
        />

        <SelectField
          name="framework"
          control={control}
          label="Preferred Framework"
          placeholder="Select a framework"
          options={frameworkOptions}
          description="Some options may be disabled"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Select field components with different options and disabled states.",
      },
    },
  },
};

export const CheckboxFieldExample: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        newsletter: false,
        terms: false,
        marketing: false,
      },
    });

    return (
      <div className="space-y-4 max-w-md">
        <CheckboxField
          name="newsletter"
          control={control}
          label="Subscribe to newsletter"
          description="Receive weekly updates about new features"
        />

        <CheckboxField
          name="terms"
          control={control}
          label="I agree to the Terms and Conditions"
          required
        />

        <CheckboxField
          name="marketing"
          control={control}
          label="Send me marketing emails"
          description="We'll send you promotional content and special offers"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Checkbox field components with labels and descriptions.",
      },
    },
  },
};

export const TextareaFieldExample: Story = {
  render: () => {
    const { control } = useForm({
      defaultValues: {
        bio: "",
        feedback: "",
      },
    });

    return (
      <div className="space-y-4 max-w-md">
        <TextareaField
          name="bio"
          control={control}
          label="Bio"
          placeholder="Tell us about yourself..."
          rows={3}
          description="Share a brief description about yourself (optional)"
        />

        <TextareaField
          name="feedback"
          control={control}
          label="Feedback"
          placeholder="Your feedback..."
          rows={4}
          required
          rules={{
            minLength: {
              value: 10,
              message: "Feedback must be at least 10 characters",
            },
            maxLength: {
              value: 500,
              message: "Feedback must be less than 500 characters",
            },
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Textarea field components with different sizes and validation rules.",
      },
    },
  },
};
