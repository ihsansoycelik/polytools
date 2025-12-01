import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { submitProject } from "@/app/actions";

export default function SubmitPage() {
    return (
        <div className="container max-w-2xl mx-auto py-12 px-4">
            <div className="space-y-6">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Submit Your Project</h1>
                    <p className="text-muted-foreground">
                        Share your Polymarket tool with the community.
                    </p>
                </div>

                <form action={submitProject} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="title">Project Name</Label>
                            <Input id="title" name="title" placeholder="e.g. PolyWhale" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Short Description</Label>
                            <Input
                                id="description"
                                name="description"
                                placeholder="One sentence about your project"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="url">Link (Website or GitHub)</Label>
                            <Input
                                id="url"
                                name="url"
                                type="url"
                                placeholder="https://..."
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Select name="category" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Analytics">Analytics</SelectItem>
                                    <SelectItem value="Bots">Bots</SelectItem>
                                    <SelectItem value="News">News</SelectItem>
                                    <SelectItem value="Tools">Tools</SelectItem>
                                    <SelectItem value="Other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contactEmail">Contact Email</Label>
                            <Input
                                id="contactEmail"
                                name="contactEmail"
                                type="email"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div className="rounded-lg border p-4">
                            <p className="text-sm text-muted-foreground mb-4">
                                Listings are free. You can optionally upgrade to Premium submit below.
                            </p>
                            <div className="flex items-start space-x-3">
                                <Checkbox id="isPremium" name="isPremium" />
                                <div className="grid gap-1.5 leading-none">
                                    <label
                                        htmlFor="isPremium"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Premium Submit $39 <span className="text-xs text-muted-foreground font-normal">one-time review fee</span>
                                    </label>
                                    <p className="text-sm text-muted-foreground">
                                        • Skip the wait. Faster review approval.<br />
                                        • Official badge on your listing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button type="submit" className="w-full">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}
