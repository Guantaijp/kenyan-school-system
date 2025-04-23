"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, BookOpen } from "lucide-react"

// Mock data for books
const books = [
  {
    id: "B001",
    title: "Mathematics for Secondary Schools",
    author: "John Kamau",
    available: 8,
  },
  {
    id: "B002",
    title: "Advanced Physics",
    author: "David Otieno",
    available: 5,
  },
  {
    id: "B004",
    title: "English Grammar and Composition",
    author: "Mary Akinyi",
    available: 12,
  },
  {
    id: "B005",
    title: "History of East Africa",
    author: "Peter Mwangi",
    available: 3,
  },
  {
    id: "B007",
    title: "Computer Studies",
    author: "James Omondi",
    available: 6,
  },
]

// Mock data for students
const students = [
  { id: "S001", name: "Wanjiku Kamau", admissionNumber: "ADM2023001", class: "Form 4A" },
  { id: "S002", name: "Otieno Ochieng", admissionNumber: "ADM2023002", class: "Form 3B" },
  { id: "S003", name: "Aisha Mohamed", admissionNumber: "ADM2023003", class: "Form 2A" },
  { id: "S004", name: "Daniel Kiprop", admissionNumber: "ADM2023004", class: "Form 4A" },
  { id: "S005", name: "Faith Njeri", admissionNumber: "ADM2023005", class: "Form 1C" },
]

export default function IssueBookPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const bookId = searchParams.get("book")

  const initialBook = bookId ? books.find((b) => b.id === bookId) : undefined

  const [isLoading, setIsLoading] = useState(false)
  const [selectedBook, setSelectedBook] = useState<string>(initialBook?.id || "")
  const [selectedStudent, setSelectedStudent] = useState<string>("")
  const [borrowDate, setBorrowDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [dueDate, setDueDate] = useState<string>(() => {
    const date = new Date()
    date.setDate(date.getDate() + 14) // Default due date is 14 days from today
    return date.toISOString().split("T")[0]
  })
  const [notes, setNotes] = useState<string>("")

  const currentBook = books.find((b) => b.id === selectedBook)
  const currentStudent = students.find((s) => s.id === selectedStudent)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate saving
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/library")
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/library">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Issue Book</h1>
            <p className="text-muted-foreground">Issue a book to a student</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Book Issuance</CardTitle>
              <CardDescription>Enter the details to issue a book to a student</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="book">Select Book</Label>
                <Select value={selectedBook} onValueChange={setSelectedBook} required>
                  <SelectTrigger id="book">
                    <SelectValue placeholder="Select a book" />
                  </SelectTrigger>
                  <SelectContent>
                    {books.map((book) => (
                      <SelectItem key={book.id} value={book.id} disabled={book.available === 0}>
                        {book.title} by {book.author} ({book.available} available)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {currentBook && (
                <div className="rounded-md bg-muted p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-12 bg-primary/10 flex items-center justify-center rounded-md">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{currentBook.title}</h3>
                      <p className="text-sm text-muted-foreground">By {currentBook.author}</p>
                      <p className="text-sm mt-1">
                        <span className="font-medium">{currentBook.available}</span> copies available
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="student">Select Student</Label>
                <Select value={selectedStudent} onValueChange={setSelectedStudent} required>
                  <SelectTrigger id="student">
                    <SelectValue placeholder="Select a student" />
                  </SelectTrigger>
                  <SelectContent>
                    {students.map((student) => (
                      <SelectItem key={student.id} value={student.id}>
                        {student.name} ({student.admissionNumber})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {currentStudent && (
                <div className="rounded-md bg-muted p-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Student</div>
                    <div className="text-right font-medium">{currentStudent.name}</div>
                    <div className="text-muted-foreground">Admission Number</div>
                    <div className="text-right font-medium">{currentStudent.admissionNumber}</div>
                    <div className="text-muted-foreground">Class</div>
                    <div className="text-right font-medium">{currentStudent.class}</div>
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="borrowDate">Borrow Date</Label>
                  <Input
                    id="borrowDate"
                    type="date"
                    value={borrowDate}
                    onChange={(e) => setBorrowDate(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dueDate">Due Date</Label>
                  <Input
                    id="dueDate"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional information about this issuance"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/dashboard/library">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading || !selectedBook || !selectedStudent}>
                <BookOpen className="mr-2 h-4 w-4" />
                {isLoading ? "Processing..." : "Issue Book"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  )
}
