import { getTranslations } from "next-intl/server";

export async function getOgAlt() {
	const t = await getTranslations("common.meta");
	return t("ogAlt");
}
