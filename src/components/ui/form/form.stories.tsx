import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button/button';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';
import { Switch } from '@/components/ui/switch/switch';
import { useState } from 'react';
import {
  AlertCircle,
  CreditCard,
  User,
  FileText,
  MapPin,
  Shield,
  Check,
  X,
  Info,
  Eye,
  EyeOff,
  Save,
  Send,
} from "lucide-react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/radio-group";
import {
  Form,
  FormControl,
  FormLabelStyled,
  FormMessageStyled,
  FormFieldStyled,
  FormSubmitStyled,
  FormDescription,
} from "./form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";

export default {
  title: "UI/Form",
  component: Form,
  docs: {
    description: {
      component:
        "A form component built on top of Radix UI Form primitives with enhanced validation capabilities. Supports built-in browser validation, custom validation rules, and comprehensive accessibility features.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    // Root Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Root Props",
      },
    },
    // Event Handlers
    onSubmit: {
      action: "onSubmit",
      description:
        "Event handler called when the form is submitted. Only triggered if it passes client-side validation. Receives FormEvent as parameter.",
      table: {
        type: { summary: "(event: FormEvent<HTMLFormElement>) => void" },
        category: "Event Handlers",
      },
    },
    onInvalidSubmit: {
      action: "onInvalidSubmit",
      description:
        "Event handler called when the form is submitted with invalid data. Useful for handling validation errors.",
      table: {
        type: { summary: "(event: FormEvent<HTMLFormElement>) => void" },
        category: "Event Handlers",
      },
    },
    onClearServerErrors: {
      action: "onClearServerErrors",
      description:
        "Event handler called to clear server errors. Called before form re-submission and when form is reset.",
      table: {
        type: { summary: "() => void" },
        category: "Event Handlers",
      },
    },
    // Field Props
    name: {
      control: "text",
      description:
        "The name of the field. Used to associate labels, controls, and validation messages automatically.",
      table: {
        type: { summary: "string" },
        category: "Field Props",
      },
    },
    serverInvalid: {
      control: "boolean",
      description:
        "Whether the field is invalid according to server-side validation. Marks the field as invalid regardless of client-side validation.",
      table: {
        type: { summary: "boolean" },
        category: "Field Props",
      },
    },
    variant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style variant of the form control.",
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"default"' },
        category: "Control",
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the form control.",
      table: {
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
        category: "Control",
      },
    },

    // Label Props
    labelVariant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style variant of the form label.",
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"default"' },
        category: "Label",
      },
    },
    labelSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the form label.",
      table: {
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
        category: "Label",
      },
    },

    // Message Props
    match: {
      description:
        "Determines when the message should show. Can be a ValidityState property name or a custom validation function.",
      table: {
        type: {
          summary:
            "keyof ValidityState | ((value: string, formData: FormData) => boolean | Promise<boolean>)",
        },
        category: "Message",
      },
    },
    forceMatch: {
      control: "boolean",
      description:
        "When true, forces the message to show regardless of client-side validation. Useful for server-side validation errors.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Message",
      },
    },
    messageVariant: {
      control: "select",
      options: ["default", "destructive"],
      description: "The visual style variant of the validation message.",
      table: {
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"destructive"' },
        category: "Message",
      },
    },
    messageSize: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "The size variant of the validation message.",
      table: {
        type: { summary: '"sm" | "default" | "lg"' },
        defaultValue: { summary: '"default"' },
        category: "Message",
      },
    },

    // Field Layout Props
    layout: {
      control: "select",
      options: ["default", "horizontal", "inline"],
      description: "The layout style of the form field.",
      table: {
        type: { summary: '"default" | "horizontal" | "inline"' },
        defaultValue: { summary: '"default"' },
        category: "Field",
      },
    },

    // Submit Props
    submitVariant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the submit button.",
      table: {
        type: {
          summary:
            '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"default"' },
        category: "Submit",
      },
    },
    submitSize: {
      control: "select",
      options: ["sm", "default", "lg", "icon"],
      description: "The size variant of the submit button.",
      table: {
        type: { summary: '"sm" | "default" | "lg" | "icon"' },
        defaultValue: { summary: '"default"' },
        category: "Submit",
      },
    },

    // ValidityState Props
    children: {
      description:
        "Render prop function that receives the current ValidityState of the field. Used to access validation state in render.",
      table: {
        type: { summary: "(validity: ValidityState) => React.ReactNode" },
        category: "ValidityState",
      },
    },

    // Built-in Validation Matches
    valueMissing: {
      description:
        "Matches when required field is empty. Corresponds to the 'required' HTML attribute.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    typeMismatch: {
      description:
        "Matches when input type doesn't match expected format (e.g., invalid email format).",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    patternMismatch: {
      description:
        "Matches when input doesn't match the specified pattern attribute.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    tooLong: {
      description: "Matches when input exceeds maxlength attribute.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    tooShort: {
      description: "Matches when input is shorter than minlength attribute.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    rangeUnderflow: {
      description: "Matches when numeric input is less than min attribute.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    rangeOverflow: {
      description: "Matches when numeric input exceeds max attribute.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    stepMismatch: {
      description:
        "Matches when numeric input doesn't fit step attribute constraints.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    badInput: {
      description:
        "Matches when browser cannot convert input to expected type.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
    customError: {
      description:
        "Matches when custom validation function returns true. Used for custom validation rules.",
      table: {
        type: { summary: "ValidityState property" },
        category: "Validation",
      },
    },
  },
};

// Basic form
export const Basic = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submitted successfully
  };

  return (
    <div className="w-[400px]">
      <Form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <FormFieldStyled name="email">
            <FormLabelStyled>Email</FormLabelStyled>
            <FormControl>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormControl>
            <FormMessageStyled />
          </FormFieldStyled>

          <FormFieldStyled name="password">
            <FormLabelStyled>Password</FormLabelStyled>
            <FormControl>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </FormControl>
            <FormMessageStyled />
          </FormFieldStyled>

          <FormSubmitStyled type="submit" className="w-full">
            Sign In
          </FormSubmitStyled>
        </div>
      </Form>
    </div>
  );
};

// Form with validation
export const WithValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submitted successfully
    }
  };

  return (
    <div className="w-[400px]">
      <Card>
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
          <CardDescription>
            Enter your details to create a new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <FormFieldStyled name="username">
                <FormLabelStyled
                  variant={errors.username ? "destructive" : "default"}
                >
                  Username
                </FormLabelStyled>
                <FormControl>
                  <Input
                    variant={errors.username ? "destructive" : "default"}
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </FormControl>
                {errors.username && (
                  <FormMessageStyled>
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {errors.username}
                  </FormMessageStyled>
                )}
              </FormFieldStyled>

              <FormFieldStyled name="email">
                <FormLabelStyled
                  variant={errors.email ? "destructive" : "default"}
                >
                  Email
                </FormLabelStyled>
                <FormControl>
                  <Input
                    variant={errors.email ? "destructive" : "default"}
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
                {errors.email && (
                  <FormMessageStyled>
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {errors.email}
                  </FormMessageStyled>
                )}
              </FormFieldStyled>

              <FormFieldStyled name="password">
                <FormLabelStyled
                  variant={errors.password ? "destructive" : "default"}
                >
                  Password
                </FormLabelStyled>
                <FormControl>
                  <Input
                    variant={errors.password ? "destructive" : "default"}
                    type="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </FormControl>
                {errors.password ? (
                  <FormMessageStyled>
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {errors.password}
                  </FormMessageStyled>
                ) : (
                  <FormDescription>
                    Password must be at least 8 characters long
                  </FormDescription>
                )}
              </FormFieldStyled>

              <FormFieldStyled name="confirmPassword">
                <FormLabelStyled
                  variant={errors.confirmPassword ? "destructive" : "default"}
                >
                  Confirm Password
                </FormLabelStyled>
                <FormControl>
                  <Input
                    variant={errors.confirmPassword ? "destructive" : "default"}
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </FormControl>
                {errors.confirmPassword && (
                  <FormMessageStyled>
                    <AlertCircle className="h-4 w-4 inline mr-1" />
                    {errors.confirmPassword}
                  </FormMessageStyled>
                )}
              </FormFieldStyled>

              <FormSubmitStyled type="submit" className="w-full">
                Create Account
              </FormSubmitStyled>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

// Form layouts
export const FormLayouts = () => (
  <div className="space-y-8 w-full max-w-2xl">
    <div>
      <h3 className="text-lg font-semibold mb-4">Default Layout</h3>
      <Form>
        <div className="space-y-4 max-w-sm">
          <FormFieldStyled name="name" layout="default">
            <FormLabelStyled>Full Name</FormLabelStyled>
            <FormControl>
              <Input placeholder="Enter your name" />
            </FormControl>
          </FormFieldStyled>

          <FormFieldStyled name="email" layout="default">
            <FormLabelStyled>Email</FormLabelStyled>
            <FormControl>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
          </FormFieldStyled>
        </div>
      </Form>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Horizontal Layout</h3>
      <Form>
        <div className="space-y-4">
          <FormFieldStyled name="name" layout="horizontal">
            <FormLabelStyled className="w-24">Name</FormLabelStyled>
            <FormControl>
              <Input placeholder="Enter your name" />
            </FormControl>
          </FormFieldStyled>

          <FormFieldStyled name="email" layout="horizontal">
            <FormLabelStyled className="w-24">Email</FormLabelStyled>
            <FormControl>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
          </FormFieldStyled>
        </div>
      </Form>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Inline Layout</h3>
      <Form>
        <div className="flex flex-wrap gap-4">
          <FormFieldStyled name="firstName" layout="inline">
            <FormLabelStyled>First:</FormLabelStyled>
            <FormControl>
              <Input placeholder="John" className="w-24" />
            </FormControl>
          </FormFieldStyled>

          <FormFieldStyled name="lastName" layout="inline">
            <FormLabelStyled>Last:</FormLabelStyled>
            <FormControl>
              <Input placeholder="Doe" className="w-24" />
            </FormControl>
          </FormFieldStyled>
        </div>
      </Form>
    </div>
  </div>
);

// Payment form
export const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    name: "",
    saveCard: false,
  });

  return (
    <div className="w-full max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Information
          </CardTitle>
          <CardDescription>
            Enter your payment details to complete your purchase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <div className="space-y-4">
              <FormFieldStyled name="cardNumber">
                <FormLabelStyled>Card Number</FormLabelStyled>
                <FormControl>
                  <Input
                    placeholder="1234 5678 9012 3456"
                    value={formData.cardNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, cardNumber: e.target.value })
                    }
                  />
                </FormControl>
              </FormFieldStyled>

              <div className="grid grid-cols-2 gap-4">
                <FormFieldStyled name="expiryDate">
                  <FormLabelStyled>Expiry Date</FormLabelStyled>
                  <FormControl>
                    <Input
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) =>
                        setFormData({ ...formData, expiryDate: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>

                <FormFieldStyled name="cvv">
                  <FormLabelStyled>CVV</FormLabelStyled>
                  <FormControl>
                    <Input
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) =>
                        setFormData({ ...formData, cvv: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>
              </div>

              <FormFieldStyled name="name">
                <FormLabelStyled>Cardholder Name</FormLabelStyled>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
              </FormFieldStyled>

              <FormFieldStyled name="saveCard" layout="horizontal">
                <Checkbox
                  checked={formData.saveCard}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, saveCard: !!checked })
                  }
                />
                <div className="grid gap-1.5 leading-none">
                  <FormLabelStyled>
                    Save card for future purchases
                  </FormLabelStyled>
                  <FormDescription>
                    Your payment information will be stored securely
                  </FormDescription>
                </div>
              </FormFieldStyled>

              <FormSubmitStyled type="submit" className="w-full">
                Complete Payment
              </FormSubmitStyled>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

// Size variations

// Interactive playground
export const Playground = (args: {
  variant?: "default" | "destructive";
  size?: "sm" | "default" | "lg";
  layout?: "default" | "horizontal" | "inline";
}) => (
  <div className="w-[400px]">
    <Form>
      <div className="space-y-4">
        <FormFieldStyled name="playground" layout={args.layout}>
          <FormLabelStyled variant={args.variant} size={args.size}>
            Playground Field
          </FormLabelStyled>
          <FormControl>
            <Input placeholder="Test the form controls" />
          </FormControl>
          <FormDescription>
            Layout: {args.layout} | Size: {args.size} | Variant: {args.variant}
          </FormDescription>
        </FormFieldStyled>

        <FormSubmitStyled
          type="submit"
          variant={args.variant === "destructive" ? "destructive" : "default"}
          size={args.size}
        >
          Submit
        </FormSubmitStyled>
      </div>
    </Form>
  </div>
);

Playground.args = {
  variant: "default",
  size: "default",
  layout: "default",
};

// Advanced Interactive Example
export const AdvancedInteractiveExample = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",

    // Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Account Settings
    username: "",
    password: "",
    confirmPassword: "",

    // Preferences
    newsletter: true,
    notifications: false,
    theme: "system",
    language: "en",

    // Professional
    company: "",
    position: "",
    website: "",
    bio: "",

    // Advanced
    customValidation: "",
  });

  const [serverErrors, setServerErrors] = useState({
    email: false,
    username: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate server validation errors (randomly)
    if (Math.random() > 0.7) {
      setServerErrors({
        email: formData.email === "test@example.com",
        username: formData.username === "admin",
      });
      setSubmitMessage("Server validation errors occurred.");
    } else {
      setServerErrors({ email: false, username: false });
      setSubmitMessage("Form submitted successfully!");
    }

    setIsSubmitting(false);
  };

  const clearServerErrors = () => {
    setServerErrors({ email: false, username: false });
  };

  // Custom validation function
  const validateCustomField = (value: string) => {
    return value.length >= 5 && /[A-Z]/.test(value) && /[0-9]/.test(value);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Advanced Interactive Form Example
        </h2>
        <p className="text-muted-foreground mb-6">
          A comprehensive form demonstrating all Form features including
          built-in validation, custom validation, server-side validation, and
          complex form interactions.
        </p>
      </div>

      <Form onSubmit={handleSubmit} onClearServerErrors={clearServerErrors}>
        <div className="space-y-8">
          {/* Personal Information Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Basic information about yourself
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormFieldStyled name="firstName">
                  <FormLabelStyled>First Name *</FormLabelStyled>
                  <FormControl>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                      minLength={2}
                    />
                  </FormControl>
                  <FormMessageStyled match="valueMissing">
                    Please enter your first name
                  </FormMessageStyled>
                  <FormMessageStyled match="tooShort">
                    First name must be at least 2 characters
                  </FormMessageStyled>
                </FormFieldStyled>

                <FormFieldStyled name="lastName">
                  <FormLabelStyled>Last Name *</FormLabelStyled>
                  <FormControl>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                      minLength={2}
                    />
                  </FormControl>
                  <FormMessageStyled match="valueMissing">
                    Please enter your last name
                  </FormMessageStyled>
                  <FormMessageStyled match="tooShort">
                    Last name must be at least 2 characters
                  </FormMessageStyled>
                </FormFieldStyled>
              </div>

              <FormFieldStyled name="email" serverInvalid={serverErrors.email}>
                <FormLabelStyled>Email Address *</FormLabelStyled>
                <FormControl>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      setServerErrors((prev) => ({ ...prev, email: false }));
                    }}
                    required
                  />
                </FormControl>
                <FormMessageStyled match="valueMissing">
                  Please enter your email address
                </FormMessageStyled>
                <FormMessageStyled match="typeMismatch">
                  Please enter a valid email address
                </FormMessageStyled>
                <FormMessageStyled forceMatch={serverErrors.email}>
                  This email is already registered. Please use a different
                  email.
                </FormMessageStyled>
              </FormFieldStyled>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormFieldStyled name="phone">
                  <FormLabelStyled>Phone Number</FormLabelStyled>
                  <FormControl>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="123-456-7890"
                    />
                  </FormControl>
                  <FormMessageStyled match="patternMismatch">
                    Please enter phone in format: 123-456-7890
                  </FormMessageStyled>
                </FormFieldStyled>

                <FormFieldStyled name="dateOfBirth">
                  <FormLabelStyled>Date of Birth</FormLabelStyled>
                  <FormControl>
                    <Input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>
              </div>
            </CardContent>
          </Card>

          {/* Address Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Address Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormFieldStyled name="address">
                <FormLabelStyled>Street Address</FormLabelStyled>
                <FormControl>
                  <Input
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                    placeholder="123 Main Street"
                  />
                </FormControl>
              </FormFieldStyled>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormFieldStyled name="city">
                  <FormLabelStyled>City</FormLabelStyled>
                  <FormControl>
                    <Input
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>

                <FormFieldStyled name="state">
                  <FormLabelStyled>State</FormLabelStyled>
                  <FormControl asChild>
                    <Select
                      value={formData.state}
                      onValueChange={(value) =>
                        setFormData({ ...formData, state: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca">California</SelectItem>
                        <SelectItem value="ny">New York</SelectItem>
                        <SelectItem value="tx">Texas</SelectItem>
                        <SelectItem value="fl">Florida</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormFieldStyled>

                <FormFieldStyled name="zipCode">
                  <FormLabelStyled>ZIP Code</FormLabelStyled>
                  <FormControl>
                    <Input
                      value={formData.zipCode}
                      onChange={(e) =>
                        setFormData({ ...formData, zipCode: e.target.value })
                      }
                      pattern="[0-9]{5}(-[0-9]{4})?"
                      placeholder="12345"
                    />
                  </FormControl>
                  <FormMessageStyled match="patternMismatch">
                    Please enter a valid ZIP code (12345 or 12345-6789)
                  </FormMessageStyled>
                </FormFieldStyled>
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormFieldStyled
                name="username"
                serverInvalid={serverErrors.username}
              >
                <FormLabelStyled>Username *</FormLabelStyled>
                <FormControl>
                  <Input
                    value={formData.username}
                    onChange={(e) => {
                      setFormData({ ...formData, username: e.target.value });
                      setServerErrors((prev) => ({ ...prev, username: false }));
                    }}
                    required
                    minLength={3}
                    maxLength={20}
                    pattern="[a-zA-Z0-9_]+"
                  />
                </FormControl>
                <FormDescription>
                  3-20 characters, letters, numbers, and underscores only
                </FormDescription>
                <FormMessageStyled match="valueMissing">
                  Please enter a username
                </FormMessageStyled>
                <FormMessageStyled match="tooShort">
                  Username must be at least 3 characters
                </FormMessageStyled>
                <FormMessageStyled match="tooLong">
                  Username cannot exceed 20 characters
                </FormMessageStyled>
                <FormMessageStyled match="patternMismatch">
                  Username can only contain letters, numbers, and underscores
                </FormMessageStyled>
                <FormMessageStyled forceMatch={serverErrors.username}>
                  This username is already taken. Please choose a different one.
                </FormMessageStyled>
              </FormFieldStyled>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormFieldStyled name="password">
                  <FormLabelStyled>Password *</FormLabelStyled>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                        minLength={8}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormDescription>
                    At least 8 characters with uppercase, lowercase, number, and
                    special character
                  </FormDescription>
                  <FormMessageStyled match="valueMissing">
                    Please enter a password
                  </FormMessageStyled>
                  <FormMessageStyled match="tooShort">
                    Password must be at least 8 characters
                  </FormMessageStyled>
                  <FormMessageStyled match="patternMismatch">
                    Password must contain uppercase, lowercase, number, and
                    special character
                  </FormMessageStyled>
                </FormFieldStyled>

                <FormFieldStyled name="confirmPassword">
                  <FormLabelStyled>Confirm Password *</FormLabelStyled>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            confirmPassword: e.target.value,
                          })
                        }
                        required
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <FormMessageStyled match="valueMissing">
                    Please confirm your password
                  </FormMessageStyled>
                  <FormMessageStyled
                    match={(value) => value !== formData.password}
                  >
                    Passwords do not match
                  </FormMessageStyled>
                </FormFieldStyled>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormFieldStyled name="newsletter" layout="horizontal">
                <div className="flex-1">
                  <FormLabelStyled>Newsletter Subscription</FormLabelStyled>
                  <FormDescription>
                    Receive our weekly newsletter with updates and tips
                  </FormDescription>
                </div>
                <Switch
                  checked={formData.newsletter}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, newsletter: checked })
                  }
                />
              </FormFieldStyled>

              <FormFieldStyled name="notifications" layout="horizontal">
                <div className="flex-1">
                  <FormLabelStyled>Push Notifications</FormLabelStyled>
                  <FormDescription>
                    Get notified about important account activities
                  </FormDescription>
                </div>
                <Switch
                  checked={formData.notifications}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, notifications: checked })
                  }
                />
              </FormFieldStyled>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormFieldStyled name="theme">
                  <FormLabelStyled>Theme Preference</FormLabelStyled>
                  <RadioGroup
                    value={formData.theme}
                    onValueChange={(value) =>
                      setFormData({ ...formData, theme: value })
                    }
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="light" id="light" />
                      <Label htmlFor="light">Light</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="dark" id="dark" />
                      <Label htmlFor="dark">Dark</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="system" id="system" />
                      <Label htmlFor="system">System</Label>
                    </div>
                  </RadioGroup>
                </FormFieldStyled>

                <FormFieldStyled name="language">
                  <FormLabelStyled>Language</FormLabelStyled>
                  <FormControl asChild>
                    <Select
                      value={formData.language}
                      onValueChange={(value) =>
                        setFormData({ ...formData, language: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Español</SelectItem>
                        <SelectItem value="fr">Français</SelectItem>
                        <SelectItem value="de">Deutsch</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormFieldStyled>
              </div>
            </CardContent>
          </Card>

          {/* Custom Validation Example */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Custom Validation Example
              </CardTitle>
              <CardDescription>
                Demonstration of custom validation functions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormFieldStyled name="customValidation">
                <FormLabelStyled>Custom Field</FormLabelStyled>
                <FormControl>
                  <Input
                    value={formData.customValidation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        customValidation: e.target.value,
                      })
                    }
                    placeholder="Enter text with uppercase and number"
                  />
                </FormControl>
                <FormDescription>
                  Must be at least 5 characters with at least one uppercase
                  letter and one number
                </FormDescription>
                <FormMessageStyled
                  match={(value) =>
                    !validateCustomField(value) && value.length > 0
                  }
                >
                  Field must be at least 5 characters with uppercase letter and
                  number
                </FormMessageStyled>
                {/* Show validation state */}
                {formData.customValidation && (
                  <div className="flex items-center gap-2 text-sm mt-1">
                    {validateCustomField(formData.customValidation) ? (
                      <Badge
                        variant="outline"
                        className="text-green-600 border-green-600"
                      >
                        <Check className="h-3 w-3 mr-1" />
                        Valid
                      </Badge>
                    ) : (
                      <Badge
                        variant="outline"
                        className="text-red-600 border-red-600"
                      >
                        <X className="h-3 w-3 mr-1" />
                        Invalid
                      </Badge>
                    )}
                  </div>
                )}
              </FormFieldStyled>
            </CardContent>
          </Card>

          {/* Submit Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <FormSubmitStyled
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Create Account
                </>
              )}
            </FormSubmitStyled>

            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
          </div>

          {/* Status Message */}
          {submitMessage && (
            <Card
              className={
                submitMessage.includes("success")
                  ? "border-green-200 bg-green-50"
                  : "border-red-200 bg-red-50"
              }
            >
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  {submitMessage.includes("success") ? (
                    <Check className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  )}
                  <span
                    className={
                      submitMessage.includes("success")
                        ? "text-green-800"
                        : "text-red-800"
                    }
                  >
                    {submitMessage}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </Form>

      {/* Form State Display */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Current Form State</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Personal Info</h4>
              <ul className="space-y-1">
                <li>
                  Name: {formData.firstName} {formData.lastName}
                </li>
                <li>Email: {formData.email || "Not provided"}</li>
                <li>Phone: {formData.phone || "Not provided"}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Account</h4>
              <ul className="space-y-1">
                <li>Username: {formData.username || "Not set"}</li>
                <li>Password: {formData.password ? "••••••••" : "Not set"}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Preferences</h4>
              <ul className="space-y-1">
                <li>
                  Newsletter: {formData.newsletter ? "Enabled" : "Disabled"}
                </li>
                <li>Theme: {formData.theme}</li>
                <li>Language: {formData.language}</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
