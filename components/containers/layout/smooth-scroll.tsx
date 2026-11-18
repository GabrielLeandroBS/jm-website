"use client";

import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "motion/react";
import type { SmoothScrollProps } from "@/models/interfaces/layout";

export function SmoothScroll({ children }: SmoothScrollProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) return children;

	return (
		<ReactLenis root options={{ lerp: 0.09, wheelMultiplier: 0.9 }}>
			{children}
		</ReactLenis>
	);
}
