import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function LabelExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Label</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Renders an accessible label associated with controls. Built on top of
          Radix UI Label primitive.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A simple label associated with form controls using the htmlFor
            attribute.
          </p>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="Pedro Duarte" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" placeholder="pedro@example.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about yourself"
              />
            </div>
          </div>
        </section>

        {/* Size Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Labels support different sizes: small, default, and large.
          </p>
          <div className="max-w-md space-y-6">
            <div className="space-y-2">
              <Label size="sm" htmlFor="small-input">
                Small Label
              </Label>
              <Input
                id="small-input"
                className="h-8 px-2 text-xs"
                placeholder="Small input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="default-input">Default Label</Label>
              <Input id="default-input" placeholder="Default input" />
            </div>

            <div className="space-y-2">
              <Label size="lg" htmlFor="large-input">
                Large Label
              </Label>
              <Input
                id="large-input"
                className="h-12 px-4"
                placeholder="Large input"
              />
            </div>
          </div>
        </section>

        {/* Font Weight Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Font Weight Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Control the font weight of labels: normal, medium, semibold, and
            bold.
          </p>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label weight="normal" htmlFor="normal-weight">
                Normal Weight
              </Label>
              <Input
                id="normal-weight"
                placeholder="With normal weight label"
              />
            </div>

            <div className="space-y-2">
              <Label weight="medium" htmlFor="medium-weight">
                Medium Weight (Default)
              </Label>
              <Input
                id="medium-weight"
                placeholder="With medium weight label"
              />
            </div>

            <div className="space-y-2">
              <Label weight="semibold" htmlFor="semibold-weight">
                Semibold Weight
              </Label>
              <Input
                id="semibold-weight"
                placeholder="With semibold weight label"
              />
            </div>

            <div className="space-y-2">
              <Label weight="bold" htmlFor="bold-weight">
                Bold Weight
              </Label>
              <Input id="bold-weight" placeholder="With bold weight label" />
            </div>
          </div>
        </section>

        {/* Color Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Color Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Labels support different color variants for various states and
            contexts.
          </p>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label variant="default" htmlFor="default-color">
                Default Color
              </Label>
              <Input id="default-color" placeholder="Default label color" />
            </div>

            <div className="space-y-2">
              <Label variant="destructive" htmlFor="error-input">
                Error State
              </Label>
              <Input
                id="error-input"
                className="border-destructive focus-visible:ring-destructive"
                placeholder="This field has an error"
              />
              <p className="text-sm text-destructive">
                This field is required.
              </p>
            </div>

            <div className="space-y-2">
              <Label variant="muted" htmlFor="optional-input">
                Optional Field
              </Label>
              <Input id="optional-input" placeholder="This field is optional" />
            </div>

            <div className="space-y-2">
              <Label variant="accent" htmlFor="accent-input">
                Accent Color
              </Label>
              <Input
                id="accent-input"
                placeholder="With accent colored label"
              />
            </div>
          </div>
        </section>

        {/* Nested Controls */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Nested Controls</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Labels can wrap controls directly, eliminating the need for htmlFor
            attributes.
          </p>
          <div className="max-w-md space-y-4">
            <Label className="flex items-center space-x-2 cursor-pointer">
              <Checkbox />
              <span>I agree to the terms and conditions</span>
            </Label>

            <Label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                className="rounded border-input"
              />
              <span>Option 1</span>
            </Label>

            <Label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                className="rounded border-input"
              />
              <span>Option 2</span>
            </Label>

            <Label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-input" />
              <span>Subscribe to newsletter</span>
            </Label>
          </div>
        </section>

        {/* Complex Form Labels */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Complex Form Labels</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Labels can include additional information, badges, and formatting
            for complex forms.
          </p>
          <div className="max-w-lg space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="username">Username</Label>
                <Badge variant="destructive" className="text-xs">
                  Required
                </Badge>
              </div>
              <Input id="username" placeholder="Enter your username" />
              <p className="text-xs text-muted-foreground">
                Must be 3-20 characters long and contain only letters, numbers,
                and underscores.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="api-key">API Key</Label>
                <Badge variant="outline" className="text-xs">
                  Optional
                </Badge>
              </div>
              <Input id="api-key" type="password" placeholder="sk-..." />
              <p className="text-xs text-muted-foreground">
                Leave blank to use the default API key.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="project-name">Project Name</Label>
                <Badge className="text-xs">Premium</Badge>
              </div>
              <Input id="project-name" placeholder="My awesome project" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                Description
                <span className="text-xs text-muted-foreground font-normal">
                  (0/500 characters)
                </span>
              </Label>
              <textarea
                id="description"
                className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="Describe your project..."
              />
            </div>
          </div>
        </section>

        {/* Disabled State */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Disabled State</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Labels automatically handle disabled states when associated controls
            are disabled.
          </p>
          <div className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled Field</Label>
              <Input
                id="disabled-input"
                disabled
                placeholder="This field is disabled"
              />
            </div>

            <Label className="flex items-center space-x-2 cursor-not-allowed opacity-70">
              <Checkbox disabled />
              <span>Disabled checkbox option</span>
            </Label>

            <div className="space-y-2 opacity-70">
              <Label htmlFor="readonly-input">Read-only Field</Label>
              <Input
                id="readonly-input"
                readOnly
                value="This value cannot be changed"
              />
            </div>
          </div>
        </section>

        {/* Accessibility Examples */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Proper labeling techniques for screen readers and keyboard
            navigation.
          </p>
          <div className="max-w-lg space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Form Group</h3>
              <fieldset className="space-y-4 border border-border rounded-lg p-4">
                <legend className="text-sm font-medium px-2">
                  Contact Information
                </legend>

                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input
                    id="contact-name"
                    required
                    aria-describedby="name-help"
                  />
                  <p id="name-help" className="text-xs text-muted-foreground">
                    Enter your first and last name
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    aria-describedby="email-help"
                  />
                  <p id="email-help" className="text-xs text-muted-foreground">
                    We'll never share your email with anyone else
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Phone Number</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    aria-describedby="phone-help"
                  />
                  <p id="phone-help" className="text-xs text-muted-foreground">
                    Optional. Include country code for international numbers
                  </p>
                </div>
              </fieldset>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Radio Group with Labels</h3>
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium">
                  Preferred Contact Method
                </legend>

                <Label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value="email"
                    className="rounded-full"
                  />
                  <span>Email</span>
                </Label>

                <Label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value="phone"
                    className="rounded-full"
                  />
                  <span>Phone</span>
                </Label>

                <Label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact-method"
                    value="sms"
                    className="rounded-full"
                  />
                  <span>SMS</span>
                </Label>
              </fieldset>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit">Submit Form</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/docs/label")({
  component: LabelExample,
});
