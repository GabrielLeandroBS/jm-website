import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { OgCard } from "@/components/containers/seo/og-card";
import { loadOgFonts } from "@/lib/utils/og-fonts";
import { OG_SIZE } from "@/models/constants/og";

export const size = OG_SIZE;
export const contentType = "image/png";

export async function generateImageMetadata() {
	const t = await getTranslations("common.og");
	return [{ id: "default", alt: t("alt"), size: OG_SIZE, contentType }];
}

export default async function OpengraphImage() {
	const [t, tBrand, fonts] = await Promise.all([
		getTranslations("common.og"),
		getTranslations("common.brand"),
		loadOgFonts(),
	]);

	return new ImageResponse(
		<OgCard
			eyebrow={t("eyebrow")}
			title={tBrand("signature")}
			nuance={tBrand("signatureNuance")}
			footer={t("footer")}
		/>,
		{ ...OG_SIZE, fonts },
	);
}
