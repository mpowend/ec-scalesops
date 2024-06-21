import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "@/store/slices/productList"
import { useState } from "react"

export default function Sidebar({ children }) {
	const dispatch = useDispatch()
	const filter = useSelector((state) => state.productList.filter)
	const [sort, setSort] = useState("price")

	const handleSort = (e) => {
		setSort(e.target.value)
		dispatch(setFilter({ ...filter, sort: e.target.value }))
	}

	const handleFilter = (e) => {
		dispatch(setFilter({ ...filter, [e.target.name]: e.target.value }))
	}

	return (
		<div className="flex flex-col items-center justify-center p-2 m-4 gap-4 bg-gray-200">
			<div className="flex flex-row items-center justify-between p-4 bg-gray-100 w-full">
				<h1>Sort</h1>
				<select value={sort} onChange={handleSort}>
					<option value="price">Price</option>
					<option value="rating">Rating</option>
				</select>
			</div>
			<div className="flex flex-col items-center justify-center p-4 bg-gray-100 w-full">
				<h1>Filter</h1>
				<input
					type="number"
					name="minPrice"
					placeholder="Min Price"
					value={filter.minPrice}
					onChange={handleFilter}
				/>
				<input
					type="number"
					name="maxPrice"
					placeholder="Max Price"
					value={filter.maxPrice}
					onChange={handleFilter}
				/>
				<input
					type="number"
					name="minRating"
					placeholder="Min Rating"
					value={filter.minRating}
					onChange={handleFilter}
				/>
				<input
					type="number"
					name="maxRating"
					placeholder="Max Rating"
					value={filter.maxRating}
					onChange={handleFilter}
				/>
			</div>
			{children}
		</div>
	)
}
