import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { NumberedItem } from "@/components/containers/common/numbered-item";
import { Reveal } from "@/components/containers/common/reveal";
import { TEAM_PRINCIPLE_KEYS } from "@/models/constants/content-keys";

export async function TeamPrinciples() {
	const t = await getTranslations("team.principles");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<Reveal>
					<Eyebrow>{t("eyebrow")}</Eyebrow>
				</Reveal>
				<div className="grid gap-10 md:grid-cols-3">
					{TEAM_PRINCIPLE_KEYS.map((key, index) => (
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
