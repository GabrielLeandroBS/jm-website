import { fieldVariants } from "@/components/shared/field-styles";
import { cn } from "@/lib/utils";
import type { TextareaProps } from "@/models/interfaces/ui";

export function Textarea({
	className,
	invalid = false,
	...props
}: TextareaProps) {
	return (
		<textarea
			aria-invalid={invalid || undefined}
			className={cn(fieldVariants({ invalid }), "min-h-36", className)}
			{...props}
		/>
	);
}
