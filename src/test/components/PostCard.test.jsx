import React from "react";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import PostCard from "../../components/PostCard/PostCard";

test("PostCard Test / Components", () => {
	const title = "Test event";
	const description = "Testing a creation of an event";
	render(
		<PostCard
			title={title}
			description={description}
		/>
	);

	const testTitle = screen.getByTestId("title");
	const testDescription = screen.getByTestId("description");

	expect(testTitle).toHaveTextContent(title);
	expect(testDescription).toHaveTextContent(description);
});
