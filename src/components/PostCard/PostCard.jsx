import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";

const PostCard = ({ id, title, description, onDelete }) => {
	const handleDelete = () => {
		onDelete(id);
	};

	return (
		<div className={styles.card}>
			<Link to={`/forum-infnet/posts/${id}`}>
				<h1 data-testid="title">{title}</h1>
				<p data-testid="description">{description}</p>
			</Link>
			<button
				onClick={handleDelete}
				className={styles.deleteButton}
			>
				Deletar Post
			</button>
		</div>
	);
};

export default PostCard;
