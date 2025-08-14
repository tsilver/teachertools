import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Tag, Search, FolderOpen, Cloud, Zap, Shield, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "EduTagger - Smart Resource Organization | AIxponential",
  description:
    "Organize, classify, and instantly find all your teaching resources with AI-powered tagging. Your resources at your command.",
}

export default function EduTaggerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <Tag className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-slate-900">EduTagger</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Tag className="h-4 w-4" />
            Smart Resource Organization
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Resources at Your Command</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            EduTagger helps educators organize, classify, and instantly find files, images, documents, and web links for
            lesson planning — no matter where they're stored.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Early Access
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">From Resource to Ready in Seconds</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Unified Search</CardTitle>
                <CardDescription>
                  Search across all your resources — local files, cloud storage, and web links — from one place
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>AI-Powered Tagging</CardTitle>
                <CardDescription>
                  Automatically generate detailed tags while maintaining full control to edit and refine them
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Smart Collections</CardTitle>
                <CardDescription>
                  Group related resources into reusable collections for specific lessons or courses
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Tag It. Find It. Teach It.</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Import Your Resources</h3>
                  <p className="text-slate-600">
                    Drag and drop files, add cloud links from Google Drive or Dropbox, or import URLs from bookmarks and
                    collections.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">AI Suggests Tags</h3>
                  <p className="text-slate-600">
                    Our AI analyzes your content and suggests relevant tags including subjects, topics, grade levels,
                    and resource types.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Refine and Organize</h3>
                  <p className="text-slate-600">
                    Edit tags to match your teaching style, create collections for specific lessons, and organize
                    everything your way.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Find Instantly</h3>
                  <p className="text-slate-600">
                    Search by any tag or keyword to instantly retrieve exactly what you need for your next lesson.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-slate-600">AI Suggested Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">World War I</Badge>
                  <Badge variant="secondary">Primary Source</Badge>
                  <Badge variant="secondary">High School</Badge>
                  <Badge variant="secondary">History</Badge>
                  <Badge variant="secondary">Document</Badge>
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Example: AI automatically tags a WWI document with relevant educational metadata
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Master Your Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Multi-Source Import</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Connect Google Drive, Dropbox, OneDrive, local files, and web bookmarks in one unified system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Hierarchical Tagging</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Organize with nested tags: Subject → Topic → Subtopic, plus media type and grade level
                  classifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Lightning Fast Search</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Find resources in under 1 second with tag-based search that works even when you forget exact titles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Smart Collections</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Create reusable resource collections for lessons, then duplicate and adapt them for different courses.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Privacy First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Your data stays local and encrypted. Cloud integrations use secure APIs without storing your content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <CardTitle className="text-lg">Educator Focused</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Built by educators, for educators. Tags use teaching language you already know and understand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Organize Once, Find Forever</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the waitlist to be among the first educators to experience the power of AI-assisted resource
            organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Tag className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">EduTagger</span>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">
                AIxponential Home
              </Link>
              <span>•</span>
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
