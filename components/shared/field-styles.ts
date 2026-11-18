import { cva } from "class-variance-authority";

export const fieldVariants = cva(
	"w-full rounded-2xl border bg-papel px-5 py-4 text-base text-tinta transition-colors duration-300 placeholder:text-cinza focus-visible:border-verde focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde",
	{
		variants: {
			invalid: {
				true: "border-antes",
				false: "border-linha",
			},
		},
		defaultVariants: { invalid: false },
	},
);
