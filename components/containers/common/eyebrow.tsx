import { cn } from "@/lib/utils";
import type { EyebrowProps } from "@/models/interfaces/common";

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
	return (
		<p
			className={cn(
				"font-mono text-xs uppercase tracking-label",
				tone === "light" ? "text-cinza" : "text-verde-label",
				className,
			)}
		>
			{children}
		</p>
	);
}
