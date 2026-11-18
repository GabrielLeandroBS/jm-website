import { describe, expect, it } from "vitest";
import { resolveSiteUrl } from "@/lib/utils/site-url";

describe("resolveSiteUrl", () => {
	it("prefers the explicit app URL without a trailing slash", () => {
		expect(
			resolveSiteUrl({
				NEXT_PUBLIC_APP_URL: "https://jm.pt/",
				VERCEL_URL: "x.vercel.app",
			}),
		).toBe("https://jm.pt");
	});

	it("falls back to the Vercel production host", () => {
		expect(
			resolveSiteUrl({
				VERCEL_PROJECT_PRODUCTION_URL: "jm-website.vercel.app",
			}),
		).toBe("https://jm-website.vercel.app");
	});

	it("uses localhost when nothing is configured", () => {
		expect(resolveSiteUrl({})).toBe("http://localhost:3000");
	});
});
