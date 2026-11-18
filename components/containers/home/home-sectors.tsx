import { getTranslations } from "next-intl/server";
import { Marquee } from "@/components/containers/common/marquee";
import { SECTOR_KEYS } from "@/models/constants/content-keys";

export async function HomeSectors() {
	const t = await getTranslations("home.sectors");

	return (
		<section
			aria-label={t("label")}
			className="overflow-hidden pt-3 pb-section"
		>
			<Marquee
				size="sm"
				tone="dark"
				items={SECTOR_KEYS.map((key) => t(`items.${key}`))}
				className="border-y border-tinta bg-tinta py-6 text-cal"
			/>
		</section>
	);
}
