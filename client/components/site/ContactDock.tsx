import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, MessageSquare, Send, Calendar, Linkedin, Github, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
            <div className="grid grid-cols-2 gap-2">
              <a href="mailto:nathan@nathanjohnson.dev" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Mail className="size-4"/> Email</a>
              <a href="tel:+15551234567" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Phone className="size-4"/> Call</a>
              <a href="sms:+15551234567" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><MessageSquare className="size-4"/> Text</a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><MessageCircle className="size-4"/> WhatsApp</a>
              <a href="https://cal.com/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Calendar className="size-4"/> Book</a>
              <a href="https://linkedin.com/in/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Linkedin className="size-4"/> LinkedIn</a>
              <a href="https://github.com/nathanj" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Github className="size-4"/> GitHub</a>
              <a href="https://x.com/nathanjohnson" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border p-3 hover:bg-accent"><Twitter className="size-4"/> X</a>
            </div>
            <form onSubmit={onSubmit} className="space-y-3">
              <input type="hidden" name="source" value="contact-dock" />
              <Input name="name" placeholder="Your name" required />
              <Input type="email" name="email" placeholder="Email" required />
              <Textarea name="message" placeholder="Message" required />
              <Button type="submit" className="w-full" disabled={loading}><Send className="size-4"/> {loading ? "Sending..." : "Send message"}</Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
