import { prisma } from "@/lib/prisma";
import { updateProject } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default async function EditProjectPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const project = await prisma.project.findUnique({
        where: { id },
    });

    if (!project) {
        redirect("/admin/dashboard");
    }

    const tags = JSON.parse(project.tags).join(", ");

    return (
        <div className="container mx-auto py-10 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Edit Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={updateProject.bind(null, id)} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" defaultValue={project.title} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" defaultValue={project.description} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="url">URL</Label>
                            <Input id="url" name="url" type="url" defaultValue={project.url} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input id="category" name="category" defaultValue={project.category} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags (comma separated)</Label>
                            <Input id="tags" name="tags" defaultValue={tags} />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL (optional)</Label>
                            <Input id="imageUrl" name="imageUrl" type="url" defaultValue={project.imageUrl || ""} />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Button type="button" variant="outline" asChild>
                                <a href="/admin/dashboard">Cancel</a>
                            </Button>
                            <Button type="submit">Update Project</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
