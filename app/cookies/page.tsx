import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalDocument } from "@/components/containers/legal/legal-document";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("legal.cookies.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.cookies,
	});
}

export default function CookiesPage() {
	return <LegalDocument document="cookies" />;
}
