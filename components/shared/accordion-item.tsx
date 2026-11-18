"use client";

import { Add } from "@carbon/icons-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { AccordionItemProps } from "@/models/interfaces/ui";

export function AccordionItem({
	question,
	children,
	defaultOpen = false,
}: AccordionItemProps) {
	const [isOpen, setIsOpen] = useState(defaultOpen);
	const shouldReduceMotion = useReducedMotion();
	const panelId = useId();

	return (
		<div className="border-t border-linha last:border-b">
			<h3>
				<button
					type="button"
					aria-expanded={isOpen}
					aria-controls={panelId}
					onClick={() => setIsOpen((open) => !open)}
					className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde"
				>
					{question}
					<Add
						aria-hidden="true"
						className={cn(
							"size-6 shrink-0 transition-transform duration-500 ease-calm",
							isOpen && "rotate-45",
						)}
					/>
				</button>
			</h3>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						id={panelId}
						initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
						className="overflow-hidden"
					>
						<div className="max-w-3xl pb-8 text-lg leading-relaxed text-texto">
							{children}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
