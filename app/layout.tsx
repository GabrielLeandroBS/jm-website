import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { SiteFooter } from "@/components/containers/layout/site-footer";
import { SiteHeader } from "@/components/containers/layout/site-header";
import { SmoothScroll } from "@/components/containers/layout/smooth-scroll";
import { StructuredData } from "@/components/containers/layout/structured-data";
import { SITE_CONFIG } from "@/config/site";
import { fontDisplay, fontMono, fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { OG_IMAGE } from "@/models/constants/og";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("common.meta");

	return {
		metadataBase: new URL(SITE_CONFIG.url),
		title: { default: t("title"), template: t("titleTemplate") },
		description: t("description"),
		applicationName: SITE_CONFIG.name,
		authors: [{ name: SITE_CONFIG.legalName, url: SITE_CONFIG.url }],
		creator: SITE_CONFIG.legalName,
		publisher: SITE_CONFIG.legalName,
		category: "business",
		formatDetection: { telephone: true, email: true, address: false },
		robots: { index: true, follow: true },
		openGraph: {
			type: "website",
			locale: "pt_PT",
			siteName: SITE_CONFIG.name,
			title: t("title"),
			description: t("description"),
			url: "/",
			images: [{ ...OG_IMAGE, alt: t("ogAlt") }],
		},
		twitter: {
			card: "summary_large_image",
			title: t("title"),
			description: t("description"),
			images: [{ ...OG_IMAGE, alt: t("ogAlt") }],
		},
		alternates: { canonical: "/", languages: { "pt-PT": "/" } },
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
			other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
				? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
				: undefined,
		},
	};
}

export const viewport: Viewport = {
	themeColor: SITE_CONFIG.themeColor,
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
	const t = await getTranslations("common.nav");

	return (
		<html
			lang="pt-PT"
			className={cn(
				fontSans.variable,
				fontMono.variable,
				fontDisplay.variable,
				"antialiased",
			)}
		>
			<body className="flex min-h-svh flex-col bg-background font-sans text-foreground">
				<NextIntlClientProvider>
					<a
						href="#conteudo"
						className="sr-only z-50 rounded-full bg-lima px-5 py-3 text-tinta focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
					>
						{t("skip")}
					</a>
					<SmoothScroll>
						<SiteHeader />
						<main id="conteudo" className="flex-1">
							{children}
						</main>
						<SiteFooter />
					</SmoothScroll>
				</NextIntlClientProvider>
				<StructuredData />
			</body>
		</html>
	);
}
