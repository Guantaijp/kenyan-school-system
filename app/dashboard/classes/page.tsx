"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Plus, Users } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data for classes
const classes = [
  {
    id: "C001",
    name: "Form 1A",
    level: "Form 1",
    stream: "A",
    students: 42,
    classTeacher: "Mrs. Jane Otieno",
    room: "Block A - Room 101",
  },
  {
    id: "C002",
    name: "Form 1B",
    level: "Form 1",
    stream: "B",
    students: 40,
    classTeacher: "Mr. Hassan Ali",
    room: "Block A - Room 102",
  },
  {
    id: "C003",
    name: "Form 2A",
    level: "Form 2",
    stream: "A",
    students: 38,
    classTeacher: "Ms. Grace Wanjiru",
    room: "Block B - Room 201",
  },
  {
    id: "C004",
    name: "Form 2B",
    level: "Form 2",
    stream: "B",
    students: 39,
    classTeacher: "Mr. David Omondi",
    room: "Block B - Room 202",
  },
  {
    id: "C005",
    name: "Form 3A",
    level: "Form 3",
    stream: "A",
    students: 36,
    classTeacher: "Mrs. Fatuma Mohamed",
    room: "Block C - Room 301",
  },
  {
    id: "C006",
    name: "Form 3B",
    level: "Form 3",
    stream: "B",
    students: 35,
    classTeacher: "Mr. Peter Mwangi",
    room: "Block C - Room 302",
  },
  {
    id: "C007",
    name: "Form 4A",
    level: "Form 4",
    stream: "A",
    students: 34,
    classTeacher: "Prof. John Kamau",
    room: "Block D - Room 401",
  },
  {
    id: "C008",
    name: "Form 4B",
    level: "Form 4",
    stream: "B",
    students: 33,
    classTeacher: "Mrs. Lucy Adhiambo",
    room: "Block D - Room 402",
  },
]

export default function ClassesPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const filteredClasses = classes.filter((cls) => {
    // Filter by search term
    const matchesSearch =
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.classTeacher.toLowerCase().includes(searchTerm.toLowerCase())

    // Filter by level (tab)
    const matchesLevel = activeTab === "all" || cls.level.toLowerCase().includes(activeTab.toLowerCase())

    return matchesSearch && matchesLevel
  })

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1.5">
          <h1 className="text-2xl font-bold tracking-tight">Classes</h1>
          <p className="text-muted-foreground">Manage school classes and view students by class</p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Class
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search classes or teachers..."
            className="pl-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">All Classes</TabsTrigger>
          <TabsTrigger value="form 1">Form 1</TabsTrigger>
          <TabsTrigger value="form 2">Form 2</TabsTrigger>
          <TabsTrigger value="form 3">Form 3</TabsTrigger>
          <TabsTrigger value="form 4">Form 4</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredClasses.map((cls) => (
              <Card
                key={cls.id}
                className="h-full cursor-pointer transition-colors hover:bg-muted/50"
                onClick={() => router.push(`/dashboard/classes/${cls.id}`)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{cls.name}</CardTitle>
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <CardDescription>{cls.room}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Students:</span>
                      <span className="font-medium">{cls.students}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Class Teacher:</span>
                      <span className="font-medium">{cls.classTeacher}</span>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                        <Link href={`/dashboard/classes/${cls.id}`}>View Class</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        {["form 1", "form 2", "form 3", "form 4"].map((level) => (
          <TabsContent key={level} value={level} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredClasses
                .filter((cls) => cls.level.toLowerCase() === level)
                .map((cls) => (
                  <Card
                    key={cls.id}
                    className="h-full cursor-pointer transition-colors hover:bg-muted/50"
                    onClick={() => router.push(`/dashboard/classes/${cls.id}`)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>{cls.name}</CardTitle>
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <CardDescription>{cls.room}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Students:</span>
                          <span className="font-medium">{cls.students}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Class Teacher:</span>
                          <span className="font-medium">{cls.classTeacher}</span>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button variant="outline" size="sm" asChild onClick={(e) => e.stopPropagation()}>
                            <Link href={`/dashboard/classes/${cls.id}`}>View Class</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
