"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Trash, Download, Mail, Phone } from "lucide-react"

// Mock data for a student
const student = {
  id: "S001",
  name: "Wanjiku Kamau",
  admissionNumber: "ADM2023001",
  class: "Form 4A",
  gender: "Female",
  dateOfBirth: "2007-05-12",
  county: "Nairobi",
  address: "123 Moi Avenue, Nairobi",
  parentName: "James Kamau",
  parentPhone: "0712345678",
  parentEmail: "james.kamau@example.com",
  joinDate: "2023-01-10",
  status: "Active",
  feeBalance: 5000,
  attendance: 95,
  subjects: [
    { name: "Mathematics", teacher: "Prof. John Kamau", grade: "A-" },
    { name: "English", teacher: "Mrs. Jane Otieno", grade: "B+" },
    { name: "Physics", teacher: "Mr. Hassan Ali", grade: "B" },
    { name: "Chemistry", teacher: "Mr. David Omondi", grade: "A" },
    { name: "Biology", teacher: "Ms. Grace Wanjiru", grade: "B+" },
    { name: "Geography", teacher: "Mrs. Fatuma Mohamed", grade: "A-" },
    { name: "History", teacher: "Mr. Peter Mwangi", grade: "B" },
  ],
  feeHistory: [
    { id: "P001", amount: 15000, date: "2025-01-15", term: "Term 1", method: "M-Pesa", status: "Paid" },
    { id: "P002", amount: 10000, date: "2024-09-05", term: "Term 3", method: "Bank Transfer", status: "Paid" },
    { id: "P003", amount: 15000, date: "2024-05-10", term: "Term 2", method: "M-Pesa", status: "Paid" },
  ],
}

export default function StudentDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    // Simulate deletion process
    setTimeout(() => {
      setIsDeleting(false)
      router.push("/dashboard/students")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/students">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Student Details</h1>
            <p className="text-muted-foreground">View and manage student information</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/students/${params.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Student
            </Link>
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            <Trash className="mr-2 h-4 w-4" />
            {isDeleting ? "Deleting..." : "Delete Student"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex flex-col items-center gap-2">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt={student.name} />
                <AvatarFallback>
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <CardTitle className="text-xl">{student.name}</CardTitle>
                <CardDescription>{student.admissionNumber}</CardDescription>
                <Badge className="mt-2" variant={student.status === "Active" ? "default" : "destructive"}>
                  {student.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">Class</div>
              <div className="text-right font-medium">{student.class}</div>
              <div className="text-muted-foreground">Gender</div>
              <div className="text-right font-medium">{student.gender}</div>
              <div className="text-muted-foreground">Date of Birth</div>
              <div className="text-right font-medium">{student.dateOfBirth}</div>
              <div className="text-muted-foreground">County</div>
              <div className="text-right font-medium">{student.county}</div>
              <div className="text-muted-foreground">Address</div>
              <div className="text-right font-medium">{student.address}</div>
              <div className="text-muted-foreground">Join Date</div>
              <div className="text-right font-medium">{student.joinDate}</div>
            </div>
            <div className="rounded-md bg-muted p-4">
              <h3 className="mb-2 font-semibold">Parent/Guardian Information</h3>
              <div className="space-y-2">
                <div className="text-sm">{student.parentName}</div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{student.parentPhone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>{student.parentEmail}</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/students">View All Students</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/dashboard/students/${params.id}/edit`}>Edit Details</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-4 space-y-6">
          <Tabs defaultValue="academic">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="academic">Academic</TabsTrigger>
              <TabsTrigger value="fees">Fees</TabsTrigger>
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
            </TabsList>
            <TabsContent value="academic" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>Current term subject performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {student.subjects.map((subject, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{subject.name}</div>
                          <div className="text-sm text-muted-foreground">Teacher: {subject.teacher}</div>
                        </div>
                        <Badge
                          variant="outline"
                          className={`text-base ${
                            subject.grade.startsWith("A")
                              ? "bg-green-50 text-green-700 border-green-200"
                              : subject.grade.startsWith("B")
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : subject.grade.startsWith("C")
                                  ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {subject.grade}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="fees" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Fee Information</CardTitle>
                  <CardDescription>Current fee status and payment history</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Current Fee Balance</div>
                        <div className="text-2xl font-bold">KSh {student.feeBalance.toLocaleString()}</div>
                      </div>
                      <Button asChild>
                        <Link href={`/dashboard/fees/record?student=${params.id}`}>Record Payment</Link>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Payment History</h3>
                    <div className="rounded-md border">
                      <div className="grid grid-cols-5 gap-2 p-3 font-medium border-b text-sm">
                        <div>Date</div>
                        <div>Amount</div>
                        <div>Term</div>
                        <div>Method</div>
                        <div className="text-right">Receipt</div>
                      </div>
                      {student.feeHistory.map((payment) => (
                        <div key={payment.id} className="grid grid-cols-5 gap-2 p-3 border-b last:border-0 text-sm">
                          <div>{payment.date}</div>
                          <div>KSh {payment.amount.toLocaleString()}</div>
                          <div>{payment.term}</div>
                          <div>{payment.method}</div>
                          <div className="text-right">
                            <Button variant="ghost" size="icon" asChild>
                              <Link href={`/dashboard/fees/receipt/${payment.id}`}>
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download receipt</span>
                              </Link>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="attendance" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Record</CardTitle>
                  <CardDescription>Student attendance statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md bg-muted p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">Current Term Attendance</div>
                        <div className="text-2xl font-bold">{student.attendance}%</div>
                      </div>
                      <div
                        className={`h-16 w-16 rounded-full flex items-center justify-center text-white font-bold ${
                          student.attendance >= 90
                            ? "bg-green-500"
                            : student.attendance >= 80
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      >
                        {student.attendance}%
                      </div>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="mb-2 font-semibold">Recent Absences</h3>
                    <div className="text-sm text-muted-foreground">No recent absences recorded.</div>
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
