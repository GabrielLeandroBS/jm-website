import { getTranslations } from "next-intl/server";
import { NumberedGrid } from "@/components/containers/common/numbered-grid";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { COMMITMENT_KEYS } from "@/models/constants/content-keys";

export async function AboutCommitments() {
	const t = await getTranslations("about.commitments");

	return (
		<section className="bg-tinta py-section text-cal">
			<div className="container-site flex flex-col gap-16">
				<SectionIntro
					tone="dark"
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<NumberedGrid
					tone="dark"
					items={COMMITMENT_KEYS.map((key) => ({
						key,
						title: t(`items.${key}.title`),
						body: t(`items.${key}.body`),
					}))}
				/>
			</div>
		</section>
	);
}
