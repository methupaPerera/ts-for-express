import express from "express";
import { sampleController } from "../controllers";

const router = express.Router();

router.get("/", sampleController);

export default router;
