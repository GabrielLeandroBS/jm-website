import { getTranslations } from "next-intl/server";
import { WordReveal } from "@/components/containers/common/word-reveal";

export async function HomeStatement() {
	const t = await getTranslations("home.statement");

	return (
		<section className="bg-cal py-section">
			<div className="container-site">
				<div className="rounded-panel bg-verde pad-band text-cal">
					<WordReveal
						lead={t("lead")}
						nuance={t("nuance")}
						className="max-w-6xl"
					/>
				</div>
			</div>
		</section>
	);
}
