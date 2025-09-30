import * as React from 'react';
import { AppHeader } from '@/components/AppHeader';
import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog/alert-dialog";

export const Route = createFileRoute("/docs/alert-dialog")({
  component: AlertDialogRoute,
});

function AlertDialogRoute() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Alert Dialog</h1>
          <p className="text-muted-foreground mb-8">
            A modal dialog that interrupts the user with important content and
            expects a response.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
              <p className="text-sm text-muted-foreground mb-4">
                A destructive action that requires user confirmation.
              </p>
              <div className="p-4 border rounded-lg">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Yes, delete account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Different Sizes</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Alert dialogs come in different sizes to accommodate various
                content lengths.
              </p>
              <div className="p-4 border rounded-lg space-y-4">
                <div className="flex flex-wrap gap-3">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Small Alert
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent size="sm">
                      <AlertDialogHeader>
                        <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to proceed?
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline">Default Alert</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Important Notice</AlertDialogTitle>
                        <AlertDialogDescription>
                          This is a standard alert dialog with default sizing.
                          It provides enough space for most use cases while
                          maintaining good proportions.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Acknowledge</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Large Alert
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent size="lg">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Extended Information Required
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This larger alert dialog is suitable for more complex
                          content that requires additional space. It can
                          accommodate longer descriptions, multiple paragraphs,
                          or additional UI elements while maintaining
                          readability and proper spacing throughout the dialog.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>I Understand</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Controlled State</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Use controlled props to programmatically manage the dialog
                state, useful for async operations.
              </p>
              <div className="p-4 border rounded-lg">
                <AlertDialog open={open} onOpenChange={setOpen}>
                  <AlertDialogTrigger asChild>
                    <Button>Process Data</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Process User Data?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will process all user data in the background. This
                        operation may take a few moments to complete.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel disabled={loading}>
                        Cancel
                      </AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(e) => {
                          e.preventDefault();
                          handleAsyncAction();
                        }}
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Start Processing"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Different Action Types
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Alert dialogs for various scenarios with appropriate styling and
                messaging.
              </p>
              <div className="p-4 border rounded-lg space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {/* Warning Action */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        ⚠️ Reset Settings
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          ⚠️ Reset All Settings?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This will reset all your preferences to default
                          values. You can reconfigure them later in the settings
                          panel.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Keep Current</AlertDialogCancel>
                        <AlertDialogAction className="bg-yellow-600 hover:bg-yellow-700">
                          Reset Settings
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* Success Action */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        ✅ Publish Changes
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          ✅ Publish Changes?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Your changes will be published and visible to all
                          users immediately. Make sure you've reviewed
                          everything carefully.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Review Again</AlertDialogCancel>
                        <AlertDialogAction className="bg-green-600 hover:bg-green-700">
                          Publish Now
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>

                  {/* Information Action */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        ℹ️ System Update
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          ℹ️ System Update Available
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          A new system update is available with bug fixes and
                          performance improvements. The update will require a
                          brief service restart.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Update Later</AlertDialogCancel>
                        <AlertDialogAction className="bg-blue-600 hover:bg-blue-700">
                          Update Now
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Complex Content</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Alert dialogs can contain rich content including lists, forms,
                and detailed information.
              </p>
              <div className="p-4 border rounded-lg">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Project</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent size="lg">
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Delete Project "React Dashboard"?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will permanently delete the project and all
                        associated data. The following items will be removed:
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="py-4">
                      <div className="space-y-3">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <h5 className="font-medium mb-2 text-sm">
                            Project Data
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 47 source files</li>
                            <li>• 12 configuration files</li>
                            <li>• Build artifacts and dependencies</li>
                            <li>• Version history (23 commits)</li>
                          </ul>
                        </div>

                        <div className="bg-muted/50 p-3 rounded-lg">
                          <h5 className="font-medium mb-2 text-sm">
                            Team Data
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• 5 team member permissions</li>
                            <li>• 8 shared comments and reviews</li>
                            <li>• Collaboration history</li>
                          </ul>
                        </div>

                        <div className="bg-muted/50 p-3 rounded-lg">
                          <h5 className="font-medium mb-2 text-sm">
                            Deployment
                          </h5>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Production deployment will be stopped</li>
                            <li>• Custom domain will be released</li>
                            <li>• SSL certificates will be revoked</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                        <p className="text-sm font-medium text-destructive">
                          ⚠️ This action cannot be undone
                        </p>
                        <p className="text-sm text-destructive/80 mt-1">
                          Consider downloading a backup before proceeding.
                        </p>
                      </div>
                    </div>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete Forever
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Form Integration</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Alert dialogs can contain forms for additional user input before
                confirmation.
              </p>
              <div className="p-4 border rounded-lg">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Transfer Ownership</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Transfer Project Ownership
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        Enter the email address of the new owner. They will
                        receive full administrative access.
                      </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="py-4">
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            New Owner Email
                          </label>
                          <input
                            type="email"
                            placeholder="user@example.com"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                          />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="notify-owner"
                            className="h-4 w-4"
                          />
                          <label
                            htmlFor="notify-owner"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Notify new owner via email
                          </label>
                        </div>

                        <div className="p-3 bg-muted/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            <strong>Note:</strong> You will lose administrative
                            access to this project immediately after transfer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Transfer Ownership</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
