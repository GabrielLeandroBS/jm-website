import { getTranslations } from "next-intl/server";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { Timeline } from "@/components/containers/common/timeline";
import { CAREER_FIRST_MONTH_KEYS } from "@/models/constants/content-keys";

export async function CareersFirstMonth() {
	const t = await getTranslations("careers.firstMonth");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-16">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<Timeline
					items={CAREER_FIRST_MONTH_KEYS.map((key) => ({
						key,
						marker: t(`items.${key}.marker`),
						title: t(`items.${key}.title`),
						body: t(`items.${key}.body`),
					}))}
				/>
			</div>
		</section>
	);
}
