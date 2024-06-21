import Header from "@/components/Header/header"
import List from "@/components/product/list"
import Sidebar from "@/components/sidebar/sidebar"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useMediaQuery } from "react-responsive"
import { setProducts } from "@/store/slices/productList"
import ScaleLoader from "react-spinners/ScaleLoader"
import { within } from "./../../../node_modules/@popperjs/core/dist/esm/utils/within"

export default function ListPage() {
	const dispatch = useDispatch()

	const products = useSelector((state) => state.productList.shownProducts)
	const isDesktop = useMediaQuery({ query: "(min-width: 1150px)" })
	const isLoading = useSelector((state) => state.productList.isLoading)
	console.log(isLoading)

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setTimeout(() => {
					dispatch(setProducts(data))
				}, 1000)
			})
	}, [])
	return (
		<>
			<Header shouldShowMenu={!isDesktop} menu={<Sidebar.productList />}>
				<span className="text-2xl font-bold">Bold Shop</span>
			</Header>
			<div className="flex flex-row">
				<Sidebar>
					<Sidebar.productList />
				</Sidebar>
				{isLoading && (
					<div className="w-full h-[85vh] flex flex-wrap items-center justify-center p-4 m-4 bg-gray-100">
						<ScaleLoader
							color="#36d7b7"
							width="15px"
							height="150px"
							margin="10px"
						/>
					</div>
				)}
				{!isLoading && (
					<div className="flex flex-wrap items-center justify-center p-4 m-4 bg-gray-100">
						<List products={products} />
					</div>
				)}
			</div>
		</>
	)
}
