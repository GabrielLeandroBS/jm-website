import { getTranslations } from "next-intl/server";
import { BrandText } from "@/components/containers/common/brand-text";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { STORY_PARAGRAPH_KEYS } from "@/models/constants/content-keys";

export async function AboutStory() {
	const t = await getTranslations("about.story");

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-stack lg:grid-cols-3">
				<Reveal>
					<Eyebrow>{t("eyebrow")}</Eyebrow>
				</Reveal>
				<div className="flex flex-col gap-10 lg:col-span-2">
					{STORY_PARAGRAPH_KEYS.map((key, index) => (
						<Reveal key={key} delay={index * 0.06}>
							<p className="font-display text-title font-semibold text-pretty">
								<BrandText text={t(key)} />
							</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
