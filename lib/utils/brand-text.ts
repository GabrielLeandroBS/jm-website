const BRAND = "j&m.";

export type BrandTextPart =
	| { type: "text"; key: string; value: string }
	| { type: "brand"; key: string };

export function splitBrandText(text: string): BrandTextPart[] {
	const parts: BrandTextPart[] = [];
	let cursor = 0;
	let index = text.indexOf(BRAND);

	while (index !== -1) {
		if (index > cursor) {
			parts.push({
				type: "text",
				key: `t${cursor}`,
				value: text.slice(cursor, index),
			});
		}
		parts.push({ type: "brand", key: `b${index}` });
		cursor = index + BRAND.length;
		index = text.indexOf(BRAND, cursor);
	}

	if (cursor < text.length || parts.length === 0) {
		parts.push({ type: "text", key: `t${cursor}`, value: text.slice(cursor) });
	}

	return parts;
}
