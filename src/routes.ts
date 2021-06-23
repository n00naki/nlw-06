import {Router} from 'express'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserControler } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

export const router = Router()

const createUserController = new CreateUserControler()
const createTagsController = new CreateTagController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagsController.handle)
