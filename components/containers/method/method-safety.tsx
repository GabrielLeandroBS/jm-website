import { getTranslations } from "next-intl/server";
import { NumberedItem } from "@/components/containers/common/numbered-item";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { SAFETY_KEYS } from "@/models/constants/content-keys";

export async function MethodSafety() {
	const t = await getTranslations("method.safety");

	return (
		<section className="bg-verde py-section text-cal">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
					tone="dark"
				/>
				<ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{SAFETY_KEYS.map((key, index) => (
						<li key={key}>
							<Reveal delay={index * 0.08}>
								<NumberedItem
									marker={`0${index + 1}`}
									title={t(`${key}.title`)}
									body={t(`${key}.body`)}
									tone="dark"
								/>
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
