import { getTranslations } from "next-intl/server";
import { NumberedGrid } from "@/components/containers/common/numbered-grid";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { TEAM_TRAINING_KEYS } from "@/models/constants/content-keys";

export async function TeamTraining() {
	const t = await getTranslations("team.training");

	return (
		<section className="bg-tinta py-section text-cal">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					tone="dark"
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<NumberedGrid
					tone="dark"
					items={TEAM_TRAINING_KEYS.map((key) => ({
						key,
						title: t(`items.${key}.title`),
						body: t(`items.${key}.body`),
					}))}
				/>
			</div>
		</section>
	);
}
