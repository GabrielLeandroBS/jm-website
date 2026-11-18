import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex w-full min-h-11 sm:w-auto items-center justify-center gap-2 rounded-full font-medium transition-[background-color,color,transform,box-shadow] duration-500 ease-calm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lima disabled:pointer-events-none disabled:opacity-50 active:scale-98",
	{
		variants: {
			variant: {
				primary: "bg-lima text-tinta hover:bg-papel",
				dark: "bg-tinta text-cal hover:bg-verde",
				green: "bg-verde text-cal hover:bg-tinta",
				outline:
					"border border-linha bg-transparent text-tinta hover:border-tinta",
				outlineLight:
					"border border-verde-muted bg-transparent text-cal hover:border-cal",
				link: "w-auto min-h-0 rounded-none px-0 text-current underline-offset-8 hover:underline",
			},
			size: {
				sm: "px-4 text-sm",
				md: "px-6 text-base",
				lg: "min-h-14 px-8 text-lg",
			},
		},
		compoundVariants: [{ variant: "link", className: "px-0" }],
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);
