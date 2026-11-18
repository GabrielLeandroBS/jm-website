import { buttonVariants } from "@/components/shared/button-variants";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/models/interfaces/ui";

export function Button({
	className,
	variant,
	size,
	type = "button",
	...props
}: ButtonProps) {
	return (
		<button
			type={type}
			className={cn(buttonVariants({ variant, size }), className)}
			{...props}
		/>
	);
}
