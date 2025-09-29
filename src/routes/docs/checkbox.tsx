import { AppHeader } from '@/components/AppHeader';
import { Checkbox } from '@/components/ui/elements/checkbox';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/docs/checkbox")({
  component: CheckboxRoute,
});

function CheckboxRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Checkbox</h1>
          <p className="text-muted-foreground mb-8">
            A control that allows the user to toggle between checked and
            unchecked states.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <div className="space-y-4 p-4 border rounded-lg max-w-md">
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox1" />
                  <label htmlFor="checkbox1" className="text-sm font-medium">
                    Accept terms and conditions
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox2" defaultChecked />
                  <label htmlFor="checkbox2" className="text-sm font-medium">
                    Pre-checked option
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="checkbox3" disabled />
                  <label
                    htmlFor="checkbox3"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Disabled option
                  </label>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
