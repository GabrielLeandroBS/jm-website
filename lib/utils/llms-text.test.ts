import { describe, expect, it } from "vitest";
import { buildLlmsText } from "@/lib/utils/llms-text";

describe("buildLlmsText", () => {
	it("renders the llms.txt structure", () => {
		const text = buildLlmsText({
			name: "j&m.",
			summary: "Limpeza.",
			details: ["Desde 2016"],
			sections: [
				{
					title: "Páginas",
					links: [{ label: "Início", url: "https://x.pt", summary: "Casa." }],
				},
			],
		});

		expect(text).toBe(
			"# j&m.\n\n> Limpeza.\n\n- Desde 2016\n\n## Páginas\n- [Início](https://x.pt): Casa.\n",
		);
	});
});
