//simple header that supports hamburger menu on mobile

import { useSelector } from "react-redux"
import { toggleSidebar } from "@/store/slices/UI"
import { useDispatch } from "react-redux"
import MenuIcon from "@mui/icons-material/Menu"
import OutsideClick from "@/hooks/outsideClick"
import { useRef } from "react"
import CloseIcon from "@mui/icons-material/Close"
import classNames from "classnames"

const Header = ({ children, shouldShowMenu, menu }) => {
	const dispatch = useDispatch()
	const { isSidebarOpen } = useSelector((state) => state.UI)
	const sidebarRef = useRef(null)
	OutsideClick(sidebarRef, () => dispatch(toggleSidebar()))
	return (
		<>
			<header className="flex flex-row items-center justify-between p-4 bg-gray-100">
				{shouldShowMenu && (
					<button onClick={() => dispatch(toggleSidebar())}>
						<MenuIcon />
					</button>
				)}
				{children}
			</header>
			<div
				className={classNames(
					"fixed top-0 left-0 bg-black w-full h-full pointer-events-none transition-all duration-500 z-0",
					isSidebarOpen ? "opacity-50" : "opacity-0"
				)}
			></div>
			<div
				ref={isSidebarOpen ? sidebarRef : null}
				className={classNames(
					"fixed top-0 w-11/12 h-full bg-white shadow-lg transition-all duration-500 z-10",
					isSidebarOpen ? "left-0" : "-left-full"
				)}
			>
				<button
					onClick={() => dispatch(toggleSidebar())}
					className={classNames(
						"fixed top-4 right-4 bg-white p-4 transition-all duration-500 rounded-full",
						isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
					)}
				>
					<CloseIcon width="100px" />
				</button>
				{menu}
			</div>
		</>
	)
}

export default Header
