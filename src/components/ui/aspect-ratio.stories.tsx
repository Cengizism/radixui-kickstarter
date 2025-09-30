import { AspectRatio } from './aspect-ratio';
import { Badge } from './badge';
import { Card, CardContent } from './card';

export default {
  title: "UI/AspectRatio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ratio: {
      control: "select",
      options: ["1:1", "4:3", "16:9", "3:2", "21:9", "9:16", "custom"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "default", "lg", "xl", "full"],
    },
  },
};

// Default aspect ratio
export const Default = () => (
  <div className="w-[450px]">
    <AspectRatio>
      <div className="flex h-full items-center justify-center bg-muted">
        <span className="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
      </div>
    </AspectRatio>
  </div>
);

// Common aspect ratios
export const CommonRatios = () => (
  <div className="space-y-6 w-full max-w-2xl">
    <div>
      <h3 className="mb-2 text-sm font-medium">Square (1:1)</h3>
      <div className="w-[200px]">
        <AspectRatio ratio="1:1">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white">
            1:1
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Standard (4:3)</h3>
      <div className="w-[300px]">
        <AspectRatio ratio="4:3">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white">
            4:3
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Widescreen (16:9)</h3>
      <div className="w-[400px]">
        <AspectRatio ratio="16:9">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white">
            16:9
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Photo (3:2)</h3>
      <div className="w-[300px]">
        <AspectRatio ratio="3:2">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-400 to-orange-600 text-white">
            3:2
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Ultrawide (21:9)</h3>
      <div className="w-[500px]">
        <AspectRatio ratio="21:9">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-red-400 to-red-600 text-white">
            21:9
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Portrait (9:16)</h3>
      <div className="w-[200px]">
        <AspectRatio ratio="9:16">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-teal-400 to-teal-600 text-white">
            9:16
          </div>
        </AspectRatio>
      </div>
    </div>
  </div>
);

// Custom ratio with number
export const CustomRatio = () => (
  <div className="space-y-4 w-full max-w-lg">
    <div>
      <h3 className="mb-2 text-sm font-medium">Custom 2:1 Ratio</h3>
      <AspectRatio ratio={2}>
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-400 to-indigo-600 text-white">
          Custom 2:1 Ratio
        </div>
      </AspectRatio>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Custom 0.75 Ratio (3:4)</h3>
      <div className="w-[200px]">
        <AspectRatio ratio={0.75}>
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-400 to-pink-600 text-white">
            0.75 Ratio
          </div>
        </AspectRatio>
      </div>
    </div>
  </div>
);

// Rounded variations
export const RoundedVariations = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
    <div>
      <h4 className="mb-2 text-xs font-medium text-center">None</h4>
      <AspectRatio ratio="1:1" rounded="none">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-400 to-slate-600 text-white text-xs">
          None
        </div>
      </AspectRatio>
    </div>

    <div>
      <h4 className="mb-2 text-xs font-medium text-center">Small</h4>
      <AspectRatio ratio="1:1" rounded="sm">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-red-400 to-red-600 text-white text-xs">
          Small
        </div>
      </AspectRatio>
    </div>

    <div>
      <h4 className="mb-2 text-xs font-medium text-center">Default</h4>
      <AspectRatio ratio="1:1" rounded="default">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-white text-xs">
          Default
        </div>
      </AspectRatio>
    </div>

    <div>
      <h4 className="mb-2 text-xs font-medium text-center">Large</h4>
      <AspectRatio ratio="1:1" rounded="lg">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-400 to-green-600 text-white text-xs">
          Large
        </div>
      </AspectRatio>
    </div>

    <div>
      <h4 className="mb-2 text-xs font-medium text-center">Extra Large</h4>
      <AspectRatio ratio="1:1" rounded="xl">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-white text-xs">
          XL
        </div>
      </AspectRatio>
    </div>

    <div>
      <h4 className="mb-2 text-xs font-medium text-center">Full</h4>
      <AspectRatio ratio="1:1" rounded="full">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-purple-400 to-purple-600 text-white text-xs">
          Full
        </div>
      </AspectRatio>
    </div>
  </div>
);

// Image containers
export const ImageContainers = () => (
  <div className="space-y-6 w-full max-w-2xl">
    <div>
      <h3 className="mb-2 text-sm font-medium">Avatar Container (1:1)</h3>
      <div className="w-[120px]">
        <AspectRatio ratio="1:1" rounded="full">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-600 text-white">
            👤
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Video Thumbnail (16:9)</h3>
      <div className="w-[320px]">
        <AspectRatio ratio="16:9" rounded="lg">
          <div className="flex h-full items-center justify-center bg-black text-white relative">
            <div className="text-4xl">▶️</div>
            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
              4:32
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Photo Frame (4:3)</h3>
      <div className="w-[240px]">
        <AspectRatio ratio="4:3" rounded="default">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-emerald-100 to-emerald-300">
            <div className="text-center">
              <div className="text-2xl mb-2">📸</div>
              <div className="text-xs text-emerald-700">Photo placeholder</div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  </div>
);

// Card examples
export const CardExamples = () => (
  <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl">
    <Card>
      <CardContent className="p-0">
        <AspectRatio ratio="16:9" rounded="lg">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <div className="text-center">
              <div className="text-lg font-bold">Video Content</div>
              <div className="text-sm opacity-90">16:9 Aspect Ratio</div>
            </div>
          </div>
        </AspectRatio>
        <div className="p-4">
          <h3 className="font-semibold">Video Title</h3>
          <p className="text-sm text-muted-foreground">
            This video uses a 16:9 aspect ratio, perfect for modern displays.
          </p>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardContent className="p-0">
        <AspectRatio ratio="1:1" rounded="lg">
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-pink-500 to-rose-500 text-white">
            <div className="text-center">
              <div className="text-lg font-bold">Square Image</div>
              <div className="text-sm opacity-90">1:1 Aspect Ratio</div>
            </div>
          </div>
        </AspectRatio>
        <div className="p-4">
          <h3 className="font-semibold">Instagram Post</h3>
          <p className="text-sm text-muted-foreground">
            Square format perfect for social media posts.
          </p>
        </div>
      </CardContent>
    </Card>
  </div>
);

// Product showcase
export const ProductShowcase = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
    {/* Product card 1 */}
    <Card className="overflow-hidden">
      <AspectRatio ratio="1:1">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
          <div className="text-center">
            <div className="text-3xl mb-2">👟</div>
            <Badge variant="secondary">New</Badge>
          </div>
        </div>
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="font-semibold">Running Shoes</h3>
        <p className="text-sm text-muted-foreground">
          Premium athletic footwear
        </p>
        <div className="mt-2 font-bold">$129.99</div>
      </CardContent>
    </Card>

    {/* Product card 2 */}
    <Card className="overflow-hidden">
      <AspectRatio ratio="1:1">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
          <div className="text-center">
            <div className="text-3xl mb-2">🎧</div>
            <Badge variant="destructive">Sale</Badge>
          </div>
        </div>
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="font-semibold">Wireless Headphones</h3>
        <p className="text-sm text-muted-foreground">Premium sound quality</p>
        <div className="mt-2 font-bold">$199.99</div>
      </CardContent>
    </Card>

    {/* Product card 3 */}
    <Card className="overflow-hidden">
      <AspectRatio ratio="1:1">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
          <div className="text-center">
            <div className="text-3xl mb-2">⌚</div>
            <Badge>Featured</Badge>
          </div>
        </div>
      </AspectRatio>
      <CardContent className="p-4">
        <h3 className="font-semibold">Smart Watch</h3>
        <p className="text-sm text-muted-foreground">
          Advanced fitness tracking
        </p>
        <div className="mt-2 font-bold">$299.99</div>
      </CardContent>
    </Card>
  </div>
);

// Gallery layout
export const GalleryLayout = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-4xl">
    {Array.from({ length: 8 }, (_, i) => {
      const ratios = ["1:1", "4:3", "3:2", "16:9"];
      const ratio = ratios[i % ratios.length];
      const colors = [
        "from-red-400 to-red-600",
        "from-blue-400 to-blue-600",
        "from-green-400 to-green-600",
        "from-purple-400 to-purple-600",
        "from-yellow-400 to-yellow-600",
        "from-pink-400 to-pink-600",
        "from-indigo-400 to-indigo-600",
        "from-teal-400 to-teal-600",
      ];

      return (
        <AspectRatio
          key={i}
          ratio={ratio as "1:1" | "4:3" | "3:2" | "16:9"}
          rounded="sm"
        >
          <div
            className={`flex h-full items-center justify-center bg-gradient-to-br ${colors[i]} text-white text-xs font-medium`}
          >
            {ratio}
          </div>
        </AspectRatio>
      );
    })}
  </div>
);

// Responsive design
export const ResponsiveDesign = () => (
  <div className="space-y-4 w-full max-w-2xl">
    <div>
      <h3 className="mb-2 text-sm font-medium">Mobile Video (9:16)</h3>
      <div className="w-[180px] mx-auto">
        <AspectRatio ratio="9:16" rounded="lg">
          <div className="flex h-full items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-600 text-white">
            <div className="text-center">
              <div className="text-lg font-bold">📱</div>
              <div className="text-xs mt-2">Mobile Video</div>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>

    <div>
      <h3 className="mb-2 text-sm font-medium">Desktop Banner (21:9)</h3>
      <AspectRatio ratio="21:9" rounded="lg">
        <div className="flex h-full items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
          <div className="text-center">
            <div className="text-xl font-bold">🖥️</div>
            <div className="text-sm mt-2">Ultra-wide Banner</div>
          </div>
        </div>
      </AspectRatio>
    </div>
  </div>
);

// Interactive playground
export const Playground = (args: {
  ratio?: "1:1" | "4:3" | "16:9" | "3:2" | "21:9" | "9:16" | "custom";
  rounded?: "none" | "sm" | "default" | "lg" | "xl" | "full";
}) => (
  <div className="w-[400px]">
    <AspectRatio ratio={args.ratio} rounded={args.rounded}>
      <div className="flex h-full items-center justify-center bg-gradient-to-br from-violet-400 to-violet-600 text-white">
        <div className="text-center">
          <div className="font-bold">Playground</div>
          <div className="text-sm opacity-90 mt-1">
            Ratio: {args.ratio} | Rounded: {args.rounded}
          </div>
        </div>
      </div>
    </AspectRatio>
  </div>
);

Playground.args = {
  ratio: "16:9",
  rounded: "default",
};
