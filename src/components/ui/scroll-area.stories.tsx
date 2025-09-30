import { Avatar, AvatarFallback } from './avatar';
import { Badge } from './badge';
import { Button } from './button';
import { ScrollArea } from './scroll-area';
import { Separator } from './separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
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
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl", "full"],
    },
    scrollbarVariant: {
      control: "select",
      options: ["default", "thin", "thick"],
    },
    thumbVariant: {
      control: "select",
      options: ["default", "primary", "secondary", "muted"],
    },
    type: {
      control: "select",
      options: ["auto", "always", "scroll", "hover"],
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
