import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Label } from '@/components/ui/label';
import { Lock, Unlock } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PasswordToggleFieldRoot,
  PasswordToggleFieldInput,
  PasswordToggleFieldToggle,
  PasswordToggleFieldIcon,
  PasswordToggleFieldSlot,
} from "@/components/ui/password-toggle-field";

function PasswordToggleFieldDemo() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Password Toggle Field</h1>
        <p className="text-xl text-muted-foreground">
          A password input field with an integrated button to toggle the value's
          visibility.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Usage</h2>
          <p className="text-muted-foreground mb-4">
            A simple password input with a toggle button to show/hide the
            password.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label htmlFor="password-basic">Password</Label>
              <PasswordToggleFieldRoot>
                <PasswordToggleFieldInput
                  id="password-basic"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldIcon />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
              <p className="text-sm text-muted-foreground">
                Click the eye icon to toggle password visibility.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Size Variants */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Size Variants</h2>
          <p className="text-muted-foreground mb-4">
            Password fields come in different sizes: small, default, and large.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Small Size
                <Badge variant="secondary">sm</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PasswordToggleFieldRoot size="sm">
                <PasswordToggleFieldInput placeholder="Small password" />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldIcon />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Default Size
                <Badge variant="secondary">default</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PasswordToggleFieldRoot>
                <PasswordToggleFieldInput placeholder="Default password" />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldIcon />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Large Size
                <Badge variant="secondary">lg</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <PasswordToggleFieldRoot size="lg">
                <PasswordToggleFieldInput placeholder="Large password" />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldIcon />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Custom Icons */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Custom Icons</h2>
          <p className="text-muted-foreground mb-4">
            Use custom icons for the visibility toggle button.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label htmlFor="password-custom">Password with Lock Icons</Label>
              <PasswordToggleFieldRoot>
                <PasswordToggleFieldInput
                  id="password-custom"
                  placeholder="Enter password"
                />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldIcon
                    visible={<Unlock className="h-4 w-4" />}
                    hidden={<Lock className="h-4 w-4" />}
                  />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
              <p className="text-sm text-muted-foreground">
                Uses lock/unlock icons instead of eye icons.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* With Slot */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">With Slot</h2>
          <p className="text-muted-foreground mb-4">
            Use the Slot component for more flexibility with custom content.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Emoji Slot</CardTitle>
              <CardDescription>
                Using emojis as visibility indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordToggleFieldRoot>
                <PasswordToggleFieldInput placeholder="Password with emojis" />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldSlot visible="🙊" hidden="🙈" />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text Slot</CardTitle>
              <CardDescription>
                Using text as visibility indicators
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PasswordToggleFieldRoot>
                <PasswordToggleFieldInput placeholder="Password with text" />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldSlot
                    visible={<span className="text-xs font-medium">HIDE</span>}
                    hidden={<span className="text-xs font-medium">SHOW</span>}
                  />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Slot with Render Prop */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Slot with Render Prop</h2>
          <p className="text-muted-foreground mb-4">
            Use a render prop for dynamic content based on visibility state.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label htmlFor="password-render">Dynamic Content</Label>
              <PasswordToggleFieldRoot>
                <PasswordToggleFieldInput
                  id="password-render"
                  placeholder="Password with dynamic content"
                />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldSlot
                    render={({ visible }) => (
                      <div
                        className={`w-4 h-4 rounded transition-colors ${
                          visible ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 bg-white rounded-full m-1 transition-transform ${
                            visible ? "translate-x-0" : "translate-x-0"
                          }`}
                        />
                      </div>
                    )}
                  />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
              <p className="text-sm text-muted-foreground">
                Shows a colored indicator that changes based on visibility
                state.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Controlled State */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Controlled State</h2>
          <p className="text-muted-foreground mb-4">
            Control the visibility state externally for more complex
            interactions.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="password-controlled">Controlled Password</Label>
                <Badge variant={isVisible ? "default" : "secondary"}>
                  {isVisible ? "Visible" : "Hidden"}
                </Badge>
              </div>
              <PasswordToggleFieldRoot
                visible={isVisible}
                onVisibleChange={setIsVisible}
              >
                <PasswordToggleFieldInput
                  id="password-controlled"
                  placeholder="Externally controlled visibility"
                />
                <PasswordToggleFieldToggle>
                  <PasswordToggleFieldIcon />
                </PasswordToggleFieldToggle>
              </PasswordToggleFieldRoot>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsVisible(true)}
                >
                  Show Password
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsVisible(false)}
                >
                  Hide Password
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Integration */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Form Integration</h2>
          <p className="text-muted-foreground mb-4">
            Password fields integrated in a complete form with validation.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (confirmPassword === loginPassword) {
                  alert("✅ Passwords match!");
                } else {
                  alert("❌ Passwords don't match!");
                }
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <PasswordToggleFieldRoot>
                  <PasswordToggleFieldInput
                    id="new-password"
                    placeholder="Create a new password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  <PasswordToggleFieldToggle>
                    <PasswordToggleFieldIcon />
                  </PasswordToggleFieldToggle>
                </PasswordToggleFieldRoot>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <PasswordToggleFieldRoot>
                  <PasswordToggleFieldInput
                    id="confirm-password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <PasswordToggleFieldToggle>
                    <PasswordToggleFieldIcon />
                  </PasswordToggleFieldToggle>
                </PasswordToggleFieldRoot>
                {confirmPassword &&
                  loginPassword &&
                  confirmPassword !== loginPassword && (
                    <p className="text-sm text-destructive">
                      Passwords don't match
                    </p>
                  )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={
                  !loginPassword ||
                  !confirmPassword ||
                  loginPassword !== confirmPassword
                }
              >
                Create Account
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Props Reference */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Props Reference</h2>
          <p className="text-muted-foreground mb-4">
            Available props and variants for the Password Toggle Field
            components.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>PasswordToggleFieldRoot</CardTitle>
              <CardDescription>Root container component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  size: "sm" | "default" | "lg"
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Size of the password field
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  defaultVisible?: boolean
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Initial visibility state (uncontrolled)
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  visible?: boolean
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Controlled visibility state
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  onVisibleChange?: (visible: boolean) =&gt; void
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Callback when visibility changes
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>PasswordToggleFieldIcon & Slot</CardTitle>
              <CardDescription>
                Toggle button content components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  visible?: React.ReactNode
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Content when password is visible
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  hidden?: React.ReactNode
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Content when password is hidden
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  render?: (state) =&gt; ReactNode
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Render prop for dynamic content (Slot only)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/docs/password-toggle-field")({
  component: PasswordToggleFieldDemo,
});
