import React from "react";
import styles from "./HomePage.module.css";

export const Home = () => {
	return (
		<div className={styles.welcomeSection}>
			<h2>Home</h2>
			<p>Bem-vindo à página inicial!</p>
		</div>
	);
};
