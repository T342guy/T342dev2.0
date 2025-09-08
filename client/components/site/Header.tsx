import { Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-gradient-to-br from-primary to-accent shadow ring-1 ring-black/5" />
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">T342</span>
            <span className="text-xs text-muted-foreground">
              How do I fix that now?
            </span>
          </div>
        </Link>
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
          <a href="mailto:T342guy@proton.me" className="hidden md:block">
            <Button variant="ghost" className="gap-2">
              <Mail className="size-4" /> Email
            </Button>
          </a>
          <a href="#contact" className="md:hidden">
            <Button variant="secondary" className="gap-2">
              <MessageCircle className="size-4" /> Contact
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
