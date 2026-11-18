import { getTranslations } from "next-intl/server";
import { BeforeAfter } from "@/components/containers/common/before-after";
import { CheckList } from "@/components/containers/common/check-list";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { PROOF_DELIVERABLE_KEYS } from "@/models/constants/content-keys";

export async function HomeProof() {
	const t = await getTranslations("home.proof");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<div className="flex flex-col gap-6">
					<Reveal>
						<Eyebrow>{t("eyebrow")}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading title={t("title")} nuance={t("nuance")} />
					</Reveal>
				</div>
				<div className="grid gap-10 lg:grid-cols-3">
					<Reveal className="lg:col-span-2">
						<BeforeAfter
							beforeLabel={t("before")}
							afterLabel={t("after")}
							beforePlaceholder={t("beforePlaceholder")}
							afterPlaceholder={t("afterPlaceholder")}
							sliderLabel={t("sliderLabel")}
						/>
					</Reveal>
					<Reveal delay={0.12} className="flex flex-col gap-6">
						<p className="font-display text-title font-semibold">
							{t("deliverablesTitle")}
						</p>
						<CheckList
							items={PROOF_DELIVERABLE_KEYS.map((key) =>
								t(`deliverables.${key}`),
							)}
						/>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
