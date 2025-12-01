import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
    title: string;
    description: string;
    url: string;
    tags: string[];
    imageUrl?: string | null;
    category: string;
}

export function ProjectCard({
    title,
    description,
    url,
    tags,
    imageUrl,
    category,
}: ProjectCardProps) {
    return (
        <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
            <div className="aspect-video w-full overflow-hidden bg-muted relative">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        No Image
                    </div>
                )}
            </div>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="mb-2">
                        {category}
                    </Badge>
                </div>
                <CardTitle className="line-clamp-1">{title}</CardTitle>
                <CardDescription className="line-clamp-2">
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                        </Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href={url} target="_blank" rel="noopener noreferrer">
                        Visit <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
