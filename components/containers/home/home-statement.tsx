import { getTranslations } from "next-intl/server";
import { WordReveal } from "@/components/containers/common/word-reveal";

export async function HomeStatement() {
	const t = await getTranslations("home.statement");

	return (
		<section className="bg-cal py-section">
			<div className="container-site">
				<div className="rounded-panel bg-verde px-8 py-24 text-cal md:px-16 md:py-36">
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
