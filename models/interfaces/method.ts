import type { Tone } from "@/models/interfaces/common";

export interface MethodStepCardProps {
	number: string;
	title: string;
	body: string;
	receivesLabel: string;
	receives: string;
	tone?: Tone;
	highlighted?: boolean;
}
