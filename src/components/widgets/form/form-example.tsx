import { Button } from '@/components/ui/button/button';
import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import {
  InputField,
  SelectField,
  CheckboxField,
  TextareaField,
  SwitchField,
} from "./index";

// Define the form data structure
interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  country: string;
  bio: string;
  newsletter: boolean;
  terms: boolean;
  notifications: boolean;
}

// Sample options for the select field
const countryOptions = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "tr", label: "Turkey" },
];

export function FormExample() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      country: "",
      bio: "",
      newsletter: false,
      terms: false,
      notifications: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const onReset = () => {
    reset();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>React Hook Form + RadixUI Example</CardTitle>
        <CardDescription>
          A comprehensive form example using react-hook-form with RadixUI
          components
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                name="firstName"
                control={control}
                label="First Name"
                placeholder="Enter your first name"
                required
                inputSize="default"
                rules={{
                  minLength: {
                    value: 2,
                    message: "First name must be at least 2 characters",
                  },
                }}
              />

              <InputField
                name="lastName"
                control={control}
                label="Last Name"
                placeholder="Enter your last name"
                required
                inputSize="default"
                rules={{
                  minLength: {
                    value: 2,
                    message: "Last name must be at least 2 characters",
                  },
                }}
              />
            </div>

            <SelectField
              name="country"
              control={control}
              label="Country"
              placeholder="Select your country"
              options={countryOptions}
              required
              description="Choose your country of residence"
            />
          </div>

          {/* Account Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Account Information</h3>

            <InputField
              name="email"
              control={control}
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              required
              inputSize="default"
              rules={{
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
            />

            <InputField
              name="password"
              control={control}
              type="password"
              label="Password"
              placeholder="Enter your password"
              required
              inputSize="default"
              rules={{
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                  message:
                    "Password must contain uppercase, lowercase, and number",
                },
              }}
            />
          </div>

          {/* Additional Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Additional Information</h3>

            <TextareaField
              name="bio"
              control={control}
              label="Bio"
              placeholder="Tell us about yourself..."
              rows={4}
              description="Optional: Share a brief description about yourself"
              rules={{
                maxLength: {
                  value: 500,
                  message: "Bio must be less than 500 characters",
                },
              }}
            />
          </div>

          {/* Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Preferences</h3>

            <CheckboxField
              name="newsletter"
              control={control}
              label="Subscribe to newsletter"
              description="Receive updates about new features and announcements"
            />

            <SwitchField
              name="notifications"
              control={control}
              label="Push notifications"
              description="Get real-time notifications on your device"
              size="default"
              variant="default"
            />

            <CheckboxField
              name="terms"
              control={control}
              label="I agree to the Terms and Conditions"
              required
              rules={{
                required: "You must agree to the terms and conditions",
              }}
            />
          </div>

          {/* Form Actions */}
          <div className="flex gap-4 pt-4">
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={onReset}
              disabled={isSubmitting}
            >
              Reset
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
