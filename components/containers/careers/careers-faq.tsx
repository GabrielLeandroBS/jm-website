import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { FaqList } from "@/components/containers/common/faq-list";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { CAREER_FAQ_KEYS } from "@/models/constants/content-keys";

export async function CareersFaq() {
	const t = await getTranslations("careers.faq");

	return (
		<section className="bg-cal pb-section">
			<div className="container-site grid gap-12 lg:grid-cols-3">
				<div className="flex flex-col gap-6 self-start lg:sticky lg:top-32">
					<Reveal>
						<Eyebrow>{t("eyebrow")}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading
							size="title"
							title={t("title")}
							nuance={t("nuance")}
						/>
					</Reveal>
				</div>
				<Reveal delay={0.12} className="lg:col-span-2">
					<FaqList
						items={CAREER_FAQ_KEYS.map((key) => ({
							key,
							question: t(`items.${key}.question`),
							answer: t(`items.${key}.answer`),
						}))}
					/>
				</Reveal>
			</div>
		</section>
	);
}
