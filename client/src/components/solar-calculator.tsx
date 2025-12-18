import { useState } from "react";
import { Calculator, Zap, TrendingUp, PiggyBank, Sun, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { apiRequest } from "@/lib/queryClient";

const WHATSAPP_NUMBER = "923127739752";

interface CalculationResult {
  monthlySavings: number;
  yearlySavings: number;
  recommendedSystem: string;
  systemSize: string;
  paybackPeriod: string;
  co2Offset: number;
}

export function SolarCalculator() {
  const { ref, isInView } = useInView();
  const [monthlyBill, setMonthlyBill] = useState("");
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSavings = async () => {
    const bill = parseInt(monthlyBill.replace(/,/g, ""));
    if (isNaN(bill) || bill < 1000) return;

    setIsCalculating(true);

    setTimeout(async () => {
      let recommendedSystem = "Starter";
      let systemSize = "3kW - 5kW";
      let paybackPeriod = "3-4 years";

      if (bill >= 50000) {
        recommendedSystem = "Elite";
        systemSize = "15kW+";
        paybackPeriod = "2.5-3 years";
      } else if (bill >= 20000) {
        recommendedSystem = "Premium";
        systemSize = "7kW - 10kW";
        paybackPeriod = "3-3.5 years";
      }

      const savingsPercentage = 0.85;
      const monthlySavings = Math.round(bill * savingsPercentage);
      const yearlySavings = monthlySavings * 12;
      const co2Offset = Math.round((bill / 1000) * 0.5);

      setResult({
        monthlySavings,
        yearlySavings,
        recommendedSystem,
        systemSize,
        paybackPeriod,
        co2Offset,
      });
      setIsCalculating(false);

      try {
        await apiRequest("POST", "/api/calculator", {
          monthlyBill: bill,
          estimatedSavings: monthlySavings,
          recommendedSystem,
        });
      } catch (error) {
        console.error("Failed to track calculator usage:", error);
      }
    }, 1000);
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat("en-PK").format(num);
  };

  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Hi Solar Electric! I used your calculator and my monthly bill is Rs. ${monthlyBill}. I'm interested in the ${result?.recommendedSystem} (${result?.systemSize}) package. Can we discuss further?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return (
    <section
      id="calculator"
      ref={ref}
      className="py-20 sm:py-28 bg-[hsl(210,40%,22%)] dark:bg-[hsl(210,40%,12%)] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[hsl(45,100%,50%)] blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[hsl(45,100%,50%)] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(45,100%,50%)]/20 text-[hsl(45,100%,50%)] text-sm font-semibold mb-4">
            <Calculator className="inline h-4 w-4 mr-1" />
            Free Tool
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-testid="text-calculator-heading"
          >
            Solar Savings Calculator
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto" data-testid="text-calculator-description">
            Enter your monthly electricity bill to see how much you could save with solar
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`border-0 shadow-2xl transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            data-testid="card-calculator"
          >
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Your Monthly Electricity Bill (PKR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                      Rs.
                    </span>
                    <Input
                      type="text"
                      placeholder="e.g., 25,000"
                      value={monthlyBill}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9,]/g, "");
                        setMonthlyBill(value);
                      }}
                      className="pl-12 h-14 text-lg"
                      data-testid="input-calculator-bill"
                    />
                  </div>
                </div>
                <Button
                  onClick={calculateSavings}
                  disabled={!monthlyBill || isCalculating}
                  className="btn-gold h-14 px-8 self-end border-0"
                  size="lg"
                  data-testid="button-calculate-savings"
                >
                  {isCalculating ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-[hsl(210,40%,16%)] border-t-transparent rounded-full animate-spin" />
                      Calculating...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Calculate Savings
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>

              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    data-testid="section-calculator-results"
                  >
                    <div className="border-t pt-8">
                      <h3 className="text-lg font-semibold text-[hsl(210,40%,22%)] dark:text-white mb-6 flex items-center gap-2">
                        <Sun className="h-5 w-5 text-[hsl(45,100%,50%)]" />
                        Your Estimated Savings
                      </h3>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-[hsl(45,100%,50%)]/10 to-[hsl(45,100%,50%)]/5 border border-[hsl(45,100%,50%)]/20">
                          <div className="flex items-center gap-2 mb-2">
                            <PiggyBank className="h-5 w-5 text-[hsl(45,100%,50%)]" />
                            <span className="text-xs font-medium text-muted-foreground">Monthly</span>
                          </div>
                          <p className="text-2xl font-bold text-[hsl(210,40%,22%)] dark:text-white" data-testid="text-result-monthly-savings">
                            Rs. {formatCurrency(result.monthlySavings)}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-5 w-5 text-green-500" />
                            <span className="text-xs font-medium text-muted-foreground">Yearly</span>
                          </div>
                          <p className="text-2xl font-bold text-[hsl(210,40%,22%)] dark:text-white" data-testid="text-result-yearly-savings">
                            Rs. {formatCurrency(result.yearlySavings)}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-muted/50 border">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-5 w-5 text-[hsl(210,40%,22%)] dark:text-[hsl(45,100%,50%)]" />
                            <span className="text-xs font-medium text-muted-foreground">System Size</span>
                          </div>
                          <p className="text-xl font-bold text-[hsl(210,40%,22%)] dark:text-white" data-testid="text-result-system-size">
                            {result.systemSize}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-muted/50 border">
                          <div className="flex items-center gap-2 mb-2">
                            <Calculator className="h-5 w-5 text-[hsl(210,40%,22%)] dark:text-[hsl(45,100%,50%)]" />
                            <span className="text-xs font-medium text-muted-foreground">Payback</span>
                          </div>
                          <p className="text-xl font-bold text-[hsl(210,40%,22%)] dark:text-white" data-testid="text-result-payback">
                            {result.paybackPeriod}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[hsl(210,40%,22%)] dark:bg-[hsl(210,40%,18%)]">
                        <div className="text-center sm:text-left">
                          <p className="text-white/70 text-sm">Recommended Package</p>
                          <p className="text-xl font-bold text-white" data-testid="text-result-recommended">
                            {result.recommendedSystem} <span className="text-[hsl(45,100%,50%)]">({result.systemSize})</span>
                          </p>
                        </div>
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="btn-gold border-0" size="lg" data-testid="button-result-whatsapp">
                            <SiWhatsapp className="mr-2 h-5 w-5" />
                            Discuss on WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
