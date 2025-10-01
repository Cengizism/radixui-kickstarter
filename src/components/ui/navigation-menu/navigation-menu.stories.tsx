import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../avatar/avatar';
import { Badge } from '../badge/badge';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "./navigation-menu";
import {
  Home,
  ShoppingCart,
  Star,
  Zap,
  Code,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Users,
  TrendingUp,
  Target,
  Shield,
  Smartphone,
  LifeBuoy,
  Building,
  Package,
  Settings,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/card";

export default {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  docs: {
    description: {
      component:
        "A collection of links for navigating websites. Supports hover, focus and keyboard interactions and can contain flyout menus. Built with Radix UI primitives for accessibility and keyboard navigation.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    value: {
      control: "text",
      description:
        "The controlled value of the sub menu that should be open. Use when controlling the open state of the sub menus.",
      table: {
        category: "Root",
      },
    },
    defaultValue: {
      control: "text",
      description:
        "The value of the sub menu that should be open by default when initially rendered. Use when not controlling the open state of the sub menus.",
      table: {
        category: "Root",
      },
    },
    onValueChange: {
      control: false,
      description: "Event handler called when the value changes.",
      table: {
        category: "Root",
        type: { summary: "(value: string) => void" },
      },
    },
    delayDuration: {
      control: "number",
      description:
        "The duration from when the mouse enters a trigger until the content opens.",
      table: {
        category: "Root",
      },
    },
    skipDelayDuration: {
      control: "number",
      description:
        "How much time a user has to enter another trigger without incurring a delay again.",
      table: {
        category: "Root",
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction. Can be set when it differs from the default direction.",
      table: {
        category: "Root",
      },
    },
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description:
        "The orientation of the menu. This controls the keyboard navigation.",
      table: {
        category: "Root",
      },
    },

    // Sub Props
    subValue: {
      control: "text",
      description:
        "The unique value that associates the trigger with a content.",
      table: {
        category: "Sub",
      },
    },
    subDefaultValue: {
      control: "text",
      description:
        "The value of the trigger associated with the content that should be open by default.",
      table: {
        category: "Sub",
      },
    },
    onSubValueChange: {
      control: false,
      description:
        "Event handler called when the value changes in a sub navigation menu.",
      table: {
        category: "Sub",
        type: { summary: "(value: string) => void" },
      },
    },
    subOrientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the sub menu.",
      table: {
        category: "Sub",
      },
    },

    // List Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "List",
      },
    },

    // Item Props
    itemValue: {
      control: "text",
      description:
        "A unique value that associates the item with an active value when the navigation menu is controlled.",
      table: {
        category: "Item",
      },
    },

    // Trigger Props
    triggerAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the trigger.",
      table: {
        category: "Trigger",
      },
    },

    // Content Props
    contentAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the content.",
      table: {
        category: "Content",
      },
    },
    disableOutsidePointerEvents: {
      control: "boolean",
      description:
        "When true, hover/focus/click interactions will be disabled on elements outside the bounds of the component.",
      table: {
        category: "Content",
      },
    },
    onEscapeKeyDown: {
      control: false,
      description: "Event handler called when the escape key is down.",
      table: {
        category: "Content",
        type: { summary: "(event: KeyboardEvent) => void" },
      },
    },
    onPointerDownOutside: {
      control: false,
      description:
        "Event handler called when a pointer event occurs outside the bounds of the component.",
      table: {
        category: "Content",
        type: { summary: "(event: PointerDownOutsideEvent) => void" },
      },
    },
    onFocusOutside: {
      control: false,
      description:
        "Event handler called when focus moves outside the bounds of the component.",
      table: {
        category: "Content",
        type: { summary: "(event: FocusOutsideEvent) => void" },
      },
    },
    onInteractOutside: {
      control: false,
      description:
        "Event handler called when an interaction occurs outside the bounds of the component.",
      table: {
        category: "Content",
        type: {
          summary:
            "(event: PointerDownOutsideEvent | FocusOutsideEvent) => void",
        },
      },
    },

    // Link Props
    active: {
      control: "boolean",
      description: "Used to identify the link as the currently active page.",
      table: {
        category: "Link",
      },
    },
    linkAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the link.",
      table: {
        category: "Link",
      },
    },
    onSelect: {
      control: false,
      description:
        "Event handler called when the user selects a link (via mouse or keyboard).",
      table: {
        category: "Link",
        type: { summary: "(event: Event) => void" },
      },
    },

    // Indicator Props
    indicatorAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the indicator.",
      table: {
        category: "Indicator",
      },
    },
    forceMount: {
      control: "boolean",
      description: "Used to force mounting when more control is needed.",
      table: {
        category: "Indicator",
      },
    },

    // Viewport Props
    viewportAsChild: {
      control: "boolean",
      description: "Change the default rendered element for the viewport.",
      table: {
        category: "Viewport",
      },
    },
    viewportForceMount: {
      control: "boolean",
      description:
        "Used to force mounting the viewport when more control is needed.",
      table: {
        category: "Viewport",
      },
    },
  },
};

// Basic navigation menu
export const Basic = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/"
                >
                  <Zap className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Beautifully designed components built with Radix UI and
                    Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs"
                >
                  <div className="text-sm font-medium leading-none">
                    Introduction
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/installation"
                >
                  <div className="text-sm font-medium leading-none">
                    Installation
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    How to install dependencies and structure your app.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/typography"
                >
                  <div className="text-sm font-medium leading-none">
                    Typography
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Styles for headings, paragraphs, lists...etc
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/alert-dialog"
                >
                  <div className="text-sm font-medium leading-none">
                    Alert Dialog
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    A modal dialog that interrupts the user with important
                    content.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/hover-card"
                >
                  <div className="text-sm font-medium leading-none">
                    Hover Card
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    For sighted users to preview content available behind a
                    link.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/progress"
                >
                  <div className="text-sm font-medium leading-none">
                    Progress
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Displays an indicator showing the completion progress.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/scroll-area"
                >
                  <div className="text-sm font-medium leading-none">
                    Scroll-area
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Visually or semantically separates content.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/tabs"
                >
                  <div className="text-sm font-medium leading-none">Tabs</div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    A set of layered sections of content—known as tab panels.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/docs/primitives/tooltip"
                >
                  <div className="text-sm font-medium leading-none">
                    Tooltip
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    A popup that displays information related to an element.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="/docs">Documentation</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

// E-commerce navigation
export const EcommerceNavigation = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Shop
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
            <div className="space-y-3">
              <h4 className="text-sm font-medium leading-none">Categories</h4>
              <ul className="space-y-3">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/electronics"
                    >
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4" />
                        <span className="text-sm font-medium">Electronics</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Phones, laptops, and gadgets
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/clothing"
                    >
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4" />
                        <span className="text-sm font-medium">Clothing</span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Fashion for all seasons
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/home"
                    >
                      <div className="flex items-center space-x-2">
                        <Home className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Home & Garden
                        </span>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Everything for your home
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium leading-none">Featured</h4>
              <Card>
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">Summer Sale</CardTitle>
                  <CardDescription className="text-xs">
                    Up to 50% off selected items
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <Badge variant="secondary">Limited Time</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <Star className="mr-2 h-4 w-4" />
          Brands
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3">
            <li>
              <NavigationMenuLink asChild>
                <a className="flex items-center space-x-2 rounded-md p-3 hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/brand1.png" />
                    <AvatarFallback>B1</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Brand One</span>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a className="flex items-center space-x-2 rounded-md p-3 hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/brand2.png" />
                    <AvatarFallback>B2</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Brand Two</span>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a className="flex items-center space-x-2 rounded-md p-3 hover:bg-accent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/brand3.png" />
                    <AvatarFallback>B3</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">Brand Three</span>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="/deals">
          <TrendingUp className="mr-2 h-4 w-4" />
          Deals
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink href="/support">
          <LifeBuoy className="mr-2 h-4 w-4" />
          Support
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

// Corporate website navigation
export const CorporateNavigation = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink href="/">
          <Home className="mr-2 h-4 w-4" />
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <Building className="mr-2 h-4 w-4" />
          About
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <a
                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href="/about"
                >
                  <Building className="h-6 w-6" />
                  <div className="mb-2 mt-4 text-lg font-medium">
                    Our Company
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Leading innovation in technology solutions since 2010.
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/mission"
                >
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span className="text-sm font-medium">Mission</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Our purpose and values
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/team"
                >
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">Team</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Meet our leadership
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink asChild>
                <a
                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  href="/careers"
                >
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm font-medium">Careers</span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    Join our team
                  </p>
                </a>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <Briefcase className="mr-2 h-4 w-4" />
          Services
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
            <div>
              <h4 className="mb-3 text-sm font-medium leading-none">
                Technology
              </h4>
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/services/web-dev"
                    >
                      <div className="flex items-center space-x-2">
                        <Code className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Web Development
                        </span>
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Custom web applications
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/services/mobile-dev"
                    >
                      <div className="flex items-center space-x-2">
                        <Smartphone className="h-4 w-4" />
                        <span className="text-sm font-medium">
                          Mobile Development
                        </span>
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        iOS and Android apps
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-medium leading-none">
                Consulting
              </h4>
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/services/strategy"
                    >
                      <div className="flex items-center space-x-2">
                        <Target className="h-4 w-4" />
                        <span className="text-sm font-medium">Strategy</span>
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Digital transformation
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      href="/services/security"
                    >
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4" />
                        <span className="text-sm font-medium">Security</span>
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        Cybersecurity solutions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>
          <MessageCircle className="mr-2 h-4 w-4" />
          Contact
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[400px] p-6">
            <div className="grid gap-4">
              <div>
                <h4 className="mb-2 text-sm font-medium leading-none">
                  Get in Touch
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready to start your next project? Contact us today.
                </p>
              </div>
              <div className="grid gap-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex items-center space-x-3 rounded-md p-3 hover:bg-accent"
                    href="/contact"
                  >
                    <Mail className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Email Us</div>
                      <div className="text-sm text-muted-foreground">
                        hello@company.com
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex items-center space-x-3 rounded-md p-3 hover:bg-accent"
                    href="tel:+1234567890"
                  >
                    <Phone className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Call Us</div>
                      <div className="text-sm text-muted-foreground">
                        +1 (234) 567-890
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <a
                    className="flex items-center space-x-3 rounded-md p-3 hover:bg-accent"
                    href="/office"
                  >
                    <MapPin className="h-4 w-4" />
                    <div>
                      <div className="text-sm font-medium">Visit Us</div>
                      <div className="text-sm text-muted-foreground">
                        123 Business St
                      </div>
                    </div>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

// Size variations

// Interactive playground
export const Playground = (args: { size?: "sm" | "default" | "lg" }) => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger size={args.size}>
          Playground Menu
        </NavigationMenuTrigger>
        <NavigationMenuContent size={args.size}>
          <div className="p-4">
            <h4 className="mb-2 text-sm font-medium">Interactive Demo</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Size: {args.size}
            </p>
            <ul className="space-y-2">
              <li>
                <NavigationMenuLink size={args.size} asChild>
                  <a className="block rounded-md p-2 hover:bg-accent">
                    Menu Item 1
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink size={args.size} asChild>
                  <a className="block rounded-md p-2 hover:bg-accent">
                    Menu Item 2
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink size={args.size} asChild>
                  <a className="block rounded-md p-2 hover:bg-accent">
                    Menu Item 3
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink size={args.size} href="/link">
          Simple Link
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger size={args.size}>Settings</NavigationMenuTrigger>
        <NavigationMenuContent size={args.size}>
          <div className="p-4">
            <p className="text-sm">
              Configuration options for size: {args.size}
            </p>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

Playground.args = {
  size: "default",
};

// Controlled navigation with active states
export const ControlledNavigation = () => {
  const [activeValue, setActiveValue] = React.useState<string>("");
  const [activeLink, setActiveLink] = React.useState<string>("home");

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg">
        <div>Active menu: {activeValue || "None"}</div>
        <div>Active link: {activeLink}</div>
      </div>

      <NavigationMenu
        value={activeValue}
        onValueChange={setActiveValue}
        orientation="horizontal"
      >
        <NavigationMenuList>
          <NavigationMenuItem value="products">
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                <li>
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "web-apps"}
                    onSelect={() => setActiveLink("web-apps")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">
                        Web Applications
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Custom web solutions
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "mobile-apps"}
                    onSelect={() => setActiveLink("mobile-apps")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">Mobile Apps</div>
                      <p className="text-sm text-muted-foreground">
                        iOS and Android development
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "api-services"}
                    onSelect={() => setActiveLink("api-services")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">API Services</div>
                      <p className="text-sm text-muted-foreground">
                        Backend integration
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "consulting"}
                    onSelect={() => setActiveLink("consulting")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">Consulting</div>
                      <p className="text-sm text-muted-foreground">
                        Technical guidance
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem value="solutions">
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[600px] lg:grid-cols-[.75fr_1fr]">
                <div className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/solutions"
                    >
                      <Target className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Enterprise Solutions
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Scalable solutions for enterprise needs.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
                <div className="space-y-2">
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "crm"}
                    onSelect={() => setActiveLink("crm")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">CRM Integration</div>
                      <p className="text-sm text-muted-foreground">
                        Customer relationship management
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "analytics"}
                    onSelect={() => setActiveLink("analytics")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">
                        Analytics Platform
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Business intelligence tools
                      </p>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    asChild
                    active={activeLink === "automation"}
                    onSelect={() => setActiveLink("automation")}
                  >
                    <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                      <div className="text-sm font-medium">
                        Process Automation
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Workflow optimization
                      </p>
                    </a>
                  </NavigationMenuLink>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              active={activeLink === "pricing"}
              onSelect={() => setActiveLink("pricing")}
              href="/pricing"
            >
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              active={activeLink === "contact"}
              onSelect={() => setActiveLink("contact")}
              href="/contact"
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

// Custom delay and timing configurations
export const CustomTimingNavigation = () => (
  <div className="space-y-6">
    <div className="text-sm text-gray-600 p-4 bg-blue-50 rounded-lg">
      <div className="font-semibold mb-2">Timing Configuration:</div>
      <ul className="space-y-1 text-xs">
        <li>• Delay Duration: 600ms - slower opening</li>
        <li>• Skip Delay Duration: 300ms - faster subsequent opens</li>
        <li>• Try hovering between different menu items quickly</li>
      </ul>
    </div>

    <NavigationMenu delayDuration={600} skipDelayDuration={300}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Slow Open Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[300px]">
              <h4 className="text-sm font-medium mb-2">Delayed Opening</h4>
              <p className="text-sm text-muted-foreground mb-3">
                This menu takes 600ms to open on first hover.
              </p>
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a className="block rounded-md p-2 hover:bg-accent">
                      Menu Item 1
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a className="block rounded-md p-2 hover:bg-accent">
                      Menu Item 2
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Quick Switch</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[300px]">
              <h4 className="text-sm font-medium mb-2">
                Fast Subsequent Opens
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                After opening one menu, others open in 300ms.
              </p>
              <ul className="space-y-2">
                <li>
                  <NavigationMenuLink asChild>
                    <a className="block rounded-md p-2 hover:bg-accent">
                      Quick Item 1
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a className="block rounded-md p-2 hover:bg-accent">
                      Quick Item 2
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Third Menu</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 w-[300px]">
              <h4 className="text-sm font-medium mb-2">Timing Demo</h4>
              <p className="text-sm text-muted-foreground">
                Try switching between all three menus to see the timing
                difference.
              </p>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

// Vertical orientation navigation
export const VerticalNavigation = () => (
  <div className="flex gap-8">
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">Vertical Navigation Menu</h3>

      <NavigationMenu orientation="vertical">
        <NavigationMenuList className="flex-col space-y-2">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-full justify-between">
              <span className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[250px]">
                <h4 className="text-sm font-medium mb-3">Dashboard Options</h4>
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        <TrendingUp className="inline mr-2 h-3 w-3" />
                        Analytics
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        <Users className="inline mr-2 h-3 w-3" />
                        User Management
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        <Settings className="inline mr-2 h-3 w-3" />
                        Settings
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-full justify-between">
              <span className="flex items-center">
                <Package className="mr-2 h-4 w-4" />
                Products
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[300px]">
                <div className="grid gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Categories</h4>
                    <ul className="space-y-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block rounded-md p-2 hover:bg-accent text-sm">
                            Electronics
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block rounded-md p-2 hover:bg-accent text-sm">
                            Clothing
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block rounded-md p-2 hover:bg-accent text-sm">
                            Home & Garden
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Management</h4>
                    <ul className="space-y-1">
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block rounded-md p-2 hover:bg-accent text-sm">
                            Add Product
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a className="block rounded-md p-2 hover:bg-accent text-sm">
                            Inventory
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Customers
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="w-full justify-start">
              <TrendingUp className="mr-2 h-4 w-4" />
              Reports
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="w-full justify-between">
              <span className="flex items-center">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-4 w-[250px]">
                <h4 className="text-sm font-medium mb-3">System Settings</h4>
                <ul className="space-y-2">
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        General
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        Security
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        Integrations
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a className="block rounded-md p-2 hover:bg-accent text-sm">
                        Backup & Restore
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    <div className="text-sm text-gray-600 p-4 bg-gray-50 rounded-lg max-w-xs">
      <h4 className="font-semibold mb-2">Vertical Navigation Features:</h4>
      <ul className="space-y-1 text-xs">
        <li>• Sidebar-style layout</li>
        <li>• Content opens to the right</li>
        <li>• Ideal for dashboards</li>
        <li>• Keyboard navigation with arrow keys</li>
        <li>• Hover and focus states</li>
      </ul>
    </div>
  </div>
);

// Advanced viewport and indicator usage
export const AdvancedViewport = () => (
  <div className="space-y-6">
    <div className="text-sm text-gray-600 p-4 bg-green-50 rounded-lg">
      <div className="font-semibold mb-2">Advanced Features:</div>
      <ul className="space-y-1 text-xs">
        <li>• Custom viewport with position indicator</li>
        <li>• Smooth animations and transitions</li>
        <li>• Outside interaction handling</li>
        <li>• Custom focus management</li>
      </ul>
    </div>

    <NavigationMenu className="relative">
      <NavigationMenuList>
        <NavigationMenuItem value="products">
          <NavigationMenuTrigger>Products & Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 p-6 w-[500px] lg:grid-cols-[.5fr_1fr]">
              <div>
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/products"
                  >
                    <Package className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Our Products
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Comprehensive solutions for your business needs.
                    </p>
                  </a>
                </NavigationMenuLink>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium mb-2">Software</h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block rounded-md p-2 hover:bg-accent text-sm">
                          Enterprise CRM
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block rounded-md p-2 hover:bg-accent text-sm">
                          Analytics Platform
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Services</h4>
                  <ul className="space-y-1">
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block rounded-md p-2 hover:bg-accent text-sm">
                          Implementation
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a className="block rounded-md p-2 hover:bg-accent text-sm">
                          Support & Training
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="solutions">
          <NavigationMenuTrigger>Industry Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-3">
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="flex items-center mb-2">
                      <Building className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Healthcare</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      HIPAA-compliant solutions for healthcare providers
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="flex items-center mb-2">
                      <Briefcase className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Financial</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Secure platforms for financial institutions
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="flex items-center mb-2">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Retail</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Omnichannel commerce solutions
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="flex items-center mb-2">
                      <Code className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Technology</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Developer tools and APIs
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="flex items-center mb-2">
                      <Smartphone className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Manufacturing</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      IoT and automation solutions
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a className="block select-none space-y-1 rounded-md p-3 hover:bg-accent">
                    <div className="flex items-center mb-2">
                      <Shield className="mr-2 h-4 w-4" />
                      <span className="text-sm font-medium">Government</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Compliance and security focused
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem value="resources">
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[400px] p-4">
              <div className="grid gap-4">
                <NavigationMenuLink asChild>
                  <a className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    <div className="text-sm font-medium leading-none">
                      Documentation
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Comprehensive guides and API references
                    </div>
                  </a>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <a className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    <div className="text-sm font-medium leading-none">
                      Community
                    </div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Join our developer community and forums
                    </div>
                  </a>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <a className="group grid h-auto w-full items-center justify-start gap-1 rounded-md p-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
                    <div className="text-sm font-medium leading-none">Blog</div>
                    <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Latest news, tutorials, and case studies
                    </div>
                  </a>
                </NavigationMenuLink>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink href="/contact">Contact</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);
