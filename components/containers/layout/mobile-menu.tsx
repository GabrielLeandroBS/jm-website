"use client";

import { Close } from "@carbon/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { Logo } from "@/components/containers/common/logo";
import { ButtonLink } from "@/components/shared/button-link";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import {
	FOOTER_COMPANY_NAV,
	FOOTER_SUPPORT_NAV,
	PRIMARY_NAV,
} from "@/models/constants/navigation";
import { ROUTES } from "@/models/constants/routes";
import type { MobileMenuProps } from "@/models/interfaces/layout";

const MENU_LINKS = [
	...PRIMARY_NAV,
	...FOOTER_SUPPORT_NAV.filter((link) => link.href !== ROUTES.contact),
	FOOTER_COMPANY_NAV[3],
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
	const t = useTranslations("common");
	const pathname = usePathname();
	const scrollToTop = useScrollToTop();

	const handleNavigate = (href: string) => {
		if (href === pathname) scrollToTop();
		onClose();
	};

	useEffect(() => {
		if (!isOpen) return;
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") onClose();
		};
		document.addEventListener("keydown", closeOnEscape);
		return () => document.removeEventListener("keydown", closeOnEscape);
	}, [isOpen, onClose]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					role="dialog"
					aria-modal="true"
					aria-label={t("nav.mainLabel")}
					data-lenis-prevent
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.4 }}
					className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-verde text-cal"
				>
					<div className="container-site flex items-center justify-between pt-6">
						<Logo className="text-3xl" />
						<button
							type="button"
							onClick={onClose}
							aria-label={t("nav.closeMenu")}
							className="flex size-12 items-center justify-center rounded-full border border-verde-line focus-visible:outline-2 focus-visible:outline-lima"
						>
							<Close aria-hidden="true" className="size-6" />
						</button>
					</div>
					<nav className="container-site flex flex-1 flex-col justify-center gap-2 py-12">
						{MENU_LINKS.map((link, index) => (
							<motion.div
								key={link.href}
								initial={{ opacity: 0, y: 24 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.08 + index * 0.05,
									duration: 0.7,
									ease: [0.22, 1, 0.36, 1],
								}}
							>
								<Link
									href={link.href}
									onClick={() => handleNavigate(link.href)}
									className="font-display text-headline font-bold tracking-display focus-visible:outline-2 focus-visible:outline-lima"
								>
									{t(`nav.${link.labelKey}`)}
								</Link>
							</motion.div>
						))}
					</nav>
					<div className="container-site pb-10">
						<ButtonLink
							href={ROUTES.contact}
							onClick={() => handleNavigate(ROUTES.contact)}
							size="lg"
						>
							{t("cta.book")}
						</ButtonLink>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
