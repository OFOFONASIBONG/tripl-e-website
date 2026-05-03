import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Marquee from "./Marquee";
import CustomCursor from "./CustomCursor";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col w-full min-w-0 overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      <main className="flex-1 min-w-0">{children}</main>
      <Marquee />
      <Footer />
    </div>
  );
}
