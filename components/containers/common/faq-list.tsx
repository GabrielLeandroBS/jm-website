import { AccordionItem } from "@/components/shared/accordion-item";
import type { FaqListProps } from "@/models/interfaces/common";

export function FaqList({ items }: FaqListProps) {
	return (
		<div>
			{items.map((item) => (
				<AccordionItem key={item.key} question={item.question}>
					{item.answer}
				</AccordionItem>
			))}
		</div>
	);
}
