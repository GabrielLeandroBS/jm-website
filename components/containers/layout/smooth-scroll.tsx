"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import { ScrollToTopOnNavigate } from "@/components/containers/layout/scroll-to-top-on-navigate";
import type { SmoothScrollProps } from "@/models/interfaces/layout";

export function SmoothScroll({ children }: SmoothScrollProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return (
			<>
				<ScrollToTopOnNavigate />
				{children}
			</>
		);
	}

	return (
		<ReactLenis root options={{ lerp: 0.12, wheelMultiplier: 1 }}>
			<ScrollToTopOnNavigate />
			{children}
		</ReactLenis>
	);
}
