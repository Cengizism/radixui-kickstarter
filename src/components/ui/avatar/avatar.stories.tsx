import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

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
    // Appearance Props
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
      description:
        "The size variant of the avatar container. Controls dimensions and spacing.",
      table: {
        category: "Appearance Props",
        type: { summary: '"sm" | "default" | "lg" | "xl"' },
        defaultValue: { summary: '"default"' },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the avatar container.",
      table: {
        category: "Appearance Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Image Props
    src: {
      control: "text",
      description:
        "The source URL of the image. When provided, renders AvatarImage component.",
      table: {
        category: "Image Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    alt: {
      control: "text",
      description: "Alternative text for the image for accessibility.",
      table: {
        category: "Image Props",
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    onLoadingStatusChange: {
      action: "onLoadingStatusChange",
      description:
        "Event handler called when the loading status of the image changes.",
      table: {
        category: "Image Props",
        type: {
          summary: '(status: "idle" | "loading" | "loaded" | "error") => void',
        },
        defaultValue: { summary: "undefined" },
      },
    },

    // Fallback Props
    fallback: {
      control: "text",
      description:
        "The content to display when image fails to load or is not provided.",
      table: {
        category: "Fallback Props",
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
    delayMs: {
      control: "number",
      description:
        "Useful for delaying rendering so it only appears for those with slower connections. In milliseconds.",
      table: {
        category: "Fallback Props",
        type: { summary: "number" },
        defaultValue: { summary: "undefined" },
      },
    },

    // Content Props
    asChild: {
      control: "boolean",
      description:
        "Change the default rendered element for the one passed as a child, merging their props and behavior.",
      table: {
        category: "Content Props",
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
        <Check className="h-3 w-3" />
      </span>
      <p className="text-xs text-center mt-2">Verified</p>
    </div>

    <div className="relative">
      <Avatar>
        <AvatarImage src="" alt="Premium user" />
        <AvatarFallback className="bg-yellow-500 text-white">PR</AvatarFallback>
      </Avatar>
      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-500 text-white">
        <Star className="h-3 w-3" fill="currentColor" />
      </span>
      <p className="text-xs text-center mt-2">Premium</p>
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
            <Button
              key={key}
              variant={imageSrc === url ? "default" : "outline"}
              size="sm"
              onClick={() => setImageSrc(url)}
              className="text-xs capitalize"
            >
              {key}
            </Button>
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
      <Button onClick={() => setShowComparison(!showComparison)}>
        {showComparison ? "Hide" : "Show"} Fallback Delay Comparison
      </Button>

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
        <Button
          variant="ghost"
          className="hover:ring-2 hover:ring-primary hover:ring-offset-2 transition-all p-0 h-auto rounded-full"
          onClick={() => alert("Avatar clicked!")}
        >
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="Clickable avatar"
          />
          <AvatarFallback>CA</AvatarFallback>
        </Button>
      </Avatar>
    </div>
  </div>
);

// Advanced example with dynamic features
