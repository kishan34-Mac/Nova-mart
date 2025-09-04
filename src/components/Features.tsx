import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy free worldwide delivery on all orders over $50.",
    color: "text-blue-500",
    bg: "from-blue-50 to-blue-100 dark:from-blue-950/40 dark:to-blue-900/20"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Checkout confidently with encrypted & trusted payment options.",
    color: "text-green-500",
    bg: "from-green-50 to-green-100 dark:from-green-950/40 dark:to-green-900/20"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our support team is always here to help, day or night.",
    color: "text-purple-500",
    bg: "from-purple-50 to-purple-100 dark:from-purple-950/40 dark:to-purple-900/20"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy for a smooth experience.",
    color: "text-orange-500",
    bg: "from-orange-50 to-orange-100 dark:from-orange-950/40 dark:to-orange-900/20"
  }
];

export function Features() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 blur-[100px] rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Why Shop With <span className="text-gradient">NovaMart?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We make online shopping safe, easy, and enjoyable with our premium services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`relative group p-8 rounded-2xl shadow-sm bg-gradient-to-br ${feature.bg} 
                hover:shadow-xl hover:scale-[1.03] transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-white/70 dark:bg-black/30 backdrop-blur-sm shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-primary/10 to-transparent blur-xl -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
