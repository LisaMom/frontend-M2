import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductDetail1 } from "@/components/products/ProductDetailComponent";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
