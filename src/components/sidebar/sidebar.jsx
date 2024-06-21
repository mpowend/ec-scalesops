import productList from "./type/productList"
import { useSelector } from "react-redux"
import { useMediaQuery } from "react-responsive"

const Sidebar = ({ children }) => {
	const { isSidebarOpen } = useSelector((state) => state.UI.isSidebarOpen)
	return (
		<>
			<div className="flex flex-col h-full w-64 bg-gray-200 text-gray-900">
				<div className="flex items-center justify-between h-16 px-4 bg-gray-100">
					<span className="text-2xl font-semibold">Sidebar</span>
					<button className="text-2xl">
						<i className="fas fa-bars"></i>
					</button>
				</div>
				<div>{children}</div>
			</div>
		</>
	)
}

Sidebar.productList = productList
export default Sidebar
