"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { WordRevealWord } from "@/components/containers/common/word-reveal-word";
import { cn } from "@/lib/utils";
import type { WordRevealProps } from "@/models/interfaces/common";

export function WordReveal({ lead, nuance, className }: WordRevealProps) {
	const containerRef = useRef<HTMLParagraphElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 0.9", "end 0.65"],
	});
	const leadWords = lead.split(" ");
	const words = [...leadWords, ...nuance.split(" ")];

	return (
		<p
			ref={containerRef}
			className={cn(
				"font-display text-headline font-bold tracking-display text-balance",
				className,
			)}
		>
			{words.map((word, index) => (
				<WordRevealWord
					key={`${word}-${index.toString()}`}
					word={word}
					index={index}
					total={words.length}
					muted={index >= leadWords.length}
					progress={scrollYProgress}
				/>
			))}
		</p>
	);
}
