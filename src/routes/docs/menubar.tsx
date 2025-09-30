import { Badge } from '@/components/ui/elements/badge';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarPortal,
} from "@/components/ui/modules/menubar";

function MenubarExample() {
  const [checkedItems, setCheckedItems] = useState([
    "Always Show Bookmarks Bar",
  ]);
  const [radioSelection, setRadioSelection] = useState("Luis");

  const handleCheckboxChange = (item: string) => {
    setCheckedItems((current) =>
      current.includes(item)
        ? current.filter((el) => el !== item)
        : [...current, item]
    );
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Menubar</h1>
        <p className="text-lg text-muted-foreground mt-2">
          A visually persistent menu common in desktop applications that
          provides quick access to a consistent set of commands. Built on top of
          Radix UI Menubar primitive.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Usage */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Basic Usage</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A simple menubar with basic menu items and keyboard shortcuts.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>New Incognito Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>About</MenubarItem>
                  <MenubarItem>Documentation</MenubarItem>
                  <MenubarItem>Support</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* Size Variants */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Size Variants</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Menubar supports different sizes: small, default, and large.
          </p>
          <div className="space-y-6">
            <div className="flex justify-center">
              <Menubar className="border rounded-md">
                <MenubarMenu>
                  <MenubarTrigger size="sm">Small</MenubarTrigger>
                  <MenubarContent size="sm">
                    <MenubarItem size="sm">Small Item</MenubarItem>
                    <MenubarItem size="sm">Another Item</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger size="sm">File</MenubarTrigger>
                  <MenubarContent size="sm">
                    <MenubarItem size="sm">New</MenubarItem>
                    <MenubarItem size="sm">Open</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            <div className="flex justify-center">
              <Menubar className="border rounded-md">
                <MenubarMenu>
                  <MenubarTrigger>Default</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>Default Item</MenubarItem>
                    <MenubarItem>Another Item</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>New</MenubarItem>
                    <MenubarItem>Open</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>

            <div className="flex justify-center">
              <Menubar className="border rounded-md">
                <MenubarMenu>
                  <MenubarTrigger size="lg">Large</MenubarTrigger>
                  <MenubarContent size="lg">
                    <MenubarItem size="lg">Large Item</MenubarItem>
                    <MenubarItem size="lg">Another Item</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger size="lg">File</MenubarTrigger>
                  <MenubarContent size="lg">
                    <MenubarItem size="lg">New</MenubarItem>
                    <MenubarItem size="lg">Open</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
          </div>
        </section>

        {/* With Submenus */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Submenus</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Create nested menus using MenubarSub components.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>New Tab</MenubarItem>
                  <MenubarItem>New Window</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                    <MenubarPortal>
                      <MenubarSubContent>
                        <MenubarItem>Email Link</MenubarItem>
                        <MenubarItem>Messages</MenubarItem>
                        <MenubarItem>Notes</MenubarItem>
                      </MenubarSubContent>
                    </MenubarPortal>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>
                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Undo</MenubarItem>
                  <MenubarItem>Redo</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Find</MenubarSubTrigger>
                    <MenubarPortal>
                      <MenubarSubContent>
                        <MenubarItem>Search the web...</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Find...</MenubarItem>
                        <MenubarItem>Find Next</MenubarItem>
                        <MenubarItem>Find Previous</MenubarItem>
                      </MenubarSubContent>
                    </MenubarPortal>
                  </MenubarSub>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem>Paste</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* With Labels */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Labels</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Use labels to group and categorize menu items.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>Tools</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Development</MenubarLabel>
                  <MenubarItem>Developer Tools</MenubarItem>
                  <MenubarItem>Console</MenubarItem>
                  <MenubarItem>Network</MenubarItem>
                  <MenubarSeparator />
                  <MenubarLabel>Extensions</MenubarLabel>
                  <MenubarItem>Manage Extensions</MenubarItem>
                  <MenubarItem>Extension Settings</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Window</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Arrangement</MenubarLabel>
                  <MenubarItem>Minimize</MenubarItem>
                  <MenubarItem>Zoom</MenubarItem>
                  <MenubarSeparator />
                  <MenubarLabel>History</MenubarLabel>
                  <MenubarItem>Back</MenubarItem>
                  <MenubarItem>Forward</MenubarItem>
                  <MenubarItem>Reload</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* With Checkbox Items */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Checkbox Items</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Add checkable items for toggleable settings and preferences.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem
                    checked={checkedItems.includes("Always Show Bookmarks Bar")}
                    onCheckedChange={() =>
                      handleCheckboxChange("Always Show Bookmarks Bar")
                    }
                  >
                    Always Show Bookmarks Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={checkedItems.includes("Always Show Full URLs")}
                    onCheckedChange={() =>
                      handleCheckboxChange("Always Show Full URLs")
                    }
                  >
                    Always Show Full URLs
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Reload <MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Toggle Fullscreen</MenubarItem>
                  <MenubarItem>Hide Sidebar</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* With Radio Items */}
        <section>
          <h2 className="text-xl font-semibold mb-4">With Radio Items</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Use radio groups for mutually exclusive options like profiles or
            themes.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>Profiles</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup
                    value={radioSelection}
                    onValueChange={setRadioSelection}
                  >
                    <MenubarRadioItem value="Andy">Andy</MenubarRadioItem>
                    <MenubarRadioItem value="Benoît">Benoît</MenubarRadioItem>
                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem>Edit...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Add Profile...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Theme</MenubarTrigger>
                <MenubarContent>
                  <MenubarRadioGroup value="system">
                    <MenubarRadioItem value="light">Light</MenubarRadioItem>
                    <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                    <MenubarRadioItem value="system">System</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* Complex Items */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Complex Items</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Menu items can contain additional elements like images, badges, and
            descriptions.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>Users</MenubarTrigger>
                <MenubarContent className="w-64">
                  <MenubarItem className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-semibold">
                      AH
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Adolfo Hess</div>
                      <div className="text-xs text-muted-foreground">
                        Administrator
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Active
                    </Badge>
                  </MenubarItem>
                  <MenubarItem className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center text-white text-sm font-semibold">
                      MM
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Miyah Myles</div>
                      <div className="text-xs text-muted-foreground">
                        Editor
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Away
                    </Badge>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">+</span>
                    </div>
                    <div>Invite User...</div>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Recent Files</MenubarTrigger>
                <MenubarContent className="w-80">
                  <MenubarItem className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-blue-50 flex items-center justify-center">
                      <span className="text-blue-600 text-xs font-mono">
                        JS
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">components.js</div>
                      <div className="text-xs text-muted-foreground">
                        Modified 2 hours ago
                      </div>
                    </div>
                  </MenubarItem>
                  <MenubarItem className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded bg-green-50 flex items-center justify-center">
                      <span className="text-green-600 text-xs font-mono">
                        MD
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">README.md</div>
                      <div className="text-xs text-muted-foreground">
                        Modified yesterday
                      </div>
                    </div>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Open More Files...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* Disabled Items */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Disabled Items</h2>
          <p className="text-sm text-muted-foreground mb-6">
            Menu items can be disabled to indicate unavailable actions.
          </p>
          <div className="flex justify-center p-8 border rounded-lg">
            <Menubar className="border rounded-md">
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Cut</MenubarItem>
                  <MenubarItem>Copy</MenubarItem>
                  <MenubarItem disabled>Paste</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Select All</MenubarItem>
                  <MenubarItem disabled>Find and Replace</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Format</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Bold</MenubarItem>
                  <MenubarItem>Italic</MenubarItem>
                  <MenubarItem disabled>Underline</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem disabled>Increase Indent</MenubarItem>
                  <MenubarItem disabled>Decrease Indent</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </section>

        {/* Complete Desktop App Example */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Complete Desktop App Example
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            A comprehensive menubar example similar to desktop applications with
            all features combined.
          </p>
          <div className="flex justify-center p-8 border rounded-lg bg-muted/50">
            <div className="w-full max-w-4xl">
              <Menubar className="border rounded-md bg-background">
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      New Window <MenubarShortcut>⌘N</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>New Incognito Window</MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Share</MenubarSubTrigger>
                      <MenubarPortal>
                        <MenubarSubContent>
                          <MenubarItem>Email Link</MenubarItem>
                          <MenubarItem>Messages</MenubarItem>
                          <MenubarItem>Notes</MenubarItem>
                        </MenubarSubContent>
                      </MenubarPortal>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>
                      Print... <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Find</MenubarSubTrigger>
                      <MenubarPortal>
                        <MenubarSubContent>
                          <MenubarItem>Search the web...</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Find...</MenubarItem>
                          <MenubarItem>Find Next</MenubarItem>
                          <MenubarItem>Find Previous</MenubarItem>
                        </MenubarSubContent>
                      </MenubarPortal>
                    </MenubarSub>
                    <MenubarSeparator />
                    <MenubarItem>Cut</MenubarItem>
                    <MenubarItem>Copy</MenubarItem>
                    <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem
                      checked={checkedItems.includes(
                        "Always Show Bookmarks Bar"
                      )}
                      onCheckedChange={() =>
                        handleCheckboxChange("Always Show Bookmarks Bar")
                      }
                    >
                      Always Show Bookmarks Bar
                    </MenubarCheckboxItem>
                    <MenubarCheckboxItem
                      checked={checkedItems.includes("Always Show Full URLs")}
                      onCheckedChange={() =>
                        handleCheckboxChange("Always Show Full URLs")
                      }
                    >
                      Always Show Full URLs
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Reload <MenubarShortcut>⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem disabled>
                      Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Toggle Fullscreen</MenubarItem>
                    <MenubarItem>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>

                <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                    <MenubarRadioGroup
                      value={radioSelection}
                      onValueChange={setRadioSelection}
                    >
                      <MenubarRadioItem value="Andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="Benoît">Benoît</MenubarRadioItem>
                      <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem>Edit...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Add Profile...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>

              <div className="mt-6 p-4 bg-background rounded-md border border-dashed text-center text-sm text-muted-foreground">
                Desktop Application Content Area
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/docs/menubar")({
  component: MenubarExample,
});
