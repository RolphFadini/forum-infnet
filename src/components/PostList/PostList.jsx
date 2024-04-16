import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<PostCard
					key={post.id}
					title={post.name}
					description={post.description}
				/>
			))}
		</div>
	);
};

export default PostList;
