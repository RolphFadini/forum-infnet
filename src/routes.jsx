import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/HomePage";
import PostsListPage from "./pages/PostsListPage/PostsListPage";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="forum-infnet/"
					element={<Home />}
				/>
				<Route
					path="forum-infnet/topics"
					element={<PostsListPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
