import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Users,
  UserCheck,
  Calendar,
  CreditCard,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  BookOpen,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Mwangi. Here's an overview of your school.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>Generate Reports</Button>
        </div>
      </div>
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="h-3 w-3" />
                    4.3%
                  </span>
                  from last term
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Teachers</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="h-3 w-3" />
                    2.5%
                  </span>
                  from last term
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance Rate</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-emerald-500 flex items-center">
                    <ArrowUpRight className="h-3 w-3" />
                    1.2%
                  </span>
                  from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Fee Collection</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">KSh 8.2M</div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <span className="text-rose-500 flex items-center">
                    <ArrowDownRight className="h-3 w-3" />
                    3.1%
                  </span>
                  outstanding balance
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                  <div className="text-center">
                    <TrendingUp className="h-10 w-10 mx-auto text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Performance chart will appear here</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">End of Term Exams</p>
                      <p className="text-xs text-muted-foreground">April 28 - May 12, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Science Fair</p>
                      <p className="text-xs text-muted-foreground">May 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Parent-Teacher Meeting</p>
                      <p className="text-xs text-muted-foreground">May 20, 2025</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Detailed analytics about school performance and metrics.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                <div className="text-center">
                  <TrendingUp className="h-10 w-10 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-sm text-muted-foreground">Analytics data will appear here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reports</CardTitle>
              <CardDescription>Generate and view various school reports.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-base">Academic Report</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground">Performance reports by class and subject</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-base">Financial Report</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground">Fee collection and expenditure reports</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-base">Attendance Report</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground">Student and teacher attendance reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
