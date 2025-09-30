import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
} from "@/components/ui/context-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/docs/context-menu")({
  component: ContextMenuPage,
});

function ContextMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");
  const [showPanel, setShowPanel] = useState(false);
  const [showMinimap, setShowMinimap] = useState(true);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Context Menu</h1>
        <p className="text-xl text-muted-foreground">
          Displays a menu located at the pointer, triggered by a right-click or a long-press.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Context Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Context Menu
              <Badge variant="outline">Default</Badge>
            </CardTitle>
            <CardDescription>
              Right-click or long-press the area below to open the context menu.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={bookmarksChecked}
                  onCheckedChange={setBookmarksChecked}
                >
                  Show Bookmarks Bar
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={urlsChecked}
                  onCheckedChange={setUrlsChecked}
                >
                  Show Full URLs
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                  <ContextMenuLabel inset>People</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* Context Menu with Submenus */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Context Menu with Submenus
              <Badge variant="outline">Nested</Badge>
            </CardTitle>
            <CardDescription>
              Complex context menu with nested submenus and various item types.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click for advanced menu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  New Tab
                  <ContextMenuShortcut>⌘T</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  New Window
                  <ContextMenuShortcut>⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  New Private Window
                  <ContextMenuShortcut>⇧⌘N</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⌘⇧S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Show Bookmarks Bar
                  <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="pedro">
                  <ContextMenuLabel>People</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* File Explorer Context Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              File Explorer Menu
              <Badge variant="outline">File System</Badge>
            </CardTitle>
            <CardDescription>
              Context menu for file operations and properties.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed bg-muted/50 text-sm">
                📁 Documents Folder
                <br />
                <span className="text-xs text-muted-foreground">Right-click for file operations</span>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-56">
                <ContextMenuItem>Open</ContextMenuItem>
                <ContextMenuItem>Open with...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Cut</ContextMenuItem>
                <ContextMenuItem>Copy</ContextMenuItem>
                <ContextMenuItem>Paste</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>New</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Folder</ContextMenuItem>
                    <ContextMenuItem>Text Document</ContextMenuItem>
                    <ContextMenuItem>Spreadsheet</ContextMenuItem>
                    <ContextMenuItem>Presentation</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>Rename</ContextMenuItem>
                <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Properties</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* Text Editor Context Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Text Editor Menu
              <Badge variant="outline">Editor</Badge>
            </CardTitle>
            <CardDescription>
              Context menu for text editing operations with formatting options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border bg-background p-4 text-sm">
                <div className="text-left">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p className="text-muted-foreground">Select text and right-click for options</p>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem disabled>
                  Undo
                  <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem disabled>
                  Redo
                  <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Paste
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuCheckboxItem>Bold</ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem>Italic</ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem>Underline</ContextMenuCheckboxItem>
                    <ContextMenuSeparator />
                    <ContextMenuRadioGroup value="left">
                      <ContextMenuRadioItem value="left">Align Left</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="center">Align Center</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="right">Align Right</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuItem>
                  Select All
                  <ContextMenuShortcut>⌘A</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* Custom Styled Context Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Custom Styled Menu
              <Badge variant="outline">Variants</Badge>
            </CardTitle>
            <CardDescription>
              Context menu with custom styling and size variants.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <ContextMenu>
                <ContextMenuTrigger className="flex h-[100px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                  Small Menu
                </ContextMenuTrigger>
                <ContextMenuContent size="sm" className="w-48">
                  <ContextMenuItem>Profile</ContextMenuItem>
                  <ContextMenuItem>Settings</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem variant="destructive">Sign out</ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>

              <ContextMenu>
                <ContextMenuTrigger className="flex h-[100px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                  Large Menu
                </ContextMenuTrigger>
                <ContextMenuContent size="lg" className="w-72">
                  <ContextMenuLabel>My Account</ContextMenuLabel>
                  <ContextMenuSeparator />
                  <ContextMenuItem inset>
                    Profile Settings
                    <ContextMenuShortcut>⌘,</ContextMenuShortcut>
                  </ContextMenuItem>
                  <ContextMenuItem inset>Billing</ContextMenuItem>
                  <ContextMenuItem inset>Team</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem inset variant="destructive">
                    Sign out
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
            </div>
          </CardContent>
        </Card>

        {/* Application Settings Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Application Settings
              <Badge variant="outline">Settings</Badge>
            </CardTitle>
            <CardDescription>
              Context menu for application preferences and view options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed bg-accent/50 text-sm">
                ⚙️ Application Window
                <br />
                <span className="text-xs text-muted-foreground">Right-click for settings</span>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem
                  checked={showPanel}
                  onCheckedChange={setShowPanel}
                >
                  Show Side Panel
                  <ContextMenuShortcut>⌘1</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem
                  checked={showMinimap}
                  onCheckedChange={setShowMinimap}
                >
                  Show Minimap
                  <ContextMenuShortcut>⌘M</ContextMenuShortcut>
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>Theme</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuRadioGroup value="system">
                      <ContextMenuRadioItem value="light">Light</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="dark">Dark</ContextMenuRadioItem>
                      <ContextMenuRadioItem value="system">System</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger inset>Zoom</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Zoom In
                      <ContextMenuShortcut>⌘+</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      Zoom Out
                      <ContextMenuShortcut>⌘-</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>
                      Reset Zoom
                      <ContextMenuShortcut>⌘0</ContextMenuShortcut>
                    </ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Preferences...
                  <ContextMenuShortcut>⌘,</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* Development Tools Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Developer Tools
              <Badge variant="outline">Development</Badge>
            </CardTitle>
            <CardDescription>
              Context menu for development and debugging operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed bg-primary/10 text-sm">
                <div className="text-center">
                  <div className="mb-2">🛠️ Development Area</div>
                  <div className="text-xs text-muted-foreground">
                    Right-click for dev tools
                  </div>
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Inspect Element
                  <ContextMenuShortcut>⌘⇧I</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  View Page Source
                  <ContextMenuShortcut>⌘⇧U</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Developer Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Console</ContextMenuItem>
                    <ContextMenuItem>Network</ContextMenuItem>
                    <ContextMenuItem>Performance</ContextMenuItem>
                    <ContextMenuItem>Memory</ContextMenuItem>
                    <ContextMenuItem>Application</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Debugging</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>Add Breakpoint</ContextMenuItem>
                    <ContextMenuItem>Step Over</ContextMenuItem>
                    <ContextMenuItem>Step Into</ContextMenuItem>
                    <ContextMenuItem>Continue</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem>Pause on Exceptions</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Hard Reload
                  <ContextMenuShortcut>⌘⇧R</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Interactive Demo
              <Badge variant="outline">Interactive</Badge>
            </CardTitle>
            <CardDescription>
              Try different interactions with context menus and see state changes.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Current State:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Bookmarks: {bookmarksChecked ? 'Shown' : 'Hidden'}</li>
                  <li>URLs: {urlsChecked ? 'Full' : 'Short'}</li>
                  <li>Person: {person === 'pedro' ? 'Pedro Duarte' : 'Colm Tuite'}</li>
                  <li>Side Panel: {showPanel ? 'Shown' : 'Hidden'}</li>
                  <li>Minimap: {showMinimap ? 'Shown' : 'Hidden'}</li>
                </ul>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setBookmarksChecked(false);
                    setUrlsChecked(false);
                    setPerson('pedro');
                    setShowPanel(false);
                    setShowMinimap(true);
                  }}
                >
                  Reset State
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Guide */}
      <Card>
        <CardHeader>
          <CardTitle>Usage Guide</CardTitle>
          <CardDescription>
            Learn how to implement and customize Context Menu components.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">Basic Implementation</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
{`<ContextMenu>
  <ContextMenuTrigger>Right click me</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Item 1</ContextMenuItem>
    <ContextMenuItem>Item 2</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">With Submenus</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
{`<ContextMenuSub>
  <ContextMenuSubTrigger>More Options</ContextMenuSubTrigger>
  <ContextMenuSubContent>
    <ContextMenuItem>Nested Item 1</ContextMenuItem>
    <ContextMenuItem>Nested Item 2</ContextMenuItem>
  </ContextMenuSubContent>
</ContextMenuSub>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">With Checkbox Items</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
{`<ContextMenuCheckboxItem 
  checked={isChecked} 
  onCheckedChange={setIsChecked}
>
  Toggle Option
</ContextMenuCheckboxItem>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">With Radio Groups</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
{`<ContextMenuRadioGroup value={selected} onValueChange={setSelected}>
  <ContextMenuRadioItem value="option1">Option 1</ContextMenuRadioItem>
  <ContextMenuRadioItem value="option2">Option 2</ContextMenuRadioItem>
</ContextMenuRadioGroup>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Available Variants</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Content Sizes:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <code>sm</code> - Small menu</li>
                  <li>• <code>default</code> - Standard menu</li>
                  <li>• <code>lg</code> - Large menu</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Item Variants:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• <code>default</code> - Standard item</li>
                  <li>• <code>destructive</code> - Destructive action</li>
                  <li>• <code>inset</code> - Indented item</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}