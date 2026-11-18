import { getTranslations } from "next-intl/server";
import { BrandText } from "@/components/containers/common/brand-text";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { QuoteBlock } from "@/components/containers/common/quote-block";
import { Reveal } from "@/components/containers/common/reveal";

export async function TeamFounder() {
	const t = await getTranslations("team.founder");

	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-stack lg:grid-cols-5">
				<Reveal className="lg:col-span-2">
					<div className="flex aspect-4/5 items-end rounded-panel bg-pedra p-6 font-mono text-cinza text-xs uppercase tracking-label">
						{t("photoAlt")}
					</div>
				</Reveal>
				<div className="flex flex-col justify-between gap-12 lg:col-span-3">
					<div className="flex flex-col gap-6">
						<Reveal>
							<Eyebrow>{t("eyebrow")}</Eyebrow>
						</Reveal>
						<Reveal delay={0.08}>
							<p className="max-w-2xl text-lead text-texto">
								<BrandText text={t("bio")} />
							</p>
						</Reveal>
					</div>
					<QuoteBlock quote={t("quote")} name={t("name")} role={t("role")} />
				</div>
			</div>
		</section>
	);
}
