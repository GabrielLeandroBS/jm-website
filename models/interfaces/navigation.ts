import type { Messages } from "next-intl";

export type NavLabelKey = keyof Messages["common"]["nav"];

export interface NavLink {
	href: string;
	labelKey: NavLabelKey;
}

export interface NavListProps {
	links: readonly NavLink[];
	onNavigate?: () => void;
}
