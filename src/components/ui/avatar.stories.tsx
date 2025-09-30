import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

export default {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "xl"],
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
