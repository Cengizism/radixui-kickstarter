import { AppHeader } from '@/components/AppHeader';
import { createFileRoute } from '@tanstack/react-router';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export const Route = createFileRoute("/docs/avatar")({
  component: AvatarRoute,
});

function AvatarRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Avatar</h1>
          <p className="text-muted-foreground mb-8">
            An image element with a fallback for representing the user.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Avatar with image, fallback handling, and text-only fallback as
                shown in the official docs.
              </p>
              <div className="flex flex-wrap items-center gap-4 p-4 border rounded-lg">
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                    alt="Colm Tuite"
                  />
                  <AvatarFallback delayMs={600}>CT</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                    alt="Pedro Duarte"
                  />
                  <AvatarFallback delayMs={600}>PD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Demonstrate fallback rendering with{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-xs">
                  delayMs
                </code>{" "}
                to avoid content flashing during loading.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Immediate Fallback</h4>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src="/nonexistent-image.jpg"
                          alt="Non-existent"
                        />
                        <AvatarFallback>IF</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">Immediate Fallback</p>
                        <p className="text-muted-foreground">
                          No delay, shows immediately
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Delayed Fallback</h4>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src="/another-nonexistent.jpg"
                          alt="Delayed"
                        />
                        <AvatarFallback delayMs={1000}>DF</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">Delayed Fallback</p>
                        <p className="text-muted-foreground">
                          1000ms delay for slow connections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Available size variants for different use cases.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="text-center">
                    <Avatar size="sm" className="mx-auto mb-2">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=64&h=64&dpr=2&q=80"
                        alt="Small avatar"
                      />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">Small</p>
                    <p className="text-xs text-muted-foreground">32px</p>
                  </div>

                  <div className="text-center">
                    <Avatar size="default" className="mx-auto mb-2">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=80&h=80&dpr=2&q=80"
                        alt="Default avatar"
                      />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">Default</p>
                    <p className="text-xs text-muted-foreground">40px</p>
                  </div>

                  <div className="text-center">
                    <Avatar size="lg" className="mx-auto mb-2">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b193?&w=96&h=96&dpr=2&q=80"
                        alt="Large avatar"
                      />
                      <AvatarFallback>LG</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">Large</p>
                    <p className="text-xs text-muted-foreground">48px</p>
                  </div>

                  <div className="text-center">
                    <Avatar size="xl" className="mx-auto mb-2">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=128&h=128&dpr=2&q=80"
                        alt="Extra large avatar"
                      />
                      <AvatarFallback>XL</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium">Extra Large</p>
                    <p className="text-xs text-muted-foreground">64px</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Fallback Variations
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Different fallback content types and styles.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  <div className="text-center">
                    <Avatar className="mx-auto mb-2">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Initials</p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2">
                      <AvatarFallback className="bg-blue-100 text-blue-700">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Blue Theme</p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2">
                      <AvatarFallback className="bg-green-100 text-green-700">
                        MK
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Green Theme</p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2">
                      <AvatarFallback className="bg-purple-100 text-purple-700">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Icon</p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2">
                      <AvatarFallback className="bg-gradient-to-br from-pink-200 to-purple-200 text-purple-700">
                        GR
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Gradient</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">User Lists</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Common patterns for displaying user information with avatars.
              </p>
              <div className="p-4 border rounded-lg space-y-4">
                {[
                  {
                    name: "Sarah Wilson",
                    email: "sarah.wilson@example.com",
                    role: "Product Manager",
                    image:
                      "https://images.unsplash.com/photo-1494790108755-2616b612b193?&w=80&h=80&dpr=2&q=80",
                    initials: "SW",
                  },
                  {
                    name: "Michael Chen",
                    email: "michael.chen@example.com",
                    role: "Software Engineer",
                    image:
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=80&h=80&dpr=2&q=80",
                    initials: "MC",
                  },
                  {
                    name: "Emily Rodriguez",
                    email: "emily.rodriguez@example.com",
                    role: "UX Designer",
                    image: "/nonexistent.jpg", // Will fallback to initials
                    initials: "ER",
                  },
                  {
                    name: "David Kim",
                    email: "david.kim@example.com",
                    role: "DevOps Engineer",
                    image:
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=80&h=80&dpr=2&q=80",
                    initials: "DK",
                  },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <Avatar>
                      <AvatarImage src={user.image} alt={user.name} />
                      <AvatarFallback delayMs={600}>
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {user.email}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{user.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Avatar Groups</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Stacked avatars for showing multiple users or team members.
              </p>
              <div className="p-4 border rounded-lg space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Team Members</h4>
                  <div className="flex -space-x-2">
                    <Avatar className="border-2 border-background">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b193?&w=80&h=80&dpr=2&q=80"
                        alt="Member 1"
                      />
                      <AvatarFallback>M1</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=80&h=80&dpr=2&q=80"
                        alt="Member 2"
                      />
                      <AvatarFallback>M2</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=80&h=80&dpr=2&q=80"
                        alt="Member 3"
                      />
                      <AvatarFallback>M3</AvatarFallback>
                    </Avatar>
                    <Avatar className="border-2 border-background">
                      <AvatarFallback className="bg-muted-foreground text-background">
                        +5
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Large Group</h4>
                  <div className="flex -space-x-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Avatar
                        key={i}
                        size="lg"
                        className="border-2 border-background"
                      >
                        <AvatarImage
                          src={`https://images.unsplash.com/photo-${1494790108755 + i * 1000}?&w=96&h=96&dpr=2&q=80`}
                          alt={`Team member ${i + 1}`}
                        />
                        <AvatarFallback>T{i + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                    <Avatar size="lg" className="border-2 border-background">
                      <AvatarFallback className="bg-muted-foreground text-background">
                        +12
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Interactive States
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Avatars with hover effects and clickable behavior (as mentioned
                in official docs for tooltip integration).
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Avatar className="mx-auto mb-2 cursor-pointer hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b193?&w=80&h=80&dpr=2&q=80"
                        alt="Hoverable"
                      />
                      <AvatarFallback>HV</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Hoverable</p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=80&h=80&dpr=2&q=80"
                        alt="Scaleable"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">
                      Scale Effect
                    </p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2 cursor-pointer hover:shadow-lg transition-shadow">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=80&h=80&dpr=2&q=80"
                        alt="Shadow"
                      />
                      <AvatarFallback>SH</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">
                      Shadow Effect
                    </p>
                  </div>

                  <div className="text-center">
                    <Avatar className="mx-auto mb-2 cursor-pointer hover:opacity-80 transition-opacity">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=80&h=80&dpr=2&q=80"
                        alt="Fade"
                      />
                      <AvatarFallback>FD</AvatarFallback>
                    </Avatar>
                    <p className="text-xs text-muted-foreground">Fade Effect</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Status Indicators</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Avatars with status indicators for online presence or
                notifications.
              </p>
              <div className="p-4 border rounded-lg">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b193?&w=80&h=80&dpr=2&q=80"
                          alt="Online user"
                        />
                        <AvatarFallback>ON</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Online</p>
                  </div>

                  <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&w=80&h=80&dpr=2&q=80"
                          alt="Away user"
                        />
                        <AvatarFallback>AW</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-yellow-500 border-2 border-background rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Away</p>
                  </div>

                  <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?&w=80&h=80&dpr=2&q=80"
                          alt="Busy user"
                        />
                        <AvatarFallback>BS</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-red-500 border-2 border-background rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Busy</p>
                  </div>

                  <div className="text-center">
                    <div className="relative inline-block">
                      <Avatar>
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&w=80&h=80&dpr=2&q=80"
                          alt="Offline user"
                        />
                        <AvatarFallback>OF</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 border-2 border-background rounded-full"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Offline
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
