import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductDetail1 } from "@/components/products/ProductDetailComponent";

interface Props {
  params: Promise<{ slug: string }>;
}

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 3600 }, // cache for 1hr, optional
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// 1. Dynamic Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  const title = product?.title ?? "Product Not Found";

  return {
    title, // plugs into your layout template: "Blue T Shirt | Tos Tinh"
    keywords: product ? `T-shirts for women, ${title}` : undefined,
    description: product
      ? `Buy ${title} on Tos Tinh. Explore our collection of top-rated items with competitive pricing.`
      : "This product could not be found.",
    openGraph: {
      title: product ? `${title} - Tos Tinh` : "Tos Tinh",
      description: product ? `Shop the modern vibe with ${title} at Tos Tinh.` : undefined,
      images: [product?.image ?? "/thumbnail.png"],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/product"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all products
        </Link>
        <ProductDetail1 id={slug} className="py-4" />
      </div>
    </div>
  );
}