import React from 'react';
import { Avatar, AvatarFallback } from '../avatar/avatar';
import { Badge } from '../badge/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '../separator/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card/card";
import {
  FileText,
  Image,
  Music,
  Video,
  Download,
  Star,
  MessageSquare,
  Calendar,
  Clock,
  User,
  Settings,
} from "lucide-react";

export default {
  title: "UI/ScrollArea",
  component: ScrollArea,
  docs: {
    description: {
      component:
        "A scroll area component that provides custom scrollbars for overflowing content. Built with Radix UI primitives for cross-browser consistency.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Root Props
    type: {
      control: "select",
      options: ["auto", "always", "scroll", "hover"],
      description:
        "Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.",
      table: {
        category: "Root Props",
        type: { summary: '"auto" | "always" | "scroll" | "hover"' },
        defaultValue: { summary: '"hover"' },
      },
    },
    scrollHideDelay: {
      control: "number",
      description:
        "If type is set to either 'scroll' or 'hover', this prop determines the length of time, in milliseconds, before the scrollbars are hidden after the user stops interacting with scrollbars.",
      table: {
        category: "Root Props",
        type: { summary: "number" },
        defaultValue: { summary: "600" },
      },
    },
    dir: {
      control: "select",
      options: ["ltr", "rtl"],
      description:
        "The reading direction of the scroll area. If omitted, inherits globally from DirectionProvider or assumes LTR (left-to-right) reading mode.",
      table: {
        category: "Root Props",
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: '"ltr"' },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Root Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Viewport Props
    viewportAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the viewport to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Viewport Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    nonce: {
      control: "text",
      description:
        "A nonce attribute to whitelist the scrollbar style injection in a CSP (Content Security Policy) environment.",
      table: {
        category: "Viewport Props",
        type: { summary: "string" },
      },
    },

    // Scrollbar Props
    scrollbarForceMount: {
      control: "boolean",
      description:
        "Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.",
      table: {
        category: "Scrollbar Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    scrollbarOrientation: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "The orientation of the scrollbar",
      table: {
        category: "Scrollbar Props",
        type: { summary: '"vertical" | "horizontal"' },
        defaultValue: { summary: '"vertical"' },
      },
    },
    scrollbarAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the scrollbar to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Scrollbar Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Thumb Props
    thumbAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the thumb to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Thumb Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Corner Props
    cornerAsChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the corner to the one passed as a child, merging their props and behavior.",
      table: {
        category: "Corner Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },

    // Custom Style Props
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "full"],
      description: "The size variant of the scroll area",
      table: {
        category: "Custom Style Props",
        type: { summary: '"sm" | "default" | "lg" | "xl" | "full"' },
        defaultValue: { summary: '"default"' },
      },
    },
    scrollbarVariant: {
      control: "select",
      options: ["default", "thin", "thick"],
      description: "The visual style variant of the scrollbar",
      table: {
        category: "Custom Style Props",
        type: { summary: '"default" | "thin" | "thick"' },
        defaultValue: { summary: '"default"' },
      },
    },
    thumbVariant: {
      control: "select",
      options: ["default", "primary", "secondary", "muted"],
      description: "The visual style variant of the scroll thumb",
      table: {
        category: "Custom Style Props",
        type: { summary: '"default" | "primary" | "secondary" | "muted"' },
        defaultValue: { summary: '"default"' },
      },
    },
  },
};

// Basic scroll area
export const Basic = () => {
  const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);

  return (
    <div className="w-48">
      <h3 className="mb-4 text-sm font-medium">Tags</h3>
      <ScrollArea className="h-72 w-full rounded border">
        <div className="p-4">
          {tags.map((tag, index) => (
            <div key={index}>
              {tag}
              {index < tags.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

// Size variations
export const SizeVariations = () => {
  const content = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Small (h-32)</h3>
        <ScrollArea size="sm" className="w-64 rounded border">
          <div className="p-4 space-y-2">
            {content.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Default (h-64)</h3>
        <ScrollArea size="default" className="w-64 rounded border">
          <div className="p-4 space-y-2">
            {content.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Large (h-96)</h3>
        <ScrollArea size="lg" className="w-64 rounded border">
          <div className="p-4 space-y-2">
            {content.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

// Scrollbar variants
export const ScrollbarVariants = () => {
  const items = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="flex gap-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Default Scrollbar</h3>
        <ScrollArea
          className="h-64 w-48 rounded border"
          scrollbarVariant="default"
        >
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Thin Scrollbar</h3>
        <ScrollArea
          className="h-64 w-48 rounded border"
          scrollbarVariant="thin"
        >
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Thick Scrollbar</h3>
        <ScrollArea
          className="h-64 w-48 rounded border"
          scrollbarVariant="thick"
        >
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

// Thumb variants
export const ThumbVariants = () => {
  const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="flex gap-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Default Thumb</h3>
        <ScrollArea className="h-64 w-48 rounded border" thumbVariant="default">
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Primary Thumb</h3>
        <ScrollArea className="h-64 w-48 rounded border" thumbVariant="primary">
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Secondary Thumb</h3>
        <ScrollArea
          className="h-64 w-48 rounded border"
          thumbVariant="secondary"
        >
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Muted Thumb</h3>
        <ScrollArea className="h-64 w-48 rounded border" thumbVariant="muted">
          <div className="p-4 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="text-sm">
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

// Horizontal scroll
export const HorizontalScroll = () => {
  const items = Array.from({ length: 20 }, (_, i) => `Long Item Name ${i + 1}`);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-2 text-sm font-medium">Horizontal Scrolling</h3>
        <ScrollArea className="w-96 whitespace-nowrap rounded border">
          <div className="flex w-max space-x-4 p-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="shrink-0 rounded-md border-2 border-slate-100 bg-white px-4 py-2 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium">Both Directions</h3>
        <ScrollArea className="h-64 w-96 rounded border">
          <div className="p-4">
            <div className="w-max">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="flex space-x-4 mb-2">
                  {Array.from({ length: 10 }, (_, j) => (
                    <div
                      key={j}
                      className="shrink-0 w-24 h-12 rounded bg-muted flex items-center justify-center text-sm"
                    >
                      {i}-{j}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

// File browser example
export const FileBrowser = () => {
  const files = [
    { name: "Documents", type: "folder", size: "—", date: "2 days ago" },
    { name: "Images", type: "folder", size: "—", date: "1 week ago" },
    {
      name: "project-proposal.pdf",
      type: "file",
      size: "2.4 MB",
      date: "3 hours ago",
      icon: FileText,
    },
    {
      name: "vacation-photo.jpg",
      type: "file",
      size: "1.8 MB",
      date: "5 hours ago",
      icon: Image,
    },
    {
      name: "presentation.pptx",
      type: "file",
      size: "5.2 MB",
      date: "1 day ago",
      icon: FileText,
    },
    {
      name: "music-collection",
      type: "folder",
      size: "—",
      date: "2 weeks ago",
    },
    {
      name: "song.mp3",
      type: "file",
      size: "4.1 MB",
      date: "3 days ago",
      icon: Music,
    },
    {
      name: "video-tutorial.mp4",
      type: "file",
      size: "125 MB",
      date: "4 days ago",
      icon: Video,
    },
    {
      name: "backup.zip",
      type: "file",
      size: "856 MB",
      date: "1 week ago",
      icon: FileText,
    },
    {
      name: "screenshot-1.png",
      type: "file",
      size: "890 KB",
      date: "2 hours ago",
      icon: Image,
    },
    {
      name: "screenshot-2.png",
      type: "file",
      size: "1.2 MB",
      date: "2 hours ago",
      icon: Image,
    },
    {
      name: "notes.txt",
      type: "file",
      size: "12 KB",
      date: "30 minutes ago",
      icon: FileText,
    },
    { name: "Downloads", type: "folder", size: "—", date: "5 days ago" },
    {
      name: "archive-2023.tar.gz",
      type: "file",
      size: "2.1 GB",
      date: "3 weeks ago",
      icon: FileText,
    },
    {
      name: "profile-picture.jpg",
      type: "file",
      size: "456 KB",
      date: "6 hours ago",
      icon: Image,
    },
  ];

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          File Browser
        </CardTitle>
        <CardDescription>Browse your files and folders</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-1">
            {files.map((file, index) => {
              const IconComponent = file.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted cursor-pointer"
                >
                  <div className="flex items-center justify-center w-8 h-8">
                    {file.type === "folder" ? (
                      <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                        📁
                      </div>
                    ) : (
                      IconComponent && (
                        <IconComponent className="h-5 w-5 text-muted-foreground" />
                      )
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{file.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {file.date}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground min-w-0">
                    {file.size}
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

// Chat messages example
export const ChatMessages = () => {
  const messages = [
    {
      id: 1,
      user: "Alice",
      message: "Hey everyone! 👋",
      time: "10:30 AM",
      avatar: "A",
    },
    {
      id: 2,
      user: "Bob",
      message: "Good morning! How is everyone doing?",
      time: "10:32 AM",
      avatar: "B",
    },
    {
      id: 3,
      user: "Charlie",
      message:
        "Great! Just finished the project presentation. Ready for the demo?",
      time: "10:35 AM",
      avatar: "C",
    },
    {
      id: 4,
      user: "Alice",
      message: "That sounds awesome! Can't wait to see it.",
      time: "10:36 AM",
      avatar: "A",
    },
    {
      id: 5,
      user: "Diana",
      message: "I'll join in 5 minutes, just wrapping up another call.",
      time: "10:38 AM",
      avatar: "D",
    },
    {
      id: 6,
      user: "Bob",
      message: "No worries! We can wait.",
      time: "10:39 AM",
      avatar: "B",
    },
    {
      id: 7,
      user: "Charlie",
      message: "Perfect. I'll share my screen once everyone is here.",
      time: "10:40 AM",
      avatar: "C",
    },
    {
      id: 8,
      user: "Eve",
      message: "Sorry I'm late! Traffic was crazy this morning.",
      time: "10:42 AM",
      avatar: "E",
    },
    {
      id: 9,
      user: "Alice",
      message: "No problem! We're just getting started.",
      time: "10:43 AM",
      avatar: "A",
    },
    {
      id: 10,
      user: "Diana",
      message: "Alright, I'm here now! 🎉",
      time: "10:45 AM",
      avatar: "D",
    },
    {
      id: 11,
      user: "Charlie",
      message:
        "Great! Let me share the latest version of our app. The new features look amazing!",
      time: "10:46 AM",
      avatar: "C",
    },
    {
      id: 12,
      user: "Bob",
      message: "The UI improvements are really nice. Great work team!",
      time: "10:48 AM",
      avatar: "B",
    },
    {
      id: 13,
      user: "Eve",
      message: "I love the new color scheme. Much more accessible.",
      time: "10:49 AM",
      avatar: "E",
    },
    {
      id: 14,
      user: "Alice",
      message:
        "The performance improvements are noticeable too. Loading times are much faster.",
      time: "10:51 AM",
      avatar: "A",
    },
  ];

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Team Chat
        </CardTitle>
        <CardDescription className="flex items-center gap-2">
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>5 members
          online
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-4 pr-2">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {message.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{message.user}</span>
                    <span className="text-xs text-muted-foreground">
                      {message.time}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {message.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

// Activity timeline
export const ActivityTimeline = () => {
  const activities = [
    {
      id: 1,
      action: "Created new project",
      user: "John Doe",
      time: "2 minutes ago",
      icon: Settings,
    },
    {
      id: 2,
      action: "Updated user profile",
      user: "Jane Smith",
      time: "5 minutes ago",
      icon: User,
    },
    {
      id: 3,
      action: "Scheduled meeting",
      user: "Bob Wilson",
      time: "10 minutes ago",
      icon: Calendar,
    },
    {
      id: 4,
      action: "Starred repository",
      user: "Alice Brown",
      time: "15 minutes ago",
      icon: Star,
    },
    {
      id: 5,
      action: "Added new comment",
      user: "Charlie Davis",
      time: "20 minutes ago",
      icon: MessageSquare,
    },
    {
      id: 6,
      action: "Updated system settings",
      user: "David Lee",
      time: "25 minutes ago",
      icon: Settings,
    },
    {
      id: 7,
      action: "Created new event",
      user: "Emma Wilson",
      time: "30 minutes ago",
      icon: Calendar,
    },
    {
      id: 8,
      action: "Modified user permissions",
      user: "Frank Miller",
      time: "35 minutes ago",
      icon: User,
    },
    {
      id: 9,
      action: "Starred multiple items",
      user: "Grace Johnson",
      time: "40 minutes ago",
      icon: Star,
    },
    {
      id: 10,
      action: "Added project milestone",
      user: "Henry Brown",
      time: "45 minutes ago",
      icon: Clock,
    },
    {
      id: 11,
      action: "Updated documentation",
      user: "Ivy Chen",
      time: "50 minutes ago",
      icon: FileText,
    },
    {
      id: 12,
      action: "Scheduled review meeting",
      user: "Jack Taylor",
      time: "1 hour ago",
      icon: Calendar,
    },
  ];

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
        <CardDescription>Latest actions from your team</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-80">
          <div className="space-y-3">
            {activities.map((activity) => {
              const IconComponent = activity.icon;
              return (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {activity.time}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

// Always visible scrollbars
export const AlwaysVisible = () => {
  const items = Array.from(
    { length: 30 },
    (_, i) => `Always visible scrollbar item ${i + 1}`
  );

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Always Visible Scrollbars</h3>
      <ScrollArea
        className="h-64 w-80 rounded border"
        type="always"
        thumbVariant="primary"
      >
        <div className="p-4 space-y-2">
          {items.map((item, index) => (
            <div key={index} className="text-sm p-2 bg-muted/50 rounded">
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
      <p className="text-xs text-muted-foreground">
        Scrollbars are always visible regardless of hover state
      </p>
    </div>
  );
};

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "xl" | "full";
  scrollbarVariant?: "default" | "thin" | "thick";
  thumbVariant?: "default" | "primary" | "secondary" | "muted";
  type?: "auto" | "always" | "scroll" | "hover";
}) => {
  const items = Array.from(
    { length: 50 },
    (_, i) => `Playground item ${i + 1}`
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Size: {args.size || "default"}</Badge>
        <Badge variant="secondary">
          Scrollbar: {args.scrollbarVariant || "default"}
        </Badge>
        <Badge variant="secondary">
          Thumb: {args.thumbVariant || "default"}
        </Badge>
        <Badge variant="secondary">Type: {args.type || "hover"}</Badge>
      </div>

      <ScrollArea
        size={args.size}
        scrollbarVariant={args.scrollbarVariant}
        thumbVariant={args.thumbVariant}
        type={args.type}
        className="w-80 rounded border"
      >
        <div className="p-4 space-y-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-sm p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

Playground.args = {
  size: "default",
  scrollbarVariant: "default",
  thumbVariant: "default",
  type: "hover",
};

// Advanced Examples
export const AdvancedScrollBehavior = {
  render: () => {
    const [scrollType, setScrollType] = React.useState<
      "auto" | "always" | "scroll" | "hover"
    >("hover");
    const [hideDelay, setHideDelay] = React.useState(600);
    const [isRTL, setIsRTL] = React.useState(false);
    const [scrollPosition, setScrollPosition] = React.useState({ x: 0, y: 0 });

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;
      setScrollPosition({
        x: target.scrollLeft,
        y: target.scrollTop,
      });
    };

    const longContent = Array.from(
      { length: 50 },
      (_, i) =>
        `This is item ${i + 1} with some longer content to demonstrate scrolling behavior. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    );

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Advanced Scroll Configuration
          </h3>

          <div className="flex flex-wrap gap-4 mb-4 p-4 bg-muted rounded-lg">
            <div className="space-y-2">
              <label className="text-sm font-medium">Scroll Type:</label>
              <div className="flex gap-2">
                {(["auto", "always", "scroll", "hover"] as const).map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => setScrollType(type)}
                      className={`px-3 py-1 rounded text-xs font-medium ${
                        scrollType === type
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border hover:bg-accent"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Hide Delay (ms):</label>
              <input
                type="range"
                min="0"
                max="2000"
                step="100"
                value={hideDelay}
                onChange={(e) => setHideDelay(Number(e.target.value))}
                className="w-32"
              />
              <div className="text-xs text-muted-foreground">{hideDelay}ms</div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="rtl-toggle"
                checked={isRTL}
                onChange={(e) => setIsRTL(e.target.checked)}
              />
              <label htmlFor="rtl-toggle" className="text-sm font-medium">
                RTL Direction
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">Vertical Scroll Area</h4>
            <div className="relative">
              <ScrollArea
                className="h-64 w-full rounded border"
                type={scrollType}
                scrollHideDelay={hideDelay}
                dir={isRTL ? "rtl" : "ltr"}
                onScroll={handleScroll}
              >
                <div className="p-4 space-y-2" dir={isRTL ? "rtl" : "ltr"}>
                  {longContent.map((content, index) => (
                    <div
                      key={index}
                      className="text-sm p-3 bg-muted/30 rounded"
                    >
                      <div className="font-medium mb-1">Item #{index + 1}</div>
                      <div className="text-muted-foreground">{content}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="mt-2 text-xs text-muted-foreground">
                Scroll Y: {scrollPosition.y}px
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-2">Horizontal + Vertical Scroll</h4>
            <div className="relative">
              <ScrollArea
                className="h-64 w-full rounded border"
                type={scrollType}
                scrollHideDelay={hideDelay}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <div className="p-4 w-[800px]" dir={isRTL ? "rtl" : "ltr"}>
                  <div className="grid grid-cols-4 gap-4">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        key={i}
                        className="min-w-[150px] p-3 bg-muted/30 rounded"
                      >
                        <div className="font-medium">Card {i + 1}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Wide content that extends beyond the viewport width
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>

              <div className="mt-2 text-xs text-muted-foreground">
                Scroll: X={scrollPosition.x}px, Y={scrollPosition.y}px
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 bg-blue-50 rounded-lg text-sm">
          <strong>Configuration Notes:</strong>
          <ul className="mt-1 space-y-1 text-blue-700">
            <li>
              • <strong>auto:</strong> Scrollbars appear automatically when
              content overflows
            </li>
            <li>
              • <strong>always:</strong> Scrollbars are always visible
            </li>
            <li>
              • <strong>scroll:</strong> Scrollbars appear when scrolling
            </li>
            <li>
              • <strong>hover:</strong> Scrollbars appear on hover (default)
            </li>
            <li>• Hide delay only applies to 'scroll' and 'hover' types</li>
          </ul>
        </div>
      </div>
    );
  },
};

export const DynamicContentScrolling = {
  render: () => {
    const [items, setItems] = React.useState(
      Array.from({ length: 10 }, (_, i) => `Initial item ${i + 1}`)
    );
    const [isLoading, setIsLoading] = React.useState(false);
    const [autoScroll, setAutoScroll] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const addItems = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newItems = Array.from(
        { length: 5 },
        (_, i) =>
          `New item ${items.length + i + 1} - Added ${new Date().toLocaleTimeString()}`
      );
      setItems((prev) => [...prev, ...newItems]);
      setIsLoading(false);

      if (autoScroll && scrollRef.current) {
        setTimeout(() => {
          scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    const removeItems = () => {
      setItems((prev) => prev.slice(0, Math.max(0, prev.length - 3)));
    };

    const scrollToTop = () => {
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToBottom = () => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current?.scrollHeight,
        behavior: "smooth",
      });
    };

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Dynamic Content Management
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <Button onClick={addItems} disabled={isLoading} size="sm">
              {isLoading ? "Adding..." : "Add Items"}
            </Button>
            <Button
              onClick={removeItems}
              variant="outline"
              size="sm"
              disabled={items.length === 0}
            >
              Remove Items
            </Button>
            <Button onClick={scrollToTop} variant="outline" size="sm">
              Scroll to Top
            </Button>
            <Button onClick={scrollToBottom} variant="outline" size="sm">
              Scroll to Bottom
            </Button>

            <div className="flex items-center ml-4">
              <input
                type="checkbox"
                id="auto-scroll"
                checked={autoScroll}
                onChange={(e) => setAutoScroll(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="auto-scroll" className="text-sm">
                Auto-scroll to new items
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">
                Dynamic List ({items.length} items)
              </h4>
              <Badge variant="secondary">{items.length} items</Badge>
            </div>

            <ScrollArea
              className="h-80 w-full rounded border"
              type="always"
              thumbVariant="primary"
            >
              <div className="p-4 space-y-2" ref={scrollRef}>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/30 rounded hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <div className="text-sm font-medium">{item}</div>
                      <div className="text-xs text-muted-foreground">
                        Index: {index} • Added to list
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setItems((prev) => prev.filter((_, i) => i !== index))
                      }
                    >
                      ✕
                    </Button>
                  </div>
                ))}

                {isLoading && (
                  <div className="flex items-center justify-center p-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      Loading new items...
                    </span>
                  </div>
                )}

                {items.length === 0 && (
                  <div className="flex items-center justify-center h-32 text-muted-foreground">
                    No items to display. Click "Add Items" to get started.
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          <div className="w-80">
            <h4 className="font-medium mb-2">Scroll Position Info</h4>
            <div className="p-4 bg-muted rounded-lg text-sm space-y-2">
              <div>Total Items: {items.length}</div>
              <div>Auto-scroll: {autoScroll ? "Enabled" : "Disabled"}</div>
              <div>Loading: {isLoading ? "Yes" : "No"}</div>

              <Separator className="my-2" />

              <div className="text-xs text-muted-foreground">
                <div>• Items are added dynamically with timestamps</div>
                <div>• Each item can be individually removed</div>
                <div>• Auto-scroll follows new content</div>
                <div>• Smooth scrolling for better UX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const MultiPanelScrollInterface = {
  render: () => {
    const [activePanel, setActivePanel] = React.useState("files");
    const [selectedFile, setSelectedFile] = React.useState<string | null>(null);

    const fileStructure = {
      src: [
        "components/Button.tsx",
        "components/Input.tsx",
        "components/Modal.tsx",
        "components/ScrollArea.tsx",
        "hooks/useLocalStorage.ts",
        "hooks/useDebounce.ts",
        "utils/formatDate.ts",
        "utils/api.ts",
        "utils/constants.ts",
      ],
      public: [
        "index.html",
        "favicon.ico",
        "logo192.png",
        "logo512.png",
        "manifest.json",
        "robots.txt",
      ],
      docs: [
        "README.md",
        "CONTRIBUTING.md",
        "CHANGELOG.md",
        "API.md",
        "DEPLOYMENT.md",
      ],
    };

    const codePreview = selectedFile
      ? `// ${selectedFile}


interface ComponentProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
}

export const Component: React.FC<ComponentProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && 'pointer-events-none opacity-50',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Component;

// Additional utility functions
export const createComponent = (props: Partial<ComponentProps>) => {
  return <Component {...props} />;
};

export const componentVariants = Object.keys(variants) as Array<keyof typeof variants>;
export const componentSizes = Object.keys(sizes) as Array<keyof typeof sizes>;

// Hook for component state management
export const useComponentState = (initialValue: boolean = false) => {
  const [isActive, setIsActive] = React.useState(initialValue);
  const [isHovered, setIsHovered] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const reset = React.useCallback(() => {
    setIsActive(initialValue);
    setIsHovered(false);
  }, [initialValue]);

  return {
    isActive,
    isHovered,
    setIsActive,
    setIsHovered,
    toggle,
    reset,
  };
};
`
      : "Select a file to preview its content...";

    const breadcrumbs = [
      { label: "Project", active: false },
      { label: "src", active: false },
      { label: "components", active: selectedFile?.includes("components") },
      ...(selectedFile
        ? [{ label: selectedFile.split("/").pop() || "", active: true }]
        : []),
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Multi-Panel Scroll Interface</h3>

        <div className="flex h-96 border rounded-lg overflow-hidden">
          {/* Sidebar Navigation */}
          <div className="w-64 border-r bg-muted/30">
            <div className="p-3 border-b bg-muted/50">
              <h4 className="font-medium text-sm">Project Explorer</h4>
            </div>

            <div className="flex border-b">
              {(["files", "outline", "search"] as const).map((panel) => (
                <button
                  key={panel}
                  onClick={() => setActivePanel(panel)}
                  className={`flex-1 px-3 py-2 text-xs font-medium capitalize ${
                    activePanel === panel
                      ? "bg-background border-b-2 border-primary"
                      : "hover:bg-muted/50"
                  }`}
                >
                  {panel}
                </button>
              ))}
            </div>

            <ScrollArea className="flex-1" type="hover" scrollbarVariant="thin">
              <div className="p-2">
                {activePanel === "files" && (
                  <div className="space-y-1">
                    {Object.entries(fileStructure).map(([folder, files]) => (
                      <div key={folder}>
                        <div className="font-medium text-sm px-2 py-1 text-muted-foreground">
                          📁 {folder}/
                        </div>
                        <div className="ml-4 space-y-1">
                          {files.map((file) => (
                            <button
                              key={file}
                              onClick={() =>
                                setSelectedFile(`${folder}/${file}`)
                              }
                              className={`w-full text-left px-2 py-1 text-sm rounded hover:bg-muted transition-colors ${
                                selectedFile === `${folder}/${file}`
                                  ? "bg-primary/10 text-primary"
                                  : ""
                              }`}
                            >
                              📄 {file}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activePanel === "outline" && (
                  <div className="space-y-1 text-sm">
                    <div className="font-medium px-2 py-1">Outline</div>
                    <div className="ml-2 space-y-1">
                      <div className="px-2 py-1 hover:bg-muted rounded cursor-pointer">
                        📋 Imports
                      </div>
                      <div className="px-2 py-1 hover:bg-muted rounded cursor-pointer">
                        🏗️ Interface
                      </div>
                      <div className="px-2 py-1 hover:bg-muted rounded cursor-pointer">
                        ⚛️ Component
                      </div>
                      <div className="px-2 py-1 hover:bg-muted rounded cursor-pointer">
                        🔧 Utils
                      </div>
                      <div className="px-2 py-1 hover:bg-muted rounded cursor-pointer">
                        🪝 Hooks
                      </div>
                    </div>
                  </div>
                )}

                {activePanel === "search" && (
                  <div className="space-y-2">
                    <input
                      placeholder="Search files..."
                      className="w-full px-2 py-1 text-sm border rounded"
                    />
                    <div className="text-sm text-muted-foreground px-2">
                      Search results will appear here...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {/* Breadcrumb */}
            <div className="flex items-center px-4 py-2 border-b bg-muted/20 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <span
                    className={
                      crumb.active ? "font-medium" : "text-muted-foreground"
                    }
                  >
                    {crumb.label}
                  </span>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-muted-foreground">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Code Editor */}
            <ScrollArea
              className="flex-1"
              type="always"
              thumbVariant="secondary"
            >
              <div className="p-4 font-mono text-sm">
                <pre className="whitespace-pre-wrap text-muted-foreground">
                  {codePreview}
                </pre>
              </div>
            </ScrollArea>

            {/* Status Bar */}
            <div className="flex items-center justify-between px-4 py-2 border-t bg-muted/20 text-xs">
              <div className="flex items-center space-x-4">
                <span>Line 1, Col 1</span>
                <span>TypeScript React</span>
                {selectedFile && <span>UTF-8</span>}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600">● No errors</span>
                <span>{selectedFile ? "Modified" : "No file selected"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          <strong>Features demonstrated:</strong>
          <ul className="mt-1 space-y-1">
            <li>• Independent scroll areas in sidebar and main content</li>
            <li>
              • Different scrollbar variants (thin in sidebar, secondary in
              editor)
            </li>
            <li>• Always-visible scrollbars for better navigation feedback</li>
            <li>• Panel switching with maintained scroll positions</li>
            <li>• Responsive layout with proper overflow handling</li>
          </ul>
        </div>
      </div>
    );
  },
};
