import { ArrowRight } from "@carbon/icons-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Marquee } from "@/components/containers/common/marquee";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { AREA_SLUGS } from "@/models/constants/areas";
import { ROUTES } from "@/models/constants/routes";

export async function HomeStory() {
	const t = await getTranslations("home.story");
	const tAreas = await getTranslations("services.areas");
	const tCommon = await getTranslations("common");

	return (
		<section className="overflow-hidden bg-cal py-section">
			<Marquee
				items={AREA_SLUGS.map((slug) => `j&m. ${tAreas(`${slug}.name`)}`)}
				className="border-y border-linha py-10 text-tinta"
			/>
			<div className="container-site grid gap-stack pt-stack lg:grid-cols-2">
				<div className="flex flex-col gap-6">
					<Reveal>
						<Eyebrow>{t("eyebrow")}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading title={t("title")} nuance={t("nuance")} />
					</Reveal>
				</div>
				<div className="flex flex-col justify-end gap-8">
					<Reveal delay={0.16}>
						<p className="text-lead text-texto">{t("body")}</p>
					</Reveal>
					<Reveal delay={0.24}>
						<Link
							href={ROUTES.about}
							className="group inline-flex min-h-11 items-center gap-2 font-medium text-verde focus-visible:outline-2 focus-visible:outline-verde"
						>
							{tCommon("nav.about")}
							<ArrowRight
								aria-hidden="true"
								className="size-4 transition-transform duration-500 ease-calm group-hover:translate-x-1"
							/>
						</Link>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
