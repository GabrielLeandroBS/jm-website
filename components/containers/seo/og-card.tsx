import { LOGO_DOT, LOGO_GLYPHS, LOGO_VIEW_BOX } from "@/models/constants/logo";
import { OG_COLORS } from "@/models/constants/og";
import type { OgCardProps } from "@/models/interfaces/seo";

// Rendered by next/og (Satori): only inline styles are supported here.
export function OgCard({
	eyebrow,
	title,
	nuance,
	footer,
	domain,
	titleSize = 96,
}: OgCardProps) {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: 72,
				background: OG_COLORS.verde,
				color: OG_COLORS.cal,
				fontFamily: "Geist",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<div style={{ display: "flex", alignItems: "flex-end", gap: 18 }}>
					<svg
						viewBox={LOGO_VIEW_BOX}
						width={132}
						height={58}
						aria-hidden="true"
					>
						<g fill={OG_COLORS.cal}>
							{LOGO_GLYPHS.map((glyph) => (
								<path
									key={glyph.transform}
									transform={glyph.transform}
									d={glyph.d}
								/>
							))}
						</g>
						<circle
							cx={LOGO_DOT.cx}
							cy={LOGO_DOT.cy}
							r={LOGO_DOT.r}
							fill={OG_COLORS.lima}
						/>
					</svg>
					{domain && (
						<span
							style={{
								fontFamily: "Funnel Display",
								fontSize: 44,
								color: OG_COLORS.pedra,
								lineHeight: 1,
							}}
						>
							{domain}
						</span>
					)}
				</div>
				<span
					style={{
						fontFamily: "Geist Mono",
						fontSize: 20,
						letterSpacing: 3,
						textTransform: "uppercase",
						color: OG_COLORS.pedra,
					}}
				>
					{eyebrow}
				</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					fontFamily: "Funnel Display",
					fontSize: titleSize,
					lineHeight: 1.02,
					letterSpacing: -2,
				}}
			>
				<span>{title}</span>
				<span style={{ color: OG_COLORS.pedra }}>{nuance}</span>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					borderTop: `1px solid ${OG_COLORS.linha}`,
					paddingTop: 28,
					fontFamily: "Geist Mono",
					fontSize: 22,
					color: OG_COLORS.pedra,
				}}
			>
				<span>{footer}</span>
				<span
					style={{
						width: 18,
						height: 18,
						borderRadius: 999,
						background: OG_COLORS.lima,
					}}
				/>
			</div>
		</div>
	);
}
