import { Footer } from "./footer";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  StatsCardGrid,
  ContentBlock,
  TwoColumnLayout,
  ArticleLayout,
} from "@/stories/content/layouts.stories";

const meta = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A simple footer component for displaying copyright information, links, and other footer content. Positioning is handled by the parent layout container.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the footer element.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    children: {
      control: false,
      description:
        "Custom content to display in the footer. If not provided, default copyright and links are shown.",
      table: {
        category: "Content Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive playground
export const Playground: Story = {
  render: (args) => (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        <StatsCardGrid />
        <ContentBlock />
      </div>
      <Footer {...args} />
    </div>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different footer configurations.",
      },
    },
  },
};

// Default footer in flex layout
export const Default: Story = {
  render: () => (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        <StatsCardGrid />
        <TwoColumnLayout />
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Default footer in a flex layout that naturally sticks to the bottom.",
      },
    },
  },
};

// Footer flowing with content
export const FlowingWithContent: Story = {
  render: () => (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        <ArticleLayout />
        <StatsCardGrid />
        <ContentBlock />
        <ContentBlock />
        <TwoColumnLayout />
        <ContentBlock />
        <StatsCardGrid />
        <ContentBlock />
        <TwoColumnLayout />
        <ContentBlock />
      </div>
      <Footer />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Footer that flows naturally with long content in the document flow.",
      },
    },
  },
};

// Custom content
export const CustomContent: Story = {
  render: () => (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        <StatsCardGrid />
        <ContentBlock />
        <TwoColumnLayout />
      </div>
      <Footer>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                A
              </span>
            </div>
            <span className="font-semibold">My Application</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Help
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            Made with ❤️ by Our Team
          </div>
        </div>
      </Footer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Footer with custom content including logo, navigation links, and branding.",
      },
    },
  },
};

// Minimal footer
export const Minimal: Story = {
  render: () => (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        <StatsCardGrid />
      </div>
      <Footer>
        <div className="text-center text-sm text-muted-foreground">
          © 2024 My Application. All rights reserved.
        </div>
      </Footer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Minimal footer with just copyright information.",
      },
    },
  },
};

// Footer with social links
export const WithSocialLinks: Story = {
  render: () => (
    <div className="h-screen w-full flex flex-col">
      <div className="flex-1 p-6 space-y-6">
        <StatsCardGrid />
        <ContentBlock />
        <TwoColumnLayout />
      </div>
      <Footer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>hello@example.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <a href="#" className="block hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="block hover:underline">
                Terms of Service
              </a>
              <a href="#" className="block hover:underline">
                Support
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-muted-foreground hover:underline">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:underline">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:underline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Footer with multiple sections including contact info, links, and social media.",
      },
    },
  },
};
