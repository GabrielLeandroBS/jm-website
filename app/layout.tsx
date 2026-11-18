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
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
	const t = await getTranslations("common.meta");

	return {
		metadataBase: new URL(SITE_CONFIG.url),
		title: { default: t("title"), template: t("titleTemplate") },
		description: t("description"),
		applicationName: SITE_CONFIG.name,
		openGraph: {
			type: "website",
			locale: "pt_PT",
			siteName: SITE_CONFIG.name,
			title: t("title"),
			description: t("description"),
		},
		twitter: { card: "summary_large_image" },
		alternates: { canonical: "/" },
	};
}

export const viewport: Viewport = {
	themeColor: SITE_CONFIG.themeColor,
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
