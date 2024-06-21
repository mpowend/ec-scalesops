import productList from "./type/productList"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"
import MobileSidebar from "./mobile"

const Sidebar = ({ children }) => {
	const isDesktop = useMediaQuery({ query: "(min-width: 1150px)" })
	return (
		<>
			{isDesktop && (
				<div className="flex flex-wrap w-[300px] items-center h-96 justify-center p-4 m-4 bg-gray-100">
					<div className="flex flex-col h-full w-full bg-gray-200 text-gray-900">
						{children}
					</div>
				</div>
			)}
			{!isDesktop && <MobileSidebar>{children}</MobileSidebar>}
		</>
	)
}

Sidebar.productList = productList
export default Sidebar
