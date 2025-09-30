import { AlertCircle, CreditCard, User } from 'lucide-react';
import { Checkbox } from './checkbox';
import { Input } from './input';
import { Label } from './label';
import { RadioGroup, RadioGroupItem } from './radio-group';
import { Separator } from './separator';
import { Switch } from './switch';
import { Textarea } from './textarea';
import { useState } from 'react';
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
} from "./select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export default {
  title: "UI/Form",
  component: Form,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    layout: {
      control: "select",
      options: ["default", "horizontal", "inline"],
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

// Contact form with various form elements
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
    category: "",
  });

  return (
    <div className="w-full max-w-lg">
      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            Send us a message and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <div className="space-y-4">
              <FormFieldStyled name="name">
                <FormLabelStyled>Name *</FormLabelStyled>
                <FormControl>
                  <Input
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </FormControl>
              </FormFieldStyled>

              <FormFieldStyled name="email">
                <FormLabelStyled>Email *</FormLabelStyled>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
              </FormFieldStyled>

              <FormFieldStyled name="category">
                <FormLabelStyled>Category</FormLabelStyled>
                <Select value={formData.category}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="billing">Billing Question</SelectItem>
                    <SelectItem value="feature">Feature Request</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormFieldStyled>

              <FormFieldStyled name="subject">
                <FormLabelStyled>Subject</FormLabelStyled>
                <FormControl>
                  <Input
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </FormControl>
              </FormFieldStyled>

              <FormFieldStyled name="priority">
                <FormLabelStyled>Priority</FormLabelStyled>
                <RadioGroup value={formData.priority}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                </RadioGroup>
              </FormFieldStyled>

              <FormFieldStyled name="message">
                <FormLabelStyled>Message *</FormLabelStyled>
                <FormControl>
                  <Textarea
                    placeholder="Please describe your inquiry in detail..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                  />
                </FormControl>
              </FormFieldStyled>

              <FormSubmitStyled type="submit" className="w-full">
                Send Message
              </FormSubmitStyled>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

// Profile form with grid layout
export const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.com",
    bio: "Software developer passionate about creating great user experiences.",
    notifications: true,
    marketing: false,
  });

  return (
    <div className="w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Settings
          </CardTitle>
          <CardDescription>
            Manage your profile information and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <FormFieldStyled name="firstName">
                  <FormLabelStyled>First Name</FormLabelStyled>
                  <FormControl>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>

                <FormFieldStyled name="lastName">
                  <FormLabelStyled>Last Name</FormLabelStyled>
                  <FormControl>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>
              </div>

              <FormFieldStyled name="email">
                <FormLabelStyled>Email Address</FormLabelStyled>
                <FormControl>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </FormControl>
              </FormFieldStyled>

              <div className="grid grid-cols-2 gap-4">
                <FormFieldStyled name="phone">
                  <FormLabelStyled>Phone</FormLabelStyled>
                  <FormControl>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>

                <FormFieldStyled name="website">
                  <FormLabelStyled>Website</FormLabelStyled>
                  <FormControl>
                    <Input
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        setFormData({ ...formData, website: e.target.value })
                      }
                    />
                  </FormControl>
                </FormFieldStyled>
              </div>

              <FormFieldStyled name="bio">
                <FormLabelStyled>Bio</FormLabelStyled>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about yourself..."
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                  />
                </FormControl>
                <FormDescription>
                  Brief description for your profile (max 160 characters)
                </FormDescription>
              </FormFieldStyled>

              <Separator />

              <div className="space-y-4">
                <h4 className="font-medium">Notification Preferences</h4>

                <FormFieldStyled name="notifications" layout="horizontal">
                  <div className="flex-1">
                    <FormLabelStyled>Email Notifications</FormLabelStyled>
                    <FormDescription>
                      Receive notifications about your account activity
                    </FormDescription>
                  </div>
                  <Switch
                    checked={formData.notifications}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, notifications: checked })
                    }
                  />
                </FormFieldStyled>

                <FormFieldStyled name="marketing" layout="horizontal">
                  <div className="flex-1">
                    <FormLabelStyled>Marketing Emails</FormLabelStyled>
                    <FormDescription>
                      Receive updates about new features and promotions
                    </FormDescription>
                  </div>
                  <Switch
                    checked={formData.marketing}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, marketing: checked })
                    }
                  />
                </FormFieldStyled>
              </div>

              <div className="flex gap-3">
                <FormSubmitStyled type="submit">Save Changes</FormSubmitStyled>
                <FormSubmitStyled variant="outline" type="button">
                  Cancel
                </FormSubmitStyled>
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

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
export const SizeVariations = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Small Form</h3>
      <Form>
        <div className="space-y-3 max-w-xs">
          <FormFieldStyled name="email">
            <FormLabelStyled size="sm">Email</FormLabelStyled>
            <FormControl>
              <Input placeholder="Enter email" className="h-8 px-2 text-xs" />
            </FormControl>
          </FormFieldStyled>

          <FormSubmitStyled type="submit" size="sm">
            Submit
          </FormSubmitStyled>
        </div>
      </Form>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Default Form</h3>
      <Form>
        <div className="space-y-4 max-w-sm">
          <FormFieldStyled name="email">
            <FormLabelStyled>Email</FormLabelStyled>
            <FormControl>
              <Input placeholder="Enter email" />
            </FormControl>
          </FormFieldStyled>

          <FormSubmitStyled type="submit">Submit</FormSubmitStyled>
        </div>
      </Form>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Large Form</h3>
      <Form>
        <div className="space-y-4 max-w-md">
          <FormFieldStyled name="email">
            <FormLabelStyled size="lg">Email</FormLabelStyled>
            <FormControl>
              <Input placeholder="Enter email" className="h-12 px-4" />
            </FormControl>
          </FormFieldStyled>

          <FormSubmitStyled type="submit" size="lg">
            Submit
          </FormSubmitStyled>
        </div>
      </Form>
    </div>
  </div>
);

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
