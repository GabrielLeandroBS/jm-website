import { NumberedItem } from "@/components/containers/common/numbered-item";
import { Reveal } from "@/components/containers/common/reveal";
import { cn } from "@/lib/utils";
import type { NumberedGridProps } from "@/models/interfaces/common";

const COLUMN_CLASSES = {
	2: "md:grid-cols-2",
	3: "md:grid-cols-2 lg:grid-cols-3",
	4: "md:grid-cols-2 lg:grid-cols-4",
} as const;

export function NumberedGrid({
	items,
	columns = 3,
	tone = "light",
}: NumberedGridProps) {
	return (
		<ul className={cn("grid gap-x-10 gap-y-12", COLUMN_CLASSES[columns])}>
			{items.map((item, index) => (
				<li key={item.key}>
					<Reveal delay={(index % columns) * 0.08}>
						<NumberedItem
							tone={tone}
							marker={item.marker ?? `0${index + 1}`}
							title={item.title}
							body={item.body}
						/>
					</Reveal>
				</li>
			))}
		</ul>
	);
}
