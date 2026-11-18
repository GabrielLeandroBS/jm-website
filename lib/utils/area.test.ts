import { describe, expect, it } from "vitest";
import { isAreaSlug } from "@/lib/utils/area";

describe("isAreaSlug", () => {
	it("accepts known areas", () => {
		expect(isAreaSlug("industria")).toBe(true);
	});

	it("rejects unknown values", () => {
		expect(isAreaSlug("jardins")).toBe(false);
	});
});
