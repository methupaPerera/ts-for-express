import express from "express";
import { sampleController } from "../controllers/index.ts";

const router = express.Router();

router.get("/", sampleController);

export default router;
