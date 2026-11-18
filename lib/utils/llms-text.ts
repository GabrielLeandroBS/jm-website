export interface LlmsSection {
	title: string;
	links: readonly { label: string; url: string; summary: string }[];
}

export interface LlmsDocument {
	name: string;
	summary: string;
	details: readonly string[];
	sections: readonly LlmsSection[];
}

export function buildLlmsText({
	name,
	summary,
	details,
	sections,
}: LlmsDocument) {
	const blocks = [
		`# ${name}`,
		`> ${summary}`,
		details.map((line) => `- ${line}`).join("\n"),
		...sections.map((section) =>
			[
				`## ${section.title}`,
				...section.links.map(
					(link) => `- [${link.label}](${link.url}): ${link.summary}`,
				),
			].join("\n"),
		),
	];

	return `${blocks.join("\n\n")}\n`;
}
