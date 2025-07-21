import { Smartphone, Headphones, Home, Coffee, Gamepad2, Camera } from "lucide-react";

const categoryData = [
  {
    id: "electronics",
    name: "Electronics",
    icon: Smartphone,
    count: "1,200+ items",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop"
  },
  {
    id: "audio",
    name: "Audio & Music",
    icon: Headphones,
    count: "350+ items",
    color: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
  },
  {
    id: "home",
    name: "Home & Living",
    icon: Home,
    count: "800+ items",
    color: "bg-green-500",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: Coffee,
    count: "450+ items",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    count: "600+ items",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop"
  },
  {
    id: "photography",
    name: "Photography",
    icon: Camera,
    count: "200+ items",
    color: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop"
  }
];

export function Categories() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of product categories, each carefully curated to meet your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative card-elevated overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-48 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${category.color} bg-opacity-90`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-white/80">Explore collection →</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}