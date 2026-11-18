import { describe, expect, it } from "vitest";
import {
	buildMailtoHref,
	buildPhoneHref,
	buildWhatsappHref,
} from "@/lib/utils/contact-links";

describe("contact links", () => {
	it("encodes the WhatsApp message", () => {
		expect(buildWhatsappHref("Olá & bom dia")).toBe(
			"https://wa.me/351961650396?text=Ol%C3%A1%20%26%20bom%20dia",
		);
	});

	it("builds a mailto with encoded spaces instead of plus signs", () => {
		const href = buildMailtoHref("Pedido de visita", "Casa grande");
		expect(href).toBe(
			"mailto:jmlimpcomercial@gmail.com?subject=Pedido%20de%20visita&body=Casa%20grande",
		);
	});

	it("builds a tel link", () => {
		expect(buildPhoneHref()).toBe("tel:+351961650396");
	});
});
