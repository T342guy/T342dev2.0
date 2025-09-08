import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Github, Twitter, ArrowRight, Gamepad, Youtube, Twitch, Globe } from "lucide-react";

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
              <h1 className="text-balance text-4xl font-extrabold tracking-tight md:text-6xl">Hey there! I am T342!</h1>
              <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">Hey hey! Nice to see you poppin by my website!</p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="mailto:T342guy@proton.me"><Button size="lg" className="gap-2"><Mail className="size-4"/> Email me</Button></a>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto h-72 w-72 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 shadow-xl ring-1 ring-black/5 md:ml-auto md:h-96 md:w-96">
                <div className="h-full w-full rounded-2xl bg-background p-6">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border bg-card text-center">
                    <span className="text-7xl">👋</span>
                    <p className="mt-2 text-sm text-muted-foreground">Hey there, I\'m T342!</p>
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
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About T342</h2>
            <p className="mt-2 text-muted-foreground">A bit of background, Is it interesting? I have no clue.</p>
          </div>
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>I am T342! But my username is T342guy on almost all platforms!</p>
            <p>Im just some random dude strafing around the internet! Who woulda thought?</p>
            <p>I am an avid gamer, hobby programmer, and whatever else my ADHD says is the next new revolutionary thing around</p>
          </div>
        </section>

        {/* Contact grid */}
        <section id="contact" className="border-t bg-muted/20 py-16 md:py-24">
          <div className="container">
            <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
              <div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Wanna reach out?</h2>
                <p className="mt-2 max-w-prose text-muted-foreground">Email. hmm yes...</p>
              </div>
              <div className="flex gap-3">
                <a href="mailto:T342guy@proton.me"><Button className="gap-2"><Mail className="size-4"/> Email</Button></a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-1">
              <Card>
                <CardHeader>
                  <CardTitle className="inline-flex items-center gap-2"><Mail className="size-5 text-primary"/> Email</CardTitle>
                  <CardDescription><p>If you wanna contact me, go right ahead! I can respond when I can!</p></CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="mailto:T342guy@proton.me" className="block text-sm font-medium hover:underline">T342guy@proton.me</a>
                </CardContent>
              </Card>
            </div>

            {/* Accounts section (separate) */}
            <section id="accounts" className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Accounts</h3>
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="inline-flex items-center gap-2"><Twitter className="size-5 text-primary"/> X (Twitter)</CardTitle>
                    <CardDescription><p>Just twitter. Also somehow a dumpsterfire.</p></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://x.com/T342guy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">x.com/T342guy <ArrowRight className="size-4"/></a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="inline-flex items-center gap-2"><Gamepad className="size-5 text-primary"/> Steam</CardTitle>
                    <CardDescription><p>My steam account, For no reason... That is unless you spend money on TF2 like a madman.</p></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://steamcommunity.com/id/T342guy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">steamcommunity.com/id/T342guy <ArrowRight className="size-4"/></a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="inline-flex items-center gap-2"><Youtube className="size-5 text-primary"/> YouTube</CardTitle>
                    <CardDescription><p>My youtube channel!</p></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://www.youtube.com/channel/UCC2PYQVdiFAwE5927TPuVlA" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">youtube.com/channel/UCC2PYQVdiFAwE5927TPuVlA <ArrowRight className="size-4"/></a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="inline-flex items-center gap-2"><Twitch className="size-5 text-primary"/> Twitch</CardTitle>
                    <CardDescription>Live streams and chat.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://www.twitch.tv/T342guy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">twitch.tv/T342guy <ArrowRight className="size-4"/></a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="inline-flex items-center gap-2"><Globe className="size-5 text-primary"/> Reddit</CardTitle>
                    <CardDescription>Community posts and discussions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://www.reddit.com/user/T342games" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">reddit.com/user/T342games <ArrowRight className="size-4"/></a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="inline-flex items-center gap-2"><Github className="size-5 text-primary"/> GitHub</CardTitle>
                    <CardDescription>Code, projects, and contributions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="https://github.com/T342guy" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">github.com/T342guy <ArrowRight className="size-4"/></a>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>
        </section>
    </main>
  );
}
