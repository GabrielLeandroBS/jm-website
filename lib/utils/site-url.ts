const FALLBACK_URL = "http://localhost:3000";

export function resolveSiteUrl(env: Record<string, string | undefined>) {
	const explicit = env.NEXT_PUBLIC_APP_URL;
	if (explicit) return explicit.replace(/\/$/, "");

	const vercelHost =
		env.VERCEL_PROJECT_PRODUCTION_URL ??
		env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ??
		env.VERCEL_URL;
	if (vercelHost) return `https://${vercelHost}`;

	return FALLBACK_URL;
}
