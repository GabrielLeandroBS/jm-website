import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { AREA_ICONS, AREA_SLUGS } from "@/models/constants/areas";
import { areaRoute } from "@/models/constants/routes";

export async function ServicesChooser() {
	const [t, tAreas, tLabels] = await Promise.all([
		getTranslations("services.chooser"),
		getTranslations("services.areas"),
		getTranslations("services.labels"),
	]);

	return (
		<section className="bg-verde py-section text-cal">
			<div className="container-site flex flex-col gap-16">
				<SectionIntro
					tone="dark"
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<ul className="flex flex-col">
					{AREA_SLUGS.map((slug, index) => {
						const Icon = AREA_ICONS[slug];
						return (
							<li key={slug}>
								<Reveal delay={index * 0.06}>
									<Link
										href={areaRoute(slug)}
										className="group grid gap-4 border-t border-verde-line py-8 transition-colors duration-500 hover:text-lima focus-visible:outline-2 focus-visible:outline-lima md:grid-cols-12 md:items-center md:gap-8"
									>
										<Icon
											aria-hidden="true"
											className="size-8 text-lima md:col-span-1"
										/>
										<p className="text-lead md:col-span-7">
											{t(`items.${slug}`)}
										</p>
										<span className="flex items-center justify-between gap-4 font-display text-2xl font-extrabold tracking-logo md:col-span-4 md:justify-end">
											<span>
												{tLabels("brandPrefix")}{" "}
												<span className="text-verde-label">
													{tAreas(`${slug}.name`)}
												</span>
											</span>
											<ArrowRight
												aria-hidden="true"
												className="size-6 transition-transform duration-500 ease-calm group-hover:translate-x-1"
											/>
										</span>
									</Link>
								</Reveal>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
