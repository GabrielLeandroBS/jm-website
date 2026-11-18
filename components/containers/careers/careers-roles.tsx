import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { CAREER_ROLE_KEYS } from "@/models/constants/content-keys";

export async function CareersRoles() {
	const t = await getTranslations("careers.roles");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
					{CAREER_ROLE_KEYS.map((key, index) => (
						<li key={key}>
							<Reveal delay={index * 0.06} className="h-full">
								<article className="flex h-full flex-col gap-4 rounded-card border border-linha bg-papel p-7">
									<p className="font-mono text-sm text-cinza">0{index + 1}</p>
									<h3 className="font-display text-2xl font-semibold">
										{t(`items.${key}.title`)}
									</h3>
									<p className="text-base leading-relaxed text-texto">
										{t(`items.${key}.body`)}
									</p>
								</article>
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
