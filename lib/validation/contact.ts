import { z } from "zod";
import { CONTACT_SPACE_KEYS } from "@/models/constants/content-keys";

export function buildContactSchema(messages: {
	nameRequired: string;
	emailInvalid: string;
	spaceRequired: string;
	messageShort: string;
	consentRequired: string;
}) {
	return z.object({
		name: z.string().trim().min(2, messages.nameRequired),
		email: z.email(messages.emailInvalid),
		phone: z.string().trim().optional(),
		space: z.enum(CONTACT_SPACE_KEYS, { error: messages.spaceRequired }),
		message: z.string().trim().min(10, messages.messageShort),
		consent: z.literal(true, { error: messages.consentRequired }),
	});
}

export type ContactFormValues = z.infer<ReturnType<typeof buildContactSchema>>;
