import { BrandText } from "@/components/containers/common/brand-text";
import { cn } from "@/lib/utils";
import type { MarqueeProps } from "@/models/interfaces/common";

const SIZE_CLASSES = {
	sm: "gap-10 text-title",
	lg: "gap-16 text-headline",
} as const;

export function Marquee({
	items,
	size = "lg",
	tone = "light",
	className,
}: MarqueeProps) {
	const loop = [...items, ...items];

	return (
		<div className={cn("overflow-hidden", className)} aria-hidden="true">
			<div
				className={cn(
					"flex w-max animate-marquee font-display font-bold tracking-display will-change-transform",
					SIZE_CLASSES[size],
				)}
			>
				{loop.map((item, index) => (
					<span
						key={`${item}-${index.toString()}`}
						className={cn(
							"flex items-center whitespace-nowrap",
							SIZE_CLASSES[size],
						)}
					>
						<span>
							<BrandText text={item} tone={tone} />
						</span>
						<span className="size-3 rounded-full bg-lima" />
					</span>
				))}
			</div>
		</div>
	);
}
