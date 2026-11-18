import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Logo } from "@/components/containers/common/logo";
import { FooterColumn } from "@/components/containers/layout/footer-column";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/utils";
import { buildPhoneHref } from "@/lib/utils/contact-links";
import { getCurrentYear } from "@/lib/utils/current-year";
import { AREA_SLUGS } from "@/models/constants/areas";
import {
	FOOTER_COMPANY_NAV,
	FOOTER_SUPPORT_NAV,
} from "@/models/constants/navigation";
import { areaRoute, ROUTES } from "@/models/constants/routes";

const LINK_CLASS =
	"transition-colors duration-300 hover:text-lima focus-visible:outline-2 focus-visible:outline-lima";

export async function SiteFooter() {
	const t = await getTranslations("common");
	const [tServices, year] = await Promise.all([
		getTranslations("services"),
		getCurrentYear(),
	]);

	return (
		<footer className="bg-verde text-cal">
			<div className="container-site flex flex-col gap-stack pt-section pb-10">
				<div className="flex flex-col justify-between gap-16 lg:flex-row">
					<div className="flex max-w-sm flex-col gap-6">
						<Logo className="self-start text-6xl" />
						<p className="text-lg text-verde-soft">{t("footer.tagline")}</p>
						<div className="flex flex-col items-start font-mono text-sm text-verde-label">
							<a
								href={buildPhoneHref()}
								className={cn(LINK_CLASS, "inline-flex min-h-11 items-center")}
							>
								{SITE_CONFIG.phoneDisplay}
							</a>
							<a
								href={`mailto:${SITE_CONFIG.email}`}
								className={cn(LINK_CLASS, "inline-flex min-h-11 items-center")}
							>
								{SITE_CONFIG.email}
							</a>
						</div>
					</div>
					<nav
						aria-label={t("nav.footerLabel")}
						className="grid grid-cols-2 gap-12 md:grid-cols-3"
					>
						<FooterColumn title={t("footer.services")}>
							{AREA_SLUGS.map((slug) => (
								<li key={slug}>
									<Link href={areaRoute(slug)} className={LINK_CLASS}>
										j&amp;m. {tServices(`areas.${slug}.name`)}
									</Link>
								</li>
							))}
						</FooterColumn>
						<FooterColumn title={t("footer.company")}>
							{FOOTER_COMPANY_NAV.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className={LINK_CLASS}>
										{t(`nav.${link.labelKey}`)}
									</Link>
								</li>
							))}
						</FooterColumn>
						<FooterColumn title={t("footer.support")}>
							{FOOTER_SUPPORT_NAV.map((link) => (
								<li key={link.href}>
									<Link href={link.href} className={LINK_CLASS}>
										{t(`nav.${link.labelKey}`)}
									</Link>
								</li>
							))}
						</FooterColumn>
					</nav>
				</div>
				<div className="flex flex-col gap-6 border-t border-verde-line pt-8 text-sm text-verde-label lg:flex-row lg:items-center lg:justify-between">
					<div className="flex flex-col gap-1">
						<p>{t("footer.rights", { year })}</p>
						<p>{t("footer.legalEntity")}</p>
					</div>
					<ul className="flex flex-wrap gap-x-6 gap-y-2">
						<li>
							<Link href={ROUTES.privacy} className={LINK_CLASS}>
								{t("footer.privacy")}
							</Link>
						</li>
						<li>
							<Link href={ROUTES.cookies} className={LINK_CLASS}>
								{t("footer.cookies")}
							</Link>
						</li>
						<li>
							<Link href={ROUTES.terms} className={LINK_CLASS}>
								{t("footer.terms")}
							</Link>
						</li>
						<li>
							<a
								href={SITE_CONFIG.complaintsBookUrl}
								target="_blank"
								rel="noopener noreferrer"
								className={LINK_CLASS}
							>
								{t("footer.complaints")}
								<span className="sr-only"> {t("footer.externalLink")}</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
