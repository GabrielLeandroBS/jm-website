import { BrandText } from "@/components/containers/common/brand-text";
import { AccordionItem } from "@/components/shared/accordion-item";
import type { FaqListProps } from "@/models/interfaces/common";

export function FaqList({ items }: FaqListProps) {
	return (
		<div>
			{items.map((item) => (
				<AccordionItem key={item.key} question={item.question}>
					<BrandText text={item.answer} />
				</AccordionItem>
			))}
		</div>
	);
}
