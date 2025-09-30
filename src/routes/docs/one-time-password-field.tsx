import * as React from 'react';
import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Label } from '@/components/ui/elements/label';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/modules/card";
import {
  OneTimePasswordField,
  OneTimePasswordFieldSlot,
  OneTimePasswordFieldGroup,
  OneTimePasswordFieldSeparator,
} from "@/components/ui/elements/one-time-password-field";

function OneTimePasswordFieldDemo() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");

  const handleSubmit = (
    e: React.FormEvent,
    value: string,
    expectedCode: string
  ) => {
    e.preventDefault();
    if (value === expectedCode) {
      alert("✅ Code verified successfully!");
    } else {
      alert("❌ Invalid code. Try again.");
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">One-Time Password Field</h1>
        <p className="text-xl text-muted-foreground">
          A group of single-character text inputs to handle one-time password
          verification.
        </p>
      </div>

      {/* Basic Usage */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Usage</h2>
          <p className="text-muted-foreground mb-4">
            A simple 6-digit OTP input field with automatic focus management.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label htmlFor="otp-basic">Enter verification code</Label>
              <OneTimePasswordField
                maxLength={6}
                value={value1}
                onChange={setValue1}
                id="otp-basic"
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup>
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot key={index} index={index} />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
              <p className="text-sm text-muted-foreground">
                Current value:{" "}
                <code className="bg-muted p-1 rounded">
                  {value1 || "empty"}
                </code>
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
            OTP fields come in different sizes: small, default, and large.
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
              <OneTimePasswordField
                maxLength={4}
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup size="sm">
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot
                        key={index}
                        index={index}
                        size="sm"
                      />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
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
              <OneTimePasswordField
                maxLength={4}
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup>
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot key={index} index={index} />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
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
              <OneTimePasswordField
                maxLength={4}
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup size="lg">
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot
                        key={index}
                        index={index}
                        size="lg"
                      />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Segmented with Separators */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Segmented with Separators
          </h2>
          <p className="text-muted-foreground mb-4">
            OTP field with visual separators between groups of inputs.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label htmlFor="otp-segmented">Enter 6-digit code</Label>
              <OneTimePasswordField
                maxLength={6}
                value={value2}
                onChange={setValue2}
                id="otp-segmented"
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup>
                    {slots.map((_, index) => {
                      if (index === 3) {
                        return (
                          <React.Fragment key={`group-${index}`}>
                            <OneTimePasswordFieldSeparator />
                            <OneTimePasswordFieldSlot index={index} />
                          </React.Fragment>
                        );
                      }
                      return (
                        <OneTimePasswordFieldSlot key={index} index={index} />
                      );
                    })}
                  </OneTimePasswordFieldGroup>
                )}
              />
              <p className="text-sm text-muted-foreground">
                Grouped as XXX-XXX format
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Vertical Orientation */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Vertical Orientation</h2>
          <p className="text-muted-foreground mb-4">
            OTP field with vertical layout for mobile or compact interfaces.
          </p>
        </div>

        <Card>
          <CardContent className="p-6 flex justify-center">
            <div className="space-y-4">
              <Label htmlFor="otp-vertical" className="text-center block">
                Enter 4-digit PIN
              </Label>
              <OneTimePasswordField
                maxLength={4}
                id="otp-vertical"
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup orientation="vertical">
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot key={index} index={index} />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Integration */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Form Integration</h2>
          <p className="text-muted-foreground mb-4">
            OTP field integrated with form submission and validation.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <form
              onSubmit={(e) => handleSubmit(e, value3, "123456")}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="otp-form">Verification Code</Label>
                <OneTimePasswordField
                  maxLength={6}
                  value={value3}
                  onChange={setValue3}
                  id="otp-form"
                  render={({ slots }) => (
                    <OneTimePasswordFieldGroup>
                      {slots.map((_, index) => (
                        <OneTimePasswordFieldSlot key={index} index={index} />
                      ))}
                    </OneTimePasswordFieldGroup>
                  )}
                />
                <p className="text-xs text-muted-foreground">
                  Expected code:{" "}
                  <code className="bg-muted p-1 rounded">123456</code>
                </p>
              </div>
              <Button
                type="submit"
                disabled={value3.length !== 6}
                className="w-full"
              >
                Verify Code
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Auto-Submit Example */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Auto-Submit</h2>
          <p className="text-muted-foreground mb-4">
            Automatically submit when all digits are entered.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Label htmlFor="otp-auto">Auto-submit Code</Label>
              <OneTimePasswordField
                maxLength={4}
                value={value4}
                onChange={(newValue) => {
                  setValue4(newValue);
                  if (newValue.length === 4) {
                    setTimeout(() => {
                      if (newValue === "1234") {
                        alert("✅ Auto-submitted successfully!");
                        setValue4("");
                      } else {
                        alert("❌ Invalid code. Try 1234");
                        setValue4("");
                      }
                    }, 100);
                  }
                }}
                id="otp-auto"
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup>
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot key={index} index={index} />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
              <p className="text-xs text-muted-foreground">
                Try entering: <code className="bg-muted p-1 rounded">1234</code>
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Controlled vs Uncontrolled */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Different Input Types</h2>
          <p className="text-muted-foreground mb-4">
            Examples of numeric-only and alphanumeric OTP fields.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Numeric Only</CardTitle>
              <CardDescription>Only accepts numbers (0-9)</CardDescription>
            </CardHeader>
            <CardContent>
              <OneTimePasswordField
                maxLength={6}
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup>
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot
                        key={index}
                        index={index}
                        size="sm"
                      />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alphanumeric</CardTitle>
              <CardDescription>Accepts letters and numbers</CardDescription>
            </CardHeader>
            <CardContent>
              <OneTimePasswordField
                maxLength={6}
                render={({ slots }) => (
                  <OneTimePasswordFieldGroup>
                    {slots.map((_, index) => (
                      <OneTimePasswordFieldSlot
                        key={index}
                        index={index}
                        size="sm"
                      />
                    ))}
                  </OneTimePasswordFieldGroup>
                )}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Props Reference */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Props Reference</h2>
          <p className="text-muted-foreground mb-4">
            Available props and variants for the One-Time Password Field
            components.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>OneTimePasswordField</CardTitle>
              <CardDescription>Main OTP input component</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  maxLength: number
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Number of input slots
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  value?: string
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Controlled value
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  onChange?: (value: string) =&gt; void
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Change handler
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  pattern?: RegExp
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Input validation pattern
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>OneTimePasswordFieldGroup & Slot</CardTitle>
              <CardDescription>
                Layout and individual slot components
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  size: "sm" | "default" | "lg"
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Size of the inputs
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  orientation: "horizontal" | "vertical"
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Layout direction
                </p>
              </div>
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  index: number
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Slot index (required for OneTimePasswordFieldSlot)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export const Route = createFileRoute("/docs/one-time-password-field")({
  component: OneTimePasswordFieldDemo,
});
