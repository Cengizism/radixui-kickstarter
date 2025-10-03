import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default {
  title: "UI/Tooltip",
  component: Tooltip,
  docs: {
    description: {
      component:
        "A tooltip component that displays helpful information when hovering or focusing on an element. Built with Radix UI primitives for accessibility.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Provider Props
    delayDuration: {
      control: { type: "number", min: 0, max: 2000 },
      description:
        "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
      table: { category: "Provider Props" },
    },
    skipDelayDuration: {
      control: { type: "number", min: 0, max: 1000 },
      description:
        "When moving from one tooltip trigger to another, the delay before showing.",
      table: { category: "Provider Props" },
    },
    disableHoverableContent: {
      control: "boolean",
      description: "When true, tooltips will not be hoverable.",
      table: { category: "Provider Props" },
    },

    // Root Props
    defaultOpen: {
      control: "boolean",
      description:
        "The open state of the tooltip when it is initially rendered.",
      table: { category: "Root Props" },
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the tooltip.",
      table: { category: "Root Props" },
    },
    onOpenChange: {
      action: "onOpenChange",
      description:
        "Event handler called when the open state of the tooltip changes.",
      table: { category: "Root Props" },
    },

    // Trigger Props
    triggerAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the trigger.",
      table: { category: "Trigger Props" },
    },

    // Content Props
    contentAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the content.",
      table: { category: "Content Props" },
    },
    aria: {
      control: "text",
      description:
        "By default, screen readers will announce the content inside the component.",
      table: { category: "Content Props" },
    },
    onEscapeKeyDown: {
      action: "onEscapeKeyDown",
      description: "Event handler called when the escape key is down.",
      table: { category: "Content Props" },
    },
    onPointerDownOutside: {
      action: "onPointerDownOutside",
      description:
        "Event handler called when a pointer event occurs outside the bounds.",
      table: { category: "Content Props" },
    },
    forceMount: {
      control: "boolean",
      description: "Used to force mounting when more control is needed.",
      table: { category: "Content Props" },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "The preferred side of the trigger to render against.",
      table: { category: "Content Props" },
    },
    sideOffset: {
      control: { type: "number", min: -50, max: 50 },
      description: "The distance in pixels from the trigger.",
      table: { category: "Content Props" },
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "The preferred alignment against the trigger.",
      table: { category: "Content Props" },
    },
    alignOffset: {
      control: { type: "number", min: -50, max: 50 },
      description:
        'An offset in pixels from the "start" or "end" alignment options.',
      table: { category: "Content Props" },
    },
    avoidCollisions: {
      control: "boolean",
      description:
        "When true, overrides the side and align to prevent collisions with boundary edges.",
      table: { category: "Content Props" },
    },
    collisionBoundary: {
      control: "object",
      description: "The element used as the collision boundary.",
      table: { category: "Content Props" },
    },
    collisionPadding: {
      control: { type: "number", min: 0, max: 50 },
      description:
        "The distance in pixels from the boundary edges where collision detection should occur.",
      table: { category: "Content Props" },
    },
    arrowPadding: {
      control: { type: "number", min: 0, max: 20 },
      description:
        "The padding between the arrow and the edges of the content.",
      table: { category: "Content Props" },
    },
    sticky: {
      control: "select",
      options: ["partial", "always"],
      description: "The sticky behavior on the align axis.",
      table: { category: "Content Props" },
    },
    hideWhenDetached: {
      control: "boolean",
      description: "Whether to hide when the trigger becomes fully occluded.",
      table: { category: "Content Props" },
    },

    // Custom Style Props
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "accent",
        "destructive",
        "success",
        "warning",
        "info",
        "dark",
        "light",
      ],
      table: { category: "Style Props" },
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      table: { category: "Style Props" },
    },
    showArrow: {
      control: "boolean",
      table: { category: "Style Props" },
    },
  },
};

export const Default = () => (
  <TooltipProvider delayDuration={0}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          +
        </Button>
      </TooltipTrigger>
      <TooltipContent variant="default" showArrow={true}>
        Add to library
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// Configure globally - Multiple tooltips with shared provider settings
export const ConfigureGlobally = () => (
  <TooltipProvider delayDuration={300} skipDelayDuration={200}>
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </TooltipTrigger>
        <TooltipContent showArrow={true}>Save your changes</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive" size="sm">
            Delete
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="destructive" showArrow={true}>
          Permanently delete this item
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

// Show instantly - No delay
export const ShowInstantly = () => (
  <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button variant="secondary">Instant Tooltip</Button>
      </TooltipTrigger>
      <TooltipContent>This tooltip appears instantly</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

// Different variants showcase
export const Variants = () => (
  <TooltipProvider delayDuration={0}>
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">Default</Button>
        </TooltipTrigger>
        <TooltipContent variant="default">
          Default tooltip variant
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="secondary">Secondary</Button>
        </TooltipTrigger>
        <TooltipContent variant="secondary">
          Secondary tooltip variant
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">Destructive</Button>
        </TooltipTrigger>
        <TooltipContent variant="destructive">
          Destructive tooltip variant
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Success</Button>
        </TooltipTrigger>
        <TooltipContent variant="success">
          Success tooltip variant
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Warning</Button>
        </TooltipTrigger>
        <TooltipContent variant="warning">
          Warning tooltip variant
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

// Different sizes
export const Sizes = () => (
  <TooltipProvider delayDuration={0}>
    <div className="flex gap-4 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="sm">Small</Button>
        </TooltipTrigger>
        <TooltipContent size="sm">Small tooltip</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="default">Default</Button>
        </TooltipTrigger>
        <TooltipContent size="default">Default size tooltip</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button size="lg">Large</Button>
        </TooltipTrigger>
        <TooltipContent size="lg">
          Large tooltip with more content
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

// Different positions
export const Positions = () => (
  <TooltipProvider delayDuration={0}>
    <div className="grid grid-cols-3 gap-8 p-8">
      <div></div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>
      <div></div>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="default">Center</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip at center bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <div></div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>
      <div></div>
    </div>
  </TooltipProvider>
);

// With and without arrows
export const WithoutArrow = () => (
  <TooltipProvider delayDuration={0}>
    <div className="flex gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">With Arrow</Button>
        </TooltipTrigger>
        <TooltipContent showArrow={true}>Tooltip with arrow</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">No Arrow</Button>
        </TooltipTrigger>
        <TooltipContent showArrow={false}>Tooltip without arrow</TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);
