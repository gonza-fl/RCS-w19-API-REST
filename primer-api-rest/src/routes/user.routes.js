import { Router } from 'express'
import { controladorUser } from '../controllers/user.controllers.js';
import { userMiddleware } from '../middlewares/user.middlewares.js';
import { commonMiddlewares } from '../middlewares/common.middlewares.js';

const router = Router()

router.post('/', [userMiddleware, ...commonMiddlewares], controladorUser);

export default router
