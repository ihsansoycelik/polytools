"use client";

import { useActionState } from "react";
import { createProject } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewProjectPage() {
    return (
        <div className="container mx-auto py-10 max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={createProject} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Title</Label>
                            <Input id="title" name="title" required placeholder="Project Name" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description" required placeholder="Project Description" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="url">URL</Label>
                            <Input id="url" name="url" type="url" required placeholder="https://example.com" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input id="category" name="category" required placeholder="Analytics, Bot, etc." />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags (comma separated)</Label>
                            <Input id="tags" name="tags" placeholder="React, Next.js, Finance" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="imageUrl">Image URL (optional)</Label>
                            <Input id="imageUrl" name="imageUrl" type="url" placeholder="https://example.com/image.png" />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <Button type="button" variant="outline" onClick={() => window.history.back()}>
                                Cancel
                            </Button>
                            <Button type="submit">Create Project</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
