import { columns, Product } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.

}

export default async function ProductDataTable() {
  // const data = await getData()
  
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}