import Link from "next/link";
import { buttonVariants } from "@/components/shared/button-variants";
import { cn } from "@/lib/utils";
import type { ButtonLinkProps } from "@/models/interfaces/ui";

export function ButtonLink({
	className,
	variant,
	size,
	href,
	external = false,
	...props
}: ButtonLinkProps) {
	const classes = cn(buttonVariants({ variant, size }), className);

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={classes}
				{...props}
			/>
		);
	}

	return <Link href={href} className={classes} {...props} />;
}
