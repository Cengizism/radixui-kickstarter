import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Radix UI Kickstarter
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          A comprehensive library of Radix UI primitives styled with
          TailwindCSS. Explore the component library through Storybook to see
          all available components and their variations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://github.com/Cengizism/radixui-kickstarter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground px-6 py-3 text-sm font-medium transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
