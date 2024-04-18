import React, { useEffect, useState } from "react";
import PostsList from "../../components/PostList/PostList";
import Header from "../../components/Header/Header";
import styles from "./PostsListPage.module.css";

const PostsListPage = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://mhw-db.com/events");
				if (!response.ok) {
					throw new Error("Erro ao obter dados dos tópicos");
				}
				const data = await response.json();

				const modifiedData = data.slice(0, 10).map((event) => ({
					id: event.id,
					name: event.name,
					description: event.description.slice(0, 60) + "...",
				}));
				setPosts(modifiedData);
				setLoading(false);
			} catch (error) {
				console.error(error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<Header />
			<div className={styles.topics}>
				<h2 className={styles.title}>Lista de Tópicos</h2>
				{loading ? <p>Carregando...</p> : <PostsList posts={posts} />}
			</div>
		</div>
	);
};

export default PostsListPage;
