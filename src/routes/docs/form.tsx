import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
  FormSubmit,
} from "@/components/ui/modules/form";

function FormExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Form</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A form control component built on top of Radix UI Form primitive. Uses
          native browser validation.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Form */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Form</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A simple form with built-in browser validation using required
            attributes.
          </p>
          <div className="max-w-md">
            <Form className="space-y-4">
              <FormField name="email" className="space-y-2">
                <FormLabel>Email</FormLabel>
                <FormControl
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <FormMessage match="valueMissing">
                  Please enter your email.
                </FormMessage>
                <FormMessage match="typeMismatch">
                  Please provide a valid email address.
                </FormMessage>
              </FormField>

              <FormField name="name" className="space-y-2">
                <FormLabel>Full Name</FormLabel>
                <FormControl
                  type="text"
                  placeholder="Enter your name"
                  required
                  minLength={2}
                />
                <FormMessage match="valueMissing">
                  Please enter your full name.
                </FormMessage>
                <FormMessage match="tooShort">
                  Name must be at least 2 characters.
                </FormMessage>
              </FormField>

              <FormSubmit>Submit</FormSubmit>
            </Form>
          </div>
        </section>

        {/* Size Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Forms support different sizes: small, default, and large.
          </p>
          <div className="max-w-md space-y-4">
            <Form className="space-y-2">
              <FormField name="small" className="space-y-1">
                <FormLabel className="text-xs font-medium">
                  Small Form
                </FormLabel>
                <FormControl
                  className="h-8 px-2 text-xs"
                  placeholder="Small input"
                />
              </FormField>
            </Form>

            <Form className="space-y-2">
              <FormField name="default" className="space-y-2">
                <FormLabel className="text-sm font-medium">
                  Default Form
                </FormLabel>
                <FormControl placeholder="Default input" />
              </FormField>
            </Form>

            <Form className="space-y-2">
              <FormField name="large" className="space-y-2">
                <FormLabel className="text-base font-medium">
                  Large Form
                </FormLabel>
                <FormControl className="h-12 px-4" placeholder="Large input" />
              </FormField>
            </Form>
          </div>
        </section>

        {/* Layout Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Layout Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Different field layouts: vertical (default), horizontal, and inline.
          </p>
          <div className="space-y-6">
            <Form>
              <FormField name="vertical" className="space-y-2">
                <FormLabel>Vertical Layout</FormLabel>
                <FormControl placeholder="Default vertical layout" />
                <p className="text-sm text-muted-foreground">
                  This is the default vertical layout.
                </p>
              </FormField>
            </Form>

            <Form>
              <FormField
                name="horizontal"
                className="flex items-center space-x-4 space-y-0"
              >
                <FormLabel className="w-24 shrink-0">Horizontal</FormLabel>
                <FormControl placeholder="Horizontal layout" />
              </FormField>
            </Form>

            <Form>
              <FormField
                name="inline"
                className="flex items-center gap-2 space-y-0"
              >
                <FormLabel>Inline:</FormLabel>
                <FormControl placeholder="Inline layout" />
              </FormField>
            </Form>
          </div>
        </section>

        {/* Custom Validation */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Custom Validation</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Custom validation with pattern matching and custom validation
            functions.
          </p>
          <div className="max-w-md">
            <Form className="space-y-4">
              <FormField name="username" className="space-y-2">
                <FormLabel>Username</FormLabel>
                <FormControl
                  type="text"
                  pattern="[a-zA-Z0-9_]+"
                  placeholder="alphanumeric_only"
                  required
                  minLength={3}
                  maxLength={20}
                />
                <p className="text-sm text-muted-foreground">
                  Username must be 3-20 characters, alphanumeric and underscores
                  only.
                </p>
                <FormMessage match="valueMissing">
                  Username is required.
                </FormMessage>
                <FormMessage match="patternMismatch">
                  Username can only contain letters, numbers, and underscores.
                </FormMessage>
                <FormMessage match="tooShort">
                  Username must be at least 3 characters.
                </FormMessage>
                <FormMessage match="tooLong">
                  Username must not exceed 20 characters.
                </FormMessage>
              </FormField>

              <FormField name="age" className="space-y-2">
                <FormLabel>Age</FormLabel>
                <FormControl
                  type="number"
                  min={13}
                  max={120}
                  placeholder="Enter your age"
                  required
                />
                <FormMessage match="valueMissing">Age is required.</FormMessage>
                <FormMessage match="rangeUnderflow">
                  You must be at least 13 years old.
                </FormMessage>
                <FormMessage match="rangeOverflow">
                  Please enter a valid age.
                </FormMessage>
              </FormField>
            </Form>
          </div>
        </section>

        {/* Error States */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Error States</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Visual error states with destructive variants.
          </p>
          <div className="max-w-md space-y-4">
            <Form>
              <FormField name="invalid-email" className="space-y-2">
                <FormLabel className="text-destructive">
                  Email (Invalid)
                </FormLabel>
                <FormControl
                  className="border-destructive focus-visible:ring-destructive"
                  placeholder="invalid-email"
                  defaultValue="invalid-email"
                />
                <FormMessage className="text-destructive">
                  Please enter a valid email address.
                </FormMessage>
              </FormField>
            </Form>

            <Form>
              <FormField name="valid-email" className="space-y-2">
                <FormLabel>Email (Valid)</FormLabel>
                <FormControl placeholder="user@example.com" />
                <p className="text-sm text-muted-foreground">
                  Email is available.
                </p>
              </FormField>
            </Form>
          </div>
        </section>

        {/* Multi-Step Form */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Multi-Step Form</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A multi-step form with validation at each step.
          </p>
          <MultiStepForm />
        </section>

        {/* Form with Async Submission */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Async Form Submission</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Form with loading state and async submission handling.
          </p>
          <AsyncForm />
        </section>

        {/* Contact Form Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Complete Contact Form</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A complete contact form example with various field types and
            validation.
          </p>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

// Multi-Step Form Component
function MultiStepForm() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    plan: "basic",
  });

  const handleNext = (event: React.FormEvent) => {
    event.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    alert("Multi-step form submitted successfully!");
  };

  return (
    <div className="max-w-md">
      <div className="mb-4">
        <div className="flex space-x-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${
                i <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2">Step {step} of 3</p>
      </div>

      <Form
        onSubmit={step === 3 ? handleSubmit : handleNext}
        className="space-y-4"
      >
        {step === 1 && (
          <>
            <FormField name="firstName" className="space-y-2">
              <FormLabel>First Name</FormLabel>
              <FormControl
                required
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }))
                }
              />
              <FormMessage match="valueMissing">
                First name is required.
              </FormMessage>
            </FormField>

            <FormField name="lastName" className="space-y-2">
              <FormLabel>Last Name</FormLabel>
              <FormControl
                required
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lastName: e.target.value }))
                }
              />
              <FormMessage match="valueMissing">
                Last name is required.
              </FormMessage>
            </FormField>
          </>
        )}

        {step === 2 && (
          <>
            <FormField name="email" className="space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <FormMessage match="valueMissing">Email is required.</FormMessage>
            </FormField>

            <FormField name="company" className="space-y-2">
              <FormLabel>Company</FormLabel>
              <FormControl
                placeholder="Enter your company name"
                value={formData.company}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, company: e.target.value }))
                }
              />
            </FormField>
          </>
        )}

        {step === 3 && (
          <FormField name="plan" className="space-y-2">
            <FormLabel>Plan</FormLabel>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.plan}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, plan: e.target.value }))
              }
            >
              <option value="basic">Basic - $9/month</option>
              <option value="pro">Pro - $19/month</option>
              <option value="enterprise">Enterprise - $49/month</option>
            </select>
          </FormField>
        )}

        <div className="flex gap-2 pt-2">
          {step > 1 && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
              onClick={handlePrev}
            >
              Previous
            </button>
          )}
          <FormSubmit>
            {step === 3 ? "Complete Registration" : "Next"}
          </FormSubmit>
        </div>
      </Form>
    </div>
  );
}

// Async Form Component
function AsyncForm() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("Form submitted successfully!");
    } catch {
      setMessage("Error submitting form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md">
      <Form onSubmit={handleSubmit} className="space-y-4">
        <FormField name="name" className="space-y-2">
          <FormLabel>Full Name</FormLabel>
          <FormControl
            required
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          <FormMessage match="valueMissing">Name is required.</FormMessage>
        </FormField>

        <FormField name="message" className="space-y-2">
          <FormLabel>Message</FormLabel>
          <textarea
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your message"
            required
            disabled={isLoading}
          />
          <FormMessage match="valueMissing">Message is required.</FormMessage>
        </FormField>

        <FormSubmit disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </FormSubmit>

        {message && (
          <p
            className={`text-sm ${
              message.includes("Error") ? "text-destructive" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}
      </Form>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "general",
    message: "",
    newsletter: false,
    urgent: false,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    alert("Contact form submitted successfully!");
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-lg">
      <Form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <FormField name="firstName" className="space-y-2">
            <FormLabel>First Name</FormLabel>
            <FormControl
              required
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
            />
            <FormMessage match="valueMissing">
              First name is required.
            </FormMessage>
          </FormField>

          <FormField name="lastName" className="space-y-2">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              required
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
            />
            <FormMessage match="valueMissing">
              Last name is required.
            </FormMessage>
          </FormField>
        </div>

        <FormField name="email" className="space-y-2">
          <FormLabel>Email Address</FormLabel>
          <FormControl
            type="email"
            required
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <FormMessage match="valueMissing">Email is required.</FormMessage>
          <FormMessage match="typeMismatch">
            Please enter a valid email address.
          </FormMessage>
        </FormField>

        <div className="grid grid-cols-2 gap-4">
          <FormField name="phone" className="space-y-2">
            <FormLabel>Phone Number</FormLabel>
            <FormControl
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </FormField>

          <FormField name="company" className="space-y-2">
            <FormLabel>Company</FormLabel>
            <FormControl
              placeholder="Acme Corp"
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
            />
          </FormField>
        </div>

        <FormField name="subject" className="space-y-2">
          <FormLabel>Subject</FormLabel>
          <select
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={formData.subject}
            onChange={(e) => handleChange("subject", e.target.value)}
          >
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="sales">Sales Question</option>
            <option value="billing">Billing Issue</option>
            <option value="partnership">Partnership Opportunity</option>
          </select>
        </FormField>

        <FormField name="message" className="space-y-2">
          <FormLabel>Message</FormLabel>
          <textarea
            className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Please describe your inquiry in detail..."
            required
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <FormMessage match="valueMissing">Message is required.</FormMessage>
        </FormField>

        <div className="space-y-3">
          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="rounded border-input"
              checked={formData.newsletter}
              onChange={(e) => handleChange("newsletter", e.target.checked)}
            />
            <span>Subscribe to our newsletter for updates</span>
          </label>

          <label className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              className="rounded border-input"
              checked={formData.urgent}
              onChange={(e) => handleChange("urgent", e.target.checked)}
            />
            <span>This is an urgent request</span>
          </label>
        </div>

        <FormSubmit className="w-full">Send Message</FormSubmit>
      </Form>
    </div>
  );
}

export const Route = createFileRoute("/docs/form")({
  component: FormExample,
});
