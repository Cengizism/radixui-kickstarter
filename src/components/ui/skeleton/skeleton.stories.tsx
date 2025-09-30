import { Avatar } from '../avatar/avatar';
import { Button } from './button';
import { Card, CardContent, CardHeader } from '../card/card';
import { Skeleton } from './skeleton';

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
    className: {
      control: "text",
      description: "Additional CSS class names to apply to the skeleton",
    },
    children: {
      control: "text",
      description: "Content to render inside the skeleton (optional)",
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

// Article skeleton
export const ArticleSkeleton = () => (
  <div className="max-w-2xl space-y-6">
    {/* Header */}
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-6 w-1/2" />
      <div className="flex items-center space-x-3">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>
    </div>

    {/* Featured image */}
    <Skeleton className="h-48 w-full rounded-lg" />

    {/* Content */}
    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/5" />
    </div>

    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
    </div>

    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

// Profile skeleton
export const ProfileSkeleton = () => (
  <div className="max-w-md">
    <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg">
      <Skeleton className="h-24 w-24 rounded-full" />
      <div className="space-y-2 text-center w-full">
        <Skeleton className="h-5 w-32 mx-auto" />
        <Skeleton className="h-4 w-24 mx-auto" />
      </div>
      <div className="space-y-2 w-full">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5 mx-auto" />
        <Skeleton className="h-3 w-3/5 mx-auto" />
      </div>
      <div className="flex space-x-2 pt-2">
        <Skeleton className="h-9 w-20 rounded-md" />
        <Skeleton className="h-9 w-24 rounded-md" />
      </div>
    </div>
  </div>
);

// List skeleton
export const ListSkeleton = () => (
  <div className="w-full max-w-md space-y-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className="flex items-center space-x-4 p-3 border rounded-lg"
      >
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
        <Skeleton className="h-8 w-16 rounded-md" />
      </div>
    ))}
  </div>
);

// Table skeleton
export const TableSkeleton = () => (
  <div className="w-full max-w-4xl">
    <div className="border rounded-lg overflow-hidden">
      {/* Table Header */}
      <div className="flex items-center space-x-4 p-4 border-b bg-muted/30">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-4 w-16" />
      </div>

      {/* Table Rows */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center space-x-4 p-4 border-b last:border-b-0"
        >
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-8 w-16 rounded-md" />
        </div>
      ))}
    </div>
  </div>
);

// Dashboard skeleton
export const DashboardSkeleton = () => (
  <div className="max-w-6xl space-y-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-4 w-64" />
      </div>
      <Skeleton className="h-9 w-24 rounded-md" />
    </div>

    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <Card key={i}>
          <CardContent className="p-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-8 w-16" />
              <Skeleton className="h-3 w-20" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Chart and Table */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-64 w-full rounded-md" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Skeleton className="h-6 w-28" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-1 flex-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  </div>
);

// Chat skeleton
export const ChatSkeleton = () => (
  <div className="max-w-md space-y-4">
    {/* Chat messages */}
    <div className="flex space-x-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-1 flex-1">
        <Skeleton className="h-8 w-3/4 rounded-lg" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>

    <div className="flex space-x-2 justify-end">
      <div className="space-y-1 flex-1 flex flex-col items-end">
        <Skeleton className="h-8 w-2/3 rounded-lg" />
        <Skeleton className="h-8 w-1/2 rounded-lg" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>

    <div className="flex space-x-2">
      <Skeleton className="h-8 w-8 rounded-full" />
      <div className="space-y-1 flex-1">
        <Skeleton className="h-8 w-full rounded-lg" />
        <Skeleton className="h-8 w-4/5 rounded-lg" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>

    <div className="flex space-x-2 justify-end">
      <div className="space-y-1 flex-1 flex flex-col items-end">
        <Skeleton className="h-8 w-1/3 rounded-lg" />
        <Skeleton className="h-3 w-16" />
      </div>
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  </div>
);

// Form skeleton
export const FormSkeleton = () => (
  <div className="max-w-lg space-y-6">
    <div className="space-y-2">
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-4 w-48" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full rounded-md" />
      </div>
    </div>

    <div className="space-y-2">
      <Skeleton className="h-4 w-28" />
      <Skeleton className="h-10 w-full rounded-md" />
    </div>

    <div className="space-y-2">
      <Skeleton className="h-4 w-16" />
      <Skeleton className="h-24 w-full rounded-md" />
    </div>

    <div className="flex items-center space-x-2">
      <Skeleton className="h-4 w-4 rounded" />
      <Skeleton className="h-4 w-32" />
    </div>

    <div className="flex space-x-2 pt-4">
      <Skeleton className="h-9 w-24 rounded-md" />
      <Skeleton className="h-9 w-20 rounded-md" />
    </div>
  </div>
);

// Loading states comparison
export const LoadingComparison = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
    {/* Loading state */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Loading State</h3>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/5" />
          </div>
          <div className="flex justify-between mt-6">
            <Skeleton className="h-8 w-16 rounded-md" />
            <Skeleton className="h-8 w-20 rounded-md" />
          </div>
        </CardContent>
      </Card>
    </div>

    {/* Loaded state */}
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Loaded State</h3>
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <img src="https://github.com/shadcn.png" alt="Avatar" />
            </Avatar>
            <div className="space-y-1">
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">Software Engineer</p>
            </div>
          </div>
          <p className="text-sm mt-4">
            Passionate developer with 5+ years of experience in React,
            TypeScript, and modern web technologies. Love building user-friendly
            interfaces.
          </p>
          <div className="flex justify-between mt-6">
            <Button variant="outline">Follow</Button>
            <Button>Message</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
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
