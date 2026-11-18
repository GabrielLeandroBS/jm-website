import { useTranslations } from "next-intl";
import { BeforeAfter } from "@/components/containers/common/before-after";
import { CheckList } from "@/components/containers/common/check-list";
import { TourStageHeader } from "@/components/containers/tour/tour-stage-header";
import { PROOF_DELIVERABLE_KEYS } from "@/models/constants/content-keys";

export function TourProof() {
	const t = useTranslations("home.proof");

	return (
		<div className="flex flex-col gap-12">
			<TourStageHeader stage="proof" />
			<div className="grid gap-10 lg:grid-cols-3">
				<div className="lg:col-span-2">
					<BeforeAfter
						beforeLabel={t("before")}
						afterLabel={t("after")}
						beforePlaceholder={t("beforePlaceholder")}
						afterPlaceholder={t("afterPlaceholder")}
						sliderLabel={t("sliderLabel")}
					/>
				</div>
				<div className="flex flex-col gap-6">
					<p className="font-display font-semibold text-title">
						{t("deliverablesTitle")}
					</p>
					<CheckList
						items={PROOF_DELIVERABLE_KEYS.map((key) =>
							t(`deliverables.${key}`),
						)}
					/>
				</div>
			</div>
		</div>
	);
}
