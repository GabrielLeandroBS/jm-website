import type { ReactNode } from "react";

export interface SmoothScrollProps {
	children: ReactNode;
}

export interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

export interface FooterColumnProps {
	title: string;
	children: ReactNode;
}
