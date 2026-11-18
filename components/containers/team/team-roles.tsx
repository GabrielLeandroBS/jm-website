import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { TEAM_ROLE_KEYS } from "@/models/constants/content-keys";

export async function TeamRoles() {
	const t = await getTranslations("team.roles");

	return (
		<section className="bg-verde py-section text-cal">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					tone="dark"
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{TEAM_ROLE_KEYS.map((key, index) => (
						<li key={key}>
							<Reveal delay={index * 0.08} className="h-full">
								<article className="flex h-full flex-col gap-6 rounded-card bg-tinta pad-card">
									<div className="flex aspect-square items-end rounded-2xl bg-tinta-line p-4 font-mono text-tinta-soft text-xs uppercase tracking-label">
										{t("photoPlaceholder")}
									</div>
									<div className="flex flex-col gap-2">
										<p className="font-display font-semibold text-2xl">
											{t(`${key}.name`)}
										</p>
										<p className="font-mono text-lima text-xs uppercase tracking-label">
											{t(`${key}.role`)}
										</p>
										<p className="text-base text-tinta-soft">
											{t(`${key}.body`)}
										</p>
									</div>
								</article>
							</Reveal>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
