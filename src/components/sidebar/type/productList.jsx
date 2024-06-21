import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "@/store/slices/productList"
import { useState } from "react"
import Input from "@/components/nano/input"

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
		<>
			<div className="flex items-center justify-between w-full h-16 px-4 bg-gray-100">
				<span className="text-2xl font-semibold">Filter</span>
			</div>
			<div className="flex flex-col w-full items-center justify-center p-4 gap-4 bg-gray-200">
				<div className="flex flex-row items-center justify-between p-4 bg-gray-100 w-full">
					<h1>Sort</h1>
					<select value={sort} onChange={handleSort}>
						<option value="price">Price Ascending</option>
						<option value="-price">Price Descending</option>
						<option value="rating">Rating Ascending</option>
						<option value="-rating">Rating Descending</option>
						<option value="name">Alphabetical</option>
						<option value="-name">Reverse Alphabetical</option>
					</select>
				</div>
				<div className="flex flex-col items-center justify-center p-4 bg-gray-100 w-full">
					<h1>Filter</h1>
					<Input
						label="minPrice"
						type="number"
						name="minPrice"
						value={filter.minPrice}
						onChange={handleFilter}
					/>
					<Input
						label="maxPrice"
						type="number"
						name="maxPrice"
						value={filter.maxPrice}
						onChange={handleFilter}
					/>
				</div>
				{children}
			</div>
		</>
	)
}
