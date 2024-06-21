import Header from "@/components/Header/header"
import List from "@/components/product/list"
import Sidebar from "@/components/sidebar/sidebar"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"

export default function ListPage() {
	const products = useSelector((state) => state.productList.products)
	const isDesktop = useMediaQuery({ query: "(min-width: 1150px)" })

	return (
		<>
			<Header shouldShowMenu={isDesktop} />
			<div className="flex flex-row">
				{isDesktop && (
					<div className="flex flex-wrap items-center h-96 justify-center p-4 m-4 bg-gray-100">
						<Sidebar>
							<Sidebar.productList />
						</Sidebar>
					</div>
				)}
				<div className="flex flex-wrap items-center justify-center p-4 m-4 bg-gray-100">
					<List products={products} />
				</div>
			</div>
		</>
	)
}
