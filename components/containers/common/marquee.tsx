import { cn } from "@/lib/utils";
import type { MarqueeProps } from "@/models/interfaces/common";

export function Marquee({ items, className }: MarqueeProps) {
	const loop = [...items, ...items];

	return (
		<div className={cn("overflow-hidden", className)} aria-hidden="true">
			<div className="flex w-max animate-marquee gap-16">
				{loop.map((item, index) => (
					<span
						key={`${item}-${index.toString()}`}
						className="flex items-center gap-16 font-display text-headline font-bold tracking-display whitespace-nowrap"
					>
						{item}
						<span className="size-4 rounded-full bg-lima" />
					</span>
				))}
			</div>
		</div>
	);
}
