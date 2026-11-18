import { ArrowLeft } from "@carbon/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrandLockup } from "@/components/containers/common/brand-lockup";
import { Reveal } from "@/components/containers/common/reveal";
import { ButtonLink } from "@/components/shared/button-link";
import { buildWhatsappHref } from "@/lib/utils/contact-links";
import { AREA_ICONS } from "@/models/constants/areas";
import { ROUTES } from "@/models/constants/routes";
import type { AreaSectionProps } from "@/models/interfaces/services";

export async function AreaHero({ slug }: AreaSectionProps) {
	const t = await getTranslations("services");
	const tCommon = await getTranslations("common");
	const Icon = AREA_ICONS[slug];
	const name = t(`areas.${slug}.name`);

	return (
		<section className="bg-cal pt-28 pb-6">
			<div className="container-site">
				<div className="flex min-h-[70svh] flex-col justify-between gap-16 rounded-panel bg-verde pad-panel text-cal">
					<Reveal className="flex items-center justify-between gap-6">
						<Link
							href={ROUTES.services}
							className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-label text-verde-label transition-colors hover:text-lima focus-visible:outline-2 focus-visible:outline-lima"
						>
							<ArrowLeft aria-hidden="true" className="size-4" />
							{t("labels.allServices")}
						</Link>
						<Icon aria-hidden="true" className="size-10 text-lima" />
					</Reveal>
					<div className="flex flex-col gap-8">
						<Reveal delay={0.08}>
							<p className="font-display text-mega font-extrabold leading-none tracking-logo">
								<BrandLockup domain={name} tone="dark" />
							</p>
						</Reveal>
						<Reveal delay={0.16}>
							<h1 className="font-display text-title font-semibold">
								{t(`areas.${slug}.title`)}
							</h1>
						</Reveal>
						<Reveal delay={0.24}>
							<p className="max-w-2xl text-lead text-verde-soft">
								{t(`areas.${slug}.intro`)}
							</p>
						</Reveal>
					</div>
					<Reveal delay={0.32}>
						<ButtonLink
							external
							size="lg"
							href={buildWhatsappHref(tCommon("whatsapp.area", { area: name }))}
						>
							{tCommon("cta.bookWhatsapp")}
						</ButtonLink>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
