import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Github, Twitter, ArrowRight } from "lucide-react";

import { toast } from "sonner";

export default function Index() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData) as Record<string, string>;
    try {
      setLoading(true);
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      toast.success("Thanks for reaching out — I\'ll reply shortly.");
      form.reset();
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-gradient-to-b from-background to-background">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,hsl(var(--primary)/.18)_0%,transparent_60%)]" />
          <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary"><span className="h-2 w-2 rounded-full bg-primary"/> Available for work</p>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">Nathan Johnson — building thoughtful products for the web</h1>
              <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">I design and develop high‑quality websites and digital experiences that are fast, accessible, and beautiful. Let’s create something exceptional together.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="mailto:T342guy@proton.me"><Button size="lg" className="gap-2"><Mail className="size-4"/> Email me</Button></a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/nathanj" target="_blank" rel="noreferrer"><Github className="size-4"/> GitHub</a>
                <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://x.com/nathanjohnson" target="_blank" rel="noreferrer"><Twitter className="size-4"/> X</a>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto h-72 w-72 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-xl ring-1 ring-black/5 md:ml-auto md:h-96 md:w-96">
                <div className="h-full w-full rounded-2xl bg-background p-6">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-card text-center">
                    <span className="text-7xl">👋</span>
                    <p className="mt-2 text-sm text-muted-foreground">Hi, I\'m Nathan</p>
                    <p className="text-lg font-semibold">Designer & Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="container grid gap-8 py-16 md:grid-cols-3 md:gap-12 md:py-24">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Nathan</h2>
            <p className="mt-2 text-muted-foreground">A bit of background and what I do.</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>I build end‑to‑end web products: from user research and design systems to performant frontends and reliable backends. I obsess over details and ship with quality.</p>
            <p>My toolkit includes React, TypeScript, Node/Express, Tailwind CSS, and modern tooling. I care deeply about accessibility, responsiveness, and maintainability.</p>
          </div>
        </section>

        {/* Contact grid */}
        <section id="contact" className="border-t bg-muted/20 py-16 md:py-24">
          <div className="container">
            <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Let\'s talk</h2>
                <p className="mt-2 max-w-prose text-muted-foreground">Choose any channel that works best for you. I\'m quick to respond.</p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:T342guy@proton.me"><Button className="gap-2"><Mail className="size-4"/> Email</Button></a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Mail className="size-5 text-primary"/> Email</CardTitle>
                  <CardDescription>Best for detailed messages and proposals.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="mailto:T342guy@proton.me" className="block text-sm font-medium hover:underline">T342guy@proton.me</a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Github className="size-5 text-primary"/> GitHub</CardTitle>
                  <CardDescription>Code, projects, and contributions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://github.com/nathanj" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">github.com/nathanj <ArrowRight className="size-4"/></a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Twitter className="size-5 text-primary"/> X (Twitter)</CardTitle>
                  <CardDescription>DMs are open for quick questions.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://x.com/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">x.com/nathanjohnson <ArrowRight className="size-4"/></a>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10">
              <div className="rounded-xl border bg-card p-6 max-w-lg">
                <h3 className="text-xl font-semibold tracking-tight">Response times</h3>
                <p className="mt-2 text-sm text-muted-foreground">I typically respond within 24 hours on weekdays.</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="inline-flex items-center gap-2"><Mail className="size-4 text-primary"/> 24h or less</li>
                  <li className="inline-flex items-center gap-2"><MessageSquare className="size-4 text-primary"/> Within a few hours</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
