import { getTranslations } from "next-intl/server";
import { FaqGroup } from "@/components/containers/faq/faq-group";
import { buildFaqEntries } from "@/lib/utils/faq-entries";
import { FAQ_GROUPS, FAQ_ITEM_PATHS } from "@/models/constants/content-keys";

export async function FaqGroups() {
	const t = await getTranslations("faq.groups");

	return (
		<section className="bg-cal pb-section">
			<div className="container-site flex flex-col gap-20">
				{(Object.keys(FAQ_GROUPS) as (keyof typeof FAQ_GROUPS)[]).map(
					(group) => (
						<FaqGroup
							key={group}
							title={t(`${group}.title`)}
							items={buildFaqEntries(
								t,
								FAQ_ITEM_PATHS.filter((path) => path.startsWith(`${group}.`)),
							)}
						/>
					),
				)}
			</div>
		</section>
	);
}
