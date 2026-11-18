"use client";

import { Menu } from "@carbon/icons-react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Logo } from "@/components/containers/common/logo";
import { MobileMenu } from "@/components/containers/layout/mobile-menu";
import { NavList } from "@/components/containers/layout/nav-list";
import { ButtonLink } from "@/components/shared/button-link";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { PRIMARY_NAV } from "@/models/constants/navigation";
import { ROUTES } from "@/models/constants/routes";

export function SiteHeader() {
	const t = useTranslations("common");
	const { scrollY } = useScroll();
	const [isHidden, setIsHidden] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();
	const scrollToTop = useScrollToTop();

	useMotionValueEvent(scrollY, "change", (current) => {
		const previous = scrollY.getPrevious() ?? 0;
		setIsHidden(current > previous && current > 240);
	});

	return (
		<>
			<motion.header
				animate={{ y: isHidden && !isMenuOpen ? "-140%" : "0%" }}
				transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
				className="fixed inset-x-0 top-4 z-40"
			>
				<div className="container-site flex items-center justify-between gap-4">
					<Link
						href={ROUTES.home}
						onClick={() => {
							if (pathname === ROUTES.home) scrollToTop();
						}}
						aria-label={t("brand.homeLabel")}
						className="rounded-full border border-linha bg-papel/90 px-5 py-3 text-2xl backdrop-blur-md focus-visible:outline-2 focus-visible:outline-verde"
					>
						<Logo dot="verde" />
					</Link>
					<nav
						aria-label={t("nav.mainLabel")}
						className="hidden items-center gap-1 rounded-full border border-linha bg-papel/90 p-1.5 backdrop-blur-md lg:flex"
					>
						<NavList links={PRIMARY_NAV} />
					</nav>
					<div className="flex items-center gap-2">
						<ButtonLink
							href={ROUTES.contact}
							variant="green"
							className="hidden sm:inline-flex"
						>
							{t("cta.book")}
						</ButtonLink>
						<button
							type="button"
							onClick={() => setIsMenuOpen(true)}
							aria-label={t("nav.openMenu")}
							aria-expanded={isMenuOpen}
							className="flex size-12 items-center justify-center rounded-full border border-linha bg-papel/90 backdrop-blur-md focus-visible:outline-2 focus-visible:outline-verde lg:hidden"
						>
							<Menu aria-hidden="true" className="size-6" />
						</button>
					</div>
				</div>
			</motion.header>
			<MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
		</>
	);
}
