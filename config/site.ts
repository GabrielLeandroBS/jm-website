import { resolveSiteUrl } from "@/lib/utils/site-url";

export const SITE_CONFIG = {
	name: "j&m.",
	legalName: "J&M Limpeza e Manutenção",
	url: resolveSiteUrl({
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		VERCEL_PROJECT_PRODUCTION_URL: process.env.VERCEL_PROJECT_PRODUCTION_URL,
		NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL:
			process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
		VERCEL_URL: process.env.VERCEL_URL,
	}),
	foundingYear: 2016,
	phone: "+351961650396",
	phoneDisplay: "+351 961 650 396",
	email: "jmlimpcomercial@gmail.com",
	whatsappNumber: "351961650396",
	themeColor: "#0f2e24",
	backgroundColor: "#f5f4ef",
	complaintsBookUrl: "https://www.livroreclamacoes.pt",
	disputeResolutionUrl: "https://www.consumidor.gov.pt",
	euDisputeUrl: "https://ec.europa.eu/consumers/odr",
} as const;
