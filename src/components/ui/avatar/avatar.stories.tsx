import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An image element with a fallback for representing the user.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description: "The size variant of the avatar container.",
      table: {
        type: { summary: "enum" },
        defaultValue: { summary: "default" },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the avatar container.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    src: {
      control: "text",
      description:
        "The source URL of the image. When provided, renders AvatarImage component.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    alt: {
      control: "text",
      description: "Alternative text for the image for accessibility.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    fallback: {
      control: "text",
      description:
        "The content to display when image fails to load or is not provided.",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    delayMs: {
      control: "number",
      description:
        "Useful for delaying rendering so it only appears for those with slower connections. In milliseconds.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },
    onLoadingStatusChange: {
      action: "onLoadingStatusChange",
      description:
        "A callback providing information about the loading status of the image.",
      table: {
        type: {
          summary: "(status: 'idle' | 'loading' | 'loaded' | 'error') => void",
        },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

// Default avatar with image
export const Default = () => (
  <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

// Avatar with fallback (no image)
export const WithFallback = () => (
  <Avatar>
    <AvatarImage src="" alt="@johndoe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
);

// Size variations
export const SizeVariations = () => (
  <div className="flex items-center space-x-4">
    <Avatar size="sm">
      <AvatarImage src="https://github.com/shadcn.png" alt="Small" />
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>

    <Avatar size="default">
      <AvatarImage src="https://github.com/shadcn.png" alt="Default" />
      <AvatarFallback>DF</AvatarFallback>
    </Avatar>

    <Avatar size="lg">
      <AvatarImage src="https://github.com/shadcn.png" alt="Large" />
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>

    <Avatar size="xl">
      <AvatarImage src="https://github.com/shadcn.png" alt="Extra Large" />
      <AvatarFallback>XL</AvatarFallback>
    </Avatar>
  </div>
);

// Different fallback styles
export const FallbackVariations = () => (
  <div className="flex items-center space-x-4">
    <Avatar>
      <AvatarImage src="" alt="@johndoe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarImage src="" alt="@janedoe" />
      <AvatarFallback className="bg-blue-500 text-white">JA</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarImage src="" alt="@bobsmith" />
      <AvatarFallback className="bg-green-500 text-white">BS</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarImage src="" alt="@alicesmith" />
      <AvatarFallback className="bg-purple-500 text-white">AS</AvatarFallback>
    </Avatar>

    <Avatar>
      <AvatarImage src="" alt="@mikejones" />
      <AvatarFallback className="bg-orange-500 text-white">MJ</AvatarFallback>
    </Avatar>
  </div>
);

// Loading states and broken images
export const LoadingStates = () => (
  <div className="flex items-center space-x-4">
    <div className="text-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Loaded" />
        <AvatarFallback>LD</AvatarFallback>
      </Avatar>
      <p className="text-xs mt-2">Loaded Image</p>
    </div>

    <div className="text-center">
      <Avatar>
        <AvatarImage src="https://broken-url.jpg" alt="Broken" />
        <AvatarFallback>BR</AvatarFallback>
      </Avatar>
      <p className="text-xs mt-2">Broken Image</p>
    </div>

    <div className="text-center">
      <Avatar>
        <AvatarImage src="" alt="No Source" />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <p className="text-xs mt-2">No Source</p>
    </div>
  </div>
);

// User profile examples
export const UserProfiles = () => (
  <div className="space-y-6">
    <div className="flex items-center space-x-4">
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="John Doe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold">John Doe</h3>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
        <p className="text-xs text-muted-foreground">john@example.com</p>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <Avatar size="lg">
        <AvatarImage src="" alt="Jane Smith" />
        <AvatarFallback className="bg-purple-500 text-white">JS</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold">Jane Smith</h3>
        <p className="text-sm text-muted-foreground">Product Manager</p>
        <p className="text-xs text-muted-foreground">jane@example.com</p>
      </div>
    </div>

    <div className="flex items-center space-x-4">
      <Avatar size="lg">
        <AvatarImage src="" alt="Alex Johnson" />
        <AvatarFallback className="bg-green-500 text-white">AJ</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold">Alex Johnson</h3>
        <p className="text-sm text-muted-foreground">UX Designer</p>
        <p className="text-xs text-muted-foreground">alex@example.com</p>
      </div>
    </div>
  </div>
);

// Avatar group/stack
export const AvatarGroup = () => (
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-2">Team Members (Stack)</h4>
      <div className="flex -space-x-2">
        <Avatar className="border-2 border-background">
          <AvatarImage src="https://github.com/shadcn.png" alt="Member 1" />
          <AvatarFallback>M1</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="" alt="Member 2" />
          <AvatarFallback className="bg-blue-500 text-white">M2</AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="" alt="Member 3" />
          <AvatarFallback className="bg-green-500 text-white">
            M3
          </AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarImage src="" alt="Member 4" />
          <AvatarFallback className="bg-purple-500 text-white">
            M4
          </AvatarFallback>
        </Avatar>
        <Avatar className="border-2 border-background">
          <AvatarFallback className="bg-gray-500 text-white">+3</AvatarFallback>
        </Avatar>
      </div>
    </div>

    <div>
      <h4 className="font-medium mb-2">Project Contributors (Grid)</h4>
      <div className="grid grid-cols-4 gap-2 w-fit">
        <Avatar size="sm">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Contributor 1"
          />
          <AvatarFallback>C1</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="" alt="Contributor 2" />
          <AvatarFallback className="bg-blue-500 text-white">C2</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="" alt="Contributor 3" />
          <AvatarFallback className="bg-green-500 text-white">
            C3
          </AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="" alt="Contributor 4" />
          <AvatarFallback className="bg-purple-500 text-white">
            C4
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
);

// Avatar with status indicators
export const WithStatusIndicators = () => (
  <div className="flex items-center space-x-6">
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Online User" />
        <AvatarFallback>ON</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></span>
      <p className="text-xs text-center mt-2">Online</p>
    </div>

    <div className="relative">
      <Avatar>
        <AvatarImage src="" alt="Away User" />
        <AvatarFallback className="bg-yellow-500 text-white">AW</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-yellow-400 ring-2 ring-white"></span>
      <p className="text-xs text-center mt-2">Away</p>
    </div>

    <div className="relative">
      <Avatar>
        <AvatarImage src="" alt="Busy User" />
        <AvatarFallback className="bg-red-500 text-white">BS</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-red-400 ring-2 ring-white"></span>
      <p className="text-xs text-center mt-2">Busy</p>
    </div>

    <div className="relative">
      <Avatar>
        <AvatarImage src="" alt="Offline User" />
        <AvatarFallback>OF</AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-gray-400 ring-2 ring-white"></span>
      <p className="text-xs text-center mt-2">Offline</p>
    </div>
  </div>
);

// Chat/messaging avatars
export const ChatAvatars = () => (
  <div className="space-y-4 max-w-md">
    <div className="flex items-start space-x-3">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="John" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div className="bg-muted rounded-lg p-3 flex-1">
        <p className="text-sm">Hey, how's the project coming along?</p>
        <p className="text-xs text-muted-foreground mt-1">2:34 PM</p>
      </div>
    </div>

    <div className="flex items-start space-x-3 justify-end">
      <div className="bg-primary text-primary-foreground rounded-lg p-3 flex-1 text-right">
        <p className="text-sm">Going well! Should have it ready by tomorrow.</p>
        <p className="text-xs opacity-70 mt-1">2:35 PM</p>
      </div>
      <Avatar size="sm">
        <AvatarImage src="" alt="You" />
        <AvatarFallback className="bg-blue-500 text-white">YO</AvatarFallback>
      </Avatar>
    </div>

    <div className="flex items-start space-x-3">
      <Avatar size="sm">
        <AvatarImage src="" alt="Sarah" />
        <AvatarFallback className="bg-purple-500 text-white">SA</AvatarFallback>
      </Avatar>
      <div className="bg-muted rounded-lg p-3 flex-1">
        <p className="text-sm">Perfect! Let me know if you need any help.</p>
        <p className="text-xs text-muted-foreground mt-1">2:36 PM</p>
      </div>
    </div>
  </div>
);

// Company/brand avatars
export const BrandAvatars = () => (
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-2">Company Logos</h4>
      <div className="flex items-center space-x-4">
        <Avatar className="rounded-lg">
          <AvatarImage src="" alt="Company A" />
          <AvatarFallback className="bg-blue-600 text-white rounded-lg">
            CA
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-lg">
          <AvatarImage src="" alt="Company B" />
          <AvatarFallback className="bg-red-600 text-white rounded-lg">
            CB
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-lg">
          <AvatarImage src="" alt="Company C" />
          <AvatarFallback className="bg-green-600 text-white rounded-lg">
            CC
          </AvatarFallback>
        </Avatar>
      </div>
    </div>

    <div>
      <h4 className="font-medium mb-2">App Icons</h4>
      <div className="flex items-center space-x-4">
        <Avatar size="lg" className="rounded-xl">
          <AvatarImage src="" alt="App 1" />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl">
            A1
          </AvatarFallback>
        </Avatar>
        <Avatar size="lg" className="rounded-xl">
          <AvatarImage src="" alt="App 2" />
          <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-xl">
            A2
          </AvatarFallback>
        </Avatar>
        <Avatar size="lg" className="rounded-xl">
          <AvatarImage src="" alt="App 3" />
          <AvatarFallback className="bg-gradient-to-br from-red-500 to-pink-600 text-white rounded-xl">
            A3
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
);

// Avatar with badges/notifications
export const WithBadges = () => (
  <div className="flex items-center space-x-6">
    <div className="relative">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="User with badge"
        />
        <AvatarFallback>UB</AvatarFallback>
      </Avatar>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
        3
      </span>
      <p className="text-xs text-center mt-2">Messages</p>
    </div>

    <div className="relative">
      <Avatar>
        <AvatarImage src="" alt="User with verification" />
        <AvatarFallback className="bg-blue-500 text-white">VF</AvatarFallback>
      </Avatar>
      <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-white">
        ✓
      </span>
      <p className="text-xs text-center mt-2">Verified</p>
    </div>

    <div className="relative">
      <Avatar>
        <AvatarImage src="" alt="Premium user" />
        <AvatarFallback className="bg-yellow-500 text-white">PR</AvatarFallback>
      </Avatar>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-white">
        ⭐
      </span>
      <p className="text-xs text-center mt-2">Premium</p>
    </div>
  </div>
);

// Different aspect ratios and shapes
export const CustomShapes = () => (
  <div className="space-y-4">
    <div>
      <h4 className="font-medium mb-2">Square Avatars</h4>
      <div className="flex items-center space-x-4">
        <Avatar className="rounded-md">
          <AvatarImage src="https://github.com/shadcn.png" alt="Square 1" />
          <AvatarFallback className="rounded-md">S1</AvatarFallback>
        </Avatar>
        <Avatar className="rounded-lg">
          <AvatarImage src="" alt="Square 2" />
          <AvatarFallback className="bg-blue-500 text-white rounded-lg">
            S2
          </AvatarFallback>
        </Avatar>
        <Avatar className="rounded-xl">
          <AvatarImage src="" alt="Square 3" />
          <AvatarFallback className="bg-green-500 text-white rounded-xl">
            S3
          </AvatarFallback>
        </Avatar>
      </div>
    </div>

    <div>
      <h4 className="font-medium mb-2">Hexagon Style</h4>
      <div className="flex items-center space-x-4">
        <Avatar
          className="rounded-none"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
        >
          <AvatarImage src="https://github.com/shadcn.png" alt="Hex 1" />
          <AvatarFallback
            className="rounded-none bg-purple-500 text-white"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            H1
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
);

// Interactive avatar
export const InteractiveAvatar = () => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div className="text-center space-y-4">
      <Avatar
        className={`cursor-pointer transition-all duration-200 hover:scale-110 ${
          clicked ? "ring-2 ring-primary ring-offset-2" : ""
        }`}
        onClick={() => setClicked(!clicked)}
        size="xl"
      >
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="Interactive Avatar"
        />
        <AvatarFallback>IA</AvatarFallback>
      </Avatar>
      <p className="text-sm text-muted-foreground">
        {clicked ? "Avatar selected!" : "Click the avatar"}
      </p>
    </div>
  );
};

// Playground with all controls
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "xl";
  src?: string;
  fallback?: string;
}) => (
  <Avatar size={args.size}>
    <AvatarImage src={args.src} alt="Playground Avatar" />
    <AvatarFallback>{args.fallback}</AvatarFallback>
  </Avatar>
);

Playground.args = {
  size: "default",
  src: "https://github.com/shadcn.png",
  fallback: "PG",
};

// Loading status control example
export const LoadingStatusControl = () => {
  const [loadingStatus, setLoadingStatus] = React.useState<
    "idle" | "loading" | "loaded" | "error"
  >("idle");
  const [imageSrc, setImageSrc] = React.useState(
    "https://github.com/shadcn.png"
  );

  const handleStatusChange = (
    status: "idle" | "loading" | "loaded" | "error"
  ) => {
    setLoadingStatus(status);
  };

  const testUrls = {
    valid: "https://github.com/shadcn.png",
    invalid: "https://invalid-url-that-will-fail.jpg",
    empty: "",
  };

  return (
    <div className="space-y-4 w-full max-w-md">
      <div className="space-y-2">
        <label className="text-sm font-medium">Test Image URLs:</label>
        <div className="flex gap-2">
          {Object.entries(testUrls).map(([key, url]) => (
            <button
              key={key}
              onClick={() => setImageSrc(url)}
              className={`px-3 py-1 text-xs rounded-md border transition-colors capitalize ${
                imageSrc === url
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-background border-border hover:bg-muted"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Avatar size="lg">
          <AvatarImage
            src={imageSrc}
            alt="Status test"
            onLoadingStatusChange={handleStatusChange}
          />
          <AvatarFallback delayMs={600}>ST</AvatarFallback>
        </Avatar>

        <div className="text-sm">
          <div className="font-medium">Loading Status:</div>
          <div
            className={`capitalize ${
              loadingStatus === "loaded"
                ? "text-green-600"
                : loadingStatus === "error"
                  ? "text-red-600"
                  : loadingStatus === "loading"
                    ? "text-yellow-600"
                    : "text-gray-600"
            }`}
          >
            {loadingStatus}
          </div>
        </div>
      </div>
    </div>
  );
};

// Delayed fallback example
export const DelayedFallback = () => {
  const [showComparison, setShowComparison] = React.useState(false);

  return (
    <div className="space-y-4 w-full max-w-md">
      <button
        onClick={() => setShowComparison(!showComparison)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
      >
        {showComparison ? "Hide" : "Show"} Fallback Delay Comparison
      </button>

      {showComparison && (
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">
              No Delay (Immediate Fallback)
            </h4>
            <Avatar size="lg">
              <AvatarImage
                src="https://slow-loading-image-url.jpg"
                alt="No delay"
              />
              <AvatarFallback>ND</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">600ms Delay</h4>
            <Avatar size="lg">
              <AvatarImage
                src="https://slow-loading-image-url.jpg"
                alt="With delay"
              />
              <AvatarFallback delayMs={600}>WD</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">1000ms Delay</h4>
            <Avatar size="lg">
              <AvatarImage
                src="https://slow-loading-image-url.jpg"
                alt="Long delay"
              />
              <AvatarFallback delayMs={1000}>LD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      )}
    </div>
  );
};

// As child example with tooltip
export const AsChildWithTooltip = () => (
  <div className="space-y-4 w-full max-w-md">
    <div>
      <h4 className="text-sm font-medium mb-2">Default Avatar</h4>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="Regular avatar" />
        <AvatarFallback>RA</AvatarFallback>
      </Avatar>
    </div>

    <div>
      <h4 className="text-sm font-medium mb-2">As Child (Button Element)</h4>
      <Avatar size="lg" asChild>
        <button
          className="hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all"
          onClick={() => alert("Avatar clicked!")}
        >
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Clickable avatar"
          />
          <AvatarFallback>CA</AvatarFallback>
        </button>
      </Avatar>
    </div>
  </div>
);

// API Reference
export const APIReference = () => (
  <div className="space-y-6 max-w-4xl">
    <div>
      <h3 className="text-lg font-semibold mb-3">Avatar API Reference</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Complete API reference for all Avatar components with their props,
        types, and default values.
      </p>
    </div>

    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-2">Avatar.Root</h4>
        <div className="text-sm text-muted-foreground mb-2">
          Contains all the parts of an avatar.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-3 py-2 text-left">
                  Prop
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Type
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Default
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  asChild
                </td>
                <td className="border border-border px-3 py-2 font-mono">
                  boolean
                </td>
                <td className="border border-border px-3 py-2">false</td>
                <td className="border border-border px-3 py-2">
                  Change the default rendered element for the one passed as a
                  child.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  size
                </td>
                <td className="border border-border px-3 py-2 font-mono">
                  enum
                </td>
                <td className="border border-border px-3 py-2">default</td>
                <td className="border border-border px-3 py-2">
                  Size variant: "sm" | "default" | "lg" | "xl"
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Avatar.Image</h4>
        <div className="text-sm text-muted-foreground mb-2">
          The image to render. By default it will only render when it has
          loaded.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-3 py-2 text-left">
                  Prop
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Type
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Default
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  asChild
                </td>
                <td className="border border-border px-3 py-2 font-mono">
                  boolean
                </td>
                <td className="border border-border px-3 py-2">false</td>
                <td className="border border-border px-3 py-2">
                  Change the default rendered element for the one passed as a
                  child.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  onLoadingStatusChange
                </td>
                <td className="border border-border px-3 py-2 font-mono">{`(status) => void`}</td>
                <td className="border border-border px-3 py-2">-</td>
                <td className="border border-border px-3 py-2">
                  Callback providing information about the loading status.
                  Status: "idle" | "loading" | "loaded" | "error"
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Avatar.Fallback</h4>
        <div className="text-sm text-muted-foreground mb-2">
          An element that renders when the image hasn't loaded. This means
          whilst it's loading, or if there was an error.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-3 py-2 text-left">
                  Prop
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Type
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Default
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  asChild
                </td>
                <td className="border border-border px-3 py-2 font-mono">
                  boolean
                </td>
                <td className="border border-border px-3 py-2">false</td>
                <td className="border border-border px-3 py-2">
                  Change the default rendered element for the one passed as a
                  child.
                </td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  delayMs
                </td>
                <td className="border border-border px-3 py-2 font-mono">
                  number
                </td>
                <td className="border border-border px-3 py-2">-</td>
                <td className="border border-border px-3 py-2">
                  Useful for delaying rendering so it only appears for those
                  with slower connections.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Size Variants</h4>
        <div className="text-sm text-muted-foreground mb-2">
          Available size options and their dimensions.
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse border border-border">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="border border-border px-3 py-2 text-left">
                  Size
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Dimensions
                </th>
                <th className="border border-border px-3 py-2 text-left">
                  Use Case
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">sm</td>
                <td className="border border-border px-3 py-2 font-mono">
                  32px × 32px
                </td>
                <td className="border border-border px-3 py-2">
                  List items, compact layouts, chat messages
                </td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">
                  default
                </td>
                <td className="border border-border px-3 py-2 font-mono">
                  40px × 40px
                </td>
                <td className="border border-border px-3 py-2">
                  Standard UI elements, navigation bars
                </td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">lg</td>
                <td className="border border-border px-3 py-2 font-mono">
                  48px × 48px
                </td>
                <td className="border border-border px-3 py-2">
                  Profile cards, user details, settings
                </td>
              </tr>
              <tr>
                <td className="border border-border px-3 py-2 font-mono">xl</td>
                <td className="border border-border px-3 py-2 font-mono">
                  64px × 64px
                </td>
                <td className="border border-border px-3 py-2">
                  Profile headers, large displays, featured content
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

// Advanced example with dynamic features
export const AdvancedExample = () => {
  const [selectedSize, setSelectedSize] = React.useState<
    "sm" | "default" | "lg" | "xl"
  >("default");
  const [selectedUser, setSelectedUser] = React.useState(0);
  const [showStatus, setShowStatus] = React.useState(true);
  const [fallbackDelay, setFallbackDelay] = React.useState(0);

  const users = [
    {
      name: "John Doe",
      initials: "JD",
      image: "https://github.com/shadcn.png",
      status: "online",
    },
    { name: "Jane Smith", initials: "JS", image: "", status: "away" },
    {
      name: "Alex Johnson",
      initials: "AJ",
      image: "https://broken-url.jpg",
      status: "busy",
    },
    { name: "Sam Wilson", initials: "SW", image: "", status: "offline" },
  ];

  const currentUser = users[selectedUser];
  const statusColors = {
    online: "bg-green-400",
    away: "bg-yellow-400",
    busy: "bg-red-400",
    offline: "bg-gray-400",
  };

  return (
    <div className="space-y-6 w-full max-w-2xl">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Avatar Size:</label>
          <div className="flex gap-2">
            {(["sm", "default", "lg", "xl"] as const).map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 py-1 text-xs rounded-md border transition-colors ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:bg-muted"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">User:</label>
          <div className="flex gap-2">
            {users.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedUser(index)}
                className={`px-3 py-1 text-xs rounded-md border transition-colors ${
                  selectedUser === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background border-border hover:bg-muted"
                }`}
              >
                User {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={showStatus}
            onChange={(e) => setShowStatus(e.target.checked)}
            className="rounded"
          />
          Show Status Indicator
        </label>

        <div className="flex items-center gap-2 text-sm">
          <label>Fallback Delay:</label>
          <select
            value={fallbackDelay}
            onChange={(e) => setFallbackDelay(Number(e.target.value))}
            className="px-2 py-1 border rounded"
          >
            <option value={0}>No delay</option>
            <option value={300}>300ms</option>
            <option value={600}>600ms</option>
            <option value={1000}>1000ms</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-4 p-6 border rounded-lg bg-muted/20">
        <div className="relative">
          <Avatar size={selectedSize}>
            <AvatarImage src={currentUser.image} alt={currentUser.name} />
            <AvatarFallback delayMs={fallbackDelay}>
              {currentUser.initials}
            </AvatarFallback>
          </Avatar>

          {showStatus && (
            <span
              className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${statusColors[currentUser.status as keyof typeof statusColors]}`}
            ></span>
          )}
        </div>

        <div>
          <h3 className="font-semibold">{currentUser.name}</h3>
          <p className="text-sm text-muted-foreground capitalize">
            Status: {currentUser.status}
          </p>
          <p className="text-xs text-muted-foreground">
            Size: {selectedSize} | Delay: {fallbackDelay}ms
          </p>
        </div>
      </div>
    </div>
  );
};
