import { Avatar, AvatarFallback, AvatarImage } from '../avatar/avatar';
import { Badge } from '../badge/badge';
import { Button } from './button';
import { Card, CardContent } from '../card/card';
import { Separator } from '../separator/separator';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardArrowStyled,
  HoverCardProfile,
} from "./hover-card";
import {
  MapPin,
  Calendar,
  Globe,
  Building,
  Star,
  GitBranch,
  Users,
  Heart,
  MessageCircle,
  Clock,
  Info,
  Shield,
  Zap,
  TrendingUp,
  Activity,
  Eye,
  Download,
  Play,
  Volume2,
  FileText,
  Code,
  Database,
} from "lucide-react";

export default {
  title: "UI/HoverCard",
  component: HoverCard,
  docs: {
    description: {
      component:
        "A hover card component that displays rich content when hovering over a trigger element. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
};

// Default hover card
export const Default = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link" className="underline">
        @radix
      </Button>
    </HoverCardTrigger>
    <HoverCardContent>
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/radix-ui.png" />
          <AvatarFallback>RX</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@radix</h4>
          <p className="text-sm">
            The React primitive to build design systems.
          </p>
          <div className="flex items-center pt-2">
            <Calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);

// Size variations
export const SizeVariations = () => (
  <div className="flex flex-wrap gap-8 items-center">
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </HoverCardTrigger>
      <HoverCardContent size="sm">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Small Card</h4>
          <p className="text-xs text-muted-foreground">
            Compact hover card for minimal information.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Default</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Default Card</h4>
          <p className="text-sm text-muted-foreground">
            Standard hover card with balanced content space.
          </p>
          <div className="flex items-center pt-2">
            <Info className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              Additional context
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Large</Button>
      </HoverCardTrigger>
      <HoverCardContent size="lg">
        <div className="space-y-3">
          <h4 className="text-base font-semibold">Large Card</h4>
          <p className="text-sm text-muted-foreground">
            Spacious hover card for detailed information and rich content.
            Perfect for comprehensive previews.
          </p>
          <div className="flex items-center pt-2">
            <Clock className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-muted-foreground">
              Last updated 2 hours ago
            </span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Extra Large</Button>
      </HoverCardTrigger>
      <HoverCardContent size="xl">
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Extra Large Card</h4>
          <p className="text-sm text-muted-foreground">
            Maximum size hover card for extensive content, detailed
            descriptions, and complex layouts with multiple sections of
            information.
          </p>
          <Separator />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Type:</span> Interactive
            </div>
            <div>
              <span className="font-medium">Status:</span> Active
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

// User profile hover cards
export const UserProfiles = () => (
  <div className="space-y-4">
    <div className="flex flex-wrap gap-4 items-center">
      {/* Developer profile */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-left p-0 h-auto">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/vercel.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <span className="font-medium">@johndoe</span>
            </div>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <HoverCardProfile
            avatar="https://github.com/vercel.png"
            name="John Doe"
            username="johndoe"
            description="Frontend Developer passionate about React and TypeScript. Building the future of web development."
            verified={true}
            stats={[
              { label: "following", value: 234 },
              { label: "followers", value: "1.2k" },
            ]}
          />
          <Separator className="my-3" />
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            San Francisco, CA
          </div>
        </HoverCardContent>
      </HoverCard>

      {/* Designer profile */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-left p-0 h-auto">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <span className="font-medium">@sarahm</span>
            </div>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <HoverCardProfile
            avatar="https://github.com/shadcn.png"
            name="Sarah Miller"
            username="sarahm"
            description="UI/UX Designer crafting beautiful and intuitive user experiences. Design systems enthusiast."
            stats={[
              { label: "projects", value: 47 },
              { label: "likes", value: "5.4k" },
            ]}
          />
          <div className="mt-3 flex gap-2">
            <Badge variant="secondary" className="text-xs">
              Design
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Figma
            </Badge>
            <Badge variant="secondary" className="text-xs">
              Prototyping
            </Badge>
          </div>
        </HoverCardContent>
      </HoverCard>

      {/* Company profile */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-left p-0 h-auto">
            <div className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src="https://github.com/radix-ui.png" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <span className="font-medium">@acmecorp</span>
            </div>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://github.com/radix-ui.png" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">Acme Corp</h4>
                  <Shield className="h-4 w-4 text-blue-500" />
                </div>
                <p className="text-sm text-muted-foreground">@acmecorp</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovative technology solutions for modern businesses. Building
              the tools of tomorrow, today.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Building className="h-4 w-4" />
                <span>Tech Company</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>1.2k employees</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>

    <p className="text-sm text-muted-foreground">
      Hover over the usernames above to see their profile cards
    </p>
  </div>
);

// Product showcase
export const ProductShowcase = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {/* App preview */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-sm">Dev Tools</h3>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent size="lg">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold">Developer Tools</h4>
              <Badge variant="secondary">v2.1.0</Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Powerful development tools for modern web applications. Debug,
            optimize, and deploy with confidence.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              <span>4.9 rating</span>
            </div>
            <div className="flex items-center gap-1">
              <Download className="h-3 w-3" />
              <span>10k+ downloads</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    {/* Music app */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <Volume2 className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-medium text-sm">Music Pro</h3>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent size="lg">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Volume2 className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h4 className="font-semibold">Music Pro</h4>
              <Badge className="bg-purple-100 text-purple-700">Premium</Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            High-quality music streaming with offline playback, custom
            playlists, and AI-powered recommendations.
          </p>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Play className="h-3 w-3" />
              <span>50M+ songs</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3 text-red-500" />
              <span>Ad-free</span>
            </div>
          </div>
          <Button size="sm" className="w-full">
            Try Free
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>

    {/* Analytics app */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium text-sm">Analytics</h3>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h4 className="font-semibold">Web Analytics</h4>
          </div>
          <p className="text-sm text-muted-foreground">
            Comprehensive analytics dashboard with real-time insights.
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="font-medium">Users:</span> 12.5k
            </div>
            <div>
              <span className="font-medium">Sessions:</span> 45.2k
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    {/* Database app */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-2 flex items-center justify-center">
              <Database className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-medium text-sm">CloudDB</h3>
          </CardContent>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Database className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-semibold">CloudDB</h4>
              <Badge variant="outline">Enterprise</Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Scalable cloud database with automatic backups and encryption.
          </p>
          <div className="text-xs space-y-1">
            <div className="flex justify-between">
              <span>Storage:</span>
              <span className="font-medium">500GB</span>
            </div>
            <div className="flex justify-between">
              <span>Uptime:</span>
              <span className="font-medium text-green-600">99.9%</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

// Link previews
export const LinkPreviews = () => (
  <div className="prose prose-sm max-w-md space-y-4">
    <p>
      Check out this amazing{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-700"
            onClick={(e) => e.preventDefault()}
          >
            React component library
          </a>
        </HoverCardTrigger>
        <HoverCardContent size="lg">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-500" />
              <span className="text-xs text-muted-foreground">
                ui.shadcn.com
              </span>
            </div>
            <h4 className="font-semibold">shadcn/ui</h4>
            <p className="text-sm text-muted-foreground">
              Beautifully designed components built with Radix UI and Tailwind
              CSS. Copy and paste into your apps. Accessible. Customizable. Open
              Source.
            </p>
            <div className="flex gap-2">
              <Badge variant="secondary" className="text-xs">
                React
              </Badge>
              <Badge variant="secondary" className="text-xs">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Tailwind
              </Badge>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      for building modern web applications.
    </p>

    <p>
      Don't forget to read the{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-700"
            onClick={(e) => e.preventDefault()}
          >
            documentation
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <h4 className="font-semibold text-sm">API Documentation</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Comprehensive guide covering installation, usage, and
              customization.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Eye className="h-3 w-3" />
              <span>Last updated 3 days ago</span>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      before getting started.
    </p>

    <p>
      Follow us on{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-700"
            onClick={(e) => e.preventDefault()}
          >
            GitHub
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <GitBranch className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold">shadcn/ui</h4>
                <p className="text-xs text-muted-foreground">@shadcn</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Open source React component library and design system.
            </p>
            <div className="flex gap-4 text-xs">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-yellow-500" />
                <span>45.2k stars</span>
              </div>
              <div className="flex items-center gap-1">
                <GitBranch className="h-3 w-3" />
                <span>3.1k forks</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>{" "}
      for updates.
    </p>
  </div>
);

// Status and notifications
export const StatusIndicators = () => (
  <div className="flex flex-wrap gap-4 items-center">
    {/* Online status */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span>Online</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent size="sm">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="font-medium text-sm">Available</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Ready to chat and collaborate
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Activity className="h-3 w-3" />
            <span>Active now</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    {/* Notification badge */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <MessageCircle className="h-4 w-4" />
          <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
            3
          </Badge>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-3">
          <h4 className="font-semibold">New Messages</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">JD</AvatarFallback>
              </Avatar>
              <span>John sent you a message</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
              <span>Sarah liked your post</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Avatar className="h-6 w-6">
                <AvatarFallback className="text-xs">TC</AvatarFallback>
              </Avatar>
              <span>Team meeting in 10 min</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>

    {/* System status */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Zap className="h-4 w-4 text-green-500" />
          <span>All Systems Operational</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-3">
          <h4 className="font-semibold">System Status</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>API</span>
              <Badge className="bg-green-100 text-green-700 text-xs">
                Operational
              </Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Database</span>
              <Badge className="bg-green-100 text-green-700 text-xs">
                Operational
              </Badge>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>CDN</span>
              <Badge className="bg-green-100 text-green-700 text-xs">
                Operational
              </Badge>
            </div>
          </div>
          <div className="pt-2 border-t">
            <p className="text-xs text-muted-foreground">
              Last incident: 12 days ago
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
);

// Side and alignment variations
export const PositionVariations = () => (
  <div className="grid grid-cols-2 gap-8 p-8">
    {/* Top placement */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Hover for top</Button>
      </HoverCardTrigger>
      <HoverCardContent side="top">
        <div className="text-center">
          <h4 className="font-semibold">Top Placement</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Content appears above the trigger
          </p>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>

    {/* Right placement */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Hover for right</Button>
      </HoverCardTrigger>
      <HoverCardContent side="right" align="start">
        <div>
          <h4 className="font-semibold">Right Placement</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Content appears to the right with start alignment
          </p>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>

    {/* Bottom placement */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Hover for bottom</Button>
      </HoverCardTrigger>
      <HoverCardContent side="bottom" align="end">
        <div className="text-right">
          <h4 className="font-semibold">Bottom Placement</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Content appears below with end alignment
          </p>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>

    {/* Left placement */}
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button>Hover for left</Button>
      </HoverCardTrigger>
      <HoverCardContent side="left">
        <div>
          <h4 className="font-semibold">Left Placement</h4>
          <p className="text-sm text-muted-foreground mt-1">
            Content appears to the left of the trigger
          </p>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>
  </div>
);

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "xl";
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
}) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="outline">Playground Hover Card</Button>
    </HoverCardTrigger>
    <HoverCardContent size={args.size} align={args.align} side={args.side}>
      <div className="space-y-2">
        <h4 className="font-semibold">Playground Card</h4>
        <p className="text-sm text-muted-foreground">
          This hover card can be customized using the controls. Try different
          sizes, alignments, and sides.
        </p>
        <div className="text-xs text-muted-foreground">
          Size: {args.size} | Align: {args.align} | Side: {args.side}
        </div>
      </div>
      <HoverCardArrowStyled />
    </HoverCardContent>
  </HoverCard>
);

Playground.args = {
  size: "default",
  align: "center",
  side: "bottom",
};
