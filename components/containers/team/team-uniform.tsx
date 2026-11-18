import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { UNIFORM_KEYS } from "@/models/constants/content-keys";

export async function TeamUniform() {
	const t = await getTranslations("team.uniform");

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-12 lg:grid-cols-2">
				<div className="flex flex-col gap-8">
					<SectionIntro
						eyebrow={t("eyebrow")}
						title={t("title")}
						nuance={t("nuance")}
					/>
					<Reveal delay={0.16}>
						<p className="max-w-xl text-lead text-texto">{t("body")}</p>
					</Reveal>
				</div>
				<Reveal delay={0.12} className="self-end">
					<CheckList items={UNIFORM_KEYS.map((key) => t(`items.${key}`))} />
				</Reveal>
			</div>
		</section>
	);
}
