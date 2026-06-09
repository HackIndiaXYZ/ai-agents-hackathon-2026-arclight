// api/index.ts
// Vercel serverless entry point — re-exports the Express app
// Vercel automatically detects Express apps and wraps them as serverless functions.
import { app } from "../server";

export default app;
