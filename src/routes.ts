import {Router} from 'express'
import { CreateUserControler } from './controllers/CreateUserController'

export const router = Router()

const createUserControler = new CreateUserControler()

router.post('/users', createUserControler.handle)