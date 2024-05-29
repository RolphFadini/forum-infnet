import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Alert from "../../components/Alert";

test("Canary Test / Components", () => {
	const msg = "Teste de Componente";
	render(<Alert message={msg} />);

	const test = screen.getByTestId("message-text");

	expect(test).toHaveTextContent(msg);
});
