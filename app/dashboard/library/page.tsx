"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
  Plus,
  Search,
  SlidersHorizontal,
  BookMarked,
  BookOpen,
  BookCopy,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Mock data for books
const books = [
  {
    id: "B001",
    title: "Mathematics for Secondary Schools",
    author: "John Kamau",
    isbn: "978-1234567890",
    category: "Mathematics",
    copies: 15,
    available: 8,
    status: "Available",
  },
  {
    id: "B002",
    title: "Advanced Physics",
    author: "David Otieno",
    isbn: "978-2345678901",
    category: "Physics",
    copies: 12,
    available: 5,
    status: "Available",
  },
  {
    id: "B003",
    title: "Organic Chemistry",
    author: "Sarah Wanjiku",
    isbn: "978-3456789012",
    category: "Chemistry",
    copies: 10,
    available: 0,
    status: "Borrowed",
  },
  {
    id: "B004",
    title: "English Grammar and Composition",
    author: "Mary Akinyi",
    isbn: "978-4567890123",
    category: "English",
    copies: 20,
    available: 12,
    status: "Available",
  },
  {
    id: "B005",
    title: "History of East Africa",
    author: "Peter Mwangi",
    isbn: "978-5678901234",
    category: "History",
    copies: 8,
    available: 3,
    status: "Available",
  },
  {
    id: "B006",
    title: "Biology for KCSE",
    author: "Grace Njeri",
    isbn: "978-6789012345",
    category: "Biology",
    copies: 15,
    available: 0,
    status: "Borrowed",
  },
  {
    id: "B007",
    title: "Computer Studies",
    author: "James Omondi",
    isbn: "978-7890123456",
    category: "Computer Science",
    copies: 10,
    available: 6,
    status: "Available",
  },
]

// Mock data for borrowed books
const borrowedBooks = [
  {
    id: "L001",
    bookTitle: "Organic Chemistry",
    studentName: "Wanjiku Kamau",
    admissionNumber: "ADM2023001",
    borrowDate: "2025-01-15",
    dueDate: "2025-01-29",
    status: "Borrowed",
  },
  {
    id: "L002",
    bookTitle: "Biology for KCSE",
    studentName: "Otieno Ochieng",
    admissionNumber: "ADM2023002",
    borrowDate: "2025-01-18",
    dueDate: "2025-02-01",
    status: "Borrowed",
  },
  {
    id: "L003",
    bookTitle: "Advanced Physics",
    studentName: "Aisha Mohamed",
    admissionNumber: "ADM2023003",
    borrowDate: "2025-01-20",
    dueDate: "2025-02-03",
    status: "Borrowed",
  },
  {
    id: "L004",
    bookTitle: "Mathematics for Secondary Schools",
    studentName: "Daniel Kiprop",
    admissionNumber: "ADM2023004",
    borrowDate: "2025-01-22",
    dueDate: "2025-02-05",
    status: "Overdue",
  },
  {
    id: "L005",
    bookTitle: "History of East Africa",
    studentName: "Faith Njeri",
    admissionNumber: "ADM2023005",
    borrowDate: "2025-01-10",
    dueDate: "2025-01-24",
    status: "Returned",
  },
]

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("books")

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredBorrowings = borrowedBooks.filter(
    (borrowing) =>
      borrowing.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      borrowing.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      borrowing.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const totalBooks = books.reduce((sum, book) => sum + book.copies, 0)
  const availableBooks = books.reduce((sum, book) => sum + book.available, 0)
  const borrowedCount = totalBooks - availableBooks
  const overdueCount = borrowedBooks.filter((b) => b.status === "Overdue").length

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Library</h1>
          <p className="text-muted-foreground">Manage school library resources</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Book
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Books</CardTitle>
            <BookMarked className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBooks}</div>
            <p className="text-xs text-muted-foreground">{books.length} unique titles</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{availableBooks}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((availableBooks / totalBooks) * 100)}% of total books
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Borrowed</CardTitle>
            <BookCopy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{borrowedCount}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((borrowedCount / totalBooks) * 100)}% of total books
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <div className="h-4 w-4 rounded-full bg-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overdueCount}</div>
            <p className="text-xs text-muted-foreground">Books past their due date</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="books" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 md:w-auto">
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="borrowings">Borrowings</TabsTrigger>
        </TabsList>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={activeTab === "books" ? "Search books..." : "Search borrowings..."}
              className="pl-8 w-full"
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
        <TabsContent value="books" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>ISBN</TableHead>
                    <TableHead>Copies</TableHead>
                    <TableHead>Available</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBooks.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell className="font-medium">{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>{book.category}</TableCell>
                      <TableCell>{book.isbn}</TableCell>
                      <TableCell>{book.copies}</TableCell>
                      <TableCell>{book.available}</TableCell>
                      <TableCell>
                        <Badge variant={book.status === "Available" ? "default" : "destructive"}>{book.status}</Badge>
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
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit book</DropdownMenuItem>
                            <DropdownMenuItem>Issue book</DropdownMenuItem>
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
        </TabsContent>
        <TabsContent value="borrowings" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Book Title</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead>Admission No.</TableHead>
                    <TableHead>Borrow Date</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredBorrowings.map((borrowing) => (
                    <TableRow key={borrowing.id}>
                      <TableCell className="font-medium">{borrowing.bookTitle}</TableCell>
                      <TableCell>{borrowing.studentName}</TableCell>
                      <TableCell>{borrowing.admissionNumber}</TableCell>
                      <TableCell>{borrowing.borrowDate}</TableCell>
                      <TableCell>{borrowing.dueDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            borrowing.status === "Returned"
                              ? "outline"
                              : borrowing.status === "Overdue"
                                ? "destructive"
                                : "default"
                          }
                        >
                          {borrowing.status}
                        </Badge>
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
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Mark as returned</DropdownMenuItem>
                            <DropdownMenuItem>Extend due date</DropdownMenuItem>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}
