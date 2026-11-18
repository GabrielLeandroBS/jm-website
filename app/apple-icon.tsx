import { ImageResponse } from "next/og";
import { OG_COLORS } from "@/models/constants/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Rendered by next/og (Satori): only inline styles are supported here.
export default function AppleIcon() {
	return new ImageResponse(
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background: OG_COLORS.verde,
			}}
		>
			<div
				style={{
					width: 56,
					height: 56,
					borderRadius: 999,
					background: OG_COLORS.lima,
				}}
			/>
		</div>,
		size,
	);
}
