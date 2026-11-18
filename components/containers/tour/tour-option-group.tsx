"use client";

import { cn } from "@/lib/utils";
import type { TourOptionGroupProps } from "@/models/interfaces/tour";

export function TourOptionGroup<T extends string>({
	legend,
	options,
	selected,
	getLabel,
	onToggle,
	layout = "pills",
}: TourOptionGroupProps<T>) {
	return (
		<fieldset className="flex flex-col gap-4">
			<legend className="pb-4 text-base text-texto">{legend}</legend>
			<div
				className={cn(
					layout === "cards"
						? "grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-6"
						: "flex flex-wrap gap-2",
				)}
			>
				{options.map((option) => {
					const isSelected = option === selected;
					return (
						<button
							key={option}
							type="button"
							aria-pressed={isSelected}
							onClick={() => onToggle(option)}
							className={cn(
								"border text-left font-medium transition-[background-color,color,border-color,transform] duration-300 ease-calm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde active:scale-98",
								layout === "cards"
									? "min-h-24 rounded-2xl p-5 text-lg"
									: "min-h-11 rounded-full px-5 text-base",
								isSelected
									? "border-verde bg-verde text-cal"
									: "border-linha bg-papel text-tinta hover:border-tinta",
							)}
						>
							{getLabel(option)}
						</button>
					);
				})}
			</div>
		</fieldset>
	);
}
