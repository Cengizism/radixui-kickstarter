import { NavbarTrigger } from '@/components/layout/navbar';

export function Topbar() {
  return (
    <header className="flex h-14 items-center gap-2 border-b bg-background px-4">
      <NavbarTrigger />
      <div className="flex flex-1 items-center gap-4">
        <h1 className="text-lg font-semibold">RadixUI React Kickstarter</h1>
      </div>
    </header>
  );
}
