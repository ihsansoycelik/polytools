import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            Polymarket Ecosystem
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/#categories" className="hover:text-foreground transition-colors">
              Categories
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              News
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/#faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/advertise" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block">
            Advertise
          </Link>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/submit">Submit Project</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
