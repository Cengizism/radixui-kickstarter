import { Badge } from '@/components/ui/badge/badge';
import { createFileRoute } from '@tanstack/react-router';
import { ExternalLink } from 'lucide-react';
import { Topbar } from '@/components/layout/topbar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card/card";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Topbar />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to Radix UI Components
            </h1>
            <p className="text-muted-foreground mt-2">
              A comprehensive library of Radix UI primitives styled with
              TailwindCSS
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Elements</CardTitle>
                <CardDescription>
                  Basic building blocks and primitive components
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore our collection of essential UI elements like buttons,
                  inputs, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modules</CardTitle>
                <CardDescription>
                  Complex compositions of multiple elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Discover advanced components built from combining multiple
                  elements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Templates</CardTitle>
                <CardDescription>
                  Complete page layouts and examples
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Browse full page templates and real-world usage examples.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack Section */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Tech Stack</h2>
              <p className="text-muted-foreground">
                The technologies and libraries powering this application
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Core Technologies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Core Technologies
                    <Badge variant="secondary">Frontend</Badge>
                  </CardTitle>
                  <CardDescription>
                    Foundation frameworks and libraries
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a
                      href="https://react.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      React ^18.3.1 - UI Library
                    </a>
                    <a
                      href="https://www.typescriptlang.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      TypeScript ^5.0.0 - Type Safety
                    </a>
                    <a
                      href="https://vitejs.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Vite 6.3.5 - Build Tool
                    </a>
                    <a
                      href="https://tanstack.com/router"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      TanStack Router ^1.132.23 - Routing
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* UI & Styling */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    UI & Styling
                    <Badge variant="outline">Design</Badge>
                  </CardTitle>
                  <CardDescription>
                    Design system and styling tools
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a
                      href="https://www.radix-ui.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Radix UI ^1.4.3 - Primitives
                    </a>
                    <a
                      href="https://tailwindcss.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Tailwind CSS ^3.4.0 - Styling
                    </a>
                    <a
                      href="https://cva.style"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Class Variance Authority ^0.7.1 - Variants
                    </a>
                    <a
                      href="https://lucide.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Lucide React ^0.487.0 - Icons
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Libraries */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Additional Libraries
                    <Badge variant="secondary">Utils</Badge>
                  </CardTitle>
                  <CardDescription>
                    Utility libraries and components
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a
                      href="https://react-hook-form.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      React Hook Form ^7.55.0 - Forms
                    </a>
                    <a
                      href="https://recharts.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Recharts ^2.15.2 - Charts
                    </a>
                    <a
                      href="https://sonner.emilkowal.ski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Sonner ^2.0.3 - Toast Notifications
                    </a>
                    <a
                      href="https://github.com/pacocoursey/next-themes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Next Themes ^0.4.6 - Theme Provider
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Developer Tools */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    Developer Tools
                    <Badge variant="destructive">Dev</Badge>
                  </CardTitle>
                  <CardDescription>Development and build tools</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <a
                      href="https://eslint.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      ESLint ^9.36.0 - Linting
                    </a>
                    <a
                      href="https://prettier.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Prettier ^3.6.2 - Code Formatting
                    </a>
                    <a
                      href="https://swc.rs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      SWC ^3.10.2 - Fast Compilation
                    </a>
                    <a
                      href="https://postcss.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      PostCSS ^8.4.0 - CSS Processing
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
