import type { VariantProps } from "class-variance-authority";
import type {
	AnchorHTMLAttributes,
	ButtonHTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
	ReactNode,
	SelectHTMLAttributes,
	TextareaHTMLAttributes,
} from "react";
import type { buttonVariants } from "@/components/shared/button-variants";

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		ButtonVariantProps {}

export interface ButtonLinkProps
	extends AnchorHTMLAttributes<HTMLAnchorElement>,
		ButtonVariantProps {
	href: string;
	external?: boolean;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	invalid?: boolean;
};

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	invalid?: boolean;
};

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
	invalid?: boolean;
};

export type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export interface FieldErrorProps {
	id: string;
	message?: string;
}

export interface AccordionItemProps {
	question: string;
	children: ReactNode;
	defaultOpen?: boolean;
}
