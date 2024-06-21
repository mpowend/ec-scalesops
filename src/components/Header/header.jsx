import { toggleSidebar } from "@/store/slices/UI"
import { useDispatch } from "react-redux"
import MenuIcon from "@mui/icons-material/Menu"

const Header = ({ children, shouldShowMenu, menu }) => {
	const dispatch = useDispatch()
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
		</>
	)
}

export default Header
