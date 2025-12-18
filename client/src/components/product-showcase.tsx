import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useInView } from "@/hooks/use-in-view";

const solarPanels = [
  {
    brand: "Longi",
    model: "Hi-MO X6",
    power: "580W",
    efficiency: "22.8%",
    warranty: "25 Years",
    origin: "China (Tier-1)",
    features: ["HPBC Technology", "Bifacial Design", "Low Degradation"],
    tier: "Premium",
  },
  {
    brand: "Jinko Solar",
    model: "Tiger Neo N-Type",
    power: "575W",
    efficiency: "22.5%",
    warranty: "25 Years",
    origin: "China (Tier-1)",
    features: ["N-Type Cells", "High Performance", "Weather Resistant"],
    tier: "Premium",
  },
  {
    brand: "Canadian Solar",
    model: "HiKu7",
    power: "550W",
    efficiency: "21.8%",
    warranty: "25 Years",
    origin: "Canada/China",
    features: ["Bifacial Module", "Low BOS Cost", "High Reliability"],
    tier: "Premium",
  },
  {
    brand: "JA Solar",
    model: "DeepBlue 4.0",
    power: "545W",
    efficiency: "21.5%",
    warranty: "25 Years",
    origin: "China (Tier-1)",
    features: ["PERCIUM+ Cells", "Excellent Low-Light", "Salt Mist Resistant"],
    tier: "Value",
  },
];

const inverters = [
  {
    brand: "Inverex",
    model: "Nitrox Series",
    power: "3kW - 12kW",
    type: "Hybrid",
    warranty: "5 Years",
    origin: "Pakistan",
    features: ["MPPT Technology", "Battery Compatible", "Smart Monitoring"],
    tier: "Local Leader",
  },
  {
    brand: "Knox",
    model: "Krypton Series",
    power: "3kW - 10kW",
    type: "Hybrid",
    warranty: "5 Years",
    origin: "Pakistan",
    features: ["Compact Design", "High Efficiency", "Budget Friendly"],
    tier: "Value",
  },
  {
    brand: "GoodWe",
    model: "DNS Series",
    power: "3kW - 25kW",
    type: "Hybrid/On-Grid",
    warranty: "10 Years",
    origin: "China",
    features: ["98.8% Efficiency", "Smart MPPT", "App Monitoring"],
    tier: "Premium",
  },
  {
    brand: "Huawei",
    model: "SUN2000",
    power: "3kW - 100kW",
    type: "Smart",
    warranty: "10 Years",
    origin: "China",
    features: ["AI Powered", "Smart IV Curve", "Cloud Monitoring"],
    tier: "Enterprise",
  },
];

export function ProductShowcase() {
  const { ref, isInView } = useInView();

  const ProductCard = ({ product, index }: { product: typeof solarPanels[0] | typeof inverters[0]; index: number }) => (
    <Card
      className={`group overflow-visible shadow-lg card-lift transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      data-testid={`card-product-${product.brand.toLowerCase()}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge
              variant="secondary"
              className={`mb-2 ${
                product.tier === "Premium" || product.tier === "Enterprise"
                  ? "bg-[hsl(45,100%,50%)]/10 text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)]"
                  : product.tier === "Local Leader"
                  ? "bg-green-500/10 text-green-600 dark:text-green-400"
                  : ""
              }`}
            >
              {product.tier}
            </Badge>
            <h3 className="text-xl font-bold text-[hsl(210,40%,22%)] dark:text-white">
              {product.brand}
            </h3>
            <p className="text-sm text-muted-foreground">{product.model}</p>
          </div>
          <div className="p-3 rounded-xl bg-muted/50 group-hover:bg-[hsl(45,100%,50%)]/10 transition-colors">
            <span className="text-2xl font-bold text-[hsl(210,40%,22%)] dark:text-white">
              {product.power}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          {"efficiency" in product && (
            <div>
              <p className="text-muted-foreground">Efficiency</p>
              <p className="font-semibold text-[hsl(210,40%,22%)] dark:text-white">{product.efficiency}</p>
            </div>
          )}
          {"type" in product && (
            <div>
              <p className="text-muted-foreground">Type</p>
              <p className="font-semibold text-[hsl(210,40%,22%)] dark:text-white">{product.type}</p>
            </div>
          )}
          <div>
            <p className="text-muted-foreground">Warranty</p>
            <p className="font-semibold text-[hsl(210,40%,22%)] dark:text-white">{product.warranty}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Origin</p>
            <p className="font-semibold text-[hsl(210,40%,22%)] dark:text-white">{product.origin}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {feature}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section
      id="products"
      ref={ref}
      className="py-20 sm:py-28 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(45,100%,50%)]/10 text-[hsl(45,100%,45%)] dark:text-[hsl(45,100%,50%)] text-sm font-semibold mb-4">
            Quality Equipment
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(210,40%,22%)] dark:text-white mb-4"
            data-testid="text-products-heading"
          >
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We partner with globally recognized Tier-1 brands and trusted Pakistani manufacturers
          </p>
        </div>

        <Tabs defaultValue="panels" className="w-full">
          <TabsList
            className={`grid w-full max-w-md mx-auto grid-cols-2 mb-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <TabsTrigger value="panels" data-testid="tab-panels">
              Solar Panels
            </TabsTrigger>
            <TabsTrigger value="inverters" data-testid="tab-inverters">
              Inverters
            </TabsTrigger>
          </TabsList>

          <TabsContent value="panels">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solarPanels.map((panel, index) => (
                <ProductCard key={panel.brand} product={panel} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inverters">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inverters.map((inverter, index) => (
                <ProductCard key={inverter.brand} product={inverter} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
