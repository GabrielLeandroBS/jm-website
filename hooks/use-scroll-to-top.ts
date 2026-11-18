"use client";

import { useLenis } from "lenis/react";
import { useCallback } from "react";

export function useScrollToTop() {
	const lenis = useLenis();

	return useCallback(
		(immediate = false) => {
			if (lenis) {
				lenis.scrollTo(0, { immediate, force: true });
				return;
			}
			window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
		},
		[lenis],
	);
}
