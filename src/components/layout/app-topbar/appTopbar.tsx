import { SidebarTrigger } from '@/components/ui/sidebar';

export function AppTopbar() {
  return (
    <header className="flex h-14 items-center gap-2 border-b bg-background px-4">
      <SidebarTrigger />
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-lg font-semibold">RadixUI React Kickstarter</h1>
      </div>
    </header>
  );
}
