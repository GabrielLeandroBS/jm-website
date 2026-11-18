import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { AccordionItem } from "@/components/shared/accordion-item";

export async function FaqGroups() {
	const t = await getTranslations("faq.groups");

	return (
		<section className="bg-cal pb-section">
			<div className="container-site flex flex-col gap-20">
				<FaqGroup title={t("general.title")}>
					<AccordionItem question={t("general.items.coverage.question")}>
						{t("general.items.coverage.answer")}
					</AccordionItem>
					<AccordionItem question={t("general.items.spaces.question")}>
						{t("general.items.spaces.answer")}
					</AccordionItem>
					<AccordionItem question={t("general.items.sameTeam.question")}>
						{t("general.items.sameTeam.answer")}
					</AccordionItem>
				</FaqGroup>
				<FaqGroup title={t("booking.title")}>
					<AccordionItem question={t("booking.items.price.question")}>
						{t("booking.items.price.answer")}
					</AccordionItem>
					<AccordionItem question={t("booking.items.visit.question")}>
						{t("booking.items.visit.answer")}
					</AccordionItem>
					<AccordionItem question={t("booking.items.lead.question")}>
						{t("booking.items.lead.answer")}
					</AccordionItem>
				</FaqGroup>
				<FaqGroup title={t("industry.title")}>
					<AccordionItem question={t("industry.items.downtime.question")}>
						{t("industry.items.downtime.answer")}
					</AccordionItem>
					<AccordionItem question={t("industry.items.polishing.question")}>
						{t("industry.items.polishing.answer")}
					</AccordionItem>
					<AccordionItem question={t("industry.items.report.question")}>
						{t("industry.items.report.answer")}
					</AccordionItem>
				</FaqGroup>
				<FaqGroup title={t("safety.title")}>
					<AccordionItem question={t("safety.items.insurance.question")}>
						{t("safety.items.insurance.answer")}
					</AccordionItem>
					<AccordionItem question={t("safety.items.keys.question")}>
						{t("safety.items.keys.answer")}
					</AccordionItem>
					<AccordionItem question={t("safety.items.products.question")}>
						{t("safety.items.products.answer")}
					</AccordionItem>
				</FaqGroup>
			</div>
		</section>
	);
}

function FaqGroup({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="grid gap-8 lg:grid-cols-3">
			<Reveal>
				<h2 className="font-display font-semibold text-headline lg:sticky lg:top-32">
					{title}
				</h2>
			</Reveal>
			<div className="lg:col-span-2">{children}</div>
		</div>
	);
}
