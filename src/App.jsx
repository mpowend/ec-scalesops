import "./App.css"
import ListPage from "@/pages/product/list"
import store from "@/store/store"
import { Provider } from "react-redux"

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<ListPage />
			</div>
		</Provider>
	)
}

export default App
