import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/containers/common/reveal";
import { cn } from "@/lib/utils";
import { AREA_SLUGS, FEATURED_AREA } from "@/models/constants/areas";
import { areaRoute } from "@/models/constants/routes";

export async function HeroAreaList() {
	const t = await getTranslations("services.areas");

	return (
		<ul className="flex flex-col gap-2.5">
			{AREA_SLUGS.map((slug, index) => {
				const isFeatured = slug === FEATURED_AREA;
				return (
					<li key={slug}>
						<Reveal delay={0.3 + index * 0.06} y={12}>
							<Link
								href={areaRoute(slug)}
								className={cn(
									"flex min-h-14 items-center justify-between rounded-2xl px-5 py-3 transition-[transform,background-color] duration-500 ease-calm hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-verde",
									isFeatured
										? "bg-verde text-cal"
										: "border border-linha bg-papel text-tinta",
								)}
							>
								<span className="font-display text-xl font-extrabold tracking-logo sm:text-2xl">
									j&amp;m.{" "}
									<span
										className={cn(
											"font-normal",
											isFeatured ? "text-verde-label" : "text-cinza",
										)}
									>
										{t(`${slug}.name`)}
									</span>
								</span>
								{isFeatured ? (
									<span
										aria-hidden="true"
										className="size-3 rounded-full bg-lima"
									/>
								) : (
									<span className="font-mono text-xs text-cinza">
										0{index + 1}
									</span>
								)}
							</Link>
						</Reveal>
					</li>
				);
			})}
		</ul>
	);
}
