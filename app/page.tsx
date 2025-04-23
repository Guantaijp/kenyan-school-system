import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, UserCheck, Calendar, CreditCard, BookMarked } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>Elimu Excellence Academy</span>
        </Link>
        <nav className="ml-auto flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1.5">
              <h1 className="text-2xl font-bold tracking-tight">Welcome to Elimu Excellence Academy</h1>
              <p className="text-muted-foreground">
                Manage your school efficiently with our comprehensive management system.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,247</div>
                <p className="text-xs text-muted-foreground">Total enrolled students</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Teachers</CardTitle>
                <UserCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground">Faculty members</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94.2%</div>
                <p className="text-xs text-muted-foreground">Average attendance rate</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/dashboard/students">
              <Card className="h-full cursor-pointer transition-colors hover:bg-muted/50">
                <CardHeader>
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Students</CardTitle>
                  <CardDescription>Manage student records</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/dashboard/teachers">
              <Card className="h-full cursor-pointer transition-colors hover:bg-muted/50">
                <CardHeader>
                  <UserCheck className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Teachers</CardTitle>
                  <CardDescription>Manage teacher information</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/dashboard/fees">
              <Card className="h-full cursor-pointer transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CreditCard className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Fees</CardTitle>
                  <CardDescription>Track fee payments</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/dashboard/library">
              <Card className="h-full cursor-pointer transition-colors hover:bg-muted/50">
                <CardHeader>
                  <BookMarked className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Library</CardTitle>
                  <CardDescription>Manage library resources</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t py-4 px-4 md:px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Elimu Excellence Academy. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
