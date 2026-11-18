import { Fragment } from "react";
import { Logo } from "@/components/containers/common/logo";
import { splitBrandText } from "@/lib/utils/brand-text";
import type { BrandTextProps } from "@/models/interfaces/common";

export function BrandText({ text, tone = "light" }: BrandTextProps) {
	const parts = splitBrandText(text);
	if (parts.length === 1 && parts[0].type === "text") return text;

	return parts.map((part) =>
		part.type === "brand" ? (
			<Logo key={part.key} inline dot={tone === "light" ? "verde" : "lima"} />
		) : (
			<Fragment key={part.key}>{part.value}</Fragment>
		),
	);
}
