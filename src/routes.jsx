import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PostsListPage from "./pages/PostsListPage/PostsListPage";
import PostPage from "./pages/PostPage/PostPage";
import Header from "./components/Header/Header";

function AppRoutes() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/forum-infnet"
					element={<HomePage />}
				/>
				<Route
					path="/forum-infnet/topics"
					element={<PostsListPage />}
				/>
				<Route
					path="/forum-infnet/posts/:id"
					element={<PostPage />}
				/>
			</Routes>
		</Router>
	);
}

export default AppRoutes;
