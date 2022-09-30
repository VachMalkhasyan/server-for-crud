import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

router.get('/g', getUsers);

router.post('/p', createUser);

router.get('/g/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/p/:id', updateUser);

export default router;
