import { describe, expect, it } from "vitest";
import { buildPageMetadata } from "@/lib/utils/page-metadata";

describe("buildPageMetadata", () => {
	it("mirrors title and description into social cards", () => {
		const metadata = buildPageMetadata({
			title: "Serviços",
			description: "Quatro domínios.",
			path: "/servicos",
			imageAlt: "j&m.",
		});

		expect(metadata.alternates?.canonical).toBe("/servicos");
		expect(metadata.openGraph).toMatchObject({
			title: "Serviços",
			url: "/servicos",
		});
		expect(metadata.twitter).toMatchObject({
			card: "summary_large_image",
			description: "Quatro domínios.",
		});
		expect(metadata.openGraph?.images).toEqual([
			expect.objectContaining({ url: "/og.jpg", width: 1200, alt: "j&m." }),
		]);
	});
});
