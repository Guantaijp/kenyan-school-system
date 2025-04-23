"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, Save } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

// Mock data for students in a class
const students = [
  { id: "S001", name: "Wanjiku Kamau", admissionNumber: "ADM2023001" },
  { id: "S002", name: "Otieno Ochieng", admissionNumber: "ADM2023002" },
  { id: "S003", name: "Aisha Mohamed", admissionNumber: "ADM2023003" },
  { id: "S004", name: "Daniel Kiprop", admissionNumber: "ADM2023004" },
  { id: "S005", name: "Faith Njeri", admissionNumber: "ADM2023005" },
  { id: "S006", name: "James Mwangi", admissionNumber: "ADM2023006" },
  { id: "S007", name: "Mercy Wambui", admissionNumber: "ADM2023007" },
  { id: "S008", name: "Brian Kimani", admissionNumber: "ADM2023008" },
  { id: "S009", name: "Lucy Adhiambo", admissionNumber: "ADM2023009" },
  { id: "S010", name: "Samuel Kipchirchir", admissionNumber: "ADM2023010" },
]

export default function AttendancePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedClass, setSelectedClass] = useState("form4a")
  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    students.reduce((acc, student) => ({ ...acc, [student.id]: true }), {}),
  )

  const handleAttendanceChange = (studentId: string, isPresent: boolean) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: isPresent,
    }))
  }

  const saveAttendance = () => {
    // In a real app, this would save to a database
    alert("Attendance saved successfully!")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
          <p className="text-muted-foreground">Record and manage student attendance</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Select Date</CardTitle>
            <CardDescription>Choose the date for attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Select Class</CardTitle>
            <CardDescription>Choose the class for attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="form1a">Form 1A</SelectItem>
                <SelectItem value="form1b">Form 1B</SelectItem>
                <SelectItem value="form2a">Form 2A</SelectItem>
                <SelectItem value="form2b">Form 2B</SelectItem>
                <SelectItem value="form3a">Form 3A</SelectItem>
                <SelectItem value="form3b">Form 3B</SelectItem>
                <SelectItem value="form4a">Form 4A</SelectItem>
                <SelectItem value="form4b">Form 4B</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle>Attendance Summary</CardTitle>
            <CardDescription>Quick overview of today's attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                <span className="text-3xl font-bold text-primary">
                  {Object.values(attendance).filter(Boolean).length}
                </span>
                <span className="text-sm text-muted-foreground">Present</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                <span className="text-3xl font-bold text-destructive">
                  {Object.values(attendance).filter((v) => !v).length}
                </span>
                <span className="text-sm text-muted-foreground">Absent</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border p-3">
                <span className="text-3xl font-bold">{Object.values(attendance).length}</span>
                <span className="text-sm text-muted-foreground">Total</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Mark Attendance</CardTitle>
          <CardDescription>
            {date ? format(date, "PPP") : "Today"} - {selectedClass.toUpperCase()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Admission No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Present</TableHead>
                <TableHead className="text-center">Absent</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.admissionNumber}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell className="text-center">
                    <Checkbox
                      checked={attendance[student.id]}
                      onCheckedChange={(checked) => handleAttendanceChange(student.id, checked === true)}
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    <Checkbox
                      checked={!attendance[student.id]}
                      onCheckedChange={(checked) => handleAttendanceChange(student.id, checked !== true)}
                    />
                  </TableCell>
                  <TableCell>
                    <Input placeholder="Optional notes" className="h-8" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 flex justify-end">
            <Button onClick={saveAttendance}>
              <Save className="mr-2 h-4 w-4" />
              Save Attendance
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Input component for the notes field
function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}
