import { cn } from "@/lib/utils";
import type {
	HeadingSize,
	TwoToneHeadingProps,
} from "@/models/interfaces/common";

const SIZE_CLASSES = {
	mega: "text-mega",
	display: "text-display",
	headline: "text-headline",
	title: "text-title",
} satisfies Record<HeadingSize, string>;

export function TwoToneHeading({
	title,
	nuance,
	as: Tag = "h2",
	size = "headline",
	tone = "light",
	className,
}: TwoToneHeadingProps) {
	return (
		<Tag
			className={cn(
				"font-display font-bold tracking-display text-balance",
				SIZE_CLASSES[size],
				className,
			)}
		>
			<span className="block">{title}</span>
			{nuance && (
				<span
					className={cn(
						"block",
						tone === "light" ? "text-nuance" : "text-verde-muted",
					)}
				>
					{nuance}
				</span>
			)}
		</Tag>
	);
}
