import { Input } from '../../components/ui/elements/input';

export default function InputPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Input</h1>
      <p className="text-muted-foreground mb-8">
        A text input field for user data entry.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="space-y-4 p-4 border rounded-lg max-w-md">
            <Input placeholder="Default input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input disabled placeholder="Disabled input" />
          </div>
        </section>
      </div>
    </div>
  );
}
