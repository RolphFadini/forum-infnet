import React from "react";
import styles from "./PostCard.module.css";
import { Link } from "react-router-dom";

export const PostCard = ({ id, title, description }) => {
	return (
		<div className={styles.card}>
			<Link to={`/forum-infnet/posts/${id}`}>
				<h1>{title}</h1>
				<p>{description}</p>
			</Link>
		</div>
	);
};
