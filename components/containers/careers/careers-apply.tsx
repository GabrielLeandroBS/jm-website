import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { buildMailtoHref, buildWhatsappHref } from "@/lib/utils/contact-links";
import { CAREER_APPLY_KEYS } from "@/models/constants/content-keys";

export async function CareersApply() {
	const t = await getTranslations("careers");

	return (
		<section id="candidatura" className="bg-cal py-section">
			<div className="container-site">
				<div className="grid gap-12 rounded-panel bg-verde px-6 py-14 text-cal sm:px-10 md:px-16 md:py-20 lg:grid-cols-2">
					<div className="flex flex-col gap-8">
						<Reveal>
							<Eyebrow tone="dark">{t("apply.eyebrow")}</Eyebrow>
						</Reveal>
						<Reveal delay={0.08}>
							<TwoToneHeading
								tone="dark"
								size="display"
								title={t("apply.title")}
								nuance={t("apply.nuance")}
							/>
						</Reveal>
						<Reveal delay={0.16}>
							<p className="max-w-xl text-lead text-verde-soft">
								{t("apply.body")}
							</p>
						</Reveal>
						<Reveal
							delay={0.24}
							className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
						>
							<ButtonLink
								external
								size="lg"
								href={buildMailtoHref(t("apply.subject"))}
							>
								{t("apply.cta")}
							</ButtonLink>
							<ButtonLink
								external
								size="lg"
								variant="outlineLight"
								href={buildWhatsappHref(t("apply.whatsappMessage"))}
							>
								{t("apply.whatsapp")}
							</ButtonLink>
						</Reveal>
					</div>
					<Reveal delay={0.12} className="flex flex-col gap-6 self-end">
						<Eyebrow tone="dark">{t("apply.checklistTitle")}</Eyebrow>
						<CheckList
							tone="dark"
							items={CAREER_APPLY_KEYS.map((key) =>
								t(`apply.checklist.${key}`),
							)}
						/>
						<p className="text-base text-verde-soft">{t("openings.empty")}</p>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
