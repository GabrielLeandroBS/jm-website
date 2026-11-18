import { getTranslations } from "next-intl/server";
import { AreaCard } from "@/components/containers/common/area-card";
import { Reveal } from "@/components/containers/common/reveal";
import {
	AREA_ICONS,
	AREA_SLUGS,
	FEATURED_AREA,
} from "@/models/constants/areas";
import type { AreaGridProps } from "@/models/interfaces/services";

export async function AreaGrid({ exclude }: AreaGridProps) {
	const t = await getTranslations("services.areas");
	const slugs = AREA_SLUGS.filter((slug) => slug !== exclude);

	return (
		<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
			{slugs.map((slug, index) => (
				<li key={slug}>
					<Reveal delay={index * 0.08} className="h-full">
						<AreaCard
							slug={slug}
							name={t(`${slug}.name`)}
							short={t(`${slug}.short`)}
							icon={AREA_ICONS[slug]}
							featured={slug === FEATURED_AREA}
						/>
					</Reveal>
				</li>
			))}
		</ul>
	);
}
