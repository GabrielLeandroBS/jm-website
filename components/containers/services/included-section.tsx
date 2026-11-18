import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { INCLUDED_KEYS } from "@/models/constants/areas";

export async function IncludedSection() {
	const t = await getTranslations("services");

	return (
		<section className="bg-tinta py-section text-cal">
			<div className="container-site grid gap-12 lg:grid-cols-2">
				<div className="flex flex-col gap-6">
					<Reveal>
						<Eyebrow tone="dark">{t("labels.included")}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading
							title={t("included.title")}
							nuance={t("included.nuance")}
							tone="dark"
						/>
					</Reveal>
				</div>
				<Reveal delay={0.16}>
					<CheckList
						tone="dark"
						items={INCLUDED_KEYS.map((key) => t(`included.${key}`))}
					/>
				</Reveal>
			</div>
		</section>
	);
}
