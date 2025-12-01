"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { Project } from "@prisma/client";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectBrowserProps {
    initialProjects: Project[];
}

const categories = [
    "Featured",
    "All",
    "Official",
    "Analytics",
    "Bots",
    "News",
    "Tools",
];

export function ProjectBrowser({ initialProjects }: ProjectBrowserProps) {
    const [activeCategory, setActiveCategory] = useState("Featured");

    const filteredProjects = initialProjects.filter((project) => {
        if (activeCategory === "All") return true;
        if (activeCategory === "Featured") return project.featured;
        return project.category === activeCategory;
    });

    return (
        <div className="space-y-8">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={activeCategory === cat ? "default" : "outline"}
                        size="sm"
                        className={cn(
                            "rounded-md px-4 transition-all border",
                            activeCategory === cat
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-background hover:bg-muted text-muted-foreground border-input"
                        )}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            {/* Projects Grid with Overlay */}
            <div className="relative min-h-[400px]">
                {/* Blur Overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-32 bg-background/40 backdrop-blur-[2px]">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Coming Soon</h2>
                        <p className="text-muted-foreground">
                            Be the first to land.{" "}
                            <Link href="/submit" className="text-primary hover:underline font-medium">
                                Submit a project
                            </Link>
                            .
                        </p>
                    </div>
                </div>

                {/* Grid Content (Blurred underneath) */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 opacity-75 pointer-events-none select-none">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                                tags={JSON.parse(project.tags)}
                                imageUrl={project.imageUrl}
                                category={project.category}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-muted-foreground">
                            No projects found in this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
