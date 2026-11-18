import { cn } from "@/lib/utils";
import type { FactTileProps } from "@/models/interfaces/common";

export function FactTile({ value, label, tone = "light" }: FactTileProps) {
	return (
		<div
			className={cn(
				"flex flex-col gap-4 border-t pt-6",
				tone === "light" ? "border-tinta" : "border-verde-line",
			)}
		>
			<p className="font-display text-display font-bold tracking-display">
				{value}
			</p>
			<p
				className={cn(
					"max-w-56 text-base",
					tone === "light" ? "text-texto" : "text-verde-soft",
				)}
			>
				{label}
			</p>
		</div>
	);
}
