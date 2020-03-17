function getFunctionName(f: Function): string {
    if (f.name) {
        return f.name;
    }

    const groups = /^\s?function ([^(]*)\(/.exec(f as any);

    return groups && groups[1] ? groups[1] : '';
}

export class Exception implements Error {
    public readonly name: string;
    public readonly message: string;
    public readonly stack?: string;

    constructor(message: string) {
        this.message = message;
        this.name = getFunctionName(this.constructor);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error().stack;
        }
    }
}

Exception.prototype = Object.create(Error.prototype, {
    constructor: {
        value: Exception,
        writable: true,
        enumerable: false,
        configurable: true,
    },
});
