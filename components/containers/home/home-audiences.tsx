import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { cn } from "@/lib/utils";
import { AUDIENCE_KEYS } from "@/models/constants/content-keys";

export async function HomeAudiences() {
	const t = await getTranslations("home.audiences");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
					body={t("intro")}
				/>
				<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
					{AUDIENCE_KEYS.map((key, index) => {
						const isFeatured = index === AUDIENCE_KEYS.length - 1;
						return (
							<li key={key}>
								<Reveal delay={index * 0.06} className="h-full">
									<article
										className={cn(
											"flex h-full flex-col gap-6 rounded-card border pad-card",
											isFeatured
												? "border-verde bg-verde text-cal"
												: "border-linha bg-papel",
										)}
									>
										<p
											className={cn(
												"font-mono text-xs uppercase tracking-label",
												isFeatured ? "text-lima" : "text-cinza",
											)}
										>
											{t(`items.${key}.label`)}
										</p>
										<h3 className="font-display text-2xl font-semibold">
											{t(`items.${key}.title`)}
										</h3>
										<p
											className={cn(
												"text-base leading-relaxed",
												isFeatured ? "text-verde-soft" : "text-texto",
											)}
										>
											{t(`items.${key}.body`)}
										</p>
									</article>
								</Reveal>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
