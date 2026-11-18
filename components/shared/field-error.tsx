import type { FieldErrorProps } from "@/models/interfaces/ui";

export function FieldError({ id, message }: FieldErrorProps) {
	if (!message) return null;

	return (
		<p id={id} role="alert" className="text-sm text-antes">
			{message}
		</p>
	);
}
