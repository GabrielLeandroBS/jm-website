"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { PageHero } from "@/components/containers/common/page-hero";
import { Button } from "@/components/shared/button";
import { logger } from "@/lib/logger";

export default function ErrorPage({
	error,
	unstable_retry,
}: {
	error: Error & { digest?: string };
	unstable_retry: () => void;
}) {
	const t = useTranslations("common.error");

	useEffect(() => {
		logger.error("route error", {
			message: error.message,
			digest: error.digest,
		});
	}, [error]);

	return (
		<PageHero
			tone="dark"
			eyebrow={t("eyebrow")}
			title={t("title")}
			nuance={t("nuance")}
		>
			<Button size="lg" onClick={unstable_retry}>
				{t("retry")}
			</Button>
		</PageHero>
	);
}
