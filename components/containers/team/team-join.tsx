import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { ROUTES } from "@/models/constants/routes";

export async function TeamJoin() {
	const t = await getTranslations("team.join");

	return (
		<section className="bg-cal py-section">
			<div className="container-site">
				<div className="flex flex-col justify-between gap-stack rounded-panel border border-linha bg-papel pad-band md:flex-row md:items-end">
					<Reveal className="flex flex-col gap-4">
						<TwoToneHeading
							title={t("title")}
							nuance={t("body")}
							size="title"
						/>
					</Reveal>
					<Reveal delay={0.12}>
						<ButtonLink href={ROUTES.careers} variant="green" size="lg">
							{t("cta")}
						</ButtonLink>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
