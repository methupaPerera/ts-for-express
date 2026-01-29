// Importing necessary dependencies.
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import type { Request, Response } from "express";

// Importing configurations.
import { config, db } from "./config/index";

// Importing route handlers.
import sampleRoute from "./routes/sampleRoute";

const app = express();
const port = config.port;

db(config.dbURI); // Initializing database connection.

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/sample", sampleRoute);

app.get("/", (req: Request, res: Response) => {
	res.send("<h1>Hello, world!</h1>");
});

// Handle non-existing routes.
app.use((req, res) => {
	res.status(404).send("<h1>P404 error.</h1>");
});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}...`);
});
