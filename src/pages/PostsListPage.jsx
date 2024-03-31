import React, { useState, useEffect } from "react";
import { PostList } from "../components/PostList/PostList";

export const PostsListPage = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch();
				if (!response.ok) {
					throw new Error("Erro ao carregar dados");
				}
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<PostList />
		</div>
	);
};
