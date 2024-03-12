// Configuring environment variables.
import dotenv from "dotenv";
dotenv.config();

// Importing necessary dependencies.
import express from "express";
import cookieParser from "cookie-parser";

// Importing configurations.
import { config, db } from "./config";

// Importing route handlers.
import sampleRoute from "./routes/sampleRoute";

const app = express();
const port = config.port;

db(config.dbURI); // Initializing database connection.

app.use(express.json());
app.use(cookieParser());

app.use("/sample", sampleRoute);

app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

// Defining non-existing routes.
app.get("*", (req, res) => {
    res.status(404).send("<h1>P404 error.</h1>");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});
