import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Tour } from "@/components/containers/tour/tour";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("tour.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.tour },
	};
}

export default function TourPage() {
	return <Tour />;
}
