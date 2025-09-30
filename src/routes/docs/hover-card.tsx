import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardArrowStyled,
  HoverCardProfile,
} from "@/components/ui/modules/hover-card";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/elements/avatar";

function HoverCardExample() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Hover Card</h1>
        <p className="text-lg text-muted-foreground mt-2">
          For sighted users to preview content available behind a link. Built on
          top of Radix UI Hover Card primitive.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A simple hover card that shows additional information when hovering
            over a trigger element.
          </p>
          <div className="flex justify-center p-8">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="font-semibold">
                  @radix_ui
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/radix-ui.png" />
                    <AvatarFallback>RU</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">@radix_ui</h4>
                    <p className="text-sm text-muted-foreground">
                      Low-level UI primitives for React. Unstyled, accessible
                      components for building high‑quality design systems and
                      web apps.
                    </p>
                    <div className="flex items-center pt-2">
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Size Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Hover cards support different sizes: small, default, large, and
            extra large.
          </p>
          <div className="flex flex-wrap justify-center gap-8 p-8">
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
                    This is a small hover card with compact content.
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
                    This is the default size hover card with standard spacing
                    and content.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="lg">
                  Large
                </Button>
              </HoverCardTrigger>
              <HoverCardContent size="lg">
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">Large Card</h4>
                  <p className="text-sm text-muted-foreground">
                    This is a large hover card with more generous spacing and
                    room for additional content sections.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <Badge variant="secondary">Feature</Badge>
                    <Badge variant="outline">Demo</Badge>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" size="lg">
                  Extra Large
                </Button>
              </HoverCardTrigger>
              <HoverCardContent size="xl">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold">Extra Large Card</h4>
                  <p className="text-sm text-muted-foreground">
                    This is an extra large hover card suitable for detailed
                    information, multiple sections, or rich media content.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="space-y-1">
                      <div className="font-medium text-sm">Views</div>
                      <div className="text-2xl font-bold">1.2M</div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">Downloads</div>
                      <div className="text-2xl font-bold">850K</div>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* With Arrow */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Arrow</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Add an arrow to visually connect the trigger with the content. The
            arrow automatically positions itself based on the content placement.
          </p>
          <div className="flex justify-center gap-8 p-8">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </HoverCardTrigger>
              <HoverCardContent sideOffset={8}>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">With Arrow</h4>
                  <p className="text-sm text-muted-foreground">
                    This hover card includes an arrow that points to the trigger
                    element.
                  </p>
                </div>
                <HoverCardArrowStyled />
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Different Size</Button>
              </HoverCardTrigger>
              <HoverCardContent size="lg" sideOffset={12}>
                <div className="space-y-3">
                  <h4 className="text-base font-semibold">Large Arrow</h4>
                  <p className="text-sm text-muted-foreground">
                    Larger hover cards can have proportionally larger arrows for
                    better visual balance.
                  </p>
                </div>
                <HoverCardArrowStyled size="lg" />
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Profile Card */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Profile Hover Card</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A specialized hover card for displaying user profiles with avatar,
            name, bio, and stats.
          </p>
          <div className="flex justify-center p-8">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="link" className="font-semibold">
                  @johndoe
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <HoverCardProfile
                  avatar="https://github.com/shadcn.png"
                  name="John Doe"
                  username="johndoe"
                  description="Frontend Developer passionate about React, TypeScript, and building beautiful user interfaces. Currently working on design systems."
                  verified={true}
                  stats={[
                    { label: "Following", value: "1,234" },
                    { label: "Followers", value: "5,678" },
                  ]}
                />
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Instant Show */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Instant Show</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Control the open delay to show the hover card instantly on hover
            using the openDelay prop.
          </p>
          <div className="flex justify-center gap-8 p-8">
            <HoverCard openDelay={0}>
              <HoverCardTrigger asChild>
                <Button variant="outline">Instant</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Instant Hover</h4>
                  <p className="text-sm text-muted-foreground">
                    This hover card appears immediately when you hover over the
                    trigger (openDelay: 0ms).
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={1000}>
              <HoverCardTrigger asChild>
                <Button variant="outline">Delayed</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Delayed Hover</h4>
                  <p className="text-sm text-muted-foreground">
                    This hover card has a 1 second delay before appearing
                    (openDelay: 1000ms).
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Positioning */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Positioning</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Control the side and alignment of the hover card content using side
            and align props.
          </p>
          <div className="grid grid-cols-2 gap-8 p-8 place-items-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Top</Button>
              </HoverCardTrigger>
              <HoverCardContent side="top">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Top Side</h4>
                  <p className="text-xs text-muted-foreground">
                    Content appears above
                  </p>
                </div>
                <HoverCardArrowStyled />
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Right</Button>
              </HoverCardTrigger>
              <HoverCardContent side="right">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Right Side</h4>
                  <p className="text-xs text-muted-foreground">
                    Content appears to the right
                  </p>
                </div>
                <HoverCardArrowStyled />
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Left</Button>
              </HoverCardTrigger>
              <HoverCardContent side="left">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Left Side</h4>
                  <p className="text-xs text-muted-foreground">
                    Content appears to the left
                  </p>
                </div>
                <HoverCardArrowStyled />
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </HoverCardTrigger>
              <HoverCardContent side="bottom">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Bottom Side</h4>
                  <p className="text-xs text-muted-foreground">
                    Content appears below
                  </p>
                </div>
                <HoverCardArrowStyled />
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>

        {/* Rich Content */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Rich Content Examples</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Hover cards can contain rich content including images, buttons, and
            complex layouts.
          </p>
          <div className="flex flex-wrap justify-center gap-8 p-8">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="cursor-pointer">
                  <img
                    src="https://github.com/vercel.png"
                    alt="Vercel"
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              </HoverCardTrigger>
              <HoverCardContent size="lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://github.com/vercel.png"
                      alt="Vercel"
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-sm font-semibold">Vercel</h4>
                      <p className="text-sm text-muted-foreground">@vercel</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Develop. Preview. Ship. Vercel is the platform for frontend
                    developers, providing the speed and reliability innovators
                    need to create at the moment of inspiration.
                  </p>
                  <div className="flex justify-between text-sm">
                    <div className="space-y-1">
                      <div className="font-semibold">1.2M</div>
                      <div className="text-muted-foreground text-xs">
                        Developers
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">50B+</div>
                      <div className="text-muted-foreground text-xs">
                        Requests/month
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="font-semibold">99.99%</div>
                      <div className="text-muted-foreground text-xs">
                        Uptime
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Follow
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      Visit
                    </Button>
                  </div>
                </div>
                <HoverCardArrowStyled size="lg" />
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  System Status
                </Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold">Service Health</h4>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 border-green-200"
                    >
                      All Systems Operational
                    </Badge>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">API Gateway</span>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs text-muted-foreground">
                          Operational
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database</span>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        <span className="text-xs text-muted-foreground">
                          Operational
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">CDN</span>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        <span className="text-xs text-muted-foreground">
                          Degraded
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">
                      Last updated: 2 minutes ago
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/docs/hover-card")({
  component: HoverCardExample,
});
