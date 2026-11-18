import { Checkmark } from "@carbon/icons-react";
import { cn } from "@/lib/utils";
import type { CheckListProps } from "@/models/interfaces/common";

export function CheckList({ items, tone = "light" }: CheckListProps) {
	return (
		<ul className="flex flex-col">
			{items.map((item) => (
				<li
					key={item}
					className={cn(
						"flex items-start gap-4 border-t py-5 text-lg",
						tone === "light" ? "border-linha" : "border-verde-line",
					)}
				>
					<Checkmark
						aria-hidden="true"
						className={cn(
							"mt-1 size-5 shrink-0",
							tone === "light" ? "text-verde" : "text-lima",
						)}
					/>
					{item}
				</li>
			))}
		</ul>
	);
}
