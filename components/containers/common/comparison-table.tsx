import { Checkmark } from "@carbon/icons-react";
import { Reveal } from "@/components/containers/common/reveal";
import type { ComparisonTableProps } from "@/models/interfaces/common";

export function ComparisonTable({
	topicLabel,
	usualLabel,
	oursLabel,
	rows,
}: ComparisonTableProps) {
	return (
		<Reveal className="overflow-x-auto">
			<table className="w-full min-w-2xl border-collapse text-left">
				<thead>
					<tr className="font-mono text-xs uppercase tracking-label">
						<th scope="col" className="w-1/4 pb-6 font-normal text-cinza">
							{topicLabel}
						</th>
						<th scope="col" className="w-3/8 pb-6 font-normal text-cinza">
							{usualLabel}
						</th>
						<th scope="col" className="w-3/8 pb-6 font-normal text-verde">
							{oursLabel}
						</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row.key} className="border-t border-linha align-top">
							<th
								scope="row"
								className="py-6 pr-6 font-display text-xl font-semibold"
							>
								{row.topic}
							</th>
							<td className="py-6 pr-6 text-lg text-cinza line-through decoration-pedra">
								{row.usual}
							</td>
							<td className="py-6 text-lg text-tinta">
								<span className="flex items-start gap-3">
									<Checkmark
										aria-hidden="true"
										className="mt-1 size-5 shrink-0 text-verde"
									/>
									{row.ours}
								</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Reveal>
	);
}
