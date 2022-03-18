export class DimonError extends Error {
    name = 'DimonError';
    extra: unknown;

    constructor(message: string, extra?: unknown) {
        super(message);
        this.extra = extra;
    }
}
