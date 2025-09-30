import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { Label } from '../label/label';
import { useState } from 'react';
import {
  OneTimePasswordField,
  OneTimePasswordFieldSlot,
  OneTimePasswordFieldGroup,
  OneTimePasswordFieldSeparator,
} from "./one-time-password-field";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/card";
import {
  Lock,
  Shield,
  Smartphone,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default {
  title: "UI/OneTimePasswordField",
  component: OneTimePasswordField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    maxLength: {
      control: "number",
    },
  },
};

// Basic OTP field
export const Basic = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <Label htmlFor="otp-basic">Enter verification code</Label>
      <OneTimePasswordField
        id="otp-basic"
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <OneTimePasswordFieldGroup>
          {Array.from({ length: 6 }).map((_, index) => (
            <OneTimePasswordFieldSlot key={index} index={index} />
          ))}
        </OneTimePasswordFieldGroup>
      </OneTimePasswordField>
      <p className="text-sm text-muted-foreground">Current value: {value}</p>
    </div>
  );
};

// Size variations
export const SizeVariations = () => {
  const [smallValue, setSmallValue] = useState("");
  const [defaultValue, setDefaultValue] = useState("");
  const [largeValue, setLargeValue] = useState("");

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Label>Small OTP Field</Label>
        <OneTimePasswordField
          maxLength={4}
          value={smallValue}
          onChange={setSmallValue}
        >
          <OneTimePasswordFieldGroup size="sm">
            {Array.from({ length: 4 }).map((_, index) => (
              <OneTimePasswordFieldSlot key={index} index={index} size="sm" />
            ))}
          </OneTimePasswordFieldGroup>
        </OneTimePasswordField>
        <p className="text-xs text-muted-foreground">Value: {smallValue}</p>
      </div>

      <div className="space-y-4">
        <Label>Default OTP Field</Label>
        <OneTimePasswordField
          maxLength={6}
          value={defaultValue}
          onChange={setDefaultValue}
        >
          <OneTimePasswordFieldGroup>
            {Array.from({ length: 6 }).map((_, index) => (
              <OneTimePasswordFieldSlot key={index} index={index} />
            ))}
          </OneTimePasswordFieldGroup>
        </OneTimePasswordField>
        <p className="text-sm text-muted-foreground">Value: {defaultValue}</p>
      </div>

      <div className="space-y-4">
        <Label>Large OTP Field</Label>
        <OneTimePasswordField
          maxLength={8}
          value={largeValue}
          onChange={setLargeValue}
        >
          <OneTimePasswordFieldGroup size="lg">
            {Array.from({ length: 8 }).map((_, index) => (
              <OneTimePasswordFieldSlot key={index} index={index} size="lg" />
            ))}
          </OneTimePasswordFieldGroup>
        </OneTimePasswordField>
        <p className="text-base text-muted-foreground">Value: {largeValue}</p>
      </div>
    </div>
  );
};

// Segmented OTP with separators
export const SegmentedOTP = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <Label htmlFor="otp-segmented">Enter your access code</Label>
      <OneTimePasswordField
        id="otp-segmented"
        maxLength={6}
        value={value}
        onChange={setValue}
      >
        <OneTimePasswordFieldGroup>
          <OneTimePasswordFieldSlot index={0} />
          <OneTimePasswordFieldSlot index={1} />
          <OneTimePasswordFieldSlot index={2} />
          <OneTimePasswordFieldSeparator />
          <OneTimePasswordFieldSlot index={3} />
          <OneTimePasswordFieldSlot index={4} />
          <OneTimePasswordFieldSlot index={5} />
        </OneTimePasswordFieldGroup>
      </OneTimePasswordField>
      <p className="text-sm text-muted-foreground">
        Format: XXX-XXX | Current: {value}
      </p>
    </div>
  );
};

// Phone verification example
export const PhoneVerification = () => {
  const [value, setValue] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleComplete = (value: string) => {
    setValue(value);
    if (value.length === 6) {
      setIsVerifying(true);
      // Simulate verification
      setTimeout(() => {
        setIsVerifying(false);
        setIsComplete(true);
      }, 2000);
    }
  };

  const handleResend = () => {
    setValue("");
    setIsComplete(false);
    setIsVerifying(false);
    // Simulate resend (would make API call in real app)
  };

  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <CardTitle>Phone Verification</CardTitle>
        <CardDescription>
          We've sent a 6-digit code to your phone number
          <br />
          <strong>+1 (555) 123-4567</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="phone-otp">Verification Code</Label>
          <div className="flex justify-center">
            <OneTimePasswordField
              id="phone-otp"
              maxLength={6}
              value={value}
              onChange={handleComplete}
              disabled={isVerifying || isComplete}
            >
              <OneTimePasswordFieldGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <OneTimePasswordFieldSlot key={index} index={index} />
                ))}
              </OneTimePasswordFieldGroup>
            </OneTimePasswordField>
          </div>
        </div>

        {isVerifying && (
          <div className="flex items-center justify-center space-x-2 text-blue-600">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
            <span className="text-sm">Verifying...</span>
          </div>
        )}

        {isComplete && (
          <div className="flex items-center justify-center space-x-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Verified successfully!</span>
          </div>
        )}

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Didn't receive the code?
          </span>
          <button
            onClick={handleResend}
            className="text-blue-600 hover:underline"
            disabled={isVerifying || isComplete}
          >
            Resend
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

// Email verification example
export const EmailVerification = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setError("");

    if (newValue.length === 8) {
      // Simulate validation
      if (newValue !== "12345678") {
        setError("Invalid code. Please try again.");
      }
    }
  };

  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <CardTitle>Email Verification</CardTitle>
        <CardDescription>
          Enter the 8-digit code sent to
          <br />
          <strong>user@example.com</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email-otp">Verification Code</Label>
          <div className="flex justify-center">
            <OneTimePasswordField
              id="email-otp"
              maxLength={8}
              value={value}
              onChange={handleChange}
            >
              <OneTimePasswordFieldGroup>
                <OneTimePasswordFieldSlot index={0} />
                <OneTimePasswordFieldSlot index={1} />
                <OneTimePasswordFieldSlot index={2} />
                <OneTimePasswordFieldSlot index={3} />
                <OneTimePasswordFieldSeparator />
                <OneTimePasswordFieldSlot index={4} />
                <OneTimePasswordFieldSlot index={5} />
                <OneTimePasswordFieldSlot index={6} />
                <OneTimePasswordFieldSlot index={7} />
              </OneTimePasswordFieldGroup>
            </OneTimePasswordField>
          </div>
          {error && (
            <div className="flex items-center justify-center space-x-2 text-red-600">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm">{error}</span>
            </div>
          )}
        </div>

        <div className="text-center">
          <Badge variant="outline" className="text-xs">
            Code expires in 10:00
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

// Two-factor authentication example
export const TwoFactorAuth = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (value.length !== 6) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
          <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
        <CardTitle>Two-Factor Authentication</CardTitle>
        <CardDescription>
          Enter the 6-digit code from your authenticator app
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="2fa-otp">Authentication Code</Label>
          <div className="flex justify-center">
            <OneTimePasswordField
              id="2fa-otp"
              maxLength={6}
              value={value}
              onChange={setValue}
              disabled={isLoading}
            >
              <OneTimePasswordFieldGroup>
                {Array.from({ length: 6 }).map((_, index) => (
                  <OneTimePasswordFieldSlot key={index} index={index} />
                ))}
              </OneTimePasswordFieldGroup>
            </OneTimePasswordField>
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          className="w-full"
          disabled={value.length !== 6 || isLoading}
        >
          {isLoading ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Verifying...
            </>
          ) : (
            <>
              <Lock className="mr-2 h-4 w-4" />
              Verify & Continue
            </>
          )}
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          Can't access your authenticator app?{" "}
          <button className="text-blue-600 hover:underline">
            Use backup code
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

// Vertical orientation
export const VerticalOrientation = () => {
  const [value, setValue] = useState("");

  return (
    <div className="space-y-4">
      <Label htmlFor="otp-vertical">Vertical OTP Field</Label>
      <OneTimePasswordField
        id="otp-vertical"
        maxLength={4}
        value={value}
        onChange={setValue}
        orientation="vertical"
      >
        <OneTimePasswordFieldGroup orientation="vertical">
          {Array.from({ length: 4 }).map((_, index) => (
            <OneTimePasswordFieldSlot key={index} index={index} />
          ))}
        </OneTimePasswordFieldGroup>
      </OneTimePasswordField>
      <p className="text-sm text-muted-foreground">Value: {value}</p>
    </div>
  );
};

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg";
  orientation?: "horizontal" | "vertical";
  maxLength?: number;
}) => {
  const [value, setValue] = useState("");
  const maxLength = args.maxLength || 6;

  return (
    <div className="space-y-4">
      <Label htmlFor="otp-playground">OTP Playground</Label>
      <OneTimePasswordField
        id="otp-playground"
        maxLength={maxLength}
        orientation={args.orientation}
        value={value}
        onChange={setValue}
      >
        <OneTimePasswordFieldGroup
          size={args.size}
          orientation={args.orientation}
        >
          {Array.from({ length: maxLength }).map((_, index) => (
            <OneTimePasswordFieldSlot
              key={index}
              index={index}
              size={args.size}
            />
          ))}
        </OneTimePasswordFieldGroup>
      </OneTimePasswordField>
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>Size: {args.size || "default"}</p>
        <p>Orientation: {args.orientation || "horizontal"}</p>
        <p>Max Length: {maxLength}</p>
        <p>Current Value: {value}</p>
      </div>
    </div>
  );
};

Playground.args = {
  size: "default",
  orientation: "horizontal",
  maxLength: 6,
};
