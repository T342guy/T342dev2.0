import { Outlet } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactDock from "@/components/site/ContactDock";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      <ContactDock />
    </div>
  );
}
