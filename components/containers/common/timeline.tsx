import { Reveal } from "@/components/containers/common/reveal";
import { cn } from "@/lib/utils";
import type { TimelineProps } from "@/models/interfaces/common";

export function Timeline({ items, tone = "light" }: TimelineProps) {
	return (
		<ol className="flex flex-col">
			{items.map((item, index) => (
				<li key={item.key}>
					<Reveal delay={index * 0.06}>
						<div
							className={cn(
								"grid gap-4 border-t py-8 md:grid-cols-12 md:gap-8",
								tone === "light" ? "border-linha" : "border-verde-line",
							)}
						>
							<p
								className={cn(
									"font-mono text-sm md:col-span-2",
									tone === "light" ? "text-cinza" : "text-lima",
								)}
							>
								{item.marker ?? `0${index + 1}`}
							</p>
							<h3 className="font-display text-2xl font-semibold md:col-span-4">
								{item.title}
							</h3>
							<p
								className={cn(
									"text-lg leading-relaxed md:col-span-6",
									tone === "light" ? "text-texto" : "text-verde-soft",
								)}
							>
								{item.body}
							</p>
						</div>
					</Reveal>
				</li>
			))}
		</ol>
	);
}
