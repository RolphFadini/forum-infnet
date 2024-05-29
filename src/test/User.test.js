import { assert } from "chai";
import { User } from "../models/User.js";

describe("Testes da Classe User", () => {
	it("Deve indicar 15 pontos para um evento completo", () => {
		const user = new User();
		const expected = 15;
		const pontos = user.atualizarPontos("completo");

		assert.equal(pontos, expected);
	});

	it("Deve indicar 20 pontos para um comentário sobre um evento", () => {
		const user = new User();
		const expected = 20;

		user.atualizarPontos("comentario");
		const pontos = user.pontos;

		assert.equal(pontos, expected);
	});

	it("Deve indicar 5 pontos para uma indicação de gostei", () => {
		const user = new User();
		const expected = 5;

		user.atualizarPontos("gostei");
		const pontos = user.pontos;

		assert.equal(pontos, expected);
	});

	it("Deve indicar 5 pontos para uma indicação de desgostei", () => {
		const user = new User();
		const expected = 5;

		user.atualizarPontos("desgostei");
		const pontos = user.pontos;

		assert.equal(pontos, expected);
	});

	it("Deve indicar 3 pontos para uma resposta", () => {
		const user = new User();
		const expected = 3;

		user.atualizarPontos("resposta");
		const pontos = user.pontos;

		assert.equal(pontos, expected);
	});

	it("Deve indicar 48 pontos para cada uma das operações", () => {
		const user = new User();
		const expected = 48;

		user.atualizarPontos("completo");
		user.atualizarPontos("comentario");
		user.atualizarPontos("gostei");
		user.atualizarPontos("desgostei");
		user.atualizarPontos("resposta");
		const pontos = user.pontos;

		assert.equal(pontos, expected);
	});
});
