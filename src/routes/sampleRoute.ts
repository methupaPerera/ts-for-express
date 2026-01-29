import express from "express";
import { sampleController } from "../controllers/index";

const router = express.Router();

router.get("/", sampleController);

export default router;
