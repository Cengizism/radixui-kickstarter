import { AppHeader } from '@/components/AppSidebar';
import { createFileRoute } from '@tanstack/react-router';
import { Progress } from '@/components/ui/elements/progress';

export const Route = createFileRoute("/docs/progress")({
  component: ProgressRoute,
});

function ProgressRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Progress</h1>
          <p className="text-muted-foreground mb-8">
            A visual indicator showing the completion progress of a task.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <div className="space-y-4 p-4 border rounded-lg max-w-md">
                <div className="space-y-2">
                  <div className="text-sm font-medium">25% Complete</div>
                  <Progress value={25} />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">50% Complete</div>
                  <Progress value={50} />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">75% Complete</div>
                  <Progress value={75} />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium">100% Complete</div>
                  <Progress value={100} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
