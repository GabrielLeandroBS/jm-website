import { describe, expect, it } from "vitest";
import { buildBreadcrumbList, buildFaqPage } from "@/lib/utils/structured-data";

describe("structured data", () => {
	it("numbers breadcrumb positions from 1", () => {
		const list = buildBreadcrumbList([
			{ name: "Início", url: "https://x.pt" },
			{ name: "Serviços", url: "https://x.pt/servicos" },
		]);
		expect(list.itemListElement[1]).toMatchObject({
			position: 2,
			name: "Serviços",
		});
	});

	it("maps FAQ entries to questions with accepted answers", () => {
		const page = buildFaqPage([{ key: "a", question: "Q?", answer: "R." }]);
		expect(page.mainEntity[0]).toEqual({
			"@type": "Question",
			name: "Q?",
			acceptedAnswer: { "@type": "Answer", text: "R." },
		});
	});
});
