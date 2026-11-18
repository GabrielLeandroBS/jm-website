import { SITE_CONFIG } from "@/config/site";

export function buildWhatsappHref(message: string) {
	return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildMailtoHref(subject: string, body = "") {
	const query = new URLSearchParams({ subject, body })
		.toString()
		.replaceAll("+", "%20");
	return `mailto:${SITE_CONFIG.email}?${query}`;
}

export function buildPhoneHref() {
	return `tel:${SITE_CONFIG.phone}`;
}
