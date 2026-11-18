import type { TourAnswers, TourStage } from "@/models/types/tour";

export interface TourStageNavProps {
	stageIndex: number;
	onSelect: (index: number) => void;
}

export interface TourOptionGroupProps<T extends string> {
	legend: string;
	options: readonly T[];
	selected: T | null;
	getLabel: (option: T) => string;
	onToggle: (option: T) => void;
	layout?: "cards" | "pills";
}

export interface TourSpaceProps {
	answers: TourAnswers;
	answeredCount: number;
	onToggle: <K extends keyof TourAnswers>(
		key: K,
		value: NonNullable<TourAnswers[K]>,
	) => void;
}

export interface TourStartProps {
	onStart: () => void;
}

export interface TourProposalProps {
	answers: TourAnswers;
}

export interface TourFooterNavProps {
	isFirst: boolean;
	isLast: boolean;
	isBeforeLast: boolean;
	onPrevious: () => void;
	onNext: () => void;
}

export interface TourStageHeaderProps {
	stage: Exclude<TourStage, "welcome">;
}
