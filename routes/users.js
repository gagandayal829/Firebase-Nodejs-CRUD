
import express from 'express'


import { createUser , getUsers , getByUserId , deleteUserById , patchUserById } from '../controllers/users.js';

const router = express.Router();



//All routes in here are starting with /users
router.get('/' , getUsers)

router.post('/', createUser)

router.get('/:id', getByUserId)

router.patch('/:id', patchUserById)

router.delete('/:id' , deleteUserById)






export default router;