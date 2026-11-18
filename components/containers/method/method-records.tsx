import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { SectionIntro } from "@/components/containers/common/section-intro";
import { cn } from "@/lib/utils";
import { METHOD_RECORD_KEYS } from "@/models/constants/content-keys";

export async function MethodRecords() {
	const t = await getTranslations("method.records");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<SectionIntro
					eyebrow={t("eyebrow")}
					title={t("title")}
					nuance={t("nuance")}
					body={t("intro")}
				/>
				<ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
					{METHOD_RECORD_KEYS.map((key, index) => {
						const isLast = index === METHOD_RECORD_KEYS.length - 1;
						return (
							<li key={key}>
								<Reveal delay={index * 0.06} className="h-full">
									<article
										className={cn(
											"flex h-full flex-col gap-10 rounded-card border p-7",
											isLast
												? "border-verde bg-verde text-cal"
												: "border-linha bg-papel bg-grid",
										)}
									>
										<p
											className={cn(
												"font-mono text-xs uppercase tracking-label",
												isLast ? "text-lima" : "text-cinza",
											)}
										>
											0{index + 1}
										</p>
										<div className="mt-auto flex flex-col gap-3">
											<h3 className="font-display text-2xl font-semibold">
												{t(`items.${key}.title`)}
											</h3>
											<p
												className={cn(
													"text-base leading-relaxed",
													isLast ? "text-verde-soft" : "text-texto",
												)}
											>
												{t(`items.${key}.body`)}
											</p>
										</div>
									</article>
								</Reveal>
							</li>
						);
					})}
				</ol>
			</div>
		</section>
	);
}
