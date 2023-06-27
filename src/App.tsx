import { Provider } from "react-redux";
import { store } from "@/store";
import { router } from "@/routes";
import { RouterProvider } from "react-router-dom";
// import { ReactComponent as ViteLogo } from "@/assets/vite.svg";
import "antd/dist/reset.css";
import "./App.css";

function App() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default App;
