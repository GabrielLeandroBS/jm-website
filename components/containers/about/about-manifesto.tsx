import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { NumberedItem } from "@/components/containers/common/numbered-item";
import { Reveal } from "@/components/containers/common/reveal";
import { WordReveal } from "@/components/containers/common/word-reveal";
import { RULE_KEYS } from "@/models/constants/content-keys";

export async function AboutManifesto() {
	const t = await getTranslations("about");

	return (
		<section className="bg-verde py-section text-cal">
			<div className="container-site flex flex-col gap-stack">
				<div className="flex flex-col gap-10">
					<Reveal>
						<Eyebrow tone="dark">{t("manifesto.eyebrow")}</Eyebrow>
					</Reveal>
					<WordReveal
						lead={t("manifesto.title")}
						nuance={t("manifesto.nuance")}
						className="max-w-6xl"
					/>
					<Reveal>
						<p className="max-w-2xl text-lead text-verde-soft">
							{t("manifesto.body")}
						</p>
					</Reveal>
				</div>
				<div className="flex flex-col gap-8">
					<Reveal>
						<Eyebrow tone="dark">{t("rules.eyebrow")}</Eyebrow>
					</Reveal>
					<ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
						{RULE_KEYS.map((key, index) => (
							<li key={key}>
								<Reveal delay={index * 0.08}>
									<NumberedItem
										marker={`0${index + 1}`}
										title={t(`rules.${key}.title`)}
										body={t(`rules.${key}.body`)}
										tone="dark"
									/>
								</Reveal>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}
