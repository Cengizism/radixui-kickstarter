import * as React from 'react';
import { Badge } from '@/components/ui/elements/badge';
import { createFileRoute } from '@tanstack/react-router';
import {
  ExternalLink,
  Home,
  Settings,
  Users
  } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/modules/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator,
  navigationMenuTriggerStyle,
} from "@/components/ui/modules/navigation-menu";

function NavigationMenuDemo() {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Navigation Menu</h1>
        <p className="text-xl text-muted-foreground">
          A collection of links for navigating websites with rich content
          support.
        </p>
      </div>

      {/* Basic Navigation Menu */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Navigation</h2>
          <p className="text-muted-foreground mb-4">
            A simple navigation menu with links and dropdowns.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/"
                    className={navigationMenuTriggerStyle()}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px]">
                      <div className="grid gap-1">
                        <NavigationMenuLink
                          href="/about/company"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Company
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Learn about our mission and values.
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="/about/team"
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">
                            Team
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                            Meet the people behind the product.
                          </p>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/contact"
                    className={navigationMenuTriggerStyle()}
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </section>

      {/* Size Variants */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Size Variants</h2>
          <p className="text-muted-foreground mb-4">
            Navigation menus come in different sizes: small, default, and large.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Small Size
                <Badge variant="secondary">sm</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/" size="sm">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger size="sm">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent size="sm">
                      <div className="p-2">
                        <NavigationMenuLink
                          href="/products"
                          className="block p-2 text-sm"
                        >
                          All Products
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Default Size
                <Badge variant="secondary">default</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/">Home</NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4">
                        <NavigationMenuLink
                          href="/products"
                          className="block p-2"
                        >
                          All Products
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Large Size
                <Badge variant="secondary">lg</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/" size="lg">
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger size="lg">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent size="lg">
                      <div className="p-6">
                        <NavigationMenuLink
                          href="/products"
                          className="block p-3 text-lg"
                        >
                          All Products
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rich Content Menu */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Rich Content Menu</h2>
          <p className="text-muted-foreground mb-4">
            Navigation menus with rich content, images, and detailed
            descriptions.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <Settings className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Components
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components built with Radix
                              UI and Tailwind CSS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind
                        CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem title="Documentation" href="/docs">
                        Complete guide to using our components and utilities.
                      </ListItem>
                      <ListItem title="Examples" href="/examples">
                        Browse through dozens of examples and implementations.
                      </ListItem>
                      <ListItem title="GitHub" href="/github">
                        View the source code and contribute to the project.
                      </ListItem>
                      <ListItem title="Support" href="/support">
                        Get help from our community and support team.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/contact">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </section>

      {/* Vertical Navigation */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Vertical Navigation</h2>
          <p className="text-muted-foreground mb-4">
            A vertical navigation menu layout for sidebars and mobile views.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <NavigationMenu orientation="vertical">
              <NavigationMenuList className="flex-col items-start space-x-0 space-y-1">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/" className="w-full justify-start">
                    <Home className="mr-2 h-4 w-4" />
                    Dashboard
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Team
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      <NavigationMenuLink
                        href="/team/members"
                        className="block w-full justify-start p-2 text-left"
                      >
                        Members
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/team/roles"
                        className="block w-full justify-start p-2 text-left"
                      >
                        Roles
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="/settings"
                    className="w-full justify-start"
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </section>

      {/* With Indicator */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">With Indicator</h2>
          <p className="text-muted-foreground mb-4">
            Navigation menu with an animated indicator that highlights the
            active item.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/">Home</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 md:w-[400px]">
                      <NavigationMenuLink
                        href="/products/new"
                        className="block p-3"
                      >
                        <div className="font-medium">New Products</div>
                        <p className="text-sm text-muted-foreground">
                          Latest additions to our catalog.
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/products/popular"
                        className="block p-3"
                      >
                        <div className="font-medium">Popular</div>
                        <p className="text-sm text-muted-foreground">
                          Most loved by our customers.
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/about">About</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuIndicator />
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </section>

      {/* Complex Application Menu */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Complex Application Menu
          </h2>
          <p className="text-muted-foreground mb-4">
            A comprehensive navigation menu for complex applications with
            multiple sections and external links.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <div className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-blue-500/5 p-6 no-underline outline-none focus:shadow-md"
                            href="/platform"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Enterprise Platform
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Complete solution for enterprise-grade
                              applications with advanced security and
                              scalability.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </div>
                      <ListItem href="/platform/analytics" title="Analytics">
                        Advanced analytics and reporting tools for data-driven
                        decisions.
                      </ListItem>
                      <ListItem href="/platform/security" title="Security">
                        Enterprise-grade security features and compliance tools.
                      </ListItem>
                      <ListItem
                        href="/platform/integrations"
                        title="Integrations"
                      >
                        Connect with hundreds of third-party services and APIs.
                      </ListItem>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem title="For Startups" href="/solutions/startups">
                        Scalable solutions designed for growing businesses.
                      </ListItem>
                      <ListItem
                        title="For Enterprise"
                        href="/solutions/enterprise"
                      >
                        Enterprise-grade tools for large organizations.
                      </ListItem>
                      <ListItem
                        title="For Developers"
                        href="/solutions/developers"
                      >
                        Developer-focused tools and comprehensive APIs.
                      </ListItem>
                      <ListItem title="For Agencies" href="/solutions/agencies">
                        White-label solutions for agencies and consultants.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem title="Documentation" href="/docs">
                        Comprehensive guides and API documentation.
                      </ListItem>
                      <ListItem title="Blog" href="/blog">
                        Latest news, tutorials, and industry insights.
                      </ListItem>
                      <ListItem title="Community" href="/community">
                        Join our community of developers and users.
                      </ListItem>
                      <ListItem title="Support" href="/support">
                        Get help from our expert support team.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/pricing">
                    Pricing
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="https://github.com/company/product"
                    target="_blank"
                    className="flex items-center gap-2"
                  >
                    GitHub
                    <ExternalLink className="h-3 w-3" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </section>

      {/* Props Reference */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Props Reference</h2>
          <p className="text-muted-foreground mb-4">
            Available props and variants for the Navigation Menu component.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>NavigationMenuTrigger & NavigationMenuLink</CardTitle>
              <CardDescription>
                Size variants for triggers and links
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  size: "sm" | "default" | "lg"
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Controls the size of triggers and links
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>NavigationMenuContent</CardTitle>
              <CardDescription>Content container variants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <code className="text-sm bg-muted p-1 rounded">
                  size: "sm" | "default" | "lg"
                </code>
                <p className="text-sm text-muted-foreground mt-1">
                  Controls the minimum width of content containers
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const Route = createFileRoute("/docs/navigation-menu")({
  component: NavigationMenuDemo,
});
