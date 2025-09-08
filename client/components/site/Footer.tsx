import { Mail, Github, Twitter, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <div className="mb-3 text-lg font-semibold">Nathan Johnson</div>
          <p className="max-w-sm text-sm text-muted-foreground">Product designer and full‑stack developer crafting delightful, accessible experiences. Open for freelance and collaborations.</p>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Direct</div>
          <ul className="space-y-2 text-sm">
            <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:T342guy@proton.me"><Mail className="size-4"/> T342guy@proton.me</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Profiles</div>
          <ul className="space-y-2 text-sm">
            <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/nathanj" target="_blank" rel="noreferrer"><Github className="size-4"/> github.com/nathanj</a></li>
            <li><a className="inline-flex items-center gap-2 hover:text-foreground" href="https://x.com/nathanjohnson" target="_blank" rel="noreferrer"><Twitter className="size-4"/> x.com/nathanjohnson</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Nathan Johnson. All rights reserved.</p>
          <p className="inline-flex items-center gap-2"><MapPin className="size-3"/> Based in Austin, TX</p>
        </div>
      </div>
    </footer>
  );
}
