"use client";

import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { Button } from "@/components/shared/button";
import type { TourStartProps } from "@/models/interfaces/tour";

export function TourWelcome({ onStart }: TourStartProps) {
	const t = useTranslations("tour.welcome");
	const tFacts = useTranslations("home.facts");

	return (
		<div className="grid gap-4 lg:grid-cols-3">
			<div className="flex min-h-[60svh] flex-col justify-between gap-12 rounded-panel bg-verde pad-panel text-cal lg:col-span-2">
				<Eyebrow tone="dark">{t("eyebrow")}</Eyebrow>
				<div className="flex flex-col gap-6">
					<TwoToneHeading
						as="h1"
						size="display"
						title={t("title")}
						nuance={t("nuance")}
						tone="dark"
					/>
					<p className="max-w-xl text-lead text-verde-soft">{t("body")}</p>
				</div>
				<div className="flex flex-wrap items-center gap-5">
					<Button size="lg" onClick={onStart}>
						{t("start")}
					</Button>
					<p className="text-base text-verde-label">{t("coffee")}</p>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-1 flex-col justify-between gap-6 rounded-card border border-linha bg-papel pad-card">
					<p className="font-display text-display font-bold tracking-display">
						{tFacts("since.value")}
					</p>
					<p className="text-texto">{tFacts("since.label")}</p>
				</div>
				<div className="flex flex-1 flex-col justify-between gap-6 rounded-card bg-tinta pad-card text-cal">
					<p className="font-display text-display font-bold tracking-display">
						{tFacts("campaigns.value")}
					</p>
					<p className="text-tinta-soft">{tFacts("campaigns.label")}</p>
				</div>
			</div>
		</div>
	);
}
