import { configureStore } from "@reduxjs/toolkit"
import productList from "./slices/productList"
import UI from "./slices/UI"

const store = configureStore({
	reducer: {
		productList,
		UI,
	},
})

export default store
