"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Edit, Trash, BookOpen } from "lucide-react"

// Mock data for a book
const book = {
  id: "B001",
  title: "Mathematics for Secondary Schools",
  author: "John Kamau",
  isbn: "978-1234567890",
  publisher: "Kenya Educational Publishers",
  publishYear: "2020",
  edition: "3rd Edition",
  category: "Mathematics",
  subcategory: "Algebra",
  copies: 15,
  available: 8,
  status: "Available",
  location: "Shelf A-12",
  description:
    "A comprehensive mathematics textbook for secondary school students covering algebra, geometry, trigonometry, and calculus. Aligned with the Kenyan curriculum.",
  borrowHistory: [
    {
      id: "L001",
      studentName: "Wanjiku Kamau",
      admissionNumber: "ADM2023001",
      borrowDate: "2025-01-15",
      dueDate: "2025-01-29",
      returnDate: "2025-01-28",
      status: "Returned",
    },
    {
      id: "L002",
      studentName: "Otieno Ochieng",
      admissionNumber: "ADM2023002",
      borrowDate: "2024-11-10",
      dueDate: "2024-11-24",
      returnDate: "2024-11-22",
      status: "Returned",
    },
    {
      id: "L003",
      studentName: "Daniel Kiprop",
      admissionNumber: "ADM2023004",
      borrowDate: "2025-01-05",
      dueDate: "2025-01-19",
      returnDate: null,
      status: "Borrowed",
    },
  ],
}

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    // Simulate deletion process
    setTimeout(() => {
      setIsDeleting(false)
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
            <h1 className="text-2xl font-bold tracking-tight">Book Details</h1>
            <p className="text-muted-foreground">View and manage book information</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/library/books/${params.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit Book
            </Link>
          </Button>
          <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
            <Trash className="mr-2 h-4 w-4" />
            {isDeleting ? "Deleting..." : "Delete Book"}
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex flex-col items-center gap-2">
              <div className="h-40 w-32 bg-muted flex items-center justify-center rounded-md">
                <BookOpen className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="text-center">
                <CardTitle className="text-xl">{book.title}</CardTitle>
                <CardDescription>By {book.author}</CardDescription>
                <Badge className="mt-2" variant={book.status === "Available" ? "default" : "destructive"}>
                  {book.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="text-muted-foreground">ISBN</div>
              <div className="text-right font-medium">{book.isbn}</div>
              <div className="text-muted-foreground">Publisher</div>
              <div className="text-right font-medium">{book.publisher}</div>
              <div className="text-muted-foreground">Year</div>
              <div className="text-right font-medium">{book.publishYear}</div>
              <div className="text-muted-foreground">Edition</div>
              <div className="text-right font-medium">{book.edition}</div>
              <div className="text-muted-foreground">Category</div>
              <div className="text-right font-medium">{book.category}</div>
              <div className="text-muted-foreground">Subcategory</div>
              <div className="text-right font-medium">{book.subcategory}</div>
              <div className="text-muted-foreground">Location</div>
              <div className="text-right font-medium">{book.location}</div>
            </div>
            <div className="rounded-md bg-muted p-4">
              <h3 className="mb-2 font-semibold">Availability</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-muted-foreground">Total Copies</div>
                <div className="text-right font-medium">{book.copies}</div>
                <div className="text-muted-foreground">Available</div>
                <div className="text-right font-medium">{book.available}</div>
                <div className="text-muted-foreground">Borrowed</div>
                <div className="text-right font-medium">{book.copies - book.available}</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/library">View All Books</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={`/dashboard/library/issue?book=${params.id}`}>Issue Book</Link>
            </Button>
          </CardFooter>
        </Card>

        <div className="md:col-span-4 space-y-6">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="history">Borrowing History</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Book Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{book.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Borrowing History</CardTitle>
                  <CardDescription>Record of students who have borrowed this book</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-6 gap-2 p-3 font-medium border-b text-sm">
                      <div className="col-span-2">Student</div>
                      <div className="col-span-1">Borrow Date</div>
                      <div className="col-span-1">Due Date</div>
                      <div className="col-span-1">Return Date</div>
                      <div className="col-span-1">Status</div>
                    </div>
                    {book.borrowHistory.map((history) => (
                      <div key={history.id} className="grid grid-cols-6 gap-2 p-3 border-b last:border-0 text-sm">
                        <div className="col-span-2">
                          <div className="font-medium">{history.studentName}</div>
                          <div className="text-xs text-muted-foreground">{history.admissionNumber}</div>
                        </div>
                        <div className="col-span-1">{history.borrowDate}</div>
                        <div className="col-span-1">{history.dueDate}</div>
                        <div className="col-span-1">{history.returnDate || "-"}</div>
                        <div className="col-span-1">
                          <Badge
                            variant={
                              history.status === "Returned"
                                ? "outline"
                                : history.status === "Overdue"
                                  ? "destructive"
                                  : "default"
                            }
                          >
                            {history.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
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
