import { Eyebrow } from "@/components/containers/common/eyebrow";
import { FaqList } from "@/components/containers/common/faq-list";
import { Reveal } from "@/components/containers/common/reveal";
import { TwoToneHeading } from "@/components/containers/common/two-tone-heading";
import { ButtonLink } from "@/components/shared/button-link";
import { ROUTES } from "@/models/constants/routes";
import type { FaqTeaserProps } from "@/models/interfaces/common";

export function FaqTeaser({
	eyebrow,
	title,
	nuance,
	cta,
	items,
}: FaqTeaserProps) {
	return (
		<section className="bg-cal py-section">
			<div className="container-site grid gap-stack lg:grid-cols-3">
				<div className="flex flex-col gap-6 self-start lg:sticky lg:top-32">
					<Reveal>
						<Eyebrow>{eyebrow}</Eyebrow>
					</Reveal>
					<Reveal delay={0.08}>
						<TwoToneHeading title={title} nuance={nuance} size="title" />
					</Reveal>
					<Reveal delay={0.16}>
						<ButtonLink href={ROUTES.faq} variant="outline">
							{cta}
						</ButtonLink>
					</Reveal>
				</div>
				<Reveal delay={0.12} className="lg:col-span-2">
					<FaqList items={items} />
				</Reveal>
			</div>
		</section>
	);
}
