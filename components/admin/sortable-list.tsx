"use client";

import { useState } from "react";
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./sortable-item";
import { updateProjectOrder } from "@/app/actions";
import { Button } from "@/components/ui/button";

interface Project {
    id: string;
    title: string;
    url: string;
    order: number;
}

interface SortableListProps {
    items: Project[];
}

export function SortableList({ items: initialItems }: SortableListProps) {
    const [items, setItems] = useState(initialItems);
    const [isSaving, setIsSaving] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id);
                const newIndex = items.findIndex((item) => item.id === over.id);

                const newItems = arrayMove(items, oldIndex, newIndex);

                // Update order property based on new index
                const updatedItems = newItems.map((item, index) => ({
                    ...item,
                    order: index
                }));

                // Trigger server update
                handleSaveOrder(updatedItems);

                return updatedItems;
            });
        }
    }

    async function handleSaveOrder(updatedItems: Project[]) {
        setIsSaving(true);
        try {
            await updateProjectOrder(updatedItems.map(item => ({ id: item.id, order: item.order })));
        } catch (error) {
            console.error("Failed to save order", error);
        } finally {
            setIsSaving(false);
        }
    }

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={items}
                strategy={verticalListSortingStrategy}
            >
                <ul className="space-y-2">
                    {items.map((item) => (
                        <SortableItem key={item.id} id={item.id} title={item.title} url={item.url} />
                    ))}
                </ul>
            </SortableContext>
        </DndContext>
    );
}
