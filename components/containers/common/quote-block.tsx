import { Reveal } from "@/components/containers/common/reveal";
import type { QuoteBlockProps } from "@/models/interfaces/common";

export function QuoteBlock({ quote, name, role }: QuoteBlockProps) {
	return (
		<Reveal>
			<figure className="flex flex-col gap-10 border-t border-tinta pt-10">
				<blockquote className="font-display text-headline font-bold tracking-display text-balance">
					“{quote}”
				</blockquote>
				<figcaption className="flex items-center gap-4">
					<span aria-hidden="true" className="size-3 rounded-full bg-verde" />
					<span className="text-lg font-medium">{name}</span>
					<span className="font-mono text-xs uppercase tracking-label text-cinza">
						{role}
					</span>
				</figcaption>
			</figure>
		</Reveal>
	);
}
