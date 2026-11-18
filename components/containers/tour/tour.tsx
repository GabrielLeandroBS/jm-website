"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { TourFooterNav } from "@/components/containers/tour/tour-footer-nav";
import { TourMethod } from "@/components/containers/tour/tour-method";
import { TourProof } from "@/components/containers/tour/tour-proof";
import { TourProposal } from "@/components/containers/tour/tour-proposal";
import { TourSpace } from "@/components/containers/tour/tour-space";
import { TourStageNav } from "@/components/containers/tour/tour-stage-nav";
import { TourWelcome } from "@/components/containers/tour/tour-welcome";
import { useTour } from "@/hooks/use-tour";

export function Tour() {
	const tour = useTour();
	const shouldReduceMotion = useReducedMotion();

	return (
		<section className="bg-cal pt-28 pb-section">
			<div className="container-site flex min-h-[80svh] flex-col gap-10">
				<TourStageNav stageIndex={tour.stageIndex} onSelect={tour.goTo} />
				<AnimatePresence mode="wait">
					<motion.div
						key={tour.stage}
						initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
						animate={{ opacity: 1, y: 0 }}
						exit={shouldReduceMotion ? undefined : { opacity: 0, y: -16 }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="flex-1"
					>
						{tour.stage === "welcome" && <TourWelcome onStart={tour.next} />}
						{tour.stage === "space" && (
							<TourSpace
								answers={tour.answers}
								answeredCount={tour.answeredCount}
								onToggle={tour.toggleAnswer}
							/>
						)}
						{tour.stage === "method" && <TourMethod />}
						{tour.stage === "proof" && <TourProof />}
						{tour.stage === "proposal" && (
							<TourProposal answers={tour.answers} />
						)}
					</motion.div>
				</AnimatePresence>
				<TourFooterNav
					isFirst={tour.isFirst}
					isLast={tour.isLast}
					isBeforeLast={tour.isBeforeLast}
					onPrevious={tour.previous}
					onNext={tour.next}
				/>
			</div>
		</section>
	);
}
