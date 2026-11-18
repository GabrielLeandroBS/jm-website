import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { buildMailtoHref } from "@/lib/utils/contact-links";

export async function CareersApply() {
	const t = await getTranslations("careers");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-8">
				<Reveal>
					<Eyebrow>{t("openings.eyebrow")}</Eyebrow>
				</Reveal>
				<Reveal delay={0.08}>
					<p className="max-w-2xl font-display text-headline font-semibold">
						{t("openings.empty")}
					</p>
				</Reveal>
				<Reveal delay={0.16}>
					<ButtonLink
						external
						size="lg"
						href={buildMailtoHref(t("apply.subject"))}
					>
						{t("apply.cta")}
					</ButtonLink>
				</Reveal>
			</div>
		</section>
	);
}
