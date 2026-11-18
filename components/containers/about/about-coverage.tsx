import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { COVERAGE_POINT_KEYS } from "@/models/constants/content-keys";

export async function AboutCoverage() {
	const t = await getTranslations("about.coverage");

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-stack lg:grid-cols-2">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<div className="flex flex-col gap-8">
					<Reveal delay={0.08}>
						<p className="text-lead text-texto">{t("body")}</p>
					</Reveal>
					<Reveal delay={0.16}>
						<CheckList
							items={COVERAGE_POINT_KEYS.map((key) => t(`points.${key}`))}
						/>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
