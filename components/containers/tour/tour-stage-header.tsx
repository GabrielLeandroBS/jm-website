"use client";

import { useTranslations } from "next-intl";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import type { TourStageHeaderProps } from "@/models/interfaces/tour";

export function TourStageHeader({ stage }: TourStageHeaderProps) {
	const t = useTranslations("tour");

	return (
		<div className="flex flex-col gap-5">
			<Eyebrow>{t(`${stage}.eyebrow`)}</Eyebrow>
			<TwoToneHeading
				as="h1"
				title={t(`${stage}.title`)}
				nuance={t(`${stage}.nuance`)}
			/>
		</div>
	);
}
