import { Check, Star, Zap, Building2, Home } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";
import { SiWhatsapp } from "react-icons/si";

const plans = [
  {
    name: "Starter",
    capacity: "3kW - 5kW",
    description: "Ideal for small homes with moderate electricity consumption",
    priceFrom: "4,50,000",
    icon: Home,
    features: [
      "Tier-1 Solar Panels (Longi/Jinko)",
      "Inverex/Knox Hybrid Inverter",
      "Complete Mounting Structure",
      "DC/AC Cables & Accessories",
      "Professional Installation",
      "Net Metering Assistance",
      "1 Year Free Maintenance",
    ],
    popular: false,
    savings: "Up to Rs. 15,000/month",
  },
  {
    name: "Premium",
    capacity: "7kW - 10kW",
    description: "Best for medium-sized families with higher energy needs",
    priceFrom: "9,50,000",
    icon: Star,
    features: [
      "Premium Tier-1 Panels (Longi Hi-MO)",
      "GoodWe/Huawei Smart Inverter",
      "Heavy-Duty Mounting System",
      "High-Quality Wiring & Protection",
      "Expert Installation Team",
      "Complete Net Metering Setup",
      "2 Years Free Maintenance",
      "Real-time Monitoring App",
    ],
    popular: true,
    savings: "Up to Rs. 35,000/month",
  },
  {
    name: "Elite",
    capacity: "15kW+",
    description: "Commercial & industrial solutions for maximum power",
    priceFrom: "18,00,000",
    icon: Building2,
    features: [
      "Commercial-Grade Tier-1 Panels",
      "Industrial Inverter (Huawei/Sungrow)",
      "Custom Mounting Solutions",
      "Industrial-Grade Components",
      "Dedicated Project Manager",
      "Priority Net Metering Processing",
      "3 Years Free Maintenance",
      "24/7 Monitoring & Support",
    ],
    popular: false,
    savings: "Up to Rs. 80,000/month",
  },
];

const WHATSAPP_NUMBER = "923127739752";

export function PricingPlans() {
  const { ref, isInView } = useInView();

  const getWhatsAppLink = (planName: string) => {
    const message = encodeURIComponent(
      `Hi Solar Electric! I'm interested in the ${planName} solar package. Can we discuss pricing and customization options?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section
      id="plans"
      ref={ref}
      className="py-20 sm:py-28 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(45,100%,50%)]/10 text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)] text-sm font-semibold mb-4">
            Flexible Packages
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-4"
            data-testid="text-plans-heading"
          >
            Installation Plans
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect solar solution for your energy needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-visible border ${
                plan.popular
                  ? "border-[hsl(45,100%,50%)] shadow-xl scale-[1.02] md:scale-105"
                  : "shadow-lg"
              } card-lift transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-[hsl(45,100%,50%)] to-[hsl(45,100%,42%)] text-[hsl(210,40%,16%)] font-semibold px-4 py-1 shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className={`pt-8 pb-6 ${plan.popular ? "bg-[hsl(210,40%,22%)] text-white rounded-t-lg" : ""}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl ${plan.popular ? "bg-[hsl(45,100%,50%)]" : "bg-[hsl(210,40%,22%)]/10 dark:bg-[hsl(45,100%,50%)]/10"}`}>
                    <plan.icon className={`h-6 w-6 ${plan.popular ? "text-[hsl(210,40%,16%)]" : "text-[hsl(210,40%,22%)] dark:text-[hsl(45,100%,50%)]"}`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${plan.popular ? "text-white" : "text-[hsl(210,40%,22%)] dark:text-white"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm font-medium ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                      {plan.capacity}
                    </p>
                  </div>
                </div>
                <p className={`text-sm ${plan.popular ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-medium text-muted-foreground">PKR</span>
                    <span className="text-3xl font-bold text-[hsl(210,40%,22%)] dark:text-white">
                      {plan.priceFrom}
                    </span>
                  </div>
                  <p className="text-sm text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)] font-medium mt-2">
                    <Zap className="inline h-4 w-4 mr-1" />
                    {plan.savings}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={getWhatsAppLink(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "btn-gold border-0"
                        : "bg-[hsl(210,40%,22%)] hover:bg-[hsl(210,40%,28%)] text-white"
                    }`}
                    size="lg"
                    data-testid={`button-plan-${plan.name.toLowerCase()}`}
                  >
                    <SiWhatsapp className="mr-2 h-4 w-4" />
                    Get Custom Quote
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[hsl(45,100%,50%)]/10 border border-[hsl(45,100%,50%)]/20">
            <SiWhatsapp className="h-5 w-5 text-[#25D366]" />
            <p className="text-sm font-medium text-[hsl(210,40%,22%)] dark:text-white">
              All prices are negotiable. <span className="text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)]">Connect on WhatsApp</span> for a custom discount!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
