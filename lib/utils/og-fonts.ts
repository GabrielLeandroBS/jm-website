import { readFile } from "node:fs/promises";
import { join } from "node:path";

const FONT_DIR = join(process.cwd(), "assets/fonts");

export async function loadOgFonts() {
	const [display, sans, mono] = await Promise.all([
		readFile(join(FONT_DIR, "funnel-display-bold.ttf")),
		readFile(join(FONT_DIR, "geist-regular.ttf")),
		readFile(join(FONT_DIR, "geist-mono-regular.ttf")),
	]);

	return [
		{ name: "Funnel Display", data: display, weight: 700 as const },
		{ name: "Geist", data: sans, weight: 400 as const },
		{ name: "Geist Mono", data: mono, weight: 400 as const },
	];
}
