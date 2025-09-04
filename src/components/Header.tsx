import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-9 h-9 bg-gradient-to-tr from-primary to-purple-500 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-2xl font-display font-extrabold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              NovaMart
            </span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                className="pl-10 pr-4 py-2 w-full rounded-xl border-2 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            {/* Mobile menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {["Categories", "Deals", "About"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              ))}
            </div>

            {/* User actions */}
            <div className="flex items-center space-x-2">
              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5 text-foreground/80 hover:text-pink-500 transition-colors" />
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-pulse"
                >
                  2
                </Badge>
              </Button>

              {/* Cart */}
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs animate-bounce"
                >
                  3
                </Badge>
              </Button>

              {/* User */}
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-foreground/80 hover:text-primary transition-colors" />
              </Button>
            </div>
          </nav>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for products..."
              className="pl-10 pr-4 py-2 w-full rounded-xl border-2 focus:border-primary/80 focus:ring-2 focus:ring-primary/30 transition-all shadow-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
