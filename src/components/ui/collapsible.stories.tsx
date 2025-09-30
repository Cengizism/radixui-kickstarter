import { Badge } from './badge';
import { Button } from './button';
import { Card, CardContent, CardHeader } from './card';
import { Separator } from './separator';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import {
  Settings,
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Code,
  Layers,
  FileText,
  HelpCircle,
  ChevronRight,
  Folder,
  File,
  Image,
  Music,
  Video,
} from "lucide-react";

export default {
  title: "UI/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "ghost", "outline", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
    contentVariant: {
      control: "select",
      options: ["default", "bordered", "card", "highlighted"],
    },
  },
};

// Default collapsible
export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[350px]">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Trigger variants
export const TriggerVariants = () => (
  <div className="space-y-4 w-[400px]">
    <div>
      <h3 className="mb-2 text-sm font-medium">Default</h3>
      <Collapsible>
        <CollapsibleTrigger variant="default">
          Default trigger style
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            This is the default trigger variant with hover background.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Ghost</h3>
      <Collapsible>
        <CollapsibleTrigger variant="ghost">
          Ghost trigger style
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Ghost variant with subtle hover effect.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Outline</h3>
      <Collapsible>
        <CollapsibleTrigger variant="outline">
          Outline trigger style
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Outlined variant with border and hover background.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Link</h3>
      <Collapsible>
        <CollapsibleTrigger variant="link">
          Link trigger style
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Link variant with underline hover effect.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
);

// Size variations
export const SizeVariations = () => (
  <div className="space-y-4 w-[400px]">
    <div>
      <h3 className="mb-2 text-sm font-medium">Small</h3>
      <Collapsible>
        <CollapsibleTrigger size="sm">Small size trigger</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Small size content with compact spacing.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Default</h3>
      <Collapsible>
        <CollapsibleTrigger size="default">
          Default size trigger
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Default size content with standard spacing.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Large</h3>
      <Collapsible>
        <CollapsibleTrigger size="lg">Large size trigger</CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Large size content with generous spacing.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
);

// Content variants
export const ContentVariants = () => (
  <div className="space-y-6 w-[400px]">
    <div>
      <h3 className="mb-2 text-sm font-medium">Default</h3>
      <Collapsible>
        <CollapsibleTrigger>Content variants</CollapsibleTrigger>
        <CollapsibleContent variant="default">
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Default content variant without any special styling.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Bordered</h3>
      <Collapsible>
        <CollapsibleTrigger>Bordered content</CollapsibleTrigger>
        <CollapsibleContent variant="bordered">
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Bordered variant with left border and indentation.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Card</h3>
      <Collapsible>
        <CollapsibleTrigger>Card content</CollapsibleTrigger>
        <CollapsibleContent variant="card">
          <div className="text-sm text-muted-foreground">
            Card variant with border, background, and padding.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Highlighted</h3>
      <Collapsible>
        <CollapsibleTrigger>Highlighted content</CollapsibleTrigger>
        <CollapsibleContent variant="highlighted">
          <div className="p-3 text-sm text-muted-foreground">
            Highlighted variant with muted background.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
);

// FAQ example
export const FAQExample = () => {
  const faqs = [
    {
      question: "What is included in the free plan?",
      answer:
        "The free plan includes up to 3 projects, 5GB storage, and community support. You can upgrade anytime to access more features and resources.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your current billing cycle, and you won't be charged again.",
    },
    {
      question: "Is my data secure?",
      answer:
        "We take security seriously. All data is encrypted in transit and at rest. We also conduct regular security audits and follow industry best practices to protect your information.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact support within 30 days of your purchase for a full refund.",
    },
  ];

  return (
    <div className="w-[500px] space-y-2">
      <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <Collapsible key={index}>
          <CollapsibleTrigger variant="outline" className="text-left">
            {faq.question}
          </CollapsibleTrigger>
          <CollapsibleContent variant="bordered">
            <div className="pt-2 pb-4 text-sm text-muted-foreground">
              {faq.answer}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

// Settings panel
export const SettingsPanel = () => {
  const [openSections, setOpenSections] = useState<string[]>(["general"]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <div className="w-[450px] space-y-2">
      <h2 className="text-lg font-semibold mb-4">Settings</h2>

      <Collapsible
        open={openSections.includes("general")}
        onOpenChange={() => toggleSection("general")}
      >
        <CollapsibleTrigger variant="default" className="text-left">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            General Settings
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent variant="card">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Language</span>
              <Badge variant="outline">English</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Theme</span>
              <Badge variant="outline">Dark</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Timezone</span>
              <Badge variant="outline">UTC-8</Badge>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={openSections.includes("account")}
        onOpenChange={() => toggleSection("account")}
      >
        <CollapsibleTrigger variant="default" className="text-left">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Account Settings
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent variant="card">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Email</span>
              <span className="text-muted-foreground">john@example.com</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Two-factor auth</span>
              <Badge variant="secondary">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Plan</span>
              <Badge>Pro</Badge>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={openSections.includes("notifications")}
        onOpenChange={() => toggleSection("notifications")}
      >
        <CollapsibleTrigger variant="default" className="text-left">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Notifications
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent variant="card">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Email notifications</span>
              <Badge variant="secondary">On</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Push notifications</span>
              <Badge variant="outline">Off</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Marketing emails</span>
              <Badge variant="outline">Off</Badge>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={openSections.includes("privacy")}
        onOpenChange={() => toggleSection("privacy")}
      >
        <CollapsibleTrigger variant="default" className="text-left">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Privacy & Security
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent variant="card">
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Profile visibility</span>
              <Badge variant="outline">Private</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Data export</span>
              <Button variant="outline" size="sm">
                Request
              </Button>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// File explorer
export const FileExplorer = () => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(["src"]);

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) =>
      prev.includes(folder)
        ? prev.filter((f) => f !== folder)
        : [...prev, folder]
    );
  };

  return (
    <div className="w-[350px] space-y-1">
      <h3 className="text-sm font-semibold mb-2">Project Files</h3>

      <Collapsible
        open={expandedFolders.includes("src")}
        onOpenChange={() => toggleFolder("src")}
      >
        <CollapsibleTrigger variant="ghost" size="sm">
          <div className="flex items-center gap-2">
            <Folder className="h-4 w-4 text-blue-500" />
            src
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent variant="default">
          <div className="ml-6 space-y-1">
            <Collapsible
              open={expandedFolders.includes("components")}
              onOpenChange={() => toggleFolder("components")}
            >
              <CollapsibleTrigger variant="ghost" size="sm">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-blue-500" />
                  components
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 text-sm p-1">
                    <File className="h-4 w-4 text-gray-500" />
                    Button.tsx
                  </div>
                  <div className="flex items-center gap-2 text-sm p-1">
                    <File className="h-4 w-4 text-gray-500" />
                    Input.tsx
                  </div>
                  <div className="flex items-center gap-2 text-sm p-1">
                    <File className="h-4 w-4 text-gray-500" />
                    Modal.tsx
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={expandedFolders.includes("assets")}
              onOpenChange={() => toggleFolder("assets")}
            >
              <CollapsibleTrigger variant="ghost" size="sm">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-blue-500" />
                  assets
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="ml-6 space-y-1">
                  <div className="flex items-center gap-2 text-sm p-1">
                    <Image className="h-4 w-4 text-green-500" />
                    logo.png
                  </div>
                  <div className="flex items-center gap-2 text-sm p-1">
                    <Music className="h-4 w-4 text-purple-500" />
                    notification.mp3
                  </div>
                  <div className="flex items-center gap-2 text-sm p-1">
                    <Video className="h-4 w-4 text-red-500" />
                    demo.mp4
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="flex items-center gap-2 text-sm p-1">
              <File className="h-4 w-4 text-gray-500" />
              App.tsx
            </div>
            <div className="flex items-center gap-2 text-sm p-1">
              <File className="h-4 w-4 text-gray-500" />
              main.tsx
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible
        open={expandedFolders.includes("public")}
        onOpenChange={() => toggleFolder("public")}
      >
        <CollapsibleTrigger variant="ghost" size="sm">
          <div className="flex items-center gap-2">
            <Folder className="h-4 w-4 text-blue-500" />
            public
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="ml-6 space-y-1">
            <div className="flex items-center gap-2 text-sm p-1">
              <File className="h-4 w-4 text-orange-500" />
              index.html
            </div>
            <div className="flex items-center gap-2 text-sm p-1">
              <Image className="h-4 w-4 text-green-500" />
              favicon.ico
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <div className="flex items-center gap-2 text-sm p-1">
        <File className="h-4 w-4 text-gray-500" />
        package.json
      </div>
      <div className="flex items-center gap-2 text-sm p-1">
        <File className="h-4 w-4 text-gray-500" />
        README.md
      </div>
    </div>
  );
};

// Navigation menu
export const NavigationMenu = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const menuItems = [
    {
      id: "overview",
      label: "Overview",
      icon: Layers,
      content: "Dashboard overview with key metrics and recent activity.",
    },
    {
      id: "projects",
      label: "Projects",
      icon: Code,
      content: "Manage your projects, repositories, and deployments.",
    },
    {
      id: "database",
      label: "Database",
      icon: Database,
      content: "Configure database connections and manage data.",
    },
    {
      id: "design",
      label: "Design System",
      icon: Palette,
      content: "Design tokens, components, and style guidelines.",
    },
    {
      id: "docs",
      label: "Documentation",
      icon: FileText,
      content: "API documentation, guides, and tutorials.",
    },
    {
      id: "help",
      label: "Help & Support",
      icon: HelpCircle,
      content: "Get help, report issues, and contact support.",
    },
  ];

  return (
    <div className="w-[400px]">
      <h3 className="text-sm font-semibold mb-4">Navigation</h3>
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Collapsible
            key={item.id}
            open={activeSection === item.id}
            onOpenChange={(open) => open && setActiveSection(item.id)}
          >
            <CollapsibleTrigger
              variant="ghost"
              className={`text-left w-full ${
                activeSection === item.id ? "bg-muted" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <item.icon className="h-4 w-4" />
                {item.label}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent variant="highlighted">
              <div className="text-sm text-muted-foreground">
                {item.content}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

// Custom chevron
export const CustomChevron = () => (
  <div className="space-y-4 w-[400px]">
    <div>
      <h3 className="mb-2 text-sm font-medium">No Chevron</h3>
      <Collapsible>
        <CollapsibleTrigger showChevron={false} variant="outline">
          <div className="flex items-center gap-2">
            <ChevronRight className="h-4 w-4" />
            Custom icon instead of chevron
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            You can hide the default chevron and use your own icon.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">With Badge</h3>
      <Collapsible>
        <CollapsibleTrigger variant="outline">
          <div className="flex items-center gap-2">
            <span>Notifications</span>
            <Badge variant="destructive" className="ml-auto mr-2">
              3
            </Badge>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="pt-2 pb-4 text-sm text-muted-foreground">
            Content can include badges and other elements in the trigger.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  </div>
);

// Controlled example
export const ControlledExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[400px] space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => setIsOpen(!isOpen)} size="sm">
          {isOpen ? "Close" : "Open"} Panel
        </Button>
        <Button onClick={() => setIsOpen(false)} variant="outline" size="sm">
          Force Close
        </Button>
      </div>

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger variant="outline">
          Controlled Collapsible Panel
        </CollapsibleTrigger>
        <CollapsibleContent variant="card">
          <div className="text-sm text-muted-foreground">
            This collapsible is controlled by external buttons. The open state
            is: <strong>{isOpen ? "Open" : "Closed"}</strong>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Card layout
export const CardLayout = () => (
  <div className="w-[500px]">
    <Card>
      <CardHeader>
        <h3 className="text-lg font-semibold">Project Settings</h3>
      </CardHeader>
      <CardContent className="space-y-2">
        <Collapsible>
          <CollapsibleTrigger variant="ghost">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Build Configuration
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent variant="highlighted">
            <div className="space-y-2 text-sm">
              <div>
                Build command:{" "}
                <code className="bg-muted px-1 rounded">npm run build</code>
              </div>
              <div>
                Output directory:{" "}
                <code className="bg-muted px-1 rounded">dist</code>
              </div>
              <div>
                Node version:{" "}
                <code className="bg-muted px-1 rounded">18.x</code>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <Collapsible>
          <CollapsibleTrigger variant="ghost">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Environment Variables
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent variant="highlighted">
            <div className="space-y-2 text-sm">
              <div>
                DATABASE_URL: <Badge variant="outline">Set</Badge>
              </div>
              <div>
                API_KEY: <Badge variant="outline">Set</Badge>
              </div>
              <div>
                REDIS_URL: <Badge variant="secondary">Not set</Badge>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        <Collapsible>
          <CollapsibleTrigger variant="ghost">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Security Settings
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent variant="highlighted">
            <div className="space-y-2 text-sm">
              <div>
                HTTPS only: <Badge>Enabled</Badge>
              </div>
              <div>
                CORS policy: <Badge variant="outline">Configured</Badge>
              </div>
              <div>
                Rate limiting: <Badge>Active</Badge>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  </div>
);

// Interactive playground
export const Playground = (args: {
  variant?: "default" | "ghost" | "outline" | "link";
  size?: "sm" | "default" | "lg";
  contentVariant?: "default" | "bordered" | "card" | "highlighted";
}) => (
  <div className="w-[400px]">
    <Collapsible>
      <CollapsibleTrigger variant={args.variant} size={args.size}>
        Playground Collapsible
      </CollapsibleTrigger>
      <CollapsibleContent variant={args.contentVariant}>
        <div className="pt-2 pb-4 text-sm text-muted-foreground">
          This is a playground where you can test different variants and sizes.
          Current settings: variant={args.variant}, size={args.size},
          contentVariant={args.contentVariant}
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

Playground.args = {
  variant: "default",
  size: "default",
  contentVariant: "default",
};
