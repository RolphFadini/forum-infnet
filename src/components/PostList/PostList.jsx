import React, { useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import postsMockedFromServer from "../../posts";

export const PostList = () => {
	const [postsData, setPostsData] = useState(postsMockedFromServer);

	return (
		<div>
			{postsData.map((data) => (
				<PostCard
					key={data.id}
					title={data.title}
					description={data.description}
				/>
			))}
		</div>
	);
};
