import { cn } from "@/lib/utils";
import type { NumberedItemProps } from "@/models/interfaces/common";

export function NumberedItem({
	marker,
	title,
	body,
	tone = "light",
}: NumberedItemProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-3 border-t pt-6",
				tone === "light" ? "border-linha" : "border-verde-line",
			)}
		>
			<p
				className={cn(
					"font-mono text-sm",
					tone === "light" ? "text-cinza" : "text-lima",
				)}
			>
				{marker}
			</p>
			<h3 className="font-display text-2xl font-semibold">{title}</h3>
			<p
				className={cn(
					"text-base leading-relaxed",
					tone === "light" ? "text-texto" : "text-verde-soft",
				)}
			>
				{body}
			</p>
		</div>
	);
}
