import type React from "react"
import Link from "next/link"
import {
  BookOpen,
  Home,
  Users,
  UserCheck,
  Calendar,
  CreditCard,
  BookMarked,
  Bell,
  Settings,
  Menu,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/dashboard/students"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Users className="h-5 w-5" />
                Students
              </Link>
              <Link
                href="/dashboard/classes"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <GraduationCap className="h-5 w-5" />
                Classes
              </Link>
              <Link
                href="/dashboard/teachers"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <UserCheck className="h-5 w-5" />
                Teachers
              </Link>
              <Link
                href="/dashboard/attendance"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Calendar className="h-5 w-5" />
                Attendance
              </Link>
              <Link
                href="/dashboard/fees"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <CreditCard className="h-5 w-5" />
                Fees
              </Link>
              <Link
                href="/dashboard/library"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <BookMarked className="h-5 w-5" />
                Library
              </Link>
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <BookOpen className="h-6 w-6" />
          <span>Elimu Excellence Academy</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:gap-4 md:px-4">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="/dashboard/students"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <Users className="h-5 w-5" />
            Students
          </Link>
          <Link
            href="/dashboard/classes"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <GraduationCap className="h-5 w-5" />
            Classes
          </Link>
          <Link
            href="/dashboard/teachers"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <UserCheck className="h-5 w-5" />
            Teachers
          </Link>
          <Link
            href="/dashboard/attendance"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <Calendar className="h-5 w-5" />
            Attendance
          </Link>
          <Link
            href="/dashboard/fees"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <CreditCard className="h-5 w-5" />
            Fees
          </Link>
          <Link
            href="/dashboard/library"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
          >
            <BookMarked className="h-5 w-5" />
            Library
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JM</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-muted/40 md:block">
          <nav className="grid gap-2 p-4 text-sm">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/dashboard/students"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Users className="h-4 w-4" />
              Students
            </Link>
            <Link
              href="/dashboard/classes"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <GraduationCap className="h-4 w-4" />
              Classes
            </Link>
            <Link
              href="/dashboard/teachers"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <UserCheck className="h-4 w-4" />
              Teachers
            </Link>
            <Link
              href="/dashboard/attendance"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Calendar className="h-4 w-4" />
              Attendance
            </Link>
            <Link
              href="/dashboard/fees"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <CreditCard className="h-4 w-4" />
              Fees
            </Link>
            <Link
              href="/dashboard/library"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <BookMarked className="h-4 w-4" />
              Library
            </Link>
            <Link
              href="/dashboard/settings"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  )
}
