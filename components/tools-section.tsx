import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, MessageSquare, Tag, Users, Zap, Search, Layers, Lock } from "lucide-react"
import Link from "next/link"

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Educational Tools</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Innovative AI-powered solutions designed by educators, for educators. Each tool addresses real classroom
            challenges with practical, teacher-friendly approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* EduTagger */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Tag className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-2xl">EduTagger</CardTitle>
                </div>
                <Badge variant="secondary">Resource Management</Badge>
              </div>
              <CardDescription className="text-lg">Your Resources at Your Command</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Smart, teacher-focused resource tagging and retrieval tool. Organize, classify, and instantly find
                files, images, documents, and web links across all your storage locations using AI-powered tagging.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <Search className="h-4 w-4 mr-2 text-blue-500" />
                  Cross-platform unified search
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Zap className="h-4 w-4 mr-2 text-blue-500" />
                  AI-generated tags with manual refinement
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Layers className="h-4 w-4 mr-2 text-blue-500" />
                  Collections for lesson planning
                </div>
              </div>
              <Button asChild className="w-full group-hover:bg-blue-700">
                <Link href="/edutagger">
                  Learn More About EduTagger
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Discussly */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-2xl">Discussly</CardTitle>
                </div>
                <Badge variant="secondary">Engagement Tracking</Badge>
              </div>
              <CardDescription className="text-lg">Engagement You Can See</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Mobile-first app for real-time student engagement tracking. Log participation patterns with quick-tap
                buttons while staying present in classroom discussions.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <Zap className="h-4 w-4 mr-2 text-green-500" />
                  One-tap participation logging
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Users className="h-4 w-4 mr-2 text-green-500" />
                  AI-generated student snapshots
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Lock className="h-4 w-4 mr-2 text-green-500" />
                  Offline-first, privacy-focused
                </div>
              </div>
              <Button asChild className="w-full group-hover:bg-green-700 bg-green-600">
                <Link href="/discussly">
                  Learn More About Discussly
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* CourseWeaver */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-2xl">CourseWeaver</CardTitle>
                </div>
                <Badge variant="secondary">Course Creation</Badge>
              </div>
              <CardDescription className="text-lg">Your Curriculum, Your Way</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                AI-powered course reader builder that transforms multiple sources into structured, accessible teaching
                materials. Create custom instructional texts with proper citations and AI editing.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <Layers className="h-4 w-4 mr-2 text-purple-500" />
                  Multi-source transcription
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <BookOpen className="h-4 w-4 mr-2 text-purple-500" />
                  Unit & section organization
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Zap className="h-4 w-4 mr-2 text-purple-500" />
                  Integrated AI editing
                </div>
              </div>
              <Button asChild className="w-full group-hover:bg-purple-700 bg-purple-600">
                <Link href="/courseweaver">
                  Learn More About CourseWeaver
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* PureWrite */}
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-2xl">PureWrite</CardTitle>
                </div>
                <Badge variant="secondary">Authentic Assessment</Badge>
              </div>
              <CardDescription className="text-lg">Write Without Distraction</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Consent-based secure writing environment for capturing authentic, AI-free writing samples. Perfect for
                in-class exercises with real-time monitoring and automatic archival.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-600">
                  <Lock className="h-4 w-4 mr-2 text-orange-500" />
                  Distraction-free writing mode
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Users className="h-4 w-4 mr-2 text-orange-500" />
                  Real-time teacher monitoring
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <BookOpen className="h-4 w-4 mr-2 text-orange-500" />
                  Automatic session archival
                </div>
              </div>
              <Button asChild className="w-full group-hover:bg-orange-700 bg-orange-600">
                <Link href="/purewrite">
                  Learn More About PureWrite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
