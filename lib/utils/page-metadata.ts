import type { Metadata } from "next";

export interface PageMetadataInput {
	title: string;
	description: string;
	path: string;
}

export function buildPageMetadata({
	title,
	description,
	path,
}: PageMetadataInput): Metadata {
	return {
		title,
		description,
		alternates: { canonical: path },
		openGraph: { title, description, url: path },
		twitter: { title, description },
	};
}
