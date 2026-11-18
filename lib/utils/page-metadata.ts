import type { Metadata } from "next";
import { OG_IMAGE } from "@/models/constants/og";

export interface PageMetadataInput {
	title: string;
	description: string;
	path: string;
	imageAlt: string;
}

export function buildPageMetadata({
	title,
	description,
	path,
	imageAlt,
}: PageMetadataInput): Metadata {
	const images = [{ ...OG_IMAGE, alt: imageAlt }];

	return {
		title,
		description,
		alternates: { canonical: path, languages: { "pt-PT": path } },
		openGraph: {
			type: "website",
			locale: "pt_PT",
			siteName: "j&m.",
			title,
			description,
			url: path,
			images,
		},
		twitter: { card: "summary_large_image", title, description, images },
	};
}
