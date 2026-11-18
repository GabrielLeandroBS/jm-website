"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/shared/button";
import type { TourFooterNavProps } from "@/models/interfaces/tour";

export function TourFooterNav({
	isFirst,
	isLast,
	isBeforeLast,
	onPrevious,
	onNext,
}: TourFooterNavProps) {
	const t = useTranslations("tour.nav");

	if (isFirst) {
		return null;
	}

	return (
		<div className="flex items-center justify-between gap-4 border-linha border-t pt-6">
			<Button variant="outline" onClick={onPrevious}>
				{t("previous")}
			</Button>
			{!isLast && (
				<Button onClick={onNext}>
					{isBeforeLast ? t("toProposal") : t("next")}
				</Button>
			)}
		</div>
	);
}
