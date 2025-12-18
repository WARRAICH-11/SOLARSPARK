import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useInView } from "@/hooks/use-in-view";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    location: "Lahore",
    rating: 5,
    text: "Solar Electric transformed our home. Our electricity bill dropped from Rs. 35,000 to just Rs. 2,000 monthly. The installation team was professional and completed everything in just 2 days. Highly recommended!",
    systemSize: "10kW",
    savings: "Rs. 33,000/month",
    initials: "AH",
  },
  {
    id: 2,
    name: "Fatima Malik",
    location: "Karachi",
    rating: 5,
    text: "Excellent service from start to finish. They handled all the net metering paperwork with K-Electric. Now we're even earning credits! The quality of panels and inverter is top-notch.",
    systemSize: "7kW",
    savings: "Rs. 25,000/month",
    initials: "FM",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    location: "Islamabad",
    rating: 5,
    text: "I compared multiple solar companies before choosing Solar Electric. Their pricing was competitive and they delivered exactly what they promised. The after-sales support is exceptional.",
    systemSize: "15kW",
    savings: "Rs. 55,000/month",
    initials: "MA",
  },
  {
    id: 4,
    name: "Zainab Sheikh",
    location: "Gujranwala",
    rating: 5,
    text: "We installed a 5kW system for our small factory. The team was knowledgeable and helped us choose the right setup. Now we're saving significantly on our operational costs.",
    systemSize: "5kW",
    savings: "Rs. 18,000/month",
    initials: "ZS",
  },
  {
    id: 5,
    name: "Usman Qureshi",
    location: "Sialkot",
    rating: 5,
    text: "Best decision we made for our home. The Solar Electric team was transparent about everything - costs, timeline, and expected savings. They delivered on every promise!",
    systemSize: "8kW",
    savings: "Rs. 28,000/month",
    initials: "UQ",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : typeof window !== "undefined" && window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 sm:py-28 bg-[hsl(210,40%,22%)] dark:bg-[hsl(210,40%,12%)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[hsl(45,100%,50%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(45,100%,50%)]/20 text-[hsl(45,100%,50%)] text-sm font-semibold mb-4">
            Customer Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-testid="text-testimonials-heading"
          >
            What Our Customers Say
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join 500+ satisfied customers who have made the switch to solar energy
          </p>
        </div>

        <div
          className={`relative transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  data-testid={`card-testimonial-${index}`}
                >
                  <Card className="h-full bg-white/10 backdrop-blur-sm border-white/10">
                    <CardContent className="p-6">
                      <Quote className="h-8 w-8 text-[hsl(45,100%,50%)] mb-4 opacity-50" />
                      
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[hsl(45,100%,50%)] text-[hsl(45,100%,50%)]"
                          />
                        ))}
                      </div>

                      <p className="text-white/90 mb-6 leading-relaxed text-sm">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-3 mb-4 pt-4 border-t border-white/10">
                        <Avatar className="h-10 w-10 bg-[hsl(45,100%,50%)]">
                          <AvatarFallback className="bg-[hsl(45,100%,50%)] text-[hsl(210,40%,16%)] font-semibold text-sm">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          <p className="text-sm text-white/60">{testimonial.location}</p>
                        </div>
                      </div>

                      <div className="flex gap-4 text-sm">
                        <div>
                          <p className="text-white/50">System</p>
                          <p className="font-semibold text-white">{testimonial.systemSize}</p>
                        </div>
                        <div>
                          <p className="text-white/50">Savings</p>
                          <p className="font-semibold text-[hsl(45,100%,50%)]">{testimonial.savings}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white disabled:opacity-30"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {[...Array(maxIndex + 1)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-6 bg-[hsl(45,100%,50%)]"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  data-testid={`button-testimonial-dot-${i}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white disabled:opacity-30"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
