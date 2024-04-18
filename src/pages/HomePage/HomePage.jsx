import React from "react";
import Header from "../../components/Header/Header";
import styles from "./HomePage.module.css";

const Home = () => {
	return (
		<div>
			<Header />
			<div className={styles.welcomeSection}>
				<h2>Home</h2>
				<p>Bem-vindo à página inicial!</p>
			</div>
		</div>
	);
};

export default Home;
