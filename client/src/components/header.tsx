import { useState, useEffect } from "react";
import { Sun, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#why-us", label: "Why Us" },
  { href: "#plans", label: "Plans" },
  { href: "#calculator", label: "Calculator" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-[hsl(210,40%,10%)]/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#"
            className="flex items-center gap-2"
            data-testid="link-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className={`p-2 rounded-lg ${isScrolled ? "bg-[hsl(210,40%,22%)]" : "bg-white/20 backdrop-blur-sm"}`}>
              <Sun className={`h-6 w-6 ${isScrolled ? "text-[hsl(45,100%,50%)]" : "text-white"}`} />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? "text-[hsl(210,40%,22%)] dark:text-white" : "text-white"}`}>
              Solar Electric
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isScrolled
                    ? "text-[hsl(210,40%,22%)] dark:text-white/90 hover:bg-[hsl(210,40%,22%)]/10 dark:hover:bg-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                data-testid={`link-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+923127739752"
              className={`hidden sm:flex items-center gap-2 text-sm font-medium ${
                isScrolled ? "text-[hsl(210,40%,22%)] dark:text-white" : "text-white"
              }`}
              data-testid="link-phone"
            >
              <Phone className="h-4 w-4" />
              <span>+92 312 7739752</span>
            </a>
            
            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:flex btn-gold border-0"
              data-testid="button-get-quote-header"
            >
              Get Free Quote
            </Button>

            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? "text-[hsl(210,40%,22%)] dark:text-white" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? "text-[hsl(210,40%,22%)] dark:text-white" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[hsl(210,40%,12%)] rounded-lg shadow-lg mt-2 p-4 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-sm font-medium text-[hsl(210,40%,22%)] dark:text-white rounded-md hover:bg-[hsl(210,40%,22%)]/10 dark:hover:bg-white/10 transition-colors"
                  data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-3 w-full btn-gold border-0"
                data-testid="button-get-quote-mobile"
              >
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
