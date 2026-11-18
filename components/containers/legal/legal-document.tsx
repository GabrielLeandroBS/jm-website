import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { BrandText } from "@/components/containers/common/brand-text";
import { Reveal } from "@/components/containers/common/reveal";
import { SITE_CONFIG } from "@/config/site";
import {
	LEGAL_SECTIONS,
	LEGAL_UPDATED_AT,
} from "@/models/constants/content-keys";
import type { LegalDocumentProps } from "@/models/interfaces/common";

export async function LegalDocument({ document }: LegalDocumentProps) {
	const t = await getTranslations("legal");
	const sections = LEGAL_SECTIONS[document];

	return (
		<section className="bg-cal pt-44 pb-section">
			<div className="container-site grid gap-stack lg:grid-cols-3">
				<div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
					<h1 className="font-display font-semibold text-headline">
						{t(`${document}.title`)}
					</h1>
					<p className="font-mono text-cinza text-xs uppercase tracking-label">
						{t("updated", { date: LEGAL_UPDATED_AT })}
					</p>
					<p className="rounded-2xl border border-linha bg-papel p-4 text-cinza text-sm">
						{t("draftNotice")}
					</p>
				</div>
				<div className="flex flex-col gap-10 lg:col-span-2">
					{sections.map((section) => (
						<Reveal key={section}>
							<section className="flex flex-col gap-3 border-linha border-t pt-6">
								<h2 className="font-display font-semibold text-2xl">
									{t(`${document}.sections.${section}.title` as never)}
								</h2>
								<p className="text-lg text-texto leading-relaxed">
									<BrandText
										text={t(`${document}.sections.${section}.body` as never)}
									/>
								</p>
								{document === "terms" && section === "complaints" && (
									<Link
										href={SITE_CONFIG.complaintsBookUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="text-verde underline"
									>
										livroreclamacoes.pt
									</Link>
								)}
							</section>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
