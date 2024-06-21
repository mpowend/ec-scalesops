export default function Card({ product }) {
	return (
		<div className="flex flex-col w-64 h-96 grow items-center justify-center p-4 m-4 bg-white border border-gray-200 rounded-lg shadow-md">
			<img className="w-48 h-48" src={product.image} alt={product.title} />
			<h2 className="text-lg font-semibold">{product.title}</h2>
			<p className="text-sm text-gray-500 text-ellipsis h-10 line-clamp-2 max-w-full">
				{product.description}
			</p>
			<p className="text-lg font-semibold">{product.price}</p>
		</div>
	)
}
