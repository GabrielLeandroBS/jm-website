import { fieldVariants } from "@/components/shared/field-styles";
import { cn } from "@/lib/utils";
import type { InputProps } from "@/models/interfaces/ui";

export function Input({ className, invalid = false, ...props }: InputProps) {
	return (
		<input
			aria-invalid={invalid || undefined}
			className={cn(fieldVariants({ invalid }), className)}
			{...props}
		/>
	);
}
