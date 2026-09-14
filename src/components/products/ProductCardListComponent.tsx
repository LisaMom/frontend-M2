"use client";

import { useEffect, useState } from "react";
import EcommerceProductCard from "./ProductCardComponent";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductCardListComponentProps {
  productName?: string; 
}

export default function ProductCardListComponent({ productName }: ProductCardListComponentProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch("https://fakestoreapi.com/products");
        
        // Check if the response returned an HTML error instead of JSON
        const contentType = res.headers.get("content-type");
        if (!res.ok || !contentType || !contentType.includes("application/json")) {
          throw new Error("The API server is currently offline or returning invalid data.");
        }

        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[30vh] gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-muted-foreground text-sm">Loading data from Fake Store API…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[30vh] gap-2 p-8 text-center border border-dashed rounded-xl max-w-7xl mx-auto my-6">
        <p className="text-destructive font-semibold">API Connection Error</p>
        <p className="text-muted-foreground text-sm max-w-md">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          Retry Connection
        </button>
      </div>
    );
  }

  const filteredProducts = products.filter((product) => {
    if (!productName) return true; 
    const cleanRouteName = productName.toLowerCase().replace(/-/g, " ");
    return product.title.toLowerCase().includes(cleanRouteName);
  });

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {filteredProducts.map(({ id, image, title, description, price }) => (
        <EcommerceProductCard
          key={id}
          id={id}
          image={image}
          title={title}
          description={description}
          price={price}
        />
      ))}
    </div>
  );
}
