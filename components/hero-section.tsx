import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-6">Democratizing AI in Education</h1>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
          AIxponential brings together educators, researchers, and AI experts to build educational solutions. We believe
          in the power of community-driven innovation and industry contributions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Explore Our Tools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline">
            Learn Our Approach
          </Button>
        </div>
      </div>
    </section>
  )
}
