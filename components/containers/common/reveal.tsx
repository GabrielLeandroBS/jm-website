"use client";

import { motion, useReducedMotion } from "motion/react";
import { useIsCompact } from "@/hooks/use-is-compact";
import type { RevealProps } from "@/models/interfaces/common";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
	children,
	delay = 0,
	className,
	y = 16,
}: RevealProps) {
	const shouldReduceMotion = useReducedMotion();
	const isCompact = useIsCompact();

	// On phones content stacks in one column: each block enters on its own,
	// so long staggers only delay what is already on screen.
	const transition = isCompact
		? { duration: 0.5, ease: EASE, delay: Math.min(delay, 0.08) }
		: { duration: 0.7, ease: EASE, delay };

	return (
		<motion.div
			className={className}
			initial={shouldReduceMotion ? false : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{
				once: true,
				margin: isCompact ? "0px 0px -4% 0px" : "0px 0px -8% 0px",
			}}
			transition={transition}
		>
			{children}
		</motion.div>
	);
}
