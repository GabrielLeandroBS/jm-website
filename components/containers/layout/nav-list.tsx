"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { cn } from "@/lib/utils";
import type { NavListProps } from "@/models/interfaces/navigation";

export function NavList({ links, onNavigate }: NavListProps) {
	const t = useTranslations("common.nav");
	const pathname = usePathname();
	const scrollToTop = useScrollToTop();

	return (
		<>
			{links.map((link) => {
				const isActive = pathname.startsWith(link.href);
				return (
					<Link
						key={link.href}
						href={link.href}
						onClick={() => {
							if (link.href === pathname) scrollToTop();
							onNavigate?.();
						}}
						aria-current={isActive ? "page" : undefined}
						className={cn(
							"flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-verde",
							isActive ? "bg-tinta text-cal" : "text-texto hover:text-tinta",
						)}
					>
						{isActive && (
							<span
								aria-hidden="true"
								className="size-1.5 rounded-full bg-lima"
							/>
						)}
						{t(link.labelKey)}
					</Link>
				);
			})}
		</>
	);
}
