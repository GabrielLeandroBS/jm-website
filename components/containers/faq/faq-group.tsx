import { FaqList } from "@/components/containers/common/faq-list";
import { Reveal } from "@/components/containers/common/reveal";
import type { FaqGroupProps } from "@/models/interfaces/common";

export function FaqGroup({ title, items }: FaqGroupProps) {
	return (
		<div className="grid gap-8 lg:grid-cols-3">
			<Reveal>
				<h2 className="font-display font-semibold text-headline lg:sticky lg:top-32">
					{title}
				</h2>
			</Reveal>
			<div className="lg:col-span-2">
				<FaqList items={items} />
			</div>
		</div>
	);
}
