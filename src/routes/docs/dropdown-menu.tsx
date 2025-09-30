import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import {
  MoreHorizontal,
  User,
  Settings,
  LogOut,
  Mail,
  MessageSquare,
  PlusCircle,
  UserPlus,
  CreditCard,
  Keyboard,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/docs/dropdown-menu")({
  component: DropdownMenuPage,
});

function DropdownMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");
  const [statusChecked, setStatusChecked] = useState(false);
  const [activityBarChecked, setActivityBarChecked] = useState(true);
  const [panelChecked, setPanelChecked] = useState(false);
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("en");

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="text-xl text-muted-foreground">
          Displays a menu to the user—such as a set of actions or
          functions—triggered by a button.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Dropdown Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Basic Dropdown Menu
              <Badge variant="outline">Default</Badge>
            </CardTitle>
            <CardDescription>
              Simple dropdown menu with items, separators, and keyboard
              shortcuts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Dropdown Menu with Submenus */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Dropdown Menu with Submenus
              <Badge variant="outline">Nested</Badge>
            </CardTitle>
            <CardDescription>
              Complex dropdown menu with nested submenus and various item types.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Open</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  <span>Team</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <UserPlus className="mr-2 h-4 w-4" />
                    <span>Invite users</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Dropdown Menu with Checkboxes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Dropdown Menu with Checkboxes
              <Badge variant="outline">Interactive</Badge>
            </CardTitle>
            <CardDescription>
              Dropdown menu with checkbox items for toggling settings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">View Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={statusChecked}
                  onCheckedChange={setStatusChecked}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={activityBarChecked}
                  onCheckedChange={setActivityBarChecked}
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={panelChecked}
                  onCheckedChange={setPanelChecked}
                >
                  Panel
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Browser Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={bookmarksChecked}
                  onCheckedChange={setBookmarksChecked}
                >
                  Show Bookmarks Bar
                  <DropdownMenuShortcut>⌘⇧B</DropdownMenuShortcut>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={urlsChecked}
                  onCheckedChange={setUrlsChecked}
                >
                  Show Full URLs
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Dropdown Menu with Radio Groups */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Dropdown Menu with Radio Groups
              <Badge variant="outline">Selection</Badge>
            </CardTitle>
            <CardDescription>
              Dropdown menu with radio groups for single-selection options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Preferences</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Theme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem value="light">
                    Light
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="system">
                    System
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={language}
                  onValueChange={setLanguage}
                >
                  <DropdownMenuRadioItem value="en">
                    English
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="fr">
                    French
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="de">
                    German
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="es">
                    Spanish
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>People</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={person}
                  onValueChange={setPerson}
                >
                  <DropdownMenuRadioItem value="pedro">
                    Pedro Duarte
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="colm">
                    Colm Tuite
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Size Variants */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Size Variants
              <Badge variant="outline">Responsive</Badge>
            </CardTitle>
            <CardDescription>
              Different dropdown menu sizes for various use cases.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Small Menu
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent size="sm">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Default Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Large Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent size="lg">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Disabled Items */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Disabled Items
              <Badge variant="outline">States</Badge>
            </CardTitle>
            <CardDescription>
              Dropdown menu with disabled items and various states.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">File Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <span>New File</span>
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Open File</span>
                  <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                  <span>Save</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <span>Save As...</span>
                  <DropdownMenuShortcut>⇧⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Export</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <span>Delete</span>
                  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Complex Menu */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Complex Menu
              <Badge variant="outline">Advanced</Badge>
            </CardTitle>
            <CardDescription>
              Advanced dropdown menu combining all features together.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>View Profile</span>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Account</DropdownMenuItem>
                    <DropdownMenuItem>Privacy</DropdownMenuItem>
                    <DropdownMenuItem>Security</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Notifications</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Preferences</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={bookmarksChecked}
                  onCheckedChange={setBookmarksChecked}
                >
                  Show Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={urlsChecked}
                  onCheckedChange={setUrlsChecked}
                >
                  Auto-save
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                  <DropdownMenuRadioItem value="light">
                    Light Mode
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="dark">
                    Dark Mode
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                  <span>Help</span>
                  <DropdownMenuShortcut>⌘?</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardContent>
        </Card>

        {/* Interactive Demo */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Interactive Demo
              <Badge variant="outline">Live State</Badge>
            </CardTitle>
            <CardDescription>
              Try different interactions and see state changes in real-time.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Current State:</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>Bookmarks: {bookmarksChecked ? "Shown" : "Hidden"}</li>
                  <li>URLs: {urlsChecked ? "Full" : "Short"}</li>
                  <li>Theme: {theme}</li>
                  <li>Language: {language}</li>
                  <li>
                    Person: {person === "pedro" ? "Pedro Duarte" : "Colm Tuite"}
                  </li>
                </ul>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setBookmarksChecked(true);
                    setUrlsChecked(false);
                    setTheme("system");
                    setLanguage("en");
                    setPerson("pedro");
                    setStatusChecked(false);
                    setActivityBarChecked(true);
                    setPanelChecked(false);
                  }}
                >
                  Reset All Settings
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
            Learn how to implement and customize Dropdown Menu components based
            on official RadixUI patterns.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">Basic Implementation</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">With Submenus</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`<DropdownMenuSub>
  <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Sub item 1</DropdownMenuItem>
    <DropdownMenuItem>Sub item 2</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">With Checkbox Items</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`<DropdownMenuCheckboxItem 
  checked={isChecked} 
  onCheckedChange={setIsChecked}
>
  Show notifications
</DropdownMenuCheckboxItem>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">With Radio Groups</h4>
            <pre className="text-xs bg-muted p-4 rounded-md overflow-x-auto">
              {`<DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
  <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`}
            </pre>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-2">Available Features</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Content Sizes:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>
                    • <code>sm</code> - Small menu
                  </li>
                  <li>
                    • <code>default</code> - Standard menu
                  </li>
                  <li>
                    • <code>lg</code> - Large menu
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Key Features:</p>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Controlled/uncontrolled state</li>
                  <li>• Submenus with configurable direction</li>
                  <li>• Items, labels, groups</li>
                  <li>• Checkable items (single/multiple)</li>
                  <li>• Modal and non-modal modes</li>
                  <li>• Full keyboard navigation</li>
                  <li>• Typeahead support</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
