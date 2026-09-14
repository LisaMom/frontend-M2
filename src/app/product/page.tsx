import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Tos Tinh',
    default: 'Product'
  },
  keywords: "T-shirts for women",
  description: "Tos Tinh is a modern platform and modern vibe for all costumers.",
  openGraph: {
    title: "Tos Tinh - M2",
    description: "AI Overview Tos Tinh refers to small retail and online lifestyle or fashion businesses in Phnom Penh, such as Tos Tinh 356 Store and Tos tinh-21, offering modern clothing and products through social media platforms.",
    images: ['/thumbnail.png']
  }
};
import ProductCardListComponent from "@/components/products/ProductCardListComponent";

export default function ProductPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Products</h1>
        <p className="text-muted-foreground text-base max-w-xl mx-auto">
          Explore our collection of top-rated items with competitive pricing and fast delivery.
        </p>
      </div>
      <ProductCardListComponent />
    </div>
  );
}