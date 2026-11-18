import { getTranslations } from "next-intl/server";
import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { SITE_CONFIG } from "@/config/site";
import { buildPhoneHref, buildWhatsappHref } from "@/lib/utils/contact-links";

const LINK_CLASS =
	"font-display text-2xl font-semibold transition-colors duration-300 hover:text-verde focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde";

export async function ContactChannels() {
	const t = await getTranslations("common");
	const tContact = await getTranslations("contact.channels");

	return (
		<div className="flex flex-col gap-10">
			<Reveal>
				<Eyebrow>{tContact("eyebrow")}</Eyebrow>
			</Reveal>
			<Reveal delay={0.08}>
				<dl className="flex flex-col gap-8">
					<div className="flex flex-col gap-2 border-linha border-t pt-6">
						<dt className="font-mono text-cinza text-xs uppercase tracking-label">
							{t("contactInfo.phone")}
						</dt>
						<dd>
							<a href={buildPhoneHref()} className={LINK_CLASS}>
								{SITE_CONFIG.phoneDisplay}
							</a>
						</dd>
					</div>
					<div className="flex flex-col gap-2 border-linha border-t pt-6">
						<dt className="font-mono text-cinza text-xs uppercase tracking-label">
							{t("contactInfo.whatsapp")}
						</dt>
						<dd>
							<a
								href={buildWhatsappHref(t("whatsapp.default"))}
								target="_blank"
								rel="noopener noreferrer"
								className={LINK_CLASS}
							>
								{SITE_CONFIG.phoneDisplay}
							</a>
						</dd>
					</div>
					<div className="flex flex-col gap-2 border-linha border-t pt-6">
						<dt className="font-mono text-cinza text-xs uppercase tracking-label">
							{t("contactInfo.email")}
						</dt>
						<dd>
							<a href={`mailto:${SITE_CONFIG.email}`} className={LINK_CLASS}>
								{SITE_CONFIG.email}
							</a>
						</dd>
					</div>
					<div className="flex flex-col gap-2 border-linha border-t pt-6">
						<dt className="font-mono text-cinza text-xs uppercase tracking-label">
							{t("contactInfo.area")}
						</dt>
						<dd className="text-lg">{t("contactInfo.areaValue")}</dd>
					</div>
					<div className="flex flex-col gap-2 border-linha border-t pt-6">
						<dt className="font-mono text-cinza text-xs uppercase tracking-label">
							{t("contactInfo.hours")}
						</dt>
						<dd className="text-lg">{t("contactInfo.hoursValue")}</dd>
					</div>
				</dl>
			</Reveal>
		</div>
	);
}
