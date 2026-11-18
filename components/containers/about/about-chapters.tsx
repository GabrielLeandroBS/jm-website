import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { cn } from "@/lib/utils";
import { CHAPTER_KEYS } from "@/models/constants/content-keys";

export async function AboutChapters() {
	const t = await getTranslations("about.chapters");

	return (
		<section className="bg-cal py-section">
			<div className="container-site flex flex-col gap-stack">
				<Reveal>
					<Eyebrow>{t("eyebrow")}</Eyebrow>
				</Reveal>
				<ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
					{CHAPTER_KEYS.map((key, index) => {
						const isLast = index === CHAPTER_KEYS.length - 1;
						return (
							<li key={key}>
								<Reveal delay={index * 0.08} className="h-full">
									<article
										className={cn(
											"flex h-full flex-col gap-4 rounded-card p-7",
											isLast
												? "bg-verde text-cal"
												: "border border-linha bg-papel",
										)}
									>
										<p
											className={cn(
												"font-mono text-sm",
												isLast ? "text-lima" : "text-cinza",
											)}
										>
											{t(`${key}.label`)}
										</p>
										<h3 className="font-display text-3xl font-bold tracking-display">
											{t(`${key}.title`)}
										</h3>
										<p className={isLast ? "text-verde-soft" : "text-texto"}>
											{t(`${key}.body`)}
										</p>
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
