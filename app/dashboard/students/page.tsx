"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for students
const students = [
  {
    id: "S001",
    name: "Wanjiku Kamau",
    admissionNumber: "ADM2023001",
    class: "Form 4A",
    gender: "Female",
    county: "Nairobi",
    status: "Active",
  },
  {
    id: "S002",
    name: "Otieno Ochieng",
    admissionNumber: "ADM2023002",
    class: "Form 3B",
    gender: "Male",
    county: "Kisumu",
    status: "Active",
  },
  {
    id: "S003",
    name: "Aisha Mohamed",
    admissionNumber: "ADM2023003",
    class: "Form 2A",
    gender: "Female",
    county: "Mombasa",
    status: "Active",
  },
  {
    id: "S004",
    name: "Daniel Kiprop",
    admissionNumber: "ADM2023004",
    class: "Form 4A",
    gender: "Male",
    county: "Nakuru",
    status: "Active",
  },
  {
    id: "S005",
    name: "Faith Njeri",
    admissionNumber: "ADM2023005",
    class: "Form 1C",
    gender: "Female",
    county: "Kiambu",
    status: "Active",
  },
  {
    id: "S006",
    name: "James Mwangi",
    admissionNumber: "ADM2023006",
    class: "Form 2B",
    gender: "Male",
    county: "Nyeri",
    status: "Inactive",
  },
  {
    id: "S007",
    name: "Mercy Wambui",
    admissionNumber: "ADM2023007",
    class: "Form 3A",
    gender: "Female",
    county: "Machakos",
    status: "Active",
  },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage student records and information</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Student Records</CardTitle>
            <CardDescription>A list of all students enrolled in the school</CardDescription>
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
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Classes</SelectItem>
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
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Admission No.</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>County</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.admissionNumber}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.gender}</TableCell>
                  <TableCell>{student.county}</TableCell>
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
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
