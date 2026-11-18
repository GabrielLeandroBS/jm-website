"use client";

import { useTranslations } from "next-intl";
import { TourOptionGroup } from "@/components/containers/tour/tour-option-group";
import { TourStageHeader } from "@/components/containers/tour/tour-stage-header";
import {
	TOUR_FREQUENCIES,
	TOUR_PRIORITIES,
	TOUR_SPACES,
} from "@/models/constants/tour";
import type { TourSpaceProps } from "@/models/interfaces/tour";

export function TourSpace({
	answers,
	answeredCount,
	onToggle,
}: TourSpaceProps) {
	const t = useTranslations("tour.space");

	return (
		<div className="flex flex-col gap-12">
			<TourStageHeader stage="space" />
			<div className="flex flex-col gap-10">
				<TourOptionGroup
					legend={t("spaceQuestion")}
					options={TOUR_SPACES}
					selected={answers.space}
					getLabel={(option) => t(`spaces.${option}`)}
					onToggle={(option) => onToggle("space", option)}
					layout="cards"
				/>
				<TourOptionGroup
					legend={t("frequencyQuestion")}
					options={TOUR_FREQUENCIES}
					selected={answers.frequency}
					getLabel={(option) => t(`frequencies.${option}`)}
					onToggle={(option) => onToggle("frequency", option)}
				/>
				<TourOptionGroup
					legend={t("priorityQuestion")}
					options={TOUR_PRIORITIES}
					selected={answers.priority}
					getLabel={(option) => t(`priorities.${option}`)}
					onToggle={(option) => onToggle("priority", option)}
				/>
			</div>
			<p aria-live="polite" className="text-base text-cinza">
				{t("progress", { count: answeredCount })}
			</p>
		</div>
	);
}
