import React from "react";

export const PostCard = ({ title, description }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};
