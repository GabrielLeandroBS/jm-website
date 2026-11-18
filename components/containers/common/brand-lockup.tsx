import { Logo } from "@/components/containers/common/logo";
import { cn } from "@/lib/utils";
import type { BrandLockupProps } from "@/models/interfaces/common";

export function BrandLockup({
	domain,
	tone = "light",
	className,
}: BrandLockupProps) {
	return (
		<span className={cn("whitespace-nowrap", className)}>
			<Logo inline dot={tone === "light" ? "verde" : "lima"} />{" "}
			<span
				className={cn(
					"font-normal",
					tone === "light" ? "text-cinza" : "text-verde-label",
				)}
			>
				{domain}
			</span>
		</span>
	);
}
