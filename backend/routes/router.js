import { Router } from "express";
import UserController from "../controllers/userController.js";
import TeamController from "../controllers/teamController.js";

const router = Router();

router.get("/api/users", UserController.getAll);
router.get("/api/users/:id", UserController.getUser);
router.post("/api/users", UserController.createUser);

router.get("/api/teams", TeamController.getAll);
router.get("/api/teams/:id", TeamController.getTeam);

export default router;
