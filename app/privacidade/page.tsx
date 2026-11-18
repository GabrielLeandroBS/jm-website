import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalDocument } from "@/components/containers/legal/legal-document";
import { getOgAlt } from "@/lib/utils/og-alt";
import { buildPageMetadata } from "@/lib/utils/page-metadata";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("legal.privacy.meta");
	return buildPageMetadata({
		title: t("title"),
		description: t("description"),
		path: ROUTES.privacy,
		imageAlt: await getOgAlt(),
	});
}

export default function PrivacyPage() {
	return <LegalDocument document="privacy" />;
}
