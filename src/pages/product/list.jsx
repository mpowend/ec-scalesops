import List from "@/components/product/list"
import products from "@/mocks/products"

export default function ListPage() {
	return (
		<div className="flex flex-wrap items-center justify-center p-4 m-4 bg-gray-100">
			<List products={products} />
		</div>
	)
}