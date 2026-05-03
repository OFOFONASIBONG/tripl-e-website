import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Marquee from "./Marquee";
import CustomCursor from "./CustomCursor";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navigation />
      <main className="flex-1">{children}</main>
      <Marquee />
      <Footer />
    </div>
  );
}
