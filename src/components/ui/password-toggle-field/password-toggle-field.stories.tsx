import { Alert, AlertDescription } from './alert';
import { Badge } from '../badge/badge';
import { Button } from './button';
import {
  CheckCircle2,
  Eye,
  Lock,
  Shield,
  User,
  XCircle
  } from 'lucide-react';
import { Label } from '../label/label';
import { useState } from 'react';
import {
  PasswordToggleFieldRoot,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldIcon,
  PasswordToggleFieldSlot,
} from "./password-toggle-field";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/card";

export default {
  title: "UI/PasswordToggleField",
  component: PasswordToggleFieldRoot,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    defaultVisible: {
      control: "boolean",
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

// Size variations
export const SizeVariations = () => {
  return (
    <div className="space-y-8 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-sm">Small Password Field</Label>
        <PasswordToggleFieldRoot size="sm">
          <PasswordToggleFieldInput
            id="password-sm"
            placeholder="Small password"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-default">Default Password Field</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-default"
            placeholder="Default password"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-lg">Large Password Field</Label>
        <PasswordToggleFieldRoot size="lg">
          <PasswordToggleFieldInput
            id="password-lg"
            placeholder="Large password"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>
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

// Custom icons
export const CustomIcons = () => {
  return (
    <div className="space-y-8 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-custom1">Custom Lock Icons</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-custom1"
            placeholder="Custom icons"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon visible={<Lock className="h-4 w-4" />} />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-custom2">Using Slot Component</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-custom2"
            placeholder="Custom slot"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldSlot
              visible={
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span className="text-xs">Hide</span>
                </div>
              }
            />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-custom3">Render Prop Pattern</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-custom3"
            placeholder="Render prop"
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldSlot
              render={({ visible }) => (
                <div className="flex items-center gap-1">
                  {visible ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-gray-400" />
                  )}
                  <span className="text-xs">
                    {visible ? "Visible" : "Hidden"}
                  </span>
                </div>
              )}
            />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
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
          <input
            id="email-login"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded border-gray-300" />
            <span>Remember me</span>
          </label>
          <button className="text-primary hover:underline">
            Forgot password?
          </button>
        </div>

        <Button className="w-full" disabled={!email || !password}>
          Sign In
        </Button>
      </CardContent>
    </Card>
  );
};

// Registration form example
export const RegistrationForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showRequirements, setShowRequirements] = useState(false);

  const requirements = [
    { text: "At least 8 characters", met: password.length >= 8 },
    { text: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { text: "Contains number", met: /\d/.test(password) },
    { text: "Contains special character", met: /[!@#$%^&*]/.test(password) },
  ];

  const passwordsMatch = password === confirmPassword && password !== "";
  const allRequirementsMet = requirements.every((req) => req.met);

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Set up your password with the requirements below
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password-new">New Password</Label>
          <PasswordToggleFieldRoot defaultVisible={false}>
            <PasswordToggleFieldInput
              id="password-new"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setShowRequirements(true);
              }}
            />
            <PasswordToggleFieldToggle>
              <PasswordToggleFieldIcon />
            </PasswordToggleFieldToggle>
          </PasswordToggleFieldRoot>
        </div>

        {showRequirements && (
          <div className="space-y-2">
            <Label className="text-sm font-medium">Password Requirements</Label>
            <div className="space-y-1">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 text-sm ${
                    req.met ? "text-green-600" : "text-muted-foreground"
                  }`}
                >
                  {req.met ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : (
                    <XCircle className="h-3 w-3" />
                  )}
                  {req.text}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="password-confirm">Confirm Password</Label>
          <PasswordToggleFieldRoot>
            <PasswordToggleFieldInput
              id="password-confirm"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <PasswordToggleFieldToggle>
              <PasswordToggleFieldIcon />
            </PasswordToggleFieldToggle>
          </PasswordToggleFieldRoot>

          {confirmPassword && (
            <div
              className={`flex items-center gap-2 text-sm ${
                passwordsMatch ? "text-green-600" : "text-red-600"
              }`}
            >
              {passwordsMatch ? (
                <CheckCircle2 className="h-3 w-3" />
              ) : (
                <XCircle className="h-3 w-3" />
              )}
              {passwordsMatch ? "Passwords match" : "Passwords do not match"}
            </div>
          )}
        </div>

        <Button
          className="w-full"
          disabled={!allRequirementsMet || !passwordsMatch}
        >
          Create Account
        </Button>
      </CardContent>
    </Card>
  );
};

// Security settings example
export const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>
          Update your password to keep your account secure
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            Choose a strong password that you haven't used before.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <PasswordToggleFieldRoot>
              <PasswordToggleFieldInput
                id="current-password"
                placeholder="Enter current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <PasswordToggleFieldToggle>
                <PasswordToggleFieldIcon />
              </PasswordToggleFieldToggle>
            </PasswordToggleFieldRoot>
          </div>

          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <PasswordToggleFieldRoot size="lg">
              <PasswordToggleFieldInput
                id="new-password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <PasswordToggleFieldToggle>
                <PasswordToggleFieldIcon />
              </PasswordToggleFieldToggle>
            </PasswordToggleFieldRoot>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm-new-password">Confirm New Password</Label>
            <PasswordToggleFieldRoot size="lg">
              <PasswordToggleFieldInput
                id="confirm-new-password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <PasswordToggleFieldToggle>
                <PasswordToggleFieldIcon />
              </PasswordToggleFieldToggle>
            </PasswordToggleFieldRoot>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button
            className="flex-1"
            disabled={
              !currentPassword ||
              !newPassword ||
              newPassword !== confirmPassword
            }
          >
            Update Password
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Disabled state
export const DisabledState = () => {
  return (
    <div className="space-y-8 w-80">
      <div className="space-y-2">
        <Label htmlFor="password-disabled">Disabled Password Field</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-disabled"
            placeholder="Disabled field"
            value="DisabledPassword123"
            disabled
            onChange={() => {}}
          />
          <PasswordToggleFieldToggle disabled>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password-readonly">Read-only Password Field</Label>
        <PasswordToggleFieldRoot>
          <PasswordToggleFieldInput
            id="password-readonly"
            value="ReadOnlyPassword123"
            readOnly
            onChange={() => {}}
          />
          <PasswordToggleFieldToggle>
            <PasswordToggleFieldIcon />
          </PasswordToggleFieldToggle>
        </PasswordToggleFieldRoot>
      </div>
    </div>
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
