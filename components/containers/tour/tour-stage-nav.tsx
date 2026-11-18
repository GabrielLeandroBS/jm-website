"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { TOUR_STAGES } from "@/models/constants/tour";
import type { TourStageNavProps } from "@/models/interfaces/tour";

export function TourStageNav({ stageIndex, onSelect }: TourStageNavProps) {
	const t = useTranslations("tour.stages");

	return (
		<nav aria-label={t("label")} className="flex justify-center">
			<ol className="flex flex-wrap gap-1 rounded-full border border-linha bg-papel p-1.5">
				{TOUR_STAGES.map((stage, index) => (
					<li key={stage}>
						<button
							type="button"
							onClick={() => onSelect(index)}
							aria-current={index === stageIndex ? "step" : undefined}
							className={cn(
								"min-h-10 rounded-full px-4 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-verde",
								index === stageIndex && "bg-tinta text-cal",
								index < stageIndex && "text-tinta",
								index > stageIndex && "text-cinza",
							)}
						>
							{t(stage)}
						</button>
					</li>
				))}
			</ol>
		</nav>
	);
}
