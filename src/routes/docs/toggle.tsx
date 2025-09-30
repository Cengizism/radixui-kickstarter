import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Separator } from '@/components/ui/elements/separator';
import { Toggle } from '@/components/ui/elements/toggle';
import { useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Heart,
  Star,
  Bookmark,
  ThumbsUp,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Wifi,
  WifiOff,
  Moon,
  Sun,
} from "lucide-react";

export const Route = createFileRoute("/docs/toggle")({
  component: ToggleDemo,
});

function ToggleDemo() {
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const [alignment, setAlignment] = useState<string | null>("left");
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [preferences, setPreferences] = useState({
    notifications: true,
    darkMode: false,
    wifi: true,
    private: false,
  });

  return (
    <div className="p-8 space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Toggle</h1>
          <p className="text-lg text-muted-foreground">
            A two-state button that can be either on or off.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Interactive</Badge>
          <Badge variant="secondary">Stateful</Badge>
          <Badge variant="secondary">Accessible</Badge>
          <Badge variant="secondary">Keyboard Navigation</Badge>
          <Badge variant="secondary">Controlled</Badge>
        </div>
      </div>

      <Separator />

      {/* Basic Usage */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <p className="text-muted-foreground">
            Simple toggle buttons for binary states.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="flex flex-wrap gap-4">
            <Toggle aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </Toggle>
          </div>

          <div className="text-sm text-muted-foreground">
            Click the buttons above to see toggle behavior
          </div>
        </div>
      </section>

      <Separator />

      {/* Toggle Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Toggle Variants</h2>
          <p className="text-muted-foreground">
            Different visual styles for various use cases.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <div className="flex gap-2">
              <Toggle variant="default" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" defaultPressed aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" disabled aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Outline</h4>
            <div className="flex gap-2">
              <Toggle variant="outline" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" defaultPressed aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" disabled aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Secondary</h4>
            <div className="flex gap-2">
              <Toggle variant="secondary" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="secondary" defaultPressed aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="secondary" disabled aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Ghost</h4>
            <div className="flex gap-2">
              <Toggle variant="ghost" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="ghost" defaultPressed aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="ghost" disabled aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Solid</h4>
            <div className="flex gap-2">
              <Toggle variant="solid" aria-label="Bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="solid" defaultPressed aria-label="Italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="solid" disabled aria-label="Underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Destructive</h4>
            <div className="flex gap-2">
              <Toggle variant="destructive" aria-label="Delete">
                Delete
              </Toggle>
              <Toggle variant="destructive" defaultPressed aria-label="Remove">
                Remove
              </Toggle>
              <Toggle variant="destructive" disabled aria-label="Disabled">
                Disabled
              </Toggle>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Size Variants */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Size Variants</h2>
          <p className="text-muted-foreground">
            Different sizes for various UI contexts.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Small</h4>
            <div className="flex items-center gap-2">
              <Toggle size="sm" variant="outline" aria-label="Small bold">
                <Bold className="h-3 w-3" />
              </Toggle>
              <Toggle size="sm" variant="outline" aria-label="Small italic">
                <Italic className="h-3 w-3" />
              </Toggle>
              <Toggle size="sm" variant="outline" aria-label="Small underline">
                <Underline className="h-3 w-3" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Default</h4>
            <div className="flex items-center gap-2">
              <Toggle
                size="default"
                variant="outline"
                aria-label="Default bold"
              >
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle
                size="default"
                variant="outline"
                aria-label="Default italic"
              >
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle
                size="default"
                variant="outline"
                aria-label="Default underline"
              >
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Large</h4>
            <div className="flex items-center gap-2">
              <Toggle size="lg" variant="outline" aria-label="Large bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" variant="outline" aria-label="Large italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" variant="outline" aria-label="Large underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Extra Large</h4>
            <div className="flex items-center gap-2">
              <Toggle size="xl" variant="outline" aria-label="XL bold">
                <Bold className="h-5 w-5" />
              </Toggle>
              <Toggle size="xl" variant="outline" aria-label="XL italic">
                <Italic className="h-5 w-5" />
              </Toggle>
              <Toggle size="xl" variant="outline" aria-label="XL underline">
                <Underline className="h-5 w-5" />
              </Toggle>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Controlled Toggle */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Controlled Toggle</h2>
          <p className="text-muted-foreground">
            Control toggle state externally with pressed and onPressedChange.
          </p>
        </div>
        <div className="space-y-6 p-6 border rounded-lg">
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Text Formatting</h4>
            <div className="space-y-3">
              <div className="flex gap-2">
                <Toggle
                  pressed={formatting.bold}
                  onPressedChange={(pressed) =>
                    setFormatting((prev) => ({ ...prev, bold: pressed }))
                  }
                  variant="outline"
                  aria-label="Toggle bold"
                >
                  <Bold className="h-4 w-4" />
                </Toggle>
                <Toggle
                  pressed={formatting.italic}
                  onPressedChange={(pressed) =>
                    setFormatting((prev) => ({ ...prev, italic: pressed }))
                  }
                  variant="outline"
                  aria-label="Toggle italic"
                >
                  <Italic className="h-4 w-4" />
                </Toggle>
                <Toggle
                  pressed={formatting.underline}
                  onPressedChange={(pressed) =>
                    setFormatting((prev) => ({ ...prev, underline: pressed }))
                  }
                  variant="outline"
                  aria-label="Toggle underline"
                >
                  <Underline className="h-4 w-4" />
                </Toggle>
              </div>
              <div className="text-sm text-muted-foreground">
                Active formatting:{" "}
                {Object.entries(formatting)
                  .filter(([, active]) => active)
                  .map(([key]) => key)
                  .join(", ") || "None"}
              </div>
              <Button
                onClick={() =>
                  setFormatting({
                    bold: false,
                    italic: false,
                    underline: false,
                  })
                }
                variant="outline"
                size="sm"
              >
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Real-world Examples */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Real-world Examples</h2>
          <p className="text-muted-foreground">
            Common patterns and use cases for toggle buttons.
          </p>
        </div>
        <div className="space-y-8 p-6 border rounded-lg">
          {/* Text Alignment */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Text Alignment Controls</h4>
            <div className="flex gap-1 p-1 border rounded-lg w-fit">
              <Toggle
                pressed={alignment === "left"}
                onPressedChange={() =>
                  setAlignment(alignment === "left" ? null : "left")
                }
                variant="ghost"
                size="sm"
                aria-label="Align left"
              >
                <AlignLeft className="h-4 w-4" />
              </Toggle>
              <Toggle
                pressed={alignment === "center"}
                onPressedChange={() =>
                  setAlignment(alignment === "center" ? null : "center")
                }
                variant="ghost"
                size="sm"
                aria-label="Align center"
              >
                <AlignCenter className="h-4 w-4" />
              </Toggle>
              <Toggle
                pressed={alignment === "right"}
                onPressedChange={() =>
                  setAlignment(alignment === "right" ? null : "right")
                }
                variant="ghost"
                size="sm"
                aria-label="Align right"
              >
                <AlignRight className="h-4 w-4" />
              </Toggle>
              <Toggle
                pressed={alignment === "justify"}
                onPressedChange={() =>
                  setAlignment(alignment === "justify" ? null : "justify")
                }
                variant="ghost"
                size="sm"
                aria-label="Justify"
              >
                <AlignJustify className="h-4 w-4" />
              </Toggle>
            </div>
            <div className="text-sm text-muted-foreground">
              Current alignment: {alignment || "None"}
            </div>
          </div>

          {/* Media Controls */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Media Player Controls</h4>
            <div className="flex items-center gap-3">
              <Toggle
                pressed={isPlaying}
                onPressedChange={setIsPlaying}
                variant="outline"
                size="lg"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </Toggle>
              <Toggle
                pressed={isMuted}
                onPressedChange={setIsMuted}
                variant="ghost"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </Toggle>
              <div className="text-sm text-muted-foreground ml-2">
                {isPlaying ? "Playing" : "Paused"} •{" "}
                {isMuted ? "Muted" : "Volume On"}
              </div>
            </div>
          </div>

          {/* User Actions */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">User Interaction Toggles</h4>
            <div className="flex flex-wrap gap-3">
              <Toggle variant="ghost" aria-label="Like">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Toggle>
              <Toggle variant="ghost" aria-label="Favorite">
                <Star className="h-4 w-4 mr-2" />
                Favorite
              </Toggle>
              <Toggle variant="ghost" aria-label="Bookmark">
                <Bookmark className="h-4 w-4 mr-2" />
                Bookmark
              </Toggle>
              <Toggle variant="ghost" aria-label="Thumbs up">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Upvote
              </Toggle>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium">Settings Panel</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {preferences.notifications ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )}
                  <div>
                    <p className="font-medium">Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      {preferences.notifications ? "Enabled" : "Disabled"}
                    </p>
                  </div>
                </div>
                <Toggle
                  pressed={preferences.notifications}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({
                      ...prev,
                      notifications: pressed,
                    }))
                  }
                  variant="outline"
                  aria-label="Toggle notifications"
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {preferences.darkMode ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">
                      {preferences.darkMode ? "Dark theme" : "Light theme"}
                    </p>
                  </div>
                </div>
                <Toggle
                  pressed={preferences.darkMode}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, darkMode: pressed }))
                  }
                  variant="outline"
                  aria-label="Toggle dark mode"
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {preferences.wifi ? (
                    <Wifi className="h-4 w-4" />
                  ) : (
                    <WifiOff className="h-4 w-4" />
                  )}
                  <div>
                    <p className="font-medium">WiFi</p>
                    <p className="text-sm text-muted-foreground">
                      {preferences.wifi ? "Connected" : "Disconnected"}
                    </p>
                  </div>
                </div>
                <Toggle
                  pressed={preferences.wifi}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, wifi: pressed }))
                  }
                  variant="outline"
                  aria-label="Toggle WiFi"
                />
              </div>

              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {preferences.private ? (
                    <Lock className="h-4 w-4" />
                  ) : (
                    <Unlock className="h-4 w-4" />
                  )}
                  <div>
                    <p className="font-medium">Private Mode</p>
                    <p className="text-sm text-muted-foreground">
                      {preferences.private
                        ? "Private browsing"
                        : "Normal browsing"}
                    </p>
                  </div>
                </div>
                <Toggle
                  pressed={preferences.private}
                  onPressedChange={(pressed) =>
                    setPreferences((prev) => ({ ...prev, private: pressed }))
                  }
                  variant="outline"
                  aria-label="Toggle private mode"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Props Reference */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Props Reference</h2>
          <p className="text-muted-foreground">
            Complete API reference for the Toggle component.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Toggle</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-border">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="border border-border p-2 text-left">Prop</th>
                    <th className="border border-border p-2 text-left">Type</th>
                    <th className="border border-border p-2 text-left">
                      Default
                    </th>
                    <th className="border border-border p-2 text-left">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      variant
                    </td>
                    <td className="border border-border p-2">
                      'default' | 'outline' | 'secondary' | 'ghost' | 'solid' |
                      'destructive'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Visual style of the toggle
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">size</td>
                    <td className="border border-border p-2">
                      'sm' | 'default' | 'lg' | 'xl'
                    </td>
                    <td className="border border-border p-2">'default'</td>
                    <td className="border border-border p-2">
                      Size of the toggle button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      pressed
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Controlled pressed state
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      defaultPressed
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Default pressed state (uncontrolled)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      onPressedChange
                    </td>
                    <td className="border border-border p-2">
                      (pressed: boolean) =&gt; void
                    </td>
                    <td className="border border-border p-2">undefined</td>
                    <td className="border border-border p-2">
                      Called when pressed state changes
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      disabled
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Disables the toggle button
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border p-2 font-mono">
                      asChild
                    </td>
                    <td className="border border-border p-2">boolean</td>
                    <td className="border border-border p-2">false</td>
                    <td className="border border-border p-2">
                      Render as a different element
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Data Attributes */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Data Attributes</h2>
          <p className="text-muted-foreground">
            Available data attributes for styling and testing.
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="border border-border p-2 text-left">
                    Attribute
                  </th>
                  <th className="border border-border p-2 text-left">Values</th>
                  <th className="border border-border p-2 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-state]
                  </td>
                  <td className="border border-border p-2">"on" | "off"</td>
                  <td className="border border-border p-2">
                    Current pressed state of the toggle
                  </td>
                </tr>
                <tr>
                  <td className="border border-border p-2 font-mono">
                    [data-disabled]
                  </td>
                  <td className="border border-border p-2">
                    Present when disabled
                  </td>
                  <td className="border border-border p-2">
                    Indicates the toggle is disabled
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Separator />

      {/* Accessibility */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p className="text-muted-foreground">
            Built-in accessibility features and keyboard navigation.
          </p>
        </div>
        <div className="space-y-4 p-6 border rounded-lg">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Keyboard Interactions</h4>
            <div className="bg-muted/30 p-4 rounded-lg">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Space
                    </td>
                    <td className="py-2 pl-4">
                      Activates/deactivates the toggle
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono bg-background px-2 rounded">
                      Enter
                    </td>
                    <td className="py-2 pl-4">
                      Activates/deactivates the toggle
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">ARIA Compliance</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>• Follows the ARIA button design pattern</li>
              <li>
                • Automatic{" "}
                <code className="bg-muted px-1 rounded">aria-pressed</code>{" "}
                attribute management
              </li>
              <li>
                • Supports{" "}
                <code className="bg-muted px-1 rounded">aria-label</code> for
                accessibility
              </li>
              <li>• Proper focus management and keyboard navigation</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-medium">Best Practices</h4>
            <ul className="text-sm text-muted-foreground space-y-1 pl-4">
              <li>
                • Always provide accessible labels via{" "}
                <code className="bg-muted px-1 rounded">aria-label</code>
              </li>
              <li>
                • Use clear visual indicators for pressed/unpressed states
              </li>
              <li>• Group related toggles with appropriate landmarks</li>
              <li>
                • Consider using Toggle Groups for mutually exclusive options
              </li>
              <li>• Ensure sufficient color contrast in all states</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
