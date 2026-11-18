"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export function ScrollToTopOnNavigate() {
	const pathname = usePathname();
	const scrollToTop = useScrollToTop();

	useEffect(() => {
		if (!pathname || window.location.hash) return;
		scrollToTop(true);
	}, [pathname, scrollToTop]);

	return null;
}
