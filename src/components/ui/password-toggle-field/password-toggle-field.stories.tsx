import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User } from 'lucide-react';
import { useState } from 'react';
import {
  PasswordToggleFieldRoot,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldIcon,
} from "./password-toggle-field";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default {
  title: "UI/PasswordToggleField",
  component: PasswordToggleFieldRoot,
  docs: {
    description: {
      component:
        "A password input field with a toggle button to show/hide the password text. Provides secure password entry with visibility control.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Appearance Props
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the password field",
      table: {
        category: "Appearance Props",
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
      },
    },
    // Root Props
    defaultVisible: {
      control: "boolean",
      description: "The initial visibility state of the password when rendered",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    visible: {
      control: "boolean",
      description: "The controlled visibility state of the password",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
      },
    },
    // Event Handlers
    onVisibilityChange: {
      action: "onVisibilityChange",
      description: "Event handler called when the password visibility changes",
      table: {
        category: "Event Handlers",
        type: { summary: "(visible: boolean) => void" },
      },
    },
    // HTML Props
    className: {
      control: "text",
      description:
        "Additional CSS classes to apply to the password field container",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
      },
    },
  },
};

// Basic password toggle field
export const Basic = () => {
  return (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-basic">Password</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-basic"
            placeholder="Enter your password"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>
      <p className="text-sm text-muted-foreground">
        Click the eye icon to toggle password visibility
      </p>
    </div>
  );
};

// Controlled visibility
export const ControlledVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-controlled">Controlled Password Field</Label>
        <PasswordToggleFieldRoot
          visible={isVisible}
          onVisibleChange={setIsVisible}
        >
          <PasswordToggleFieldInput
            id="password-controlled"
            placeholder="Controlled visibility"
            value="MySecretPassword123"
            onChange={() => {}}
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant={isVisible ? "default" : "secondary"}>
          {isVisible ? "Visible" : "Hidden"}
        </Badge>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsVisible(!isVisible)}
        >
          Toggle Externally
        </Button>
      </div>
    </div>
  );
};

// Login form example
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <div className="flex items-center justify-center mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
        </div>
        <CardTitle className="text-center">Sign In</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email-login">Email</Label>
          <Input
            id="email-login"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password-login">Password</Label>
          <PasswordToggleFieldRoot>
            <PasswordToggleFieldInput
              id="password-login"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordToggleFieldToggle>
              <PasswordToggleFieldIcon />
            </PasswordToggleFieldToggle>
          </PasswordToggleFieldRoot>
        </div>

        <div className="flex items-center justify-between text-sm">
          <Label className="flex items-center space-x-2">
            <Checkbox />
            <span>Remember me</span>
          </Label>
          <Button variant="link" className="p-0 h-auto text-sm">
            Forgot password?
          </Button>
        </div>

        <Button className="w-full" disabled={!email || !password}>
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
};

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg";
  defaultVisible?: boolean;
}) => {
  const [value, setValue] = useState("PlaygroundPassword123!");

  return (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-playground">Interactive Password Field</Label>
        <PasswordToggleFieldRoot
          size={args.size}
          defaultVisible={args.defaultVisible}
        >
          <PasswordToggleFieldInput
            id="password-playground"
            placeholder="Enter password..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        <Badge variant="secondary">Size: {args.size || "default"}</Badge>
        <Badge variant="secondary">
          Default Visible: {args.defaultVisible ? "Yes" : "No"}
        </Badge>
        {value && <Badge variant="outline">Length: {value.length}</Badge>}
      </div>

      <p className="text-sm text-muted-foreground">
        Current value: <code>{value}</code>
      </p>
    </div>
  );
};

Playground.args = {
  size: "default",
  defaultVisible: false,
};
