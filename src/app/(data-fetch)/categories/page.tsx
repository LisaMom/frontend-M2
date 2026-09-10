import { Suspense } from "react"
import CategoryListComponent from "@/components/categories/CategoryListComponent"

export default function CategoryPage() {
    const category = fetch('https://api.escuelajs.co/api/v1/categories')
        .then((res) => res.json())

    return (
        <div>
            <Suspense fallback={<div>Loading categories...</div>}>
                <CategoryListComponent category={category} />
            </Suspense>
        </div>
    )
}