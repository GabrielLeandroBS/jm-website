import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { METHOD_CHECKLIST_KEYS } from "@/models/constants/content-keys";

export async function MethodChecklist() {
	const t = await getTranslations("method.checklist");

	return (
		<section className="bg-verde py-section text-cal">
			<div className="container-site grid gap-12 lg:grid-cols-2">
				<SectionIntro
					tone="dark"
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
				/>
				<Reveal delay={0.12}>
					<CheckList
						tone="dark"
						items={METHOD_CHECKLIST_KEYS.map((key) => t(`items.${key}`))}
					/>
				</Reveal>
			</div>
		</section>
	);
}
