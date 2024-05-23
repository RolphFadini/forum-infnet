import React, { useEffect, useState } from "react";
import PostsList from "../../components/PostList/PostList";
import styles from "./PostsListPage.module.css";
import Pagination from "../../components/Pagination/Pagination";
import { IoSearchSharp } from "react-icons/io5";

const PostsListPage = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [allPosts, setAllPosts] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [noResults, setNoResults] = useState(false);

	const postsPerPage = 10;

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch("https://mhw-db.com/events");
			if (!response.ok) {
				throw new Error("Erro ao obter dados dos tópicos");
			}
			const data = await response.json();

			const uniquePosts = [];
			const uniqueNames = new Set();

			data.forEach((event) => {
				if (!uniqueNames.has(event.name)) {
					uniqueNames.add(event.name);
					uniquePosts.push({
						id: event.id,
						name: event.name,
						description: event.description.slice(0, 60) + "...",
					});
				}
			});

			setPosts(uniquePosts);
			setAllPosts(uniquePosts);
			setLoading(false);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const filteredPosts = posts.filter((post) =>
		post.name.toLowerCase().includes(searchTerm.toLowerCase())
	);
	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleDelete = (id) => {
		const updatedPosts = posts.filter((post) => post.id !== id);
		setPosts(updatedPosts);
	};

	const handleRefresh = () => {
		setPosts(allPosts);
	};

	const handleSearchChange = (event) => {
		setSearchTerm(event.target.value);
		setCurrentPage(1);
	};

	return (
		<div>
			<div className={styles.searchBar}>
				<input
					type="text"
					value={searchTerm}
					onChange={handleSearchChange}
					placeholder="Buscar por nome do tópico..."
					className={styles.searchInput}
				/>
			</div>
			<div className={styles.topics}>
				<h2 className={styles.title}>Lista de Tópicos</h2>
				<button
					className={styles.refreshButton}
					onClick={handleRefresh}
				>
					Atualizar Lista de Posts
				</button>

				{loading ? (
					<p>Carregando...</p>
				) : (
					<>
						{currentPosts.length === 0 ? (
							<p>Nenhum tópico com este nome encontrado.</p>
						) : (
							<PostsList
								posts={currentPosts}
								onDelete={handleDelete}
							/>
						)}
					</>
				)}
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={filteredPosts.length}
					paginate={paginate}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};

export default PostsListPage;
