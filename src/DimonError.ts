export class DimonError extends Error {
    name = 'DimonError';
    data: unknown;

    constructor(message: string, data?: unknown) {
        super(message);
        this.data = data;
    }
}
