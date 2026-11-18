import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { OgCard } from "@/components/containers/seo/og-card";
import { isAreaSlug } from "@/lib/utils/area";
import { loadOgFonts } from "@/lib/utils/og-fonts";
import { OG_SIZE } from "@/models/constants/og";
import type { AreaPageProps } from "@/models/interfaces/services";

export const size = OG_SIZE;
export const contentType = "image/png";

export default async function AreaOpengraphImage({ params }: AreaPageProps) {
	const { area } = await params;
	if (!isAreaSlug(area)) notFound();

	const [t, tOg, fonts] = await Promise.all([
		getTranslations("services.areas"),
		getTranslations("common.og"),
		loadOgFonts(),
	]);

	return new ImageResponse(
		<OgCard
			titleSize={60}
			domain={t(`${area}.name`)}
			eyebrow={tOg("eyebrow")}
			title={t(`${area}.title`)}
			nuance={t(`${area}.highlight`)}
			footer={tOg("footer")}
		/>,
		{ ...OG_SIZE, fonts },
	);
}
