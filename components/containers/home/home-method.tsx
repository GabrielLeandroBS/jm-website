import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { MethodStepCard } from "@/components/containers/method/method-step-card";
import { METHOD_STEPS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export async function HomeMethod() {
	const t = await getTranslations("home.method");
	const tMethod = await getTranslations("method");
	const tCommon = await getTranslations("common.cta");

	return (
		<section className="bg-tinta py-section text-cal">
			<div className="container-site grid gap-stack lg:grid-cols-5">
				<div className="flex flex-col gap-8 self-start lg:sticky lg:top-32 lg:col-span-2">
					<Reveal>
						<Eyebrow tone="dark">{t("eyebrow")}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading
							title={t("title")}
							nuance={t("nuance")}
							tone="dark"
						/>
					</Reveal>
					<Reveal delay={0.16}>
						<p className="max-w-md text-lead text-tinta-soft">{t("intro")}</p>
					</Reveal>
					<Reveal delay={0.24}>
						<Link
							href={ROUTES.method}
							className="group inline-flex min-h-11 items-center gap-2 text-base text-lima focus-visible:outline-2 focus-visible:outline-lima"
						>
							{tCommon("learnMethod")}
							<ArrowRight
								aria-hidden="true"
								className="size-4 transition-transform duration-500 ease-calm group-hover:translate-x-1"
							/>
						</Link>
					</Reveal>
				</div>
				<ol className="flex flex-col gap-4 lg:col-span-3">
					{METHOD_STEPS.map((step, index) => (
						<li key={step}>
							<Reveal>
								<MethodStepCard
									number={`0${index + 1}`}
									title={tMethod(`steps.${step}.title`)}
									body={tMethod(`steps.${step}.body`)}
									receivesLabel={tMethod("labels.receives")}
									receives={tMethod(`steps.${step}.receives`)}
									tone="dark"
									highlighted={index === METHOD_STEPS.length - 1}
								/>
							</Reveal>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
}
