import { ClipboardCheck, Ruler, Wrench, Zap, ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Site Survey",
    description: "Our team visits your property to assess roof space, orientation, and electrical setup for optimal solar placement.",
    duration: "1-2 Days",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Custom Design",
    description: "We create a tailored solar system design based on your energy consumption and budget requirements.",
    duration: "2-3 Days",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert technicians install your solar system with precision, ensuring safety and maximum efficiency.",
    duration: "1-3 Days",
  },
  {
    number: "04",
    icon: Zap,
    title: "Net Metering",
    description: "We handle all WAPDA/K-Electric paperwork to get your net metering approved and start earning credits.",
    duration: "2-4 Weeks",
  },
];

export function ProcessTimeline() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="process"
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
            Simple Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-4"
            data-testid="text-process-heading"
          >
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to net metering, we handle everything for a hassle-free experience
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(45,100%,50%)] via-[hsl(210,40%,22%)] to-[hsl(45,100%,50%)] -translate-y-1/2 rounded-full" />
            
            <div className="relative grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`text-center transition-all duration-700 ${
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  data-testid={`card-step-${index + 1}`}
                >
                  <div className="relative inline-flex mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[hsl(45,100%,50%)] to-[hsl(45,100%,42%)] flex items-center justify-center shadow-lg relative z-10">
                      <step.icon className="h-8 w-8 text-[hsl(210,40%,16%)]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[hsl(210,40%,22%)] text-white text-sm font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <span className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
                    {step.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(45,100%,50%)] via-[hsl(210,40%,22%)] to-[hsl(45,100%,50%)]" />
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative transition-all duration-700 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  data-testid={`card-step-mobile-${index + 1}`}
                >
                  <div className="absolute -left-8 top-0">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(45,100%,50%)] to-[hsl(45,100%,42%)] flex items-center justify-center shadow-lg">
                      <step.icon className="h-6 w-6 text-[hsl(210,40%,16%)]" />
                    </div>
                  </div>
                  
                  <div className="ml-10 bg-card rounded-xl p-6 shadow-md border">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)]">
                        STEP {step.number}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[hsl(210,40%,22%)] dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
