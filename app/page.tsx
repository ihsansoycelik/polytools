import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { FAQSection } from "@/components/faq-section";
import { ProjectBrowser } from "@/components/project-browser";

export default async function Home() {
  const projects = await prisma.project.findMany({
    where: {
      approved: true,
    },
    orderBy: { order: "asc" },
  });

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 text-center space-y-6 container mx-auto px-4">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              New: Polymarket API v2
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Discover Polymarket Ecosystem
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A curated collection of projects, tools, and resources for the Polymarket ecosystem.
            </p>
          </div>

          <div className="mx-auto max-w-md relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-10 h-10"
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section id="projects" className="container py-12 md:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectBrowser initialProjects={projects} />
        </section>
        <FAQSection />
      </main>
    </div>
  );
}
