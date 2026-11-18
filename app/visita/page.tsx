import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Tour } from "@/components/containers/tour/tour";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("tour.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.tour,
		imageAlt: await getOgAlt(),
	});
}

export default function TourPage() {
	return <Tour />;
}
