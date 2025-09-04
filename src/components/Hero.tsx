import { ArrowRight, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Background Glow Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/20 blur-[100px] rounded-full animate-bounce-slow" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm backdrop-blur-sm hover:scale-105 transition-transform">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>New Collection Available</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight tracking-tight">
              Your Gateway to  
              <span className="block text-gradient">Premium Shopping</span>  
              Experience
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Discover curated collections of premium products. From cutting-edge tech 
              to timeless fashion — NovaMart is where elegance meets convenience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary group shadow-lg hover:shadow-primary/40 transition-all">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-secondary hover:scale-105 transition-transform">
                Explore Categories
              </Button>
            </div>

            {/* Stats with subtle animation */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "1M+", label: "Products Sold" },
                { value: "4.9", label: "Rating", icon: <Star className="inline h-4 w-4 text-yellow-500" /> },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center transform hover:scale-105 transition-transform"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient flex items-center justify-center gap-1">
                    {stat.value} {stat.icon}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <img
                src={heroBanner}
                alt="Premium shopping experience"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating Glow Effects */}
            <div className="absolute -top-6 -right-6 w-28 h-28 gradient-primary rounded-full blur-xl opacity-70 animate-glow" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-accent/40 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
