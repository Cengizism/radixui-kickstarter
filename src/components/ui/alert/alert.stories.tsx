import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  XCircle,
  Bell,
  Shield,
  Zap,
  Download,
  Upload,
} from "lucide-react";

const meta = {
  title: "UI/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A callout component that draws attention to important information or status updates.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Appearance Props
    variant: {
      control: { type: "select" },
      options: ["default", "destructive"],
      description:
        "The visual variant of the alert. Controls color scheme and styling.",
      table: {
        category: "Appearance Props",
        type: { summary: '"default" | "destructive"' },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the alert.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Content Props
    children: {
      control: "text",
      description:
        "The content of the alert. Typically includes AlertTitle and AlertDescription.",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },

    // HTML Props
    role: {
      control: "text",
      description:
        "ARIA role attribute for accessibility. Defaults to 'alert'.",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
        defaultValue: { summary: '"alert"' },
      },
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground for testing different alert configurations
export const Playground: Story = {
  args: {
    variant: "default",
  },
  render: (args) => (
    <Alert {...args} className="w-96">
      <AlertCircle className="size-4" />
      <AlertTitle>Alert Title</AlertTitle>
      <AlertDescription>
        Interactive playground to experiment with different alert variants and
        configurations. Use the controls panel to change the variant and see
        different alert styles.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different alert configurations and variants.",
      },
    },
  },
};

// Default alert
export const Default: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <AlertCircle className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "default",
  },
};

// Destructive variant
export const Destructive: Story = {
  render: (args) => (
    <Alert {...args} className="w-96">
      <AlertCircle className="size-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: "destructive",
  },
};

// Success alert
export const Success: Story = {
  render: () => (
    <Alert className="w-96">
      <CheckCircle className="size-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Success alert using CheckCircle icon with positive messaging.",
      },
    },
  },
};

// Without title
export const WithoutTitle: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <AlertCircle className="size-4" />
        <AlertDescription>
          This alert only has a description without a title.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertDescription>
          Error: Unable to process your request.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Alerts can work without titles when the message is self-explanatory.",
      },
    },
  },
};

// Without icon
export const WithoutIcon: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <AlertTitle>System Maintenance</AlertTitle>
        <AlertDescription>
          Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Service Unavailable</AlertTitle>
        <AlertDescription>
          The service is temporarily unavailable. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Clean alerts without icons for simpler presentations.",
      },
    },
  },
};

// Different icons
export const DifferentIcons: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <Bell className="size-4" />
        <AlertTitle>Notification</AlertTitle>
        <AlertDescription>You have 3 new messages waiting.</AlertDescription>
      </Alert>

      <Alert>
        <Shield className="size-4" />
        <AlertTitle>Security Update</AlertTitle>
        <AlertDescription>
          A new security patch is available for your system.
        </AlertDescription>
      </Alert>

      <Alert>
        <Zap className="size-4" />
        <AlertTitle>Performance</AlertTitle>
        <AlertDescription>
          Your app is running 40% faster than last month.
        </AlertDescription>
      </Alert>

      <Alert>
        <Download className="size-4" />
        <AlertTitle>Download Complete</AlertTitle>
        <AlertDescription>
          Your file has been downloaded successfully.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Various Lucide React icons for different alert contexts.",
      },
    },
  },
};

// Long content
export const LongContent: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <AlertCircle className="size-4" />
        <AlertTitle>Important Update Available</AlertTitle>
        <AlertDescription>
          We've released a major update that includes new features, performance
          improvements, and security enhancements. This update is recommended
          for all users and includes fixes for several reported issues. Please
          backup your data before updating and expect a brief service
          interruption during the update process.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Alerts handle longer content gracefully with proper text wrapping.",
      },
    },
  },
};

// Multiple paragraphs
export const MultipleParagraphs: Story = {
  render: () => (
    <Alert className="w-96">
      <Info className="size-4" />
      <AlertTitle>Terms of Service Update</AlertTitle>
      <AlertDescription>
        <p>
          We've updated our Terms of Service to better reflect our current
          practices.
        </p>
        <p>
          The changes take effect on January 1st, 2024. Key updates include:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Improved data privacy protections</li>
          <li>Clarified refund policy</li>
          <li>Updated contact information</li>
        </ul>
      </AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story: "Rich content support with multiple paragraphs and lists.",
      },
    },
  },
};

// Minimal alert
export const Minimal: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertDescription>Simple message without title or icon.</AlertDescription>
    </Alert>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Minimal alert with just a description for subtle notifications.",
      },
    },
  },
};

// Action-oriented alerts
export const ActionOriented: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <Upload className="size-4" />
        <AlertTitle>Upload Required</AlertTitle>
        <AlertDescription>
          Please upload your verification documents to complete your account
          setup.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangle className="size-4" />
        <AlertTitle>Action Required</AlertTitle>
        <AlertDescription>
          Your subscription expires in 3 days. Renew now to avoid service
          interruption.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertTitle>Immediate Action Required</AlertTitle>
        <AlertDescription>
          Suspicious activity detected on your account. Please change your
          password immediately.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Alerts that prompt users to take specific actions.",
      },
    },
  },
};

// Status updates
export const StatusUpdates: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <CheckCircle className="size-4" />
        <AlertTitle>System Online</AlertTitle>
        <AlertDescription>
          All systems are operational and running smoothly.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangle className="size-4" />
        <AlertTitle>Partial Outage</AlertTitle>
        <AlertDescription>
          Some features may be temporarily unavailable while we perform
          maintenance.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertTitle>Service Disruption</AlertTitle>
        <AlertDescription>
          We're experiencing technical difficulties. Our team is working to
          resolve the issue.
        </AlertDescription>
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "System status alerts for operational updates and incidents.",
      },
    },
  },
};
