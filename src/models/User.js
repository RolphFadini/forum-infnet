export class User {
	constructor() {
		this.pontos = 0;
	}

	atualizarPontos(acao) {
		switch (acao) {
			case "completo":
				this.pontos += 15;
				break;
			case "comentario":
				this.pontos += 20;
				break;
			case "gostei":
				this.pontos += 5;
				break;
			case "desgostei":
				this.pontos += 5;
				break;
			case "resposta":
				this.pontos += 3;
				break;
		}
		return this.pontos;
	}
}
