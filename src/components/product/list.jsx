import Card from "@/components/product/card"

export default function List({ products }) {
	return (
		<div className="flex flex-wrap items-center justify-center p-4 m-4 bg-gray-100">
			{products.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	)
}
