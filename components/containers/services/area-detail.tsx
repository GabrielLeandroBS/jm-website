import { getTranslations } from "next-intl/server";
import { CheckList } from "@/components/containers/common/check-list";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { AREA_ITEM_KEYS } from "@/models/constants/areas";
import type { AreaSectionProps } from "@/models/interfaces/services";

export async function AreaDetail({ slug }: AreaSectionProps) {
	const t = await getTranslations("services");

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-16 lg:grid-cols-5">
				<div className="flex flex-col gap-12 lg:col-span-2">
					<Reveal className="flex flex-col gap-4">
						<Eyebrow>{t("labels.forWhom")}</Eyebrow>
						<p className="text-lead text-texto">
							{t(`areas.${slug}.audience`)}
						</p>
					</Reveal>
					<Reveal delay={0.08}>
						<p className="font-display text-headline font-bold tracking-display text-balance">
							{t(`areas.${slug}.highlight`)}
						</p>
					</Reveal>
				</div>
				<Reveal delay={0.12} className="flex flex-col gap-6 lg:col-span-3">
					<Eyebrow>{t("labels.whatWeDo")}</Eyebrow>
					<CheckList
						items={AREA_ITEM_KEYS.map((key) => t(`areas.${slug}.items.${key}`))}
					/>
				</Reveal>
			</div>
		</section>
	);
}
