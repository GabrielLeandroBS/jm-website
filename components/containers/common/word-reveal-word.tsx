"use client";

import { motion, useReducedMotion, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import type { WordRevealWordProps } from "@/models/interfaces/common";

export function WordRevealWord({
	word,
	index,
	total,
	muted,
	progress,
}: WordRevealWordProps) {
	const shouldReduceMotion = useReducedMotion();
	const start = index / total;
	const opacity = useTransform(progress, [start, start + 1 / total], [0.12, 1]);

	return (
		<motion.span
			style={shouldReduceMotion ? undefined : { opacity }}
			className={cn("inline-block pr-[0.25em]", muted && "text-verde-muted")}
		>
			{word}
		</motion.span>
	);
}
