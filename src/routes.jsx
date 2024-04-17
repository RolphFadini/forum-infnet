import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import PostsListPage from "./pages/PostsListPage";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/topics"
					element={<PostsListPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
