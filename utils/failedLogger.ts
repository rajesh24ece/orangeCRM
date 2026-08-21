import logger from "./logger.js";


export function logAndRethrow(
    error: unknown,
    action: string
): never {

    const message =
        error instanceof Error
            ? error.message
            : 'Unknown error';

    logger.error(`Failed to ${action}: ${message}`);

    throw error;
}