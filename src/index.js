import app from "./app.js";

const port = process.env.port || 3000;
await app.listen(port);

console.log(`Server started on port ${port}`);
