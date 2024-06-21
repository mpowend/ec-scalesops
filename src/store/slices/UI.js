import { createSlice } from "@reduxjs/toolkit"

const UI = createSlice({
	name: "UI",
	initialState: {
		isSidebarOpen: false,
	},
	reducers: {
		toggleSidebar(state) {
			state.isSidebarOpen = !state.isSidebarOpen
		},
		closeSidebar(state) {
			state.isSidebarOpen = false
		},
		openSidebar(state) {
			state.isSidebarOpen = true
		},
	},
})

export const { toggleSidebar, closeSidebar, openSidebar } = UI.actions
export default UI.reducer
