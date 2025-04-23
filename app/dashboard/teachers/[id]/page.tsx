"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Trash, Mail, Phone, BookOpen } from "lucide-react"

// Mock data for a teacher
const teacher = {
  id: "T001",
  name: "Prof. John Kamau",
  staffId: "STAFF001",
  subject: "Mathematics",
  phone: "0712345678",
  email: "john.kamau@elimuexcellence.ac.ke",
  address: "456 Kenyatta Avenue, Nairobi",
  county: "Nairobi",
  qualification: "Masters in Mathematics Education",
  joinDate: "2020-01-15",
  status: "Active",
  classes: ["Form 3A", "Form 3B", "Form 4A", "Form 4B"],
  subjects: [
    { name: "Mathematics", classes: ["Form 3A", "Form 3B", "Form 4A", "Form 4B"] },
    { name: "Physics", classes: ["Form 3A"] },
  ],
  schedule: [
    { day: "Monday", periods: ["8:00 AM - 9:00 AM (Form 3A)", "11:00 AM - 12:00 PM (Form 4A)"] },
    { day: "Tuesday", periods: ["10:00 AM - 11:00 AM (Form 3B)", "2:00 PM - 3:00 PM (Form 4B)"] },
    { day: "Wednesday", periods: ["8:00 AM - 9:00 AM (Form 4A)", "11:00 AM - 12:00 PM (Form 3A)"] },
    { day: "Thursday", periods: ["9:00 AM - 10:00 AM (Form 4B)", "2:00 PM - 3:00 PM (Form 3B)"] },
    { day: "Friday", periods: ["8:00 AM - 9:00 AM (Form 3A)", "10:00 AM - 11:00 AM (Form 4A)"] },
  ],
}

export default function TeacherDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    // Simulate deletion process
    setTimeout(() => {
      setIsDeleting(false)
      router.push("/dashboard/teachers")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/teachers">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Teacher Details</h1>
            <p className="text-muted-foreground">View and manage teacher information</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/teachers/${params.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Teacher
            </Link>
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            <Trash className="mr-2 h-4 w-4" />
            {isDeleting ? "Deleting..." : "Delete Teacher"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt={teacher.name} />
                <AvatarFallback>
                  {teacher.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl">{teacher.name}</CardTitle>
                <CardDescription>{teacher.staffId}</CardDescription>
                <Badge className="mt-2" variant={teacher.status === "Active" ? "default" : "destructive"}>
                  {teacher.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Subject</div>
              <div className="text-right font-medium">{teacher.subject}</div>
              <div className="text-muted-foreground">Qualification</div>
              <div className="text-right font-medium">{teacher.qualification}</div>
              <div className="text-muted-foreground">County</div>
              <div className="text-right font-medium">{teacher.county}</div>
              <div className="text-muted-foreground">Address</div>
              <div className="text-right font-medium">{teacher.address}</div>
              <div className="text-muted-foreground">Join Date</div>
              <div className="text-right font-medium">{teacher.joinDate}</div>
            </div>
            <div className="rounded-md bg-muted p-4">
              <h3 className="mb-2 font-semibold">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{teacher.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{teacher.email}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/teachers">View All Teachers</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/dashboard/teachers/${params.id}/edit`}>Edit Details</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-4 space-y-6">
          <Tabs defaultValue="classes">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="classes">Classes & Subjects</TabsTrigger>
              <TabsTrigger value="schedule">Schedule</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
            </TabsList>
            <TabsContent value="classes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Classes & Subjects</CardTitle>
                  <CardDescription>Classes and subjects taught by this teacher</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {teacher.subjects.map((subject, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{subject.name}</h3>
                        </div>
                        <div className="ml-7 flex flex-wrap gap-2">
                          {subject.classes.map((cls, idx) => (
                            <Badge key={idx} variant="outline">
                              {cls}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="schedule" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Teaching Schedule</CardTitle>
                  <CardDescription>Weekly teaching timetable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teacher.schedule.map((day, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <h3 className="font-semibold mb-2">{day.day}</h3>
                        <ul className="space-y-1 ml-5">
                          {day.periods.map((period, idx) => (
                            <li key={idx} className="text-sm">
                              {period}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="performance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Teacher performance and student outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md bg-muted p-4 text-center">
                    <p className="text-muted-foreground">
                      Performance data will be available after the end of term evaluation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
