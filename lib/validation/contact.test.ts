import { describe, expect, it } from "vitest";
import { buildContactSchema } from "@/lib/validation/contact";

const schema = buildContactSchema({
	nameRequired: "nome",
	emailInvalid: "email",
	spaceRequired: "espaço",
	messageShort: "mensagem",
	consentRequired: "consentimento",
});

describe("contact schema", () => {
	it("accepts a complete request", () => {
		const result = schema.safeParse({
			name: "Ana Silva",
			email: "ana@exemplo.pt",
			space: "factory",
			message: "Fábrica com duas linhas de produção.",
			consent: true,
		});
		expect(result.success).toBe(true);
	});

	it("rejects missing consent and invalid email", () => {
		const result = schema.safeParse({
			name: "Ana",
			email: "x",
			space: "house",
			message: "Casa grande no Porto",
			consent: false,
		});
		expect(result.success).toBe(false);
	});
});
