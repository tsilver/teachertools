import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  BookOpen,
  FileText,
  ImageIcon,
  Video,
  Globe,
  Layers,
  Wand2,
  Quote,
  Accessibility,
} from "lucide-react"

export const metadata: Metadata = {
  title: "CourseWeaver - AI-Powered Course Reader Builder | AIxponential",
  description:
    "Transform diverse sources into custom course readers with AI-powered editing, multi-source transcription, and built-in citations.",
}

export default function CourseWeaverPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-purple-600" />
              <span className="text-xl font-bold text-slate-900">CourseWeaver</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            AI-Powered Course Builder
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Your Curriculum, Your Way</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            CourseWeaver transforms diverse sources into custom course readers with AI-powered editing, multi-source
            transcription, and built-in citations — all in one seamless environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Where Trusted Sources Become Great Courses
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Multi-Source Integration</CardTitle>
                <CardDescription>
                  Convert PDFs, websites, images, videos, and audio into editable text from a single interface
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI-Powered Editing</CardTitle>
                <CardDescription>
                  Rewrite entire documents, sections, or highlighted sentences with context-aware AI assistance
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Quote className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Built-in Citations</CardTitle>
                <CardDescription>
                  Automatic citation management ensures academic integrity for both original and AI-edited content
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-Source Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Building the Curriculum You Want</h2>
              <p className="text-lg text-slate-600 mb-8">
                CourseWeaver breaks down the barriers between different content formats. Whether it's a PDF research
                paper, a YouTube lecture, or a historical website, everything becomes part of your unified course
                reader.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <FileText className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-medium">PDFs</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Websites</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <ImageIcon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Images</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <Video className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Videos</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Layers className="h-5 w-5 text-purple-600" />
                  <span className="font-semibold text-slate-900">Source Queue</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <FileText className="h-4 w-4 text-red-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Chapter 3: Renaissance Art</div>
                      <div className="text-xs text-slate-500">PDF • 12 pages</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <Video className="h-4 w-4 text-blue-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Medici Family Documentary</div>
                      <div className="text-xs text-slate-500">Video • 45 min</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <Globe className="h-4 w-4 text-green-600" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">Uffizi Gallery Virtual Tour</div>
                      <div className="text-xs text-slate-500">Website • Interactive</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-500 text-center">Drag to reorder • Click to edit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Editing Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">AI Editing at Every Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Entire Document</CardTitle>
                <CardDescription>
                  Transform the entire course reader with global AI editing for tone, reading level, or focus
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Unit or Section</CardTitle>
                <CardDescription>
                  Edit specific units or sections to match your curriculum goals and student needs
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wand2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Highlighted Text</CardTitle>
                <CardDescription>
                  Make precise edits to specific sentences or paragraphs without leaving the document view
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Your Content. Your Class. Your CourseWeaver.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Drag & Drop Organization</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Reorder content blocks effortlessly. Copy and adapt source queues for different classes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Unit & Section Structure</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Organize content into units, sections, or chapters that align with your curriculum pacing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Anchored Resources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Link optional images, primary sources, and videos to specific sections for rich multimedia learning.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Quote className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Citation Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Automatic footnotes and bibliography generation for both original and AI-edited content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Accessibility className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Accessibility Features</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Text-to-speech, dyslexia-friendly fonts, high contrast themes, and video captioning built-in.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-teal-600" />
                  <CardTitle className="text-lg">Google Classroom Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Import resources and push completed course readers directly to Google Classroom.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            From Sources to Course Reader in Minutes
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Import Sources</h3>
              <p className="text-slate-600 text-sm">
                Add PDFs, websites, images, videos, and audio files to your source queue
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Organize & Structure</h3>
              <p className="text-slate-600 text-sm">
                Drag and drop to arrange content into units and sections that match your curriculum
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Enhancement</h3>
              <p className="text-slate-600 text-sm">
                Use AI to edit content for reading level, tone, or focus while preserving citations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Publish & Share</h3>
              <p className="text-slate-600 text-sm">
                Export as PDF, push to Google Classroom, or share with accessible formatting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Building the Curriculum You Want with the Sources You Trust</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join educators who are transforming how they create custom course materials with AI-powered tools designed
            for academic integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-purple-50">
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
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
              <BookOpen className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold">CourseWeaver</span>
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
