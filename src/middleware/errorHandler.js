import { ConflictError } from "../domain/ConflictError.js";
import { ValidationError } from "../domain/ValidationError.js";

export function errorHandler(err, req, res, next) {
    console.error(err.stack);

    if (err instanceof ValidationError) {
        return res.status(400).json({ error: err.message });
    }

    if (err instanceof ConflictError) {
        return res.status(409).json({ error: err.message });
    }

    return res.status(500).json({ error: "Internal server error" });
}
