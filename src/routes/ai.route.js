import express from 'express';
import { searchController, summarizeController } from "../controllers/ai.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";

const aiRoute = express.Router();

aiRoute.post("/search", verifyToken, searchController);
aiRoute.post("/summarize", verifyToken, summarizeController);

export default aiRoute;