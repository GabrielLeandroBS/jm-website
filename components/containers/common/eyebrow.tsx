import { cn } from "@/lib/utils";
import type { EyebrowProps } from "@/models/interfaces/common";

export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
	return (
		<p
			className={cn(
				"flex items-center gap-3 font-mono text-xs uppercase tracking-label",
				tone === "light" ? "text-cinza" : "text-lima",
				className,
			)}
		>
			<span
				aria-hidden="true"
				className={cn(
					"size-1.5 shrink-0 rounded-full",
					tone === "light" ? "bg-verde" : "bg-lima",
				)}
			/>
			{children}
		</p>
	);
}
