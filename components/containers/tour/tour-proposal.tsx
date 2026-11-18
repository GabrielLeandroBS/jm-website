"use client";

import { useTranslations } from "next-intl";
import { TourStageHeader } from "@/components/containers/tour/tour-stage-header";
import { ButtonLink } from "@/components/shared/button-link";
import { buildMailtoHref, buildWhatsappHref } from "@/lib/utils/contact-links";
import { SPACE_TO_AREA } from "@/models/constants/tour";
import type { TourProposalProps } from "@/models/interfaces/tour";

export function TourProposal({ answers }: TourProposalProps) {
	const t = useTranslations("tour.proposal");
	const tSpace = useTranslations("tour.space");

	const space = answers.space ? tSpace(`spaces.${answers.space}`) : t("empty");
	const frequency = answers.frequency
		? tSpace(`frequencies.${answers.frequency}`)
		: t("empty");
	const priority = answers.priority
		? tSpace(`priorities.${answers.priority}`)
		: t("empty");
	const message = t("message", { space, frequency, priority });
	const area = answers.space ? SPACE_TO_AREA[answers.space] : null;

	return (
		<div className="flex flex-col gap-12">
			<TourStageHeader stage="proposal" />
			<div className="grid gap-4 lg:grid-cols-5">
				<div className="flex flex-col gap-6 rounded-panel bg-verde pad-panel text-cal lg:col-span-3">
					<p className="text-lead text-verde-soft">{t("body")}</p>
					<p className="font-medium text-verde-label text-base">
						{t("suggestionLabel")}
					</p>
					<p className="font-display text-title">
						{answers.space ? t(`suggestions.${answers.space}`) : t("noSpace")}
					</p>
					<div className="flex flex-wrap gap-3 pt-4">
						<ButtonLink external size="lg" href={buildWhatsappHref(message)}>
							{t("whatsapp")}
						</ButtonLink>
						<ButtonLink
							external
							size="lg"
							variant="outline"
							href={buildMailtoHref(t("emailSubject"), message)}
						>
							{t("email")}
						</ButtonLink>
					</div>
				</div>
				<dl
					className="flex flex-col gap-5 rounded-card border border-linha bg-papel pad-card lg:col-span-2"
					data-area={area ?? undefined}
				>
					<p className="font-display font-semibold text-title">
						{t("sheetTitle")}
					</p>
					{[
						[t("spaceLabel"), space],
						[t("frequencyLabel"), frequency],
						[t("priorityLabel"), priority],
					].map(([label, value]) => (
						<div
							key={label}
							className="flex items-baseline justify-between gap-4 border-linha border-t pt-4"
						>
							<dt className="text-base text-cinza">{label}</dt>
							<dd className="font-medium text-tinta">{value}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
