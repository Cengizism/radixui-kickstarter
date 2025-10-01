import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
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

/**
 * ## API Reference
 *
 * The HoverCard component is built using multiple Radix UI primitives. Below are the available props for each component:
 *
 * ### HoverCard.Root
 * Contains all the parts of a hover card.
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `defaultOpen` | `boolean` | `false` | The open state of the hover card when initially rendered. Use when you do not need to control its open state. |
 * | `open` | `boolean` | - | The controlled open state of the hover card. Must be used in conjunction with `onOpenChange`. |
 * | `onOpenChange` | `(open: boolean) => void` | - | Event handler called when the open state of the hover card changes. |
 * | `openDelay` | `number` | `700` | The duration from when the mouse enters the trigger until the hover card opens. |
 * | `closeDelay` | `number` | `300` | The duration from when the mouse leaves the trigger until the hover card closes. |
 *
 * ### HoverCard.Trigger
 * The link that opens the hover card when hovered.
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
 *
 * ### HoverCard.Portal
 * When used, portals the content part into the body.
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `forceMount` | `boolean` | - | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. |
 * | `container` | `HTMLElement` | `document.body` | Specify a container element to portal the content into. |
 *
 * ### HoverCard.Content
 * The component that pops out when the hover card is open.
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
 * | `forceMount` | `boolean` | - | Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries. |
 * | `side` | `"top" \| "right" \| "bottom" \| "left"` | `"bottom"` | The preferred side of the trigger to render against when open. Will be reversed when collisions occur. |
 * | `sideOffset` | `number` | `0` | The distance in pixels from the trigger. |
 * | `align` | `"start" \| "center" \| "end"` | `"center"` | The preferred alignment against the trigger. May change when collisions occur. |
 * | `alignOffset` | `number` | `0` | An offset in pixels from the "start" or "end" alignment options. |
 * | `avoidCollisions` | `boolean` | `true` | When true, overrides the side and align preferences to prevent collisions with boundary edges. |
 * | `collisionBoundary` | `Element \| null \| Array<Element \| null>` | `[]` | The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check. |
 * | `collisionPadding` | `number \| Partial<Record<Side, number>>` | `0` | The distance in pixels from the boundary edges where collision detection should occur. Can be either a number for uniform padding or an object to set padding for individual sides. |
 * | `arrowPadding` | `number` | `0` | The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners. |
 * | `sticky` | `"partial" \| "always"` | `"partial"` | The sticky behavior on the align axis. "partial" will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless. |
 * | `hideWhenDetached` | `boolean` | `false` | Whether to hide the content when the trigger becomes fully occluded. |
 *
 * ### HoverCard.Arrow
 * An optional arrow element to render alongside the hover card. This can be omitted when you want to customize the arrow or don't want an arrow at all.
 *
 * | Prop | Type | Default | Description |
 * |------|------|---------|-------------|
 * | `asChild` | `boolean` | `false` | Change the default rendered element for the one passed as a child, merging their props and behavior. |
 * | `width` | `number` | `10` | The width of the arrow in pixels. |
 * | `height` | `number` | `5` | The height of the arrow in pixels. |
 *
 * ### Data Attributes
 * Data attributes are automatically applied and can be used to style different states:
 *
 * - `[data-state]`: "open" | "closed" - Present on `HoverCard.Content`
 * - `[data-side]`: "left" | "right" | "bottom" | "top" - Present on `HoverCard.Content`
 * - `[data-align]`: "start" | "end" | "center" - Present on `HoverCard.Content`
 *
 * ### CSS Variables
 * CSS variables are automatically set and can be used to create dynamic layouts:
 *
 * - `--radix-hover-card-content-transform-origin`: The transform-origin computed from the content and arrow positions/offsets. Only present when an arrow is rendered. Use it to animate the content from its computed origin.
 * - `--radix-hover-card-content-available-width`: The remaining width between the trigger and the boundary edge. Use it to constrain the content width.
 * - `--radix-hover-card-content-available-height`: The remaining height between the trigger and the boundary edge. Use it to constrain the content height.
 * - `--radix-hover-card-trigger-width`: The width of the trigger. Use it to size the content to match the trigger width.
 * - `--radix-hover-card-trigger-height`: The height of the trigger. Use it to size the content to match the trigger height.
 *
 * ### Keyboard Interactions
 *
 * | Key | Description |
 * |-----|-------------|
 * | `Tab` | Opens/closes the hover card when the trigger is focused. |
 * | `Space` | Opens/closes the hover card when the trigger is focused. |
 * | `Enter` | Opens/closes the hover card when the trigger is focused. |
 * | `Escape` | Closes the hover card and moves focus to trigger. |
 *
 * ### Accessibility
 *
 * Hover cards are intended primarily for sighted users to preview content available behind a link or action. They provide contextual information on hover but have limited keyboard accessibility. For better accessibility, consider providing the same information through other means for keyboard and screen reader users.
 *
 * ### Examples
 */

export default {
  title: "UI/HoverCard",
  component: HoverCard,
  docs: {
    description: {
      component:
        "A hover card component for sighted users to preview content available behind a link or trigger. Built on top of Radix UI HoverCard primitives with enhanced styling and animation capabilities. Provides rich contextual information on hover with customizable positioning, sizing, and content layout.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the hover card when initially rendered. Use when you do not need to control its open state.",
      table: {
        type: { summary: "boolean" },
        category: "Root",
      },
    },
    open: {
      control: "boolean",
      description:
        "The controlled open state of the hover card. Must be used in conjunction with onOpenChange.",
      table: {
        type: { summary: "boolean" },
        category: "Root",
      },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the hover card changes.",
      table: {
        type: { summary: "(open: boolean) => void" },
        category: "Root",
      },
    },
    openDelay: {
      control: { type: "number", min: 0, max: 2000, step: 50 },
      description:
        "The duration from when the mouse enters the trigger until the hover card opens.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "700" },
        category: "Root",
      },
    },
    closeDelay: {
      control: { type: "number", min: 0, max: 2000, step: 50 },
      description:
        "The duration from when the mouse leaves the trigger until the hover card closes.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "300" },
        category: "Root",
      },
    },

    // Trigger Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Trigger",
      },
    },

    // Content Props
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description:
        "The preferred side of the trigger to render against when open. Will be reversed when collisions occur.",
      table: {
        type: { summary: '"top" | "right" | "bottom" | "left"' },
        defaultValue: { summary: '"bottom"' },
        category: "Content",
      },
    },
    sideOffset: {
      control: { type: "number", min: 0, max: 50 },
      description: "The distance in pixels from the trigger.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description:
        "The preferred alignment against the trigger. May change when collisions occur.",
      table: {
        type: { summary: '"start" | "center" | "end"' },
        defaultValue: { summary: '"center"' },
        category: "Content",
      },
    },
    alignOffset: {
      control: { type: "number", min: -50, max: 50 },
      description:
        "An offset in pixels from the 'start' or 'end' alignment options.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "The size variant of the hover card content.",
      table: {
        type: { summary: '"sm" | "default" | "lg" | "xl"' },
        defaultValue: { summary: '"default"' },
        category: "Content",
      },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side and align preferences to prevent collisions with boundary edges.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Content",
      },
    },
    collisionBoundary: {
      description:
        "The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.",
      table: {
        type: { summary: "Element | null | Array<Element | null>" },
        defaultValue: { summary: "[]" },
        category: "Content",
      },
    },
    collisionPadding: {
      control: { type: "number", min: 0, max: 100 },
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: {
        type: { summary: "number | Partial<Record<Side, number>>" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    arrowPadding: {
      control: { type: "number", min: 0, max: 50 },
      description:
        "The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
        category: "Content",
      },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description:
        "The sticky behavior on the align axis. 'partial' will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst 'always' will keep the content in the boundary regardless.",
      table: {
        type: { summary: '"partial" | "always"' },
        defaultValue: { summary: '"partial"' },
        category: "Content",
      },
    },
    hideWhenDetached: {
      control: "boolean",
      description:
        "Whether to hide the content when the trigger becomes fully occluded.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Content",
      },
    },

    // Portal Props
    forceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        type: { summary: "boolean" },
        category: "Portal",
      },
    },
    container: {
      description: "Specify a container element to portal the content into.",
      table: {
        type: { summary: "HTMLElement" },
        defaultValue: { summary: "document.body" },
        category: "Portal",
      },
    },

    // Arrow Props
    arrowSize: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "The size variant of the hover card arrow.",
      table: {
        type: { summary: '"sm" | "default" | "lg" | "xl"' },
        defaultValue: { summary: '"default"' },
        category: "Arrow",
      },
    },
    width: {
      control: { type: "number", min: 5, max: 50 },
      description: "The width of the arrow in pixels.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
        category: "Arrow",
      },
    },
    height: {
      control: { type: "number", min: 3, max: 25 },
      description: "The height of the arrow in pixels.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
        category: "Arrow",
      },
    },

    // Data Attributes (Read-only)
    "data-state": {
      description:
        "The open state of the hover card. Present on HoverCard.Content when open.",
      table: {
        type: { summary: '"open" | "closed"' },
        category: "Data Attributes",
      },
    },
    "data-side": {
      description:
        "The side where the content is rendered. Present on HoverCard.Content.",
      table: {
        type: { summary: '"left" | "right" | "bottom" | "top"' },
        category: "Data Attributes",
      },
    },
    "data-align": {
      description:
        "The align position of the content. Present on HoverCard.Content.",
      table: {
        type: { summary: '"start" | "end" | "center"' },
        category: "Data Attributes",
      },
    },

    // CSS Variables (Read-only)
    "--radix-hover-card-content-transform-origin": {
      description:
        "The transform-origin computed from the content and arrow positions/offsets. Only present when an arrow is rendered. Use it to animate the content from its computed origin.",
      table: {
        type: { summary: "string" },
        category: "CSS Variables",
      },
    },
    "--radix-hover-card-content-available-width": {
      description:
        "The remaining width between the trigger and the boundary edge. Use it to constrain the content width.",
      table: {
        type: { summary: "string" },
        category: "CSS Variables",
      },
    },
    "--radix-hover-card-content-available-height": {
      description:
        "The remaining height between the trigger and the boundary edge. Use it to constrain the content height.",
      table: {
        type: { summary: "string" },
        category: "CSS Variables",
      },
    },
    "--radix-hover-card-trigger-width": {
      description:
        "The width of the trigger. Use it to size the content to match the trigger width.",
      table: {
        type: { summary: "string" },
        category: "CSS Variables",
      },
    },
    "--radix-hover-card-trigger-height": {
      description:
        "The height of the trigger. Use it to size the content to match the trigger height.",
      table: {
        type: { summary: "string" },
        category: "CSS Variables",
      },
    },

    // Accessibility Properties
    role: {
      description:
        "Hover cards are intended for sighted users only and are not accessible to keyboard users. The content will be inaccessible to keyboard users.",
      table: {
        type: { summary: "Automatically handled" },
        category: "Accessibility",
      },
    },
    "keyboard-interactions": {
      description:
        "Tab: Opens/closes the hover card if trigger is focusable. Enter: Opens the hover card link if applicable.",
      table: {
        type: { summary: "Built-in keyboard support" },
        category: "Accessibility",
      },
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

// Advanced: Custom delays and controlled state
export const CustomDelays = () => (
  <div className="flex gap-8 items-center">
    <HoverCard openDelay={200} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Fast (200ms open, 100ms close)</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold">Fast Response</h4>
          <p className="text-sm text-muted-foreground">
            Opens quickly on hover with minimal delay
          </p>
          <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
            openDelay: 200ms, closeDelay: 100ms
          </div>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>

    <HoverCard openDelay={1000} closeDelay={500}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Slow (1000ms open, 500ms close)</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold">Deliberate Response</h4>
          <p className="text-sm text-muted-foreground">
            Requires intentional hover with longer delays
          </p>
          <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
            openDelay: 1000ms, closeDelay: 500ms
          </div>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>

    <HoverCard openDelay={0} closeDelay={0}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Instant (0ms delays)</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold">Instant Response</h4>
          <p className="text-sm text-muted-foreground">
            Shows immediately on hover with no delays
          </p>
          <div className="text-xs text-muted-foreground bg-muted p-2 rounded">
            openDelay: 0ms, closeDelay: 0ms
          </div>
        </div>
        <HoverCardArrowStyled />
      </HoverCardContent>
    </HoverCard>
  </div>
);

// Advanced: Collision handling and positioning
export const CollisionHandling = () => (
  <div className="p-8">
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Collision Detection</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Position these cards near viewport edges to see collision detection in
        action
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <div>
        <h4 className="font-medium mb-3">With Collision Detection (default)</h4>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="w-full">
              <Shield className="w-4 h-4 mr-2" />
              Smart Positioning
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            side="top"
            avoidCollisions={true}
            collisionPadding={10}
            sideOffset={5}
          >
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-600" />
                Collision Protected
              </h4>
              <p className="text-sm text-muted-foreground">
                This card will automatically reposition to avoid viewport edges
              </p>
              <div className="text-xs text-muted-foreground bg-green-50 p-2 rounded">
                avoidCollisions: true, collisionPadding: 10px
              </div>
            </div>
            <HoverCardArrowStyled />
          </HoverCardContent>
        </HoverCard>
      </div>

      <div>
        <h4 className="font-medium mb-3">
          Fixed Position (no collision detection)
        </h4>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="w-full">
              <Zap className="w-4 h-4 mr-2" />
              Fixed Position
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side="top" avoidCollisions={false} sideOffset={5}>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <Zap className="w-4 h-4 mr-2 text-amber-600" />
                Fixed Position
              </h4>
              <p className="text-sm text-muted-foreground">
                This card maintains its position regardless of viewport edges
              </p>
              <div className="text-xs text-muted-foreground bg-amber-50 p-2 rounded">
                avoidCollisions: false
              </div>
            </div>
            <HoverCardArrowStyled />
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-2 gap-8">
      <div>
        <h4 className="font-medium mb-3">With Side & Align Offset</h4>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="w-full">
              <TrendingUp className="w-4 h-4 mr-2" />
              Custom Offsets
            </Button>
          </HoverCardTrigger>
          <HoverCardContent
            side="right"
            align="start"
            sideOffset={15}
            alignOffset={10}
          >
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                Custom Positioning
              </h4>
              <p className="text-sm text-muted-foreground">
                Fine-tuned position with custom offsets
              </p>
              <div className="text-xs text-muted-foreground bg-blue-50 p-2 rounded">
                sideOffset: 15px, alignOffset: 10px
              </div>
            </div>
            <HoverCardArrowStyled />
          </HoverCardContent>
        </HoverCard>
      </div>

      <div>
        <h4 className="font-medium mb-3">Hide When Detached</h4>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" className="w-full">
              <Eye className="w-4 h-4 mr-2" />
              Smart Hiding
            </Button>
          </HoverCardTrigger>
          <HoverCardContent side="bottom" hideWhenDetached={true}>
            <div className="space-y-2">
              <h4 className="font-semibold flex items-center">
                <Eye className="w-4 h-4 mr-2 text-purple-600" />
                Auto Hide
              </h4>
              <p className="text-sm text-muted-foreground">
                Hides automatically when trigger becomes occluded
              </p>
              <div className="text-xs text-muted-foreground bg-purple-50 p-2 rounded">
                hideWhenDetached: true
              </div>
            </div>
            <HoverCardArrowStyled />
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  </div>
);

// Advanced: Constrained content using CSS variables
export const ConstrainedContent = () => (
  <div className="p-8 space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-2">Responsive Content Sizing</h3>
      <p className="text-sm text-muted-foreground mb-4">
        These cards use CSS variables to constrain content size based on
        available space
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" className="w-full">
            <Database className="w-4 h-4 mr-2" />
            Width-Constrained Content
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="bottom"
          className="w-[var(--radix-hover-card-content-available-width)]"
        >
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center">
              <Database className="w-4 h-4 mr-2 text-indigo-600" />
              Dynamic Width
            </h4>
            <p className="text-sm text-muted-foreground">
              This content automatically constrains its width based on available
              viewport space using
              <code className="bg-muted px-1 rounded">
                --radix-hover-card-content-available-width
              </code>
            </p>
            <div className="text-xs text-muted-foreground bg-indigo-50 p-2 rounded">
              Width: var(--radix-hover-card-content-available-width)
            </div>
          </div>
          <HoverCardArrowStyled />
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" className="w-full">
            <Activity className="w-4 h-4 mr-2" />
            Trigger-Matched Width
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="bottom"
          className="w-[var(--radix-hover-card-trigger-width)]"
        >
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center">
              <Activity className="w-4 h-4 mr-2 text-emerald-600" />
              Matched Width
            </h4>
            <p className="text-sm text-muted-foreground">
              Content width matches trigger using
              <code className="bg-muted px-1 rounded">
                --radix-hover-card-trigger-width
              </code>
            </p>
            <div className="text-xs text-muted-foreground bg-emerald-50 p-2 rounded">
              Width: var(--radix-hover-card-trigger-width)
            </div>
          </div>
          <HoverCardArrowStyled />
        </HoverCardContent>
      </HoverCard>
    </div>
  </div>
);

// Advanced: Origin-aware animations using CSS variables
export const OriginAwareAnimations = () => (
  <div className="p-8">
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">
        Transform Origin Animations
      </h3>
      <p className="text-sm text-muted-foreground mb-4">
        These hover cards use CSS variables for origin-aware animations that
        scale from the arrow position
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" className="w-full">
            <Play className="w-4 h-4 mr-2" />
            Scale Animation (Top)
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="top"
          className="origin-[var(--radix-hover-card-content-transform-origin)] 
                     data-[state=open]:animate-in data-[state=open]:fade-in-0 
                     data-[state=open]:zoom-in-95 data-[state=closed]:animate-out 
                     data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        >
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center">
              <Play className="w-4 h-4 mr-2 text-rose-600" />
              Origin-Aware Scale
            </h4>
            <p className="text-sm text-muted-foreground">
              Scales from the arrow position using transform-origin CSS variable
            </p>
            <div className="text-xs text-muted-foreground bg-rose-50 p-2 rounded font-mono">
              transform-origin: var(--radix-hover-card-content-transform-origin)
            </div>
          </div>
          <HoverCardArrowStyled />
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline" className="w-full">
            <Volume2 className="w-4 h-4 mr-2" />
            Scale Animation (Right)
          </Button>
        </HoverCardTrigger>
        <HoverCardContent
          side="right"
          className="origin-[var(--radix-hover-card-content-transform-origin)] 
                     data-[state=open]:animate-in data-[state=open]:fade-in-0 
                     data-[state=open]:zoom-in-95 data-[state=closed]:animate-out 
                     data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        >
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center">
              <Volume2 className="w-4 h-4 mr-2 text-cyan-600" />
              Dynamic Origin
            </h4>
            <p className="text-sm text-muted-foreground">
              Notice how the scaling origin adjusts based on arrow position
            </p>
            <div className="text-xs text-muted-foreground bg-cyan-50 p-2 rounded font-mono">
              Side: right, origin auto-calculated
            </div>
          </div>
          <HoverCardArrowStyled />
        </HoverCardContent>
      </HoverCard>
    </div>
  </div>
);
