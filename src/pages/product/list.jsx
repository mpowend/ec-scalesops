import List from "@/components/product/list"
import { useSelector } from "react-redux"

export default function ListPage() {
	const products = useSelector((state) => state.productList.products)
	return (
		<div className="flex flex-wrap items-center justify-center p-4 m-4 bg-gray-100">
			<List products={products} />
		</div>
	)
}
