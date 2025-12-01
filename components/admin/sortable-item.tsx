"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Button } from "@/components/ui/button";
import { GripVertical, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import { deleteProject } from "@/app/actions";

interface SortableItemProps {
    id: string;
    title: string;
    url: string;
}

export function SortableItem({ id, title, url }: SortableItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <li
            ref={setNodeRef}
            style={style}
            className="flex items-center justify-between border-b pb-4 last:border-0 bg-background p-2 rounded-md mb-2 border"
        >
            <div className="flex items-center gap-4">
                <button {...attributes} {...listeners} className="cursor-grab hover:text-primary">
                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                </button>
                <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-muted-foreground">{url}</p>
                </div>
            </div>
            <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/projects/${id}/edit`}>
                        <Pencil className="h-4 w-4 mr-1" /> Edit
                    </Link>
                </Button>
                <form action={deleteProject.bind(null, id)}>
                    <Button variant="destructive" size="sm" type="submit">
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                    </Button>
                </form>
            </div>
        </li>
    );
}
