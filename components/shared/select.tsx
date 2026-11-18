import { fieldVariants } from "@/components/shared/field-styles";
import { cn } from "@/lib/utils";
import type { SelectProps } from "@/models/interfaces/ui";

export function Select({ className, invalid = false, ...props }: SelectProps) {
	return (
		<select
			aria-invalid={invalid || undefined}
			className={cn(fieldVariants({ invalid }), "appearance-none", className)}
			{...props}
		/>
	);
}
