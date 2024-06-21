import { configureStore } from "@reduxjs/toolkit"
import productList from "./slices/productList"

const store = configureStore({
	reducer: {
		productList,
	},
})

export default store
