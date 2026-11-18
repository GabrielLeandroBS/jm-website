import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import type { AreaSectionProps } from "@/models/interfaces/services";

export async function AreaChallenge({ slug }: AreaSectionProps) {
	const t = await getTranslations("services");

	return (
		<section className="bg-cal">
			<div className="container-site">
				<div className="grid gap-10 rounded-panel bg-verde px-6 py-14 text-cal sm:px-10 md:px-16 md:py-24 lg:grid-cols-2 lg:gap-16">
					<div className="flex flex-col gap-6">
						<Reveal>
							<Eyebrow tone="dark">{t("labels.challenge")}</Eyebrow>
						</Reveal>
						<Reveal delay={0.08}>
							<TwoToneHeading
								tone="dark"
								size="title"
								title={t(`areas.${slug}.challenge.title`)}
							/>
						</Reveal>
					</div>
					<Reveal delay={0.16} className="self-end">
						<p className="text-lead text-verde-soft">
							{t(`areas.${slug}.challenge.body`)}
						</p>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
