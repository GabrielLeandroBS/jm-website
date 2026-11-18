import { describe, expect, it } from "vitest";
import { buildPageMetadata } from "@/lib/utils/page-metadata";

describe("buildPageMetadata", () => {
	it("mirrors title and description into social cards", () => {
		const metadata = buildPageMetadata({
			title: "Serviços",
			description: "Quatro domínios.",
			path: "/servicos",
		});

		expect(metadata.alternates?.canonical).toBe("/servicos");
		expect(metadata.openGraph).toMatchObject({
			title: "Serviços",
			url: "/servicos",
		});
		expect(metadata.twitter).toMatchObject({ description: "Quatro domínios." });
	});
});
