import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { MethodStepCard } from "@/components/containers/method/method-step-card";
import { METHOD_STEPS } from "@/models/constants/content-keys";

export async function MethodSteps() {
	const t = await getTranslations("method");

	return (
		<section className="bg-cal pb-section">
			<ol className="container-site grid gap-4 md:grid-cols-2">
				{METHOD_STEPS.map((step, index) => (
					<li key={step}>
						<Reveal delay={(index % 2) * 0.1} className="h-full">
							<MethodStepCard
								number={`0${index + 1}`}
								title={t(`steps.${step}.title`)}
								body={t(`steps.${step}.body`)}
								receivesLabel={t("labels.receives")}
								receives={t(`steps.${step}.receives`)}
								highlighted={index === METHOD_STEPS.length - 1}
							/>
						</Reveal>
					</li>
				))}
			</ol>
		</section>
	);
}
