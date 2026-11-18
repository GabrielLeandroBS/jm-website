import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/containers/common/page-hero";
import { ButtonLink } from "@/components/shared/button-link";
import { ROUTES } from "@/models/constants/routes";

export default async function NotFound() {
	const t = await getTranslations("common");

	return (
		<PageHero
			tone="dark"
			eyebrow={t("notFound.eyebrow")}
			title={t("notFound.title")}
			nuance={t("notFound.nuance")}
			lead={t("notFound.body")}
		>
			<ButtonLink href={ROUTES.home} size="lg">
				{t("cta.backHome")}
			</ButtonLink>
		</PageHero>
	);
}
