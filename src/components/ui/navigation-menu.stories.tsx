import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Badge } from './badge';
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
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export default {
  title: "UI/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
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
export const SizeVariations = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Small Navigation</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger size="sm">Products</NavigationMenuTrigger>
            <NavigationMenuContent size="sm">
              <ul className="grid gap-3 p-4 w-[250px]">
                <li>
                  <NavigationMenuLink size="sm" asChild>
                    <a className="block select-none space-y-1 rounded-md p-2 text-xs">
                      <div className="font-medium">Small Product</div>
                      <p className="text-muted-foreground">
                        Compact description
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink size="sm" href="/about">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Default Navigation</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[300px]">
                <li>
                  <NavigationMenuLink asChild>
                    <a className="block select-none space-y-1 rounded-md p-3">
                      <div className="text-sm font-medium">Default Product</div>
                      <p className="text-sm text-muted-foreground">
                        Standard description
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Large Navigation</h3>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger size="lg">Products</NavigationMenuTrigger>
            <NavigationMenuContent size="lg">
              <ul className="grid gap-3 p-6 w-[400px]">
                <li>
                  <NavigationMenuLink size="lg" asChild>
                    <a className="block select-none space-y-1 rounded-md p-4">
                      <div className="text-base font-medium">Large Product</div>
                      <p className="text-sm text-muted-foreground">
                        Detailed description with more space
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink size="lg" href="/about">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  </div>
);

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
