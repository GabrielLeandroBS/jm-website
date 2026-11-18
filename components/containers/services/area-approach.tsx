import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { Timeline } from "@/components/containers/common/timeline";
import {
	AREA_DELIVERABLE_KEYS,
	METHOD_STEPS,
} from "@/models/constants/content-keys";
import type { AreaSectionProps } from "@/models/interfaces/services";

export async function AreaApproach({ slug }: AreaSectionProps) {
	const [t, tMethod] = await Promise.all([
		getTranslations("services"),
		getTranslations("method.steps"),
	]);

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-16 lg:grid-cols-3">
				<div className="flex flex-col gap-8 lg:col-span-2">
					<Reveal>
						<Eyebrow>{t("labels.approach")}</Eyebrow>
					</Reveal>
					<Timeline
						items={METHOD_STEPS.map((step, index) => ({
							key: step,
							marker: t("labels.step", { number: index + 1 }),
							title: tMethod(`${step}.title`),
							body: t(`areas.${slug}.approach.${step}`),
						}))}
					/>
				</div>
				<Reveal
					delay={0.12}
					className="flex flex-col gap-6 self-start rounded-card border border-linha bg-papel p-7 lg:sticky lg:top-32"
				>
					<Eyebrow>{t("labels.deliverables")}</Eyebrow>
					<CheckList
						items={AREA_DELIVERABLE_KEYS.map((key) =>
							t(`areas.${slug}.deliverables.${key}`),
						)}
					/>
				</Reveal>
			</div>
		</section>
	);
}
