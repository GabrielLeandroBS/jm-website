"use client";

import { motion, useReducedMotion } from "motion/react";
import type { RevealProps } from "@/models/interfaces/common";

export function Reveal({
	children,
	delay = 0,
	className,
	y = 28,
}: RevealProps) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className={className}
			initial={shouldReduceMotion ? false : { opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "0px 0px -12% 0px" }}
			transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay }}
		>
			{children}
		</motion.div>
	);
}
