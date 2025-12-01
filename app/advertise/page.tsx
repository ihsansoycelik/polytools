import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdvertisePage() {
    return (
        <div className="container max-w-4xl mx-auto py-12 px-4">
            <div className="space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">Advertise with Us</h1>
                    <p className="text-xl text-muted-foreground">
                        Reach thousands of prediction market enthusiasts and developers in our growing community.
                    </p>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Advertising Opportunities</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Featured placement on the homepage</li>
                        <li>Sponsor recognition in our newsletter</li>
                        <li>Dedicated blog posts and reviews</li>
                        <li>Social media shoutouts</li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Get Started</h2>
                    <p className="text-muted-foreground">
                        Contact us at: <a href="mailto:info@polyecosystem.com" className="font-medium text-foreground hover:underline">info@polyecosystem.com</a>
                    </p>
                    <p className="text-muted-foreground">
                        We'll respond within 24 hours with pricing and placement options.
                    </p>
                </div>

                <div className="pt-6">
                    <Button asChild size="lg">
                        <Link href="/submit">Submit a Project Instead</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
