import { cn } from "@/lib/utils";
import type { LabelProps } from "@/models/interfaces/ui";

export function Label({ className, ...props }: LabelProps) {
	return (
		// biome-ignore lint/a11y/noLabelWithoutControl: callers pass htmlFor
		<label
			className={cn("text-sm font-medium text-texto", className)}
			{...props}
		/>
	);
}
