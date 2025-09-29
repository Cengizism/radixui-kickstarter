import { AppHeader } from '@/components/AppSidebar';
import { Badge } from '@/components/ui/elements/badge';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/docs/badge")({
  component: BadgeRoute,
});

function BadgeRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Badge</h1>
          <p className="text-muted-foreground mb-8">
            A small status indicator or label element.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <div className="flex flex-wrap gap-4 p-4 border rounded-lg">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
