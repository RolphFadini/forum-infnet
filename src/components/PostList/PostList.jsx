import React from "react";
import PostCard from "../PostCard/PostCard";

export const PostList = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<PostCard
					key={post.id}
					id={post.id}
					title={post.name}
					description={post.description}
				/>
			))}
		</div>
	);
};
