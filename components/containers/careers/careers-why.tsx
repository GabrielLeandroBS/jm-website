import { getTranslations } from "next-intl/server";
import { NumberedGrid } from "@/components/containers/common/numbered-grid";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { CAREER_WHY_KEYS } from "@/models/constants/content-keys";

export async function CareersWhy() {
	const t = await getTranslations("careers.why");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<NumberedGrid
					items={CAREER_WHY_KEYS.map((key) => ({
						key,
						title: t(`${key}.title`),
						body: t(`${key}.body`),
					}))}
				/>
			</div>
		</section>
	);
}
