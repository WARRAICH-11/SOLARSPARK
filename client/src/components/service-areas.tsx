import { MapPin, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

const cities = [
  {
    name: "Lahore",
    region: "Punjab",
    installations: "150+",
    featured: true,
  },
  {
    name: "Karachi",
    region: "Sindh",
    installations: "120+",
    featured: true,
  },
  {
    name: "Islamabad",
    region: "Federal",
    installations: "80+",
    featured: true,
  },
  {
    name: "Rawalpindi",
    region: "Punjab",
    installations: "60+",
    featured: false,
  },
  {
    name: "Faisalabad",
    region: "Punjab",
    installations: "45+",
    featured: false,
  },
  {
    name: "Gujrat",
    region: "Punjab",
    installations: "35+",
    featured: false,
  },
  {
    name: "Gujranwala",
    region: "Punjab",
    installations: "40+",
    featured: false,
  },
  {
    name: "Sialkot",
    region: "Punjab",
    installations: "30+",
    featured: false,
  },
];

export function ServiceAreas() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="areas"
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
            <MapPin className="inline h-4 w-4 mr-1" />
            Coverage Areas
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-4"
            data-testid="text-areas-heading"
          >
            We Serve All Major Cities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional solar installation services across Pakistan with local teams
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {cities.map((city, index) => (
            <Card
              key={city.name}
              className={`group overflow-visible card-lift transition-all duration-700 ${
                city.featured
                  ? "border-[hsl(45,100%,50%)] shadow-lg"
                  : "shadow-md"
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 75}ms` }}
              data-testid={`card-city-${city.name.toLowerCase()}`}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${city.featured ? "bg-[hsl(45,100%,50%)]/20" : "bg-muted"}`}>
                    <MapPin className={`h-5 w-5 ${city.featured ? "text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)]" : "text-muted-foreground"}`} />
                  </div>
                  {city.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-[hsl(45,100%,50%)]/10 text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)] text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-[hsl(210,40%,22%)] dark:text-white mb-1">
                  {city.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {city.region}
                </p>
                
                <div className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">
                    <span className="font-semibold text-[hsl(210,40%,22%)] dark:text-white">{city.installations}</span> installations
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground">
            Don't see your city? <span className="text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)] font-medium">Contact us</span> – we may still be able to serve you!
          </p>
        </div>
      </div>
    </section>
  );
}
