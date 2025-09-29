import { AlertCircle, CheckCircle } from 'lucide-react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/modules/alert";

export default function AlertPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Alert</h1>
      <p className="text-muted-foreground mb-8">
        A callout component that draws attention to important information or
        status updates.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="space-y-4 p-4 border rounded-lg">
            <Alert>
              <AlertCircle className="size-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertCircle className="size-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">With Icon</h2>
          <div className="space-y-4 p-4 border rounded-lg">
            <Alert>
              <CheckCircle className="size-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>
          </div>
        </section>
      </div>
    </div>
  );
}
