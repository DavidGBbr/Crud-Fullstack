import { Router } from "express";
import * as ApiController from "../controllers/api.Controller";

const router = Router();

router.get("/", ApiController.getUsers);
router.post("/add", ApiController.addUser);
router.put("/update/:id", ApiController.updateUser);

export default router;
