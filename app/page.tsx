import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Zap, Lock } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { ToolsSection } from "@/components/tools-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-semibold">AIxponential</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#tools" className="hover:text-blue-300 transition-colors">
                Our Tools
              </Link>
              <Link href="#approach" className="hover:text-blue-300 transition-colors">
                Our Approach
              </Link>
              <Link href="#contact" className="hover:text-blue-300 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <HeroSection />

      <ToolsSection />

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              AIxponential operates as a decentralized, collaborative model inspired by the principles of Maker Spaces
              and the open source ethos. We believe in the power of community-driven innovation and industry
              contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Community-Driven</h3>
              <p className="text-slate-600">
                Built by educators, for educators, with continuous feedback from the teaching community.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovation Focus</h3>
              <p className="text-slate-600">
                Cutting-edge AI technology applied to real classroom challenges and teaching workflows.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Evidence-Based</h3>
              <p className="text-slate-600">
                Grounded in educational research and designed to enhance proven teaching practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Privacy First</h3>
              <p className="text-slate-600">
                Student privacy and data security are fundamental to every tool we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Education with AI?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our community of educators, researchers, and AI experts building the future of teaching and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Involved
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="text-xl font-semibold">AIxponential</span>
              </div>
              <p className="text-slate-300">
                Democratizing AI in Education through community-driven innovation and collaborative development.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    EduTagger
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Discussly
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    CourseWeaver
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    PureWrite
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-slate-300">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 AIxponential. Building the future of education together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
