"use client";

import { useId, useState } from "react";
import type { BeforeAfterProps } from "@/models/interfaces/common";

export function BeforeAfter({
	beforeLabel,
	afterLabel,
	beforePlaceholder,
	afterPlaceholder,
	sliderLabel,
}: BeforeAfterProps) {
	const [position, setPosition] = useState(50);
	const sliderId = useId();

	return (
		<div className="flex flex-col gap-4">
			<div className="relative h-96 overflow-hidden rounded-panel bg-antes md:h-128">
				<div className="absolute inset-0 flex items-center justify-end p-8 font-mono text-sm text-antes-texto">
					{beforePlaceholder}
				</div>
				<div
					className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-verde bg-depois"
					style={{ width: `${position}%` }}
				>
					<div className="flex h-full w-screen max-w-7xl items-center p-8 font-mono text-sm text-verde">
						{afterPlaceholder}
					</div>
				</div>
				<span className="absolute top-4 left-4 rounded-full bg-verde px-3 py-1.5 font-mono text-xs text-cal">
					{afterLabel}
				</span>
				<span className="absolute top-4 right-4 rounded-full bg-tinta px-3 py-1.5 font-mono text-xs text-cal">
					{beforeLabel}
				</span>
			</div>
			<label
				htmlFor={sliderId}
				className="font-mono text-xs uppercase tracking-label text-cinza"
			>
				{sliderLabel}
			</label>
			<input
				id={sliderId}
				type="range"
				min={0}
				max={100}
				value={position}
				onChange={(event) => setPosition(Number(event.target.value))}
				className="h-11 w-full cursor-ew-resize accent-verde"
			/>
		</div>
	);
}
