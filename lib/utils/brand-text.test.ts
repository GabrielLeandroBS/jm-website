import { describe, expect, it } from "vitest";
import { splitBrandText } from "@/lib/utils/brand-text";

describe("splitBrandText", () => {
	it("returns plain text untouched", () => {
		expect(splitBrandText("Limpo.")).toEqual([
			{ type: "text", key: "t0", value: "Limpo." },
		]);
	});

	it("splits every brand mention", () => {
		expect(
			splitBrandText("A j&m. cresceu. O padrão j&m.").map((part) => part.type),
		).toEqual(["text", "brand", "text", "brand"]);
	});

	it("keeps punctuation after the brand", () => {
		const parts = splitBrandText("da j&m., do método");
		expect(parts.at(-1)).toMatchObject({ type: "text", value: ", do método" });
	});
});
