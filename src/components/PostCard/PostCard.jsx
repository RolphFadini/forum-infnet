import React from "react";

const PostCard = ({ title, description }) => {
	return (
		<div>
			<h1 onClick={() => alert(title)}>{title}</h1>
			<p>{description}</p>
		</div>
	);
};

export default PostCard;
