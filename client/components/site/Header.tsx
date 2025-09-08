import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-center">
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            About
          </a>
          <a
            href="#work"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Contact
          </a>
          <a
            href="#accounts"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Accounts
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button variant="ghost" className="gap-2">
              <Mail className="size-4" /> Email
            </Button>
          </div>
          <div className="hidden">
            <Button variant="secondary" className="gap-2">
              <MessageCircle className="size-4" /> Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
