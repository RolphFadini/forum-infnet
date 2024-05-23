import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
	const totalPages = Math.ceil(totalPosts / postsPerPage);

	const handlePrevPage = () => {
		if (currentPage > 1) {
			paginate(currentPage - 1);
		}
	};

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			paginate(currentPage + 1);
		}
	};

	return (
		<div className={styles.pagination}>
			<button
				onClick={handlePrevPage}
				disabled={currentPage === 1}
				className={styles.pageButton}
			>
				&lt;
			</button>
			<div className={styles.pageInfo}>
				Página <strong>{currentPage}</strong> de {totalPages}
			</div>
			<button
				onClick={handleNextPage}
				disabled={currentPage === totalPages}
				className={styles.pageButton}
			>
				&gt;
			</button>
		</div>
	);
};

export default Pagination;
