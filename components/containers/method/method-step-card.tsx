import { cn } from "@/lib/utils";
import type { MethodStepCardProps } from "@/models/interfaces/method";

export function MethodStepCard({
	number,
	title,
	body,
	receivesLabel,
	receives,
	tone = "light",
	highlighted = false,
}: MethodStepCardProps) {
	const isDark = tone === "dark";

	return (
		<article
			className={cn(
				"flex flex-col gap-6 rounded-card pad-card",
				highlighted && "bg-lima text-tinta",
				!highlighted && isDark && "border border-tinta-line bg-tinta text-cal",
				!highlighted && !isDark && "border border-linha bg-papel text-tinta",
			)}
		>
			<p className="font-display text-display font-bold leading-none tracking-display">
				{number}
			</p>
			<h3 className="font-display text-title font-semibold">{title}</h3>
			<p
				className={cn(
					"max-w-xl text-lg leading-relaxed",
					highlighted && "text-texto",
					!highlighted && isDark && "text-tinta-soft",
					!highlighted && !isDark && "text-texto",
				)}
			>
				{body}
			</p>
			<p
				className={cn(
					"flex flex-wrap items-center gap-3 border-t pt-5 text-base",
					highlighted
						? "border-tinta"
						: isDark
							? "border-tinta-line"
							: "border-linha",
				)}
			>
				<span className="font-mono text-xs uppercase tracking-label opacity-70">
					{receivesLabel}
				</span>
				{receives}
			</p>
		</article>
	);
}
