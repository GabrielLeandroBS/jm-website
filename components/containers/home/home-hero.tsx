import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { HeroAreaList } from "@/components/containers/home/hero-area-list";
import { HeroReportCard } from "@/components/containers/home/hero-report-card";
import { HeroStat } from "@/components/containers/home/hero-stat";
import { ButtonLink } from "@/components/shared/button-link";
import { HERO_STAT_KEYS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function HomeHero() {
	const [t, tCommon] = await Promise.all([
		getTranslations("home.hero"),
		getTranslations("common.cta"),
	]);

	return (
		<section className="bg-cal pt-24 pb-3 md:pt-28">
			<div className="container-site grid gap-3 lg:grid-cols-12">
				<div className="flex flex-col justify-between gap-12 rounded-panel bg-verde pad-panel text-cal lg:col-span-7 lg:min-h-[86svh]">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<Eyebrow tone="dark">{t("eyebrow")}</Eyebrow>
						<p className="hidden rounded-full border border-verde-line px-4 py-2 font-mono text-xs text-verde-label sm:block">
							{t("badge")}
						</p>
					</div>
					<div className="flex flex-col gap-8">
						<TwoToneHeading
							as="h1"
							size="mega"
							title={t("title")}
							nuance={t("nuance")}
							tone="dark"
						/>
						<p className="max-w-xl text-lead text-verde-soft">{t("lead")}</p>
						<div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
							<ButtonLink href={ROUTES.contact} size="lg">
								{tCommon("book")}
							</ButtonLink>
							<Link
								href={ROUTES.tour}
								className="group inline-flex min-h-11 items-center gap-2 text-base text-verde-soft transition-colors duration-300 hover:text-cal focus-visible:outline-2 focus-visible:outline-lima"
							>
								{tCommon("startTour")}
								<ArrowRight
									aria-hidden="true"
									className="size-4 transition-transform duration-500 ease-calm group-hover:translate-x-1"
								/>
							</Link>
						</div>
					</div>
					<dl
						aria-label={t("statsLabel")}
						className="grid grid-cols-3 gap-4 border-t border-lima/40 pt-6"
					>
						{HERO_STAT_KEYS.map((key) => (
							<HeroStat
								key={key}
								value={t(`stats.${key}.value`)}
								label={t(`stats.${key}.label`)}
							/>
						))}
					</dl>
				</div>
				<div className="flex flex-col gap-3 lg:col-span-5">
					<Reveal delay={0.15} className="flex-1">
						<HeroReportCard />
					</Reveal>
					<Reveal
						delay={0.25}
						className="flex flex-col gap-6 rounded-panel border border-linha bg-papel pad-card"
					>
						<Eyebrow>{t("panelLabel")}</Eyebrow>
						<HeroAreaList />
					</Reveal>
				</div>
			</div>
		</section>
	);
}
