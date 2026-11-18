import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { NumberedItem } from "@/components/containers/common/numbered-item";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import {
	CAREER_PROCESS_KEYS,
	CAREER_PROFILE_KEYS,
} from "@/models/constants/content-keys";

export async function CareersProfile() {
	const t = await getTranslations("careers.profile");
	const tProcess = await getTranslations("careers.process");

	return (
		<section className="bg-verde py-section text-cal">
			<div className="container-site flex flex-col gap-20">
				<div className="grid gap-12 lg:grid-cols-2">
					<SectionIntro
						tone="dark"
						eyebrow={t("eyebrow")}
						title={t("title")}
						nuance={t("nuance")}
					/>
					<Reveal delay={0.12} className="self-end">
						<CheckList
							tone="dark"
							items={CAREER_PROFILE_KEYS.map((key) => t(key))}
						/>
					</Reveal>
				</div>
				<div className="flex flex-col gap-10">
					<Reveal>
						<p className="font-mono text-lima text-xs uppercase tracking-label">
							{tProcess("eyebrow")}
						</p>
					</Reveal>
					<div className="grid gap-10 md:grid-cols-3">
						{CAREER_PROCESS_KEYS.map((key, index) => (
							<Reveal key={key} delay={index * 0.08}>
								<NumberedItem
									tone="dark"
									marker={`0${index + 1}`}
									title={tProcess(`${key}.title`)}
									body={tProcess(`${key}.body`)}
								/>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
