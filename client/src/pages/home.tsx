import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { PricingPlans } from "@/components/pricing-plans";
import { SolarCalculator } from "@/components/solar-calculator";
import { ProductShowcase } from "@/components/product-showcase";
import { ProcessTimeline } from "@/components/process-timeline";
import { ServiceAreas } from "@/components/service-areas";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <PricingPlans />
        <SolarCalculator />
        <ProductShowcase />
        <ProcessTimeline />
        <ServiceAreas />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
