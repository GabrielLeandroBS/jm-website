import type { FAQ_ITEM_PATHS } from "@/models/constants/content-keys";
import type { FaqEntry } from "@/models/interfaces/common";
import type { Translations } from "@/models/types/i18n";

export type FaqItemPath = (typeof FAQ_ITEM_PATHS)[number];

export function buildFaqEntries(
	t: Translations<"faq.groups">,
	paths: readonly FaqItemPath[],
): FaqEntry[] {
	return paths.map((path) => ({
		key: path,
		question: t(`${path}.question`),
		answer: t(`${path}.answer`),
	}));
}
