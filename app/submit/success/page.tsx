import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function SubmitSuccessPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[60vh] space-y-4 text-center">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
            <h1 className="text-3xl font-bold">Submission Received!</h1>
            <p className="text-muted-foreground max-w-md">
                Thank you for submitting your project. We will review it shortly and add it to the directory if it meets our guidelines.
            </p>
            <Button asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
