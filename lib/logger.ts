type LogContext = Record<string, unknown>;

function write(level: "warn" | "error", message: string, context?: LogContext) {
	if (process.env.NODE_ENV === "test") return;
	// biome-ignore lint/suspicious/noConsole: the logger is the single sanctioned console sink
	console[level](`[jm] ${message}`, context ?? "");
}

export const logger = {
	warn: (message: string, context?: LogContext) =>
		write("warn", message, context),
	error: (message: string, context?: LogContext) =>
		write("error", message, context),
};
