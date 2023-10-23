import { Router } from "express";
import * as ApiController from "../controllers/api.Controller";

const router = Router();

router.get("/", ApiController.getUsers);
router.post("/add", ApiController.addUser);
router.put("/update/:id", ApiController.updateUser);
router.delete("/delete/:id", ApiController.deleteUser);

export default router;
