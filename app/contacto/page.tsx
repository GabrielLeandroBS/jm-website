import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero } from "@/components/containers/common/page-hero";
import { Reveal } from "@/components/containers/common/reveal";
import { ContactChannels } from "@/components/containers/contact/contact-channels";
import { ContactForm } from "@/components/containers/contact/contact-form";
import { ROUTES } from "@/models/constants/routes";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("contact.meta");
	return {
		title: t("title"),
		description: t("description"),
		alternates: { canonical: ROUTES.contact },
	};
}

export default async function ContactPage() {
	const t = await getTranslations("contact.hero");

	return (
		<>
			<PageHero
				eyebrow={t("eyebrow")}
				title={t("title")}
				nuance={t("nuance")}
				lead={t("lead")}
			/>
			<section className="bg-cal pb-section">
				<div className="container-site grid gap-16 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<ContactChannels />
					</div>
					<Reveal className="lg:col-span-3">
						<ContactForm />
					</Reveal>
				</div>
			</section>
		</>
	);
}
