import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<Link to="/">
				<span>ForumInfet</span>
			</Link>

			<nav>
				<Link to="/">Home</Link>
				<Link to="/topics">Topics</Link>
			</nav>
		</div>
	);
};

export default Header;
