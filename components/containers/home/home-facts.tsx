import { getTranslations } from "next-intl/server";
import { FactTile } from "@/components/containers/common/fact-tile";
import { Reveal } from "@/components/containers/common/reveal";
import { HOME_FACT_KEYS } from "@/models/constants/content-keys";

export async function HomeFacts() {
	const t = await getTranslations("home.facts");

	return (
		<section className="bg-cal py-section">
			<ul className="container-site grid gap-stack sm:grid-cols-2 lg:grid-cols-4">
				{HOME_FACT_KEYS.map((key, index) => (
					<li key={key}>
						<Reveal delay={index * 0.08}>
							<FactTile value={t(`${key}.value`)} label={t(`${key}.label`)} />
						</Reveal>
					</li>
				))}
			</ul>
		</section>
	);
}
