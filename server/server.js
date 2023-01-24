// imports dependencies
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// local file dependencies
import userRouter from "./routes/userRoutes.js";
import { logger } from "./helpers/logOps.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json({ type: "application/json" }));
app.use(helmet({ contentSecurityPolicy: false }));

// serve the static pages
app.use(express.static(path.join(__dirname, "../public/dist")));

// different routes
app.use("/services", userRouter);

// listen
app.listen(process.env.PORT, () => {
  logger.info("Server is running on ", process.env.PORT);
});
