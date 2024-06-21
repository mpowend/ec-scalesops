import { createSlice } from "@reduxjs/toolkit"
import defaultProducts from "@/mocks/products"

const productList = createSlice({
	name: "productList",
	initialState: {
		products: defaultProducts,
		loading: true,
		filter: {},
	},
	reducers: {
		setProducts(state, action) {
			state.products = action.payload
		},
		setFilter(state, action) {
			state.filter = action.payload
		},
	},
})

export const { setProducts, setFilter } = productList.actions
export default productList.reducer
