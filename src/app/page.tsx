import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, TableProperties } from "lucide-react";
import ProductCardListComponent from "@/components/products/ProductCardListComponent";

export const metadata: Metadata = {
  title: {
    template: '%s | Tos Tinh',
    default: 'Home'
  },
  keywords: "T-shirts for women",
  description: "Tos Tinh is a modern platform and modern vibe for all costumers.",
  openGraph: {
    title: "Tos Tinh - M2",
    description: "AI Overview Tos Tinh refers to small retail and online lifestyle or fashion businesses in Phnom Penh, such as Tos Tinh 356 Store and Tos tinh-21, offering modern clothing and products through social media platforms.",
    images: ['/thumbnail.png']
  }
};
export default function Home() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Ecommerce Platform with Zod Validation & TanStack Table
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground">
          Discover Premium Products with Seamless Experience
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
          Explore our wide range of products, inspect details, browse through the interactive data table, or register your account with instant validation.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/product"
            className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition-colors gap-2 shadow-sm"
          >
            <ShoppingBag className="h-4 w-4" />
            Browse Products
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/data-tables"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors gap-2 shadow-sm"
          >
            <TableProperties className="h-4 w-4" />
            View Data Table
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="mt-8 border-t border-border pt-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-2 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Featured Products</h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Click on any product to view its complete specifications, ratings, and gallery.
          </p>
        </div>
        <ProductCardListComponent />
      </section>
    </div>
  );
}
