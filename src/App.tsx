import React, { useState } from 'react';
import { Button } from './components/ui/button';

interface Section {
	id: string;
	title: string;
	content: React.ReactNode;
}

const sections: Section[] = [
	{
		id: 'introduction',
		title: 'Introduction',
		content: (
			<div className="space-y-6">
				<div>
					<h1 className="text-4xl font-bold text-foreground mb-4">
						Radix-UI Bootstrapper
					</h1>
					<p className="text-lg text-muted-foreground max-w-3xl">
						A comprehensive React component library and design system built with
						Radix UI and TailwindCSS. This library provides a complete set of
						accessible, customizable, and beautiful components for building
						modern web applications.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="p-6 border border-border rounded-lg bg-card">
						<h3 className="text-lg font-semibold mb-2">🎯 Accessible</h3>
						<p className="text-sm text-muted-foreground">
							Built on Radix UI primitives ensuring ARIA compliance and keyboard
							navigation.
						</p>
					</div>
					<div className="p-6 border border-border rounded-lg bg-card">
						<h3 className="text-lg font-semibold mb-2">🎨 Customizable</h3>
						<p className="text-sm text-muted-foreground">
							TailwindCSS classes and CSS variables make theming and
							customization effortless.
						</p>
					</div>
					<div className="p-6 border border-border rounded-lg bg-card">
						<h3 className="text-lg font-semibold mb-2">📦 Copy & Paste</h3>
						<p className="text-sm text-muted-foreground">
							Components are designed to be easily copied and integrated into
							your projects.
						</p>
					</div>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl font-semibold">Getting Started</h2>
					<div className="bg-muted p-4 rounded-lg">
						<pre className="text-sm">
							{`pnpm add radix-ui class-variance-authority clsx tailwind-merge lucide-react`}
						</pre>
					</div>
				</div>
			</div>
		),
	},
	{
		id: 'components',
		title: 'Components',
		content: (
			<div className="space-y-8">
				<div>
					<h1 className="text-3xl font-bold mb-4">Components</h1>
					<p className="text-muted-foreground mb-8">
						A collection of reusable components built using Radix UI and styled
						with TailwindCSS.
					</p>
				</div>

				<div className="space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4">Button</h2>
						<p className="text-muted-foreground mb-6">
							Displays a button or a component that looks like a button.
						</p>

						<div className="space-y-4">
							<div className="p-6 border border-border rounded-lg bg-card">
								<h3 className="text-lg font-medium mb-4">Examples</h3>
								<div className="flex flex-wrap gap-4 mb-6">
									<Button>Default</Button>
									<Button variant="secondary">Secondary</Button>
									<Button variant="destructive">Destructive</Button>
									<Button variant="outline">Outline</Button>
									<Button variant="ghost">Ghost</Button>
									<Button variant="link">Link</Button>
								</div>

								<div className="flex flex-wrap gap-4">
									<Button size="sm">Small</Button>
									<Button size="default">Default</Button>
									<Button size="lg">Large</Button>
									<Button size="icon">🎯</Button>
								</div>
							</div>

							<div className="bg-muted p-4 rounded-lg">
								<h4 className="text-sm font-medium mb-2">Usage</h4>
								<pre className="text-sm text-muted-foreground overflow-x-auto">
									{`import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}`}
								</pre>
							</div>
						</div>
					</section>
				</div>
			</div>
		),
	},
	{
		id: 'styling',
		title: 'Styling',
		content: (
			<div className="space-y-6">
				<div>
					<h1 className="text-3xl font-bold mb-4">Styling Guide</h1>
					<p className="text-muted-foreground">
						Learn how to customize and style components in this design system.
					</p>
				</div>

				<div className="space-y-6">
					<section>
						<h2 className="text-xl font-semibold mb-3">Design Tokens</h2>
						<p className="text-muted-foreground mb-4">
							Our design system uses CSS custom properties for consistent
							theming across all components.
						</p>
						<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
							{[
								{ name: 'Primary', var: '--primary', class: 'bg-primary' },
								{
									name: 'Secondary',
									var: '--secondary',
									class: 'bg-secondary',
								},
								{ name: 'Accent', var: '--accent', class: 'bg-accent' },
								{ name: 'Muted', var: '--muted', class: 'bg-muted' },
							].map((color) => (
								<div
									key={color.name}
									className="p-4 border border-border rounded-lg"
								>
									<div
										className={`w-full h-12 rounded mb-2 ${color.class}`}
									></div>
									<p className="text-sm font-medium">{color.name}</p>
									<p className="text-xs text-muted-foreground">{color.var}</p>
								</div>
							))}
						</div>
					</section>

					<section>
						<h2 className="text-xl font-semibold mb-3">Component Variants</h2>
						<p className="text-muted-foreground mb-4">
							Components use class-variance-authority for type-safe variant
							management.
						</p>
						<div className="bg-muted p-4 rounded-lg">
							<pre className="text-sm overflow-x-auto">
								{`const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)`}
							</pre>
						</div>
					</section>
				</div>
			</div>
		),
	},
];

function App() {
	const [activeSection, setActiveSection] = useState('introduction');

	return (
		<div className="min-h-screen bg-background">
			{/* Navigation */}
			<nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
				<div className="container mx-auto px-4">
					<div className="flex h-14 items-center">
						<div className="mr-8">
							<h1 className="text-lg font-semibold">Radix-UI Bootstrapper</h1>
						</div>
						<div className="flex space-x-6">
							{sections.map((section) => (
								<button
									key={section.id}
									onClick={() => setActiveSection(section.id)}
									className={`text-sm font-medium transition-colors hover:text-primary ${
										activeSection === section.id
											? 'text-primary border-b-2 border-primary'
											: 'text-muted-foreground'
									}`}
								>
									{section.title}
								</button>
							))}
						</div>
					</div>
				</div>
			</nav>

			{/* Content */}
			<main className="container mx-auto px-4 py-8">
				{sections.find((section) => section.id === activeSection)?.content}
			</main>
		</div>
	);
}

export default App;
