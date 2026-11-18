"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useId, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/shared/button";
import { FieldError } from "@/components/shared/field-error";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { Select } from "@/components/shared/select";
import { Textarea } from "@/components/shared/textarea";
import { buildMailtoHref } from "@/lib/utils/contact-links";
import {
	buildContactSchema,
	type ContactFormValues,
} from "@/lib/validation/contact";
import { CONTACT_SPACE_KEYS } from "@/models/constants/content-keys";
import { ROUTES } from "@/models/constants/routes";

export function ContactForm() {
	const t = useTranslations("contact.form");
	const tSpace = useTranslations("tour.space.spaces");
	const baseId = useId();
	const [sent, setSent] = useState(false);

	const schema = useMemo(
		() =>
			buildContactSchema({
				nameRequired: t("errors.nameRequired"),
				emailInvalid: t("errors.emailInvalid"),
				spaceRequired: t("errors.spaceRequired"),
				messageShort: t("errors.messageShort"),
				consentRequired: t("errors.consentRequired"),
			}),
		[t],
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormValues>({
		resolver: zodResolver(schema),
		defaultValues: { name: "", email: "", phone: "", message: "" },
	});

	function onSubmit(values: ContactFormValues) {
		const body = [
			`${t("name")}: ${values.name}`,
			`${t("email")}: ${values.email}`,
			`${t("phone")}: ${values.phone || "não indicado"}`,
			`${t("space")}: ${tSpace(values.space)}`,
			"",
			values.message,
		].join("\n");
		window.location.href = buildMailtoHref(
			t("emailSubject", { name: values.name }),
			body,
		);
		setSent(true);
	}

	const id = (field: string) => `${baseId}-${field}`;

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			noValidate
			className="flex flex-col gap-6 rounded-panel border border-linha bg-papel pad-panel"
		>
			<h2 className="font-display font-semibold text-headline">{t("title")}</h2>
			<div className="grid gap-6 md:grid-cols-2">
				<div className="flex flex-col gap-2">
					<Label htmlFor={id("name")}>{t("name")}</Label>
					<Input
						id={id("name")}
						autoComplete="name"
						placeholder={t("namePlaceholder")}
						invalid={!!errors.name}
						aria-describedby={errors.name ? id("name-error") : undefined}
						{...register("name")}
					/>
					<FieldError id={id("name-error")} message={errors.name?.message} />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor={id("email")}>{t("email")}</Label>
					<Input
						id={id("email")}
						type="email"
						autoComplete="email"
						placeholder={t("emailPlaceholder")}
						invalid={!!errors.email}
						aria-describedby={errors.email ? id("email-error") : undefined}
						{...register("email")}
					/>
					<FieldError id={id("email-error")} message={errors.email?.message} />
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor={id("phone")}>{t("phone")}</Label>
					<Input
						id={id("phone")}
						type="tel"
						autoComplete="tel"
						placeholder={t("phonePlaceholder")}
						{...register("phone")}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<Label htmlFor={id("space")}>{t("space")}</Label>
					<Select
						id={id("space")}
						defaultValue=""
						invalid={!!errors.space}
						aria-describedby={errors.space ? id("space-error") : undefined}
						{...register("space")}
					>
						<option value="" disabled>
							{t("spacePlaceholder")}
						</option>
						{CONTACT_SPACE_KEYS.map((key) => (
							<option key={key} value={key}>
								{tSpace(key)}
							</option>
						))}
					</Select>
					<FieldError id={id("space-error")} message={errors.space?.message} />
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor={id("message")}>{t("message")}</Label>
				<Textarea
					id={id("message")}
					placeholder={t("messagePlaceholder")}
					invalid={!!errors.message}
					aria-describedby={errors.message ? id("message-error") : undefined}
					{...register("message")}
				/>
				<FieldError
					id={id("message-error")}
					message={errors.message?.message}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<div className="flex items-start gap-3">
					<input
						id={id("consent")}
						type="checkbox"
						className="mt-1 size-5 accent-verde"
						aria-describedby={errors.consent ? id("consent-error") : undefined}
						{...register("consent")}
					/>
					<Label htmlFor={id("consent")} className="font-normal">
						{t("consent")}{" "}
						<Link href={ROUTES.privacy} className="underline">
							{t("privacyLink")}
						</Link>
					</Label>
				</div>
				<FieldError
					id={id("consent-error")}
					message={errors.consent?.message}
				/>
			</div>
			<div className="flex flex-wrap items-center gap-5">
				<Button type="submit" size="lg" disabled={isSubmitting}>
					{isSubmitting ? t("sending") : t("submit")}
				</Button>
				<p aria-live="polite" className="text-base text-cinza">
					{sent ? t("mailFallback") : null}
				</p>
			</div>
		</form>
	);
}
