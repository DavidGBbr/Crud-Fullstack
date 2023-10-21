import { Router } from "express";
import * as ApiController from "../controllers/api.Controller";

const router = Router();

router.get("/", ApiController.getUsers);

export default router;
