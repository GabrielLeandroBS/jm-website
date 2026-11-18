import type { FaqEntry } from "@/models/interfaces/common";

export interface BreadcrumbEntry {
	name: string;
	url: string;
}

export function buildBreadcrumbList(entries: readonly BreadcrumbEntry[]) {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: entries.map((entry, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: entry.name,
			item: entry.url,
		})),
	};
}

export function buildFaqPage(entries: readonly FaqEntry[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: entries.map((entry) => ({
			"@type": "Question",
			name: entry.question,
			acceptedAnswer: { "@type": "Answer", text: entry.answer },
		})),
	};
}
