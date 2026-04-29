import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Offer } from "@/components/Offer";
import { GiftVoucher } from "@/components/GiftVoucher";
import { Treatments } from "@/components/Treatments";
import { BrandStrip } from "@/components/BrandStrip";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADORN Hair & Beauty — Premium Salon & Spa" },
      {
        name: "description",
        content:
          "ADORN Hair & Beauty offers world-class hair treatments, facials, bridal packages and gift vouchers.",
      },
      { property: "og:title", content: "ADORN Hair & Beauty" },
      {
        property: "og:description",
        content: "World-class beauty treatments, bridal packages and gift vouchers.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offer />
        <GiftVoucher />
        <Treatments />
        <BrandStrip />
      </main>
      <Footer />
    </div>
  );
}
