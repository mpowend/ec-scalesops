import { createSlice } from "@reduxjs/toolkit"

const productList = createSlice({
	name: "productList",
	initialState: {
		products: [],
		shownProducts: [],
		isLoading: true,
		filter: {},
	},
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
			state.shownProducts = action.payload
			state.isLoading = false
		},
		setFilter(state, action) {
			state.filter = action.payload
			state.shownProducts = state.products.filter((product) => {
				const { minPrice, maxPrice, minRating, maxRating } = state.filter
				if (minPrice && product.price < minPrice) return false
				if (maxPrice && product.price > maxPrice) return false
				if (minRating && product.rating.rate < minRating) return false
				if (maxRating && product.rating.rate > maxRating) return false
				return true
			})
			if (state.filter.sort === "price") {
				state.shownProducts = state.shownProducts.sort(
					(a, b) => a.price - b.price
				)
			} else if (state.filter.sort === "-price") {
				state.shownProducts = state.shownProducts.sort(
					(a, b) => b.price - a.price
				)
			} else if (state.filter.sort === "rating") {
				state.shownProducts = state.shownProducts.sort(
					(a, b) => a.rating.rate - b.rating.rate
				)
			} else if (state.filter.sort === "-rating") {
				state.shownProducts = state.shownProducts.sort(
					(a, b) => b.rating.rate - a.rating.rate
				)
			} else if (state.filter.sort === "name") {
				state.shownProducts = state.shownProducts.sort((a, b) =>
					a.title.localeCompare(b.title)
				)
			} else if (state.filter.sort === "-name") {
				state.shownProducts = state.shownProducts.sort((a, b) =>
					b.title.localeCompare(a.title)
				)
			}
		},
	},
})

export const { setProducts, setFilter } = productList.actions
export default productList.reducer
