import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactDock() {
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
      toast.success("Message sent — I\'ll reply soon.");
      form.reset();
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="lg" className="shadow-lg shadow-primary/25">Contact</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Get in touch</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-1 gap-2">
              <a href="mailto:T342guy@proton.me" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Mail className="size-4"/> Email</a>
              <a href="https://github.com/nathanj" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Github className="size-4"/> GitHub</a>
              <a href="https://x.com/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Twitter className="size-4"/> X</a>
            </div>
            <p className="text-sm text-muted-foreground">Prefer email? Send a message to <a className="underline" href="mailto:T342guy@proton.me">T342guy@proton.me</a>.</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
