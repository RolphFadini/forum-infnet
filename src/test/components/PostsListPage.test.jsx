import React from "react";
import { render, screen } from "@testing-library/react";
import PostsListPage from "../../pages/PostsListPage/PostsListPage";
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

test("PostsListPage Input Search", () => {
	render(
		<PostsListPage
			action={() => {}}
			removeAction={() => {}}
		/>
	);

	let list = screen.getByTestId("post_list");
	expect(list).toHaveLength(58);

	const inputSearch = screen.getByTestId("inputSearch");
	userEvent.type(inputSearch, "A Visitor");

	list = screen.getAllByTestId("post_list");
	expect(list).toHaveLength(1);
});
