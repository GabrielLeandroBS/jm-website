import type { CarbonIconType } from "@carbon/icons-react";
import type { MotionValue } from "motion/react";
import type { ReactNode } from "react";
import type { AreaSlug } from "@/models/types/area";

export type Tone = "light" | "dark";

export type HeadingSize = "mega" | "display" | "headline" | "title";

export interface LogoProps {
	className?: string;
	dot?: "lima" | "verde";
	animated?: boolean;
}

export interface EyebrowProps {
	children: ReactNode;
	tone?: Tone;
	className?: string;
}

export interface TwoToneHeadingProps {
	title: string;
	nuance?: string;
	as?: "h1" | "h2" | "h3";
	size?: HeadingSize;
	tone?: Tone;
	className?: string;
}

export interface RevealProps {
	children: ReactNode;
	delay?: number;
	className?: string;
	y?: number;
}

export interface WordRevealProps {
	lead: string;
	nuance: string;
	className?: string;
}

export interface WordRevealWordProps {
	word: string;
	index: number;
	total: number;
	muted: boolean;
	progress: MotionValue<number>;
}

export interface PageHeroProps {
	eyebrow: string;
	title: string;
	nuance?: string;
	lead?: string;
	tone?: Tone;
	children?: ReactNode;
}

export interface CtaBandProps {
	eyebrow: string;
	title: string;
	nuance: string;
	body: string;
	whatsappMessage?: string;
}

export interface AreaCardProps {
	slug: AreaSlug;
	name: string;
	short: string;
	featured?: boolean;
	icon: CarbonIconType;
	index?: number;
}

export interface FactTileProps {
	value: string;
	label: string;
	tone?: Tone;
}

export interface NumberedItemProps {
	marker: string;
	title: string;
	body: string;
	tone?: Tone;
}

export interface BeforeAfterProps {
	beforeLabel: string;
	afterLabel: string;
	beforePlaceholder: string;
	afterPlaceholder: string;
	sliderLabel: string;
}

export interface MarqueeProps {
	items: readonly string[];
	size?: "sm" | "lg";
	className?: string;
}

export interface CheckListProps {
	items: readonly string[];
	tone?: Tone;
}

export interface QuoteBlockProps {
	quote: string;
	name: string;
	role: string;
}

export interface SectionIntroProps {
	eyebrow: string;
	title: string;
	nuance?: string;
	body?: string;
	tone?: Tone;
}

export interface LegalDocumentProps {
	document: "privacy" | "cookies" | "terms";
}

export interface ContentItem {
	key: string;
	marker?: string;
	title: string;
	body: string;
}

export interface NumberedGridProps {
	items: readonly ContentItem[];
	columns?: 2 | 3 | 4;
	tone?: Tone;
}

export interface ComparisonRow {
	key: string;
	topic: string;
	usual: string;
	ours: string;
}

export interface ComparisonTableProps {
	topicLabel: string;
	usualLabel: string;
	oursLabel: string;
	rows: readonly ComparisonRow[];
}

export interface FaqEntry {
	key: string;
	question: string;
	answer: string;
}

export interface FaqListProps {
	items: readonly FaqEntry[];
}

export interface TimelineProps {
	items: readonly ContentItem[];
	tone?: Tone;
}

export interface FaqTeaserProps {
	eyebrow: string;
	title: string;
	nuance: string;
	cta: string;
	items: readonly FaqEntry[];
}

export interface FaqGroupProps {
	title: string;
	items: readonly FaqEntry[];
}

export interface JsonLdProps {
	data: Record<string, unknown>;
}
