'use client'
import { use } from "react"
import CategoryComponent, { CategoryInter } from "./CategoryComponent"

export default function CategoryListComponent({
  category
}: {
  category: Promise<CategoryInter[]>
}) {
  const categories = use(category);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        categories.map(({name, image, id}) => (
          <CategoryComponent
            key={id}
            name={name}
            image={image}
            id={id} 
          />
        ))
      }
    </div>
  )
}
