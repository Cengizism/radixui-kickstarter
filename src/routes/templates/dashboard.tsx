import { AppHeader } from '@/components/AppSidebar';
import { Badge } from '@/components/ui/elements/badge';
import { Button } from '@/components/ui/elements/button';
import { createFileRoute } from '@tanstack/react-router';
import { Progress } from '@/components/ui/elements/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/modules/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/modules/tabs";
import {
  Users,
  FileText,
  Activity,
  Zap,
  Upload,
  Download,
  Settings,
  Plus,
} from "lucide-react";

export const Route = createFileRoute("/templates/dashboard")({
  component: DashboardRoute,
});

function DashboardRoute() {
  return (
    <>
      <AppHeader />
      <main className="flex-1 overflow-auto p-6">
        <div className="space-y-6">
          {/* Status Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Projects
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,350</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +10.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  System Health
                </CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">98.5%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Performance
                </CardTitle>
                <Zap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground">
                  +0.5% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="grid gap-6 lg:grid-cols-4">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    Your project statistics for this month
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        React Projects
                      </span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Vue Projects</span>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        Angular Projects
                      </span>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <Progress value={30} />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">Project created</p>
                      <p className="text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">Deployment successful</p>
                      <p className="text-muted-foreground">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                    <div className="text-sm">
                      <p className="font-medium">User feedback received</p>
                      <p className="text-muted-foreground">6 hours ago</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    New Project
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Files
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs Example */}
          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
              <CardDescription>
                Manage your projects and track progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="active" className="w-full">
                <TabsList>
                  <TabsTrigger value="active">Active Projects</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="archived">Archived</TabsTrigger>
                </TabsList>
                <TabsContent value="active" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Active Projects</h3>
                    <Badge variant="secondary">12 active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    You have 12 active projects that need attention.
                  </p>
                </TabsContent>
                <TabsContent value="completed" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Completed Projects</h3>
                    <Badge variant="default">45 completed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Great job! You have completed 45 projects this year.
                  </p>
                </TabsContent>
                <TabsContent value="archived" className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Archived Projects</h3>
                    <Badge variant="outline">8 archived</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    8 projects have been archived for future reference.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
