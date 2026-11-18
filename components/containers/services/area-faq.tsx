import { getTranslations } from "next-intl/server";
import { FaqList } from "@/components/containers/common/faq-list";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { AREA_FAQ_KEYS } from "@/models/constants/content-keys";
import type { AreaSectionProps } from "@/models/interfaces/services";

export async function AreaFaq({ slug }: AreaSectionProps) {
	const t = await getTranslations("services");

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-stack lg:grid-cols-3">
				<Reveal>
					<TwoToneHeading
						size="title"
						title={t("labels.areaFaq", { area: t(`areas.${slug}.name`) })}
						className="lg:sticky lg:top-32"
					/>
				</Reveal>
				<Reveal delay={0.12} className="lg:col-span-2">
					<FaqList
						items={AREA_FAQ_KEYS.map((key) => ({
							key,
							question: t(`areas.${slug}.faq.${key}.question`),
							answer: t(`areas.${slug}.faq.${key}.answer`),
						}))}
					/>
				</Reveal>
			</div>
		</section>
	);
}
