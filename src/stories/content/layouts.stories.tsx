import { Skeleton } from "@/components/ui/skeleton";
import type { Meta, StoryObj } from "@storybook/react-vite";

// Stats Card Grid Component
export const StatsCardGrid = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-3/4" />
      <Skeleton className="h-8 w-16" />
    </div>
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-2/3" />
      <Skeleton className="h-8 w-20" />
    </div>
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-4 w-18" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-4/5" />
      <Skeleton className="h-8 w-14" />
    </div>
    <div className="border rounded-lg p-4 space-y-3">
      <Skeleton className="h-4 w-22" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-3/5" />
      <Skeleton className="h-8 w-18" />
    </div>
  </div>
);

// Content Block Component
export const ContentBlock = () => (
  <div className="border rounded-lg p-6 space-y-4">
    <Skeleton className="h-6 w-40" />
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton className="size-2 rounded-full" />
        <Skeleton className="h-4 flex-1" />
        <Skeleton className="h-3 w-12" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="size-2 rounded-full" />
        <Skeleton className="h-4 flex-1" />
        <Skeleton className="h-3 w-10" />
      </div>
      <div className="flex items-center gap-3">
        <Skeleton className="size-2 rounded-full" />
        <Skeleton className="h-4 flex-1" />
        <Skeleton className="h-3 w-14" />
      </div>
    </div>
  </div>
);

// Two Column Layout Component
export const TwoColumnLayout = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="border rounded-lg p-6 space-y-4">
      <Skeleton className="h-6 w-32" />
      <div className="space-y-2">
        <Skeleton className="h-20 w-full" />
        <div className="flex gap-2">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-14" />
        </div>
      </div>
    </div>

    <div className="border rounded-lg p-6 space-y-4">
      <Skeleton className="h-6 w-28" />
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-3 w-3/5" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-3 w-2/5" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-8 rounded-full" />
          <div className="flex-1 space-y-1">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-1/3" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Article Layout Component
export const ArticleLayout = () => (
  <div className="border rounded-lg p-8 space-y-6 max-w-4xl">
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-32" />
    </div>

    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>

    <Skeleton className="h-48 w-full rounded-md" />

    <div className="space-y-3">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
);

// Content Grid Layout
export const ContentGrid = () => (
  <div className="space-y-6">
    <StatsCardGrid />
    <ContentBlock />
    <ContentBlock />
    <ContentBlock />
    <ContentBlock />
    <ContentBlock />
    <TwoColumnLayout />
  </div>
);

const meta = {
  title: "Content/Grids",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Reusable content layout components with skeleton placeholders. These building blocks can be used to create various page structures and content arrangements.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const StatsCards: Story = {
  render: () => <StatsCardGrid />,
  parameters: {
    docs: {
      description: {
        story:
          "A responsive grid of stats cards with skeleton placeholders for metrics and KPIs.",
      },
    },
  },
};

export const SingleContentBlock: Story = {
  render: () => <ContentBlock />,
  parameters: {
    docs: {
      description: {
        story:
          "A single content block with title and list items, perfect for activity feeds or notifications.",
      },
    },
  },
};

export const TwoColumns: Story = {
  render: () => <TwoColumnLayout />,
  parameters: {
    docs: {
      description: {
        story:
          "A two-column layout with different content types - chart/actions on left, user list on right.",
      },
    },
  },
};

export const Article: Story = {
  render: () => <ArticleLayout />,
  parameters: {
    docs: {
      description: {
        story:
          "An article layout with title, metadata, content paragraphs, and featured image placeholder.",
      },
    },
  },
};

export const FullContentGrid: Story = {
  render: () => <ContentGrid />,
  parameters: {
    docs: {
      description: {
        story:
          "A complete content grid combining multiple layout components for dashboard-style pages.",
      },
    },
  },
};
