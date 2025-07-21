import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on orders over $50. Fast and reliable delivery worldwide.",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Your payment information is always secure with our encrypted checkout.",
    color: "text-green-500"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help when you need it. Our customer support team is always ready.",
    color: "text-purple-500"
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "30-day return policy. Not satisfied? Return your purchase hassle-free.",
    color: "text-orange-500"
  }
];

export function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-muted group-hover:bg-primary/10 transition-colors">
                  <IconComponent className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}