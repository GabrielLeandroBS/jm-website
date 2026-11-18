import { getTranslations } from "next-intl/server";
import { NumberedItem } from "@/components/containers/common/numbered-item";
import { QuoteBlock } from "@/components/containers/common/quote-block";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { VALUE_KEYS } from "@/models/constants/content-keys";

const ROMAN_MARKERS = ["I", "II", "III", "IV"] as const;

export async function AboutValues() {
	const t = await getTranslations("about");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro eyebrow={t("values.eyebrow")} title={t("values.title")} />
				<ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{VALUE_KEYS.map((key, index) => (
						<li key={key}>
							<Reveal delay={index * 0.08}>
								<NumberedItem
									marker={ROMAN_MARKERS[index]}
									title={t(`values.${key}.title`)}
									body={t(`values.${key}.body`)}
								/>
							</Reveal>
						</li>
					))}
				</ul>
				<QuoteBlock
					quote={t("founder.quote")}
					name={t("founder.name")}
					role={t("founder.role")}
				/>
			</div>
		</section>
	);
}
