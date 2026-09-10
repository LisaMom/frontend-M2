import { Suspense } from "react"
import CategoryListComponent from "@/components/categories/CategoryListComponent"

export default function CategoryPage() {
    const category = fetch('https://api.escuelajs.co/api/v1/categories')
        .then((res) => res.json())

    return (
        <div className="pt-24 pb-16 max-w-7xl mx-auto px-6">
            <div className="space-y-2 mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
                <p className="text-muted-foreground text-sm">Browse products by categories</p>
            </div>
            <Suspense fallback={<div className="text-center py-12 text-muted-foreground">Loading categories...</div>}>
                <CategoryListComponent category={category} />
            </Suspense>
        </div>
    )
}