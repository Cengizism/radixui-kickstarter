import { Button } from '../../components/ui/elements/button';

export default function ButtonPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Button</h1>
      <p className="text-muted-foreground mb-8">
        A clickable button element that triggers an action.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="flex flex-wrap gap-4 p-4 border rounded-lg">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4 p-4 border rounded-lg">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>
      </div>
    </div>
  );
}
