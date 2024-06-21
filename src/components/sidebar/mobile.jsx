import CloseIcon from "@mui/icons-material/Close"
import classNames from "classnames"
import { useRef } from "react"
import { useSelector } from "react-redux"
import { toggleSidebar } from "@/store/slices/UI"
import { useDispatch } from "react-redux"
import OutsideClick from "@/hooks/outsideClick"

export default function MobileSidebar({ children }) {
	const dispatch = useDispatch()
	const sidebarRef = useRef(null)
	const isSidebarOpen = useSelector((state) => state.UI.isSidebarOpen)
	OutsideClick(sidebarRef, () => dispatch(toggleSidebar()))
	return (
		<>
			<div
				className={classNames(
					"fixed top-0 left-0 bg-black w-full h-full pointer-events-none transition-all duration-500 z-10",
					isSidebarOpen ? "opacity-50" : "opacity-0"
				)}
			></div>
			<div
				ref={isSidebarOpen ? sidebarRef : null}
				className={classNames(
					"fixed top-0 w-11/12 h-full bg-white shadow-lg transition-all duration-500 z-20",
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
				{children}
			</div>
		</>
	)
}
