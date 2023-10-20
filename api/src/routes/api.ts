import { Router } from "express";
import * as ApiController from "../controllers/api.Controller";

const router = Router();

router.get("/teste", ApiController.testController);

export default router;
