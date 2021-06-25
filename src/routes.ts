import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserControler } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

export const router = Router();

const createUserController = new CreateUserControler();
const createTagsController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagsController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createComplimentController.handle);
