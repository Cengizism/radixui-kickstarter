import { Badge } from './badge/badge';
import { Card, CardContent } from './card/card';
import { useState } from 'react';
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./context-menu";
import {
  Copy,
  Scissors,
  ClipboardPaste,
  Edit,
  Trash2,
  Share,
  Download,
  Star,
  Eye,
  EyeOff,
  Folder,
  File,
  Image,
  Music,
  Video,
  FileText,
  Archive,
  RefreshCw,
  Info,
  Settings,
  Lock,
  Unlock,
  Heart,
  Bookmark,
  Flag,
  MoreHorizontal,
  Grid,
  List,
  Columns,
  Zap,
  Clock,
  Calendar,
  Tag,
  Link,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

export default {
  title: "UI/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A contextual menu that appears on right-click with various action options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
    },
  },
};

// Default context menu
export const Default = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </ContextMenuItem>
      <ContextMenuItem>
        <Scissors className="mr-2 h-4 w-4" />
        Cut
      </ContextMenuItem>
      <ContextMenuItem>
        <ClipboardPaste className="mr-2 h-4 w-4" />
        Paste
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

// Size variations
export const SizeVariations = () => (
  <div className="flex gap-8">
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
        Small menu
      </ContextMenuTrigger>
      <ContextMenuContent size="sm">
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>

    <ContextMenu>
      <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
        Default menu
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>

    <ContextMenu>
      <ContextMenuTrigger className="flex h-[100px] w-[200px] items-center justify-center rounded-md border border-dashed text-sm">
        Large menu
      </ContextMenuTrigger>
      <ContextMenuContent size="lg">
        <ContextMenuItem>Copy</ContextMenuItem>
        <ContextMenuItem>Cut</ContextMenuItem>
        <ContextMenuItem>Paste</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </div>
);

// File context menu
export const FileContextMenu = () => {
  const [favorited, setFavorited] = useState(false);
  const [bookmarked, setBookmarked] = useState(true);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        {/* Document file */}
        <ContextMenu>
          <ContextMenuTrigger>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-6">
                <FileText className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-sm font-medium">Document.pdf</span>
                <span className="text-xs text-muted-foreground">2.1 MB</span>
              </CardContent>
            </Card>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Open
            </ContextMenuItem>
            <ContextMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Copy
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              <Scissors className="mr-2 h-4 w-4" />
              Cut
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <Share className="mr-2 h-4 w-4" />
                Share
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </ContextMenuItem>
                <ContextMenuItem>
                  <Link className="mr-2 h-4 w-4" />
                  Copy link
                </ContextMenuItem>
                <ContextMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={favorited}
              onCheckedChange={setFavorited}
            >
              <Star className="mr-2 h-4 w-4" />
              Favorite
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Info className="mr-2 h-4 w-4" />
              Properties
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
              <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        {/* Image file */}
        <ContextMenu>
          <ContextMenuTrigger>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-6">
                <Image className="h-8 w-8 text-green-500 mb-2" />
                <span className="text-sm font-medium">Photo.jpg</span>
                <span className="text-xs text-muted-foreground">4.7 MB</span>
              </CardContent>
            </Card>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </ContextMenuItem>
            <ContextMenuItem>
              <Edit className="mr-2 h-4 w-4" />
              Edit in Photos
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Save to Downloads
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem
              checked={bookmarked}
              onCheckedChange={setBookmarked}
            >
              <Bookmark className="mr-2 h-4 w-4" />
              Bookmark
            </ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>

        {/* Folder */}
        <ContextMenu>
          <ContextMenuTrigger>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-6">
                <Folder className="h-8 w-8 text-blue-500 mb-2" />
                <span className="text-sm font-medium">Projects</span>
                <span className="text-xs text-muted-foreground">24 items</span>
              </CardContent>
            </Card>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Open
            </ContextMenuItem>
            <ContextMenuItem>
              <Archive className="mr-2 h-4 w-4" />
              Compress
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <Scissors className="mr-2 h-4 w-4" />
              Cut
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <Settings className="mr-2 h-4 w-4" />
                Permissions
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>
                  <Lock className="mr-2 h-4 w-4" />
                  Make Private
                </ContextMenuItem>
                <ContextMenuItem>
                  <Unlock className="mr-2 h-4 w-4" />
                  Make Public
                </ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Info className="mr-2 h-4 w-4" />
              Get Info
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Folder
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </div>

      <div className="text-xs text-muted-foreground text-center">
        Right-click on any file or folder above to see its context menu
      </div>
    </div>
  );
};

// Text selection context menu
export const TextSelectionMenu = () => (
  <ContextMenu>
    <ContextMenuTrigger>
      <Card className="p-6 max-w-md">
        <p className="text-sm leading-relaxed select-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="mt-4 text-xs text-muted-foreground">
          Right-click on the text above to access text actions
        </div>
      </Card>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Copy
        <ContextMenuShortcut>⌘C</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <Scissors className="mr-2 h-4 w-4" />
        Cut
        <ContextMenuShortcut>⌘X</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        <ClipboardPaste className="mr-2 h-4 w-4" />
        Paste
        <ContextMenuShortcut>⌘V</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Edit className="mr-2 h-4 w-4" />
        Select All
        <ContextMenuShortcut>⌘A</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <Settings className="mr-2 h-4 w-4" />
          Text Options
        </ContextMenuSubTrigger>
        <ContextMenuSubContent>
          <ContextMenuItem>
            <Zap className="mr-2 h-4 w-4" />
            Make Bold
          </ContextMenuItem>
          <ContextMenuItem>
            <Tag className="mr-2 h-4 w-4" />
            Add Highlight
          </ContextMenuItem>
          <ContextMenuItem>
            <Link className="mr-2 h-4 w-4" />
            Create Link
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <RefreshCw className="mr-2 h-4 w-4" />
        Reload
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

// Media context menu
export const MediaContextMenu = () => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-4">
      {/* Audio file */}
      <ContextMenu>
        <ContextMenuTrigger>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <Music className="h-12 w-12 text-purple-500 mb-3" />
              <span className="text-sm font-medium">Song.mp3</span>
              <span className="text-xs text-muted-foreground">
                3:42 • 5.2 MB
              </span>
              <Badge variant="outline" className="mt-2">
                Audio
              </Badge>
            </CardContent>
          </Card>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <Zap className="mr-2 h-4 w-4" />
            Play
          </ContextMenuItem>
          <ContextMenuItem>
            <Download className="mr-2 h-4 w-4" />
            Download
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Heart className="mr-2 h-4 w-4" />
            Add to Favorites
          </ContextMenuItem>
          <ContextMenuItem>
            <Flag className="mr-2 h-4 w-4" />
            Add to Playlist
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Share className="mr-2 h-4 w-4" />
            Share
          </ContextMenuItem>
          <ContextMenuItem>
            <Info className="mr-2 h-4 w-4" />
            Song Info
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      {/* Video file */}
      <ContextMenu>
        <ContextMenuTrigger>
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="flex flex-col items-center p-6">
              <Video className="h-12 w-12 text-red-500 mb-3" />
              <span className="text-sm font-medium">Movie.mp4</span>
              <span className="text-xs text-muted-foreground">
                1080p • 2.1 GB
              </span>
              <Badge variant="outline" className="mt-2">
                Video
              </Badge>
            </CardContent>
          </Card>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <Zap className="mr-2 h-4 w-4" />
            Play
          </ContextMenuItem>
          <ContextMenuItem>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Download className="mr-2 h-4 w-4" />
            Download
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy className="mr-2 h-4 w-4" />
            Copy Link
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuSub>
            <ContextMenuSubTrigger>
              <Settings className="mr-2 h-4 w-4" />
              Quality
            </ContextMenuSubTrigger>
            <ContextMenuSubContent>
              <ContextMenuItem>720p</ContextMenuItem>
              <ContextMenuItem>1080p</ContextMenuItem>
              <ContextMenuItem>4K</ContextMenuItem>
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>
            <Info className="mr-2 h-4 w-4" />
            Video Info
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  </div>
);

// Table context menu
export const TableContextMenu = () => {
  const [showHidden, setShowHidden] = useState(false);
  const [viewMode, setViewMode] = useState("list");

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Card className="w-full max-w-2xl">
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Project Files</h3>
              <p className="text-sm text-muted-foreground">
                Right-click for options
              </p>
            </div>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between py-2 px-2 hover:bg-muted rounded">
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4" />
                  <span className="text-sm">index.js</span>
                </div>
                <span className="text-xs text-muted-foreground">2 KB</span>
              </div>
              <div className="flex items-center justify-between py-2 px-2 hover:bg-muted rounded">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4" />
                  <span className="text-sm">components</span>
                </div>
                <span className="text-xs text-muted-foreground">12 items</span>
              </div>
              <div className="flex items-center justify-between py-2 px-2 hover:bg-muted rounded">
                <div className="flex items-center gap-2">
                  <File className="h-4 w-4" />
                  <span className="text-sm">package.json</span>
                </div>
                <span className="text-xs text-muted-foreground">1 KB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLabel>View Options</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
          <ContextMenuRadioItem value="list">
            <List className="mr-2 h-4 w-4" />
            List View
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="grid">
            <Grid className="mr-2 h-4 w-4" />
            Grid View
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="columns">
            <Columns className="mr-2 h-4 w-4" />
            Columns
          </ContextMenuRadioItem>
        </ContextMenuRadioGroup>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showHidden}
          onCheckedChange={setShowHidden}
        >
          <EyeOff className="mr-2 h-4 w-4" />
          Show Hidden Files
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
          <ContextMenuShortcut>F5</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Preferences
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

// Complex nested menu
export const ComplexNestedMenu = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [starred, setStarred] = useState(true);
  const [priority, setPriority] = useState("medium");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[200px] w-[400px] items-center justify-center rounded-md border border-dashed bg-muted/20">
        <div className="text-center">
          <MoreHorizontal className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm font-medium">Complex Menu Demo</p>
          <p className="text-xs text-muted-foreground">
            Right-click for full menu
          </p>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>Quick Actions</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuItem>
          <Copy className="mr-2 h-4 w-4" />
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Scissors className="mr-2 h-4 w-4" />
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <ClipboardPaste className="mr-2 h-4 w-4" />
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Share className="mr-2 h-4 w-4" />
            Share
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </ContextMenuItem>
            <ContextMenuItem>
              <Link className="mr-2 h-4 w-4" />
              Copy Link
            </ContextMenuItem>
            <ContextMenuItem>
              <Phone className="mr-2 h-4 w-4" />
              SMS
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>
                <MoreHorizontal className="mr-2 h-4 w-4" />
                More Options
              </ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Social Media</ContextMenuItem>
                <ContextMenuItem>Export PDF</ContextMenuItem>
                <ContextMenuItem>Print</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSub>
          <ContextMenuSubTrigger>
            <Tag className="mr-2 h-4 w-4" />
            Priority
          </ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuRadioGroup value={priority} onValueChange={setPriority}>
              <ContextMenuRadioItem value="low">
                Low Priority
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="medium">
                Medium Priority
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="high">
                High Priority
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="urgent">Urgent</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuSubContent>
        </ContextMenuSub>

        <ContextMenuSeparator />

        <ContextMenuLabel inset>Favorites</ContextMenuLabel>
        <ContextMenuCheckboxItem
          checked={bookmarked}
          onCheckedChange={setBookmarked}
        >
          <Bookmark className="mr-2 h-4 w-4" />
          Bookmark
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem checked={starred} onCheckedChange={setStarred}>
          <Star className="mr-2 h-4 w-4" />
          Add to Starred
        </ContextMenuCheckboxItem>

        <ContextMenuSeparator />

        <ContextMenuItem>
          <Calendar className="mr-2 h-4 w-4" />
          Schedule
          <ContextMenuShortcut>⌘S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          <Clock className="mr-2 h-4 w-4" />
          Set Reminder
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem>
          <Archive className="mr-2 h-4 w-4" />
          Archive
        </ContextMenuItem>
        <ContextMenuItem variant="destructive">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

// Gallery context menu
export const GalleryContextMenu = () => (
  <div className="grid grid-cols-3 gap-4 max-w-2xl">
    {Array.from({ length: 6 }, (_, i) => {
      const icons = [Image, Video, Music, FileText, Archive, File];
      const colors = [
        "text-green-500",
        "text-red-500",
        "text-purple-500",
        "text-blue-500",
        "text-orange-500",
        "text-gray-500",
      ];
      const names = [
        "photo.jpg",
        "video.mp4",
        "song.mp3",
        "document.pdf",
        "archive.zip",
        "data.json",
      ];

      const Icon = icons[i];

      return (
        <ContextMenu key={i}>
          <ContextMenuTrigger>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center p-4">
                <Icon className={`h-8 w-8 ${colors[i]} mb-2`} />
                <span className="text-xs font-medium truncate w-full text-center">
                  {names[i]}
                </span>
              </CardContent>
            </Card>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>
              <Eye className="mr-2 h-4 w-4" />
              Open
            </ContextMenuItem>
            <ContextMenuItem>
              <Download className="mr-2 h-4 w-4" />
              Download
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </ContextMenuItem>
            <ContextMenuItem>
              <Share className="mr-2 h-4 w-4" />
              Share
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>
              <Info className="mr-2 h-4 w-4" />
              Properties
            </ContextMenuItem>
            <ContextMenuItem variant="destructive">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      );
    })}
    <div className="col-span-3 text-xs text-muted-foreground text-center mt-2">
      Right-click on any item above for context menu
    </div>
  </div>
);

// Interactive playground
export const Playground = (args: { size?: "sm" | "default" | "lg" }) => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
      Playground Context Menu
      <br />
      <span className="text-xs text-muted-foreground">Right click to test</span>
    </ContextMenuTrigger>
    <ContextMenuContent size={args.size}>
      <ContextMenuItem>
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </ContextMenuItem>
      <ContextMenuItem>
        <Edit className="mr-2 h-4 w-4" />
        Edit
      </ContextMenuItem>
      <ContextMenuItem>
        <Share className="mr-2 h-4 w-4" />
        Share
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

Playground.args = {
  size: "default",
};
