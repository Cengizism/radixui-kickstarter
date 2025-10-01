import { Card, CardContent, CardHeader } from '../card/card';
import { Skeleton } from '@/components/ui/skeleton';

export default {
  title: "UI/Skeleton",
  component: Skeleton,
  docs: {
    description: {
      component:
        "A skeleton component used as a placeholder while content is loading. Provides visual feedback for improved user experience during loading states.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // HTML Props
    className: {
      control: "text",
      description:
        "Additional CSS class names to apply to the skeleton for custom styling",
      table: {
        category: "HTML Props",
        type: { summary: "string" },
      },
    },
    // Content Props
    children: {
      control: "text",
      description:
        "Content to render inside the skeleton (optional, typically not used)",
      table: {
        category: "Content Props",
        type: { summary: "ReactNode" },
      },
    },
  },
};

// Basic skeleton shapes
export const Default = () => (
  <div className="space-y-4">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[150px]" />
  </div>
);

// Different sizes and shapes
export const Shapes = () => (
  <div className="space-y-6">
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Text Lines</h4>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Circles</h4>
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-16 w-16 rounded-full" />
        <Skeleton className="h-20 w-20 rounded-full" />
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Rectangles</h4>
      <div className="space-y-2">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-24 w-48" />
        <Skeleton className="h-32 w-64" />
      </div>
    </div>

    <div className="space-y-2">
      <h4 className="text-sm font-medium">Buttons</h4>
      <div className="flex space-x-2">
        <Skeleton className="h-9 w-20 rounded-md" />
        <Skeleton className="h-9 w-24 rounded-md" />
        <Skeleton className="h-10 w-28 rounded-md" />
      </div>
    </div>
  </div>
);

// Card loading skeleton
export const CardSkeleton = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[160px]" />
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="pt-4">
          <Skeleton className="h-32 w-full rounded-md" />
        </div>
        <div className="flex justify-between pt-4">
          <Skeleton className="h-9 w-20 rounded-md" />
          <Skeleton className="h-9 w-20 rounded-md" />
        </div>
      </div>
    </CardContent>
  </Card>
);

// Interactive playground
export const Playground = (args: { className?: string }) => (
  <div className="space-y-4">
    <Skeleton className={args.className || "h-4 w-[250px]"} />
    <p className="text-sm text-muted-foreground">
      Customize the className prop to change size and shape
    </p>
  </div>
);

Playground.args = {
  className: "h-4 w-[250px]",
};
