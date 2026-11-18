import { getTranslations } from "next-intl/server";
import { ComparisonTable } from "@/components/containers/common/comparison-table";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { DIFFERENCE_KEYS } from "@/models/constants/content-keys";
import type { HomeDifferenceProps } from "@/models/interfaces/home";

export async function HomeDifference({
	eyebrow,
	title,
	nuance,
}: HomeDifferenceProps) {
	const t = await getTranslations("home.difference");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={eyebrow ?? t("eyebrow")}
					title={title ?? t("title")}
					nuance={nuance ?? t("nuance")}
					body={t("intro")}
				/>
				<ComparisonTable
					topicLabel={t("topicLabel")}
					usualLabel={t("usualLabel")}
					oursLabel={t("oursLabel")}
					rows={DIFFERENCE_KEYS.map((key) => ({
						key,
						topic: t(`rows.${key}.topic`),
						usual: t(`rows.${key}.usual`),
						ours: t(`rows.${key}.ours`),
					}))}
				/>
			</div>
		</section>
	);
}
