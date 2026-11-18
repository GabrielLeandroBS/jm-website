"use client";

import { motion, useReducedMotion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={shouldReduceMotion ? false : { opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
		>
			{children}
		</motion.div>
	);
}
