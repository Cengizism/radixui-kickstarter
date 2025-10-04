import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import {
  CheckCircle,
  MoreVertical,
  Heart,
  Star,
  MessageCircle,
  Share,
  Calendar,
  MapPin,
  Users,
  TrendingUp,
  Package,
  Shield,
  Globe,
} from "lucide-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
  CardCover,
  CardMeta,
  CardTags,
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
                <MoreVertical className="h-4 w-4" />
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
          <Button size="sm">Primary Action</Button>
          <Button size="sm" variant="outline">
            Secondary
          </Button>
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
        <CardDescription>A flexible container</CardDescription>
        <CardAction>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This card demonstrates all the available card components working
          together. The content can contain any type of information or
          interactive elements.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Primary Action</Button>
        <Button size="sm" variant="outline">
          Secondary
        </Button>
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
            <Badge className="bg-success text-success-foreground border-transparent">
              <CheckCircle className="h-3 w-3" />
              Completed
            </Badge>
          </div>
          <Progress value={75} showLabel label="Progress" />
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
              <Checkbox checked disabled />
              <span className="text-sm line-through text-muted-foreground">
                Complete setup
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Checkbox checked disabled />
              <span className="text-sm line-through text-muted-foreground">
                Install dependencies
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Checkbox disabled />
              <span className="text-sm">Configure settings</span>
            </li>
            <li className="flex items-center space-x-2">
              <Checkbox disabled />
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

// User Profile Cards
export const UserCards: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">User Profile Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <div className="font-medium text-sm">John Doe</div>
                  <div className="text-muted-foreground text-xs">@johndoe</div>
                </div>
              </div>
              <CardAction>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Frontend developer passionate about creating amazing user
                experiences.
              </p>
              <CardMeta className="mt-3">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </CardMeta>
            </CardContent>
          </Card>

          <Card className="max-w-md">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <div className="font-medium text-sm">Sarah Anderson</div>
                  <div className="text-muted-foreground text-xs">
                    @sarah_codes
                  </div>
                </div>
              </div>
              <CardAction>
                <Button variant="default" size="sm">
                  Following
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Full-stack engineer building scalable web applications.
              </p>
              <CardMeta className="mt-3">
                <Users className="h-4 w-4" />
                <span>1.2k followers</span>
              </CardMeta>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader className="text-center">
              <Avatar className="mx-auto mb-2 h-16 w-16">
                <AvatarFallback className="text-lg">MJ</AvatarFallback>
              </Avatar>
              <CardTitle>Michael Johnson</CardTitle>
              <CardDescription>Senior Product Manager</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold">128</div>
                  <div className="text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">2.4k</div>
                  <div className="text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">890</div>
                  <div className="text-muted-foreground">Following</div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">View Profile</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Various user profile card layouts with avatars and user information.",
      },
    },
  },
};

// Article Cards
export const ArticleCards: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Article Cards</h3>
        <div className="space-y-4">
          {/* Vertical Article Card */}
          <Card className="max-w-lg">
            <CardCover className="bg-gradient-to-br from-indigo-400 to-purple-600">
              <div className="text-center text-white">
                <Globe className="h-12 w-12 mx-auto mb-2" />
                <div className="text-sm">Article Cover</div>
              </div>
            </CardCover>
            <CardHeader>
              <CardTags>
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Web Development</Badge>
              </CardTags>
              <CardTitle>The Future of Web Development</CardTitle>
              <CardDescription>
                Exploring emerging technologies and trends that will shape the
                future of web development.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardMeta>
                <Calendar className="h-4 w-4" />
                <time>March 15, 2024</time>
                <span>•</span>
                <span>5 min read</span>
              </CardMeta>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  <AvatarFallback className="text-xs">AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5">
                  <div className="font-medium text-sm">Alex Developer</div>
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>

          {/* Horizontal Article Card */}
          <Card className="max-w-2xl flex-row gap-4 items-start">
            <CardCover className="w-48 flex-shrink-0 aspect-[4/3] bg-gradient-to-br from-emerald-400 to-teal-600 rounded-sm">
              <div className="text-center text-white">
                <Shield className="h-8 w-8 mx-auto mb-1" />
                <div className="text-xs">Article Cover</div>
              </div>
            </CardCover>
            <div className="flex flex-col flex-1">
              <CardHeader className="pb-2">
                <CardTags>
                  <Badge variant="outline">Design</Badge>
                </CardTags>
                <CardTitle className="text-lg">
                  Building Better User Interfaces
                </CardTitle>
                <CardDescription className="text-sm">
                  A comprehensive guide to modern UI/UX principles and best
                  practices.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 flex-1">
                <CardMeta>
                  <Calendar className="h-4 w-4" />
                  <time>March 12, 2024</time>
                  <span>•</span>
                  <span>8 min read</span>
                </CardMeta>
              </CardContent>
              <CardFooter className="pt-2">
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback className="text-xs">UD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <div className="font-medium text-sm">UI Designer</div>
                  </div>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Article cards in both vertical and horizontal orientations with rich metadata.",
      },
    },
  },
};

// Statistics Cards
export const StatisticsCards: Story = {
  render: () => (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">Statistics Cards</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="max-w-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Revenue
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,350</div>
            <p className="text-xs text-muted-foreground">+180 from last week</p>
          </CardContent>
        </Card>

        <Card className="max-w-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Orders
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="max-w-xs">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Growth Rate
              </CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">
              +2.5% from last quarter
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Statistics cards for dashboards and analytics.",
      },
    },
  },
};
