// Literal brand colours for next/og: Satori renders outside the CSS
// pipeline, so tokens from app/globals.css are not available there.
export const OG_COLORS = {
	verde: "#0f2e24",
	tinta: "#111413",
	cal: "#f5f4ef",
	pedra: "#d9d6cc",
	lima: "#d4f06a",
	linha: "#2a463c",
} as const;

export const OG_IMAGE = {
	url: "/og.jpg",
	width: 1200,
	height: 630,
	type: "image/jpeg",
} as const;
