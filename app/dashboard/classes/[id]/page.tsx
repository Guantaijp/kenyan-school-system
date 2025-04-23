"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ArrowLeft, Search, MoreHorizontal, Users, Calendar, BookOpen, Clock, Edit, Download } from "lucide-react"

// Mock data for a class
const classData = {
  id: "C007",
  name: "Form 4A",
  level: "Form 4",
  stream: "A",
  students: 34,
  classTeacher: "Prof. John Kamau",
  room: "Block D - Room 401",
  subjects: [
    { name: "Mathematics", teacher: "Prof. John Kamau", periods: 5 },
    { name: "English", teacher: "Mrs. Jane Otieno", periods: 5 },
    { name: "Physics", teacher: "Mr. Hassan Ali", periods: 4 },
    { name: "Chemistry", teacher: "Mr. David Omondi", periods: 4 },
    { name: "Biology", teacher: "Ms. Grace Wanjiru", periods: 4 },
    { name: "Geography", teacher: "Mrs. Fatuma Mohamed", periods: 3 },
    { name: "History", teacher: "Mr. Peter Mwangi", periods: 3 },
  ],
  students: [
    {
      id: "S001",
      name: "Wanjiku Kamau",
      admissionNumber: "ADM2023001",
      gender: "Female",
      attendance: 95,
      feeBalance: 5000,
      status: "Active",
    },
    {
      id: "S004",
      name: "Daniel Kiprop",
      admissionNumber: "ADM2023004",
      gender: "Male",
      attendance: 92,
      feeBalance: 0,
      status: "Active",
    },
    {
      id: "S010",
      name: "Samuel Kipchirchir",
      admissionNumber: "ADM2023010",
      gender: "Male",
      attendance: 88,
      feeBalance: 8000,
      status: "Active",
    },
    {
      id: "S015",
      name: "Elizabeth Muthoni",
      admissionNumber: "ADM2023015",
      gender: "Female",
      attendance: 97,
      feeBalance: 2000,
      status: "Active",
    },
    {
      id: "S020",
      name: "Michael Odhiambo",
      admissionNumber: "ADM2023020",
      gender: "Male",
      attendance: 90,
      feeBalance: 0,
      status: "Active",
    },
    {
      id: "S025",
      name: "Catherine Wangari",
      admissionNumber: "ADM2023025",
      gender: "Female",
      attendance: 94,
      feeBalance: 0,
      status: "Active",
    },
    {
      id: "S030",
      name: "Joseph Maina",
      admissionNumber: "ADM2023030",
      gender: "Male",
      attendance: 85,
      feeBalance: 10000,
      status: "Active",
    },
  ],
  schedule: [
    {
      day: "Monday",
      periods: [
        "8:00 AM - 9:00 AM: Mathematics",
        "9:00 AM - 10:00 AM: English",
        "10:30 AM - 11:30 AM: Physics",
        "11:30 AM - 12:30 PM: Chemistry",
        "2:00 PM - 3:00 PM: Biology",
      ],
    },
    {
      day: "Tuesday",
      periods: [
        "8:00 AM - 9:00 AM: Geography",
        "9:00 AM - 10:00 AM: History",
        "10:30 AM - 11:30 AM: Mathematics",
        "11:30 AM - 12:30 PM: English",
        "2:00 PM - 3:00 PM: Physics",
      ],
    },
    {
      day: "Wednesday",
      periods: [
        "8:00 AM - 9:00 AM: Chemistry",
        "9:00 AM - 10:00 AM: Biology",
        "10:30 AM - 11:30 AM: Geography",
        "11:30 AM - 12:30 PM: History",
        "2:00 PM - 3:00 PM: Mathematics",
      ],
    },
    {
      day: "Thursday",
      periods: [
        "8:00 AM - 9:00 AM: English",
        "9:00 AM - 10:00 AM: Physics",
        "10:30 AM - 11:30 AM: Chemistry",
        "11:30 AM - 12:30 PM: Biology",
        "2:00 PM - 3:00 PM: Geography",
      ],
    },
    {
      day: "Friday",
      periods: [
        "8:00 AM - 9:00 AM: History",
        "9:00 AM - 10:00 AM: Mathematics",
        "10:30 AM - 11:30 AM: English",
        "11:30 AM - 12:30 PM: Physics",
        "2:00 PM - 3:00 PM: Chemistry",
      ],
    },
  ],
}

export default function ClassDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = classData.students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/classes">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{classData.name}</h1>
            <p className="text-muted-foreground">
              {classData.room} • Class Teacher: {classData.classTeacher}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/classes/${params.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Class
            </Link>
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export Class Data
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.students.length}</div>
            <p className="text-xs text-muted-foreground">Enrolled in this class</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subjects</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.subjects.length}</div>
            <p className="text-xs text-muted-foreground">Taught in this class</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                classData.students.reduce((sum, student) => sum + student.attendance, 0) / classData.students.length,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Average attendance rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fee Collection</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(
                (classData.students.filter((s) => s.feeBalance === 0).length / classData.students.length) * 100,
              )}
              %
            </div>
            <p className="text-xs text-muted-foreground">Students with full payment</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="students">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="subjects">Subjects</TabsTrigger>
          <TabsTrigger value="timetable">Timetable</TabsTrigger>
        </TabsList>
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Students in {classData.name}</CardTitle>
                <CardDescription>Manage students enrolled in this class</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search students..."
                    className="pl-8 md:w-[300px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button>
                  <Users className="mr-2 h-4 w-4" />
                  Add Student
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Admission No.</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Attendance</TableHead>
                    <TableHead>Fee Balance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.admissionNumber}</TableCell>
                      <TableCell>{student.gender}</TableCell>
                      <TableCell>{student.attendance}%</TableCell>
                      <TableCell>
                        {student.feeBalance === 0 ? (
                          <span className="text-green-600 font-medium">Paid</span>
                        ) : (
                          <span className="text-red-600 font-medium">KSh {student.feeBalance.toLocaleString()}</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            student.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {student.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Link href={`/dashboard/students/${student.id}`} className="w-full">
                                View details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Link href={`/dashboard/students/${student.id}/edit`} className="w-full">
                                Edit student
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Remove from class</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="subjects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Subjects for {classData.name}</CardTitle>
              <CardDescription>Subjects taught in this class and assigned teachers</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Teacher</TableHead>
                    <TableHead>Periods per Week</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {classData.subjects.map((subject, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{subject.name}</TableCell>
                      <TableCell>{subject.teacher}</TableCell>
                      <TableCell>{subject.periods}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="timetable" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Class Timetable</CardTitle>
              <CardDescription>Weekly schedule for {classData.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {classData.schedule.map((day, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      {day.day}
                    </h3>
                    <div className="rounded-md border">
                      {day.periods.map((period, idx) => (
                        <div key={idx} className={`p-3 text-sm ${idx < day.periods.length - 1 ? "border-b" : ""}`}>
                          {period}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
