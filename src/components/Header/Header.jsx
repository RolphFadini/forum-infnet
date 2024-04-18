import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<Link to="/forum-infnet">
				<span>Forum Infet</span>
			</Link>

			<nav>
				<Link to="/forum-infnet">Home</Link>
				<Link to="/forum-infnet/topics">Topics</Link>
			</nav>
		</div>
	);
};

export default Header;
