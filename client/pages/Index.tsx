import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Calendar, MessageSquare, MessageCircle, Linkedin, Github, Twitter, ArrowRight, Send, Globe, Smartphone } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-b from-background to-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,hsl(var(--primary)/.18)_0%,transparent_60%)]" />
          <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
            <div className="flex flex-col justify-center">
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary"><span className="h-2 w-2 rounded-full bg-primary"/> Available for work</p>
              <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">Nathan Johnson — building thoughtful products for the web</h1>
              <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">I design and develop high‑quality websites and digital experiences that are fast, accessible, and beautiful. Let’s create something exceptional together.</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="mailto:nathan@nathanjohnson.dev"><Button size="lg" className="gap-2"><Mail className="size-4"/> Email me</Button></a>
                <a href="https://cal.com/nathanjohnson" target="_blank" rel="noreferrer"><Button size="lg" variant="secondary" className="gap-2"><Calendar className="size-4"/> Book a call</Button></a>
                <a href="sms:+15551234567" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><Smartphone className="size-4"/> Text</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://linkedin.com/in/nathanjohnson" target="_blank" rel="noreferrer"><Linkedin className="size-4"/> LinkedIn</a>
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
                <a href="mailto:nathan@nathanjohnson.dev"><Button className="gap-2"><Mail className="size-4"/> Email</Button></a>
                <a href="tel:+15551234567"><Button variant="secondary" className="gap-2"><Phone className="size-4"/> Call</Button></a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Mail className="size-5 text-primary"/> Email</CardTitle>
                  <CardDescription>Best for detailed messages and proposals.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="mailto:nathan@nathanjohnson.dev" className="block text-sm font-medium hover:underline">nathan@nathanjohnson.dev</a>
                  <a href="mailto:hello@nathanjohnson.dev" className="block text-sm text-muted-foreground hover:underline">hello@nathanjohnson.dev</a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Phone className="size-5 text-primary"/> Phone & SMS</CardTitle>
                  <CardDescription>For quick chats and urgent questions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:+15551234567" className="block text-sm font-medium hover:underline">+1 (555) 123‑4567</a>
                  <a href="sms:+15551234567" className="block text-sm text-muted-foreground hover:underline">Text me</a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Calendar className="size-5 text-primary"/> Book a call</CardTitle>
                  <CardDescription>Grab a time that suits you this week.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://cal.com/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">cal.com/nathanjohnson <ArrowRight className="size-4"/></a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><MessageCircle className="size-5 text-primary"/> WhatsApp</CardTitle>
                  <CardDescription>Fast messaging, voice notes, and files.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Open chat <ArrowRight className="size-4"/></a>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Linkedin className="size-5 text-primary"/> LinkedIn</CardTitle>
                  <CardDescription>Professional updates and messages.</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href="https://linkedin.com/in/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">Connect <ArrowRight className="size-4"/></a>
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

            {/* Form */}
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Send a message</h3>
                <p className="mt-2 max-w-prose text-muted-foreground">Prefer email but don\'t want to switch tabs? Use the form and it\'ll reach my inbox.</p>
                <form onSubmit={onSubmit} className="mt-6 space-y-4">
                  <input type="hidden" name="source" value="contact-section" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input name="name" placeholder="Your name" required />
                    <Input type="email" name="email" placeholder="Email" required />
                  </div>
                  <Input name="subject" placeholder="Subject (optional)" />
                  <Textarea name="message" placeholder="Tell me a bit about your project or idea" required />
                  <Button type="submit" disabled={loading} className="gap-2">{loading ? "Sending..." : (<><Send className="size-4"/> Send message</>)}</Button>
                </form>
              </div>
              <div className="rounded-xl border bg-card p-6">
                <h3 className="text-base font-semibold">Response times</h3>
                <p className="mt-2 text-sm text-muted-foreground">I typically respond within 24 hours on weekdays. For urgent matters, call or text for the fastest response.</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="inline-flex items-center gap-2"><Mail className="size-4 text-primary"/> 24h or less</li>
                  <li className="inline-flex items-center gap-2"><MessageSquare className="size-4 text-primary"/> Within a few hours</li>
                  <li className="inline-flex items-center gap-2"><Calendar className="size-4 text-primary"/> Same‑week availability</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
}
