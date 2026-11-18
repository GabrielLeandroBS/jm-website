import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { cn } from "@/lib/utils";
import type { SectionIntroProps } from "@/models/interfaces/common";

export function SectionIntro({
	eyebrow,
	title,
	nuance,
	body,
	tone = "light",
}: SectionIntroProps) {
	return (
		<div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
			<div className="flex flex-col gap-6">
				<Reveal>
					<Eyebrow tone={tone}>{eyebrow}</Eyebrow>
				</Reveal>
				<Reveal delay={0.08}>
					<TwoToneHeading title={title} nuance={nuance} tone={tone} />
				</Reveal>
			</div>
			{body && (
				<Reveal delay={0.16} className="max-w-md">
					<p
						className={cn(
							"text-lead",
							tone === "light" ? "text-texto" : "text-verde-soft",
						)}
					>
						{body}
					</p>
				</Reveal>
			)}
		</div>
	);
}
