import { Button } from './button';
import { useState } from 'react';
import {
  AlertTriangle,
  Trash2,
  LogOut,
  Download,
  Save,
  AlertCircle,
  CheckCircle,
  Info,
  X,
  UserX,
  FileX,
  ShieldAlert,
} from "lucide-react";
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
} from "./alert-dialog";

export default {
  title: "UI/AlertDialog",
  component: AlertDialog,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "default", "lg", "full"],
    },
  },
};

// Default alert dialog
export const Default = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Show Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Size variations
export const SizeVariations = () => (
  <div className="flex flex-wrap gap-4">
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          Small
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Small Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This is a small alert dialog with limited content.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Default</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Default Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This is the default size alert dialog with standard content length.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Large</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="lg">
        <AlertDialogHeader>
          <AlertDialogTitle>Large Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This is a large alert dialog that can accommodate more content and
            longer descriptions. It's perfect for complex confirmations or
            detailed information that needs user attention.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Full Width</Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="full">
        <AlertDialogHeader>
          <AlertDialogTitle>Full Width Dialog</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog takes up most of the viewport width, making it suitable
            for complex forms or detailed content that requires more horizontal
            space.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

// Delete confirmation
export const DeleteConfirmation = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="destructive">
        <Trash2 className="mr-2 h-4 w-4" />
        Delete Account
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          Delete Account
        </AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to delete your account? This will permanently
          delete your account and remove your data from our servers. This action
          cannot be undone.
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
);

// Sign out confirmation
export const SignOutConfirmation = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="ghost">
        <LogOut className="mr-2 h-4 w-4" />
        Sign Out
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Sign Out</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to sign out? You'll need to sign in again to
          access your account.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Stay signed in</AlertDialogCancel>
        <AlertDialogAction>Sign out</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Save changes confirmation
export const SaveChangesConfirmation = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">
        <X className="mr-2 h-4 w-4" />
        Close Editor
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <Save className="h-5 w-5" />
          Unsaved Changes
        </AlertDialogTitle>
        <AlertDialogDescription>
          You have unsaved changes. Do you want to save your changes before
          closing?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Don't save</AlertDialogCancel>
        <AlertDialogAction>Save changes</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Information dialog
export const InformationDialog = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">
        <Info className="mr-2 h-4 w-4" />
        Show Info
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-500" />
          Important Information
        </AlertDialogTitle>
        <AlertDialogDescription>
          Your subscription will expire in 3 days. Please renew your
          subscription to continue enjoying all features without interruption.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Remind me later</AlertDialogCancel>
        <AlertDialogAction>Renew now</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Success confirmation
export const SuccessConfirmation = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Download Report
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-green-500" />
          Download Complete
        </AlertDialogTitle>
        <AlertDialogDescription>
          Your report has been successfully generated and downloaded to your
          device. The file "monthly-report-2024.pdf" is now available in your
          downloads folder.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>Got it</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Warning dialog
export const WarningDialog = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">
        <ShieldAlert className="mr-2 h-4 w-4" />
        Security Warning
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          Security Warning
        </AlertDialogTitle>
        <AlertDialogDescription>
          We detected unusual activity on your account. For your security, we
          recommend changing your password and reviewing your account activity.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Review later</AlertDialogCancel>
        <AlertDialogAction>Change password</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Multiple actions
export const MultipleActions = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">
        <UserX className="mr-2 h-4 w-4" />
        Remove User
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Remove Team Member</AlertDialogTitle>
        <AlertDialogDescription>
          What would you like to do with John Doe's account and associated data?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className="sm:space-x-0 sm:space-y-2 sm:flex-col">
        <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
          Remove and delete data
        </AlertDialogAction>
        <AlertDialogAction className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
          Remove but keep data
        </AlertDialogAction>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// File operations
export const FileOperations = () => (
  <div className="flex gap-4">
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          <FileX className="mr-2 h-4 w-4" />
          Delete File
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete File</AlertDialogTitle>
          <AlertDialogDescription>
            Delete "document.pdf"? This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size="sm">
          Replace File
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Replace File</AlertDialogTitle>
          <AlertDialogDescription>
            A file with the same name already exists. Do you want to replace it?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep both</AlertDialogCancel>
          <AlertDialogAction>Replace</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

// Controlled dialog
export const ControlledDialog = () => {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState<string>("");

  const handleAction = () => {
    setResult("Action confirmed");
    setOpen(false);
  };

  const handleCancel = () => {
    setResult("Action cancelled");
    setOpen(false);
  };

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open Controlled Dialog</Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
            <AlertDialogDescription>
              This dialog is controlled by external state. Click outside or
              press Escape to close, or use the buttons below.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAction}>
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className="text-sm text-muted-foreground">
        Dialog is: <strong>{open ? "Open" : "Closed"}</strong>
        {result && (
          <>
            <br />
            Last result: <strong>{result}</strong>
          </>
        )}
      </div>
    </div>
  );
};

// Custom styled dialogs
export const CustomStyledDialogs = () => (
  <div className="flex gap-4">
    {/* Error style */}
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="sm">
          Error
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-destructive">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-destructive">
            Error Occurred
          </AlertDialogTitle>
          <AlertDialogDescription>
            Something went wrong. Please try again later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Try Again
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    {/* Success style */}
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700" size="sm">
          Success
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-green-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-green-700">
            Success!
          </AlertDialogTitle>
          <AlertDialogDescription>
            Your changes have been saved successfully.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-green-600 hover:bg-green-700">
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

    {/* Warning style */}
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-amber-600 hover:bg-amber-700" size="sm">
          Warning
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-amber-200">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-amber-700">
            Warning
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action may have unintended consequences.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
            Proceed
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
);

// Long content dialog
export const LongContentDialog = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Long Content</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size="lg">
      <AlertDialogHeader>
        <AlertDialogTitle>Terms of Service</AlertDialogTitle>
        <AlertDialogDescription>
          Please read and accept our terms of service before continuing.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <div className="max-h-[60vh] overflow-y-auto space-y-4 text-sm">
        <div>
          <h4 className="font-semibold mb-2">1. Acceptance of Terms</h4>
          <p className="text-muted-foreground">
            By accessing and using this service, you accept and agree to be
            bound by the terms and provision of this agreement.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">2. Use License</h4>
          <p className="text-muted-foreground">
            Permission is granted to temporarily download one copy of the
            materials on this website for personal, non-commercial transitory
            viewing only.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">3. Disclaimer</h4>
          <p className="text-muted-foreground">
            The materials on this website are provided on an 'as is' basis. We
            make no warranties, expressed or implied, and hereby disclaim and
            negate all other warranties including without limitation.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">4. Limitations</h4>
          <p className="text-muted-foreground">
            In no event shall the company or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use.
          </p>
        </div>
      </div>
      <AlertDialogFooter>
        <AlertDialogCancel>Decline</AlertDialogCancel>
        <AlertDialogAction>Accept Terms</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Interactive playground
export const Playground = (args: {
  size?: "sm" | "default" | "lg" | "full";
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </AlertDialogTrigger>
    <AlertDialogContent size={args.size}>
      <AlertDialogHeader>
        <AlertDialogTitle>Playground Dialog</AlertDialogTitle>
        <AlertDialogDescription>
          This is a playground dialog where you can test different sizes and
          configurations. Use the controls to adjust the dialog properties.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

Playground.args = {
  size: "default",
};
