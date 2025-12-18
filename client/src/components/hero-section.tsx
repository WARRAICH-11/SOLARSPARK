import { ArrowRight, Play, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCalculator = () => {
    const element = document.querySelector("#calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80')`,
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium border border-white/20">
            <Zap className="h-4 w-4 text-[hsl(45,100%,50%)]" />
            Trusted by 500+ Pakistani Homes & Businesses
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          data-testid="text-hero-headline"
        >
          Empowering Your Future
          <br />
          <span className="gradient-text">with Clean Energy</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10"
          data-testid="text-hero-subheadline"
        >
          Quality materials, expert installation, and prices that fit your budget.
          <br className="hidden sm:block" />
          Pakistan's leading solar installation company.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            onClick={scrollToContact}
            className="btn-gold text-lg px-8 py-6 rounded-lg border-0 font-semibold shadow-lg"
            data-testid="button-get-quote-hero"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToCalculator}
            className="text-lg px-8 py-6 rounded-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
            data-testid="button-calculate-savings"
          >
            <Play className="mr-2 h-5 w-5" />
            Calculate Your Savings
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="p-2 rounded-lg bg-[hsl(45,100%,50%)]/20">
              <Shield className="h-6 w-6 text-[hsl(45,100%,50%)]" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold" data-testid="text-stat-warranty">25 Years</p>
              <p className="text-white/70 text-sm">Panel Warranty</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="p-2 rounded-lg bg-[hsl(45,100%,50%)]/20">
              <Users className="h-6 w-6 text-[hsl(45,100%,50%)]" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold" data-testid="text-stat-customers">500+</p>
              <p className="text-white/70 text-sm">Happy Customers</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="p-2 rounded-lg bg-[hsl(45,100%,50%)]/20">
              <Zap className="h-6 w-6 text-[hsl(45,100%,50%)]" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold" data-testid="text-stat-systems">Tier-1</p>
              <p className="text-white/70 text-sm">Quality Panels</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
