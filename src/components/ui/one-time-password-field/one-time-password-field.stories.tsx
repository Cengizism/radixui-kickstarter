import { Label } from '../label/label';
import { useState } from 'react';
import {
  OneTimePasswordField,
  OneTimePasswordFieldSlot,
  OneTimePasswordFieldGroup,
  OneTimePasswordFieldSeparator,
} from "./one-time-password-field";

export default {
  title: "UI/OneTimePasswordField",
  component: OneTimePasswordField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Appearance Props
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the OTP field",
      table: {
        category: "Appearance Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the OTP field layout",
      table: {
        category: "Appearance Props",
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    // Root Props
    maxLength: {
      control: { type: "number", min: 2, max: 12 },
      description: "Maximum number of characters/digits allowed",
      table: {
        category: "Root Props",
        type: { summary: "number" },
        defaultValue: { summary: "6" },
      },
    },
    value: {
      control: "text",
      description: "The controlled value of the OTP field",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    defaultValue: {
      control: "text",
      description: "The default value when uncontrolled",
      table: {
        category: "Root Props",
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "When true, prevents user interaction",
      table: {
        category: "State Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    // Event Handlers
    onChange: {
      action: "onChange",
      description: "Called when the value changes",
      table: {
        category: "Event Handlers",
        type: { summary: "(value: string) => void" },
      },
    },
    onComplete: {
      action: "onComplete",
      description: "Called when all fields are filled",
      table: {
        category: "Event Handlers",
        type: { summary: "(value: string) => void" },
      },
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
