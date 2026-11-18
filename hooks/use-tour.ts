"use client";

import { useState } from "react";
import { TOUR_STAGES } from "@/models/constants/tour";
import type { TourAnswers } from "@/models/types/tour";

const INITIAL_ANSWERS: TourAnswers = {
	space: null,
	frequency: null,
	priority: null,
};

export function useTour() {
	const [stageIndex, setStageIndex] = useState(0);
	const [answers, setAnswers] = useState<TourAnswers>(INITIAL_ANSWERS);

	function toggleAnswer<K extends keyof TourAnswers>(
		key: K,
		value: NonNullable<TourAnswers[K]>,
	) {
		setAnswers((current) => ({
			...current,
			[key]: current[key] === value ? null : value,
		}));
	}

	const lastIndex = TOUR_STAGES.length - 1;

	return {
		stage: TOUR_STAGES[stageIndex],
		stageIndex,
		answers,
		answeredCount: Object.values(answers).filter(Boolean).length,
		isFirst: stageIndex === 0,
		isLast: stageIndex === lastIndex,
		isBeforeLast: stageIndex === lastIndex - 1,
		goTo: setStageIndex,
		next: () => setStageIndex((index) => Math.min(lastIndex, index + 1)),
		previous: () => setStageIndex((index) => Math.max(0, index - 1)),
		toggleAnswer,
	};
}
