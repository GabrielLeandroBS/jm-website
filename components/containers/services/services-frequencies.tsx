import { getTranslations } from "next-intl/server";
import { NumberedGrid } from "@/components/containers/common/numbered-grid";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { FREQUENCY_KEYS } from "@/models/constants/content-keys";

export async function ServicesFrequencies() {
	const t = await getTranslations("services.frequencies");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<NumberedGrid
					columns={4}
					items={FREQUENCY_KEYS.map((key) => ({
						key,
						title: t(`items.${key}.title`),
						body: t(`items.${key}.body`),
					}))}
				/>
			</div>
		</section>
	);
}
