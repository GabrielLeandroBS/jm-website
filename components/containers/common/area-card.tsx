import { ArrowUpRight } from "@carbon/icons-react";
import Link from "next/link";
import { BrandLockup } from "@/components/containers/common/brand-lockup";
import { cn } from "@/lib/utils";
import { areaRoute } from "@/models/constants/routes";
import type { AreaCardProps } from "@/models/interfaces/common";

export function AreaCard({
	slug,
	name,
	short,
	featured = false,
	icon: Icon,
}: AreaCardProps) {
	return (
		<Link
			href={areaRoute(slug)}
			className={cn(
				"group flex h-full min-h-72 flex-col justify-between gap-10 rounded-card border pad-card transition-[transform,background-color,border-color] duration-700 ease-calm hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-verde",
				featured
					? "border-verde bg-verde text-cal"
					: "border-linha bg-papel text-tinta hover:border-tinta",
			)}
		>
			<div className="flex items-start justify-between">
				<Icon
					aria-hidden="true"
					className={cn("size-8", featured ? "text-lima" : "text-verde")}
				/>
				<ArrowUpRight
					aria-hidden="true"
					className="size-6 opacity-40 transition-[opacity,transform] duration-500 ease-calm group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
				/>
			</div>
			<div className="flex flex-col gap-3">
				<p className="font-display text-3xl font-extrabold tracking-logo">
					<BrandLockup domain={name} tone={featured ? "dark" : "light"} />
				</p>
				<p
					className={cn(
						"text-base",
						featured ? "text-verde-soft" : "text-texto",
					)}
				>
					{short}
				</p>
			</div>
		</Link>
	);
}
