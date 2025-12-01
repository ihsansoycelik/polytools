import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Project } from "@prisma/client";
import { SortableList } from "@/components/admin/sortable-list";

export default async function DashboardPage() {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    if (!session) {
        redirect("/admin/login");
    }

    const projects = await prisma.project.findMany({
        orderBy: { order: "asc" },
    });

    const serializedProjects = projects.map((project) => ({
        id: project.id,
        title: project.title,
        url: project.url,
        order: project.order,
    }));

    return (
        <div className="container mx-auto py-10">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <form action={logout}>
                    <Button variant="outline">Logout</Button>
                </form>
            </div>

            <div className="grid gap-6">
                <div className="flex justify-end">
                    <Button asChild>
                        <a href="/admin/projects/new">Add New Project</a>
                    </Button>
                </div>

                <div className="border rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">Projects ({projects.length})</h2>
                    {projects.length === 0 ? (
                        <p className="text-muted-foreground">No projects found.</p>
                    ) : (
                        <SortableList items={serializedProjects} />
                    )}
                </div>
            </div>
        </div>
    );
}
