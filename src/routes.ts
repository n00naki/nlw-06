import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserControler } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiveComplimentsControllers } from "./controllers/ListUserReceiveComplimentsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAutheticated } from "./middlewares/ensureAuthetucated";

export const router = Router();

const createUserController = new CreateUserControler();
const createTagsController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const lisUserSendComplimentsController =
  new ListUserReceiveComplimentsControllers();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsControllers();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle);
router.get("/users", ensureAutheticated, listUsersController.handle);

router.post(
  "/tags",
  ensureAutheticated,
  ensureAdmin,
  createTagsController.handle
);

router.get("/tags", ensureAutheticated, listTagsController.handle);

router.post("/login", authenticateUserController.handle);

router.post(
  "/compliments",
  ensureAutheticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/send",
  ensureAutheticated,
  lisUserSendComplimentsController.handle
);

router.get(
  "/users/compliments/receive",
  ensureAutheticated,
  listUserReceiveComplimentsController.handle
);
