import { cn } from "@/lib/utils";
import { LOGO_DOT, LOGO_GLYPHS, LOGO_VIEW_BOX } from "@/models/constants/logo";
import type { LogoProps } from "@/models/interfaces/common";

export function Logo({ className, dot = "lima", animated = false }: LogoProps) {
	return (
		<svg
			viewBox={LOGO_VIEW_BOX}
			preserveAspectRatio="xMinYMid meet"
			role="img"
			aria-label="j&m."
			className={cn("h-[1em] w-auto", className)}
		>
			<g fill="currentColor">
				{LOGO_GLYPHS.map((glyph) => (
					<path key={glyph.transform} transform={glyph.transform} d={glyph.d} />
				))}
			</g>
			<circle
				cx={LOGO_DOT.cx}
				cy={LOGO_DOT.cy}
				r={LOGO_DOT.r}
				className={cn(
					dot === "lima" ? "fill-lima" : "fill-verde",
					animated && "animate-dot",
				)}
				style={{ transformBox: "fill-box", transformOrigin: "center" }}
			/>
		</svg>
	);
}
