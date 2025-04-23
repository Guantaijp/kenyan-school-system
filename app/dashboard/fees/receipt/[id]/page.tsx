"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, Printer, Share2 } from "lucide-react"

// Mock data for a receipt
const receipt = {
  id: "R001",
  paymentId: "P001",
  studentName: "Wanjiku Kamau",
  admissionNumber: "ADM2023001",
  class: "Form 4A",
  amount: 15000,
  date: "2025-01-15",
  term: "Term 1",
  paymentMethod: "M-Pesa",
  reference: "QWE123456789",
  receivedBy: "John Mwangi",
  schoolName: "Elimu Excellence Academy",
  schoolAddress: "P.O. Box 12345-00100, Nairobi, Kenya",
  schoolPhone: "+254 712 345 678",
  schoolEmail: "info@elimuexcellence.ac.ke",
}

export default function ReceiptPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  const handlePrint = () => {
    window.print()
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
            <h1 className="text-2xl font-bold tracking-tight">Payment Receipt</h1>
            <p className="text-muted-foreground">View and print payment receipt</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
        </div>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="font-bold text-2xl">{receipt.schoolName}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-primary">RECEIPT</div>
                <div className="text-sm text-muted-foreground">#{receipt.id}</div>
              </div>
            </div>

            <div className="text-sm space-y-1">
              <div>{receipt.schoolAddress}</div>
              <div>Tel: {receipt.schoolPhone}</div>
              <div>Email: {receipt.schoolEmail}</div>
            </div>

            <Separator />

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Receipt To:</div>
                <div className="font-medium">{receipt.studentName}</div>
                <div className="text-sm">Admission No: {receipt.admissionNumber}</div>
                <div className="text-sm">Class: {receipt.class}</div>
              </div>
              <div className="space-y-2 text-right">
                <div className="text-sm text-muted-foreground">Receipt Details:</div>
                <div className="text-sm">Date: {receipt.date}</div>
                <div className="text-sm">Term: {receipt.term}</div>
                <div className="text-sm">Payment Method: {receipt.paymentMethod}</div>
                <div className="text-sm">Reference: {receipt.reference}</div>
              </div>
            </div>

            <div className="rounded-md border">
              <div className="grid grid-cols-12 gap-2 p-3 font-medium border-b text-sm">
                <div className="col-span-1">#</div>
                <div className="col-span-7">Description</div>
                <div className="col-span-4 text-right">Amount</div>
              </div>
              <div className="grid grid-cols-12 gap-2 p-3 border-b text-sm">
                <div className="col-span-1">1</div>
                <div className="col-span-7">School Fees Payment - {receipt.term}</div>
                <div className="col-span-4 text-right">KSh {receipt.amount.toLocaleString()}</div>
              </div>
              <div className="grid grid-cols-12 gap-2 p-3 font-medium text-sm">
                <div className="col-span-8 text-right">Total:</div>
                <div className="col-span-4 text-right">KSh {receipt.amount.toLocaleString()}</div>
              </div>
            </div>

            <div className="rounded-md bg-muted p-4 text-sm">
              <div className="font-medium mb-1">Amount in words:</div>
              <div>Fifteen Thousand Kenyan Shillings Only</div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Received By:</div>
                <div className="font-medium">{receipt.receivedBy}</div>
                <div className="border-t border-dashed w-40 mt-8 pt-1 text-sm text-muted-foreground">Signature</div>
              </div>
              <div className="space-y-2 text-right">
                <div className="text-sm text-muted-foreground">School Stamp:</div>
                <div className="h-20"></div>
              </div>
            </div>

            <Separator />

            <div className="text-center text-sm text-muted-foreground">
              <p>This is a computer-generated receipt and does not require a physical signature.</p>
              <p>Thank you for your payment.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
