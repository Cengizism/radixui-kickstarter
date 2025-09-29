import { AppHeader } from '@/components/AppSidebar';
import { createFileRoute } from '@tanstack/react-router';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/modules/tabs";

export const Route = createFileRoute("/docs/tabs")({
  component: TabsRoute,
});

function TabsRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Tabs</h1>
          <p className="text-muted-foreground mb-8">
            A set of layered sections of content that are displayed one at a
            time.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Example</h2>
              <div className="p-4 border rounded-lg">
                <Tabs defaultValue="account" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="space-y-2">
                    <h3 className="text-lg font-medium">Account Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage your account settings and preferences.
                    </p>
                  </TabsContent>
                  <TabsContent value="password" className="space-y-2">
                    <h3 className="text-lg font-medium">Password Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Change your password and security settings.
                    </p>
                  </TabsContent>
                  <TabsContent value="settings" className="space-y-2">
                    <h3 className="text-lg font-medium">General Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure your application preferences.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
