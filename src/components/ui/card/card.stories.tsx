import { Button } from '@/components/ui/button';
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "./card";

const meta = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible container component for grouping related content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // HTML Props
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the card",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
      },
    },
    children: {
      control: false,
      description: "The content to render inside the card",
      table: {
        category: "Content Props",
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Define custom args type for playground story
type PlaygroundArgs = React.ComponentProps<typeof Card> & {
  showHeader?: boolean;
  showDescription?: boolean;
  showAction?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  content?: string;
  interactive?: boolean;
};

// Interactive playground for testing different card configurations
export const Playground = {
  args: {
    className: "w-80",
  },
  argTypes: {
    showHeader: {
      control: "boolean",
      description: "Show card header section",
      table: {
        category: "Layout",
        defaultValue: { summary: "true" },
      },
    },
    showDescription: {
      control: "boolean",
      description: "Show card description in header",
      table: {
        category: "Layout",
        defaultValue: { summary: "true" },
      },
    },
    showAction: {
      control: "boolean",
      description: "Show action button in header",
      table: {
        category: "Layout",
        defaultValue: { summary: "false" },
      },
    },
    showFooter: {
      control: "boolean",
      description: "Show card footer section",
      table: {
        category: "Layout",
        defaultValue: { summary: "true" },
      },
    },
    title: {
      control: "text",
      description: "Card title text",
      table: {
        category: "Content",
        defaultValue: { summary: "Card Title" },
      },
    },
    description: {
      control: "text",
      description: "Card description text",
      table: {
        category: "Content",
        defaultValue: { summary: "Card description text" },
      },
    },
    content: {
      control: "text",
      description: "Main card content",
      table: {
        category: "Content",
        defaultValue: { summary: "Card content goes here" },
      },
    },
    interactive: {
      control: "boolean",
      description: "Make card interactive with hover effects",
      table: {
        category: "Behavior",
        defaultValue: { summary: "false" },
      },
    },
  },
  render: ({
    className,
    showHeader = true,
    showDescription = true,
    showAction = false,
    showFooter = true,
    title = "Card Title",
    description = "Card description text",
    content = "This is the main content of the card. You can customize all sections using the controls.",
    interactive = false,
    ...args
  }: PlaygroundArgs) => (
    <Card
      className={`${className} ${interactive ? "cursor-pointer transition-colors hover:bg-accent" : ""}`}
      {...args}
    >
      {showHeader && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {showDescription && <CardDescription>{description}</CardDescription>}
          {showAction && (
            <CardAction>
              <Button variant="ghost" size="icon">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Button>
            </CardAction>
          )}
        </CardHeader>
      )}
      <CardContent>
        <p>{content}</p>
      </CardContent>
      {showFooter && (
        <CardFooter>
          <Button>Primary Action</Button>
          <Button variant="outline">Secondary</Button>
        </CardFooter>
      )}
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to experiment with different card configurations and content.",
      },
    },
  },
} satisfies StoryObj<PlaygroundArgs>;

// Default story - shows all card components
export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          A flexible container for grouping related content with header, body,
          and footer sections.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card demonstrates all the available card components working
          together. The content can contain any type of information or
          interactive elements.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Primary Action</Button>
        <Button variant="outline">Secondary</Button>
      </CardFooter>
    </Card>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete card showing header, content, and footer sections with typical usage patterns.",
      },
    },
  },
};

// Multiple cards
export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>First Card</CardTitle>
          <CardDescription>This is the first card in the grid.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the first card.</p>
        </CardContent>
        <CardFooter>
          <Button>Learn More</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Second Card</CardTitle>
          <CardDescription>
            This is the second card in the grid.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for the second card.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline">View Details</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Third Card</CardTitle>
          <CardDescription>This is the third card in the grid.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Content for the third card with more text to demonstrate how cards
            handle varying content lengths.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Fourth Card</CardTitle>
          <CardDescription>
            This is the fourth card in the grid.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Simple content for the fourth card.</p>
        </CardContent>
        <CardFooter>
          <Button variant="secondary">Action</Button>
          <Button variant="ghost">Skip</Button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple cards arranged in a responsive grid.",
      },
    },
  },
};

// Content variations
export const ContentVariations: Story = {
  render: () => (
    <div className="space-y-4">
      {/* Simple content */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Simple Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p>A card with just basic text content.</p>
        </CardContent>
      </Card>

      {/* Rich content */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Rich Content</CardTitle>
          <CardDescription>
            This card contains various types of content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <svg
              className="h-5 w-5 text-green-500"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1576 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1576 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-sm font-medium">Completed</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>

      {/* List content */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Task List</CardTitle>
          <CardDescription>A card with a list of items.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <input type="checkbox" checked readOnly className="rounded" />
              <span className="text-sm line-through text-muted-foreground">
                Complete setup
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" checked readOnly className="rounded" />
              <span className="text-sm line-through text-muted-foreground">
                Install dependencies
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" readOnly className="rounded" />
              <span className="text-sm">Configure settings</span>
            </li>
            <li className="flex items-center space-x-2">
              <input type="checkbox" readOnly className="rounded" />
              <span className="text-sm">Deploy application</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different types of content that can be displayed in cards.",
      },
    },
  },
};
