import { useTranslations } from "next-intl";
import { TourStageHeader } from "@/components/containers/tour/tour-stage-header";
import { MethodStepCard } from "@/components/containers/method/method-step-card";
import { METHOD_STEPS } from "@/models/constants/content-keys";

export function TourMethod() {
	const t = useTranslations("method");

	return (
		<div className="flex flex-col gap-12">
			<TourStageHeader stage="method" />
			<ol className="grid gap-4 md:grid-cols-2">
				{METHOD_STEPS.map((step, index) => (
					<li key={step}>
						<MethodStepCard
							number={`0${index + 1}`}
							title={t(`steps.${step}.title`)}
							body={t(`steps.${step}.body`)}
							receivesLabel={t("labels.receives")}
							receives={t(`steps.${step}.receives`)}
							highlighted={index === METHOD_STEPS.length - 1}
						/>
					</li>
				))}
			</ol>
		</div>
	);
}
