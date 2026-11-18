import { Eyebrow } from "@/components/containers/common/eyebrow";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { cn } from "@/lib/utils";
import type { PageHeroProps } from "@/models/interfaces/common";

export function PageHero({
	eyebrow,
	title,
	nuance,
	lead,
	tone = "light",
	children,
}: PageHeroProps) {
	return (
		<section
			className={cn(
				"pt-44 pb-section",
				tone === "dark" ? "bg-verde text-cal" : "bg-cal text-tinta",
			)}
		>
			<div className="container-site flex flex-col gap-10">
				<Reveal>
					<Eyebrow tone={tone}>{eyebrow}</Eyebrow>
				</Reveal>
				<Reveal delay={0.08}>
					<TwoToneHeading
						as="h1"
						size="display"
						title={title}
						nuance={nuance}
						tone={tone}
						className="max-w-6xl"
					/>
				</Reveal>
				{lead && (
					<Reveal delay={0.16}>
						<p
							className={cn(
								"max-w-2xl text-lead",
								tone === "dark" ? "text-verde-soft" : "text-texto",
							)}
						>
							{lead}
						</p>
					</Reveal>
				)}
				{children}
			</div>
		</section>
	);
}
