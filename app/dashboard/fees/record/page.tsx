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
import { ArrowLeft, CreditCard } from "lucide-react"

// Mock data for students
const students = [
  { id: "S001", name: "Wanjiku Kamau", admissionNumber: "ADM2023001", class: "Form 4A", feeBalance: 5000 },
  { id: "S002", name: "Otieno Ochieng", admissionNumber: "ADM2023002", class: "Form 3B", feeBalance: 8000 },
  { id: "S003", name: "Aisha Mohamed", admissionNumber: "ADM2023003", class: "Form 2A", feeBalance: 12000 },
  { id: "S004", name: "Daniel Kiprop", admissionNumber: "ADM2023004", class: "Form 4A", feeBalance: 0 },
  { id: "S005", name: "Faith Njeri", admissionNumber: "ADM2023005", class: "Form 1C", feeBalance: 15000 },
]

export default function RecordPaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const studentId = searchParams.get("student")

  const initialStudent = studentId ? students.find((s) => s.id === studentId) : undefined

  const [isLoading, setIsLoading] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<string>(initialStudent?.id || "")
  const [amount, setAmount] = useState<string>("")
  const [paymentMethod, setPaymentMethod] = useState<string>("mpesa")
  const [reference, setReference] = useState<string>("")
  const [notes, setNotes] = useState<string>("")

  const currentStudent = students.find((s) => s.id === selectedStudent)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate saving
    setTimeout(() => {
      setIsLoading(false)
      router.push(`/dashboard/fees/receipt/new`)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/fees">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Record Fee Payment</h1>
            <p className="text-muted-foreground">Record a new fee payment for a student</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
              <CardDescription>Enter the details of the fee payment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
                    <div className="text-muted-foreground">Current Fee Balance</div>
                    <div className="text-right font-medium">KSh {currentStudent.feeBalance.toLocaleString()}</div>
                  </div>
                </div>
              )}

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (KSh)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="paymentDate">Payment Date</Label>
                  <Input id="paymentDate" type="date" defaultValue={new Date().toISOString().split("T")[0]} required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod} required>
                    <SelectTrigger id="paymentMethod">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mpesa">M-Pesa</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="cheque">Cheque</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reference">Reference/Transaction Number</Label>
                  <Input
                    id="reference"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder={paymentMethod === "mpesa" ? "M-Pesa Transaction ID" : "Reference Number"}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="term">Term</Label>
                <Select defaultValue="term1">
                  <SelectTrigger id="term">
                    <SelectValue placeholder="Select term" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="term1">Term 1 (2025)</SelectItem>
                    <SelectItem value="term2">Term 2 (2025)</SelectItem>
                    <SelectItem value="term3">Term 3 (2025)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Notes (Optional)</Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional information about this payment"
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/dashboard/fees">Cancel</Link>
              </Button>
              <Button type="submit" disabled={isLoading || !selectedStudent || !amount}>
                <CreditCard className="mr-2 h-4 w-4" />
                {isLoading ? "Processing..." : "Record Payment"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  )
}
