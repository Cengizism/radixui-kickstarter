import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox/checkbox';
import { createFileRoute } from '@tanstack/react-router';
import { Input } from '@/components/ui/input/input';
import { Label } from '@/components/ui/label/label';
import { Textarea } from '@/components/ui/textarea/textarea';
import { Topbar } from '@/components/layout/topbar';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import {
  AlertCircle,
  CheckCircle,
  User,
  Settings,
  Database,
} from "lucide-react";

export const Route = createFileRoute("/templates/advanced")({
  component: AdvancedRoute,
});

function AdvancedRoute() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    description: "",
    notifications: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <Topbar />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Advanced Configuration</h1>
              <p className="text-muted-foreground">
                Manage system settings and user preferences
              </p>
            </div>
            <Badge variant="secondary">
              <Settings className="h-4 w-4 mr-1" />
              Configuration
            </Badge>
          </div>

          {showSuccess && (
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your configuration has been saved successfully.
              </AlertDescription>
            </Alert>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {/* User Configuration Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  User Configuration
                </CardTitle>
                <CardDescription>
                  Configure user settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select
                      value={formData.role}
                      onValueChange={(value: string) =>
                        handleInputChange("role", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="viewer">Viewer</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Enter a brief description"
                      value={formData.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        handleInputChange("description", e.target.value)
                      }
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="notifications"
                      checked={formData.notifications}
                      onCheckedChange={(checked) =>
                        handleInputChange("notifications", checked)
                      }
                    />
                    <Label htmlFor="notifications">
                      Enable email notifications
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Save Configuration
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* System Status */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    System Status
                  </CardTitle>
                  <CardDescription>
                    Current system health and metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">CPU Usage</span>
                      <Badge variant="outline">32%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Memory</span>
                      <Badge variant="outline">4.2GB / 16GB</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Storage</span>
                      <Badge variant="outline">156GB / 500GB</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Network</span>
                      <Badge variant="secondary">Online</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  System maintenance is scheduled for tonight at 2:00 AM UTC.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Recent Activities Table */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Overview of recent system activities and user actions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Action</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-01-15 14:32</TableCell>
                    <TableCell>john.doe@example.com</TableCell>
                    <TableCell>Login</TableCell>
                    <TableCell>
                      <Badge variant="secondary">Success</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-01-15 14:28</TableCell>
                    <TableCell>admin@system.com</TableCell>
                    <TableCell>Config Update</TableCell>
                    <TableCell>
                      <Badge>Complete</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-01-15 14:15</TableCell>
                    <TableCell>jane.smith@example.com</TableCell>
                    <TableCell>Data Export</TableCell>
                    <TableCell>
                      <Badge variant="destructive">Failed</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-01-15 14:10</TableCell>
                    <TableCell>system</TableCell>
                    <TableCell>Backup</TableCell>
                    <TableCell>
                      <Badge variant="outline">Running</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
