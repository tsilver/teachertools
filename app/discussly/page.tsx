import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageSquare, Smartphone, BarChart3, Clock, Users, Zap, Shield, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Discussly - Real-Time Engagement Tracking | AIxponential",
  description:
    "Lightning-fast classroom participation tracking. Capture student engagement in real-time with one-tap logging and AI-generated insights.",
}

export default function DiscusslyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-green-600" />
              <span className="text-xl font-bold text-slate-900">Discussly</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4" />
            Real-Time Engagement Tracking
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Engagement You Can See</h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Discussly is a lightning-fast mobile app that lets teachers capture student participation in real-time with
            one-tap logging, turning classroom moments into actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
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
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">From Participation to Patterns</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>One-Tap Logging</CardTitle>
                <CardDescription>
                  Record student participation instantly with customizable quick-tap buttons - no disruption to your
                  teaching flow
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI-Generated Insights</CardTitle>
                <CardDescription>
                  Weekly snapshots with participation patterns, trends, and personalized narratives for each student
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Real-Time Monitoring</CardTitle>
                <CardDescription>
                  See participation patterns emerge as they happen, helping you adjust your teaching in the moment
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Mobile-First Design */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Built for the Classroom</h2>
              <p className="text-lg text-slate-600 mb-8">
                Discussly is designed mobile-first because teachers are always moving. Quick-tap buttons, haptic
                feedback, and offline capability ensure you never miss a moment of engagement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-slate-700">Lightning-fast 150ms response time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-slate-700">Works offline - no internet required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-slate-700">Customizable for every teaching style</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-slate-700">Privacy-first with local data storage</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8">
              <div className="bg-white rounded-xl p-6 shadow-sm max-w-sm mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-slate-900">Period 3 - History</h3>
                  <Clock className="h-4 w-4 text-slate-500" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">Sarah M.</span>
                    <div className="flex gap-1">
                      <Badge variant="secondary" className="text-xs">
                        Question
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Insightful
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <span className="text-sm font-medium">Alex R.</span>
                    <div className="flex gap-1">
                      <Badge variant="secondary" className="text-xs">
                        Response
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg border border-green-200">
                    <span className="text-sm font-medium">Jamie L.</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 h-6 text-xs">
                      Tap to Log
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Participation Patterns at a Tap</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Setup Class</h3>
              <p className="text-slate-600 text-sm">
                Create your class roster and customize participation types for your teaching style
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">One-Tap Logging</h3>
              <p className="text-slate-600 text-sm">
                Tap student names when they participate. Add context with long-press for detailed tagging
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">AI Analysis</h3>
              <p className="text-slate-600 text-sm">
                Weekly summaries with participation trends and personalized student narratives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Share Insights</h3>
              <p className="text-slate-600 text-sm">
                Export student snapshots for feedback meetings or self-reflection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Class Dynamics at Your Fingertips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg">Lightning Fast</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  150ms response time with haptic feedback. Log participation without breaking your teaching flow.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg">Customizable Tags</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Create participation types that match your classroom: Questions, Insights, Responses, and more.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <CardTitle className="text-lg">Privacy First</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  All data stored locally and encrypted. No analytics harvesting or data mining of student information.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg">Offline Ready</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Works without internet connection. Perfect for classrooms with unreliable connectivity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-red-600" />
                  <CardTitle className="text-lg">Smart Summaries</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  AI-generated weekly snapshots with participation patterns and personalized student narratives.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-teal-600" />
                  <CardTitle className="text-lg">Equity Focused</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Track participation patterns to ensure all students have opportunities to engage and contribute.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Insights at the Speed of Class</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join educators who are transforming how they track and understand student engagement in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
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
              <MessageSquare className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold">Discussly</span>
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
