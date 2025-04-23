"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
  Plus,
  Search,
  CreditCard,
  ArrowUpRight,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for fee payments
const feePayments = [
  {
    id: "P001",
    studentName: "Wanjiku Kamau",
    admissionNumber: "ADM2023001",
    amount: 15000,
    date: "2025-01-15",
    term: "Term 1",
    paymentMethod: "M-Pesa",
    status: "Paid",
  },
  {
    id: "P002",
    studentName: "Otieno Ochieng",
    admissionNumber: "ADM2023002",
    amount: 12000,
    date: "2025-01-18",
    term: "Term 1",
    paymentMethod: "Bank Transfer",
    status: "Paid",
  },
  {
    id: "P003",
    studentName: "Aisha Mohamed",
    admissionNumber: "ADM2023003",
    amount: 10000,
    date: "2025-01-20",
    term: "Term 1",
    paymentMethod: "M-Pesa",
    status: "Partial",
  },
  {
    id: "P004",
    studentName: "Daniel Kiprop",
    admissionNumber: "ADM2023004",
    amount: 15000,
    date: "2025-01-22",
    term: "Term 1",
    paymentMethod: "Cash",
    status: "Paid",
  },
  {
    id: "P005",
    studentName: "Faith Njeri",
    admissionNumber: "ADM2023005",
    amount: 8000,
    date: "2025-01-25",
    term: "Term 1",
    paymentMethod: "M-Pesa",
    status: "Partial",
  },
  {
    id: "P006",
    studentName: "James Mwangi",
    admissionNumber: "ADM2023006",
    amount: 0,
    date: "-",
    term: "Term 1",
    paymentMethod: "-",
    status: "Unpaid",
  },
  {
    id: "P007",
    studentName: "Mercy Wambui",
    admissionNumber: "ADM2023007",
    amount: 15000,
    date: "2025-01-30",
    term: "Term 1",
    paymentMethod: "Bank Transfer",
    status: "Paid",
  },
]

export default function FeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTerm, setSelectedTerm] = useState("all")

  const filteredPayments = feePayments.filter((payment) => {
    const matchesSearch =
      payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesTerm = selectedTerm === "all" || payment.term.toLowerCase() === selectedTerm.toLowerCase()

    return matchesSearch && matchesTerm
  })

  const totalCollected = filteredPayments.reduce((sum, payment) => sum + payment.amount, 0)
  const paidCount = filteredPayments.filter((p) => p.status === "Paid").length
  const partialCount = filteredPayments.filter((p) => p.status === "Partial").length
  const unpaidCount = filteredPayments.filter((p) => p.status === "Unpaid").length

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">School Fees</h1>
          <p className="text-muted-foreground">Manage fee payments and records</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">KSh {totalCollected.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <span className="text-emerald-500 flex items-center">
                <ArrowUpRight className="h-3 w-3" />
                12.5%
              </span>
              from last term
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Fully Paid</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{paidCount} students</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((paidCount / feePayments.length) * 100)}% of total students
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Partial Payment</CardTitle>
            <div className="h-4 w-4 rounded-full bg-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{partialCount} students</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((partialCount / feePayments.length) * 100)}% of total students
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unpaid</CardTitle>
            <div className="h-4 w-4 rounded-full bg-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{unpaidCount} students</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((unpaidCount / feePayments.length) * 100)}% of total students
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payments">
        <TabsList className="grid w-full grid-cols-3 md:w-auto">
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="structure">Fee Structure</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Fee Payments</CardTitle>
                <CardDescription>A list of all fee payments made by students</CardDescription>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <Select value={selectedTerm} onValueChange={setSelectedTerm}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Terms</SelectItem>
                    <SelectItem value="term 1">Term 1</SelectItem>
                    <SelectItem value="term 2">Term 2</SelectItem>
                    <SelectItem value="term 3">Term 3</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search students..."
                    className="pl-8 md:w-[200px]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
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
                    <TableHead>Student</TableHead>
                    <TableHead>Admission No.</TableHead>
                    <TableHead>Amount (KSh)</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Term</TableHead>
                    <TableHead>Payment Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">{payment.studentName}</TableCell>
                      <TableCell>{payment.admissionNumber}</TableCell>
                      <TableCell>{payment.amount.toLocaleString()}</TableCell>
                      <TableCell>{payment.date}</TableCell>
                      <TableCell>{payment.term}</TableCell>
                      <TableCell>{payment.paymentMethod}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            payment.status === "Paid"
                              ? "bg-green-100 text-green-800"
                              : payment.status === "Partial"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }`}
                        >
                          {payment.status}
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
                            <DropdownMenuItem>View receipt</DropdownMenuItem>
                            <DropdownMenuItem>Edit payment</DropdownMenuItem>
                            <DropdownMenuItem>Print receipt</DropdownMenuItem>
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
        <TabsContent value="structure" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fee Structure</CardTitle>
              <CardDescription>Current fee structure for different classes</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Class</TableHead>
                    <TableHead>Tuition (KSh)</TableHead>
                    <TableHead>Boarding (KSh)</TableHead>
                    <TableHead>Activity Fee (KSh)</TableHead>
                    <TableHead>Development (KSh)</TableHead>
                    <TableHead>Total (KSh)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Form 1</TableCell>
                    <TableCell>12,000</TableCell>
                    <TableCell>18,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell className="font-bold">40,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Form 2</TableCell>
                    <TableCell>12,000</TableCell>
                    <TableCell>18,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell className="font-bold">40,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Form 3</TableCell>
                    <TableCell>15,000</TableCell>
                    <TableCell>20,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell className="font-bold">45,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Form 4</TableCell>
                    <TableCell>15,000</TableCell>
                    <TableCell>20,000</TableCell>
                    <TableCell>8,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell className="font-bold">48,000</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fee Reports</CardTitle>
              <CardDescription>Generate and view various fee reports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-base">Collection Summary</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground">Summary of fee collection by term</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-base">Outstanding Balances</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground">List of students with fee balances</span>
                </Button>
                <Button variant="outline" className="h-auto flex-col items-start gap-1 p-4">
                  <div className="flex w-full items-center justify-between">
                    <span className="text-base">Payment Trends</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-muted-foreground">Analysis of fee payment trends</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
