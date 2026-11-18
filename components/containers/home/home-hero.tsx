import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { HeroAreaList } from "@/components/containers/home/hero-area-list";
import { ButtonLink } from "@/components/shared/button-link";
import { ROUTES } from "@/models/constants/routes";

export async function HomeHero() {
	const t = await getTranslations("home.hero");
	const tCommon = await getTranslations("common.cta");

	return (
		<section className="bg-cal pt-28 pb-6">
			<div className="container-site grid gap-4 lg:grid-cols-5">
				<div className="flex min-h-[78svh] flex-col justify-between gap-16 rounded-panel bg-verde p-8 text-cal md:p-14 lg:col-span-3">
					<Reveal>
						<Eyebrow tone="dark">{t("eyebrow")}</Eyebrow>
					</Reveal>
					<div className="flex flex-col gap-8">
						<Reveal delay={0.1} y={40}>
							<TwoToneHeading
								as="h1"
								size="mega"
								title={t("title")}
								nuance={t("nuance")}
								tone="dark"
							/>
						</Reveal>
						<Reveal delay={0.25}>
							<p className="max-w-xl text-lead text-verde-soft">{t("lead")}</p>
						</Reveal>
					</div>
					<Reveal delay={0.35} className="flex flex-wrap items-center gap-6">
						<ButtonLink href={ROUTES.contact} size="lg">
							{tCommon("book")}
						</ButtonLink>
						<Link
							href={ROUTES.method}
							className="group inline-flex items-center gap-2 text-base text-verde-soft transition-colors duration-300 hover:text-cal focus-visible:outline-2 focus-visible:outline-lima"
						>
							{tCommon("learnMethod")}
							<ArrowRight
								aria-hidden="true"
								className="size-4 transition-transform duration-500 ease-calm group-hover:translate-x-1"
							/>
						</Link>
					</Reveal>
				</div>
				<div className="flex flex-col justify-between gap-10 rounded-panel border border-linha bg-papel bg-grid p-8 md:p-10 lg:col-span-2">
					<Eyebrow>{t("panelLabel")}</Eyebrow>
					<HeroAreaList />
					<p className="text-base text-cinza">{t("panelFooter")}</p>
				</div>
			</div>
		</section>
	);
}
