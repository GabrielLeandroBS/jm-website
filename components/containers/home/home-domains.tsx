import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { AreaGrid } from "@/components/containers/services/area-grid";

export async function HomeDomains() {
	const t = await getTranslations("home.domains");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
					<div className="flex flex-col gap-6">
						<Reveal>
							<Eyebrow>{t("eyebrow")}</Eyebrow>
						</Reveal>
						<Reveal delay={0.08}>
							<TwoToneHeading title={t("title")} nuance={t("nuance")} />
						</Reveal>
					</div>
					<Reveal delay={0.16} className="max-w-md">
						<p className="text-lead text-texto">{t("intro")}</p>
					</Reveal>
				</div>
				<AreaGrid />
			</div>
		</section>
	);
}
