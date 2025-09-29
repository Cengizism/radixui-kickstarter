import AdvancedConfig from '@/components/AdvancedConfig';
import { AppHeader } from '@/components/AppSidebar';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/templates/advanced")({
  component: AdvancedRoute,
});

function AdvancedRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto p-6">
        <AdvancedConfig />
      </main>
    </>
  );
}
