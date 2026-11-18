import { getRequestConfig } from "next-intl/server";
import { loadMessages } from "@/lib/utils/load-messages";
import { DEFAULT_LOCALE } from "@/models/constants/locale";

export default getRequestConfig(async () => ({
	locale: DEFAULT_LOCALE,
	messages: await loadMessages(DEFAULT_LOCALE),
	timeZone: "Europe/Lisbon",
}));
