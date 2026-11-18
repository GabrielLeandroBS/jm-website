import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { buildWhatsappHref } from "@/lib/utils/contact-links";
import { ROUTES } from "@/models/constants/routes";
import type { CtaBandProps } from "@/models/interfaces/common";

export async function CtaBand({
	eyebrow,
	title,
	nuance,
	body,
	whatsappMessage,
}: CtaBandProps) {
	const t = await getTranslations("common");

	return (
		<section className="bg-cal py-section">
			<div className="container-site">
				<div className="flex flex-col gap-12 rounded-panel bg-verde px-8 py-16 text-cal md:px-16 md:py-24">
					<Reveal>
						<Eyebrow tone="dark">{eyebrow}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading
							title={title}
							nuance={nuance}
							tone="dark"
							size="display"
						/>
					</Reveal>
					<div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
						<Reveal delay={0.16} className="max-w-xl">
							<p className="text-lead text-verde-soft">{body}</p>
						</Reveal>
						<Reveal delay={0.24} className="flex flex-wrap gap-3">
							<ButtonLink
								external
								href={buildWhatsappHref(
									whatsappMessage ?? t("whatsapp.default"),
								)}
								size="lg"
							>
								{t("cta.bookWhatsapp")}
							</ButtonLink>
							<ButtonLink href={ROUTES.tour} variant="outlineLight" size="lg">
								{t("cta.startTour")}
							</ButtonLink>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
