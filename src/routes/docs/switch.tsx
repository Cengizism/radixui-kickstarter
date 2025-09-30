import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Label } from '@/components/ui/elements/label';
import { Separator } from '@/components/ui/elements/separator';
import { useState } from 'react';
import {
  Switch,
  SwitchRoot,
  SwitchThumb,
} from "@/components/ui/elements/switch";

export const Route = createFileRoute("/docs/switch")({
  component: SwitchDemo,
});

function SwitchDemo() {
  const [isChecked, setIsChecked] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [marketing, setMarketing] = useState(false);

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Switch</h1>
          <p className="text-lg text-muted-foreground">
            A control that allows the user to toggle between checked and not
            checked.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Toggle</Badge>
          <Badge variant="secondary">Controlled</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">Form Compatible</Badge>
          <Badge variant="secondary">Accessible</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple toggle switches for binary choices.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg">
          <div className="flex items-center space-x-3">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane mode</Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch id="disabled-switch" disabled />
            <Label htmlFor="disabled-switch" className="text-muted-foreground">
              Disabled switch
            </Label>
          </div>

          <div className="text-sm text-muted-foreground">
            Try clicking or using Space/Enter keys to toggle
          </div>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different sizes for various UI contexts.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-6 border rounded-lg">
          <div className="flex items-center space-x-3">
            <Switch id="small-switch" size="sm" />
            <Label htmlFor="small-switch">Small switch</Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch id="default-switch" size="default" />
            <Label htmlFor="default-switch">Default switch</Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch id="large-switch" size="lg" />
            <Label htmlFor="large-switch">Large switch</Label>
          </div>

          <div className="flex items-center space-x-3">
            <Switch id="xl-switch" size="xl" />
            <Label htmlFor="xl-switch">Extra large switch</Label>
          </div>
        </div>
      </section>

      <Separator />

      {/* Visual Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Visual Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for various contexts and states.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border rounded-lg">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Default</h4>
            <div className="flex items-center space-x-3">
              <Switch id="default-variant" variant="default" defaultChecked />
              <Label htmlFor="default-variant">Primary color</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Outline</h4>
            <div className="flex items-center space-x-3">
              <Switch id="outline-variant" variant="outline" defaultChecked />
              <Label htmlFor="outline-variant">Outlined style</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Secondary</h4>
            <div className="flex items-center space-x-3">
              <Switch
                id="secondary-variant"
                variant="secondary"
                defaultChecked
              />
              <Label htmlFor="secondary-variant">Secondary color</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Destructive</h4>
            <div className="flex items-center space-x-3">
              <Switch
                id="destructive-variant"
                variant="destructive"
                defaultChecked
              />
              <Label htmlFor="destructive-variant">Destructive action</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Success</h4>
            <div className="flex items-center space-x-3">
              <Switch id="success-variant" variant="success" defaultChecked />
              <Label htmlFor="success-variant">Success state</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium">Warning</h4>
            <div className="flex items-center space-x-3">
              <Switch id="warning-variant" variant="warning" defaultChecked />
              <Label htmlFor="warning-variant">Warning state</Label>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Controlled Switch */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled Switch</h2>
          <p className="text-muted-foreground">
            Control the switch state externally with checked and
            onCheckedChange.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Switch
                id="controlled-switch"
                checked={isChecked}
                onCheckedChange={setIsChecked}
              />
              <Label htmlFor="controlled-switch">
                Controlled switch ({isChecked ? "On" : "Off"})
              </Label>
            </div>

            <Button
              onClick={() => setIsChecked(!isChecked)}
              variant="outline"
              size="sm"
            >
              Toggle Programmatically
            </Button>
          </div>

          {isChecked && (
            <div className="p-3 bg-primary/10 rounded-md border">
              <p className="text-sm">
                Switch is currently <span className="font-medium">enabled</span>
              </p>
            </div>
          )}
        </div>
      </section>

      <Separator />

      {/* Form Integration */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Form Integration</h2>
          <p className="text-muted-foreground">
            Using switches in forms with proper names and values.
          </p>
        </div>
        <div className="max-w-md p-6 border rounded-lg">
          <form className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Preferences</h4>

              <div className="flex items-center justify-between">
                <Label htmlFor="notifications-form" className="text-sm">
                  Email notifications
                </Label>
                <Switch
                  id="notifications-form"
                  name="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="privacy-form" className="text-sm">
                  Privacy mode
                </Label>
                <Switch
                  id="privacy-form"
                  name="privacy"
                  checked={privacy}
                  onCheckedChange={setPrivacy}
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="marketing-form" className="text-sm">
                  Marketing emails
                </Label>
                <Switch
                  id="marketing-form"
                  name="marketing"
                  checked={marketing}
                  onCheckedChange={setMarketing}
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Save Preferences
            </Button>

            <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
              <p className="font-medium mb-1">Form Values:</p>
              <p>notifications: {notifications.toString()}</p>
              <p>privacy: {privacy.toString()}</p>
              <p>marketing: {marketing.toString()}</p>
            </div>
          </form>
        </div>
      </section>

      <Separator />

      {/* Advanced Composition */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Advanced Composition</h2>
          <p className="text-muted-foreground">
            Building custom switches using individual components.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex items-center space-x-3">
            <SwitchRoot size="lg" variant="success">
              <SwitchThumb size="lg" variant="success" />
            </SwitchRoot>
            <Label>Custom composed switch</Label>
          </div>

          <div className="text-sm text-muted-foreground">
            This switch is built using SwitchRoot and SwitchThumb components for
            full control over composition.
          </div>
        </div>
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for switches.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          {/* Settings Panel */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Settings Panel</h4>
            <div className="max-w-md border rounded-lg p-4 space-y-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Dark Mode</Label>
                    <p className="text-xs text-muted-foreground">
                      Enable dark theme for better low-light viewing
                    </p>
                  </div>
                  <Switch size="sm" />
                </div>

                <Separator />

                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">Auto-save</Label>
                    <p className="text-xs text-muted-foreground">
                      Automatically save changes as you work
                    </p>
                  </div>
                  <Switch size="sm" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <Label className="text-sm font-medium">
                      Push Notifications
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Receive notifications on this device
                    </p>
                  </div>
                  <Switch size="sm" variant="success" defaultChecked />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Toggle Cards */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Dashboard Toggles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">API Access</h5>
                  <Switch variant="success" size="sm" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Allow external API access to your account
                </p>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">Maintenance Mode</h5>
                  <Switch variant="warning" size="sm" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Put your site into maintenance mode
                </p>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">Analytics</h5>
                  <Switch size="sm" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable usage analytics and tracking
                </p>
              </div>

              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h5 className="font-medium">Delete Account</h5>
                  <Switch variant="destructive" size="sm" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all data
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete API reference for all Switch components.
          </p>
        </div>
        <div className="space-y-6">
          {/* Switch Props */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Switch</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the switch
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'secondary' | 'destructive' |
                      'success' | 'warning'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the switch
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      checked
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The controlled checked state
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultChecked
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The default checked state (uncontrolled)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onCheckedChange
                    </td>
                    <td className="border border-border p-2">
                      (checked: boolean) =&gt; void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Event handler called when the checked state changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the switch
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      required
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Makes the switch required for forms
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">name</td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      The name of the switch (for forms)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      value
                    </td>
                    <td className="border border-border p-2">string</td>
                    <td className="border border-border p-2">'on'</td>
                    <td className="border border-border p-2">
                      The value given as data when checked (for forms)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Individual Components */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium">SwitchRoot & SwitchThumb</h3>
            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <code className="bg-background px-1 rounded">SwitchRoot</code>{" "}
                and{" "}
                <code className="bg-background px-1 rounded">SwitchThumb</code>{" "}
                accept the same size and variant props as the main Switch
                component. Use these for advanced composition when you need full
                control over the structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p className="text-muted-foreground">
            Built-in accessibility features and keyboard navigation.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Keyboard Interactions</h4>
            <div className="bg-muted/30 p-4 rounded-lg">
              <table className="w-full text-sm">
                <tbody className="space-y-2">
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Space
                    </td>
                    <td className="py-2 pl-4">Toggles the switch state</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Enter
                    </td>
                    <td className="py-2 pl-4">Toggles the switch state</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">ARIA Compliance</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Adheres to the{" "}
                <code className="bg-muted px-1 rounded">switch</code> ARIA role
                requirements
              </li>
              <li>
                • Automatically manages{" "}
                <code className="bg-muted px-1 rounded">aria-checked</code>{" "}
                state
              </li>
              <li>
                • Supports proper focus management and keyboard navigation
              </li>
              <li>• Includes hidden input for form compatibility</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Always provide a descriptive label using the Label component
              </li>
              <li>• Use meaningful IDs to associate labels with switches</li>
              <li>• Consider grouping related switches with fieldsets</li>
              <li>
                • Provide clear visual feedback for checked/unchecked states
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
