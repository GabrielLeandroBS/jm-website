import { getTranslations } from "next-intl/server";
import { NumberedItem } from "@/components/containers/common/numbered-item";
import { Reveal } from "@/components/containers/common/reveal";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { CAREER_WHY_KEYS } from "@/models/constants/content-keys";

export async function CareersWhy() {
	const t = await getTranslations("careers.why");

	return (
		<section className="bg-cal pb-section">
			<div className="container-site flex flex-col gap-12">
				<Reveal>
					<Eyebrow>{t("eyebrow")}</Eyebrow>
				</Reveal>
				<div className="grid gap-10 md:grid-cols-3">
					{CAREER_WHY_KEYS.map((key, index) => (
						<Reveal key={key} delay={index * 0.08}>
							<NumberedItem
								marker={`0${index + 1}`}
								title={t(`${key}.title`)}
								body={t(`${key}.body`)}
							/>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
