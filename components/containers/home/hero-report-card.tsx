import { Checkmark } from "@carbon/icons-react";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/containers/common/logo";
import { HERO_REPORT_ROW_KEYS } from "@/models/constants/content-keys";

export async function HeroReportCard() {
	const t = await getTranslations("home.hero.report");

	return (
		<article className="flex h-full flex-col gap-6 rounded-panel border border-linha bg-papel bg-grid pad-card">
			<header className="flex items-start justify-between gap-4">
				<div className="flex flex-col gap-1">
					<p className="font-mono text-xs uppercase tracking-label text-cinza">
						{t("label")}
					</p>
					<p className="font-mono text-xs text-cinza">{t("reference")}</p>
				</div>
				<p className="rounded-full border border-linha bg-cal px-3 py-1 font-mono text-xs text-cinza">
					{t("sample")}
				</p>
			</header>
			<div className="flex items-baseline gap-2 font-display text-2xl font-bold tracking-logo sm:text-3xl">
				<Logo dot="verde" />
				<span className="font-normal text-cinza">{t("domain")}</span>
			</div>
			<h2 className="font-display text-title font-bold tracking-display">
				{t("title")}
			</h2>
			<ul className="flex flex-col">
				{HERO_REPORT_ROW_KEYS.map((key) => (
					<li
						key={key}
						className="flex items-center gap-3 border-t border-linha py-3 text-base text-texto"
					>
						<Checkmark
							aria-hidden="true"
							className="size-4 shrink-0 text-verde"
						/>
						{t(`rows.${key}`)}
					</li>
				))}
			</ul>
			<footer className="mt-auto flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-tinta px-5 py-4 text-cal">
				<p className="flex items-center gap-3 font-mono text-xs uppercase tracking-label">
					<span aria-hidden="true" className="size-2.5 rounded-full bg-lima" />
					{t("status")}
				</p>
				<p className="text-sm text-tinta-soft">{t("next")}</p>
			</footer>
		</article>
	);
}
