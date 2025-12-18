import { useState } from "react";
import { Sun, Phone, Mail, MapPin, Send, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useInView } from "@/hooks/use-in-view";

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Gujrat",
  "Gujranwala",
  "Sialkot",
  "Other",
];

const quickLinks = [
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Installation Plans", href: "#plans" },
  { label: "Solar Calculator", href: "#calculator" },
  { label: "Our Products", href: "#products" },
  { label: "How It Works", href: "#process" },
  { label: "Service Areas", href: "#areas" },
];

export function Footer() {
  const { ref, isInView } = useInView();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    monthlyBill: "",
    propertyType: "residential",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const billValue = data.monthlyBill.replace(/,/g, "");
      const monthlyBill = billValue ? parseInt(billValue) : undefined;
      return apiRequest("POST", "/api/leads", {
        name: data.name,
        phone: data.phone,
        city: data.city,
        propertyType: data.propertyType,
        message: data.message || undefined,
        ...(monthlyBill && !isNaN(monthlyBill) ? { monthlyBill } : {}),
      });
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "Thank you for your interest!",
        description: "Our team will contact you within 24 hours.",
      });
      setFormData({
        name: "",
        phone: "",
        city: "",
        monthlyBill: "",
        propertyType: "residential",
        message: "",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and city are required.",
        variant: "destructive",
      });
      return;
    }
    submitMutation.mutate(formData);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      id="contact"
      ref={ref}
      className="bg-[hsl(210,40%,16%)] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div
            className={`lg:col-span-1 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 rounded-lg bg-[hsl(45,100%,50%)]">
                <Sun className="h-6 w-6 text-[hsl(210,40%,16%)]" />
              </div>
              <span className="text-xl font-bold">Solar Electric</span>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              Pakistan's trusted solar installation company. We provide quality solar solutions for homes and businesses across major cities.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="tel:+923127739752"
                className="flex items-center gap-3 text-white/80 hover:text-[hsl(45,100%,50%)] transition-colors"
                data-testid="link-footer-phone"
              >
                <div className="p-2 rounded-lg bg-white/10">
                  <Phone className="h-4 w-4" />
                </div>
                <span>+92 312 7739752</span>
              </a>
              <a
                href="mailto:info@solarelectric.pk"
                className="flex items-center gap-3 text-white/80 hover:text-[hsl(45,100%,50%)] transition-colors"
                data-testid="link-footer-email"
              >
                <div className="p-2 rounded-lg bg-white/10">
                  <Mail className="h-4 w-4" />
                </div>
                <span>info@solarelectric.pk</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <div className="p-2 rounded-lg bg-white/10">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 rounded-lg bg-white/10">
                  <Clock className="h-4 w-4" />
                </div>
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium text-white/60">Follow Us</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[hsl(45,100%,50%)] hover:text-[hsl(210,40%,16%)] transition-colors"
                  data-testid="link-social-facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[hsl(45,100%,50%)] hover:text-[hsl(210,40%,16%)] transition-colors"
                  data-testid="link-social-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-2.5 rounded-lg bg-white/10 hover:bg-[hsl(45,100%,50%)] hover:text-[hsl(210,40%,16%)] transition-colors"
                  data-testid="link-social-linkedin"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/923127739752"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] transition-colors"
                  data-testid="link-social-whatsapp"
                >
                  <SiWhatsapp className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm font-medium text-white/60 mb-4">Quick Links</p>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-sm text-white/70 hover:text-[hsl(45,100%,50%)] transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-2 transition-all duration-700 delay-150 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-contact-heading">
                Get a Free Quote
              </h3>
              <p className="text-white/60 mb-6">
                Fill out the form and our team will contact you within 24 hours
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
                  <p className="text-white/70 mb-6">
                    We've received your request. Our team will contact you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="name" className="text-white/80 text-sm">
                        Full Name <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-white/80 text-sm">
                        Phone Number <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="phone"
                        placeholder="03XX-XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-contact-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <Label htmlFor="city" className="text-white/80 text-sm">
                        City <span className="text-red-400">*</span>
                      </Label>
                      <Select
                        value={formData.city}
                        onValueChange={(value) => setFormData({ ...formData, city: value })}
                      >
                        <SelectTrigger
                          className="mt-1.5 bg-white/10 border-white/20 text-white"
                          data-testid="select-contact-city"
                        >
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          {cities.map((city) => (
                            <SelectItem key={city} value={city}>
                              {city}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="monthlyBill" className="text-white/80 text-sm">
                        Monthly Electricity Bill (PKR)
                      </Label>
                      <Input
                        id="monthlyBill"
                        placeholder="e.g., 25,000"
                        value={formData.monthlyBill}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9,]/g, "");
                          setFormData({ ...formData, monthlyBill: value });
                        }}
                        className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        data-testid="input-contact-bill"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-white/80 text-sm mb-3 block">Property Type</Label>
                    <RadioGroup
                      value={formData.propertyType}
                      onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                      className="flex gap-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="residential"
                          id="residential"
                          className="border-white/40 text-[hsl(45,100%,50%)]"
                          data-testid="radio-residential"
                        />
                        <Label htmlFor="residential" className="text-white/80 cursor-pointer">
                          Residential
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="commercial"
                          id="commercial"
                          className="border-white/40 text-[hsl(45,100%,50%)]"
                          data-testid="radio-commercial"
                        />
                        <Label htmlFor="commercial" className="text-white/80 cursor-pointer">
                          Commercial
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white/80 text-sm">
                      Message (Optional)
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[100px]"
                      data-testid="textarea-contact-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-gold border-0"
                    size="lg"
                    disabled={submitMutation.isPending}
                    data-testid="button-contact-submit"
                  >
                    {submitMutation.isPending ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 border-2 border-[hsl(210,40%,16%)] border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Request
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>&copy; {new Date().getFullYear()} Solar Electric Pakistan. All rights reserved.</p>
            <p>
              Best Solar Installation in{" "}
              <span className="text-white/70">Lahore</span>,{" "}
              <span className="text-white/70">Karachi</span>,{" "}
              <span className="text-white/70">Islamabad</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
