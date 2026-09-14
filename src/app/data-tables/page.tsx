import { Metadata } from "next";
import { columns, Product } from "./columns"
import { DataTable } from "./data-table"

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: {
    template: '%s | Tos Tinh',
    default: 'Data-Table'
  },
  keywords: "T-shirts for women",
  description: "Tos Tinh is a modern platform and modern vibe for all costumers.",
  openGraph: {
    title: "Tos Tinh - M2",
    description: "Tos Tinh refers to small retail and online lifestyle or fashion businesses in Phnom Penh, such as Tos Tinh 356 Store and Tos tinh-21, offering modern clothing and products through social media platforms.",
    images: ['/thumbnail.png']
  }
};

interface FakeStoreItem {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

// async function getData(): Promise<Product[]> {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     cache: "no-store",
//     signal: AbortSignal.timeout(8000),
//   });
//   if (!res.ok) {
//     throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
//   }
//   const items: FakeStoreItem[] = await res.json();
//   return items.map((item) => ({
//     id: String(item.id),
//     image: item.image,
//     title: item.title,
//     price: item.price,
//     category: item.category,
//     rate: item.rating?.rate ?? 0,
//   }));
// }
async function getData(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      return [];
    }
    const items: FakeStoreItem[] = await res.json();
    return items.map((item) => ({
      id: String(item.id),
      image: item.image,
      title: item.title,
      price: item.price,
      category: item.category,
      rate: item.rating?.rate ?? 0,
    }));
  } catch (error) {
    console.error("Error fetching data for table:", error);
    return [];
  }
}
export default async function ProductDataTable() {
  const data = await getData()

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Product Data Table</h1>
            <p className="text-muted-foreground text-sm">
              Manage, view, and inspect all products with TanStack Table.
            </p>
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}