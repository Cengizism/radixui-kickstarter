import AdvancedConfig from './components/AdvancedConfig';
import { Badge } from './components/ui/badge';
import { Button } from './components/ui/button';
import { Progress } from './components/ui/progress';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
    } from './components/ui/tabs';
import { useState } from 'react';
import {
	SidebarProvider,
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuItem,
	SidebarMenuButton,
	SidebarTrigger,
} from './components/ui/sidebar';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './components/ui/card';
import {
	Home,
	Settings,
	Users,
	BarChart3,
	FileText,
	Bell,
	Search,
	Plus,
	Download,
	Upload,
	Zap,
	Activity,
	Sliders,
} from 'lucide-react';

export default function App() {
	const [currentPage, setCurrentPage] = useState('dashboard');

	const renderMainContent = () => {
		if (currentPage === 'advanced') {
			return <AdvancedConfig />;
		}

		if (currentPage === 'analytics') {
			return (
				<div className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>Analytics</CardTitle>
							<CardDescription>System analytics and metrics</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Analytics content would go here...
							</p>
						</CardContent>
					</Card>
				</div>
			);
		}

		if (currentPage === 'users') {
			return (
				<div className="space-y-6">
					<Card>
						<CardHeader>
							<CardTitle>User Management</CardTitle>
							<CardDescription>Manage system users</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								User management content would go here...
							</p>
						</CardContent>
					</Card>
				</div>
			);
		}

		// Default dashboard content
		return (
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
								+2% from last hour
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Performance</CardTitle>
							<Zap className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">12.3ms</div>
							<p className="text-xs text-muted-foreground">
								-5% from last hour
							</p>
						</CardContent>
					</Card>
				</div>

				{/* Progress Section */}
				<Card>
					<CardHeader>
						<CardTitle>System Operations</CardTitle>
						<CardDescription>
							Current progress of running operations
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium">Data Processing</span>
								<Badge variant="secondary">In Progress</Badge>
							</div>
							<Progress value={75} />
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium">Backup Operation</span>
								<Badge variant="outline">Scheduled</Badge>
							</div>
							<Progress value={25} />
						</div>

						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<span className="text-sm font-medium">System Update</span>
								<Badge>Complete</Badge>
							</div>
							<Progress value={100} />
						</div>
					</CardContent>
				</Card>

				{/* Tabs Example */}
				<Card>
					<CardHeader>
						<CardTitle>Project Management</CardTitle>
						<CardDescription>
							Manage your projects and configurations
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="overview" className="w-full">
							<TabsList className="grid w-full grid-cols-4">
								<TabsTrigger value="overview">Overview</TabsTrigger>
								<TabsTrigger value="analytics">Analytics</TabsTrigger>
								<TabsTrigger value="reports">Reports</TabsTrigger>
								<TabsTrigger value="settings">Settings</TabsTrigger>
							</TabsList>

							<TabsContent value="overview" className="space-y-4">
								<div className="grid gap-4 md:grid-cols-2">
									<Card>
										<CardHeader>
											<CardTitle className="text-base">
												Recent Activity
											</CardTitle>
										</CardHeader>
										<CardContent>
											<div className="space-y-2">
												<div className="flex items-center justify-between">
													<span className="text-sm">Project Alpha updated</span>
													<Badge variant="outline">2h ago</Badge>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-sm">New user registered</span>
													<Badge variant="outline">4h ago</Badge>
												</div>
												<div className="flex items-center justify-between">
													<span className="text-sm">System maintenance</span>
													<Badge variant="outline">1d ago</Badge>
												</div>
											</div>
										</CardContent>
									</Card>

									<Card>
										<CardHeader>
											<CardTitle className="text-base">Quick Actions</CardTitle>
										</CardHeader>
										<CardContent className="flex flex-col gap-2">
											<Button className="w-full justify-start">
												<Upload className="h-4 w-4 mr-2" />
												Upload Files
											</Button>
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												<Download className="h-4 w-4 mr-2" />
												Export Data
											</Button>
											<Button
												variant="secondary"
												className="w-full justify-start"
											>
												<Settings className="h-4 w-4 mr-2" />
												Configure
											</Button>
										</CardContent>
									</Card>
								</div>
							</TabsContent>

							<TabsContent value="analytics" className="space-y-4">
								<Card>
									<CardHeader>
										<CardTitle className="text-base">
											Analytics Dashboard
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground">
											Analytics data and charts would be displayed here.
										</p>
										<div className="mt-4 space-y-2">
											<div className="flex items-center justify-between">
												<span className="text-sm">Page Views</span>
												<span className="text-sm font-medium">12,847</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-sm">Unique Visitors</span>
												<span className="text-sm font-medium">3,241</span>
											</div>
											<div className="flex items-center justify-between">
												<span className="text-sm">Bounce Rate</span>
												<span className="text-sm font-medium">24.3%</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="reports">
								<Card>
									<CardHeader>
										<CardTitle className="text-base">
											Generate Reports
										</CardTitle>
									</CardHeader>
									<CardContent>
										<p className="text-sm text-muted-foreground mb-4">
											Create and download various reports.
										</p>
										<div className="space-y-2">
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												Monthly Report
											</Button>
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												User Activity Report
											</Button>
											<Button
												variant="outline"
												className="w-full justify-start"
											>
												System Performance Report
											</Button>
										</div>
									</CardContent>
								</Card>
							</TabsContent>

							<TabsContent value="settings">
								<Card>
									<CardHeader>
										<CardTitle className="text-base">
											Application Settings
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="space-y-2">
												<label className="text-sm font-medium">Theme</label>
												<div className="flex gap-2">
													<Badge variant="default">Light</Badge>
													<Badge variant="outline">Dark</Badge>
													<Badge variant="outline">System</Badge>
												</div>
											</div>
											<div className="space-y-2">
												<label className="text-sm font-medium">Language</label>
												<div className="flex gap-2">
													<Badge variant="default">English</Badge>
													<Badge variant="outline">Spanish</Badge>
													<Badge variant="outline">French</Badge>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		);
	};

	return (
		<SidebarProvider>
			<div className="flex h-screen w-full bg-background">
				<Sidebar>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Application</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'dashboard'}
											onClick={() => setCurrentPage('dashboard')}
										>
											<Home className="h-4 w-4" />
											<span>Dashboard</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'analytics'}
											onClick={() => setCurrentPage('analytics')}
										>
											<BarChart3 className="h-4 w-4" />
											<span>Analytics</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'users'}
											onClick={() => setCurrentPage('users')}
										>
											<Users className="h-4 w-4" />
											<span>Users</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'documents'}
											onClick={() => setCurrentPage('documents')}
										>
											<FileText className="h-4 w-4" />
											<span>Documents</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>

						<SidebarGroup>
							<SidebarGroupLabel>Settings</SidebarGroupLabel>
							<SidebarGroupContent>
								<SidebarMenu>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'preferences'}
											onClick={() => setCurrentPage('preferences')}
										>
											<Settings className="h-4 w-4" />
											<span>Preferences</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'advanced'}
											onClick={() => setCurrentPage('advanced')}
										>
											<Sliders className="h-4 w-4" />
											<span>Advanced Config</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
									<SidebarMenuItem>
										<SidebarMenuButton
											isActive={currentPage === 'notifications'}
											onClick={() => setCurrentPage('notifications')}
										>
											<Bell className="h-4 w-4" />
											<span>Notifications</span>
										</SidebarMenuButton>
									</SidebarMenuItem>
								</SidebarMenu>
							</SidebarGroupContent>
						</SidebarGroup>
					</SidebarContent>
				</Sidebar>

				<div className="flex-1 flex flex-col overflow-hidden">
					{/* Header */}
					<header className="flex h-14 items-center gap-4 border-b bg-background px-6">
						<SidebarTrigger />
						<div className="flex flex-1 items-center gap-4">
							<h1 className="text-lg font-semibold">
								{currentPage === 'dashboard'
									? 'Dashboard'
									: currentPage === 'analytics'
									? 'Analytics'
									: currentPage === 'users'
									? 'Users'
									: currentPage === 'documents'
									? 'Documents'
									: currentPage === 'preferences'
									? 'Preferences'
									: currentPage === 'advanced'
									? 'Advanced Configuration'
									: currentPage === 'notifications'
									? 'Notifications'
									: 'Dashboard'}
							</h1>
						</div>
						<div className="flex items-center gap-2">
							<Button variant="ghost" size="icon">
								<Search className="h-4 w-4" />
							</Button>
							<Button variant="ghost" size="icon">
								<Bell className="h-4 w-4" />
							</Button>
							<Button>
								<Plus className="h-4 w-4 mr-2" />
								New Project
							</Button>
						</div>
					</header>

					{/* Main Content Area */}
					<main className="flex-1 overflow-auto p-6">
						{renderMainContent()}
					</main>
				</div>
			</div>
		</SidebarProvider>
	);
}
