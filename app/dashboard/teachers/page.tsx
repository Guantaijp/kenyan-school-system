"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronLeft, ChevronRight, Download, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"

// Mock data for teachers
const teachers = [
  {
    id: "T001",
    name: "Prof. John Kamau",
    staffId: "STAFF001",
    subject: "Mathematics",
    phone: "0712345678",
    county: "Nairobi",
    status: "Active",
  },
  {
    id: "T002",
    name: "Mrs. Jane Otieno",
    staffId: "STAFF002",
    subject: "English",
    phone: "0723456789",
    county: "Kisumu",
    status: "Active",
  },
  {
    id: "T003",
    name: "Mr. Hassan Ali",
    staffId: "STAFF003",
    subject: "Physics",
    phone: "0734567890",
    county: "Mombasa",
    status: "Active",
  },
  {
    id: "T004",
    name: "Ms. Grace Wanjiru",
    staffId: "STAFF004",
    subject: "Biology",
    phone: "0745678901",
    county: "Nakuru",
    status: "Active",
  },
  {
    id: "T005",
    name: "Mr. David Omondi",
    staffId: "STAFF005",
    subject: "Chemistry",
    phone: "0756789012",
    county: "Kisii",
    status: "Active",
  },
  {
    id: "T006",
    name: "Mrs. Fatuma Mohamed",
    staffId: "STAFF006",
    subject: "Geography",
    phone: "0767890123",
    county: "Kilifi",
    status: "Inactive",
  },
  {
    id: "T007",
    name: "Mr. Peter Mwangi",
    staffId: "STAFF007",
    subject: "History",
    phone: "0778901234",
    county: "Nyeri",
    status: "Active",
  },
]

export default function TeachersPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.staffId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.subject.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Teachers</h1>
          <p className="text-muted-foreground">Manage teacher records and information</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Teacher
          </Button>
        </div>
      </div>
      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <CardTitle>Teacher Records</CardTitle>
            <CardDescription>A list of all teachers employed in the school</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search teachers..."
                className="pl-8 md:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
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
                <TableHead>Staff ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>County</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell className="font-medium">{teacher.name}</TableCell>
                  <TableCell>{teacher.staffId}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.phone}</TableCell>
                  <TableCell>{teacher.county}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        teacher.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {teacher.status}
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
                          <Link href={`/dashboard/teachers/${teacher.id}`} className="w-full">
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
