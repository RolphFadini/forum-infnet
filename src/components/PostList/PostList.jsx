import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = ({ posts, onDelete }) => {
	return (
		<div>
			{posts.map((post) => (
				<PostCard
					key={post.id}
					id={post.id}
					title={post.name}
					description={post.description}
					onDelete={onDelete}
				/>
			))}
		</div>
	);
};

export default PostList;
