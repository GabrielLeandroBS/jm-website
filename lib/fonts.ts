import localFont from "next/font/local";

export { GeistMono as fontMono } from "geist/font/mono";
export { GeistSans as fontSans } from "geist/font/sans";

export const fontDisplay = localFont({
	src: "../node_modules/@fontsource-variable/funnel-display/files/funnel-display-latin-wght-normal.woff2",
	variable: "--font-funnel",
	weight: "300 800",
	display: "swap",
});
