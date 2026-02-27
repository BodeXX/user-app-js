export function errorHandler(err, req, res, next) {
    console.error(err.stack);

    if (err.message === "Name and email are required") {
        return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ error: "Internal server error" });
}
