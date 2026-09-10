"use client"

import { createColumnHelper } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { type DataTableFeatures } from "./data-table-features"

export type Product = {
  id: string
  image: string
  title: string
  price: number
  category: string
  rate: number
}

const columnHelper = createColumnHelper<DataTableFeatures, Product>()

// Every column def now lives inside the same array passed to columnHelper.columns()
export const columns = columnHelper.columns([
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="ghost" className="h-8 w-8 p-0" />}
          >
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>Edit product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }),
  columnHelper.accessor("image", {
    header: "Image",
    cell: ({ row }) => {
      const image = row.getValue<string>("image")
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={row.original.title}
          className="h-10 w-10 rounded object-cover"
        />
      )
    },
  }),
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor("title", {
    header: "Title",
  }),
  columnHelper.accessor("price", {
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const price = row.getValue<number>("price")
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)

      return (
        <div className="text-right font-medium text-red-500">{formatted}</div>
      )
    },
  }),
  columnHelper.accessor("category", {
    header: "Category",
  }),
  columnHelper.accessor("rate", {
    header: "Rate",
  }),
])