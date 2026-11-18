"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { NavListProps } from "@/models/interfaces/navigation";

export function NavList({ links, onNavigate }: NavListProps) {
	const t = useTranslations("common.nav");
	const pathname = usePathname();

	return (
		<>
			{links.map((link) => {
				const isActive = pathname.startsWith(link.href);
				return (
					<Link
						key={link.href}
						href={link.href}
						onClick={onNavigate}
						aria-current={isActive ? "page" : undefined}
						className={cn(
							"rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-verde",
							isActive ? "bg-tinta text-cal" : "text-texto hover:text-tinta",
						)}
					>
						{t(link.labelKey)}
					</Link>
				);
			})}
		</>
	);
}
