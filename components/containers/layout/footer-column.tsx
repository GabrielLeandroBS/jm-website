import type { FooterColumnProps } from "@/models/interfaces/layout";

export function FooterColumn({ title, children }: FooterColumnProps) {
	return (
		<div className="flex flex-col gap-4">
			<p className="font-mono text-xs uppercase tracking-label text-lima">
				{title}
			</p>
			<ul className="flex flex-col gap-2.5 text-base text-verde-soft">
				{children}
			</ul>
		</div>
	);
}
