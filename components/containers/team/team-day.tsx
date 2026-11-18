import { getTranslations } from "next-intl/server";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { Timeline } from "@/components/containers/common/timeline";
import { TEAM_DAY_KEYS } from "@/models/constants/content-keys";

export async function TeamDay() {
	const t = await getTranslations("team.day");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<Timeline
					items={TEAM_DAY_KEYS.map((key) => ({
						key,
						title: t(`items.${key}.title`),
						body: t(`items.${key}.body`),
					}))}
				/>
			</div>
		</section>
	);
}
