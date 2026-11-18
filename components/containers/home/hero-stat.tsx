import type { HeroStatProps } from "@/models/interfaces/home";

export function HeroStat({ value, label }: HeroStatProps) {
	return (
		<div className="flex flex-col-reverse gap-1">
			<dt className="text-xs text-verde-soft sm:text-sm">{label}</dt>
			<dd className="font-display text-3xl font-bold tracking-display sm:text-5xl">
				{value}
			</dd>
		</div>
	);
}
