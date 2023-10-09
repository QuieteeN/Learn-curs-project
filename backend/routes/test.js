import { Router } from "express";
import UserController from "../controllers/userController.js";

const router = Router();

router.get("/test", (req, res) => {
    res.json({ test: 42 });
});

router.get("/test/users", UserController.getAll);
router.get("/test/users/:id", UserController.getUser);
router.post("/test/users", UserController.createUser);

export default router;
