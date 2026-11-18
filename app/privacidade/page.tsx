import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalDocument } from "@/components/containers/legal/legal-document";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("legal.privacy.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.privacy },
	};
}

export default function PrivacyPage() {
	return <LegalDocument document="privacy" />;
}
