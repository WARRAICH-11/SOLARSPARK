import { Shield, Wrench, Headphones, Award, Clock, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

const features = [
  {
    icon: Shield,
    title: "Quality Materials",
    description:
      "We use only Tier-1 solar panels from trusted brands like Longi, Jinko, and Canadian Solar with 25-year warranties.",
    highlight: "Tier-1 Panels",
  },
  {
    icon: Wrench,
    title: "Expert Engineers",
    description:
      "Our certified engineers have installed 500+ systems across Pakistan with zero compromise on quality.",
    highlight: "500+ Installations",
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "24/7 customer support with free maintenance visits and real-time monitoring of your solar system.",
    highlight: "24/7 Support",
  },
];

const additionalBenefits = [
  { icon: Award, text: "ISO Certified Company" },
  { icon: Clock, text: "Quick Installation" },
  { icon: ThumbsUp, text: "Satisfaction Guaranteed" },
];

export function WhyChooseUs() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-20 sm:py-28 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(45,100%,50%)]/10 text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)] text-sm font-semibold mb-4">
            Why Solar Electric?
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-4"
            data-testid="text-why-us-heading"
          >
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to delivering the best solar solutions with unmatched quality and service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`relative overflow-visible border-0 shadow-lg card-lift transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              data-testid={`card-feature-${index}`}
            >
              <CardContent className="p-8 pt-12">
                <div className="absolute -top-6 left-8">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(45,100%,50%)] to-[hsl(45,100%,42%)] shadow-lg">
                    <feature.icon className="h-7 w-7 text-[hsl(210,40%,16%)]" />
                  </div>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[hsl(210,40%,22%)]/10 dark:bg-[hsl(45,100%,50%)]/10 text-[hsl(210,40%,22%)] dark:text-[hsl(45,100%,50%)] text-xs font-semibold mb-4">
                  {feature.highlight}
                </span>
                <h3 className="text-xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {additionalBenefits.map((benefit, index) => (
            <div
              key={benefit.text}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-card shadow-sm border"
              data-testid={`badge-benefit-${index}`}
            >
              <benefit.icon className="h-5 w-5 text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)]" />
              <span className="text-sm font-medium text-[hsl(210,40%,22%)] dark:text-white">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
